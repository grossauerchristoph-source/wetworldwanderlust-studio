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
        <a className="header-cta" href="mailto:hello@wetworldwanderlust.com?subject=Let%27s%20start%20a%20conversation">Start a conversation <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Menü öffnen"><span /><span /></summary><nav aria-label="Mobile Navigation"><a href="#story">Our story</a><a href="#together">Why two</a><a href="#work">Work</a><a href="mailto:hello@wetworldwanderlust.com?subject=Tell%20us%20about%20your%20project">Tell us about your project <Arrow /></a></nav></details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal-text">
          <p className="eyebrow"><i /> Tanja & Christoph · WetWorldWanderlust</p>
          <h1>Two people.<br />One shared<br /><em>studio.</em></h1>
          <p className="hero-brandline">Human judgment. Modern execution.</p>
          <p className="hero-positioning">We help businesses earn trust through thoughtful digital experiences.</p>
          <p className="hero-intro">We are a married couple from Austria, now living in Southeast Asia. Human strategy and modern execution come together in every decision we make.</p>
          <div className="hero-actions"><a className="text-link" href="#story">Get to know us <Arrow /></a><a className="primary-link" href="mailto:hello@wetworldwanderlust.com?subject=Let%27s%20build%20something%20together">Let&apos;s build something together <Arrow /></a></div>
        </div>
        <PhotoPlaceholder className="hero-photo image-reveal" label="Tanja & Christoph, together" note="Hero replacement · candid shared moment · natural light · Southeast Asia · portrait 4:5" />
        <div className="hero-aside"><p>Human strategy</p><p>Modern execution</p><span>One conversation, two perspectives, every decision made together.</span></div>
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
        <div className="together-intro reveal-text"><h2>Because good work<br />needs more than<br />one way of seeing.</h2><p>Our differences do not wait for a handoff. They challenge, sharpen and complete each other — at the same table, from the first question to the final detail.</p></div>
        <div className="people-grid">
          <article className="person-card">
            <PhotoPlaceholder className="person-photo christoph image-reveal" label="Christoph" note="Environmental portrait · thoughtful, natural light" />
            <div className="person-copy"><div><p className="kicker">Christoph sees</p><h3>The system<br />behind the idea.</h3></div><ul><li>Strategy</li><li>Systems</li><li>Structure</li><li>Logic</li></ul><p>He asks the questions that create focus: What matters? What connects? What will still work when the business grows?</p></div>
          </article>
          <article className="person-card tanja-card">
            <PhotoPlaceholder className="person-photo tanja image-reveal" label="Tanja" note="Environmental portrait · expressive, unposed" />
            <div className="person-copy"><div><p className="kicker">Tanja sees</p><h3>The person<br />inside the system.</h3></div><ul><li>Creativity</li><li>Emotion</li><li>Aesthetics</li><li>Humanity</li></ul><p>She asks the questions that create connection: How does this feel? What will people remember? Where does the brand become human?</p></div>
          </article>
          <p className="people-bridge"><span>Different instincts.</span><span>One shared table.</span></p>
        </div>
        <div className="both-statement reveal-text"><small>Two perspectives · one shared standard</small><p>Structure without feeling stays distant.<br />Feeling without structure loses direction.</p><h2>Every project<br /><em>needs both.</em></h2></div>
      </section>

      <section className="technology section dark">
        <div className="section-label"><span>03</span><span>Human decisions, modern tools</span></div>
        <div className="technology-head reveal-text"><p className="kicker">Why we use AI</p><h2>Technology gives us more time for the work only people can do.</h2></div>
        <div className="technology-body"><p>We use AI to explore faster, test more possibilities and make execution more efficient. It can help us get to a better question sooner.</p><p>But it does not decide what your brand should stand for. It does not understand the conversation behind a hesitation, the ambition behind a business or the difference between polished and right.</p><blockquote>AI supports the process.<br /><em>We take responsibility for the result.</em></blockquote></div>
      </section>

      <section className="work section" id="work">
        <div className="section-label"><span>04</span><span>Selected Projects</span></div>
        <div className="work-heading reveal-text"><h2>Three projects.<br />Three human<br />problems.</h2><p>Websites and UGC begin in different formats, but they earn trust the same way: by understanding what people need to feel before they act.</p></div>
        <div className="project-grid">
          <article className="project"><PhotoPlaceholder className="project-photo motionlab image-reveal" label="MotionLab Physiotherapie" note="Final project media · treatment in motion · real practice environment · landscape" /><div className="project-content"><span>Strategy · UX/UI · Website</span><h3>MotionLab<br />Physiotherapie</h3><dl><div><dt>Challenge</dt><dd>Make professional expertise feel clear and human before the first appointment.</dd></div><div><dt>Solution</dt><dd>A movement-led identity and focused journey built around patient questions, not practice jargon.</dd></div><div><dt>Result</dt><dd>A calmer first impression, faster orientation and more confidence in taking the next step.</dd></div></dl><a href="mailto:hello@wetworldwanderlust.com?subject=MotionLab%20case%20study">Explore the project <Arrow /></a></div></article>
          <article className="project"><PhotoPlaceholder className="project-photo wilfried image-reveal" label="Wilfried & Söhne Steuerberatung" note="Final project media · authentic office detail · heritage and modernity · landscape" /><div className="project-content"><span>Positioning · Website · Development</span><h3>Wilfried & Söhne<br />Steuerberatung</h3><dl><div><dt>Challenge</dt><dd>Show a trusted family practice as contemporary without losing its history or credibility.</dd></div><div><dt>Solution</dt><dd>An editorial digital presence balancing personal continuity with precise, modern clarity.</dd></div><div><dt>Result</dt><dd>More character, easier navigation and a brand that feels established rather than old-fashioned.</dd></div></dl><a href="mailto:hello@wetworldwanderlust.com?subject=Wilfried%20%26%20S%C3%B6hne%20case%20study">See the process <Arrow /></a></div></article>
          <article className="project ugc-project"><PhotoPlaceholder className="project-photo ugc-visual image-reveal" label="WetWorldWanderlust UGC Showcase" note="Final showcase media · authentic vertical video stills · natural product use · 9:16 source" /><div className="project-content"><span>Concept · Production · Campaign content</span><h3>Our best UGC<br />showcase</h3><dl><div><dt>Challenge</dt><dd>Create short-form content that earns attention without feeling like another polished advertisement.</dd></div><div><dt>Solution</dt><dd>Human concepts, natural delivery and platform-native storytelling shaped around real product moments.</dd></div><div><dt>Result</dt><dd>Credible content that feels like a recommendation and can work across an entire campaign.</dd></div></dl><a href="mailto:hello@wetworldwanderlust.com?subject=UGC%20showcase">Watch the showcase <Arrow /></a></div></article>
        </div>
      </section>

      <section className="offer section">
        <div className="section-label"><span>05</span><span>Two core disciplines</span></div>
        <div className="offer-intro reveal-text"><h2>Trust is built<br />in the experience<br /><em>and the story.</em></h2><p>Digital products and UGC are equal parts of our studio. One shapes the place people arrive. The other shapes the moments that bring them there.</p></div>
        <div className="offer-grid"><article><span>01 / Digital experiences</span><p className="kicker">Strategy · Design · Development</p><h3>Websites, landing pages and funnels</h3><p>We turn complex value into a clear, credible experience — designed around the questions people ask before they trust a business.</p><a href="mailto:hello@wetworldwanderlust.com?subject=Digital%20product%20project">Build the experience <Arrow /></a></article><article><span>02 / Human content</span><p className="kicker">Concept · Production · Campaign</p><h3>UGC, product videos and social content</h3><p>We create natural, platform-aware stories that help brands sound like people and products feel part of real life.</p><a href="mailto:hello@wetworldwanderlust.com?subject=UGC%20project">Tell the human story <Arrow /></a></article></div>
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
        <div className="cta-kicker"><p className="eyebrow"><i /> Maybe we are the right two people.</p><span>One thoughtful project at a time.</span></div>
        <h2>Tell us what you&apos;re<br />trying to <em>change.</em></h2>
        <div className="cta-bottom"><p className="cta-copy">No polished brief needed. Start with the challenge, the ambition or the idea you cannot stop thinking about.</p><div className="cta-action"><a className="primary-cta" href="mailto:hello@wetworldwanderlust.com?subject=Let%27s%20build%20something%20together"><span>Start a conversation</span><Arrow /></a><p className="cta-note">The best work begins when both sides can speak honestly.</p></div></div>
      </section>

      <footer><div className="footer-top"><a className="wordmark" href="#top"><span>WetWorld</span><span>Wanderlust</span></a><p>Tanja & Christoph<br />Austria · Southeast Asia</p><p>Human strategy.<br />Modern execution.</p></div><div className="footer-bottom"><span>© 2026 WetWorldWanderlust</span><div><a href="mailto:hello@wetworldwanderlust.com">Email</a><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
