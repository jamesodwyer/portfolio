import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return <CaseStudyClient study={study} nextStudy={nextStudy} />;
}
