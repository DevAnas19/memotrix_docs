import React from "react";
import { FileText, FileSpreadsheet, FileJson, FileCode, FileImage, FileAudio, FileVideo, Database, FileBox, FileQuestion, MessageSquare, Mail, MessageCircle, MoreHorizontal } from "lucide-react";
const col1 = [
  { name: "PDF", icon: FileText, color: "text-red-500", bg: "bg-red-500/10" },
  { name: "DOCX", icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "PPTX", icon: FileText, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "TXT", icon: FileText, color: "text-slate-500", bg: "bg-slate-500/10" },
  { name: "Markdown", icon: FileText, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "HTML", icon: FileCode, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "EPUB", icon: FileQuestion, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "CSV", icon: FileSpreadsheet, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Excel (.xlsx)", icon: FileSpreadsheet, color: "text-green-600", bg: "bg-green-600/10" },
  { name: "JSON (FHIR / GeoJSON / ...)", icon: FileJson, color: "text-indigo-500", bg: "bg-indigo-500/10" },
];
const col2 = [
  { name: "YAML", icon: FileBox, color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "XML", icon: FileCode, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "SQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Images", icon: FileImage, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Video", icon: FileVideo, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Audio", icon: FileAudio, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { name: "Source Code", icon: FileCode, color: "text-red-400", bg: "bg-red-400/10" },
  { name: "SCORM", icon: FileBox, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "Knowledge Graphs", icon: Database, color: "text-sky-500", bg: "bg-sky-500/10" },
  { name: "Email (.eml / .mbox)", icon: Mail, color: "text-blue-500", bg: "bg-blue-500/10" },
];
const col3 = [
  { name: "Chat (JSON/JSONL)", icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "WhatsApp (txt)", icon: MessageCircle, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Log Files", icon: FileText, color: "text-slate-400", bg: "bg-slate-400/10" },
  { name: "... and more..", icon: MoreHorizontal, color: "text-slate-400", bg: "bg-slate-400/10" },
];
export function SupportedFiles() {
  return (
    <section className="py-20 paper-2 border-b border-rule relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-ink tracking-tight leading-tight mb-3">
            30+ File Formats Out of the Box
          </h2>
          <p className="text-[16px] text-ink-secondary leading-relaxed">
            From business documents to multimedia, Memotrix can ingest and understand your data.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          <div className="space-y-4">
            {col1.map((file, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`p-1.5 rounded-md ${file.bg}`}>
                  <file.icon className={`h-4 w-4 ${file.color}`} />
                </div>
                <span className="text-[14px] text-ink font-medium tracking-tight">{file.name}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 relative md:border-l md:border-rule md:pl-8">
            {col2.map((file, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`p-1.5 rounded-md ${file.bg}`}>
                  <file.icon className={`h-4 w-4 ${file.color}`} />
                </div>
                <span className="text-[14px] text-ink font-medium tracking-tight">{file.name}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 relative md:border-l md:border-rule md:pl-8">
            {col3.map((file, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`p-1.5 rounded-md ${file.bg}`}>
                  <file.icon className={`h-4 w-4 ${file.color}`} />
                </div>
                <span className="text-[14px] text-ink font-medium tracking-tight">{file.name}</span>
              </div>
            ))}
            <div className="absolute right-4 top-40 flex-col items-end hidden lg:flex select-none pointer-events-none mt-10">
              <span className="font-hand text-[22px] text-brand-purple font-bold leading-tight text-center w-32 -rotate-2">
                Just add<br/>with<br/>memory.add()
              </span>
              <svg width="40" height="60" viewBox="0 0 50 70" fill="none" className="mt-2 opacity-80 -translate-x-12">
                <path d="M45 10 Q 15 20, 10 60" stroke="#7657F6" strokeWidth="2" fill="none" />
                <path d="M5 50 L 10 60 L 20 55" stroke="#7657F6" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}