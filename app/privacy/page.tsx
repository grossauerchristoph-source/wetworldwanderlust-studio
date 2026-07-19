import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

export const metadata: Metadata = {
  title: "Privacy | WetWorldWanderlust Studios",
  robots: { index: false, follow: true },
};

// DEVELOPMENT NOTE — LAUNCH BLOCKER:
// This page is not ready for production. It must be completed from the final
// technical setup and verified business details before the public launch.
export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/"><ArrowIcon direction="west" /> WetWorldWanderlust</Link>
      <header><p className="eyebrow"><i /> Legal placeholder</p><h1>Privacy</h1></header>
      <p className="legal-warning">Development notice: This page is not ready for production. The final data flows and responsible-party details must be verified before launch.</p>
      <section>
        <h2>Data controller</h2>
        <dl>
          <div><dt>Name</dt><dd>[Full legal name required]</dd></div>
          <div><dt>Postal address</dt><dd>[Full business address required]</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:wetworldwanderlust@gmail.com">wetworldwanderlust@gmail.com</a></dd></div>
          <div><dt>Privacy contact</dt><dd>[Confirm whether a separate privacy contact is required]</dd></div>
        </dl>
      </section>
      <section>
        <h2>Website data processing</h2>
        <p>[Document the verified hosting setup, server logs, purposes, legal bases, retention periods, recipients, processing locations and any international transfers.]</p>
      </section>
      <section>
        <h2>Contact requests</h2>
        <p>[Document how email inquiries are processed, the applicable legal basis, recipients and retention period.]</p>
      </section>
      <section>
        <h2>Cookies, local storage and external services</h2>
        <p>[Confirm the final site’s actual use of cookies, local storage, embedded media, externally hosted assets, analytics or other third-party services. Describe only services that are actually used.]</p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>[Add the rights, complaint route and competent supervisory authority required by the applicable privacy law.]</p>
      </section>
    </main>
  );
}
