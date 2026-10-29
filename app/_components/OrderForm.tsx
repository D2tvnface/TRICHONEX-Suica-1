"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

const inputStyle: CSSProperties = {
  margin: "5px 0",
  border: "none",
  borderBottom: "1px solid lightgray",
  textAlign: "center",
  padding: "10px 20px",
  width: "85%",
  borderRadius: 25,
  fontSize: 20,
  boxShadow: "0px 3px 0px 0px #808080",
};

const submitStyle: CSSProperties = {
  padding: "12px 24px",
  width: "85%",
  fontSize: 22,
  cursor: "pointer",
  fontWeight: 600,
  color: "#fff",
  backgroundColor: "#c01e14",
  margin: "30px 0px",
  borderRadius: 10,
  border: "none",
  WebkitBoxShadow: "0 15px 5px -4px rgba(192, 30, 20, 0.75)",
  boxShadow: "0 15px 5px -4px rgb(74, 24, 21, 0.75)",
};

const columnStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export default function OrderForm() {
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSending(true);

    const fields = Object.fromEntries(new FormData(event.currentTarget));

    try {
      // Keep the landing URL's query string (sub1..sub5 tracking params).
      const response = await fetch(`/api/order${window.location.search}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error: string };
        setError(data.error);
        setSending(false);
        return;
      }

      window.location.assign("/thanks");
    } catch {
      setError("Nie udało się wysłać zamówienia. Spróbuj ponownie.");
      setSending(false);
    }
  }

  return (
    <div className="cont" id="form">
      <div className="right">
        <div
          style={{
            ...columnStyle,
            justifyContent: "center",
            margin: "20px auto",
            width: "100%",
          }}
        >
          <p style={{ fontSize: 20, margin: 0 }}>
            <b>Pakiet próbny TRICHONEX</b>
          </p>
          <p style={{ margin: "4px 0 10px" }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: "green" }}>0 zł</span>
            <span> + koszt dostawy</span>
          </p>
          <form
            id="formularz1"
            className="formularz-walidacja__form orderForm"
            style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
            onSubmit={handleSubmit}
          >
            <div className="form-input" style={columnStyle}>
              <input
                className="input-name"
                type="text"
                name="name"
                style={inputStyle}
                required
                autoComplete="name"
                placeholder="Imię i nazwisko"
              />
              <input
                className="phone-country"
                type="tel"
                id="phone"
                name="phone"
                style={inputStyle}
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="Numer telefonu"
                onKeyUp={(event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(
                    /\s/,
                    "",
                  );
                }}
                minLength={5}
                title="Wpisz numer telefonu zgodnie z przykładem: +48XXXXXXXXX lub XXXXXXXXX"
              />
            </div>
            <div className="formularz-walidacja__form--submit submit-container">
              <button
                type="submit"
                className="submit-container--btn-2"
                style={submitStyle}
                disabled={sending}
              >
                {sending ? "Wysyłanie…" : "Odbieram pakiet próbny"}
              </button>
            </div>
            {error && <p style={{ color: "#dd1616" }}>{error}</p>}
            <p style={{ fontSize: 14, margin: "0 0 6px" }}>
              Bez przedpłaty. Konsultant oddzwoni, aby potwierdzić zamówienie.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
