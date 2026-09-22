// Central UI strings. Add a key to BOTH languages (TypeScript enforces it).
const en = {
  nav: { about: "About", experience: "Experience", projects: "Projects", certificates: "Certificates", skills: "Skills", contact: "Contact" },
  cta: { cv: "Download CV", viewProjects: "View Projects", letsTalk: "Contact", viewProject: "View Project", viewDetails: "View Details" },
  sections: {
    experience: { label: "Experience", title: "Experience" },
    projects: { label: "Projects", title: "Projects", intro: "Selected systems and applications — open any project for the full story." },
    more: "More Projects",
    certificates: { label: "Certificates & Training", title: "Certificates & Training" },
    skills: { label: "Technical Skills", title: "Technical Skills" },
    contact: { label: "Contact", title: "Let’s build something intelligent.", text: "Interested in autonomous systems, software or ambitious engineering projects? I’d love to hear from you." },
  },
  detail: {
    back: "Back to Projects",
    year: "Year",
    role: "My Role",
    overview: "Overview",
    approach: "Technical Approach",
    features: "Key Features",
    architecture: "System Architecture",
    technologies: "Technologies",
    gallery: "Gallery",
    results: "Results & Achievements",
    next: "Next project",
    architectureImage: "Architecture diagram",
  },
  footer: "Autonomous systems + strong software engineering",
  present: "Present",
  language: "Language",
  menu: "Menu",
};

const tr: typeof en = {
  nav: { about: "Hakkımda", experience: "Deneyim", projects: "Projeler", certificates: "Sertifikalar", skills: "Beceriler", contact: "İletişim" },
  cta: { cv: "CV İndir", viewProjects: "Projeleri Gör", letsTalk: "İletişim", viewProject: "Projeyi Gör", viewDetails: "Detayları Gör" },
  sections: {
    experience: { label: "Deneyim", title: "Deneyim" },
    projects: { label: "Projeler", title: "Projeler", intro: "Seçili sistemler ve uygulamalar — tüm hikâye için projeye tıklayın." },
    more: "Diğer Projeler",
    certificates: { label: "Sertifikalar & Eğitimler", title: "Sertifikalar & Eğitimler" },
    skills: { label: "Teknik Beceriler", title: "Teknik Beceriler" },
    contact: { label: "İletişim", title: "Birlikte akıllı bir şeyler geliştirelim.", text: "Otonom sistemler, yazılım ya da iddialı mühendislik projeleriyle ilgileniyor musunuz? Sizden haber almak isterim." },
  },
  detail: {
    back: "Projelere Dön",
    year: "Yıl",
    role: "Rolüm",
    overview: "Genel Bakış",
    approach: "Teknik Yaklaşım",
    features: "Temel Özellikler",
    architecture: "Sistem Mimarisi",
    technologies: "Teknolojiler",
    gallery: "Galeri",
    results: "Sonuçlar & Başarılar",
    next: "Sonraki proje",
    architectureImage: "Mimari şeması",
  },
  footer: "Otonom sistemler + güçlü yazılım mühendisliği",
  present: "Devam Ediyor",
  language: "Dil",
  menu: "Menü",
};

export const ui = { en, tr };
export type Dict = typeof en;
