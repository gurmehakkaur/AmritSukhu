"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="landing-page">
      <section className="hero" aria-labelledby="couple-name">
        <div className="hero-mark" aria-hidden="true">S <span>+</span> A</div>
        <p className="eyebrow">A celebration in four chapters</p>
        <h1 id="couple-name">Sukhvir <i>&</i> Amrit</h1>
        <p className="hero-date">With joyful hearts, we invite you</p>
        <Link className={`envelope ${opened ? "is-open" : ""}`} href="/rsvp" onClick={() => setOpened(true)} aria-label="Open the wedding invitation">
          <span className="envelope-inner"><small>Tap to open</small></span>
          <span className="envelope-flap" aria-hidden="true" />
          <span className="invitation-label">YOU ARE<br />INVITED</span>
          <span className="envelope-seal" aria-hidden="true">S <b>+</b> A</span>
        </Link>
        <p className="scroll-note">Open our invitation <span>↓</span></p>
      </section>
    </main>
  );
}
