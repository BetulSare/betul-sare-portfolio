// ─────────────────────────────────────────────────────────────
// Projects — content sourced from the CV & portfolio PDF (TR + EN).
// Add a project: append to `projects` (order = order on the site).
// Images live in public/projects/<imageDir>/  →  cover.jpg + gallery files (01.jpg …).
// Missing images fall back to a clean placeholder automatically.
// ─────────────────────────────────────────────────────────────
import type { L, LL } from "@/lib/i18n";

export type Project = {
  id: string;
  slug: string; // route: /tr/projects/<slug>
  imageDir: string; // folder in public/projects
  featured?: boolean; // first six = large cards
  uav?: boolean;
  title: L;
  shortDescription: L;
  description: L;
  role: L;
  year?: string;
  category: L;
  technologies: string[];
  badge?: L;
  approach?: LL;
  features: LL;
  architecture?: { label: L; items: string[] }[];
  architectureImage?: string; // e.g. "architecture.jpg" — drop your diagram in the project folder
  results?: { value: string; label: L }[];
  gallery: { file: string; caption?: L }[];
  galleryFit?: "cover" | "contain" | "phones";
};

const g = (...files: string[]) => files.map((file) => ({ file }));

export const projects: Project[] = [
  {
    id: "teknofest-2026", slug: "teknofest-2026-swarm", imageDir: "teknofest-2026", featured: true, uav: true,
    title: { tr: "Otonom Sürü İHA — TEKNOFEST 2026", en: "Autonomous Swarm UAV System — TEKNOFEST 2026" },
    shortDescription: {
      tr: "Lider–takipçi mimarisinde, dinamik QR görev zinciri ve Flutter tabanlı mobil yer kontrol istasyonuyla çalışan otonom sürü İHA sistemi.",
      en: "Autonomous swarm UAV system on a leader–follower architecture, with a dynamic QR mission chain and a Flutter mobile ground control station.",
    },
    description: {
      tr: "2026 TEKNOFEST Sürü İHA Yarışması'nda takım kaptanı olarak sürü sisteminin yazılım geliştirme ve görev entegrasyon süreçlerini yönettim. Geliştirdiğimiz özgün görev algoritmaları ve mobil Yer Kontrol İstasyonu sayesinde En Özgün Yazılım Ödülü'nü kazandık.",
      en: "As team captain at the TEKNOFEST 2026 Swarm UAV Competition I led software development and mission integration for the swarm system. Our original mission algorithms and mobile Ground Control Station earned the Original Software Award.",
    },
    role: { tr: "Takım Kaptanı / Yazılım Geliştirme", en: "Team Captain / Software Development" },
    year: "2026",
    category: { tr: "Otonom Sistemler · Yarışma", en: "Autonomous Systems · Competition" },
    technologies: ["Python", "Flutter", "MAVLink", "ArduPilot", "TCP/UDP", "Computer Vision"],
    badge: { tr: "En Özgün Yazılım Ödülü", en: "Original Software Award" },
    approach: {
      tr: [
        "ArduPilot ve MAVLink tabanlı çoklu İHA kontrol altyapısı; lider–takipçi mimarisi üzerinde çalışan otonom sürü yapısı.",
        "QR tabanlı görev zinciri, formasyon değiştirme, bekleme ve hedefe yönelme gibi karar mekanizmalarının otonom çalıştırılması.",
        "İHA'lar arasında gerçek zamanlı veri paylaşımı, görev senkronizasyonu ve çarpışma önleme için haberleşme ve güvenlik algoritmaları.",
      ],
      en: [
        "ArduPilot and MAVLink based multi-UAV control infrastructure; an autonomous swarm running on a leader–follower architecture.",
        "Decision mechanisms such as QR-based mission chain, formation switching, holding and target approach executed autonomously.",
        "Communication and safety algorithms for real-time inter-UAV data sharing, mission synchronization and collision avoidance.",
      ],
    },
    features: {
      tr: [
        "Dinamik QR görev zinciri",
        "Otonom formasyon değişimi",
        "Gerçek zamanlı araçlar arası veri paylaşımı ve görev senkronizasyonu",
        "Çarpışma önleme algoritmaları",
        "Flutter tabanlı mobil Yer Kontrol İstasyonu: telemetri, araç konum takibi ve görev durumu tek arayüzde",
        "Otonom görev yönetimi",
      ],
      en: [
        "Dynamic QR mission chain",
        "Autonomous formation switching",
        "Real-time inter-vehicle data sharing and mission synchronization",
        "Collision avoidance algorithms",
        "Flutter mobile Ground Control Station: telemetry, vehicle position tracking and mission status in one interface",
        "Autonomous mission management",
      ],
    },
    architecture: [
      { label: { tr: "Yer", en: "Ground" }, items: ["Flutter mobile GCS", "Telemetry · position · mission status"] },
      { label: { tr: "Görev", en: "Mission" }, items: ["QR mission chain", "Formation switching", "Synchronization"] },
      { label: { tr: "Haberleşme", en: "Communication" }, items: ["TCP / UDP", "Inter-UAV data sharing"] },
      { label: { tr: "Araç", en: "Vehicle" }, items: ["ArduPilot", "MAVLink", "Collision avoidance"] },
    ],
    results: [
      { value: "★", label: { tr: "En Özgün Yazılım Ödülü — TEKNOFEST 2026 Sürü İHA Yarışması", en: "Original Software Award — TEKNOFEST 2026 Swarm UAV Competition" } },
      { value: "Finalist", label: { tr: "ATÜ FLYLAB YGM · TEKNOFEST 2026", en: "ATÜ FLYLAB YGM · TEKNOFEST 2026" } },
    ],
    gallery: [
      { file: "01.jpg" }, { file: "02.jpg" },
      { file: "03.jpg", caption: { tr: "Takım / yarışma", en: "Team / competition" } },
    ],
  },
  {
    id: "suas-2026", slug: "suas-2026", imageDir: "suas-2026", featured: true, uav: true,
    title: { tr: "SUAS 2026 — Otonom İHA Sistemi", en: "SUAS 2026 — Autonomous UAV System" },
    shortDescription: {
      tr: "Hedef tespiti, hedefin coğrafi konum kestirimi, ortomozaik haritalama ve otonom faydalı yük bırakma.",
      en: "Target detection, geographic target position estimation, orthomosaic mapping and autonomous payload release.",
    },
    description: {
      tr: "SUAS 2026 (ABD) yarışmasında finalist olan GIRIFT UAV takımı için otonom hedef tespiti, hedef konum kestirimi ve faydalı yük bırakma görevlerine yönelik İHA yazılım sistemleri geliştirdim.",
      en: "I developed UAV software systems for the SUAS 2026 (USA) finalist GIRIFT UAV team: autonomous target detection, target position estimation and payload release.",
    },
    role: { tr: "Yazılım Geliştirme · GIRIFT UAV", en: "Software Development · GIRIFT UAV" },
    year: "2026",
    category: { tr: "Görüntü İşleme · Yarışma", en: "Computer Vision · Competition" },
    technologies: ["Python", "YOLO", "OpenCV", "MAVLink", "Jetson", "Pixhawk"],
    approach: {
      tr: [
        "Kamera görüntülerinden yapay zekâ tabanlı hedef tespiti; GPS, irtifa ve kamera verileriyle hedefin coğrafi konumunun hesaplanması.",
        "Jetson ve Pixhawk arasında MAVLink haberleşmesi kurularak görüntü işleme, görev algoritmaları ve uçuş kontrolünün entegrasyonu.",
      ],
      en: [
        "AI-based target detection from camera images; the target's geographic position computed from GPS, altitude and camera data.",
        "MAVLink link between Jetson and Pixhawk integrating image processing, mission algorithms and flight control.",
      ],
    },
    features: {
      tr: [
        "Otonom hedef tespiti (autonomous target detection)",
        "Hedef coğrafi konum kestirimi: GPS + irtifa + kamera geometrisi",
        "Uçuş sırasında elde edilen hava fotoğraflarından ortomozaik haritalama",
        "Hedefe otonom yaklaşma",
        "Faydalı yük bırakma mekanizmasının yazılımla kontrolü",
      ],
      en: [
        "Autonomous target detection",
        "Geographic target position estimation: GPS + altitude + camera geometry",
        "Orthomosaic mapping from aerial photos captured in flight",
        "Autonomous approach to detected targets",
        "Software-controlled payload release mechanism",
      ],
    },
    architecture: [
      { label: { tr: "Algı", en: "Perception" }, items: ["YOLO", "OpenCV", "Target detection"] },
      { label: { tr: "Kestirim", en: "Estimation" }, items: ["GPS + altitude", "Camera geometry"] },
      { label: { tr: "Gömülü bilgisayar", en: "Onboard compute" }, items: ["Jetson", "Orthomosaic mapping"] },
      { label: { tr: "Uçuş kontrolcüsü", en: "Flight controller" }, items: ["Pixhawk", "MAVLink", "Payload release"] },
    ],
    results: [{ value: "Finalist", label: { tr: "SUAS 2026 (ABD)", en: "SUAS 2026 (USA)" } }],
    gallery: [
      { file: "01.jpg", caption: { tr: "İHA", en: "UAV" } },
      { file: "02.jpg", caption: { tr: "Ortomozaik harita", en: "Orthomosaic mapping result" } },
      { file: "03.jpg", caption: { tr: "Hedef tespiti", en: "Target detection" } },
      { file: "04.jpg", caption: { tr: "Görev / faydalı yük", en: "Mission / payload" } },
    ],
  },
  {
    id: "pars", slug: "pars", imageDir: "pars", featured: true, uav: true,
    title: { tr: "P.A.R.S. Otonom Sürü İHA İzleme Sistemi", en: "P.A.R.S. Autonomous Multi-UAV Surveillance System" },
    shortDescription: {
      tr: "Bitirme projesi: mobil ve masaüstü yer kontrol istasyonlarıyla sürü İHA gözetleme sistemi.",
      en: "Graduation project: swarm UAV surveillance with mobile and desktop ground control stations.",
    },
    description: {
      tr: "Bitirme projesi kapsamında mobil ve masaüstü uygulamalarla çoklu İHA kontrolü sağlayan bir sürü İHA gözetleme sistemi geliştirdim; Gazebo ve ArduPilot tabanlı simülasyon altyapısını kurdum, gerçek zamanlı veri iletimi ve görev planlamayı MAVLink ile gerçekleştirdim.",
      en: "For my graduation project I built a swarm UAV surveillance system controlling multiple UAVs through mobile and desktop applications, set up a Gazebo and ArduPilot simulation environment and handled real-time data and mission planning over MAVLink.",
    },
    role: { tr: "Yazılım Geliştirme · Mobil + Masaüstü YKİ", en: "Software Development · Mobile + Desktop GCS" },
    year: "2025",
    category: { tr: "Bitirme Projesi · Otonom Sistemler", en: "Graduation Project · Autonomous Systems" },
    technologies: ["Flutter", "C++", "Qt", "MAVSDK", "MAVLink", "TCP Socket", "Google Maps", "Gazebo", "ArduPilot SITL", "ROS"],
    approach: {
      tr: [
        "Mobil YKİ: İHA verileri sanal özel ağ (VPN/VPC) üzerinden TCP Socket ile güvenli biçimde alınır.",
        "Masaüstü YKİ: C++ ve Qt ile düşük gecikmeli arayüz; MAVSDK ile telemetri ve çoklu bağlantı desteğiyle tüm sürü tek arayüzden yönetilir.",
        "Algoritmalar ve arayüz Gazebo ve ArduPilot SITL ortamında simüle edilerek test edildi.",
      ],
      en: [
        "Mobile GCS: UAV data received securely over a virtual private network (VPN/VPC) using TCP sockets.",
        "Desktop GCS: low-latency C++ / Qt interface; telemetry via MAVSDK with multi-connection support to manage the whole swarm from one interface.",
        "Algorithms and UI simulated and tested in Gazebo and ArduPilot SITL.",
      ],
    },
    features: {
      tr: [
        "Çoklu İHA izleme ve gerçek zamanlı telemetri (batarya, GPS konumu, hız, irtifa)",
        "Harita entegrasyonu ile dinamik konum takibi (Google Maps)",
        "Sürü formasyonunun ve her İHA'nın durumunun anlık görselleştirilmesi",
        "TCP Socket haberleşmesi ve MAVLink",
        "Çoklu İHA koordinasyonu",
      ],
      en: [
        "Multi-UAV monitoring and real-time telemetry (battery, GPS position, speed, altitude)",
        "Dynamic position tracking with map integration (Google Maps)",
        "Live visualization of swarm formation and each UAV's status",
        "TCP socket communication and MAVLink",
        "Multi-UAV coordination",
      ],
    },
    architecture: [
      { label: { tr: "Mobil YKİ", en: "Mobile GCS" }, items: ["Flutter (Android)", "Google Maps API", "Network security"] },
      { label: { tr: "Ağ", en: "Network" }, items: ["TCP Socket", "VPN / VPC"] },
      { label: { tr: "Masaüstü YKİ", en: "Desktop GCS" }, items: ["C++ / Qt", "MAVSDK", "Multi-connection"] },
      { label: { tr: "Simülasyon", en: "Simulation" }, items: ["Gazebo", "ArduPilot SITL", "ROS"] },
    ],
    architectureImage: "architecture.jpg",
    gallery: g("01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"),
    galleryFit: "contain",
  },
  {
    id: "atubis", slug: "atubis", imageDir: "atubis", featured: true,
    title: { tr: "ATÜBİS — Akıllı Bisiklet Yönetim Sistemi", en: "ATÜBİS — Smart Bicycle Management System" },
    shortDescription: {
      tr: "IoT tabanlı, mobil ve masaüstünde çalışan akıllı bisiklet yönetim sistemi. Üniversitede aktif olarak kullanılıyor.",
      en: "IoT-based smart bicycle management system for mobile and desktop — in active use at the university.",
    },
    description: {
      tr: "Flutter ile mobil ve masaüstü platformlarda çalışan IoT tabanlı bir bisiklet yönetim sistemi. FastAPI ve WebSocket ile IoT cihazlarından gelen telemetriyi gerçek zamanlı işleyen backend altyapısını tasarladım; sistem üniversitemde aktif olarak kullanılıyor.",
      en: "An IoT-based bicycle management system running on mobile and desktop with Flutter. I designed the backend that processes IoT telemetry in real time with FastAPI and WebSocket; the system is actively used at my university.",
    },
    role: { tr: "Full-stack Geliştirme", en: "Full-stack Development" },
    year: "2026",
    category: { tr: "IoT · Gerçek Sistem", en: "IoT · Real-world System" },
    technologies: ["Flutter", "FastAPI", "WebSocket", "PostgreSQL", "RFID"],
    approach: {
      tr: [
        "IoT akıllı kilitlerden konum, batarya ve telemetri verileri REST (FastAPI) ve WebSocket ile gerçek zamanlı toplanır.",
        "PostgreSQL tabanlı backend kullanıcı, cihaz ve kullanım verilerini ölçeklenebilir biçimde yönetir.",
      ],
      en: [
        "Location, battery and telemetry from IoT smart locks collected in real time via REST (FastAPI) and WebSocket.",
        "PostgreSQL backend manages user, device and usage data in a scalable way.",
      ],
    },
    features: {
      tr: [
        "Flutter ile mobil ve masaüstü çoklu platform uygulaması",
        "RFID destekli kilit sistemi: yalnızca sisteme kayıtlı öğrencilerin eriştiği, sunucu kontrollü güvenli kullanım",
        "Bisikletlerin harita üzerinden anlık izlenmesi ve durum takibi",
      ],
      en: [
        "Flutter multi-platform app for mobile and desktop",
        "RFID-supported lock system: server-controlled secure use restricted to registered students",
        "Live map tracking and status monitoring of bicycles",
      ],
    },
    architecture: [
      { label: { tr: "İstemciler", en: "Clients" }, items: ["Flutter mobile", "Flutter desktop", "Live map"] },
      { label: { tr: "Backend", en: "Backend" }, items: ["FastAPI", "WebSocket", "PostgreSQL"] },
      { label: { tr: "Cihaz", en: "Device" }, items: ["IoT smart lock", "RFID access", "Live telemetry"] },
    ],
    results: [{ value: "Live", label: { tr: "Üniversitede aktif olarak kullanılıyor", en: "In active use at the university" } }],
    gallery: g("01.jpg", "02.jpg", "03.jpg", "04.jpg"),
    galleryFit: "contain",
  },
  {
    id: "dil-rehberi", slug: "dil-rehberi-ai", imageDir: "dil-rehberi-ai", featured: true,
    title: { tr: "Dil Rehberi AI", en: "Dil Rehberi AI" },
    shortDescription: {
      tr: "Yabancılar için yapay zekâ destekli Türkçe öğrenme asistanı: gramer hatası tespiti ve otomatik düzeltme.",
      en: "AI-powered Turkish learning assistant for foreigners: grammar error detection and automatic correction.",
    },
    description: {
      tr: "Yabancılar için Türkçe öğrenmeyi hedefleyen, BERTurk ve mT5 modellerini fine-tune ederek gramer hata tespiti ve pedagojik düzeltme sistemi geliştirdim; Flutter ile çoklu platform uygulamasını yazdım.",
      en: "A Turkish-learning assistant for foreigners: I fine-tuned BERTurk and mT5 for grammar error detection and pedagogical correction and built the multi-platform Flutter app.",
    },
    role: { tr: "ML + Backend + Mobil Geliştirme", en: "ML + Backend + Mobile Development" },
    year: "2026",
    category: { tr: "Yapay Zekâ · Dil Öğrenme", en: "AI · Language Learning" },
    technologies: ["BERTurk", "mT5", "FastAPI", "Flutter"],
    approach: {
      tr: [
        "TrCoLA ve opus100 veri setlerinden oluşturulan özel veri setiyle BERTurk, ikili sınıflandırma görevi için fine-tune edildi.",
        "mT5-small, hatalı→doğru cümle çiftleriyle seq2seq formatında eğitilerek düzeltme ve pedagojik açıklama üretimi sağlandı.",
        "BERTurk (sınıflandırma) ve mT5 (seq2seq düzeltme) modelleri FastAPI REST API altında tek pipeline'da birleştirildi.",
      ],
      en: [
        "BERTurk fine-tuned for binary classification on a custom dataset built from TrCoLA and opus100.",
        "mT5-small trained on wrong→correct sentence pairs (seq2seq) to produce corrections and pedagogical explanations.",
        "BERTurk (classification) and mT5 (seq2seq correction) combined into a single pipeline behind a FastAPI REST API.",
      ],
    },
    features: {
      tr: [
        "iOS, Android ve masaüstünde çalışan multiplatform Flutter uygulaması",
        "Senaryo tabanlı chatbot (çay bahçesi, pazar, eczane vb.)",
        "Cümle düzeltici ve ilerleme takibi modülleri",
      ],
      en: [
        "Multi-platform Flutter app for iOS, Android and desktop",
        "Scenario-based chatbot (tea garden, market, pharmacy…)",
        "Sentence corrector and progress-tracking modules",
      ],
    },
    architecture: [
      { label: { tr: "İstemci", en: "Client" }, items: ["Flutter", "Chatbot · Corrector · Progress"] },
      { label: { tr: "API", en: "API" }, items: ["FastAPI", "REST"] },
      { label: { tr: "Modeller", en: "Models" }, items: ["BERTurk (classification)", "mT5-small (seq2seq)"] },
    ],
    results: [
      { value: "73%", label: { tr: "Test doğruluğu (BERTurk)", en: "Test accuracy (BERTurk)" } },
      { value: "0.73", label: { tr: "Macro F1", en: "Macro F1" } },
    ],
    gallery: g("01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"),
    galleryFit: "phones",
  },
  {
    id: "findora", slug: "findora", imageDir: "findora", featured: true,
    title: { tr: "FINDORA — Graf Tabanlı Sosyal Öneri Sistemi", en: "FINDORA — Graph-Based Social Recommendation" },
    shortDescription: {
      tr: "Film, dizi, kitap ve müzik için sosyal destekli hibrit öneri platformu; Neo4j graf veritabanı üzerinde çalışır.",
      en: "Socially-supported hybrid recommendation platform for films, series, books and music, built on a Neo4j graph database.",
    },
    description: {
      tr: "Film, dizi, kitap ve müzik içerikleri için sosyal destekli bir öneri platformu geliştirdim. Kullanıcı–içerik ilişkilerini Neo4j graf veritabanında modelledim ve Cypher sorguları ile çok katmanlı bir öneri motoru tasarladım.",
      en: "I built a socially-supported recommendation platform for films, series, books and music, modeling user–content relations in Neo4j and designing a multi-layer recommendation engine with Cypher.",
    },
    role: { tr: "Full-stack Geliştirme", en: "Full-stack Development" },
    year: "2026",
    category: { tr: "Backend · Öneri Sistemi", en: "Backend · Recommendation" },
    technologies: ["Neo4j", "Cypher", "FastAPI", "Flutter"],
    approach: {
      tr: [
        "Neo4j graf veritabanı ile kullanıcılar ve içerikler arasındaki ilişkilerin modellenmesi.",
        "Cypher sorguları ve graph traversal mantığı ile dinamik öneriler üretilmesi.",
        "FastAPI ile RESTful API yapısı kurularak sistemin tüm veri akışının yönetilmesi.",
      ],
      en: [
        "User–content relationships modeled in a Neo4j graph database.",
        "Dynamic recommendations produced with Cypher queries and graph traversal.",
        "FastAPI RESTful API managing the system's entire data flow.",
      ],
    },
    features: {
      tr: [
        "Beğeni, takip gibi kullanıcı etkileşimlerini işleyen ölçeklenebilir backend mimarisi",
        "Modern ve responsive Flutter arayüzü",
        "Gerçek zamanlı etkileşimler ve veri güncellemeleri için API tabanlı dinamik yapı",
      ],
      en: [
        "Scalable backend architecture processing user interactions such as likes and follows",
        "Modern, responsive Flutter interface",
        "API-based dynamic structure for real-time interactions and data updates",
      ],
    },
    architecture: [
      { label: { tr: "İstemci", en: "Client" }, items: ["Flutter", "Discover · Profile · Friends"] },
      { label: { tr: "API", en: "API" }, items: ["FastAPI", "REST"] },
      { label: { tr: "Graf", en: "Graph" }, items: ["Neo4j", "Cypher", "Graph traversal"] },
    ],
    gallery: g("01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"),
    galleryFit: "phones",
  },

  // ─── More projects ───
  {
    id: "passport", slug: "pasaport-yonetim-sistemi", imageDir: "passport",
    title: { tr: "Pasaport Yönetim Sistemi", en: "Passport Management System" },
    shortDescription: {
      tr: "Bir turizm acentesinin canlı ortamda kullandığı, uçtan uca pasaport ve yolcu yönetim sistemi.",
      en: "End-to-end passport and passenger management system used live by a tourism agency.",
    },
    description: {
      tr: "Bir turizm acentesinin pasaport ve yolcu süreçlerini dijital ortamda yönetebilmesi için uçtan uca bir sistem geliştirdim (masaüstü ve mobil).",
      en: "I built an end-to-end system (desktop and mobile) that lets a tourism agency manage passport and passenger processes digitally.",
    },
    role: { tr: "Full-stack Geliştirme · Dağıtım", en: "Full-stack Development · Deployment" },
    category: { tr: "Kurumsal Uygulama · Canlı Ortam", en: "Enterprise Application · Production" },
    technologies: ["Flutter", "FastAPI", "PostgreSQL", "OCR", "JWT"],
    approach: {
      tr: [
        "FastAPI ile REST tabanlı backend; PostgreSQL ile kullanıcı, pasaport, yolcu ve operasyon verilerinin ilişkisel yönetimi.",
        "Pasaport görüntülerindeki bilgileri otomatik okuyan OCR altyapısı ile manuel veri girişinin azaltılması.",
        "JWT tabanlı kimlik doğrulama ve yetkilendirme; sunucu dağıtımı, servis yönetimi ve canlı ortam konfigürasyonu.",
      ],
      en: [
        "REST backend with FastAPI; relational PostgreSQL model for users, passports, passengers and operations.",
        "OCR integration that reads passport images automatically, reducing manual data entry.",
        "JWT-based authentication and authorization; server deployment, service management and production configuration.",
      ],
    },
    features: {
      tr: ["Pasaport ve yolcu bilgilerini görüntüleme, ekleme ve yönetme", "Flutter ile masaüstü ve mobil istemciler"],
      en: ["View, add and manage passport and passenger records", "Flutter desktop and mobile clients"],
    },
    results: [{ value: "Live", label: { tr: "Bir turizm acentesinde canlı ortamda kullanılıyor", en: "Running in production at a tourism agency" } }],
    gallery: g("01.jpg", "02.jpg", "03.jpg"),
    galleryFit: "contain",
  },
  {
    id: "ai-notes", slug: "ai-akilli-not-uygulamasi", imageDir: "ai-notes",
    title: { tr: "AI Destekli Akıllı Not Uygulaması", en: "AI Smart Notes App" },
    shortDescription: {
      tr: "Fiziksel metinleri kamerayla tarayıp OCR ile dijital nota dönüştüren Flutter mobil uygulaması.",
      en: "Flutter mobile app that scans physical text with the camera and turns it into digital notes with OCR.",
    },
    description: {
      tr: "Flutter ile yapay zekâ destekli bir mobil not uygulaması geliştirdim.",
      en: "I built an AI-assisted mobile notes application with Flutter.",
    },
    role: { tr: "Mobil Geliştirme", en: "Mobile Development" },
    year: "2024",
    category: { tr: "Yapay Zekâ · Mobil Uygulama", en: "AI · Mobile Application" },
    technologies: ["Flutter", "OCR", "Cloud sync"],
    approach: {
      tr: [
        "Cihaz kamerasıyla taranan metinlerin OCR tabanlı yapay zekâ modeliyle gerçek zamanlı dijital metne dönüştürülmesi.",
        "Bulut tabanlı veri senkronizasyonu ile notların güvenli ve çevrim içi saklanması.",
      ],
      en: [
        "Text scanned with the device camera converted to digital text in real time by an OCR-based AI model.",
        "Cloud-based data synchronization keeping notes stored securely online.",
      ],
    },
    features: {
      tr: ["Notları düzenleme, kategorilere ayırma ve kaydetme", "Yapay zekâ destekli metin işlemenin kullanıcı dostu mobil arayüzle entegrasyonu"],
      en: ["Edit, categorize and save notes", "AI text processing integrated into a user-friendly mobile interface"],
    },
    gallery: g("01.jpg", "02.jpg", "03.jpg"),
    galleryFit: "phones",
  },
  {
    id: "gcs-2024", slug: "teknofest-2024-yer-kontrol-istasyonu", imageDir: "teknofest-2024-gcs", uav: true,
    title: { tr: "TEKNOFEST 2024 Yer Kontrol İstasyonu", en: "TEKNOFEST 2024 Ground Control Station" },
    shortDescription: {
      tr: "TEKNOFEST 2024 Uluslararası İHA Yarışması serbest görev kategorisi için ArduPilot tabanlı yer istasyonu uygulaması.",
      en: "ArduPilot-based ground station for the TEKNOFEST 2024 International UAV Competition free-mission category.",
    },
    description: {
      tr: "ArduPilot altyapısı kullanarak TEKNOFEST 2024 Uluslararası Serbest Görev kategorisi için tam kapsamlı bir yer istasyonu uygulaması geliştirdim.",
      en: "Using the ArduPilot stack I built a full-scope ground station for the TEKNOFEST 2024 International UAV free-mission category.",
    },
    role: { tr: "YKİ Arayüz Tasarımı + Yazılım Geliştirme", en: "GCS UI Design + Software Development" },
    year: "2023",
    category: { tr: "Yer Kontrol · Yarışma", en: "Ground Control · Competition" },
    technologies: ["ArduPilot", "Telemetry", "Live video"],
    approach: {
      tr: ["Araç içi yapay zekâ destekli görüntü işleme ve görev algoritmalarının geliştirilmesinde aktif rol.", "Yer kontrol istasyonunun arayüz tasarımı ve yazılım geliştirme sürecinin üstlenilmesi."],
      en: ["Active role in developing onboard AI-assisted image processing and mission algorithms.", "Owned the ground control station's interface design and software development."],
    },
    features: {
      tr: ["İHA'lardan gelen telemetri verilerinin gerçek zamanlı takibi", "Canlı kamera görüntüsünün izlenmesi", "Uçuş sırasında araç kontrolü", "Otonom görev yönetimini kullanıcı dostu bir arayüzle birleştirme"],
      en: ["Real-time tracking of telemetry from the UAVs", "Live camera monitoring", "In-flight vehicle control", "Autonomous mission management combined with a user-friendly interface"],
    },
    gallery: [],
  },
  {
    id: "girift-tf24", slug: "girift-teknofest-2024", imageDir: "girift-teknofest-2024", uav: true,
    title: { tr: "Girift UAV — TEKNOFEST 2024", en: "Girift UAV — TEKNOFEST 2024" },
    shortDescription: {
      tr: "TEKNOFEST 2024 Uluslararası İHA Yarışması finalisti sabit kanatlı mühimmat taşıma İHA'sının yazılımı.",
      en: "Software for the fixed-wing payload-carrying UAV that reached the TEKNOFEST 2024 International UAV finals.",
    },
    description: {
      tr: "Girift UAV Takımı ile TEKNOFEST 2024'te finalist olan sabit kanatlı mühimmat taşıma İHA projesinde yazılım geliştirme sorumluluğunu üstlendim.",
      en: "With the Girift UAV team I was responsible for software on the fixed-wing payload-carrying UAV that reached the TEKNOFEST 2024 finals.",
    },
    role: { tr: "Yazılım Geliştirme · GIRIFT UAV", en: "Software Development · GIRIFT UAV" },
    year: "2023 – 2024",
    category: { tr: "Sabit Kanat İHA · Yarışma", en: "Fixed-wing UAV · Competition" },
    technologies: ["Python", "C#", "YOLOv8", "MAVLink"],
    approach: {
      tr: ["Görev algoritmalarının tasarımı ve YOLOv8 tabanlı özel hedef tespit modelinin geliştirilmesi.", "Python ve C# yazılımlarının elektronik donanımlarla uyumlu çalışacak şekilde yapılandırılması."],
      en: ["Mission algorithm design and a custom YOLOv8-based target detection model.", "Python and C# software configured to work with the electronics for reliable autonomous missions."],
    },
    features: {
      tr: ["MAVLink protokolü üzerinden araç kontrolü", "Gömülü sistemli kapak açma–kapama ve mühimmat bırakma mekanizmalarının yazılım entegrasyonu"],
      en: ["Vehicle control over MAVLink", "Software integration of embedded hatch open/close and payload-release mechanisms"],
    },
    results: [{ value: "Finalist", label: { tr: "TEKNOFEST 2024 Uluslararası İHA Yarışması", en: "TEKNOFEST 2024 International UAV Competition" } }],
    gallery: g("01.jpg", "02.jpg"),
  },
  {
    id: "odtu-vtol", slug: "girift-odtu-vtol-2024", imageDir: "odtu-vtol-2024", uav: true,
    title: { tr: "Girift UAV — ODTÜ VTOL 2024", en: "Girift UAV — ODTÜ VTOL 2024" },
    shortDescription: {
      tr: "Albatros VTOL İHA'nın yazılımı: kamera tabanlı yapay zekâ hedef tespiti ve araç kontrol otomasyonu.",
      en: "Software for the Albatros VTOL UAV: camera-based AI target detection and vehicle control automation.",
    },
    description: {
      tr: "ODTÜ VTOL 2024 Yarışması'nda finalist olan Albatros VTOL İHA'nın yazılım geliştirme sürecinde görev aldım.",
      en: "I took part in the software development of the Albatros VTOL UAV that reached the ODTÜ VTOL 2024 finals.",
    },
    role: { tr: "Yazılım Geliştirme · GIRIFT UAV", en: "Software Development · GIRIFT UAV" },
    year: "2024",
    category: { tr: "VTOL İHA · Yarışma", en: "VTOL UAV · Competition" },
    technologies: ["Python", "Computer Vision", "VTOL"],
    approach: {
      tr: ["Modüler yapıya ve geniş kanat açıklığına sahip platformun kritik görev bileşenleri üzerinde çalışma.", "Python ile yazılım ve elektronik sistemlerin entegrasyonu."],
      en: ["Worked on critical mission components of the modular, wide-wingspan platform.", "Software–electronics integration in Python."],
    },
    features: {
      tr: ["Kamera tabanlı hedef tespiti yapan yapay zekâ modelinin entegrasyonu", "Araç kontrolü ve otomasyon sistemleri", "Aracın görevleri otonom olarak yerine getirmesi"],
      en: ["Integration of the camera-based AI target detection model", "Vehicle control and automation systems", "Autonomous mission execution"],
    },
    results: [{ value: "Finalist", label: { tr: "ODTÜ VTOL 2024 Yarışması", en: "ODTÜ VTOL 2024 Competition" } }],
    gallery: [],
  },
  {
    id: "teknofest-2025", slug: "teknofest-2025-swarm", imageDir: "teknofest-2025", uav: true,
    title: { tr: "TEKNOFEST 2025 Sürü İHA", en: "TEKNOFEST 2025 Swarm UAV" },
    shortDescription: {
      tr: "ArduPilot tabanlı çoklu İHA kontrol sistemi; lider–takipçi koordinasyonu ve özel düşük gecikmeli haberleşme.",
      en: "ArduPilot-based multi-UAV control system with leader–follower coordination and custom low-latency communication.",
    },
    description: {
      tr: "PULSAR UAV ile 2025 TEKNOFEST Sürü İHA Yarışması'nda ArduPilot tabanlı çoklu İHA kontrol sistemi geliştirdim.",
      en: "With PULSAR UAV I developed an ArduPilot-based multi-UAV control system for the TEKNOFEST 2025 Swarm UAV Competition.",
    },
    role: { tr: "Yazılım Geliştirme · PULSAR UAV", en: "Software Development · PULSAR UAV" },
    year: "2025",
    category: { tr: "Sürü İHA · Yarışma", en: "Swarm UAV · Competition" },
    technologies: ["ArduPilot", "Python", "Gazebo", "Computer Vision"],
    approach: {
      tr: ["Eşzamanlı görev planlama algoritmaları ve yapay zekâ destekli hedef tespit mekanizmalarının entegrasyonu.", "Araçlar arası güvenli ve düşük gecikmeli iletişim için özel haberleşme protokolleri.", "Tüm görevlerin Gazebo simülasyon ortamında test edilerek doğrulanması."],
      en: ["Simultaneous mission planning algorithms and AI-assisted target detection integrated.", "Custom protocols for secure, low-latency inter-vehicle communication.", "All missions tested and verified in the Gazebo simulation environment."],
    },
    features: {
      tr: ["Lider–takipçi modeliyle koordineli ve otonom hareket", "Formasyon uçuşu ve hedef keşfi", "Sürüye dinamik araç ekleme/çıkarma senaryoları"],
      en: ["Coordinated autonomous movement with a leader–follower model", "Formation flight and target discovery", "Dynamic add/remove of UAVs in the swarm"],
    },
    results: [{ value: "Finalist", label: { tr: "TEKNOFEST 2025 Sürü İHA Yarışması", en: "TEKNOFEST 2025 Swarm UAV Competition" } }],
    gallery: g("01.jpg", "02.jpg"),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
