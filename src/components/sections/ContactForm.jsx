import { useState } from "react";
import ButtonLink from "../ui/ButtonLink.jsx";

export default function ContactForm() {
  const [state, setState] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setState("loading");
    window.setTimeout(() => setState("sent"), 900);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-premium ring-1 ring-borderline sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-muted">
          Name
          <input required className="rounded-md border border-borderline bg-paper px-4 py-3 outline-none transition focus:border-tile" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted">
          Phone
          <input required className="rounded-md border border-borderline bg-paper px-4 py-3 outline-none transition focus:border-tile" placeholder="Best contact number" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted sm:col-span-2">
          Email
          <input type="email" required className="rounded-md border border-borderline bg-paper px-4 py-3 outline-none transition focus:border-tile" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-muted sm:col-span-2">
          Project details
          <textarea required rows="5" className="rounded-md border border-borderline bg-paper px-4 py-3 outline-none transition focus:border-tile" placeholder="Tell us about the roof issue, access, preferred services and rough timing." />
        </label>
      </div>
      <button disabled={state === "loading"} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-tile px-7 text-sm font-extrabold text-white transition hover:bg-lead-900 disabled:cursor-wait disabled:opacity-70">
        {state === "loading" ? "Sending enquiry..." : state === "sent" ? "Enquiry received" : "Send enquiry"}
      </button>
      {state === "sent" && <p className="mt-4 text-sm font-semibold text-tile">Thanks, your enquiry has been received.</p>}
    </form>
  );
}
