"use client"

import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Data sourced from the provided resume text
const PROJECTS = [
  {
    title: "Audio Fingerprinting Algorithm (Shazam‑like)",
    timeline: "2025 — Ongoing",
    summary: [
      "Building an acoustic fingerprinting system: FFT → spectral peaks → constellation map → hash pairs.",
      "Chunking: ~861‑sample (~19.5ms) windows at 44.1kHz for balanced time/frequency resolution (≈51Hz bins).",
      "Bluestein FFT for non‑power‑of‑two sizes with zero‑padding to 1024/2048 for efficient convolution.",
      "Status: Recording/storage complete; next up: frequency‑domain conversion and peak detection.",
    ],
    tech: ["Go", "DSP", "FFT", "Bluestein", "Signal Processing"],
    links: [
    { label: "Github", href: "https://github.com/Prayush09/MusicRecognition"}
    ],
  },
  {
    title: "ResuNest – AI-Powered Resume Builder",
    timeline: "April 2025 – May 2025",
    summary: [
      "Full-stack AI-powered resume builder integrating Google Gemini AI for intelligent content generation.",
      "Custom rich text editor with real-time smart suggestions.",
      "Deployed on GCP with VM instances, Nginx load balancing, and PM2.",
    ],
    tech: ["React", "Node.js", "JavaScript", "GCP", "Gemini AI"],
    links: [
      { label: "GitHub", href: "https://github.com/Prayush09/Resunet" },
      { label: "Live", href: "https://resunest.prayushgiri.com" },
    ],
  },
  {
    title: "Homeey – AI Roommate Matching Platform",
    timeline: "August 2024 – November 2024",
    summary: [
      "AI-driven roommate recommendation powered by ML algorithms.",
      "Preference-based matching with RESTful APIs.",
      "Responsive frontend for seamless UX.",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Python (ML)"],
    links: [{ label: "GitHub", href: "https://github.com/Prayush09/Final-Year-Project" }],
  },
  {
    title: "ZiDraw – Real-Time Collaborative Drawing App",
    timeline: "March 2025",
    summary: [
      "Real-time collaborative drawing with WebSockets + HTML5 Canvas.",
      "GCP deployment with automated pipeline.",
    ],
    tech: ["WebSockets", "React", "HTML5 Canvas", "GCP", "JavaScript", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/Prayush09/ZiDraw" }],
  },
]

const SKILLS = [
  { group: "Languages", items: ["Java", "Go", "JavaScript", "TypeScript"] },
  { group: "Frameworks & Libraries", items: ["React", "Node.js", "Bun"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "Cloud & DevOps", items: ["Google Cloud", "Azure", "AWS", "Docker", "Nginx", "PM2"] },
  { group: "Developer Tools", items: ["Git", "GitHub", "WebSockets", "GitHub Actions (CI/CD)"] },
  {
    group: "Specialisations",
    items: ["Full-Stack Development", "RESTful APIs", "AI/ML Integration", "Cloud Architecture"],
  },
]

// Simple animation variants
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
}

function Nav() {
  return (
    <motion.header
      className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold tracking-tight">
          <span className="sr-only">Home</span>
          <span className="text-blue-500">Prayush</span> <span className="text-slate-300">Giri</span>
        </Link>
        <nav className="flex items-center gap-2">
          <a href="#projects" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5">
            Projects
          </a>
          <a href="#skills" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5">
            Skills
          </a>
          <div className="flex items-center gap-1">
            <ExternalIconLink href="https://github.com/" label="GitHub">
              <Github className="h-4 w-4" />
            </ExternalIconLink>
            <ExternalIconLink href="https://linkedin.com/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </ExternalIconLink>
            <ExternalIconLink href="mailto:Prayushgiri@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </ExternalIconLink>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

function ExternalIconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="group inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:border-blue-600 hover:text-blue-400"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle animated glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-16 left-1/3 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-12 right-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
          animate={{ x: [0, -15, 5, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-10 pt-16 sm:pt-20 md:pb-16">
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={fadeUp} className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl">
            Software Engineer building <span className="text-blue-500">AI-powered</span> and{" "}
            <span className="text-teal-400">cloud-deployed</span> apps.
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-2xl text-balance text-slate-300">
            I craft scalable web platforms with React, Node.js, and modern cloud. Passionate about full-stack, RESTful
            APIs, and shipping delightful AI features.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/30 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 hover:border-slate-700"
            >
              Explore Skills
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
      <motion.div
        className="mb-6 flex items-end justify-between"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-white">
          Projects
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-slate-300">
          Selected work with emphasis on AI, realtime, and cloud.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <ProjectCard key={p.title} project={p} index={idx} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, delay: index * 0.06 } }}
      viewport={{ once: true, amount: 0.3 }}
      className="shine-group group"
    >
      <Card
        className={cn(
          "relative overflow-hidden border-0 bg-white/5 p-5 shadow-lg shadow-blue-900/10",
          "transition-transform duration-300 group-hover:-translate-y-1",
        )}
      >
        {/* Shine effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.15), transparent 40%)",
          }}
        />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <span className="text-xs text-slate-300/90">{project.timeline}</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.summary.map((s) => (
              <li key={s} className="leading-relaxed">
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((t) => (
              <Badge key={t} className="border border-white/10 bg-white/5 text-white">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-blue-400 underline underline-offset-4 hover:text-blue-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
      <motion.div
        className="mb-6 flex items-end justify-between"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-white">
          Skills
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-slate-300">
          Tools and technologies I use to ship.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {SKILLS.map((g, idx) => (
          <motion.div
            key={g.group}
            variants={fadeUp}
            transition={{ delay: idx * 0.04 }}
            className="rounded-lg bg-white/5 p-5 shadow-md shadow-blue-900/10"
          >
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-300">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <Badge key={item} className="border border-white/10 bg-white/5 text-white">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function NowNote() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-12">
      <motion.div
        className="rounded-xl bg-white/5 p-5 shadow-md shadow-blue-900/10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="text-pretty text-sm text-slate-300">
          Currently working as a <span className="text-white font-medium">Risk Consultant at EY</span>. Officially
          graduating <span className="text-white font-medium">October (VIT‑AP)</span>. By day, I help teams manage risk;
          by night, I ship AI and cloud apps—professional with a playful edge.
        </motion.p>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <p className="text-center text-xs text-slate-300 sm:text-left">
          © {new Date().getFullYear()} Prayush Giri. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <ExternalIconLink href="https://github.com/" label="GitHub">
            <Github className="h-4 w-4" />
          </ExternalIconLink>
          <ExternalIconLink href="https://linkedin.com/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </ExternalIconLink>
          <ExternalIconLink href="mailto:Prayushgiri@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </ExternalIconLink>
        </div>
      </div>
    </footer>
  )
}

// Provide a small component to handle the interactive shine effect cleanly
function ShinePointerBinding() {
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(".shine-group").forEach((el) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        el.style.setProperty("--x", `${x}px`)
        el.style.setProperty("--y", `${y}px`)
      })
    }
    window.addEventListener("pointermove", handler, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handler)
    }
  }, [])
  return null
}

// Attach the binding once on the page
export default function Page() {
  return (
    <main className="min-h-dvh bg-slate-950 text-white">
      <ShinePointerBinding />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <NowNote />
      <Footer />
    </main>
  )
}
