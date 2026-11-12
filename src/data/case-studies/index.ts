import { cohort } from "./cohort";
import { consoldata } from "./consoldata";
import { podcast } from "./podcast";
import { steady } from "./steady";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [cohort, consoldata, podcast, steady];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
