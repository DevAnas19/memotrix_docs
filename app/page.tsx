import { Hero } from "@/components/features/Hero";
import { SupportedFiles } from "@/components/features/SupportedFiles";
import { CompareBox } from "@/components/features/CompareBox";
import { QuickStartNotebook } from "@/components/features/QuickStartNotebook";
import { MemoryTypeGrid } from "@/components/features/MemoryTypeGrid";
import { SearchPipeline } from "@/components/features/SearchPipeline";
import { DataGrid } from "@/components/features/DataGrid";
import { ArchitectureFeatures } from "@/components/features/ArchitectureFeatures";
import { FadeIn } from "@/components/ui/FadeIn";
export default function Home() {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={100}>
        <SupportedFiles />
      </FadeIn>
      <FadeIn delay={150}>
        <CompareBox />
      </FadeIn>
      <FadeIn delay={150}>
        <QuickStartNotebook />
      </FadeIn>
      <FadeIn delay={150}>
        <MemoryTypeGrid />
      </FadeIn>
      <FadeIn delay={150}>
        <SearchPipeline />
      </FadeIn>
      <FadeIn delay={150}>
        <DataGrid />
      </FadeIn>
      <FadeIn delay={150}>
        <ArchitectureFeatures />
      </FadeIn>
    </>
  );
}