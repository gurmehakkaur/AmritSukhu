# Sukhvir & Amrit Wedding RSVP Website — Coding Agent Instructions

## 1. Project Goal

Build a beautiful, mobile-first wedding invitation and RSVP website for **Sukhvir & Amrit**.

The website should feel like a premium, contemporary digital wedding invitation rather than a generic event website.

The core requirement is:

- Guests land on a beautiful invitation landing page.
- They click/open the invitation envelope.
- They arrive at an events/RSVP experience showing all four wedding events.
- A guest can RSVP to **all four events in one submission/session**.
- The frontend must be custom-designed and must **not send guests to a visible Google Form**.
- Google Forms/Google Sheets will be used underneath as the RSVP data collection/storage mechanism.
- There is **no login, account, password, or guest portal**.

---

## 2. Wedding

Couple:

**Sukhvir & Amrit**

Events:

1. Mehndi
2. Jaggo
3. Anand Karaj
4. Reception

Exact dates, times, venues, wording, and photos will be supplied later. Do not invent them.

---

## 3. Preferred Tech Stack

Use:

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** for deployment
- **Google Forms + Google Sheets** for RSVP collection
- Canva-generated assets for visual design

Use a modern Next.js App Router architecture unless the existing project dictates otherwise.

Keep dependencies minimal.

Do not introduce a database, authentication provider, CMS, or paid backend unless explicitly requested.

---

## 4. User Experience

### Landing Page

The landing page should be extremely elegant and minimal.

Initial content:

**Sukhvir & Amrit**

Potential supporting copy can be added later.

The centerpiece is a Canva-designed aesthetic wedding invitation/envelope graphic.

The visual should communicate something similar to:

> YOU'RE INVITED

The envelope/invitation is clickable.

Clicking it takes the guest to the wedding celebrations / RSVP experience.

Below the hero, include a tasteful couple-photo section.

The landing page should NOT feel like a traditional business website.

Avoid excessive navigation, buttons, cards, or text.

Think:

- editorial
- romantic
- contemporary
- premium
- South Asian wedding aesthetic
- lots of whitespace
- strong typography
- subtle animation

---

## 5. Events / RSVP Experience

The second major screen contains all four events.

Suggested introductory copy:

> Let the celebrations begin.

Optional supporting copy:

> Four celebrations. One unforgettable journey. We'd love to have you with us.

Do not treat the four events as completely separate website experiences.

The guest should be able to RSVP for **all four events simultaneously**.

### Event Cards

Display:

### Mehndi
- Canva Mehndi graphic
- Event name
- Date
- Time
- Venue
- Short description
- RSVP selection

### Jaggo
- Canva Jaggo graphic
- Event name
- Date
- Time
- Venue
- Short description
- RSVP selection

### Anand Karaj
- Canva Anand Karaj graphic
- Event name
- Date
- Time
- Venue
- Short description
- RSVP selection

### Reception
- Canva Reception graphic
- Event name
- Date
- Time
- Venue
- Short description
- RSVP selection

The exact event information will be added later.

---

# 6. IMPORTANT: Simultaneous RSVP

This is a core product requirement.

Do NOT build:

Mehndi → submit → Jaggo → submit → Anand → submit → Reception → submit

Instead, the guest should complete **one RSVP flow for all four events**.

Conceptually:

```text
Guest information
       ↓
Mehndi attendance
       ↓
Jaggo attendance
       ↓
Anand Karaj attendance
       ↓
Reception attendance
       ↓
Optional guest/dietary information
       ↓
ONE FINAL SUBMISSION
```

The interface can present the events as four beautiful cards/sections on one page, or as an elegant multi-step form, but the guest must be able to submit all four RSVP decisions together.

Recommended default: a beautiful single-page RSVP experience with four event sections and one final submit button.

---

# 7. RSVP Information

At minimum, collect:

### Guest information

- Full name
- Phone number

### For each event

- Attending: Yes / No

Potentially collect event-specific guest count if required later.

Do not assume that every event has the same guest count.

The exact RSVP questions will be finalized before implementation.

Potential future fields:

- Number of guests
- Dietary preference
- Dietary restrictions
- Message to couple

Keep the form extensible.

---

# 8. Google Forms / Google Sheets Integration

Google Forms is an implementation detail, not part of the visible user experience.

The guest must NEVER be redirected to a Google Forms page.

The desired architecture is:

```text
Custom React RSVP UI
        ↓
Form submission layer
        ↓
Google Form
        ↓
Google Sheet
```

The Google Sheet should ultimately contain structured RSVP records.

A preferred row structure is:

```text
Timestamp
Guest Name
Phone Number
Mehndi RSVP
Jaggo RSVP
Anand Karaj RSVP
Reception RSVP
Guest Count / Additional Information
Dietary Preference
Message
```

The exact columns can be finalized when the Google Form is created.

Important:

- Do not expose Google Form URLs in the UI.
- Do not iframe the Google Form unless there is a strong technical reason and the result remains visually acceptable.
- Prefer submitting directly to the Google Form's underlying form endpoint if technically reliable.
- If browser/CORS restrictions prevent direct client-side submission, use an appropriate lightweight server-side Next.js route.
- Never put sensitive credentials or secrets in client-side code.
- Keep the integration easy to replace later.

---

# 9. RSVP Confirmation

After successful submission, show a custom confirmation screen.

Example direction:

> You're on the list ♡

> Thank you for letting us celebrate these special moments with you.

Do not redirect to Google Forms or Google Sheets.

The confirmation should feel like part of the wedding invitation.

---

# 10. No Login System

Do NOT implement:

- Authentication
- Accounts
- Passwords
- OTP
- Guest dashboards
- Guest login
- RSVP history
- RSVP status tracking

The guest only provides their name and phone number as RSVP information.

There is no requirement to let guests return later and edit their RSVP.

---

# 11. Design Direction

The visual identity will be created partly in Canva and integrated into the website.

The coding agent should build the frontend so that Canva assets can easily be swapped in later.

Expected Canva assets:

```text
/assets/
  hero/
    envelope.webp
    invitation.webp

  couple/
    couple-1.webp
    couple-2.webp
    couple-3.webp

  events/
    mehndi.webp
    jaggo.webp
    anand-karaj.webp
    reception.webp

  decorative/
    floral-corner.svg
    divider.svg
    pattern.svg
    monogram.svg
```

Exact filenames may change.

Use optimized formats where possible:

- WebP for photographs
- SVG for vector/decorative graphics
- PNG only when transparency is required

Do not hard-code asset paths throughout components. Centralize them where practical.

---

# 12. Responsive Design

This is a **mobile-first website**.

A large percentage of guests will open it from a phone, potentially through WhatsApp.

Prioritize:

1. Mobile
2. Tablet
3. Desktop

The site must look intentional at all breakpoints.

Do not simply shrink the desktop design onto mobile.

Important mobile considerations:

- Envelope must be easy to tap
- Event cards must be comfortable to interact with
- RSVP controls must be large enough
- Typography must remain elegant but readable
- Images must not create excessive loading time
- Forms must be easy to complete with a phone keyboard

---

# 13. Animation

Use subtle animations.

Good examples:

- Envelope opening/reveal transition
- Gentle fade-ins
- Image reveals
- Soft page transitions
- Hover effects on desktop
- Scroll-triggered section reveals

Avoid:

- Excessive bouncing
- Large motion effects
- Distracting particle effects
- Slow intro animations that block the user

The site should feel sophisticated, not like a template with animation everywhere.

---

# 14. Accessibility

Implement reasonable accessibility from the beginning.

Requirements:

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Proper labels for all form inputs
- Alt text for meaningful images
- Decorative images marked appropriately
- Sufficient text contrast
- Buttons must have clear accessible labels

The envelope cannot rely only on hover behavior.

---

# 15. Performance

Wedding guests may access the website on mobile data.

Optimize for:

- Fast first load
- Compressed images
- Lazy loading below-the-fold images
- Next.js image optimization where appropriate
- Minimal JavaScript
- Minimal dependencies

Do not load huge Canva exports unnecessarily.

---

# 16. Suggested Project Structure

A starting structure:

```text
src/
  app/
    page.tsx
    rsvp/
      page.tsx
    api/
      rsvp/
        route.ts

  components/
    landing/
      HeroInvitation.tsx
      CoupleGallery.tsx

    events/
      EventCard.tsx
      EventsSection.tsx

    rsvp/
      RSVPForm.tsx
      GuestInformation.tsx
      EventRSVP.tsx
      RSVPConfirmation.tsx

    ui/
      Button.tsx
      Input.tsx
      Select.tsx

  lib/
    google-form.ts
    validation.ts

  data/
    events.ts

public/
  assets/
    hero/
    couple/
    events/
    decorative/
```

This is only a suggested structure. Adapt it to the actual Next.js setup.

---

# 17. Event Data

Keep event information data-driven.

Do NOT hard-code event details into four separate components.

Example conceptual structure:

```ts
type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  time?: string;
  venue?: string;
  description?: string;
  image: string;
};
```

Then:

```ts
const events = [
  {
    id: "mehndi",
    name: "Mehndi",
    ...
  },
  {
    id: "jaggo",
    name: "Jaggo",
    ...
  },
  {
    id: "anand-karaj",
    name: "Anand Karaj",
    ...
  },
  {
    id: "reception",
    name: "Reception",
    ...
  }
];
```

This will make the site much easier to update once the real wedding details are supplied.

---

# 18. Form Data Model

Use a single RSVP payload.

Conceptually:

```ts
type RSVPSubmission = {
  name: string;
  phone: string;

  events: {
    mehndi: boolean;
    jaggo: boolean;
    anandKaraj: boolean;
    reception: boolean;
  };

  guestCount?: number;
  dietaryPreference?: string;
  dietaryRestrictions?: string;
  message?: string;
};
```

Do not assume these optional fields must be included in the final form. They are placeholders for future requirements.

---

# 19. Validation

Validate on both client and server where applicable.

At minimum:

- Name required
- Phone number required
- All four event RSVP choices must have a value
- Prevent duplicate accidental submissions from repeated button clicks
- Show clear validation messages
- Show a loading state while submitting
- Show a friendly error if submission fails

Never silently fail.

---

# 20. Security / Privacy

The website will collect names and phone numbers.

Therefore:

- Do not expose the Google Sheet publicly.
- Do not expose private Google Form configuration unnecessarily.
- Do not log phone numbers to console in production.
- Do not put secrets in `NEXT_PUBLIC_*` environment variables.
- Use environment variables for any server-side configuration.
- Keep collected information limited to what the wedding actually needs.

---

# 21. Deployment

Target deployment:

**Vercel**

The final website should be accessible through a custom domain.

Development should work locally with:

```bash
npm run dev
```

Production build must pass:

```bash
npm run build
```

No TypeScript errors should remain.

---

# 22. Development Phases

Do not attempt to build everything at once.

### Phase 1 — Foundation

- Create Next.js project
- Set up Tailwind
- Establish typography
- Establish global spacing
- Establish color palette
- Create responsive shell

### Phase 2 — Landing Page

Build:

- Sukhvir & Amrit hero
- Envelope graphic placeholder
- Envelope interaction
- Couple image section

Use placeholders until Canva assets are available.

### Phase 3 — Events

Build:

- Four event cards
- Event data model
- Responsive layout
- Canva graphic placeholders
- Event details

### Phase 4 — RSVP

Build:

- Guest information
- Four simultaneous event RSVP selections
- Optional RSVP fields
- Validation
- Single submit action
- Loading state
- Confirmation state

### Phase 5 — Google Integration

Connect the custom RSVP frontend to Google Forms/Sheets.

Test:

- All fields arrive correctly
- Correct event values are recorded
- Multiple guests can submit
- Failed requests are handled
- No Google Form UI is exposed

### Phase 6 — Polish

- Canva assets
- Animations
- Typography refinement
- Mobile optimization
- Accessibility
- Performance optimization

### Phase 7 — Deployment

- Vercel
- Production environment variables
- Custom domain
- Final RSVP test
- Mobile testing
- Final content review

---

# 23. Agent Behavior / Coding Rules

The coding agent should:

1. **Ask before making major architectural changes.**
2. Prefer simple solutions over unnecessary infrastructure.
3. Keep the code maintainable and understandable.
4. Avoid adding dependencies unless they solve a real problem.
5. Make components reusable where it provides genuine value.
6. Keep event data separate from presentation.
7. Never invent wedding details.
8. Use placeholders for missing dates, venues, photos, and copy.
9. Keep the frontend beautiful even before final Canva assets arrive.
10. Test the RSVP flow after implementing it.
11. Never expose private Google credentials.
12. Never implement authentication unless explicitly requested.
13. Never redirect users to Google Forms.
14. Preserve the single-submission, all-four-events RSVP requirement.
15. Optimize for mobile first.

---

# 24. Current Scope — What We Are NOT Building

Do not build these unless explicitly requested later:

- Guest login
- Guest accounts
- RSVP status dashboard
- RSVP editing
- Admin dashboard
- Seating chart
- Wedding registry
- Chat
- Comments
- Messaging
- Email marketing
- SMS notifications
- Payment processing
- Complex database
- CMS
- Multi-language support

The first version should be **small, beautiful, fast, and reliable**.

---

# 25. Definition of Done

The project is ready for launch when:

- [ ] Landing page displays Sukhvir & Amrit beautifully
- [ ] Envelope/invitation is clickable
- [ ] Clicking it opens the events/RSVP experience
- [ ] All four events are displayed
- [ ] Event-specific graphics can be supplied from Canva
- [ ] Guest can RSVP to all four events in one flow
- [ ] Guest name and phone number are collected
- [ ] One final submission sends the complete RSVP
- [ ] Guest never sees Google Forms
- [ ] RSVP data arrives correctly in Google Sheets
- [ ] Confirmation screen appears after successful submission
- [ ] Form errors are handled gracefully
- [ ] Website is responsive
- [ ] Website works well on mobile
- [ ] Images are optimized
- [ ] Accessibility basics are implemented
- [ ] Production build succeeds
- [ ] Website is deployed on Vercel
- [ ] Custom domain works
- [ ] End-to-end RSVP has been tested in production

---

# 26. Design Philosophy

The most important principle:

**This should feel like opening Sukhvir & Amrit's wedding invitation — not filling out a form.**

Google Forms is infrastructure.

The guest should experience:

**Invitation → Discover the celebrations → RSVP beautifully → You're on the list ♡**

Everything visible to the guest should support that feeling.
