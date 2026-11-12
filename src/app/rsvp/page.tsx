import Link from "next/link";

const events = [
  { id: "mehndi", name: "Mehndi", number: "01", accent: "saffron", copy: "Details to follow" },
  { id: "maiyaan", name: "Maiyaan", number: "02", accent: "rose", copy: "Details to follow" },
  { id: "jaggo", name: "Jaggo", number: "03", accent: "marigold", copy: "Details to follow" },
  { id: "wedding", name: "Wedding", number: "04", accent: "coral", copy: "Details to follow" },
  { id: "reception", name: "Reception", number: "05", accent: "saffron", copy: "Details to follow" },
] as const;

export default function RSVPPage() {
  return <main className="invitation revealed" id="celebrations">
    <div className="section-intro"><Link className="back-link" href="/">← Back to invitation</Link><p className="eyebrow">The celebrations</p><h1>Let the celebrations<br /><i>begin.</i></h1><p>Four celebrations. One unforgettable journey.<br />We&apos;d love to have you with us.</p></div>
    <div className="event-grid">{events.map((event) => <Link className={`event-card ${event.accent}`} href={`/rsvp/${event.id}`} key={event.id}><div className="event-art" aria-hidden="true"><span>{event.number}</span><strong>{event.name.slice(0, 2).toUpperCase()}</strong></div><div className="event-content"><p className="event-number">Chapter {event.number}</p><h2>{event.name}</h2><p className="event-detail">{event.copy}<br />Date · time · venue to follow</p><p className="event-cta">Open RSVP →</p></div></Link>)}</div>
    <footer>Sukhvir <span>+</span> Amrit <small>Made with love</small></footer>
  </main>;
}