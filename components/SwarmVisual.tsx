"use client";
import { motion } from "framer-motion";

const nodes = [
  { x: 300, y: 130, r: 9, lead: true },
  { x: 215, y: 205, r: 6.5 },
  { x: 385, y: 215, r: 6.5 },
];

export default function SwarmVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-[2rem] border border-white bg-white/50 shadow-soft backdrop-blur-sm" />
      <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-accent/15 via-accent-sky/10 to-accent-teal/10 blur-3xl" />
      <svg viewBox="0 0 600 480" className="relative h-full w-full" fill="none" aria-hidden>
        <defs>
          <linearGradient id="trail" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#38BDF8" stopOpacity="0" /><stop offset=".5" stopColor="#38BDF8" /><stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* faint map grid */}
        {[...Array(9)].map((_, i) => <line key={"v" + i} x1={60 + i * 60} y1="40" x2={60 + i * 60} y2="440" stroke="#0F172A" strokeOpacity=".05" />)}
        {[...Array(7)].map((_, i) => <line key={"h" + i} x1="40" y1={60 + i * 60} x2="560" y2={60 + i * 60} stroke="#0F172A" strokeOpacity=".05" />)}
        {/* trajectory */}
        <path d="M40 400 C 130 330, 160 400, 240 320 S 330 220, 420 160 S 520 90, 560 70" stroke="url(#trail)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 420 C 140 360, 190 420, 260 350 S 360 260, 450 200 S 530 140, 560 120" stroke="#3B82F6" strokeOpacity=".25" strokeWidth="1.5" strokeDasharray="3 8" className="dash-flow" />
        {/* waypoints */}
        {[[130, 345], [240, 320], [420, 160]].map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="4" fill="#fff" stroke="#38BDF8" strokeWidth="1.5" /><circle cx={x} cy={y} r="9" stroke="#38BDF8" strokeOpacity=".25" /></g>
        ))}
        {/* formation, gently floating */}
        <motion.g animate={{ y: [0, -8, 0], x: [0, 4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <path d={`M${nodes[0].x} ${nodes[0].y} L${nodes[1].x} ${nodes[1].y} M${nodes[0].x} ${nodes[0].y} L${nodes[2].x} ${nodes[2].y}`} stroke="#3B82F6" strokeOpacity=".35" strokeDasharray="4 5" className="dash-flow" />
          {nodes.map((n, i) => (
            <g key={i}>
              <motion.circle cx={n.x} cy={n.y} r={n.r + 12} fill={n.lead ? "#3B82F6" : "#38BDF8"} fillOpacity=".12"
                animate={{ r: [n.r + 8, n.r + 18, n.r + 8], opacity: [0.9, 0.2, 0.9] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }} />
              <circle cx={n.x} cy={n.y} r={n.r} fill={n.lead ? "#3B82F6" : "#fff"} stroke={n.lead ? "#3B82F6" : "#38BDF8"} strokeWidth="2" />
              {/* rotor cross */}
              <path d={`M${n.x - n.r - 6} ${n.y} H${n.x + n.r + 6} M${n.x} ${n.y - n.r - 6} V${n.y + n.r + 6}`} stroke="#0F172A" strokeOpacity=".35" strokeWidth="1" />
            </g>
          ))}
        </motion.g>
      </svg>
      {/* micro details */}
      <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-teal align-middle" />System / Online
      </div>
      <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">Link · Connected</div>
      <div className="absolute bottom-5 right-5 rounded-full border border-line bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">MAVLink</div>
    </div>
  );
}
