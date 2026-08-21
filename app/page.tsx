"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const galleryRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationFrame = 0;
    const updateReveal = () => {
      animationFrame = 0;
      const galleryTop = gallery.getBoundingClientRect().top;
      const revealStart = window.innerHeight * 0.42;
      const revealDistance = Math.max(280, window.innerHeight * 0.4);
      const progress = Math.min(1, Math.max(0, (revealStart - galleryTop) / revealDistance));

      gallery.style.setProperty("--snapshot-opacity", progress.toFixed(3));
      gallery.style.setProperty("--snapshot-offset", `${(1 - progress) * 110}%`);
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return <main>
    <section className="hero" id="top">
      <header className="hero-header"><a className="mobile-header-logo" href="#top" aria-label="Garden Guard home"><img src="/garden-guard-logo.png" alt="Garden Guard shield logo"/></a><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span className="sr-only">{menuOpen ? "Close" : "Open"} navigation</span><span aria-hidden="true"/></button><nav className={`hero-nav ${menuOpen ? "is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation"><a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#story" onClick={() => setMenuOpen(false)}>How It Works</a><a className="header-logo" href="#top" aria-label="Garden Guard home"><img src="/garden-guard-logo.png" alt="Garden Guard shield logo"/></a><a href="/updates" onClick={() => setMenuOpen(false)}>Roadmap</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="visit-project" href="/updates" onClick={() => setMenuOpen(false)}>Visit Project</a></nav></header>
      <div className="hero-content"><h1>Garden<br/>Guard</h1><p className="hero-summary">AI wildlife monitoring that helps us understand what visits the garden — before deciding what to protect.</p><a className="hero-scroll" href="#story">Scroll for more <span aria-hidden="true">↓</span></a></div>
    </section>

    <section ref={galleryRef} className="story" id="story" aria-label="Garden Guard wildlife snapshots"><div className="snapshot-gallery"><figure className="snapshot-card snapshot-card-turkey"><img src="/snapshot-bush-turkey.png" alt="Bush turkey captured near the Garden Guard plant bed"/></figure><figure className="snapshot-card snapshot-card-possum"><img src="/snapshot-possum.png" alt="Possum captured in the Garden Guard garden at night"/></figure><p><span>These snapshots are captured automatically as wildlife passes through the garden, helping build a real-world dataset for future AI model training.</span></p></div></section>

    <section className="camera-showcase" aria-label="Garden Guard camera setup and footage"><div className="camera-showcase-media"><figure className="camera-showcase-card"><video controls playsInline preload="metadata" src="/garden-guard-clips.mp4">Your browser does not support the Garden Guard video.</video><figcaption>Garden activity clips</figcaption></figure><span className="camera-showcase-connector" aria-hidden="true">✦</span><figure className="camera-showcase-card"><img src="/camera-field.jpg" alt="Garden Guard camera installed above the garden"/><figcaption>Field camera</figcaption></figure></div></section>

    <section className="about" id="about"><img className="about-photo" src="/bondy.jpg" alt="Bondy, creator of Garden Guard"/><div><p className="eyebrow">About the project owner</p><h2>Meet Bondy: builder, curious observer, and the person behind Garden Guard.</h2><p>Garden Guard began after Bondy&apos;s sister&apos;s plant disappeared overnight. Rather than simply blaming the wildlife, Bondy decided to find out who was visiting and why.</p><p>The project brings together everyday gardening, local computer vision, and a long-term interest in sharing space with the animals around us.</p><div className="social-links"><a className="social linkedin" href="https://www.linkedin.com/in/kunanon-thoonsap-48b56b239/" target="_blank" rel="noreferrer" aria-label="Visit Bondy on LinkedIn"><img src="/linkedin.webp" alt=""/><span>LinkedIn</span></a><span className="social youtube" aria-label="YouTube channel coming soon"><img src="/youtube.webp" alt=""/><span>YouTube soon</span></span></div></div></section>
    <section className="care"><p className="eyebrow">Wildlife care</p><h2>Curiosity first. Gentle action second.</h2><p>Garden Guard is designed to record and understand animal activity. Any future deterrents will be short, harmless, rate-limited, and always secondary to simple garden design choices.</p></section>
    <section className="future"><div className="future-copy"><p className="eyebrow">Get involved</p><h2>Help shape the future of Garden Guard.</h2><p>Follow the research journal, share your own garden sightings, or become an early tester when the prototype is ready.</p><a className="future-link" href="#top">Follow the project</a></div></section><footer><a className="brand" href="#top" aria-label="Garden Guard home"><img src="/garden-guard-logo.png" alt="Garden Guard"/></a><div className="footer-social"><span>Follow the project</span><a className="social linkedin" href="https://www.linkedin.com/in/kunanon-thoonsap-48b56b239/" target="_blank" rel="noreferrer" aria-label="Visit Bondy on LinkedIn"><img src="/linkedin.webp" alt=""/></a><span className="social youtube" aria-label="YouTube channel coming soon"><img src="/youtube.webp" alt=""/></span></div></footer>
  </main>
}
