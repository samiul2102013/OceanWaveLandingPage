export const KAADAAK_URL =
  process.env.NEXT_PUBLIC_KAADAAK_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://www.kaazdaak.com");
