import type { L, LL } from "@/lib/i18n";

export type Experience = { id: string; company: L; role: L; period: L; current?: boolean; points: LL; tech: string[] };

export const experience: Experience[] = [
  {
    id: "hun",
    company: { tr: "HUN Kompozit ve Savunma", en: "HUN Composite & Defence" },
    role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
    period: { tr: "Haziran 2026 – Devam Ediyor", en: "June 2026 – Present" },
    current: true,
    points: {
      tr: [
        "İHA sistemleri için yazılım geliştirme, aviyonik entegrasyon ve sistem test süreçlerinde görev alıyorum.",
        "Mobil yer kontrol istasyonu ile kontrol edilen devriye İHA sisteminin yazılım ve haberleşme altyapılarının geliştirilmesine katkı sağlıyorum.",
        "İHA donanımı, aviyonik bileşenler ve yazılım sistemleri arasındaki entegrasyon süreçlerini yürütüyorum.",
      ],
      en: [
        "Working on UAV software development, avionics integration and system testing.",
        "Contributing to the software and communication infrastructure of a patrol UAV system controlled from a mobile ground control station.",
        "Leading the integration between UAV hardware, avionics components and software systems.",
      ],
    },
    tech: ["UAV", "Avionics", "Mobile GCS"],
  },
  {
    id: "zsistem",
    company: { tr: "Z-SİSTEM Havacılık ve Bilişim Sanayi", en: "Z-SİSTEM Aviation & IT" },
    role: { tr: "Yazılım Mühendisliği Stajyeri", en: "Software Engineering Intern" },
    period: { tr: "Temmuz 2025 – Ağustos 2025", en: "July 2025 – August 2025" },
    points: {
      tr: [
        "UDP ve RTSP protokolleriyle, gimbalın manuel ve otomatik kontrolünü sağlayan C++ tabanlı gimbal kamera backend sistemi tasarladım.",
        "Komut gönderimi, geri bildirim alımı ve canlı video akışını çoklu iş parçacığıyla paralel yönettim.",
        "Backend'i kullanıcı kontrol paneline entegre ederek kamera motor açıları ve mod ayarlarının gerçek zamanlı kontrolünü mümkün kıldım.",
        "NVIDIA Jetson ve Raspberry Pi 5 üzerinde gömülü yapay zekâ tabanlı görüntü işleme çalışmalarında yer aldım.",
      ],
      en: [
        "Designed a C++ gimbal camera backend providing manual and automatic gimbal control over UDP and RTSP.",
        "Managed command sending, feedback reception and live video streaming in parallel using multithreading.",
        "Integrated the backend into the user control panel, enabling real-time control of camera motor angles and mode settings.",
        "Worked on AI-based image processing for embedded systems on NVIDIA Jetson and Raspberry Pi 5.",
      ],
    },
    tech: ["C++", "UDP", "RTSP", "Multithreading", "NVIDIA Jetson", "Raspberry Pi 5"],
  },
  {
    id: "girift",
    company: { tr: "GİRİFT İHA Takımı & PULSAR UAV Takımı", en: "GİRİFT UAV Team & PULSAR UAV Team" },
    role: { tr: "Yazılım Birim Lideri · İHA ve Otonom Sistemler", en: "Software Lead · UAV & Autonomous Systems" },
    period: { tr: "Ağustos 2023 – Eylül 2026", en: "August 2023 – September 2026" },
    points: {
      tr: [
        "2024 TEKNOFEST Uluslararası İHA ve 2024 ODTÜ VTOL yarışmalarında finalist olan İHA projelerinin görev algoritmalarını, araç kontrolünü ve yapay zekâ destekli hedef tespit sistemlerini geliştirdim.",
        "2025 ve 2026 TEKNOFEST Sürü İHA yarışmaları için lider–takipçi mimarisi, otonom formasyon kontrolü, çarpışma önleme, görev planlama ve çoklu İHA haberleşme algoritmaları geliştirdim.",
        "2026 TEKNOFEST Sürü İHA Yarışması'nda takım kaptanı olarak görev aldım; mobil yer kontrol istasyonu ve özgün görev algoritmalarıyla En Özgün Yazılım Ödülü'nü kazandık.",
        "2026 SUAS Yarışması'nda finalist olan takımın otonom görev yönetimi, görüntü işleme, hedef tespiti ve İHA–yer istasyonu haberleşme sistemleri üzerinde çalıştım.",
        "Algoritmaları Gazebo, ROS ve ArduPilot SITL ortamlarında simüle ederek uçuş öncesi test ve doğrulama süreçlerini gerçekleştirdim.",
      ],
      en: [
        "Developed mission algorithms, vehicle control and AI-assisted target detection for UAV projects that reached the finals of TEKNOFEST 2024 International UAV and ODTÜ VTOL 2024.",
        "Built leader–follower architecture, autonomous formation control, collision avoidance, mission planning and multi-UAV communication algorithms for the TEKNOFEST 2025 and 2026 Swarm UAV competitions.",
        "Served as team captain at TEKNOFEST 2026 Swarm UAV; we won the Original Software Award with our mobile ground control station and original mission algorithms.",
        "Worked on autonomous mission management, image processing, target detection and UAV–ground station communication for the SUAS 2026 finalist team.",
        "Simulated algorithms in Gazebo, ROS and ArduPilot SITL for pre-flight testing and validation.",
      ],
    },
    tech: ["Python", "C++", "MAVLink", "ArduPilot", "TCP Socket", "YOLO", "Gazebo", "ROS", "SITL"],
  },
];
