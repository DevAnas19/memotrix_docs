"use client";
import React from "react";
import { ArrowRight, Github, Terminal, Check, Layers, Database, FileText, Bot, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCopy } from "@/hooks/useCopy";
import { GH_URL } from "@/lib/constants";

export function Hero() {
  const pip = "pip install memotrix[memory]";
  const { copied, copy } = useCopy();

  return (
    <section className="relative overflow-hidden paper-1 border-b border-rule min-h-[85vh] flex items-center py-10 sm:py-16 lg:py-24">
      <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-brand-blue/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headings, Install Box, CTAs, Feature Badges */}
          <div className="xl:col-span-5 space-y-6 relative">
            
            {/* Top Tag / Annotation */}
            <div className="space-y-2 relative">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.12] text-ink relative z-10">
                Memory for<br />
                <span className="relative inline-block whitespace-nowrap z-20 mt-1">
                  <span className="bg-gradient-to-r from-[#4C8DFF] to-[#7657F6] bg-clip-text text-transparent relative z-10">Smarter Agents</span>
                  <div className="absolute -left-28 top-[-10px] flex-col items-end hidden xl:flex select-none pointer-events-none">
                    <span className="font-hand text-[16px] sm:text-[18px] text-ink font-bold leading-tight text-right w-24">Lasting<br/>Memory</span>
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" className="mt-1 opacity-70 -mr-4">
                      <path d="M10 10 C 25 10, 40 25, 45 40" stroke="#11172a" strokeWidth="1.5" fill="none" />
                      <path d="M35 40 L 45 40 L 40 30" stroke="#11172a" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </span>
              </h1>
            </div>

            <p className="text-[15px] sm:text-[17px] text-ink-secondary leading-relaxed max-w-lg relative z-10">
              Memotrix connects persistent search and dynamic memory retrieval for agents, LLM chatbots, & data pipelines.
            </p>

            {/* Quick Install Terminal Box */}
            <div className="relative group max-w-md">
              <div 
                onClick={() => copy(pip)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/90 border border-ink/15 hover:border-brand-blue/50 shadow-xs cursor-pointer transition-all active:scale-[0.99] font-mono text-[13px] sm:text-[14px] text-ink"
                title="Click to copy command"
              >
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
                  <Terminal className="h-4 w-4 text-brand-blue shrink-0" />
                  <span className="text-ink-muted select-none">$</span>
                  <span className="font-medium text-ink truncate">{pip}</span>
                </div>
                <button
                  type="button"
                  className="ml-2 p-1.5 rounded-md hover:bg-black/5 text-ink-secondary transition-colors shrink-0"
                  aria-label="Copy install command"
                >
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <div className="absolute -top-3 right-4 tape w-12 h-4 rotate-[2deg] opacity-75 pointer-events-none hidden sm:block" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 z-10 relative">
              <Button href="/docs/quickstart" size="lg" className="rounded-full px-7 bg-[#3867ff] hover:bg-[#2b51cc] shadow-md transition-all text-center justify-center h-12">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button href="/docs" variant="outline" size="lg" className="rounded-full px-7 bg-transparent border-ink/20 text-ink hover:bg-black/5 font-semibold transition-all text-center justify-center h-12">
                View Documentation
              </Button>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-3 text-[13px] sm:text-[14px] font-medium text-ink-secondary z-10 relative">
              <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-brand-blue shrink-0" /> Modular &amp; Composable</div>
              <div className="flex items-center gap-2"><Database className="h-4 w-4 text-brand-blue shrink-0" /> Multi-Storage Engines</div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-brand-blue shrink-0" /> Wide File Ingestion</div>
              <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-brand-blue shrink-0" /> Agent-Native API</div>
            </div>

            {/* Mobile/Tablet Compact Notebook Card (Shown on < xl screens) */}
            <div className="block xl:hidden pt-4 relative">
              <div className="relative rounded-2xl bg-[#faf8f1] border border-ink/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden p-5 sm:p-6 bg-ruled">
                <div className="absolute -top-2 left-8 tape w-16 h-5 rotate-[-2deg] opacity-90" />
                <div className="absolute -top-2 right-8 tape w-14 h-5 rotate-[3deg] opacity-90" />

                <div className="flex justify-between items-start pt-2">
                  <div>
                    <div className="font-hand text-[22px] sm:text-[24px] font-bold text-ink leading-tight">
                      Same idea. Different mind.
                    </div>
                    <div className="font-hand text-[16px] text-brand-blue font-semibold">
                      Now nothing gets lost.
                    </div>
                  </div>
                  <div className="bg-[#ffb7d5] px-2.5 py-1 rounded shadow-xs rotate-[2deg] select-none font-hand text-[13px] font-bold text-ink">
                    ⚡ Fast RAG
                  </div>
                </div>

                <div className="my-4 p-3 rounded-xl bg-white/80 border border-ink/10 flex items-center justify-around text-center">
                  <div className="font-hand font-bold text-[14px] text-ink">Docs &amp; Chats</div>
                  <ArrowRight className="h-3.5 w-3.5 text-ink/40" />
                  <div className="font-hand font-bold text-[15px] text-brand-blue px-2 py-0.5 rounded-full border border-brand-blue/30 bg-blue-50/50">MEMOTRIX</div>
                  <ArrowRight className="h-3.5 w-3.5 text-ink/40" />
                  <div className="font-hand font-bold text-[14px] text-ink">Instant Context</div>
                </div>

                <div className="grid grid-cols-2 gap-2 font-hand text-[15px] font-bold text-ink">
                  {["✓ Hybrid Vector Search", "✓ Persistent Conversations", "✓ Chunking & Metadata", "✓ Sub-second Recall"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-ink">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Desktop Realistic 3D Notebook & Pen */}
          <div className="xl:col-span-7 relative max-w-[850px] mx-auto w-full perspective-[1400px] hidden xl:block">
            {/* Coffee Stain behind the book (on the desk) */}
            <div className="absolute -right-40 -top-28 pointer-events-none opacity-[0.52] select-none mix-blend-multiply w-[360px] h-[360px] -z-10 rotate-[16deg] transition-opacity duration-300">
              <img src="/coffeeStain.png" alt="Coffee Stain" className="w-full h-full object-contain filter contrast-[1.15] brightness-[0.96]" />
            </div>

            <div className="relative transition-transform hover:rotate-0 duration-700 ease-out z-10" 
                 style={{ 
                   transform: "rotateY(-4deg) rotateX(2deg) rotateZ(-1deg)", 
                   transformStyle: "preserve-3d",
                 }}>
              
              {/* Hardcover Base */}
              <div className="absolute top-2 left-[-4px] right-[-10px] bottom-[-10px] rounded-[18px] bg-[#1a1f35] border border-black z-0 shadow-[-25px_30px_60px_rgba(30,25,20,0.35)]" />
              
              {/* Stacked Pages (Left and Right edges) */}
              <div className="absolute top-1 left-0 right-[-6px] bottom-[-5px] rounded-xl bg-[#e5e0d3] border-r-2 border-b-2 border-[#c5c0b3] z-0" />
              <div className="absolute top-0.5 left-0 right-[-3px] bottom-[-2px] rounded-xl bg-[#f0ebd9] border-r border-b border-[#dcd7c5] z-0" />

              {/* Top Page Content */}
              <div className="relative rounded-xl bg-[#faf8f1] overflow-hidden z-10"
                   style={{ 
                     boxShadow: "inset 2px 0 10px rgba(255,255,255,0.8)",
                     border: "1px solid rgba(17,23,42,0.08)",
                     backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")"
                   }}>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent pointer-events-none z-20" />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[rgba(17,23,42,0.15)] shadow-[0_0_2px_rgba(0,0,0,0.1)] pointer-events-none z-20" />
                <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-8 hidden sm:flex flex-col justify-between items-center pointer-events-none z-20 drop-shadow-md">
                  {[...Array(12)].map((_,i) => (
                    <div key={i} className="relative w-8 h-2">
                       <div className="absolute left-0.5 w-2 h-2 rounded-full bg-black/80 shadow-[inset_0_1px_3px_rgba(0,0,0,1)]" />
                       <div className="absolute right-0.5 w-2 h-2 rounded-full bg-black/80 shadow-[inset_0_1px_3px_rgba(0,0,0,1)]" />
                       <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 rounded-full bg-gradient-to-b from-[#f8f8f8] via-[#a0a0a0] to-[#555] shadow-[0_2px_3px_rgba(0,0,0,0.6)] border-y border-white/30" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 relative">
                  <div className="p-6 sm:p-8 space-y-6 relative bg-ruled bg-gradient-to-r from-transparent to-[rgba(0,0,0,0.02)] border-r border-[rgba(0,0,0,0.03)] h-[480px]">
                    <div className="absolute -top-3 left-16 tape w-14 h-6 rotate-[-3deg] shadow-sm z-30 opacity-90" />
                    <div className="font-hand text-[26px] leading-[1.2] text-ink font-bold pt-4">
                      Same idea.<br />
                      Different mind.<br />
                      <span className="pen-underline inline-block mt-1">Now nothing gets lost.</span>
                    </div>
                    <div className="relative h-[160px] flex flex-col items-center justify-center font-hand mt-2">
                      <div className="flex gap-4 items-center absolute top-2 w-full justify-center">
                        <div className="px-3 py-1 border border-ink rounded-[40px] text-[15px] font-bold rotate-[-2deg]">Documents</div>
                        <div className="px-3 py-1 border border-ink rounded-[40px] text-[15px] font-bold rotate-[1deg]">Conversations</div>
                      </div>
                      <svg className="absolute top-10 w-full h-16 pointer-events-none" viewBox="0 0 200 60">
                        <path d="M70,10 Q90,30 100,50" stroke="#11172a" strokeWidth="1.5" fill="none" />
                        <path d="M95,45 L100,50 L105,40" stroke="#11172a" strokeWidth="1.5" fill="none" />
                        <path d="M130,10 Q110,30 100,50" stroke="#11172a" strokeWidth="1.5" fill="none" />
                      </svg>
                      <div className="absolute top-20 text-[24px] font-bold tracking-wider text-ink bg-transparent px-4 py-1 border border-ink rounded-[60px] rotate-[-1deg]">
                        MEMOTRIX
                      </div>
                      <svg className="absolute top-[115px] w-full h-10 pointer-events-none" viewBox="0 0 200 40">
                        <path d="M100,0 L100,30" stroke="#11172a" strokeWidth="1.5" fill="none" />
                        <path d="M95,25 L100,30 L105,25" stroke="#11172a" strokeWidth="1.5" fill="none" />
                      </svg>
                      <div className="absolute bottom-0 text-[16px] font-bold text-ink underline decoration-2 decoration-wavy decoration-ink/40">
                        Knowledge
                      </div>
                    </div>
                    <div className="space-y-1.5 font-hand text-[18px] font-bold text-ink pl-2 pt-2">
                      {["Search","RAG","Embeddings","Multi-Format","Agents"].map((t,i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-4 w-4 border border-ink flex items-center justify-center bg-transparent"><Check className="h-3 w-3 text-ink" strokeWidth={4} /></div>
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 relative bg-ruled bg-gradient-to-l from-transparent to-[rgba(0,0,0,0.02)] h-[480px]">
                    <div className="absolute -top-2 right-12 tape w-16 h-5 rotate-[4deg] shadow-sm z-30 opacity-90 bg-white/60 backdrop-blur-sm border border-black/5" />
                    
                    <div className="mt-16 ml-4 space-y-6 relative z-10">
                      <div className="font-hand text-[28px] text-brand-blue font-bold rotate-[-2deg]">
                        Memotrix = Memory + Matrix
                      </div>
                      <div className="font-hand text-[22px] text-ink font-semibold rotate-[1deg] leading-relaxed max-w-[280px]">
                        Build AI that <span className="pen-underline">actually remembers</span> what you told it yesterday.
                      </div>
                      <div className="font-hand text-[20px] text-ink-muted rotate-[-1deg] mt-8">
                        (No more goldfish memory for LLMs)
                      </div>
                    </div>
                    <div className="absolute right-8 bottom-15 w-42 h-36 bg-[#ffb7d5] shadow-[2px_5px_15px_rgba(0,0,0,0.1)] p-5 rotate-[-3deg] transform-origin-bottom-right rounded-sm z-20">
                      <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 tape w-10 h-5 rotate-[-5deg] bg-white/40" />
                      <div className="font-hand font-bold text-ink text-[14px] leading-relaxed">
                        <span className="underline uppercase tracking-wide text-[14px]">REMEMBER:</span><br/><br/>
                        → Retrieve fast<br/>
                        → Build context<br/>
                        → Grow smarter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Ultra-realistic Executive Fountain Pen */}
              <div className="absolute -right-8 top-12 hidden lg:block pointer-events-none select-none z-30 filter drop-shadow-[6px_14px_16px_rgba(0,0,0,0.38)] drop-shadow-[2px_4px_5px_rgba(0,0,0,0.22)]" style={{ transform: "rotate(7deg)" }}>
                <svg width="34" height="290" viewBox="0 0 34 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Pen Lacquer Body Gradient */}
                    <linearGradient id="barrel_lacquer" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0a0e1a" />
                      <stop offset="18%" stopColor="#1e293b" />
                      <stop offset="38%" stopColor="#3b4a6b" />
                      <stop offset="55%" stopColor="#64748b" />
                      <stop offset="70%" stopColor="#1e293b" />
                      <stop offset="90%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#05070d" />
                    </linearGradient>

                    {/* Rich Gold Trim Gradient */}
                    <linearGradient id="gold_trim" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#78531e" />
                      <stop offset="25%" stopColor="#cfa04e" />
                      <stop offset="45%" stopColor="#fff1c2" />
                      <stop offset="65%" stopColor="#e5ba63" />
                      <stop offset="85%" stopColor="#9a6e29" />
                      <stop offset="100%" stopColor="#573a0f" />
                    </linearGradient>

                    {/* Clip Chrome/Gold Accent */}
                    <linearGradient id="clip_gold" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#573a0f" />
                      <stop offset="30%" stopColor="#ffd980" />
                      <stop offset="60%" stopColor="#fff8e1" />
                      <stop offset="80%" stopColor="#cfa04e" />
                      <stop offset="100%" stopColor="#78531e" />
                    </linearGradient>

                    {/* Steel Nib Core Gradient */}
                    <linearGradient id="nib_steel" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="35%" stopColor="#e2e8f0" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="75%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>

                    {/* Grip Section Gradient */}
                    <linearGradient id="grip_section" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#111827" />
                      <stop offset="25%" stopColor="#374151" />
                      <stop offset="50%" stopColor="#4b5563" />
                      <stop offset="75%" stopColor="#1f2937" />
                      <stop offset="100%" stopColor="#030712" />
                    </linearGradient>
                  </defs>

                  {/* 1. Finial / Top Cap Jewel */}
                  <path d="M12 4 C12 1.5, 22 1.5, 22 4 L22 7 L12 7 Z" fill="url(#gold_trim)" />
                  <ellipse cx="17" cy="3" rx="4.5" ry="1.5" fill="#fff" opacity="0.6" />

                  {/* 2. Cap Upper Body */}
                  <rect x="11.5" y="7" width="11" height="68" rx="1.5" fill="url(#barrel_lacquer)" />

                  {/* Clip Shadow on Barrel */}
                  <path d="M10 14 L8.5 76 L11.5 76 L11.5 14 Z" fill="#000" opacity="0.35" />

                  {/* Pocket Clip */}
                  <path d="M11 12 C9 12, 8 13.5, 8 15 L7.5 74 C7.5 76.5, 8.5 78, 10 78 C11.5 78, 12 76.5, 12 74 L11.5 15 Z" fill="url(#clip_gold)" />
                  <ellipse cx="9.8" cy="74.5" rx="1.6" ry="2.2" fill="url(#gold_trim)" />

                  {/* Cap Band / Triple Gold Rings */}
                  <rect x="11" y="75" width="12" height="5" fill="url(#gold_trim)" rx="0.5" />
                  <line x1="11" y1="76.5" x2="23" y2="76.5" stroke="#422906" strokeWidth="0.4" />
                  <line x1="11" y1="78.5" x2="23" y2="78.5" stroke="#422906" strokeWidth="0.4" />

                  {/* 3. Main Barrel */}
                  <path d="M12 80 L22 80 L21 190 L13 190 Z" fill="url(#barrel_lacquer)" />
                  
                  {/* Barrel Highlight Gloss Sheen */}
                  <path d="M15 80 L17.5 80 L16.8 190 L14.5 190 Z" fill="#ffffff" opacity="0.16" />

                  {/* 4. Barrel End Ring / Accent */}
                  <rect x="13" y="190" width="8" height="2.5" fill="url(#gold_trim)" />

                  {/* 5. Grip Section (Tapered) */}
                  <path d="M13.5 192.5 L20.5 192.5 L19.2 232 L14.8 232 Z" fill="url(#grip_section)" />
                  
                  {/* Grip Texture Micro-ribs */}
                  <line x1="13.7" y1="202" x2="20.3" y2="202" stroke="#4b5563" strokeWidth="0.6" opacity="0.7" />
                  <line x1="13.9" y1="208" x2="20.1" y2="208" stroke="#4b5563" strokeWidth="0.6" opacity="0.7" />
                  <line x1="14.1" y1="214" x2="19.9" y2="214" stroke="#4b5563" strokeWidth="0.6" opacity="0.7" />
                  <line x1="14.3" y1="220" x2="19.7" y2="220" stroke="#4b5563" strokeWidth="0.6" opacity="0.7" />

                  {/* Grip Collar Ring */}
                  <rect x="14.5" y="232" width="5" height="2" fill="url(#gold_trim)" />

                  {/* 6. Luxury Two-Tone Fountain Pen Nib */}
                  {/* Gold Nib Wing Base */}
                  <path d="M14.8 234 C13.5 244, 11 254, 11 262 C11 270, 15.5 282, 17 286 C18.5 282, 23 270, 23 262 C23 254, 20.5 244, 19.2 234 Z" fill="url(#gold_trim)" />
                  
                  {/* Rhodium / Steel Inlay Core */}
                  <path d="M15.5 234 C14.6 244, 13.2 254, 13.2 262 C13.2 268, 15.8 278, 17 283 C18.2 278, 20.8 268, 20.8 262 C20.8 254, 19.4 244, 18.5 234 Z" fill="url(#nib_steel)" />

                  {/* Nib Engraving Filigree Curves */}
                  <path d="M14 260 C15 264, 16 266, 17 266 C18 266, 19 264, 20 260" stroke="#8a6320" strokeWidth="0.5" fill="none" opacity="0.8" />
                  
                  {/* Breather Hole */}
                  <circle cx="17" cy="260" r="1.1" fill="#111827" />

                  {/* Ink Tine Slit */}
                  <line x1="17" y1="261" x2="17" y2="286.5" stroke="#111827" strokeWidth="0.6" strokeLinecap="round" />

                  {/* Iridium Tip Ball */}
                  <circle cx="17" cy="286.5" r="0.9" fill="#e2e8f0" stroke="#1e293b" strokeWidth="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}