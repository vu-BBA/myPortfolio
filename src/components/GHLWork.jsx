import React, { useState } from 'react'
import {
  FaFunnelDollar, FaCogs, FaLayerGroup, FaSitemap, FaCalendarCheck,
  FaRobot, FaMicrophone, FaStar, FaBolt, FaBullhorn, FaUserCheck, FaChartLine,
  FaPhoneAlt
} from 'react-icons/fa'
import {
  SiStripe, SiZapier, SiTwilio, SiMailgun, SiMeta, SiGoogleads,
  SiGooglesheets, SiShopify, SiWordpress, SiZoom, SiGooglecalendar,
  SiWhatsapp, SiTelegram, SiGoogleanalytics
} from 'react-icons/si'
import { MdAutorenew, MdSupportAgent } from 'react-icons/md'
import { AiOutlineApi } from 'react-icons/ai'
import { FiTarget, FiTrendingUp } from 'react-icons/fi'

/* ------------------------------------------------------------------ */
/*  Core GHL services                                                  */
/* ------------------------------------------------------------------ */
const services = [
  {
    icon: <FaFunnelDollar />,
    title: 'Funnels & Websites',
    desc: 'High-converting lead capture funnels, opt-in pages, sales pages, order bumps, upsells and full websites built natively inside GHL.',
    points: ['Lead capture & opt-in funnels', 'Sales pages + order bumps', 'Websites & landing pages', 'Mobile-first responsive builds']
  },
  {
    icon: <FaCogs />,
    title: 'Workflow Automations',
    desc: 'End-to-end multi-step workflows with triggers, conditions, delays, A/B splits and follow-up sequences that run your business on autopilot.',
    points: ['Multi-step follow-up sequences', 'Conditional logic & A/B splits', 'Email / SMS / Voice drops', 'Task, tag & pipeline actions']
  },
  {
    icon: <FaLayerGroup />,
    title: 'Snapshots & Subaccounts',
    desc: 'Complete snapshot builds and subaccount provisioning — funnels, pipelines, workflows, calendars, custom values and templates packaged for repeat delivery.',
    points: ['Custom snapshot creation', 'Bulk subaccount setup', 'Custom fields, tags & values', 'Template & menu configuration']
  },
  {
    icon: <FaSitemap />,
    title: 'Pipelines & CRM Setup',
    desc: 'Sales pipelines, deal stages, opportunity tracking, lead scoring and clean contact management so nothing falls through the cracks.',
    points: ['Pipeline & stage design', 'Lead scoring & smart lists', 'Opportunity tracking', 'Team assignment & routing']
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Calendars & Booking',
    desc: 'Appointment calendars with round-robin, reminders, buffer times, no-show reduction flows and Google/Outlook two-way sync.',
    points: ['Round-robin & team calendars', 'Auto reminders & confirmations', 'No-show reduction sequences', 'Google / Outlook calendar sync']
  },
  {
    icon: <FaRobot />,
    title: 'AI Employee & Conversation AI',
    desc: 'Trained Conversation AI / AI Employee chatbots that answer FAQs, qualify leads, handle objections and book appointments 24/7.',
    points: ['Bot training on your data', 'Lead qualification flows', 'Website + FB/IG chat widget', 'Human handoff & escalation']
  },
  {
    icon: <FaMicrophone />,
    title: 'Voice AI & Missed-Call Text Back',
    desc: 'Voice AI agents that answer and place calls, plus missed-call text back so every missed call turns into a booked appointment.',
    points: ['Inbound & outbound Voice AI', 'Missed-call text back', 'Call recording & transcripts', 'Voicemail drop campaigns']
  },
  {
    icon: <FaStar />,
    title: 'Reputation & Reviews',
    desc: 'Automated Google review requests that protect your rating, plus review response automation and reputation reporting.',
    points: ['Auto review request flows', 'Negative review interception', 'Review response automation', 'Reputation dashboard']
  }
]

/* ------------------------------------------------------------------ */
/*  Revenue-focused plays I implement                                  */
/* ------------------------------------------------------------------ */
const plays = [
  { icon: <MdAutorenew />, title: 'Database Reactivation', desc: 'Revive old leads with a two-way SMS + email campaign that pulls bookings out of a dead list.' },
  { icon: <FaPhoneAlt />, title: 'Speed-to-Lead', desc: 'Instant call/SMS to a new lead within seconds — the single biggest conversion lever there is.' },
  { icon: <FaBullhorn />, title: 'Ad Lead Capture', desc: 'Facebook, Google & Meta lead forms wired straight into GHL with instant follow-up.' },
  { icon: <MdSupportAgent />, title: 'Appointment Setting', desc: 'Full nurture-to-booking systems for coaches, clinics, agencies and local businesses.' },
  { icon: <FiTrendingUp />, title: 'Upsell & Order Forms', desc: 'Order forms, upsells, downsells and Stripe products wired for recurring revenue.' },
  { icon: <FaChartLine />, title: 'Reporting & Dashboards', desc: 'Custom reports and attribution so every workflow is measured, not guessed.' }
]

/* ------------------------------------------------------------------ */
/*  Integrations                                                       */
/* ------------------------------------------------------------------ */
const integrations = [
  { label: 'Twilio', icon: <SiTwilio /> },
  { label: 'Mailgun', icon: <SiMailgun /> },
  { label: 'Stripe', icon: <SiStripe /> },
  { label: 'Zapier', icon: <SiZapier /> },
  { label: 'Webhooks', icon: <AiOutlineApi /> },
  { label: 'GHL API v2', icon: <AiOutlineApi /> },
  { label: 'Meta Lead Ads', icon: <SiMeta /> },
  { label: 'Google Ads', icon: <SiGoogleads /> },
  { label: 'Google Sheets', icon: <SiGooglesheets /> },
  { label: 'Google Calendar', icon: <SiGooglecalendar /> },
  { label: 'Google Analytics', icon: <SiGoogleanalytics /> },
  { label: 'WhatsApp', icon: <SiWhatsapp /> },
  { label: 'Telegram', icon: <SiTelegram /> },
  { label: 'Zoom', icon: <SiZoom /> },
  { label: 'Shopify', icon: <SiShopify /> },
  { label: 'WordPress', icon: <SiWordpress /> },
  { label: 'n8n', icon: <AiOutlineApi /> },
  { label: 'OpenAI', icon: <AiOutlineApi /> }
]

/* ------------------------------------------------------------------ */
/*  Real builds — screenshots from live subaccounts                    */
/* ------------------------------------------------------------------ */
const showcase = [
  {
    img: '/ghl/workflow-pi-lead-followup.jpg',
    title: 'PI Lead Follow-Up Automation',
    caption: 'Form trigger → instant acknowledgment SMS → opportunity created → lead tagged → call task for staff → backup email. Zero manual steps.',
    tags: ['Workflows', 'SMS', 'Tasks']
  },
  {
    img: '/ghl/workflow-legal-intake-full.jpg',
    title: 'Legal Intake — Full Automation Map',
    caption: 'Branching workflow: new vs retained clients get different paths — confirmation emails, Google Calendar events, tags and review requests.',
    tags: ['Workflows', 'Branching', 'Calendar']
  },
  {
    img: '/ghl/pipeline-legal-case-intake.jpg',
    title: 'Legal Case Intake Pipeline',
    caption: 'CRM pipeline with stages New Inquiry → Consultation Booked → Retainer Sent → Case Won, with live contacts moving through.',
    tags: ['Pipelines', 'CRM']
  },
  {
    img: '/ghl/email-appointment-confirmation.jpg',
    title: 'Custom HTML Email Template',
    caption: 'Branded appointment-confirmation email hand-coded in the GHL template builder with {{contact}} and {{appointment}} merge fields.',
    tags: ['Email Templates', 'HTML', 'Merge Fields']
  },
  {
    img: '/ghl/csv-contact-import-mapping.jpg',
    title: 'CSV Contact Database Upload',
    caption: 'Uploaded a client CSV database and mapped every field — names, phones, lead source, case type, tags — into clean GHL contacts.',
    tags: ['Contacts', 'CSV Import']
  },
  {
    img: '/ghl/workflow-appointment-reminder.jpg',
    title: 'Appointment Reminder Sequence',
    caption: 'Appointment-status trigger → email → timed wait → SMS reminder, cutting no-shows automatically.',
    tags: ['Workflows', 'Email', 'SMS']
  },
  {
    img: '/ghl/funnel-fifth-avenue-pizza.png',
    title: 'Local Business Funnel + A/B Split',
    caption: 'Lead-capture funnel built for a local pizza brand, set up with a control/variation split test to optimize conversion.',
    tags: ['Funnels', 'A/B Testing']
  },
  {
    img: '/ghl/workflows-published-list.png',
    title: 'Published Automation Suite',
    caption: 'Seven live workflows: 6-month recall, reminders, instant confirmations, missed-call notifications, no-show reschedule and review requests.',
    tags: ['Automation', 'Reputation']
  },
  {
    img: '/ghl/workflow-execution-logs.jpg',
    title: 'Execution Logs — Proof It Runs',
    caption: 'Real execution history showing every step fired for a live contact — executed, skipped and finished as designed.',
    tags: ['Logging', 'QA']
  }
]

const shareLinks = [
  { label: '🔗 View a Shared Funnel', href: 'https://affiliates.gohighlevel.com/?fp_ref=cofix33&funnel_share=6aa39317ed7cc4adc4a30b2b' },
  { label: '🔗 View a Shared Workflow', href: 'https://affiliates.gohighlevel.com/?fp_ref=cofix33&share=kUBntZgL0p2c7HjhlMP6' }
]

/* ------------------------------------------------------------------ */
/*  Delivery process                                                   */
/* ------------------------------------------------------------------ */
const process = [
  { step: '01', title: 'Audit', desc: 'I map your current funnel, follow-up gaps and where leads are being lost.' },
  { step: '02', title: 'Build', desc: 'Funnels, pipelines, calendars and workflows built inside your GHL subaccount.' },
  { step: '03', title: 'Automate', desc: 'Follow-up, AI and speed-to-lead sequences switched on and tested end-to-end.' },
  { step: '04', title: 'Optimize', desc: 'Tracking, reporting and iteration so the system keeps compounding.' }
]

export default function GHLWork() {
  const [openCard, setOpenCard] = useState(null)

  return (
    <div className="py-20 bg-slate-950 relative overflow-hidden">
      {/* glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-glow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse_slow" style={{ top: '-3px' }}></div>
      {/* decorative blobs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl opacity-20"></div>

      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 relative z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-green font-semibold text-sm border border-neon-cyan/40 rounded-lg px-4 py-2 hover:bg-neon-cyan/10 transition duration-300"
        >
          ← Back to Home
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold text-neon-green text-center">
          GoHighLevel <span className="text-neon-cyan">(GHL)</span> Work
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mt-2 mb-4 mx-auto"></div>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-4 leading-relaxed">
          I build complete <span className="text-neon-green font-semibold">GoHighLevel</span> systems —
          funnels, CRM, pipelines, workflows and AI — that turn traffic into booked appointments and revenue.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Agency & Local Business', 'SaaS Mode', 'Coaches & Clinics', 'Real Estate'].map(t => (
            <span key={t} className="text-xs px-3 py-1 rounded-full border border-neon-cyan/40 text-neon-cyan bg-slate-800/60">
              {t}
            </span>
          ))}
        </div>

        {/* Moving screenshots — like the n8n workflows marquee */}
        <style>{`
          @keyframes ghlShotScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ghl-shot { animation: ghlShotScroll 45s linear infinite; }
          .ghl-shot:hover { animation-play-state: paused; }
        `}</style>
        <p className="text-center text-xs uppercase tracking-widest text-neon-cyan/80 mb-3">
          Live screenshots from real GHL builds — hover to pause, click to open
        </p>
        <div className="flex overflow-hidden mb-12 rounded-xl">
          <div className="flex gap-4 ghl-shot">
            {[...showcase, ...showcase].map((s, idx) => (
              <a
                key={idx}
                href={s.img}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 w-80 rounded-xl overflow-hidden border border-neon-green/30 hover:border-neon-green/70 hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 bg-slate-900"
              >
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-44 object-cover object-top transition-transform duration-500 hover:scale-105" />
                <div className="px-3 py-2 text-xs font-semibold text-neon-green bg-slate-800/90 whitespace-nowrap overflow-hidden text-ellipsis">
                  {s.title}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setOpenCard(openCard === idx ? null : idx)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                openCard === idx
                  ? 'bg-slate-800 border-neon-green/70 shadow-lg shadow-neon-green/25'
                  : 'bg-slate-800/70 border-neon-green/25 hover:border-neon-green/60 hover:shadow-lg hover:shadow-neon-green/15'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl text-neon-cyan">{s.icon}</span>
                <span className="font-bold text-neon-green text-sm leading-tight">{s.title}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              {openCard === idx && (
                <ul className="mt-3 space-y-1.5 border-t border-neon-green/20 pt-3">
                  {s.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-neon-green mt-0.5">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
              <span className="block mt-3 text-[10px] uppercase tracking-wider text-neon-cyan/70">
                {openCard === idx ? 'Hide details' : 'View details'}
              </span>
            </button>
          ))}
        </div>

        {/* Real builds gallery */}
        <h4 className="text-xl font-semibold text-neon-cyan mb-2 flex items-center gap-2">
          <FaChartLine className="text-neon-green" /> Real Builds From Live Subaccounts
        </h4>
        <p className="text-gray-400 text-sm mb-6">
          Screenshots from actual GoHighLevel accounts I've set up — funnels, pipelines, workflows,
          email templates and CSV contact imports. Click any image to open it full size.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {showcase.map((s, idx) => (
            <a
              key={idx}
              href={s.img}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl overflow-hidden bg-slate-800/70 border border-neon-green/25 hover:border-neon-green/60 hover:shadow-lg hover:shadow-neon-green/15 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-neon-green text-sm mb-1.5">{s.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{s.caption}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-neon-cyan/30 text-neon-cyan bg-slate-900/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Share links */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {shareLinks.map((l, idx) => (
            <a
              key={idx}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border-2 border-neon-green rounded-lg text-neon-green hover:bg-neon-green/10 hover:shadow-glow transition duration-300 font-semibold text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Revenue plays */}
        <h4 className="text-xl font-semibold text-neon-cyan mb-6 flex items-center gap-2">
          <FiTarget className="text-neon-green" /> Revenue Plays I Implement
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {plays.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/80 border border-neon-cyan/25 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-neon-green">{p.icon}</span>
                <span className="font-semibold text-neon-cyan text-sm">{p.title}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Integrations marquee */}
        <h4 className="text-xl font-semibold text-neon-cyan mb-6 flex items-center gap-2">
          <FaBolt className="text-neon-green" /> Integrations & Stack
        </h4>
        <style>{`
          @keyframes ghlScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ghl-scroll { animation: ghlScroll 35s linear infinite; }
          .ghl-scroll:hover { animation-play-state: paused; }
        `}</style>
        <div className="flex overflow-hidden mb-16">
          <div className="flex gap-4 ghl-scroll">
            {[...integrations, ...integrations].map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl border border-neon-cyan/30 bg-slate-800/80 hover:border-neon-cyan/60 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300"
              >
                <span className="text-xl text-neon-cyan">{t.icon}</span>
                <span className="text-sm font-semibold text-neon-green whitespace-nowrap">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <h4 className="text-xl font-semibold text-neon-cyan mb-6 flex items-center gap-2">
          <FaUserCheck className="text-neon-green" /> How I Deliver
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {process.map((p, idx) => (
            <div key={idx} className="relative p-5 rounded-xl bg-slate-900/80 border border-neon-green/25 hover:border-neon-green/60 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent opacity-80 mb-2">
                {p.step}
              </div>
              <p className="font-bold text-neon-green mb-1">{p.title}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Case study */}
        <h4 className="text-xl font-semibold text-neon-cyan mb-6 flex items-center gap-2">
          <FaClipboardCheck className="text-neon-green" /> Case Study: Law Firm Lead Intake System
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {['Speed-to-lead: every form lead acknowledged in seconds', 'No missed call left unanswered', 'Full pipeline visibility per case stage', 'Reviews requested automatically after consultations'].map((o, i) => (
            <div key={i} className="p-4 rounded-xl border border-neon-green/30 bg-slate-900/70 text-xs text-gray-300 flex items-start gap-2">
              <span className="text-neon-green">✔</span><span>{o}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-neon-cyan/30 bg-slate-900/70 p-6 md:p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-neon-green font-bold mb-2 text-sm uppercase tracking-wider">Problem</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A law firm's consultation requests arrived by form, phone and referral — followed up manually.
                Responses were slow, there was no pipeline visibility, missed calls went cold, and an existing
                contact list sat unused in a spreadsheet.
              </p>
            </div>
            <div>
              <p className="text-neon-cyan font-bold mb-2 text-sm uppercase tracking-wider">What I Built</p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-1.5">
                <li>▸ Intake form trigger → instant acknowledgment SMS</li>
                <li>▸ "Legal Case Intake" pipeline: New Inquiry → Consultation Booked → Retainer Sent → Case Won</li>
                <li>▸ Branching workflows for new vs retained clients: branded confirmation email (custom HTML + merge fields), Google Calendar event, staff call task</li>
                <li>▸ CSV database upload with full field mapping (case type, tags, lead source)</li>
                <li>▸ Reminder, no-show reschedule and review-request automations</li>
              </ul>
            </div>
            <div>
              <p className="text-neon-purple font-bold mb-2 text-sm uppercase tracking-wider">Result</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every lead now gets an instant reply, every case has a visible stage, staff get call tasks
                automatically, the old spreadsheet became a bookable database, and review requests run without
                anyone touching them.
              </p>
              <div className="flex gap-2 mt-4">
                {['/ghl/workflow-pi-lead-followup.jpg', '/ghl/pipeline-legal-case-intake.jpg', '/ghl/email-appointment-confirmation.jpg'].map((img, i) => (
                  <a key={i} href={img} target="_blank" rel="noreferrer" className="w-1/3 rounded-lg overflow-hidden border border-neon-cyan/30 hover:border-neon-cyan/70 transition">
                    <img src={img} alt="Case study screenshot" loading="lazy" className="w-full h-14 object-cover object-top" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-neon-green/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <p className="text-lg text-gray-200 mb-4">
            Need a <span className="text-neon-green font-bold">GHL setup, snapshot or funnel</span> built?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.upwork.com/freelancers/~0192f7886797dfdda9"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-neon-green to-emerald-500 text-black font-bold rounded-lg shadow-lg shadow-neon-green/40 hover:scale-105 transition-transform duration-300"
            >
              💼 Hire Me on Upwork
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-neon-cyan rounded-lg text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glowCyan transition duration-300 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
