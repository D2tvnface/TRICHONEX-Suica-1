import { NextResponse, type NextRequest } from "next/server";

const ORDER_URL = "https://affiliate-api.drcash.pro/v1/order";

type OrderFields = Partial<Record<string, string>>;

export async function POST(request: NextRequest) {
  const token = process.env.DRCASH_API_TOKEN;
  const streamCode = process.env.DRCASH_STREAM_CODE;

  if (!token || !streamCode) {
    return NextResponse.json(
      { error: "Server is not configured (missing DRCASH_API_TOKEN / DRCASH_STREAM_CODE)" },
      { status: 500 },
    );
  }

  const body = (await request.json()) as OrderFields;
  const query = request.nextUrl.searchParams;

  // POST fields win; the sub-params fall back to the landing URL's query string.
  const sub = (key: "sub1" | "sub2" | "sub3" | "sub4" | "sub5") =>
    body[key] || query.get(key) || null;

  const optional = (key: string) => body[key] || null;

  const payload = {
    stream_code: streamCode,
    client: {
      phone: body.phone ?? null,
      name: body.name ?? null,
      surname: optional("surname"),
      email: optional("email"),
      address: optional("address"),
      ip: optional("ip"),
      country: optional("country"),
      city: optional("city"),
      postcode: optional("postcode"),
    },
    sub1: sub("sub1"),
    sub2: sub("sub2"),
    sub3: sub("sub3"),
    sub4: sub("sub4"),
    sub5: sub("sub5"),
  };

  const upstream = await fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (upstream.status !== 200) {
    const text = await upstream.text();
    return NextResponse.json(
      { error: `Error: ${upstream.status} ${text}`.trim() },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
