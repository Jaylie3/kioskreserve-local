import { z } from "zod";

// ── Status unions ─────────────────────────────────────────────────────────────
export type ReservationStatus = "pending" | "confirmed" | "cancelled" | "completed" | "no_show";
export type OrderStatus = "draft" | "submitted" | "processing" | "ready" | "fulfilled" | "cancelled";
export type QueueStatus = "waiting" | "called" | "serving" | "done" | "skipped";

// ── Domain entities ───────────────────────────────────────────────────────────
export interface Reservation {
  id: string;
  guestName: string;
  partySize: number;
  date: string;           // ISO 8601 date string
  time: string;           // HH:mm
  status: ReservationStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface QueueEntry {
  id: string;
  ticketNumber: string;
  guestName?: string;
  status: QueueStatus;
  calledAt?: string;
  joinedAt: string;
}

// ── API envelopes ─────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  meta?: {
    page: number;
    pageSize: number;
    totalCount: number;
  };
}

export type ApiError = {
  success: false;
  error: string;
  code?: string;
};

// ── Form schemas (Zod) ────────────────────────────────────────────────────────
export const reservationFormSchema = z.object({
  guestName: z.string().min(1, "Name is required").max(100),
  partySize: z.coerce.number().int().min(1).max(20),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Must be HH:mm"),
  notes: z.string().max(500).optional(),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;

// ── Component prop interfaces ─────────────────────────────────────────────────
export interface KioskCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  icon: React.ElementType;
  href: string;
}
