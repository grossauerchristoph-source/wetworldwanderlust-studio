const Arrow = () => <span aria-hidden="true">↗</span>;

const PhotoPlaceholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`photo ${className}`} role="img" aria-label={`${label} — Platzhalter für ein echtes Foto`}>
    <div className="photo-grain" />
    <span>{label}</span>
  </div>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="WetWorldWanderlust – Startseite">
          <span>WetWorld</span><span>Wanderlust</span>
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a>
        </nav>
        <a className="header-cta" href="mailto:hello@wetworldwanderlust.com?subject=Project%20inquiry">Start a project <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label="Menü öffnen"><span /><span /></summary>
          <nav aria-label="Mobile Navigation">
            <a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a>
            <a href="mailto:hello@wetworldwanderlust.com?subject=Project%20inquiry">Start a project <Arrow /></a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Independent digital studio · Austria / Southeast Asia</p>
        <h1>Digital experiences<br />made <em>human.</em></h1>
        <div className="hero-bottom">
          <p>We are Tanja & Christoph. We combine human strategy, thoughtful design and modern technology to build digital experiences people trust.</p>
          <a className="text-link" href="#about">Meet the people behind the work <Arrow /></a>
        </div>
        <div className="hero-mark" aria-hidden="true">W³</div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label"><span>01</span><span>Who we are</span></div>
        <div className="intro-copy">
          <p className="kicker">Two minds. One shared standard.</p>
          <h2>Strategy needs feeling.<br />Creativity needs direction.</h2>
          <p className="body-copy">Our best work happens in the space between both. Christoph brings structure, systems and clarity. Tanja brings emotion, aesthetics and humanity. Every decision is made together — not passed from one desk to another.</p>
        </div>
        <div className="portrait-grid">
          <PhotoPlaceholder label="Tanja — Creative direction" className="portrait-a" />
          <PhotoPlaceholder label="Christoph — Strategy & systems" className="portrait-b" />
        </div>
      </section>

      <section className="belief section dark">
        <div className="section-label"><span>02</span><span>What we believe</span></div>
        <p className="belief-lead">Technology makes us faster.<br /><em>People make it better.</em></p>
        <div className="belief-grid">
          <p>AI is part of our process, not the author of it. It helps us explore, refine and execute. The judgment, taste and responsibility stay with us.</p>
          <p>Because your business does not need more output. It needs the right decisions — made by people who understand what is at stake.</p>
        </div>
      </section>

      <section className="principles section">
        <div className="section-label"><span>03</span><span>Our principles</span></div>
        <ol>
          <li><span>01</span><h3>We only publish work<br />we would buy ourselves.</h3></li>
          <li><span>02</span><h3>Quality earns trust.<br />Trust creates growth.</h3></li>
          <li><span>03</span><h3>Clear communication<br />prevents bad surprises.</h3></li>
          <li><span>04</span><h3>Technology accelerates.<br />Humans decide.</h3></li>
        </ol>
      </section>

      <section className="work section" id="work">
        <div className="section-label"><span>04</span><span>Selected work</span></div>
        <div className="work-heading"><h2>Work with<br />a reason.</h2><p>Selected digital experiences built to turn attention into understanding — and understanding into action.</p></div>
        <div className="project-grid">
          <article className="project project-wide"><PhotoPlaceholder label="Case study — premium service brand" /><div><span>Brand strategy · Website</span><h3>Reframing expertise<br />as an experience.</h3><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Request case study <Arrow /></a></div></article>
          <article className="project"><PhotoPlaceholder label="Case study — digital product" /><div><span>UX strategy · Digital product</span><h3>Making the complex<br />feel remarkably clear.</h3><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Request case study <Arrow /></a></div></article>
          <article className="project project-warm"><PhotoPlaceholder label="Case study — creator campaign" /><div><span>UGC strategy · Content</span><h3>Content that feels<br />like a recommendation.</h3><a href="mailto:hello@wetworldwanderlust.com?subject=Case%20study%20request">Request case study <Arrow /></a></div></article>
        </div>
      </section>

      <section className="services section dark" id="services">
        <div className="section-label"><span>05</span><span>What we build</span></div>
        <div className="service-row"><span className="service-no">A</span><div><p className="kicker">Digital products</p><h2>Websites that do<br />more than exist.</h2><p>Positioning, landing pages, websites and funnels designed around the decisions your customers actually make.</p><ul><li>Strategy & positioning</li><li>UX / UI design</li><li>Development</li></ul></div></div>
        <div className="service-row ugc"><span className="service-no">B</span><div><p className="kicker">UGC creation</p><h2>Content people<br />choose to believe.</h2><p>Human product stories, social content and UGC campaigns that feel native to the platform and true to the brand.</p><ul><li>Creative concept</li><li>Product videos</li><li>Campaign content</li></ul></div></div>
      </section>

      <section className="process section">
        <div className="section-label"><span>06</span><span>How we work</span></div>
        <div className="process-heading"><h2>No black box.<br />No handoffs.<br /><em>Just clarity.</em></h2><p>You work directly with both of us, from first conversation to final detail. A small team means short paths, honest answers and fewer things lost in translation.</p></div>
        <ol className="process-list">
          <li><span>01</span><h3>Understand</h3><p>We listen before we prescribe. Your goals, audience and context shape every next step.</p></li>
          <li><span>02</span><h3>Decide</h3><p>We turn the noise into a focused strategy — with clear priorities and a shared definition of success.</p></li>
          <li><span>03</span><h3>Create</h3><p>Strategy, design and technology evolve together. You see the work early and understand every decision.</p></li>
          <li><span>04</span><h3>Refine</h3><p>We test the details, sharpen the experience and only publish what meets our shared standard.</p></li>
        </ol>
      </section>

      <section className="cta-section">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s build something<br /><em>worth trusting.</em></h2>
        <a className="circle-cta" href="mailto:hello@wetworldwanderlust.com?subject=Let%27s%20build%20something%20together"><span>Send us your project</span><Arrow /></a>
      </section>

      <footer>
        <div className="footer-top"><a className="wordmark" href="#top"><span>WetWorld</span><span>Wanderlust</span></a><p>Two people. One studio.<br />Human strategy, amplified by technology.</p></div>
        <div className="footer-bottom"><span>© 2026 WetWorldWanderlust</span><div><a href="mailto:hello@wetworldwanderlust.com">Email</a><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </main>
  );
}
