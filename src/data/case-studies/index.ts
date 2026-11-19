import { cohort } from "./cohort";
import { consoldata } from "./consoldata";
import { podcast } from "./podcast";
import { steady } from "./steady";
import { patientCohort } from "./patient-cohort";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [cohort, consoldata, podcast, steady, patientCohort];
export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
