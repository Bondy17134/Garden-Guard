export default function Home() {
  return <main>
    <section className="hero" id="top">
      <nav><a className="brand" href="#top">Garden <i>Guard</i></a><a href="#sightings">Night sightings</a></nav>
      <div className="copy"><p className="eyebrow">After-dark garden observation</p><h1>Meet the neighbours who visit after midnight.</h1><p>Garden Guard is a small wildlife-monitoring experiment: a camera, curious local animals, and a better way to understand what happens around the garden while we sleep.</p><a className="button" href="#sightings">Explore the sightings <span>↓</span></a></div>
      <div className="moon" aria-hidden="true"/><div className="stars" aria-hidden="true">✦ · ✧ · ✦</div><p className="hero-note">Live from the garden bed</p>
    </section>

    <section className="sightings" id="sightings">
      <header><p className="eyebrow">Field notes · Night one</p><h2>A possum visits the garden after dark.</h2><p>Real moments from the garden turn an ordinary camera into a growing record of the wildlife that shares this space.</p></header>
      <div className="photo-grid">
        <figure className="photo-card large"><img src="/possum-food-tray.jpg" alt="A possum standing at a food tray at night"/><figcaption><span>01</span> Midnight visitor · food tray</figcaption></figure>
        <figure className="photo-card"><img src="/possum-carrot.jpg" alt="A possum eating a carrot in the garden at night"/><figcaption><span>02</span> Late snack · carrot encounter</figcaption></figure>
      </div>
    </section>

    <section className="story" id="story"><div><p className="eyebrow">The beginning</p><h2>It started with a garden bed and an overnight surprise.</h2></div><div className="story-detail"><p>We planted something new. By morning, it was gone. The likely culprit? A bold bush turkey from the nearby bushland. Rather than simply guessing, this project asks a better question: what is actually happening out there at night?</p><aside>“The garden is part of their neighbourhood too.”</aside></div></section>

    <section className="dark"><p className="eyebrow">The idea</p><h2>Observe first. Protect plants gently.</h2><div className="steps"><article><b>01</b><h3>Watch</h3><p>A weatherproof camera keeps an eye on the garden bed after dark.</p></article><article><b>02</b><h3>Recognise</h3><p>Computer vision spots bush turkeys, possums, and other visitors.</p></article><article><b>03</b><h3>Understand</h3><p>Each night becomes a simple story of who came by and when.</p></article></div></section>
    <section className="future"><div className="future-copy"><p className="eyebrow">Future sightings</p><h2>From bush turkeys to possums, every visitor tells a story.</h2><p>Garden Guard starts as a local experiment, with a future as a calm, useful tool for anyone who wants to protect plants and understand the wildlife around them.</p></div></section><footer><a className="brand" href="#top">Garden <i>Guard</i></a><span>Watching with curiosity, not judgement.</span></footer>
  </main>
}
