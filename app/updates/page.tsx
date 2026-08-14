export default function ProjectUpdates() {
  return (
    <main className="updates-page">
      <nav className="updates-nav">
        <a className="brand" href="/">Garden <i>Guard</i></a>
        <a className="updates-back" href="/">Back to the project</a>
      </nav>

      <section className="updates-hero">
        <p className="eyebrow">Project updates</p>
        <p className="updates-date">August 2026 · Milestone 02</p>
        <h1>The garden camera is installed. Local YOLO is now logging visits.</h1>
        <p className="updates-lede">Garden Guard has moved from a concept and a public website into a working local computer-vision experiment with event snapshots stored on the home server.</p>
      </section>

      <section className="updates-evidence" aria-labelledby="installation-title">
        <div className="updates-caption">
          <p className="eyebrow">Field installation</p>
          <h2 id="installation-title">A dedicated eye on the garden bed.</h2>
          <p>The camera now overlooks the garden and nearby bushland. It supplies a live RTSP video stream to the local Garden Guard computer-vision pipeline.</p>
          <dl className="updates-facts">
            <div><dt>Camera</dt><dd>Outdoor Reolink camera</dd></div>
            <div><dt>Input</dt><dd>Live RTSP camera stream</dd></div>
            <div><dt>Purpose</dt><dd>Observe after-dark visitors</dd></div>
          </dl>
        </div>
        <figure className="camera-frame">
          <img src="/garden-camera.jpg" alt="Garden Guard camera installed above the garden" />
          <figcaption><span>01</span> Camera installed and pointed toward the garden</figcaption>
        </figure>
      </section>

      <section className="updates-detection" aria-labelledby="detection-title">
        <figure className="detection-frame">
          <img src="/yolo-person-detection.jpg" alt="YOLO detecting a person in the garden camera stream with 0.90 confidence" />
          <figcaption><span>02</span> Best frame selected from a detected visit</figcaption>
        </figure>
        <div className="updates-caption">
          <p className="eyebrow">First saved event</p>
          <h2 id="detection-title">A visit detected, labelled, and stored automatically.</h2>
          <p>This successful test detected a person at 0.90 confidence. Garden Guard keeps the best frame from a visit, adds the YOLO bounding box and confidence score, then saves it locally and copies it to the home server.</p>
          <dl className="updates-facts">
            <div><dt>Model</dt><dd>YOLO Nano object detection</dd></div>
            <div><dt>Result</dt><dd>Person · 0.90 confidence</dd></div>
            <div><dt>Storage</dt><dd>Local snapshot + home server</dd></div>
          </dl>
        </div>
      </section>

      <section className="updates-next">
        <p className="eyebrow">What this unlocks</p>
        <h2>From camera frames to meaningful garden observations.</h2>
        <div className="updates-grid">
          <article><b>01</b><h3>Train for garden visitors</h3><p>Test and improve detection for bush turkeys, possums, and other animals around the garden bed.</p></article>
          <article><b>02</b><h3>Save useful events</h3><p>Store confirmed sightings with a time, species, confidence score, and image or video reference.</p></article>
          <article><b>03</b><h3>Learn from the nights</h3><p>Turn the event history into patterns, research notes, and eventually gentle, rule-based protection.</p></article>
        </div>
      </section>

      <section className="updates-note"><p>Garden Guard processes the camera feed locally. The long-term goal is to understand the wildlife sharing the garden—not simply to chase it away.</p></section>
      <footer><a className="brand" href="/">Garden <i>Guard</i></a><a href="/">Explore the main project</a></footer>
    </main>
  )
}
