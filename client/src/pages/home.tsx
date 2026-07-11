import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import nayeemPhoto from "../../../attached_assets/nayeemPhoto.jpg";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Code2,
  Mail,
  ExternalLink,
  ChevronDown,
  Star,
  Sparkles,
  BookOpen,
  Menu,
  Lightbulb,
  Quote,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  ChevronUp,
} from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiGoogle,
  SiSnapchat,
  SiUber,
  SiNvidia,
  SiMongodb,
  SiSalesforce,
  SiYoutube,
  SiX,
} from "react-icons/si";

function ArabesqueDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 20 Q25 0 50 20 T100 20 T150 20 T200 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M0 20 Q25 40 50 20 T100 20 T150 20 T200 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="20" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="150" cy="20" r="3" fill="currentColor" opacity="0.4" />
      <path
        d="M90 10 L100 5 L110 10 L110 30 L100 35 L90 30 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

function StarField() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function FloatingGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rotate-45"
        animate={{ rotate: [45, 90, 45], y: [-10, 10, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 border border-primary/8 rounded-full"
        animate={{ scale: [1, 1.1, 1], x: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary/10"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function SectionHeading({
  title,
  icon: Icon,
}: {
  title: string;
  icon: typeof Briefcase;
}) {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <div className="flex items-center gap-3">
        <ArabesqueDecoration className="w-20 h-6 text-primary hidden sm:block" />
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            {title}
          </h2>
        </div>
        <ArabesqueDecoration className="w-20 h-6 text-primary hidden sm:block transform scale-x-[-1]" />
      </div>
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [mobileOpen]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 h-16">
        <a
          href="#"
          className="font-serif text-xl font-bold text-primary"
          data-testid="link-logo"
        >
          N.H.
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className="px-3 py-2 text-sm text-muted-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/nayeemhabib12/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin-nav"
            aria-label="LinkedIn profile"
          >
            <Button size="icon" variant="ghost" aria-label="LinkedIn">
              <SiLinkedin className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://github.com/Nayeemhabib"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-nav"
            aria-label="GitHub profile"
          >
            <Button size="icon" variant="ghost" aria-label="GitHub">
              <SiGithub className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://www.youtube.com/@Nayeemhabib12"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-youtube-nav"
            aria-label="YouTube profile"
          >
            <Button size="icon" variant="ghost" aria-label="YouTube">
              <SiYoutube className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://x.com/NayeemHabib12"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-x-nav"
            aria-label="X profile"
          >
            <Button size="icon" variant="ghost" aria-label="X">
              <SiX className="w-4 h-4" />
            </Button>
          </a>
          <a
           href="/NayeemHabib.pdf"
           target="_blank"
           rel="noopener noreferrer"
           data-testid="link-resume-nav"
           aria-label="Resume"
        >
          <Button size="sm" variant="outline">
            My Resume
         </Button>
</a>
          <div className="md:hidden relative">
            <Button
              size="icon"
              variant="ghost"
              aria-label="Open menu"
              data-testid="button-mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-12 w-48 bg-card border border-border rounded-md overflow-hidden z-50"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    className="block px-4 py-3 text-sm text-foreground/80 font-serif transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        <div
          className="absolute inset-0 opacity-[0.04] bg-repeat"
          style={{
            backgroundImage: "url(/images/pattern-overlay.png)",
            backgroundSize: "200px",
          }}
        />
      </motion.div>

      <StarField />

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
        </motion.div>

        <motion.p
          className="text-primary font-serif text-lg md:text-xl tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="text-hero-subtitle"
        >
          Hardware Engineer & Hardware Researcher.
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          data-testid="text-hero-name"
        >
          Nayeem Habib.
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-2 text-white/70 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <GraduationCap className="w-4 h-4" />
          <span className="text-sm md:text-base font-sans">
            NIT Trichy Electrical and Electronics Engineering
          </span>
          <span className="mx-2 text-primary">|</span>
          <MapPin className="w-4 h-4" />
          <span className="text-sm md:text-base font-sans">
            Tiruchirappalli, Tamil Nadu, India.
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {["NIT Trichy", "IIT Madras", "IIT Bombay","IIT Delhi", "IISC Bangalore"].map((company) => (
            <Badge
              key={company}
              variant="outline"
              className="backdrop-blur-sm no-default-hover-elevate no-default-active-elevate"
              data-testid={`badge-company-${company.toLowerCase().replace(/[^a-z]/g, "-")}`}
            >
              {company}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="#experience" data-testid="button-explore-work">
            <Button className="gap-2">
              <Star className="w-4 h-4" />
              Explore My Work
            </Button>
          </a>
          <a href="#contact" data-testid="button-get-in-touch">
            <Button variant="outline" className="backdrop-blur-sm">
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
}

const orgLogos: { name: string; icon?: typeof SiGoogle; textStyle?: string }[] = [
  { name: "Snap", icon: SiSnapchat },
  { name: "Uber", icon: SiUber },
  { name: "Stanford", textStyle: "font-serif font-bold" },
  { name: "Berkeley", textStyle: "font-serif font-bold" },
  { name: "NVIDIA", icon: SiNvidia },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Kodely", textStyle: "font-bold" },
  { name: "SMCCCD", textStyle: "font-bold" },
  { name: "Tessellations", textStyle: "font-bold" },
  { name: "LinkedIn", icon: SiLinkedin },
  { name: "ColorStack", textStyle: "font-bold" },
  { name: "Girls Who Code", textStyle: "font-bold" },
  { name: "Rewriting The Code", textStyle: "font-bold" },
  { name: "Break Through Tech", textStyle: "font-bold" },
  { name: "Harvard WECode", textStyle: "font-mono font-bold" },
  { name: "Columbia University", textStyle: "font-serif font-bold" },
  { name: "Cornell Tech", textStyle: "font-serif font-bold" },
  { name: "BNY", textStyle: "font-bold tracking-wider" },
  { name: "Liberty Mutual", textStyle: "font-bold" },
  { name: "GDC", textStyle: "font-bold tracking-wider" },
];

function LogoCarousel() {
  const doubled = [...orgLogos, ...orgLogos];

  return (
    <div className="w-full overflow-hidden py-6" data-testid="logo-carousel">
      <motion.div
        className="flex gap-8 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((org, idx) => (
          <div
            key={`${org.name}-${idx}`}
            className="flex items-center gap-2 px-4 py-2 shrink-0 text-muted-foreground/70"
            data-testid={`text-org-${org.name.toLowerCase().replace(/\s+/g, "-")}-${idx}`}
          >
            {org.icon ? (
              <>
                <org.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">{org.name}</span>
              </>
            ) : (
              <span className={`text-sm whitespace-nowrap ${org.textStyle || ""}`}>
                {org.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto relative"
    >
      <FloatingGeometry />
      <SectionHeading title="About Me" icon={BookOpen} />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={nayeemPhoto}
            alt="Nayeem Habib"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-[center_20%] border-4 border-primary/30 shadow-lg shadow-primary/10"
            data-testid="img-about-photo"
          />
        </motion.div>
        <div className="space-y-4 text-center md:text-left">
          <p className="text-lg leading-relaxed text-foreground/90" data-testid="text-about-intro">
            Hi, I'm Nayeem Habib, an Electrical and Electronics Engineering graduate from NIT Trichy with a strong passion for Digital ASIC Design & Verification, RTL Design, FPGA Development, and Computer Architecture. My interests lie in designing efficient digital systems from microarchitecture to synthesizable RTL, with a focus on functional correctness, timing awareness, pipelining, clock/reset design, and PPA optimization. I have a solid foundation in Digital Logic Design, Computer Architecture, Verilog/SystemVerilog, Functional Verification, and FPGA-based design. My technical experience includes research internships at IIT Bombay and IIT Madras, where I worked on hardware design and simulation. I am eager to contribute as an RTL Design, Digital ASIC Design, or Verification Engineer while continuously learning and building high-performance semiconductor solutions.

          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Organizations & Companies
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <LogoCarousel />
        </div>
      </div>
    </AnimatedSection>
  );
}

const experiences = [
  {
    company: "Carrier Break (Part Time Physics and Mathamatics Tutor)",
    role: "Physics and Math Tutor",
    period: "Jan 2024 - Dec 2025",
    icon: Code2,
    color: "text-yellow-500 dark:text-yellow-400",
    description: [
      "Prepared for the UPSC exam with Electrical Engineering (EEE) as my optional subject.",
      "Strengthened core concepts in Power Systems, Control Systems, Machines, and Analog and Digital Electronics.",
      "Developed strong analytical, time management, and self-discipline skills.",
    ],
    tags: ["Leadership", "Analytical Thinking", "Time Management", "Self-Discipline"],
  },
  {
    company: "IIT Madras",
    role: "Research Fellow Intern",
    period: "May 2022 - July 2022",
    icon: Code2,
    color: "text-foreground",
    description: [
      "Implemented the Particle Swarm Optimization algorithm in Verilog, achieving a processing speed of 30 percent compared to previous implementations and yielding insights for future optimization projects.",
      "Analyze three Verilog modules to display a specific 16-bit floating-point number on the FPGA board.",
      "Used Matlab, C++, FPGA Board for Project.",
    ],
    tags: ["C++", "FPGA", "Verilog", "Matlab", "Particle Swarm Optimization"],
    link: "https://drive.google.com/file/d/1IY2ZNuiPgfB00Rwg7t5fK5xEUal-UKCu/view?usp=sharing",
    linkLabel: "IIT Madras Research Project Report.",
  },
  {
    company: "National Institute of Technology, Tiruchirappalli",
    role: "Research Engineer Intern",
    period: "May 2021 - July 2021",
    icon: Code2,
    color: "text-emerald-500 dark:text-emerald-400",
    description: [
      "Developed a MultiFace LIPSYN Simulation Model using deep learning.",
      "Used Speaker Diarization, Face Detection and Recognition, Lip Synchronization Smoothing and Super Resolution using GFPGAN.",
      "Used DeepFilterNet, CNN, TensorFlow, Keras, PyTorch and NumPy."
    ],
    tags: ["Python", "CNN", "DeepFilterNet", "TensorFlow", "Keras", "PyTorch", "NumPy", "Deep Learning", "Computer Vision"],
    link: "https://drive.google.com/file/d/1OXvvZZMzOhnYyu6mZsV9QGRnVi5kQTTi/view?usp=sharing",
    linkLabel: "NIT Tiruchirappalli Research Internship Report.",
  },
  {
    company: "SMCCCD",
    role: "Web Services Intern",
    period: "October 2020 - May 2020",
    icon: Code2,
    color: "text-sky-500 dark:text-sky-400",
    description: [
      "Maintained and updated the district website, ensuring functionality and user accessibility across hundreds of web applications.",
      "Developed new web pages and online forms, leveraging content management systems for efficient workflows.",
      "Troubleshot and resolved web-related issues, supporting district-wide web applications and third-party software integration.",
    ],
    tags: ["JavaScript", "Python", "HTML/CSS", "Web Development"],
  },
];

function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Experience" icon={Briefcase} />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={exp.company}
                className={`relative flex items-start gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center z-10">
                  <Icon className={`w-5 h-5 ${exp.color}`} />
                </div>

                <div className="md:w-1/2 pl-14 md:pl-0">
                  <Card
                    className={`p-6 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
                    data-testid={`card-experience-${exp.company.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-serif text-xl font-bold">
                          {exp.company}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-center gap-1.5 text-sm text-primary"
                        data-testid={`link-experience-${exp.company.toLowerCase().replace(/[^a-z]/g, "-")}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {exp.linkLabel || "View More"}
                      </a>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
/*
const researchItems = [
  {
    org: "Stanford Intelligent Systems Laboratory",
    role: "AI Researcher",
    period: "June 2024 - Present",
    description: [
      "Developed a real-time LLM-powered pilot assistant combining Retrieval Augmented Generation with aircraft state awareness, trajectory prediction, and natural language interfaces.",
      "Implemented core AI services: runway lookup algorithm (5 nearest airports in <200ms), METAR/TAF weather parser (99% accuracy), and voice pipeline (95% transcription accuracy).",
      "Presented results to Airbus, NASA, and U.S. Air Force Test Pilot School; system is undergoing in-flight testing.",
    ],
    publication: {
      title: "Co-authored publication accepted to the European Conference on AI 2025",
      link: "https://arxiv.org/abs/2503.16477",
    },
    tags: ["LLM", "RAG", "NLP", "Aviation AI"],
  },
  {
    org: "Stanford Mineral-X",
    role: "AI Researcher",
    period: "June 2024 - July 2025",
    description: [
      "Developed a Python/Mayavi-based 3D subsurface visualization tool, enabling dynamic slicing and interactive volumetric rendering, improving geological analysis speed by 3x.",
      "Implemented modularized architecture with NumPy and PyVista, optimizing pipelines to process 10M+ voxel geological datasets with <1s latency on modern GPUs.",
      "Delivered codebase and documentation to the Mineral-X consortium, supporting studies across 5+ research teams.",
    ],
    tags: ["Python", "3D Visualization", "NumPy", "PyVista", "GPU Computing"],
    github: "https://github.com/hebaalazzeh/Mineral-X-Subsurface-Vsualization-Tool",
  },
];
*/
/*
function ResearchSection() {
  return (
    <AnimatedSection
      id="research"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Research & Publications" icon={FlaskConical} />

      <div className="grid md:grid-cols-2 gap-6">
        {researchItems.map((item, idx) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <Card
              className="p-6 h-full flex flex-col"
              data-testid={`card-research-${idx}`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold">{item.org}</h3>
                  <p className="text-primary text-sm font-medium">{item.role}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2 flex-1">
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
                  >
                    {desc}
                  </li>
                ))}
              </ul>

              {item.publication && (
                <a
                  href={item.publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-primary"
                  data-testid="link-publication"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {item.publication.title}
                </a>
              )}

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 text-sm text-primary"
                  data-testid={`link-research-github-${idx}`}
                >
                  <SiGithub className="w-3.5 h-3.5" />
                  View on GitHub
                </a>
              )}

              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
*/

const skillCategories = [
  {
    title: " Hardware Description & Verification Languages",
    skills: [
      "C++",
      "Python",
      "Java",
      "Verilog",
      "VHDL",
      "SystemVerilog",
      "VHDL",
      "JavaScript",
      "HTML/CSS",
      "LaTeX",
      "MatLab",
    ],
  },
    {
    title: "EDA Tools & Simulation",
    skills: [
      "Cadence Virtuoso",
      "Synopsys Design Compiler",
      "Synopsys VCS",
      "Xilinx Vivado",
      "Matlab",
      "LaTe",
      "LTSpice",
      "Simulink",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Node.js",
      "Next.js",
      "WordPress",
      "GraphQL",
      "Django",
      "Flask",
      "Express.js",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Kubernetes",
      "VS Code",
    ],
  },
  {
    title: "Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Mayavi",
      "SciPy",
      "Seaborn",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "PyTorch",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firebase", "SQLite"],
  },
];

function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Technical Skills" icon={Code2} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card
              className="p-5"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="font-serif text-lg font-bold mb-3 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

const educationData = [
  {
    school: "National Institute of Technology, Tiruchirappalli",
    degree: "B.Tech, Electrical and Electronics Engineering",
    period: "Aug 2019 - June 2023",
    cgpa: "7.2/10.0",
    testId: "card-education-nittrichy",
  },
  {
    school: "Govt Boys Higher Secondary School Baramulla, Jmmu & Kashmir",
    degree: "Associate of Science — English, Physics, Chemistry, Geology and Mathematics",
    period: "June 2016 - May 2018",
    cgpa: "8.6/10.0",
    testId: "card-education-csm",
  },
];


const leadershipItems = [
  {
    title: "Tronix 3D Aeronautics Researcher.",
    org: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    period: "Dec 2020 - Jun 2023",
    description: "Competitively selected 1 of 1200 undergraduates across the NIT Trichy for Tronix 3D Research Introductions Scholar program. Engaged with Best researchers and faculty in immersive workshops.",
  },
  {
    title: "Currents —  President",
    org: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    period: "Apr 2020 - May 2023",
    description: "President and led the Currents Club, organizing Hardware coding workshops, guest speaker events, and community outreach to promote diversity and inclusion in STEM.",
  },
  {
    title: "EEE Association Club NIT Trichy Vice President & Club Marketing Manager",
    org: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    period: "Jan 2020 - May 2023",
    description: "Led digital strategies to amplify presence within the tech community. Curated compelling content and fostered meaningful connections with students, faculty, and industry professionals.",
  },
  {
    title: "Vice President Festember NIT Trichy - Quality Management Team.  ",
    org: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    period: "Aug2020 - May 2023",
    description: "Led the Quality Management Team, overseeing operational planning, process improvement, and cross-functional coordination. Managed a multidisciplinary student team to ensure efficient execution and high-quality standards across large-scale campus activities.",
  },
  {
    title: "12TH Class — President to the School",
    org: "Govt Boys High School Baramulla, Jammu and Kashmir, India",
    period: "Dec 2023 - Jan 2025",
    description: "Developed and delivered STEM lessons covering UX/UI design, coding (Python beginner to advanced), game design, app design, and circuit design for K-12 students.",
  },
  {
    title: "10TH Class — Head Boy of the School",
    org: "Govt Boys High School Chakloo Baramulla, Jammu and Kashmir, India",
    period: "Dec 2014 - Jan 2016",
    description: "Led the student council, organized school events, and represented student interests to the administration. Implemented initiatives to enhance student engagement and foster a positive school culture.",
  },
];

function LeadershipSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? leadershipItems : leadershipItems.slice(0, 6);

  return (
    <AnimatedSection
      id="leadership"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Leadership & Involvement" icon={Users} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="p-5 h-full flex flex-col" data-testid={`card-leadership-${idx}`}>
              <h3 className="font-serif text-sm font-bold leading-snug">{item.title}</h3>
              <p className="text-xs text-primary mt-1">{item.org}</p>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">{item.period}</p>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {leadershipItems.length > 6 && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            data-testid="button-leadership-view-more"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View All {leadershipItems.length} Experiences
              </>
            )}
          </Button>
        </div>
      )}
    </AnimatedSection>
  );
}



const relevantCoursework =
  "Data Structures & Algorithms, Analog and Digital Electronics, Discrete Mathematics & Probability, VLSI, Power Electronics, Control Systems, Signal Processing, Signals and Systems, Computer Architecture, CMOS / VLSI Basics, Embedded Systems, Microprocessors, Power Systems, Electrical Machines, Electromagnetic Fields, Communication Systems, Electrical Measurements and Instrumentation.";

function EducationSection() {
  return (
    <AnimatedSection
      id="education"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Education" icon={GraduationCap} />

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
          >
            <Card className="p-6" data-testid={edu.testId}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-serif text-xl font-bold">{edu.school}</h3>
                  <p className="text-primary text-sm font-medium mt-1">
                    {edu.degree}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {edu.cgpa && (
                    <Badge variant="default" className="text-xs">
                      CGPA: {edu.cgpa}
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <Card className="p-6" data-testid="card-education-coursework">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground/70">
                <BookOpen className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                Relevant Coursework:
              </span>{" "}
              {relevantCoursework}
            </p>
          </Card>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

const projects = [
  {
    title: "TRAFFIC LIGHT MANAGEMENT USING AI",
    description:[
      "Developed a Simulation model of traffic light control system using AI With accuracy to 99 Percent.",
      "Utilized computer vision techniques to determine time limits on roads. Used Python, Image Processing, Object Detection and TensorFlow.",
    ],
    tags: ["Python", "AI", "Computer Vision", "Image Processing", "TensorFlow"],
    link: "https://github.com/Nayeemhabib/Traffic-Light-Management-Using-AI",
    linkLabel: "GitHub",
  },
  {
    title: "Face Recognition Biometric system",
    description:[
      " Developed a simulation model of face recognition biometric system. Used Python, Image Processing, Image Recognition, OpenCV, SciPy, SciKit.",
    ],
    tags: ["Python", "Computer Vision", "Image Processing", "OpenCV", "SciPy"],
    link: "https://github.com/Nayeemhabib/Face_Recognition_Project",
    linkLabel: "GitHub",
  },
  {
    title: "RLC filter Circuit Design and Analysis",
    description:
      "Developed a simulation model of an RLC filter circuit using Python, achieving an accuracy of up to 98 Percent. Analyzed over 100 configurations of RLC circuits to identify the optimal configuration. Used Python, NumPy, Matplotlib and SciPy..",
    tags: ["Python", "NumPy", "Matplotlib", "SciPy"],
    link: "https://github.com/Nayeemhabib/Filter_Project",
    linkLabel: "GitHub",
  },
  {
    title: "Digital-Signal-Sampling-and-Analysis",
    description:
      "Simulated DSP concepts such as sampling, aliasing, DFT, and signal reconstruction using MATLAB. Analyzed spectral resolution, frequency spectrum, and interpolation techniques for discrete-time signals. Validated Nyquist-Shannon sampling theory through practical signal processing experiments.",

    tags: ["C", "MATLAB", "Digital Signal Processing", "Signal Analysis", "Sampling Theory"],
    link: "https://github.com/Nayeemhabib/Digital-Signal-Sampling-and-Analysis",
    linkLabel: "GitHub",
  },
   {
    title: "Circuit Delay Prediction for CMOS Timing Analysis",
    description:
      "Built and evaluated ML models (Linear Regression, Gradient Boosting) to predict CMOS inverter rise/fall/average delay across voltage corners, replacing expensive SPICE simulations for early-stage timing analysis.Achieved strong R² scores with Gradient Boosting via feature engineering and 5-fold cross-validation, reducing RMSE by ~28% over the baseline model.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Matplotlib", "Pandas"],
    link: "https://github.com/Nayeemhabib/Circuit-Delay-Prediction",
    linkLabel: "GitHub",
  },
  {
    title: " VEHICLE TRACKING SYSTEM",
    description:
      "Developed a GPS tracker using Arduino to transmit location data to mobile devices via a GSM module; successfully tested on more then 10 devices, with reliable performance over a distance of up to 1 km. Used Arduino UNO, GSM Module, GPS Module, Power Supply,Connecting Wires.",
    tags: ["Python", "Arduino", "GSM", "GPS", "Embedded Systems"],
    link: "https://drive.google.com/file/d/1gFG2j1r95lRgZEo01tz8TKqjzIEvOSGE/view?usp=sharing",
    linkLabel: "Project Report",
  },
  {
    title: "SmartTix- AI Ticket System.",
    description:
      "Built a full-stack ticketing platform to streamline support ticket management with AI-powered analysis. Implemented asynchronous backend workflows with Node.js and Inngest for real-time AI feedback. Leveraged Google Gemini API to automatically prioritize and annotate tickets based on content and required skills. Developed a secure React frontend with JWT-protected routes, a dynamic admin panel, and role-based access.",
    tags: ["Node.js", "React", "MongoDB", "Google Gemini API", "JWT Authentication", "Inngest"],
    link: "https://github.com/Nayeemhabib/Smart-Ticket-An-AI-Ticket-System.",
    linkLabel: "GitHub",
  },
];

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <AnimatedSection
      id="projects"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Projects" icon={Lightbulb} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card
              className="p-6 h-full flex flex-col"
              data-testid={`card-project-${idx}`}
            >
              <h3 className="font-serif text-lg font-bold mb-2" data-testid={`text-project-title-${idx}`}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1" data-testid={`text-project-desc-${idx}`}>
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-sm text-primary"
                  data-testid={`link-project-${idx}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {project.linkLabel || "View Project"}
                </a>
              )}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            data-testid="button-projects-view-more"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View All {projects.length} Projects
              </>
            )}
          </Button>
        </div>
      )}
    </AnimatedSection>
  );
}

const recommendations = [
  {
    name: "Dr. Aneesa Farhan M A.",
    title: "Assistant Professor | National Institute of Technology, Tiruchirappalli.",
    relationship: "Associated Professor at NIT Trichy.",
    quote:
      "I had the pleasure of working with Nayeem Habib when he was my student at National Institute of Technology, Tiruchirappalli. He is highly motivated, energetic and always open to learning new things and solving problems. Any task I gave him was completed cleanly, quickly and professionally. He has a very rare and inspiring aptitude to learn and grow, and I give him my highest recommendation.",
  },
  {
    name: "Dr. Ankur Singh Rana.",
    title: "Assistant Professor | National Institute of Technology, Tiruchirappalli.",
    relationship: "Associated Professor at NIT Trichy.",
    quote:
      "I am pleased to highly recommend Nayeem Habib for any role in Signals and Systems, Fuzzy Logic, Operation Coordinato or project management. Having worked closely with Nayeem in his role as Operations Coordinator at NIT Trichy, I have seen firsthand his exceptional ability to think outside the box, solve complex challenges, and drive efficiency in fast-paced environments.",
  },
  {
    name: "Dr. Rajni Kant Mishra",
    title: "PHD Scholar | National Institute of Technology, Tiruchirappalli.",
    relationship: "PHD Scholar at NIT Trichy.",
    quote:
      "Nayeem was great to work with and did a fantastic job with the programming projects that were assigned. Nayeem took the time to research possible solutions and implemented them cleanly. Additionally, when something needed clarification or a change to the design was needed Nayeem clearly communicated the tradeoffs so that we could decide how to move forward.",
  },
];

function RecommendationsSection() {
  const [currentRec, setCurrentRec] = useState(0);

  const next = () => setCurrentRec((prev) => (prev + 1) % recommendations.length);
  const prev = () => setCurrentRec((prev) => (prev - 1 + recommendations.length) % recommendations.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const rec = recommendations[currentRec];

  return (
    <AnimatedSection
      id="recommendations"
      className="py-14 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      <SectionHeading title="Recommendations" icon={MessageSquareQuote} />

      <div className="relative">
        <Card className="p-8 md:p-10" data-testid={`card-recommendation-${currentRec}`}>
          <Quote className="w-10 h-10 text-primary/20 mb-4" />
          <motion.div
            key={currentRec}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base text-muted-foreground leading-relaxed italic" data-testid={`text-recommendation-quote-${currentRec}`}>
              "{rec.quote}"
            </p>
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="font-serif font-bold" data-testid={`text-recommendation-name-${currentRec}`}>{rec.name}</p>
              <p className="text-sm text-primary mt-0.5">{rec.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{rec.relationship}</p>
            </div>
          </motion.div>
        </Card>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            data-testid="button-recommendation-prev"
            aria-label="Previous recommendation"
            className="h-8 w-8 rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="flex gap-2">
            {recommendations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentRec(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentRec ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                data-testid={`button-recommendation-dot-${idx}`}
                aria-label={`Go to recommendation ${idx + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            data-testid="button-recommendation-next"
            aria-label="Next recommendation"
            className="h-8 w-8 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

const certifications = [
  { 
  name: "LeetCode Rank",
  issuer: "LeetCode",
  date: "Present",
  link: "https://leetcode.com/u/NayeemHabib/",
  points: [
    "Solved 200+ Problems on LeetCode.",
    "Global Rank: 45000 among 40M+ users.",
    "Strong foundation in Arrays, Trees, Graphs, Dynamic Programming, and Algorithms.",
  ],
},
  { 
  name: "Code Force Rank",
  issuer: "Code Force",
  date: "Present",
  link: "https://codeforces.com/profile/NayeemHabib",
  points: [
    "Solved 100+ Problems on Code Force.",
    "Global Rank: 45000 among 40M+ users.",
    "Strong foundation in Arrays, Trees, Graphs, Dynamic Programming, and Algorithms.",
  ],
},
  { 
  name: "CodeChefRank",
  issuer: "CodeChef",
  date: "Present",
  link: "https://www.codechef.com/users/nayeemhabib",
  points: [
    "Solved 100+ Problems on CodeChef.",
    "Global Rank:95000 among 40M+ users.",
    "Strong foundation in Arrays, Trees, Graphs, Dynamic Programming, and Algorithms.",
  ],
},
  { name: "AI/ML Geodata Analysis.", issuer: "Indian Space Research Organisation(ISRO)", date: "Mar 2022" },
  { name: "Configuration Management and the Cloud", issuer: "Google", date: "Jan 2024" },
  { name: "Troubleshooting and Debugging Techniques", issuer: "Google", date: "Dec 2024" },
  { name: "Introduction to Git and GitHub", issuer: "Google", date: "Dec 2024" },
  { name: "MATLAB Onramp", issuer: "MathWorks", date: "Dec 2024" },
  { name: "Deep Learning onramp", issuer: "MathWorks", date: "Dec 2024" },
  { name: "Crash Course on Python", issuer: "Google", date: "Dec 2024" },
  { name: "Google Data Sharing and Cyber Security.", issuer: "Indian Space Research Organisation(ISRO)", date: "Nov 2024" },
  { name: "Machine Learning with Python", issuer: "Coursera", date: "Aug 2024" },
];

function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <AnimatedSection
      id="certifications"
      className="py-14 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <SectionHeading title="Certification, Achievements & Awards" icon={Award} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCerts.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="p-4 h-full" data-testid={`card-certification-${idx}`}>
              <p className="font-medium text-sm leading-snug" data-testid={`text-certification-name-${idx}`}>{cert.name}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-primary">{cert.issuer}</span>
                {cert.date && <span className="text-xs text-muted-foreground">{cert.date}</span>}
              </div>
              {cert.points && (
                <ul className="list-disc list-inside mt-3 space-y-1 text-xs text-muted-foreground">
                  {cert.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  {cert.link}
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {certifications.length > 6 && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            data-testid="button-certifications-view-more"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View All {certifications.length} Certifications
              </>
            )}
          </Button>
        </div>
      )}
    </AnimatedSection>
  );
}

function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="py-14 px-4 sm:px-6 max-w-4xl mx-auto text-center"
    >
      <SectionHeading title="Get in Touch" icon={Mail} />

      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        I'm open to Open To Internships, Entry-level RTL Design roles, Entry-level Design Verification roles, FPGA / ASIC implementation work and Hardware architecture and protocol design opportunities. Feel free to reach out!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="mailto:alazzehheba@gmail.com" data-testid="link-contact-email">
          <Button className="gap-2">
            <Mail className="w-4 h-4" />
            nayeemhabib1232@gmail.com
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/nayeemhabib12/"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-contact-linkedin-follow"
        >
          <Button variant="outline" className="gap-2">
            <SiLinkedin className="w-4 h-4" />
            Follow on LinkedIn
          </Button>
        </a>
        <a
          href="https://github.com/Nayeemhabib"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-contact-github"
        >
          <Button variant="outline" className="gap-2">
            <SiGithub className="w-4 h-4" />
            GitHub
          </Button>
        </a>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <ArabesqueDecoration className="w-12 h-4 text-primary" />
          <span className="text-sm text-muted-foreground font-serif">
            Nayeem Habib
          </span>
          <ArabesqueDecoration className="w-12 h-4 text-primary transform scale-x-[-1]" />
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nayeem Habib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
// <ResearchSection />
export default function Home() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
      <CertificationsSection />
      <RecommendationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
