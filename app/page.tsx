const Arrow = () => <span aria-hidden="true">↗</span>;

type PhotoProps = { label: string; note: string; className?: string };
const PhotoPlaceholder = ({ label, note, className = "" }: PhotoProps) => (
  <figure className={`photo ${className}`} aria-label={`${label} — Platzhalter für authentische Fotografie`}>
    <div className="photo-tone" aria-hidden="true" />
    <figcaption><span>{label}</span><small>{note}</small></figcaption>
  </figure>
);

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="WetWorldWanderlust – Startseite"><span>WetWorld</span><span>Wanderlust</span></a>
        <nav className="desktop-nav" aria-label="Hauptnavigation"><a href="#story">Our story</a><a href="#together">Why two</a><a href="#work">Work</a></nav>
        <a className="header-cta" href="mailto:hello@wetworldwanderlust.com?subject=Tell%20us%20about%20your%20project">Tell us about your project <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Menü öffnen"><span /><span /></summary><nav aria-label="Mobile Navigation"><a href="#story">Our story</a><a href="#together">Why two</a><a href="#work">Work</a><a href="mailto:hello@wetworldwanderlust.com?subject=Tell%20us%20about%20your%20project">Tell us about your project <Arrow /></a></nav></details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal-text">
          <p className="eyebrow"><i /> Tanja & Christoph · WetWorldWanderlust</p>
          <h1>Two people.<br />One shared<br /><em>studio.</em></h1>
          <p className="hero-intro">We combine human strategy with modern execution to create digital experiences people can trust.</p>
          <a className="text-link" href="#story">Get to know us <Arrow /></a>
        </div>
        <PhotoPlaceholder className="hero-photo image-reveal" label="Tanja & Christoph, together" note="Natural moment · Southeast Asia · landscape 4:5" />
        <p className="hero-aside">Not a handoff between strategist and designer. One conversation, two perspectives, every decision made together.</p>
      </section>

      <section className="story section" id="story">
        <div className="section-label"><span>01</span><span>Our story</span></div>
        <div className="story-lead reveal-text"><p className="kicker">It started with how differently we see things.</p><h2>We are an Austrian couple building a life — and a studio — between worlds.</h2></div>
        <div className="story-grid">
          <PhotoPlaceholder className="story-photo image-reveal" label="A quiet working moment" note="Candid, unposed · home or café · landscape 3:2" />
          <div className="story-copy">
            <p>We did not set out to become a traditional agency. We started working together because we kept making each other&apos;s work better.</p>
            <p>Christoph would find the structure inside an idea. Tanja would notice what it needed to feel alive. One would ask whether it works. The other whether it feels right. Soon, those were no longer separate questions.</p>
            <p>Today, our home is in Southeast Asia. The distance from familiar routines has shaped how we work: curious, deliberate and close to the people behind every business.</p>
            <p className="story-signoff">WetWorldWanderlust is the place where our two ways of seeing become one shared standard.</p>
          </div>
        </div>
      </section>

      <section className="together section" id="together">
        <div className="section-label"><span>02</span><span>Why two people?</span></div>
        <div className="together-intro reveal-text"><h2>Because good work<br />needs more than<br />one way of seeing.</h2><p>Our differences are not divided into phases. They sit at the same table from the first question to the final detail.</p></div>
        <div className="people-grid">
          <article className="person-card">
            <PhotoPlaceholder className="person-photo christoph image-reveal" label="Christoph" note="Environmental portrait · thoughtful, natural light" />
            <div className="person-copy"><div><p className="kicker">Christoph sees</p><h3>The system<br />behind the idea.</h3></div><ul><li>Strategy</li><li>Systems</li><li>Structure</li><li>Logic</li></ul><p>He asks the questions that create focus: What matters? What connects? What will still work when the business grows?</p></div>
          </article>
          <article className="person-card tanja-card">
            <PhotoPlaceholder className="person-photo tanja image-reveal" label="Tanja" note="Environmental portrait · expressive, unposed" />
            <div className="person-copy"><div><p className="kicker">Tanja sees</p><h3>The person<br />inside the system.</h3></div><ul><li>Creativity</li><li>Emotion</li><li>Aesthetics</li><li>Humanity</li></ul><p>She asks the questions that create connection: How does this feel? What will people remember? Where does the brand become human?</p></div>
          </article>
        </div>
        <div className="both-statement reveal-text"><span aria-hidden="true">+</span><p>Structure without feeling stays distant.<br />Feeling without structure loses direction.</p><h2>Every project<br /><em>needs both.</em></h2></div>
      </section>

      <section className="technology section dark">
        <div className="section-label"><span>03</span><span>Human decisions, modern tools</span></div>
        <div className="technology-head reveal-text"><p className="kicker">Why we use AI</p><h2>Technology gives us more time for the work only people can do.</h2></div>
        <div className="technology-body"><p>We use AI to explore faster, test more possibilities and make execution more efficient. It can help us get to a better question sooner.</p><p>But it does not decide what your brand should stand for. It does not understand the conversation behind a hesitation, the ambition behind a business or the difference between polished and right.</p><blockquote>AI supports the process.<br /><em>We take responsibility for the result.</em></blockquote></div>
      </section>

      <section className="work section" id="work">
        <div className="section-label"><span>04</span><span>Selected work</span></div>
        <div className="work-heading reveal-text"><h2>Built around<br />a real reason.</h2><p>The format changes. Our standard does not: understand the human problem first, then design the right digital answer.</p></div>
        <div className="project-grid">
          <article className="project project-wide"><PhotoPlaceholder className="project-photo image-reveal" label="Selected project 01" note="Replace with real project imagery · landscape" /><div><span>Brand strategy · Website</span><h3>Turning expertise into something people can feel — and trust.</h3><p>Clarity before decoration. A digital presence built around the conversations the business needed to start.</p><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Ask us about this project <Arrow /></a></div></article>
          <article className="project"><PhotoPlaceholder className="project-photo image-reveal" label="Selected project 02" note="Replace with real project imagery · portrait" /><div><span>UX strategy · Digital product</span><h3>Making a complex product feel clear from the first interaction.</h3><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Ask us about this project <Arrow /></a></div></article>
          <article className="project"><PhotoPlaceholder className="project-photo warm image-reveal" label="Selected project 03" note="Replace with authentic UGC frame · portrait" /><div><span>UGC strategy · Content</span><h3>Creating the kind of content people choose to believe.</h3><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Ask us about this project <Arrow /></a></div></article>
        </div>
      </section>

      <section className="offer section">
        <div className="section-label"><span>05</span><span>What we create</span></div>
        <div className="offer-intro reveal-text"><h2>Different outcomes.<br />The same two people.</h2><p>You never disappear into a team or get passed from strategy to execution. Whatever we create, you work directly with both of us.</p></div>
        <div className="offer-grid"><article><span>01</span><p className="kicker">Digital products</p><h3>Websites, landing pages and funnels</h3><p>For businesses that need their digital presence to explain their value, earn confidence and make the next step feel natural.</p></article><article><span>02</span><p className="kicker">UGC creation</p><h3>Product videos, social content and campaigns</h3><p>For brands that need content to feel like a human recommendation — not another advertisement asking for attention.</p></article></div>
      </section>

      <section className="process section dark">
        <div className="section-label"><span>06</span><span>What working together feels like</span></div>
        <div className="process-heading reveal-text"><h2>Close enough<br />to understand.<br /><em>Clear enough to trust.</em></h2><p>There is no account layer between us and no black box around the work. You know who is thinking about your project, what we are deciding and why.</p></div>
        <div className="process-promises"><article><span>01</span><h3>You speak with us.</h3><p>The people in the first conversation are the people doing the work.</p></article><article><span>02</span><h3>You see the thinking.</h3><p>We share work early, explain decisions and invite the right feedback at the right time.</p></article><article><span>03</span><h3>You know where we are.</h3><p>Honest communication, clear next steps and no avoidable surprises.</p></article></div>
      </section>

      <section className="pre-cta section">
        <div className="section-label"><span>07</span><span>Before we begin</span></div>
        <div className="pre-cta-grid"><PhotoPlaceholder className="closing-photo image-reveal" label="Tanja & Christoph, off duty" note="Warm candid moment · no camera awareness · landscape" /><div className="pre-cta-copy reveal-text"><p className="kicker">A note from both of us</p><h2>We will care about the details because we care about what they mean for you.</h2><p>We take on a small number of projects so we can stay close to each one. If we work together, you get our attention, our honest opinion and a result we are both willing to put our names on.</p><p className="signature">Tanja & Christoph</p></div></div>
      </section>

      <section className="cta-section">
        <p className="eyebrow"><i /> Maybe we are the right two people.</p>
        <h2>Tell us what you&apos;re<br />trying to <em>change.</em></h2>
        <p className="cta-copy">No polished brief needed. Start with the challenge, the ambition or the idea you cannot stop thinking about.</p>
        <a className="primary-cta" href="mailto:hello@wetworldwanderlust.com?subject=Let%27s%20build%20something%20together"><span>Start a conversation</span><Arrow /></a>
      </section>

      <footer><div className="footer-top"><a className="wordmark" href="#top"><span>WetWorld</span><span>Wanderlust</span></a><p>Tanja & Christoph<br />Austria · Southeast Asia</p><p>Human strategy.<br />Modern execution.</p></div><div className="footer-bottom"><span>© 2026 WetWorldWanderlust</span><div><a href="mailto:hello@wetworldwanderlust.com">Email</a><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
