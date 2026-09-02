import './Diagrams.css'

/* Hand-built SVG schematics. No illustration library, no generated art.
   Shared conventions: solid line = the happy path, dashed = feedback or exception. */

const Frame = ({ caption, minWidth = 720, viewBox, children }) => (
  <figure className="dgm">
    <div className="dgm-scroll">
      <svg
        viewBox={viewBox}
        style={{ minWidth }}
        role="img"
        aria-label={caption}
        className="dgm-svg"
      >
        <defs>
          <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5"
                  markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {children}
      </svg>
    </div>
    <figcaption>{caption}</figcaption>
  </figure>
)

const Box = ({ x, y, w = 152, h = 82, num, title, sub, tone = 'plain' }) => {
  // Stack whatever is present and centre it vertically, so short boxes never overflow.
  const lines = (num ? 1 : 0) + 1 + (sub ? 1 : 0)
  const top = y + (h - (lines * 18 - 4)) / 2 + 12
  let row = 0
  const next = () => top + row++ * 18
  return (
    <g className={`dgm-box dgm-box--${tone}`}>
      <rect x={x} y={y} width={w} height={h} rx="4" />
      {num && <text className="dgm-num" x={x + 14} y={next()}>{num}</text>}
      <text className="dgm-title" x={x + 14} y={next()}>{title}</text>
      {sub && <text className="dgm-sub" x={x + 14} y={next()}>{sub}</text>}
    </g>
  )
}

const Arrow = ({ d, dashed, label, lx, ly }) => (
  <g className={`dgm-arrow ${dashed ? 'is-dashed' : ''}`}>
    <path d={d} markerEnd="url(#ar)" />
    {label && <text className="dgm-lbl" x={lx} y={ly}>{label}</text>}
  </g>
)

/* ---------------------------------------------------------------- AI agents */

export function AgentFlow() {
  return (
    <Frame
      viewBox="0 0 900 340"
      minWidth={780}
      caption="How an AI agent actually runs a task — and where a person still decides."
    >
      <Box x={8}   y={40} num="01" title="Work arrives" sub="Email, scan, upload, API" />
      <Box x={200} y={40} num="02" title="Agent reads it" sub="Type, fields, context" />
      <Box x={392} y={40} num="03" title="Checks your rules" sub="Totals, IDs, policy" />

      {/* confidence gate */}
      <g className="dgm-gate">
        <path d="M624 81 L676 40 L728 81 L676 122 Z" />
        <text className="dgm-gate-t" x="676" y="76">Confident</text>
        <text className="dgm-gate-t" x="676" y="92">enough?</text>
      </g>

      <Box x={748} y={40} w={144} h={82} title="Done" sub="Into your system" tone="good" />
      <Box x={596} y={228} w={180} h={80} title="Human review queue" sub="A person decides" tone="flag" />

      <Arrow d="M160 81 L196 81" />
      <Arrow d="M352 81 L388 81" />
      <Arrow d="M544 81 L620 81" />
      <Arrow d="M732 81 L744 81" />
      
      <Arrow d="M676 126 L676 224" label="not confident" lx={686} ly={182} />
      <Arrow d="M596 268 L300 268 L300 128" dashed label="correction feeds back" lx={310} ly={258} />

      <text className="dgm-note" x="8" y="330">
        You set the confidence threshold. Every decision, and its inputs, is written to an audit log.
      </text>
    </Frame>
  )
}

/* -------------------------------------------------------------- Digitization */

export function PaperToData() {
  return (
    <Frame
      viewBox="0 0 900 268"
      minWidth={760}
      caption="From a storeroom of boxes to a searchable, permission-controlled archive."
    >
      {/* stack of paper */}
      <g className="dgm-paper">
        <rect x="18" y="70" width="96" height="118" rx="3" />
        <rect x="28" y="58" width="96" height="118" rx="3" />
        <rect x="38" y="46" width="96" height="118" rx="3" />
        <line x1="54" y1="76" x2="118" y2="76" />
        <line x1="54" y1="92" x2="118" y2="92" />
        <line x1="54" y1="108" x2="100" y2="108" />
        <line x1="54" y1="124" x2="118" y2="124" />
      </g>
      <text className="dgm-sub" x="18" y="212">Physical records</text>
      <text className="dgm-note" x="18" y="230">Boxes, bound volumes,</text>
      <text className="dgm-note" x="18" y="246">large-format drawings</text>

      <Arrow d="M148 106 L192 106" />
      <Box x={200} y={62} num="01" title="Prepare & capture" sub="Barcoded batches" />
      <Arrow d="M360 106 L396 106" />
      <Box x={404} y={62} num="02" title="OCR & index" sub="Full text + your fields" />
      <Arrow d="M564 106 L600 106" />
      <Box x={608} y={62} w={140} num="03" title="Verify" sub="Defect rate reported" />

      {/* result */}
      <g className="dgm-box dgm-box--good">
        <rect x="768" y="62" width="124" height="82" rx="4" />
        <text className="dgm-title" x="782" y="96">Searchable</text>
        <text className="dgm-sub" x="782" y="116">PDF/A archive</text>
      </g>
      <Arrow d="M748 106 L764 106" />

      <Arrow d="M470 150 L470 196" dashed />
      <text className="dgm-lbl" x="482" y="180">chain of custody logged at every hand-off</text>
    </Frame>
  )
}

/* ---------------------------------------------------------- Build engagement */

export function BuildTimeline() {
  const phases = [
    { x: 8,   w: 150, n: '01', t: 'Discovery', s: 'Weeks 1–2' },
    { x: 178, w: 150, n: '02', t: 'Design', s: 'Weeks 3–4' },
    { x: 348, w: 340, n: '03', t: 'Build in two-week slices', s: 'You see working software every fortnight' },
    { x: 708, w: 184, n: '04', t: 'Rollout & handover', s: 'Training, docs, support' }
  ]
  return (
    <Frame
      viewBox="0 0 900 208"
      minWidth={780}
      caption="A build you can watch. No six-month silence, no surprise at the end."
    >
      <line className="dgm-axis" x1="8" y1="40" x2="892" y2="40" />
      {phases.map(p => (
        <g key={p.n}>
          <line className="dgm-tick" x1={p.x} y1="32" x2={p.x} y2="48" />
          <Box x={p.x} y={62} w={p.w} h={86} num={p.n} title={p.t} sub={p.s} />
        </g>
      ))}
      {/* demo markers inside build phase */}
      {[420, 500, 580, 660].map((x, i) => (
        <g key={x} className="dgm-demo">
          <circle cx={x} cy="168" r="5" />
          <text className="dgm-note" x={x - 12} y="192">D{i + 1}</text>
        </g>
      ))}
      <text className="dgm-lbl" x="348" y="168" dy="4">demos →</text>
    </Frame>
  )
}

/* ------------------------------------------------------------- Data pipeline */

export function DataPipeline() {
  return (
    <Frame
      viewBox="0 0 900 250"
      minWidth={740}
      caption="Every field is either validated by rule or looked at by a person. Nothing is guessed."
    >
      <Box x={8} y={54} w={160} title="Mixed sources" sub="Forms, PDFs, exports, scans" />
      <Arrow d="M176 95 L212 95" />
      <Box x={220} y={54} w={160} num="01" title="Extract" sub="Model reads each field" h={82} />
      <Arrow d="M388 95 L424 95" />
      <Box x={432} y={54} w={160} num="02" title="Validate" sub="Your rules, not ours" h={82} />

      <Arrow d="M600 95 L640 95" label="passes" lx={602} ly={82} />
      <Box x={648} y={54} w={160} h={82} title="Clean record" sub="Loaded to your schema" tone="good" />

      <Arrow d="M512 140 L512 186" label="fails or low confidence" lx={524} ly={168} />
      <Box x={432} y={190} w={160} h={56} title="Reviewer fixes it" tone="flag" />
      <Arrow d="M592 218 L716 218 L716 140" dashed />

      <text className="dgm-note" x="8" y="238">
        Financial and regulated data gets a second independent pass.
      </text>
    </Frame>
  )
}

/* ------------------------------------------------------------ Timezone band */

export function TimezoneOverlap() {
  // 24h track: x = 96 + hour * 32 (hour 0..24 → 96..864); 96px left gutter for row labels
  const hx = (h) => 96 + h * 32
  const ticks = [0, 4, 8, 12, 16, 20, 24]
  const fmt = (h) => (h === 0 || h === 24 ? '12a' : h === 12 ? '12p' : h > 12 ? `${h - 12}p` : `${h}a`)

  return (
    <Frame
      viewBox="0 0 900 232"
      minWidth={760}
      caption="Four hours of live overlap with US Eastern time, every working day."
    >
      {ticks.map(h => (
        <g key={h}>
          <line className="dgm-grid" x1={hx(h)} y1="44" x2={hx(h)} y2="176" />
          <text className="dgm-note" x={hx(h) - 9} y="34">{fmt(h)}</text>
        </g>
      ))}

      {/* US working day 9-17 ET */}
      <text className="dgm-lbl" x="8" y="76">US ET</text>
      <rect className="dgm-track" x="96" y="58" width="768" height="26" rx="3" />
      <rect className="dgm-work dgm-work--us" x={hx(9)} y="58" width={hx(17) - hx(9)} height="26" rx="3" />
      <text className="dgm-inbar" x={hx(9) + 12} y="76">9am – 5pm, their desk</text>

      {/* Diginathi working day in ET terms: 22:30 prev - 06:30, plus extended to 13:00 */}
      <text className="dgm-lbl" x="8" y="140">Diginathi</text>
      <rect className="dgm-track" x="96" y="122" width="768" height="26" rx="3" />
      <rect className="dgm-work dgm-work--in" x="96" y="122" width={hx(13) - 96} height="26" rx="3" />
      <text className="dgm-inbar" x={hx(1)} y="140">our day, ending 1pm ET</text>

      {/* overlap */}
      <rect className="dgm-overlap" x={hx(9)} y="52" width={hx(13) - hx(9)} height="102" rx="3" />
      <line className="dgm-tick" x1={hx(9)} y1="154" x2={hx(9)} y2="176" />
      <line className="dgm-tick" x1={hx(13)} y1="154" x2={hx(13)} y2="176" />
      <text className="dgm-overlap-t" x={hx(11)} y="198">4 hours live overlap</text>

      <text className="dgm-note" x="8" y="224">
        Outside that window: a written handover lands in your inbox before you start.
      </text>
    </Frame>
  )
}

/* ------------------------------------------------------------------ DMS map */

export function DmsLayers() {
  const rows = [
    { t: 'Capture', s: 'Upload, scan, email-in, API' },
    { t: 'Control', s: 'Folders, metadata, classification, retention' },
    { t: 'Route', s: 'Multi-step approvals, escalation, timeouts' },
    { t: 'Prove', s: 'Hash-chained audit trail, exportable evidence' }
  ]
  return (
    <Frame
      viewBox="0 0 640 330"
      minWidth={520}
      caption="Four layers. Most systems give you the first two and stop."
    >
      {rows.map((r, i) => (
        <g key={r.t}>
          <Box x={40} y={12 + i * 82} w={560} h={70} num={`0${i + 1}`} title={r.t} sub={r.s} />
          {i < rows.length - 1 && <Arrow d={`M320 ${82 + i * 82} L320 ${90 + i * 82}`} />}
        </g>
      ))}
    </Frame>
  )
}
