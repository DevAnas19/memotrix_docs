import React from "react";
import { ArrowRight, FileCode } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataGrid } from "@/components/features/DataGrid";
export default function DataPage() {
  return (
    <div className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Supported Data &amp; Extractors.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix extractors convert raw documents, tabular records, communication logs, audio recordings, and source code into clean, structured <code className="font-mono text-sm bg-paper-3 border border-rule px-2 py-0.5 rounded text-brand-blue">DocumentData</code>.
        </p>
        <div className="font-hand text-[18px] text-notebook-green font-bold select-none">30+ formats →</div>
      </div>
      <DataGrid />
      <Card className="p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-brand-purple/[0.06] border border-brand-purple/20 text-brand-purple">
            <FileCode className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-ink">Installing Extractor Extras</h2>
        </div>
        <p className="text-sm text-ink-secondary leading-relaxed">
          Heavy dependencies like OCR engines, PDF parsers, audio transcription (Whisper), and image models are packaged under optional extras to keep the core library lightweight.
        </p>
        <div className="p-3 rounded-lg bg-paper-3 border border-rule font-mono text-sm text-brand-blue font-semibold">
          pip install memotrix[extractors]
        </div>
      </Card>
      <div className="pt-6 border-t border-rule flex justify-between items-center">
        <Button href="/architecture" variant="outline">← Architecture</Button>
        <Button href="/memory" className="gap-2">Memory Types <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}