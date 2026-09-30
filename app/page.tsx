"use client";

import { useEffect, useState } from "react";
import { Globe2, X } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { translate, type Locale } from "./translations";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type MediaItem = {
  src: string;
  title: string;
  description: string;
};

// Add the external design portfolio URL here when it is available.
const DESIGN_URL = "";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

const competencies = [
  {
    number: "01",
    title: "SEO & AI Search",
    text: "SEO content, keyword research, on-page and technical SEO, AEO/GEO, schema markup, E-E-A-T and Semrush.",
  },
  {
    number: "02",
    title: "Paid Media",
    text: "Google Ads, Meta Ads, budget pacing, ROAS, conversion-funnel metrics and performance reporting.",
  },
  {
    number: "03",
    title: "Content & Creative",
    text: "Content planning, copywriting, WordPress, Canva, CapCut, graphic design, video editing and AI prompting.",
  },
  {
    number: "04",
    title: "Data & Operations",
    text: "Google Analytics, Excel, Google Sheets, CRM systems, stakeholder coordination and automation fundamentals.",
  },
  {
    number: "05",
    title: "Technical Marketing",
    text: "HTML/CSS, JavaScript, Python and SQL for SEO implementation, tracking, analysis and workflow automation.",
  },
  {
    number: "06",
    title: "Planning & Strategy",
    text: "Market research, audience segmentation, campaign planning, channel strategy, KPI setting and forecasting.",
  },
];

const ktdcMedia: MediaItem[] = [
  {
    src: "/media/kdtc/01-semrush-overview.webp",
    title: "SEO & AI Search overview",
    description: "Semrush overview showing AI visibility, citations, organic traffic and ranking keywords.",
  },
  {
    src: "/media/kdtc/02-ai-search-citation.webp",
    title: "AI search citation",
    description: "KTDC appearing as a cited source in AI-generated search results for IELTS training.",
  },
  {
    src: "/media/kdtc/03-google-ai-overview.webp",
    title: "Google AI Overview visibility",
    description: "KTDC included in a Google AI Overview for a high-intent IELTS training query.",
  },
  {
    src: "/media/kdtc/04-content-calendar.webp",
    title: "15-month content calendar",
    description: "Long-term SEO content roadmap with clusters, intent, formats, target URLs, CTAs and E-E-A-T evidence.",
  },
  {
    src: "/media/kdtc/05-on-page-checklist.webp",
    title: "On-page & content QA",
    description: "A structured quality checklist covering search intent, metadata, internal links, schema, tracking and accessibility.",
  },
  {
    src: "/media/kdtc/06-keyword-map.webp",
    title: "Keyword map & prioritization",
    description: "Keyword clustering and page mapping organized by funnel stage, intent, priority and target URL.",
  },
  {
    src: "/media/kdtc/07-media-budget.webp",
    title: "Media budget & pacing plan",
    description: "Cross-channel budget allocation, pacing, conversion, CPA, revenue and ROAS planning dashboard.",
  },
  {
    src: "/media/kdtc/08-semrush-performance.webp",
    title: "Organic performance snapshot",
    description: "Search visibility snapshot highlighting 19.7K organic traffic and 4.7K organic keywords.",
  },
  {
    src: "/media/kdtc/09-search-console.webp",
    title: "Google Search Console results",
    description: "Three-month search performance showing 19.7K clicks, 1.48M impressions and positive growth.",
  },
];

const actixMedia: MediaItem[] = [
  {
    src: "/media/actix/01-performance.webp",
    title: "Fanpage performance results",
    description: "Facebook performance showing growth in views, content interactions, visits, followers and CTA clicks.",
  },
  {
    src: "/media/actix/02-brand-mascot.webp",
    title: "Brand mascot discussion",
    description: "Social content and visual design exploring the role of mascots in brand communication.",
  },
  {
    src: "/media/actix/03-relationship-marketing.webp",
    title: "Relationship marketing series",
    description: "Educational carousel content explaining relationship marketing through brand examples.",
  },
  {
    src: "/media/actix/04-fashion-marketing.webp",
    title: "Fashion marketing discussion",
    description: "Editorial social design connecting jewelry, spirituality and fashion positioning.",
  },
  {
    src: "/media/actix/05-trendflation.webp",
    title: "Trendflation content",
    description: "Topical social post about trend cycles and the speed of digital culture.",
  },
  {
    src: "/media/actix/06-seo-education.webp",
    title: "SEO education carousel",
    description: "Educational content covering crawling, indexing and practical SEO tips.",
  },
  {
    src: "/media/actix/07-highlands-case.webp",
    title: "Highlands Coffee case study",
    description: "Brand analysis content explaining trademark protection and differentiation.",
  },
  {
    src: "/media/actix/08-megalive-discussion.webp",
    title: "Mega livestream discussion",
    description: "Social discussion creative examining deal fatigue and livestream commerce.",
  },
  {
    src: "/media/actix/09-brand-roundup.webp",
    title: "Brand campaign roundup",
    description: "A visual roundup covering contemporary campaigns from Heineken, Liu Grace, Nike and Pepsi.",
  },
];

const nutroMedia: MediaItem[] = [
  {
    src: "/media/nutro/01-performance.webp",
    title: "Content performance overview",
    description: "Meta performance dashboard showing 8.4K views, growth in three-second and one-minute views, and increased watch time.",
  },
  {
    src: "/media/nutro/02-page-overview.webp",
    title: "NUTRO Facebook Page",
    description: "The NUTRO Facebook Page identity, cover design and community presence developed for the academic project.",
  },
  {
    src: "/media/nutro/03-reels-library.webp",
    title: "Reels content library",
    description: "A collection of short-form healthy meal and lifestyle videos produced for NUTRO.",
  },
  {
    src: "/media/nutro/04-content-library.webp",
    title: "Social content library",
    description: "A broad mix of product, educational and community content created for the NUTRO Page.",
  },
];

const certificateMedia: MediaItem[] = [
  {
    src: "/media/certificates/01-aeo-fundamentals.webp",
    title: "AEO Fundamentals",
    description: "HubSpot Academy certification in Answer Engine Optimization fundamentals.",
  },
  {
    src: "/media/certificates/02-seo-hubspot.webp",
    title: "SEO Certification",
    description: "HubSpot Academy SEO certification covering website optimization for search engines.",
  },
  {
    src: "/media/certificates/03-it-certificate.webp",
    title: "Basic Information Technology",
    description: "Certificate in basic information technology applications.",
  },
  {
    src: "/media/certificates/05-google-ads-video.webp",
    title: "Google Ads Video Certification",
    description: "Google Skillshop certification in Google Ads Video.",
  },
  {
    src: "/media/certificates/06-semrush-seo.webp",
    title: "SEO Essentials with Semrush",
    description: "Semrush Academy certificate for successful completion of SEO Essentials with Semrush.",
  },
  {
    src: "/media/certificates/07-google-ads-search.webp",
    title: "Google Ads Search Certification",
    description: "Google Skillshop certification in Google Ads Search.",
  },
];

const motiMedia: MediaItem[] = [
  { src: "/media/moti/01-internship-score.png", title: "Internship evaluation · 10/10", description: "Overall internship evaluation with MOTI's signature and company stamp." },
  { src: "/media/moti/02-internship-review.png", title: "Internship performance review", description: "MOTI's assessment of working attitude, discipline, adaptability and professional performance." },
  { src: "/media/moti/03-revenue-report.png", title: "Company revenue report · 2022–2024", description: "MOTI company revenue report provided as supporting context." },
  { src: "/media/moti/04-website-proposal.jpg", title: "Website service proposal", description: "MOTI's website design quotation, including design, development and after-sales support." },
  { src: "/media/moti/05-lead-research.jpg", title: "Lead research & tracking", description: "A working spreadsheet for organizing potential business customers." },
  { src: "/media/moti/06-implementation-plan.jpg", title: "Website implementation plan", description: "Website modules, technical implementation, tools and acceptance criteria." },
  { src: "/media/moti/07-internship-confirmation.png", title: "Internship confirmation", description: "MOTI's signed and stamped letter confirming the internship placement." },
];

const outlierMedia: MediaItem[] = [
  { src: "/media/outlier/01-profile.jpg", title: "Outlier contributor profile", description: "Nguyen Duc Phuc's profile on the Outlier platform." },
];

function EvidenceGallery({
  items,
  onSelect,
  t,
}: {
  items: MediaItem[];
  onSelect: (item: MediaItem) => void;
  t: (text: string) => string;
}) {
  return (
    <div className={`media-grid${items.length === 1 ? " media-grid-single" : ""}`}>
      {items.map((item, index) => (
        <button
          className={`media-card media-card-${(index % 3) + 1}`}
          type="button"
          onClick={() => onSelect(item)}
          aria-label={`${t("Open image")}: ${t(item.title)}`}
          key={item.src}
          data-reveal
          style={{ transitionDelay: `${(index % 3) * 70}ms` }}
        >
          <span className="media-image">
            <img src={assetPath(item.src)} alt={t(item.description)} loading="lazy" decoding="async" />
          </span>
          <span className="media-caption">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{t(item.title)}</strong>
            <span aria-hidden="true">↗</span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [locale, setLocale] = useState<Locale>("en");
  const t = (text: string) => translate(locale, text);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ndp-portfolio-language");
      if (saved === "en" || saved === "vi" || saved === "zh") {
        setLocale(saved);
      }
    } catch { /* The language selector also works when storage is unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  function changeLocale(value: Locale) {
    setLocale(value);
    try { localStorage.setItem("ndp-portfolio-language", value); } catch { /* Optional preference storage. */ }
  }

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add("reveal-ready");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main lang={locale === "zh" ? "zh-CN" : locale}>
      <a className="skip-link" href="#about">{t("Skip to content")}</a>
      <header className="topbar" aria-label={t("Main navigation")}>
        <a className="brand" href="#top" aria-label={t("Back to top")}>
          NDP<span>✦</span>
        </a>
        <nav>
          <a href="#about">{t("About")}</a>
          <a href="#expertise">{t("Expertise")}</a>
          <a href="#experience">{t("Experience")}</a>
          <a href="#education">{t("Education")}</a>
        </nav>
        <div className="nav-actions">
          <div className="language-picker">
            <Globe2 size={18} aria-hidden="true" />
            <NativeSelect value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={t("Website language")}>
              <NativeSelectOption value="en" lang="en">English</NativeSelectOption>
              <NativeSelectOption value="vi" lang="vi">Tiếng Việt</NativeSelectOption>
              <NativeSelectOption value="zh" lang="zh-CN">中文</NativeSelectOption>
            </NativeSelect>
          </div>
          <a className="nav-cta" href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenducphuc.work%40gmail.com" target="_blank" rel="noreferrer">{t("Contact now")}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <div className="hero-shell">
          <div className="hero-copy-block">
            <p className="eyebrow">{t("Digital Marketing Portfolio · 2026")}</p>
            <h1 id="hero-title">
              {locale === "vi" ? "Nguyễn Đức" : "Nguyen Duc"}
              <br />
              <span>{locale === "vi" ? "Phúc" : "Phuc"}</span>
            </h1>
            <p className="hero-role">{t("Digital Marketing Specialist")}<br />
              <strong>{t("SEO & Performance Marketing")}</strong>
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#experience">{t("Explore my work")}<span aria-hidden="true">↓</span>
              </a>
              <a className="text-action" href="https://drive.google.com/drive/folders/1tE5dZMAbiOD29_nw6DafGRK3H82c9auX?usp=sharing" target="_blank" rel="noreferrer">{t("View My Video")}<span aria-hidden="true">↗</span>
              </a>
              <a className="text-action" href={DESIGN_URL || undefined} target="_blank" rel="noreferrer" role="link" aria-disabled={!DESIGN_URL} tabIndex={DESIGN_URL ? undefined : -1}>{t("View My Design")}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="portrait-wrap" aria-label={t("Portrait of Nguyen Duc Phuc")}>
            <div className="portrait-ring" aria-hidden="true" />
            <div className="portrait-card">
              <img
                src={assetPath("/media/profile.webp")}
                alt={t("Portrait of Nguyen Duc Phuc")}
                fetchPriority="high"
              />
            </div>
            <span className="portrait-chip chip-top">{t("SEO")}</span>
            <span className="portrait-chip chip-bottom">{t("GROWTH")}</span>
          </div>
        </div>

        <div className="hero-ticker" aria-label={t("Core focus areas")}>
          <span>{t("SEO")}</span><i>✦</i><span>{t("AI SEARCH")}</span><i>✦</i>
          <span>{t("PAID MEDIA")}</span><i>✦</i><span>{t("ANALYTICS")}</span><i>✦</i>
          <span>{t("GROWTH")}</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading" data-reveal>
          <p className="kicker">{t("01 · Profile")}</p>
          <h2>{t("Creative execution, grounded in data.")}</h2>
        </div>
        <div className="about-grid">
          <p className="about-lead" data-reveal>{t("I am a Digital Marketing professional with over one year of hands-on experience, focused on SEO and visibility across traditional and AI-powered search platforms.")}</p>
          <div className="about-detail" data-reveal>
            <p>{t("My background also includes Google Ads and Meta Ads campaign support, performance analysis and turning data into prioritized optimization actions.")}</p>
            <p>{t("I am building toward a Growth Marketing role where I can contribute across research, strategy, content, paid media, conversion, analytics and automation.")}</p>
          </div>
        </div>
        <div className="metric-strip" data-reveal>
          <div><strong>{t("19.7K")}</strong><span>{t("Monthly organic visits")}</span></div>
          <div><strong>{t("4.7K")}</strong><span>{t("Ranking keywords")}</span></div>
          <div><strong>98</strong><span>{t("AI mentions / citations")}</span></div>
          <div><strong>72%</strong><span>{t("Increase in CTA clicks")}</span></div>
        </div>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-heading" data-reveal>
          <p className="kicker">{t("02 · Core competencies")}</p>
          <h2>{t("A cross-functional marketing toolkit.")}</h2>
        </div>
        <div className="capability-grid">
          {competencies.map((item, index) => (
            <article
              className="capability-card"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              key={item.title}
            >
              <span className="card-number">{item.number}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading experience-heading" data-reveal>
          <p className="kicker">{t("03 · Professional experience")}</p>
          <h2>{t("Experience across search, content and performance.")}</h2>
        </div>

        <article className="experience-block featured-experience" id="outlier" data-reveal>
          <div className="experience-index">01</div>
          <div className="experience-main">
            <div className="experience-title">
              <div>
                <p className="company">{t("Self-employed · Remote")}</p>
                <h3>{t("Freelancer (UX/UI, Graphic Design, AI trainer, Video Editor, SEO)")}</h3>
              </div>
              <p className="date">{t("May 2026–Present")}</p>
            </div>
            <ul>
              <li>{t("Evaluate AI content for accuracy, clarity and compliance with project guidelines; research claims and refine responses to improve usefulness and quality.")}</li>
              <li>{t("Design website interfaces and landing page layouts, focusing on clear visual hierarchy, intuitive navigation and consistent branding.")}</li>
              <li>{t("Create social media graphics, promotional banners and advertising materials tailored to client briefs and target audiences.")}</li>
            </ul>
            <div className="evidence-header" data-reveal>
              <div>
                <p className="mini-kicker">{t("Selected evidence · 1 item")}</p>
                <h4>{t("AI training · Outlier")}</h4>
              </div>
              <p>{t("Click any item to inspect the full image.")}</p>
            </div>
            <EvidenceGallery items={outlierMedia} onSelect={setSelectedMedia} t={t} />
          </div>
        </article>

        <article className="experience-block featured-experience">
          <div className="experience-index" data-reveal>02</div>
          <div className="experience-main">
            <div className="experience-title" data-reveal>
              <div>
                <p className="company">{t("KTDC Group Co., Ltd. · Ho Chi Minh City")}</p>
                <h3>{t("Digital Marketing Executive | On-page and Technical SEO")}</h3>
              </div>
              <p className="date">{t("Oct 2025–May 2026")}</p>
            </div>
            <ul data-reveal>
              <li>{t("Executed daily SEO and website content optimization, helping maintain approximately 19.7K monthly organic visits and 4.7K ranking keywords.")}</li>
              <li>{t("Used Semrush and analytics to monitor competitors, keywords and content performance, translating findings into prioritized optimization recommendations.")}</li>
            </ul>
            <div className="evidence-header" data-reveal>
              <div>
                <p className="mini-kicker">{t("Selected evidence · 9 items")}</p>
                <h4>{t("SEO, AI Search & Planning")}</h4>
              </div>
              <p>{t("Click any item to inspect the full image.")}</p>
            </div>
            <EvidenceGallery items={ktdcMedia} onSelect={setSelectedMedia} t={t} />
          </div>
        </article>

        <article className="experience-block featured-experience">
          <div className="experience-index" data-reveal>03</div>
          <div className="experience-main">
            <div className="experience-title" data-reveal>
              <div>
                <p className="company">{t("ActiX Marketing Club · Ho Chi Minh City")}</p>
                <h3>{t("Content Marketing Executive and Designer")}</h3>
              </div>
              <p className="date">{t("Nov 2022–May 2024")}</p>
            </div>
            <ul data-reveal>
              <li>{t("Planned Facebook content and produced visual assets, contributing to 118% growth in content interactions and a 56% increase in page followers.")}</li>
              <li>{t("Monitored page performance and refined calls to action, increasing button clicks by 72%. Created banners and social posts with consistent messaging.")}</li>
            </ul>
            <div className="evidence-header" data-reveal>
              <div>
                <p className="mini-kicker">{t("Selected evidence · 9 items")}</p>
                <h4>{t("Content, Design & Performance")}</h4>
              </div>
              <p>{t("Click any item to inspect the full image.")}</p>
            </div>
            <EvidenceGallery items={actixMedia} onSelect={setSelectedMedia} t={t} />
          </div>
        </article>

        <article className="experience-block featured-experience" id="moti" data-reveal>
          <div className="experience-index">04</div>
          <div className="experience-main">
            <div className="experience-title">
              <div>
                <p className="company">{t("MOTI Co., Ltd. · Ho Chi Minh City")}</p>
                <h3>{t("Marketing Generalist Intern")}</h3>
              </div>
              <p className="date">{t("Dec 2023–May 2024")}</p>
            </div>
            <ul>
              <li>{t("Researched customer segments, competitors and market trends to support campaign planning and audience-focused promotional content.")}</li>
              <li>{t("Supported content, lead tracking and promotion for 11 sales activation events; received a 10/10 internship performance evaluation.")}</li>
            </ul>
            <div className="evidence-header" data-reveal>
              <div>
                <p className="mini-kicker">{t("Selected evidence · 7 items")}</p>
                <h4>{t("Internship, research & project support")}</h4>
              </div>
              <p>{t("Click any item to inspect the full image.")}</p>
            </div>
            <EvidenceGallery items={motiMedia} onSelect={setSelectedMedia} t={t} />
          </div>
        </article>
      </section>

      <section className="section project-section" id="projects">
        <div className="section-heading" data-reveal>
          <p className="kicker">{t("04 · Selected marketing project")}</p>
          <h2>{t("NUTRO Digital Marketing Project")}</h2>
        </div>
        <div className="project-card" data-reveal>
          <div className="project-meta">
            <span>{t("Academic project")}</span>
            <span>{t("Industrial University of Ho Chi Minh City")}</span>
          </div>
          <div className="project-results">
            <div><strong>513</strong><span>{t("Facebook followers")}</span></div>
            <div><strong>196.7%</strong><span>{t("Increase in page views")}</span></div>
            <div><strong>50%</strong><span>{t("Increase in page visits")}</span></div>
          </div>
          <p>{t("Managed the Facebook Page and content plan, monitored audience response and refined content and CTA execution to improve reach, engagement and measurable page growth.")}</p>
          <div className="nutro-evidence-header">
            <p className="mini-kicker">{t("Selected evidence · 4 items")}</p>
            <p>{t("Click any item to inspect the full image.")}</p>
          </div>
          <div className="nutro-gallery">
            <EvidenceGallery items={nutroMedia} onSelect={setSelectedMedia} t={t} />
          </div>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading" data-reveal>
          <p className="kicker">{t("05 · Education & credentials")}</p>
          <h2>{t("Built on marketing fundamentals, sharpened through practice.")}</h2>
        </div>
        <div className="education-grid">
          <article className="education-card primary-education" data-reveal>
            <p className="mini-kicker">{t("Education · Aug 2021 - Jun 2025")}</p>
            <h3>{t("Bachelor of Marketing")}</h3>
            <p className="education-subtitle">{t("Digital Marketing Major · Industrial University of Ho Chi Minh City")}</p>
            <p>{t("Thesis: “Determinants of Online Purchase Intention among Generation Z in Ho Chi Minh City: The Role of Electronic Word-of-Mouth.”")}</p>
          </article>
          <article className="education-card certification-card" data-reveal>
            <p className="mini-kicker">{t("Certifications")}</p>
            <ul>
              <li>{t("Google Ads Search, Video & Measurement · Google Skillshop")}</li>
              <li>{t("SEO Certification · HubSpot Academy")}</li>
              <li>{t("SEO Essentials · Semrush Academy")}</li>
              <li>{t("Functional Speed Dating - Digital Marketing · L'Oreal")}</li>
            </ul>
          </article>
        </div>
        <div className="language-strip" data-reveal>
          <span>{t("Vietnamese · Native")}</span>
          <span>{t("English · B2 (Listening, Reading, Writing, Speaking)")}</span>
          <span>{t("Chinese · HSK 1")}</span>
          <span>{t("ActiX events · 200+ students")}</span>
        </div>
        <div className="certificate-evidence-header" data-reveal>
          <div>
            <p className="mini-kicker">{t("Verified credentials · 6 images received")}</p>
            <h3>{t("Certificates & credentials")}</h3>
          </div>
          <p>{t("Click any certificate to inspect the full image.")}</p>
        </div>
        <div className="certificates-gallery">
          <EvidenceGallery items={certificateMedia} onSelect={setSelectedMedia} t={t} />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy" data-reveal>
          <p className="kicker">{t("Let's connect")}</p>
          <h2>{t("Ready to create measurable growth.")}</h2>
        </div>
        <div className="contact-links" data-reveal>
          <a href="mailto:nguyenducphuc.work@gmail.com">
            nguyenducphuc.work@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+84327404297">
            +84 327 404 297 <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/phucnguyenduc-work"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <p>{t("Nguyen Duc Phuc · Digital Marketing Portfolio")}</p>
        <a href="#top">{t("Back to top ↑")}</a>
      </footer>

      <Dialog
        open={selectedMedia !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMedia(null);
        }}
      >
        <DialogContent className="evidence-dialog" showCloseButton={false} lang={locale === "zh" ? "zh-CN" : locale}>
          <DialogHeader>
            <DialogTitle>{t(selectedMedia?.title ?? "Portfolio evidence")}</DialogTitle>
            <DialogDescription>
              {t(selectedMedia?.description ?? "Selected portfolio evidence.")}
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="gallery-close" aria-label={t("Close image")}><X size={22} aria-hidden="true" /></DialogClose>
          {selectedMedia && (
            <>
              <div className="dialog-image-wrap">
                <img src={assetPath(selectedMedia.src)} alt={t(selectedMedia.description)} />
              </div>
              <a className="original-image-link" href={assetPath(selectedMedia.src)} target="_blank" rel="noreferrer">
                {t("View original image")} <span aria-hidden="true">↗</span>
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
