"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useParams } from "next/navigation";

const events = {
  mehndi: { name: "Mehndi", number: "01", accent: "saffron", copy: "Details to follow" },
  maiyaan: { name: "Maiyaan", number: "02", accent: "rose", copy: "Details to follow" },
  jaggo: { name: "Jaggo", number: "03", accent: "marigold", copy: "Details to follow" },
  wedding: { name: "Wedding", number: "04", accent: "coral", copy: "Details to follow" },
  reception: { name: "Reception", number: "05", accent: "saffron", copy: "Details to follow" },
} as const;

export default function EventRsvpPage() {
  const { event: eventId } = useParams<{ event: keyof typeof events }>();
  const event = events[eventId] ?? events.mehndi;
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [message, setMessage] = useState("");

  async function submitRsvp(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (!name.trim() || !phone.trim() || !attendance) {
      setError("Please add your details and choose an attendance answer.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/rsvp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, phone, event: eventId, events: { [eventId]: attendance }, message }) });
      if (!response.ok) throw new Error("RSVP could not be sent");
      setSent(true);
    } catch {
      setError("We could not send that just now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return <main className={`event-rsvp ${event.accent}`}>
    <div className="event-rsvp-header"><Link className="back-link" href="/rsvp">← All celebrations</Link><p className="eyebrow">Chapter {event.number}</p><h1>{event.name}</h1><p>{event.copy}<br />Date · time · venue to follow</p></div>
    <form className="rsvp event-rsvp-form" onSubmit={submitRsvp}>{!sent ? <><div className="rsvp-heading"><p className="eyebrow">Your reply</p><h2>Will you join us?</h2><p>Replying for {event.name}.</p></div><div className="fields"><label>Full name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" /></label><label>Phone number<input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your number" type="tel" autoComplete="tel" /></label></div><fieldset className="single-attendance"><legend>{event.name}</legend><div className="choice-group"><button type="button" className={attendance === "yes" ? "selected" : ""} onClick={() => setAttendance("yes")} aria-pressed={attendance === "yes"}>Joyfully attending</button><button type="button" className={attendance === "no" ? "selected" : ""} onClick={() => setAttendance("no")} aria-pressed={attendance === "no"}>Unable to attend</button></div></fieldset><label className="message-field">A note for the couple <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Leave a little love (optional)" rows={3} /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="submit-button" type="submit" disabled={submitting}>{submitting ? "Sending your reply..." : "Send my RSVP  →"}</button></> : <div className="confirmation"><span className="confirmation-mark">✦</span><p className="eyebrow">Your reply is in</p><h2>You&apos;re on<br /><i>the list.</i></h2><p>Thank you for letting us celebrate these special moments with you.</p></div>}</form>
    <footer>Sukhvir <span>+</span> Amrit <small>Made with love</small></footer>
  </main>;
}