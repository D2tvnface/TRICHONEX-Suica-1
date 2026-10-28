import { NextResponse, type NextRequest } from "next/server";

const ORDER_URL = "https://affiliate-api.drcash.pro/v1/order";
const UPSTREAM_TIMEOUT_MS = 15000;
const PHONE_PATTERN = /^\+?[0-9\s()-]{6,20}$/;

type OrderFields = Partial<Record<string, unknown>>;

// Trims a submitted value and returns null when it is missing or too long.
function field(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function clientIp(request: NextRequest): string | null {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null
  );
}

export async function POST(request: NextRequest) {
  const token = process.env.DRCASH_API_TOKEN;
  const streamCode = process.env.DRCASH_STREAM_CODE;

  if (!token || !streamCode) {
    console.error("order: DRCASH_API_TOKEN or DRCASH_STREAM_CODE is not set");
    return NextResponse.json(
      { error: "Server is not configured" },
      { status: 500 },
    );
  }

  let body: OrderFields;
  try {
    body = (await request.json()) as OrderFields;
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const name = field(body.name, 100);
  const phone = field(body.phone, 20);
  if (!name || !phone || !PHONE_PATTERN.test(phone)) {
    return NextResponse.json(
      { error: "Podaj imię i poprawny numer telefonu." },
      { status: 400 },
    );
  }

  const query = request.nextUrl.searchParams;

  // POST fields win; the sub-params fall back to the landing URL's query string.
  const sub = (key: "sub1" | "sub2" | "sub3" | "sub4" | "sub5") =>
    field(body[key], 255) ?? field(query.get(key), 255);

  const payload = {
    stream_code: streamCode,
    client: {
      phone,
      name,
      surname: field(body.surname, 100),
      email: field(body.email, 254),
      address: field(body.address, 200),
      ip: clientIp(request),
      country: field(body.country, 100),
      city: field(body.city, 100),
      postcode: field(body.postcode, 20),
    },
    sub1: sub("sub1"),
    sub2: sub("sub2"),
    sub3: sub("sub3"),
    sub4: sub("sub4"),
    sub5: sub("sub5"),
  };

  const unavailable = NextResponse.json(
    { error: "Nie udało się wysłać zamówienia. Spróbuj ponownie." },
    { status: 502 },
  );

  let upstream: Response;
  try {
    upstream = await fetch(ORDER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch (error) {
    console.error("order: upstream request failed", error);
    return unavailable;
  }

  // Any 2xx is a successful order. The upstream body is logged by status only,
  // because it can echo customer data and is never shown to the visitor.
  if (!upstream.ok) {
    console.error("order: upstream rejected the order", upstream.status);
    return unavailable;
  }

  return NextResponse.json({ ok: true });
}
