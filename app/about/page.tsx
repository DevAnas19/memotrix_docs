import React from "react";
import { Github, Twitter, ExternalLink, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  const team = [
    {
      name: "Utsav Lankapati",
      role: "AI-ML Engineer",
      image: "https://0.gravatar.com/avatar/6427b47b4dec798412e47836ae74da4ad7a7115dcd1718f70554a5f1d864858d",
      link: "https://gravatar.com/matrixxboy",
      notes: "Computer Engineering student passionate about AI/ML, full-stack development, and building projects that create real-world impact. Exploring data science, AI assistants, and creative coding while pursuing long-term research ambitions.",
      color: "border-brand-blue/30 text-brand-blue",
      tapeRotation: "-rotate-2"
    },
    {
      name: "ANSARI ANAS ASIF",
      role: "Core Contributor",
      image: "https://2.gravatar.com/avatar/d2d22694d4f94560388d4435722b3fec",
      link: "https://gravatar.com/anas",
      notes: "Led the development of advanced extractors and data pipelines for the Memotrix ecosystem.",
      color: "border-brand-purple/30 text-brand-purple",
      tapeRotation: "rotate-3"
    }
  ];

  return (
    <div className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 min-h-[80vh]">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          About the creators.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix is built by developers who experienced firsthand the frustration of scattered knowledge in AI applications. 
        </p>
        <div className="font-hand text-[18px] text-brand-blue font-bold select-none">built with care 🔨</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {team.map((member, idx) => (
          <Card key={idx} className={`relative p-6 sm:p-8 ${member.color.split(" ")[0]} bg-grid`}>
            {/* Tape effect */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 tape w-16 h-4 ${member.tapeRotation}`} />
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 relative">
                <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-rule shadow-sm bg-white">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 p-1.5 rounded-full bg-paper-3 border border-rule">
                  <PenTool className="h-4 w-4 text-ink-muted" />
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                <div>
                  <h2 className="text-xl font-bold text-ink mb-1">{member.name}</h2>
                  <div className="text-[12px] font-mono font-bold tracking-wider uppercase text-ink-muted">
                    {member.role}
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-[#fffdf8] border border-[rgba(17,23,42,0.1)] font-hand text-[16px] text-ink shadow-[0_2px_8px_rgba(40,35,25,0.04)] rotate-[-1deg]">
                  {member.notes}
                </div>
                
                <div className="pt-2">
                  <a 
                    href={member.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:underline ${member.color.split(" ")[1]}`}
                  >
                    View Profile <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
