import type { L } from "@/lib/i18n";

export const skills: { group: L; items: string[] }[] = [
  { group: { tr: "Programlama Dilleri", en: "Languages" }, items: ["C", "C++", "C#", "Java", "Python", "Dart"] },
  { group: { tr: "Framework ve Uygulamalar", en: "Frameworks / Applications" }, items: ["Flutter", "Qt", "FastAPI"] },
  { group: { tr: "Otonom Sistemler", en: "Autonomous Systems" }, items: ["MAVLink", "MAVSDK", "ArduPilot", "ROS", "Gazebo"] },
  { group: { tr: "Görüntü İşleme", en: "Computer Vision" }, items: ["YOLOv8", "OpenCV"] },
  { group: { tr: "Backend ve Ağ", en: "Backend & Networking" }, items: ["REST API", "WebSocket", "TCP Socket", "UDP"] },
  { group: { tr: "Veritabanları", en: "Databases" }, items: ["PostgreSQL", "MySQL", "Neo4j", "SQLite"] },
  { group: { tr: "Araçlar", en: "Tools" }, items: ["Git", "GitHub", "Docker"] },
  { group: { tr: "Diller", en: "Spoken Languages" }, items: ["Türkçe (Native)", "English (B1)"] },
];
