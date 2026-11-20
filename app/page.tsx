"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileDown,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

/* =========================================================
   PERSONAL INFORMATION
   Update these values with your actual contact details.
========================================================= */

const PROFILE = {
  name: "Joey Munez Dano",
  role: "Web Developer",
  email: "joeydano99@gmail.com",
  github: "https://github.com/joeysdm",
  linkedin: "https://www.linkedin.com/in/your-actual-profile/",
  resume: "/resume.pdf",
};

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces.",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application logic and server-side features.",
    icon: Server,
    skills: ["PHP", "Laravel", "Filament"],
  },
  {
    title: "Database Management",
    description: "Working with structured data and relational databases.",
    icon: Database,
    skills: ["MariaDB", "MySQL"],
  },
  {
    title: "Development Tools",
    description: "Tools used throughout the development workflow.",
    icon: Workflow,
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
];

/* =========================================================
   PROJECT INFORMATION
========================================================= */

const projects = [
  {
    number: "01",
    name: "PharmaSync",
    category: "Web-Based Management System",
    description:
      "A web-based Pharmacy Management System designed to help organize pharmacy operations, manage records, and support day-to-day business activities.",
    details:
      "Developed with Laravel and Filament, the system brings important pharmacy operations together in one centralized application.",
    technologies: [
      "Laravel",
      "PHP",
      "Filament",
      "MariaDB",
      "Tailwind CSS",
    ],
    features: [
      "Inventory management",
      "Sales recording",
      "Branch management",
      "Supplier records",
      "Expense tracking",
      "Employee management",
      "User access and security",
    ],
    icon: BriefcaseBusiness,
    github: "",
    demo: "https://webpms.portunite.com",
  },
];

/* =========================================================
   DEVELOPMENT APPROACH
========================================================= */

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I begin by understanding the purpose of an application, its users, and the problems it needs to solve.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Build with structure",
    description:
      "I focus on organized components, readable code, and maintainable application architecture.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Focus on usability",
    description:
      "I aim to create responsive interfaces that are straightforward to navigate and work across devices.",
    icon: Monitor,
  },
  {
    number: "04",
    title: "Keep improving",
    description:
      "I continuously learn, test my work, and improve my development practices as technologies evolve.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   REUSABLE SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-violet-400 uppercase">
        {eyebrow}
      </p>

      <h2 className="text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white selection:bg-violet-500/30 selection:text-white">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#09090f]/85 backdrop-blur-2xl">
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >

            <div className="flex items-center gap-3">
  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl">
    <Image
      src="/images/dano.jpeg"
      alt="Joey M. Dano"
      fill
      sizes="36px"
      className="object-cover"
      priority
    />
  </div>

  <span className="text-lg font-bold tracking-tight text-white">
    Joey M. Dano<span className="text-violet-400"></span>
  </span>
</div>
          </a>

          {/* Desktop navigation */}

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-zinc-400 transition-colors hover:text-violet-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/[0.08] px-5 py-2.5 text-sm font-medium text-violet-200 transition-all hover:border-violet-400/60 hover:bg-violet-500/15 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="rounded-xl border border-white/10 p-2.5 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* Mobile navigation */}

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/[0.07] bg-[#0d0c15] px-6 py-6 shadow-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-violet-300"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-zinc-600">
                    0{index + 1}
                  </span>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-[760px] scroll-mt-20 items-center px-6 pb-24 pt-36 lg:min-h-screen lg:px-10"
      >
        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-violet-700/[0.13] blur-[140px]" />

        <div className="pointer-events-none absolute -bottom-20 -left-40 h-[450px] w-[450px] rounded-full bg-indigo-700/[0.10] blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>

              <span className="text-[10px] font-semibold tracking-[0.18em] text-violet-300 uppercase sm:text-xs">
                Open to Web Development Opportunities
              </span>
            </div>

            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-zinc-400 uppercase">
              Hello, I'm
            </p>

            <h1 className="text-6xl leading-[1.02] font-bold tracking-[-0.065em] sm:text-7xl lg:text-[100px]">

              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
               Joey M. Dano
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xl font-semibold text-white sm:text-2xl">
                Web Developer
              </span>

              <span className="h-1 w-1 rounded-full bg-zinc-600" />

              <span className="text-sm text-zinc-400">
                Entry-Level / Junior
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I build responsive and user-focused web applications using
              modern frontend and backend technologies. I enjoy turning
              ideas into functional digital solutions through thoughtful
              design, structured code, and continuous learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-600/20"
              >
                View My Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={PROFILE.resume}
                download
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 text-sm font-semibold text-zinc-200 transition-all hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
              >
                Download Resume
                <FileDown size={17} />
              </a>
            </div>

            {/* Social links */}

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <span className="mr-1 text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                Find me online
              </span>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-400 transition-all hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <FaGithub size={19} />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-400 transition-all hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </motion.div>

          {/* Developer code card */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto hidden w-full max-w-[470px] lg:block"
          >
            <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#11111a]/95 p-6 shadow-2xl shadow-violet-950/30">
              <div className="mb-7 flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Terminal size={14} />
                  developer.ts
                </div>
              </div>

              <div className="space-y-4 font-mono text-[13px] leading-7 sm:text-sm">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-sky-300">developer</span>{" "}
                  <span className="text-zinc-300">= {"{"}</span>
                </p>

                <p className="pl-5 text-zinc-400">
                  name:{" "}
                  <span className="text-emerald-400">
                    "Joey M. Dano"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  role:{" "}
                  <span className="text-emerald-400">
                    "Web Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  frontend:{" "}
                  <span className="text-emerald-400">
                    "React & Next.js"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  backend:{" "}
                  <span className="text-emerald-400">
                    "PHP & Laravel"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  database:{" "}
                  <span className="text-emerald-400">
                    "MariaDB"
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  mindset:{" "}
                  <span className="text-emerald-400">
                    "Always learning"
                  </span>
                </p>

                <p className="text-zinc-300">{"};"}</p>

                <div className="mt-7 border-t border-white/[0.07] pt-5">
                  <p className="text-zinc-500">
                    <span className="text-violet-400">//</span>{" "}
                    Building useful things for the web.
                  </p>

                  <p className="mt-2">
                    <span className="text-violet-400">console</span>
                    <span className="text-zinc-300">.</span>
                    <span className="text-sky-300">log</span>
                    <span className="text-zinc-300">(</span>
                    <span className="text-emerald-400">
                      "Let's build something."
                    </span>
                    <span className="text-zinc-300">);</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <Code2 size={19} className="mb-3 text-violet-400" />
                  <p className="text-xs font-semibold text-zinc-200">
                    Development
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-500">
                    Frontend & Backend
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <Database size={19} className="mb-3 text-violet-400" />
                  <p className="text-xs font-semibold text-zinc-200">
                    Data
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-500">
                    Relational databases
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 -bottom-7 rounded-2xl border border-violet-400/20 bg-[#171522] px-5 py-4 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Always improving
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Learning through building
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase transition-colors hover:text-violet-300 md:flex"
        >
          Scroll to explore
          <ArrowDown size={15} className="animate-bounce" />
        </a>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="scroll-mt-24 border-t border-white/[0.07] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-violet-400 uppercase">
              01 / About Me
            </p>

            <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              Developing ideas into
              <span className="text-zinc-500"> useful solutions.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-8 text-zinc-300 sm:text-lg">
              I'm Joey M. Dano, an entry-level Web Developer interested in
              building modern, reliable, and user-friendly web applications.
              I enjoy working across frontend and backend technologies to
              understand how complete web applications are designed and built.
            </p>

            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              Through hands-on development, I have worked with technologies
              such as PHP, Laravel, JavaScript, React, Next.js, Tailwind CSS,
              and MariaDB. One of my main projects is PharmaSync, a
              Web-Based Pharmacy Management System that applies software
              development concepts to practical business operations.
            </p>

            <p className="text-sm leading-8 text-zinc-400 sm:text-base">
              As I continue growing as a developer, I value clean code,
              problem-solving, collaboration, and learning from real-world
              development challenges. I'm interested in opportunities where
              I can contribute, improve my skills, and grow as part of a
              development team.
            </p>

            <div className="grid gap-4 pt-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <Globe2 size={21} className="mb-4 text-violet-400" />
                <h3 className="text-sm font-semibold text-white">
                  Career Opportunities
                </h3>
                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  Interested in local and international opportunities.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <Code2 size={21} className="mb-4 text-violet-400" />
                <h3 className="text-sm font-semibold text-white">
                  Development Focus
                </h3>
                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  Practical web applications and maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/[0.07] bg-[#0c0b13] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="02 / Technical Skills"
            title="Tools I use to build for the web."
            description="My current technical toolkit covers frontend development, backend application logic, databases, and everyday development tools."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.035] sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/20">
                  <group.icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-violet-400/30 hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-zinc-600">
            Skills shown represent my current development toolkit. I continue
            to strengthen these skills through practical projects and learning.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/[0.07] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="03 / Selected Work"
            title="Projects built to solve real problems."
            description="A look at my practical development work, technical decisions, and the applications I have been building."
          />

          {projects.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#11111a]"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                
{/* Project visual */}

<div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#100e19] p-5 lg:min-h-[540px] lg:border-r lg:border-b-0 lg:p-8">
  {/* Background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.16),transparent_65%)]" />

  {/* Grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />

  {/* Actual project screenshot */}
  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0c0b13] shadow-2xl shadow-black/50 transition-transform duration-500 hover:scale-[1.02]">
    <div className="flex items-center justify-between border-b border-white/10 bg-[#171522] px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      <span className="text-[10px] font-medium tracking-wide text-zinc-400">
        PHARMASYNC — DASHBOARD
      </span>

      <span className="text-[10px] text-emerald-400">
        Live Project
      </span>
    </div>

    <div className="relative aspect-[16/10] w-full bg-[#111018]">
      <Image
        src="/images/pharmasync.png"
        alt="PharmaSync pharmacy management system dashboard"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 650px"
        className="object-cover object-top"
      />
    </div>
  </div>

  {/* Project label */}
  <span className="absolute bottom-5 left-6 z-10 text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
    Actual Project Screenshot
  </span>
</div>


                {/* Project details */}

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.18em] text-violet-400 uppercase">
                      Featured Project
                    </span>
                    <span className="h-px w-10 bg-violet-400/40" />
                    <span className="text-xs text-zinc-600">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-violet-300">
                    {project.category}
                  </p>

                  <p className="mt-6 text-sm leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {project.details}
                  </p>

                  <div className="mt-8">
                    <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-zinc-300 uppercase">
                      Key Features
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 text-xs text-zinc-400"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-violet-400"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/[0.08] pt-7">
                    <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-zinc-300 uppercase">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-[11px] font-medium text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.github || project.demo) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                        >
                          <FaGithub size={15} />
                          Source Code
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
                        >
                          Live Preview
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}

          <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-6 text-center">
            <p className="text-sm font-medium text-zinc-300">
              More projects will be added as I continue building.
            </p>
            <p className="mt-2 text-xs leading-6 text-zinc-500">
              I prioritize presenting real projects and practical development
              work rather than listing unfinished or fictional applications.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="scroll-mt-24 border-t border-white/[0.07] bg-[#0c0b13] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="04 / My Approach"
            title="How I approach development."
            description="Good development is more than writing code. It involves understanding problems, making thoughtful decisions, and continuously improving the result."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors hover:border-violet-400/30"
              >
                <div className="flex items-center justify-between">
                  <principle.icon size={23} className="text-violet-400" />
                  <span className="text-xs font-medium text-zinc-600">
                    {principle.number}
                  </span>
                </div>

                <h3 className="mt-9 text-base font-semibold text-white">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-6 py-28 lg:px-10 lg:py-36"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.12] blur-[130px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <Mail size={25} />
          </div>

          <p className="text-xs font-semibold tracking-[0.22em] text-violet-400 uppercase">
            05 / Get In Touch
          </p>

          <h2 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              meaningful together.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            I'm interested in entry-level Web Developer opportunities,
            professional connections, and opportunities to contribute to
            meaningful web projects. If you're looking for someone eager to
            learn, build, and grow, I'd be glad to connect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://web.facebook.com/joeysdm.hndsm"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-all hover:-translate-y-1 hover:bg-violet-500"
            >
              Let's Talk on Facebook
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-zinc-200 transition-all hover:border-violet-400/50 hover:text-violet-300"
            >
              Connect on LinkedIn
              <FaLinkedin size={17} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} />
              Philippines
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

            <span className="inline-flex items-center gap-2">
              <Globe2 size={14} />
              Open to Local & International Opportunities
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/[0.07] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="https://web.facebook.com/joeysdm.hndsm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold tracking-tight text-white"
            >
              Joeysdm99<span className="text-violet-400">.</span>
            </a>

            <p className="mt-2 text-xs text-zinc-600">
              © {year ?? 2026} Joey M. Dano. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-zinc-500 transition-colors hover:border-violet-400/40 hover:text-violet-300"
            >
              <FaGithub size={17} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-zinc-500 transition-colors hover:border-violet-400/40 hover:text-violet-300"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="#home"
              className="ml-2 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-violet-300"
            >
              Back to top
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
