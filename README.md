 # TechFest 2026 — University Tech Fest / ICPC Event Portal

A frontend-only, responsive event portal for a university Tech Fest featuring an
ICPC-style Programming Contest ("CodeStorm") and a 24-hour Hackathon ("HackNova").

Built with **React + Vite + Tailwind CSS**. No backend, database, authentication,
or payment logic is included — all content is placeholder data living in `src/data/`.

---

## ✨ Features

- Fully responsive (mobile / tablet / desktop)
- 6 pages: Home, Programming Contest, Hackathon, Timeline, FAQ, Contact
- Home page composes: Navbar, Hero, Countdown, Event Cards, Timeline, Schedule,
  Sponsors, FAQ, Contact, Footer
- Reusable UI components (`Button`, `Card`, `Badge`, `SectionHeading`, `Container`)
- Client-side routing via `react-router-dom`
- Live countdown timer to the contest start date
- Accessible focus states, semantic HTML, keyboard-friendly interactions

---

## 🎨 Theme

| Token          | Value      | Usage                              |
|----------------|------------|-------------------------------------|
| `primary`      | `#092763`  | Brand navy — headers, nav, buttons |
| `primary-dark` | `#05173D`  | Dark section backgrounds           |
| `accent`       | `#F4B942`  | Gold — CTAs, highlights, badges    |
| `surface`      | `#F7F8FA`  | Page background                    |
| `ink`          | `#10131A`  | Body text                          |
| `success`      | `#2FBF71`  | "Accepted"-style verdict accents   |

Fonts: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (timers,
schedule times, code-flavored labels).

---

## 📁 Project Structure