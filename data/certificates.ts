import type { L } from "@/lib/i18n";

export type Certificate = {
  id: string;
  institution: string;
  program: L;
  date: L;
  items?: L[]; // sub-programs
  certificateUrl?: string; // add a link / PDF later, e.g. "/certificates/btk-git.pdf"
};

export const certificates: Certificate[] = [
  {
    id: "mta",
    institution: "Milli Teknoloji Akademisi",
    program: { tr: "Otonom Sürüş Teknolojileri Temel Eğitim", en: "Autonomous Driving Technologies — Fundamentals" },
    date: { tr: "Ocak 2026 – Şubat 2026", en: "January 2026 – February 2026" },
  },
  {
    id: "btk",
    institution: "BTK Akademi",
    program: { tr: "Versiyon Kontrolleri: Git ve GitHub", en: "Version Control: Git & GitHub" },
    date: { tr: "2025", en: "2025" },
  },
  {
    id: "akbank",
    institution: "Akbank Gençlik Akademisi",
    program: { tr: "Siber Güvenlik Analisti Programı", en: "Cyber Security Analyst Program" },
    date: { tr: "2024 – 2025", en: "2024 – 2025" },
    items: [
      { tr: "Cisco ile Siber Güvenliğe Giriş", en: "Introduction to Cybersecurity with Cisco" },
      { tr: "NDG Linux Unhatched", en: "NDG Linux Unhatched" },
      { tr: "CCNAv7 – Ağlara Giriş", en: "CCNAv7 – Introduction to Networks" },
      { tr: "CyberOps Associate", en: "CyberOps Associate" },
    ],
  },
  {
    id: "yetgen",
    institution: "YetGen",
    program: { tr: "21. Yüzyıl Becerileri Farkındalık Programı", en: "21st Century Skills Awareness Program" },
    date: { tr: "Nisan 2023 – Temmuz 2024", en: "April 2023 – July 2024" },
  },
  {
    id: "cukurova",
    institution: "Çukurova Teknokent",
    program: { tr: "Python ile Görüntü İşleme", en: "Image Processing with Python" },
    date: { tr: "Aralık 2023 – Ocak 2024", en: "December 2023 – January 2024" },
  },
];
