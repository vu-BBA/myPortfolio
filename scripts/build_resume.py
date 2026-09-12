#!/usr/bin/env python3
"""
Rebuild Bushra Basharat's CV as a PDF.

    pip install reportlab
    python scripts/build_resume.py

Writes to public/Bushra_Basharat_CV.pdf
"""
import os

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate,
    Spacer, Table, TableStyle,
)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "public", "Bushra_Basharat_CV.pdf")

ACCENT = colors.HexColor("#0f766e")   # teal-700
DARK = colors.HexColor("#0f172a")     # slate-900
MUTED = colors.HexColor("#475569")    # slate-600
RULE = colors.HexColor("#cbd5e1")     # slate-300

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=19, leading=22, textColor=DARK, alignment=TA_CENTER, spaceAfter=2,
)
role_style = ParagraphStyle(
    "Role", fontName="Helvetica-Bold", fontSize=10.5, leading=12.5,
    textColor=ACCENT, alignment=TA_CENTER, spaceAfter=4,
)
contact_style = ParagraphStyle(
    "Contact", fontName="Helvetica", fontSize=8.3, leading=10.8,
    textColor=MUTED, alignment=TA_CENTER, spaceAfter=0.8,
)
h2_style = ParagraphStyle(
    "H2", fontName="Helvetica-Bold", fontSize=10.5, leading=13,
    textColor=ACCENT, spaceBefore=6, spaceAfter=0.8,
)
body_style = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=8.3, leading=10.7,
    textColor=DARK, alignment=TA_JUSTIFY, spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, alignment=TA_JUSTIFY, spaceAfter=0.8,
)
job_style = ParagraphStyle(
    "Job", fontName="Helvetica-Bold", fontSize=8.7, leading=11.0,
    textColor=DARK, spaceBefore=4, spaceAfter=0.8,
)
sub_style = ParagraphStyle(
    "Sub", fontName="Helvetica-Oblique", fontSize=8.3, leading=10.5,
    textColor=MUTED, spaceAfter=2,
)


def section(title):
    return [
        Paragraph(title, h2_style),
        HRFlowable(width="100%", thickness=0.7, color=RULE,
                   spaceBefore=0, spaceAfter=4),
    ]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet_style), leftIndent=11) for t in items],
        bulletType="bullet", bulletFontSize=6, bulletColor=ACCENT,
        leftIndent=11, spaceBefore=0, spaceAfter=2,
    )


def skill_row(label, value):
    return Paragraph(
        f"<b>{label}:</b> {value}", bullet_style
    )


def build():
    doc = SimpleDocTemplate(
        OUT, pagesize=A4,
        leftMargin=14 * mm, rightMargin=14 * mm,
        topMargin=10 * mm, bottomMargin=10 * mm,
        title="Bushra Basharat - CV",
        author="Bushra Basharat",
    )

    s = []

    # ---------------- Header ----------------
    s.append(Paragraph("BUSHRA BASHARAT", name_style))
    s.append(Paragraph("AI Automation Engineer &nbsp;|&nbsp; GoHighLevel (GHL) &amp; n8n Expert", role_style))
    s.append(Paragraph(
        "Haroonabad, Punjab, Pakistan &nbsp;|&nbsp; 03087920448 &nbsp;|&nbsp; bushrach147hnd@gmail.com",
        contact_style,
    ))
    s.append(Paragraph(
        "LinkedIn: linkedin.com/in/bushra-basharat &nbsp;|&nbsp; GitHub: github.com/vu-BBA "
        "&nbsp;|&nbsp; Portfolio: my-portfolio-bba.vercel.app",
        contact_style,
    ))
    s.append(Spacer(1, 1))
    s.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=4))

    # ---------------- Summary ----------------
    s += section("PROFESSIONAL SUMMARY")
    s.append(Paragraph(
        "AI Automation Engineer and GoHighLevel (GHL) specialist with a strong foundation in full-stack "
        "development. I design and build complete GHL systems &mdash; funnels, CRM pipelines, appointment "
        "calendars, multi-step workflows, snapshots and AI Employee &mdash; that turn traffic into booked "
        "appointments and recurring revenue. Equally expert in n8n, I design complex multi-node automation workflows with AI APIs, webhooks and data pipelines. I also build AI Agents and ship scalable "
        "applications on the MERN stack. Certified JavaScript Full-Stack Developer (Grade: A+) with a passion "
        "for solving data-driven problems using Python.",
        body_style,
    ))

    # ---------------- Technical skills ----------------
    s += section("TECHNICAL SKILLS")
    skills = [
        ("GoHighLevel (GHL)",
         "Funnel &amp; website builder, Workflow automation, Pipelines &amp; CRM, Calendars &amp; booking, "
         "Snapshots &amp; subaccount setup, Forms &amp; surveys, Email/SMS marketing, Reputation management, "
         "Conversation AI / AI Employee, Voice AI, missed-call text back, GHL API v2."),
        ("n8n (Expert)",
         "Complex multi-node workflows, AI agent nodes, webhook &amp; API integrations, branching logic, "
         "error handling, data pipelines, Gmail/Google Sheets/WhatsApp/Telegram automations."),
        ("Automation &amp; AI",
         "AI Agents, LLM integration (Anthropic SDK, OpenAI, Groq), prompt "
         "engineering, API integration, Python (NumPy, Pandas, Matplotlib), Scikit-learn."),
        ("Web Development",
         "MERN stack (MongoDB, Express, React, Node.js), JavaScript (ES6+), HTML/CSS, Tailwind CSS, "
         "REST APIs, Vite."),
        ("Integrations &amp; Tools",
         "Twilio, Mailgun, Stripe, Zapier, Google Calendar, Google Sheets, WhatsApp, Telegram, Slack, "
         "Notion, Supabase, PostgreSQL, Prisma, Git, GitHub, Vercel, Postman."),
        ("Core Engineering",
         "Data Structures &amp; Algorithms, C++, OOP, Database Management (DBMS)."),
    ]
    for label, value in skills:
        s.append(skill_row(label, value))

    # ---------------- GHL expertise ----------------
    s += section("GOHIGHLEVEL (GHL) SERVICES DELIVERED")
    s.append(bullets([
        "<b>Funnels &amp; websites</b> &mdash; lead-capture funnels, opt-in and sales pages, order bumps, "
        "upsells and full websites built natively in GHL.",
        "<b>Workflow automation</b> &mdash; multi-step email/SMS/voice follow-up sequences with triggers, "
        "conditional logic, A/B splits, delays and pipeline actions.",
        "<b>CRM &amp; pipelines</b> &mdash; deal stages, opportunity tracking, lead scoring, smart lists, "
        "team routing and assignment.",
        "<b>Calendars &amp; booking</b> &mdash; round-robin and team calendars, auto reminders, no-show "
        "reduction flows, Google/Outlook two-way sync.",
        "<b>Snapshots &amp; subaccounts</b> &mdash; reusable snapshots and bulk subaccount provisioning "
        "packaged for repeat client delivery.",
        "<b>AI Employee &amp; Voice AI</b> &mdash; trained Conversation AI that qualifies leads and books "
        "appointments 24/7, Voice AI agents and missed-call text back.",
        "<b>Revenue plays</b> &mdash; database reactivation, speed-to-lead, ad lead capture (Meta/Google), "
        "reputation and Google review automation, reporting dashboards.",
    ]))

    # ---------------- Projects ----------------
    s += section("KEY PROJECTS")
    projects = [
        ("GoHighLevel Funnel &amp; Automation System", "GoHighLevel, Twilio, Mailgun, Stripe",
         "Built a complete GHL funnel-to-booking system: lead-capture funnel, CRM pipeline, appointment "
         "calendars and multi-step email/SMS follow-up workflows that move a lead from ad click to booked "
         "appointment on autopilot."),
        ("GHL AI Employee &amp; Speed-to-Lead", "GoHighLevel, Conversation AI, Voice AI",
         "Trained a Conversation AI / AI Employee to answer FAQs, qualify leads and book appointments 24/7, "
         "paired with missed-call text back and instant speed-to-lead follow-up."),
        ("AI-Integrated Task Management System", "Python, React, MERN",
         "Developed an intelligent task management platform that uses Python-based AI logic to assist with "
         "task prioritization and smart scheduling."),
        ("n8n Workflow Automation", "n8n, API Integration",
         "Created automated workflows connecting WhatsApp, Gmail, Google Calendar and Google Sheets for "
         "real-time data management and personal brand automation."),
        ("AI Automation Hub (n8n)", "n8n, AI APIs, Webhooks",
         "A growing public collection of production n8n workflows integrating AI APIs, webhooks and data "
         "pipelines for real clients (github.com/vu-BBA/automations-of-n8n)."),
        ("Online Maze Game for Learning (OMGL)", "C++, Algorithms",
         "Engineered an educational tool using random maze generation algorithms to strengthen logical "
         "thinking and programming fundamentals."),
    ]
    for title, stack, desc in projects:
        s.append(Paragraph(f"{title} <font color='#475569'>|</font> "
                           f"<font size='8'>{stack}</font>", job_style))
        s.append(Paragraph(desc, bullet_style))

    # ---------------- Education ----------------
    s += section("EDUCATION &amp; CERTIFICATIONS")
    s.append(Paragraph("BS in Software Engineering", job_style))
    s.append(Paragraph("Virtual University &nbsp;|&nbsp; Graduated: March 2026", sub_style))
    s.append(Paragraph(
        "JavaScript Full Stack Development Certification (Grade: A+) &mdash; 3-Month Intensive Industry "
        "Training, completed 2026.", bullet_style))

    doc.build(s)
    return OUT


if __name__ == "__main__":
    path = build()
    print(f"Wrote {path} ({os.path.getsize(path):,} bytes)")
