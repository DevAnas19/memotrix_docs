import React from "react";
import { FileText, FileSpreadsheet, FileJson, FileCode, FileImage, FileAudio, FileVideo, Database, FileBox, FileQuestion } from "lucide-react";
const fileTypes = [
  { name: "PDF", icon: FileText, color: "text-red-500" },
  { name: "DOCX", icon: FileText, color: "text-blue-500" },
  { name: "CSV", icon: FileSpreadsheet, color: "text-green-500" },
  { name: "JSON", icon: FileJson, color: "text-yellow-500" },
  { name: "HTML", icon: FileCode, color: "text-orange-500" },
  { name: "XML", icon: FileCode, color: "text-purple-500" },
  { name: "SQL", icon: Database, color: "text-blue-400" },
  { name: "Markdown", icon: FileText, color: "text-gray-400" },
  { name: "Images", icon: FileImage, color: "text-pink-500" },
  { name: "Audio", icon: FileAudio, color: "text-indigo-500" },
  { name: "Video", icon: FileVideo, color: "text-rose-500" },
  { name: "YAML", icon: FileBox, color: "text-emerald-500" },
  { name: "EPUB", icon: FileQuestion, color: "text-cyan-500" },
];
export function Marquee() {
  const double = [...fileTypes, ...fileTypes, ...fileTypes, ...fileTypes];
  return (
    <section className="py-4 bg-[#11182C] text-[#c0c7d6] overflow-hidden border-y border-[#1e2640] group">
      <div className="animate-marquee whitespace-nowrap flex gap-10">
        {double.map((file, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <file.icon className={`h-4 w-4 ${file.color}`} />
            <span className="text-sm font-mono font-bold tracking-wide">{file.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}