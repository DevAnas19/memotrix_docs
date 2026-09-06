import React from "react";
import { Github, Heart, GitPullRequest, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GH_URL } from "@/lib/constants";
export default function ContributorsPage() {
  return (
    <div className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-4 border-b border-rule pb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">
          Contributors &amp; Community.
        </h1>
        <p className="text-base text-ink-secondary leading-relaxed max-w-3xl">
          Memotrix is built in the open. We welcome contributions for new file extractors, vector store integrations, embedding models, and documentation improvements.
        </p>
        <div className="font-hand text-[18px] text-notebook-pink font-bold select-none">join in →</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="space-y-3 p-6">
          <div className="p-2.5 rounded-lg bg-brand-blue/[0.06] border border-brand-blue/20 w-fit text-brand-blue">
            <GitPullRequest className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-ink">Submit Pull Requests</h2>
          <p className="text-[13px] text-ink-secondary leading-relaxed">
            Fix bugs, improve extractor performance, or add test coverage for complex document parsers.
          </p>
        </Card>
        <Card className="space-y-3 p-6">
          <div className="p-2.5 rounded-lg bg-brand-purple/[0.06] border border-brand-purple/20 w-fit text-brand-purple">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-ink">Discussions &amp; Features</h2>
          <p className="text-[13px] text-ink-secondary leading-relaxed">
            Share ideas for memory retention strategies, reranker algorithms, or agent framework integrations.
          </p>
        </Card>
        <Card className="space-y-3 p-6">
          <div className="p-2.5 rounded-lg bg-notebook-green/[0.06] border border-notebook-green/20 w-fit text-notebook-green">
            <Heart className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold text-ink">Add New Extractors</h2>
          <p className="text-[13px] text-ink-secondary leading-relaxed">
            Implement parsers for new file types by extending the built-in <code className="font-mono text-xs text-brand-blue">DocumentData</code> pipeline.
          </p>
        </Card>
      </div>
      <Card className="p-8 text-center space-y-4 bg-grid">
        <Github className="h-10 w-10 text-brand-blue mx-auto" />
        <h2 className="text-2xl font-bold text-ink">Join us on GitHub</h2>
        <p className="text-sm text-ink-secondary max-w-lg mx-auto leading-relaxed">
          Star the repo, fork the codebase, or open an issue to start contributing to the future of AI agent memory infrastructure.
        </p>
        <div className="pt-2">
          <Button href={GH_URL} external size="lg" className="gap-2">
            <Github className="h-5 w-5" /> Visit Matrixxboy/memotrix ↗
          </Button>
        </div>
      </Card>
    </div>
  );
}