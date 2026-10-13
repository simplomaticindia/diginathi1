import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/* Cookie and storage consent, built to the strictest of the three regimes we
   serve: EU GDPR + ePrivacy (prior opt-in, reject as easy as accept, granular,
   withdrawable), India DPDP Act 2023 (clear, itemised, withdrawable as easily
   as given) and US state laws such as CCPA/CPRA (honour Global Privacy Control).

   Categories:
     necessary  — always on: this consent record itself; nothing else is stored.
     functional — third-party embeds that set their own cookies (Google Maps).
     analytics  — Google Analytics 4, loaded only after this is granted.

   The record lives in localStorage, which is strictly necessary to remember
   the choice. It expires after 12 months or when POLICY_VERSION changes. */

export const POLICY_VERSION = '2026-10-13'
const KEY = 'dn-consent'
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

const ConsentContext = createContext(null)

export const gpcEnabled = () =>
  typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true

function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null')
    if (!raw || raw.v !== POLICY_VERSION || Date.now() - raw.ts > MAX_AGE_MS) return null
    return raw
  } catch {
    return null
  }
}

function write(choice) {
  const rec = { v: POLICY_VERSION, ts: Date.now(), functional: !!choice.functional, analytics: !!choice.analytics }
  try { localStorage.setItem(KEY, JSON.stringify(rec)) } catch { /* private mode: keep in memory only */ }
  return rec
}

export function ConsentProvider({ children }) {
  // null until mounted, so the server-rendered HTML never contains the banner
  const [record, setRecord] = useState(null)
  const [ready, setReady] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    setRecord(read())
    setReady(true)
  }, [])

  const save = useCallback((choice) => {
    setRecord(write(choice))
    setPanelOpen(false)
  }, [])

  const value = useMemo(() => ({
    ready,
    decided: !!record,
    functional: !!record?.functional,
    analytics: !!record?.analytics,
    gpc: gpcEnabled(),
    acceptAll: () => save({ functional: true, analytics: !gpcEnabled() }),
    rejectAll: () => save({ functional: false, analytics: false }),
    save,
    allowFunctional: () => save({ functional: true, analytics: !!record?.analytics }),
    panelOpen,
    openPanel: () => setPanelOpen(true),
    closePanel: () => setPanelOpen(false)
  }), [ready, record, panelOpen, save])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used inside ConsentProvider')
  return ctx
}
