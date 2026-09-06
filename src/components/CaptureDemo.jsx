import { useEffect, useRef, useState } from 'react'
import './CaptureDemo.css'

/* The hero's one moving part: a document being read.
   This is the company's actual work — paper in, structured fields out, and the
   uncertain one handed to a person. The 71% row is the point, not a blemish.

   The highlight on the page is drawn by the marked-up value itself rather than
   by absolute coordinates, so it can never drift out of register at any width. */

const FIELDS = [
  { key: 'supplier',   value: 'Northgate Supply Co.' , conf: 99 },
  { key: 'invoice_no', value: 'NG-4471'              , conf: 98 },
  { key: 'issued',     value: '2026-04-14'           , conf: 97 },
  { key: 'total_usd',  value: '47320.00'             , conf: 96 },
  { key: 'po_ref',     value: '8841-B'               , conf: 71, flag: true }
]

const STEP_MS = 340

export default function CaptureDemo() {
  // -1 = nothing read yet. Counts up to FIELDS.length once, then rests.
  const [step, setStep] = useState(-1)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(FIELDS.length)          // resolved state, no motion
      return
    }

    let timer
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      setTimeout(() => {              // let the scan sweep get going first
        let i = -1
        timer = setInterval(() => {
          i += 1
          setStep(i)
          if (i >= FIELDS.length) clearInterval(timer)
        }, STEP_MS)
      }, 450)
    }, { threshold: 0.25 })

    io.observe(el)
    return () => { io.disconnect(); clearInterval(timer) }
  }, [])

  const done = step >= FIELDS.length
  const lit = (i) => (i <= step ? 'is-lit' : '')

  return (
    <figure className={`cap ${step > -1 ? 'is-reading' : ''}`} ref={ref}>
      <div className="cap-surface">

        {/* ---- the page being read ---- */}
        <div className="cap-doc" aria-hidden="true">
          <div className="cap-sheet">
            <p className="cap-doc-name">
              <span className={`cap-hit ${lit(0)}`}>Northgate Supply Co.</span>
            </p>
            <p className="cap-doc-sub">1420 Harbor Way, Oakland CA</p>

            <div className="cap-doc-meta">
              <span>Invoice <b className={`cap-hit ${lit(1)}`}>NG-4471</b></span>
              <span className={`cap-hit ${lit(2)}`}>14 Apr 2026</span>
            </div>

            {/* the body of the invoice, abstracted to rules — texture, not content */}
            <div className="cap-doc-rules">
              {[94, 72, 88, 61, 80].map((w, i) => (
                <span key={i} style={{ width: `${w}%` }} />
              ))}
            </div>

            <div className="cap-doc-total">
              <span>Total due</span>
              <b className={`cap-hit ${lit(3)}`}>$47,320.00</b>
            </div>

            <div className="cap-doc-foot">
              <span>Ref</span>
              {/* the scrawl: legible enough to read, ragged enough to distrust */}
              <b className={`cap-hit cap-hit--flag cap-scrawl ${lit(4)}`}>PO 8841-B</b>
            </div>
          </div>

          <span className="cap-sweep" />
        </div>

        {/* ---- what came off it ---- */}
        <div className="cap-out">
          <ul className="cap-fields">
            {FIELDS.map((f, i) => (
              <li
                key={f.key}
                className={`cap-field ${i <= step ? 'is-in' : ''} ${f.flag ? 'is-flag' : ''}`}
              >
                <span className="cap-key">{f.key}</span>
                <span className="cap-val">{f.value}</span>
                <span className="cap-conf">
                  <span className="cap-bar">
                    <span style={{ width: i <= step ? `${f.conf}%` : 0 }} />
                  </span>
                  <em>{f.conf}%</em>
                </span>
              </li>
            ))}
          </ul>

          <p className={`cap-verdict ${done ? 'is-in' : ''}`}>
            Four fields filed automatically. The handwritten one goes to a person.
          </p>
        </div>
      </div>

      <figcaption>
        A supplier invoice read end to end. Anything the system is not sure about
        stops here rather than reaching your accounts.
      </figcaption>
    </figure>
  )
}
