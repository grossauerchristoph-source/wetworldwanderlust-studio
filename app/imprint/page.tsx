import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

export const metadata: Metadata = {
  title: "Imprint | WetWorldWanderlust Studios",
  robots: { index: false, follow: true },
};

// DEVELOPMENT NOTE — LAUNCH BLOCKER:
// This page is not ready for production until every bracketed placeholder below
// has been replaced with verified business information for the applicable jurisdiction.
export default function ImprintPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/"><ArrowIcon direction="west" /> WetWorldWanderlust</Link>
      <header><p className="eyebrow"><i /> Legal placeholder</p><h1>Imprint</h1></header>
      <p className="legal-warning">Development notice: This page is not ready for production. Verified business information must be supplied before launch.</p>
      <section>
        <h2>Provider information</h2>
        <dl>
          <div><dt>Responsible person or business</dt><dd>[Full legal name required]</dd></div>
          <div><dt>Legal form</dt><dd>[Required if applicable]</dd></div>
          <div><dt>Serviceable postal address</dt><dd>[Full business address required]</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:wetworldwanderlust@gmail.com">wetworldwanderlust@gmail.com</a></dd></div>
          <div><dt>Telephone</dt><dd>[Business telephone number required if applicable]</dd></div>
        </dl>
      </section>
      <section>
        <h2>Registrations and professional information</h2>
        <p>[Confirm which registration, licensing, supervisory-authority, professional-rule and tax-identification disclosures are legally required. Add only verified information.]</p>
      </section>
      <section>
        <h2>Additional legally required disclosures</h2>
        <p>[Confirm jurisdiction-specific requirements, including responsibility for editorial content and consumer dispute-resolution information, if applicable.]</p>
      </section>
    </main>
  );
}
