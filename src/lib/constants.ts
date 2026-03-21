// ── App identity ────────────────────────────────────────────────────────────
export const APP_NAME = "KioskReserve Local" as const;
export const APP_VERSION = "0.1.0" as const;
export const APP_DESCRIPTION =
  "Offline-first bookings and queueing for clinics and government offices." as const;

// ── Route paths ──────────────────────────────────────────────────────────────
export const ROUTES = {
  HOME: "/",
  ORDER: "/order",
  RESERVATIONS: "/reservations",
  INFO: "/info",
  ADMIN: "/admin",
} as const;

// ── Pagination ────────────────────────────────────────────────────────────────
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

// ── Reservation / queue limits ────────────────────────────────────────────────
export const RESERVATION = {
  MAX_PARTY_SIZE: 20,
  ADVANCE_BOOKING_DAYS: 30,
  SESSION_TIMEOUT_MS: 60_000,
} as const;

// ── Feature flags ─────────────────────────────────────────────────────────────
export const FEATURES = {
  ENABLE_OFFLINE_MODE: true,
  ENABLE_QR_CODE: false,
  ENABLE_SMS_NOTIFICATIONS: false,
} as const;

// ── UI copy ───────────────────────────────────────────────────────────────────
export const COPY = {
  HERO_TITLE: APP_NAME,
  HERO_SUBTITLE:
    "Touch to begin. Fast, secure, and easy queueing and reservations for everyone.",
  ORDER_TITLE: "Order Now",
  ORDER_DESCRIPTION: "Place a new order instantly at the kiosk.",
  ORDER_CTA: "Start Order",
  RESERVATION_TITLE: "Reservations",
  RESERVATION_DESCRIPTION: "Book your spot or check your reservation.",
  RESERVATION_CTA: "Reserve Now",
  INFO_TITLE: "Information",
  INFO_DESCRIPTION: "Learn more about our services and support.",
  INFO_CTA: "More Info",
} as const;
