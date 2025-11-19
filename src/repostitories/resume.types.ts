/**
 * TypeScript interfaces generated from `resume.json` structure.
 * Use these interfaces to type resume data imported from JSON or fetched from an API.
 */

export interface Resume {
    basics: Basics;
    work: WorkItem[];
    volunteer?: VolunteerItem[];
    education?: EducationItem[];
    awards?: Award[];
    certificates?: Certificate[];
    courses?: Course[];
    publications?: Publication[];
    skills?: Skill[];
    languages?: Language[];
    interests?: Interest[];
    references?: Reference[];
    projects?: Project[];
    academicAchievements?: AcademicAchievement[];
}

export interface Basics {
    name: string;
    label?: string;
    image?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    location?: Location;
    profiles?: Profile[];
}

export interface Location {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
}

export interface Profile {
    network?: string;
    username?: string;
    url?: string;
}

export interface WorkItem {
    name: string;
    position?: string;
    url?: string;
    startDate?: string; // ISO date or free string (e.g. "Current")
    endDate?: string;
    summary?: string;
    highlights?: string[];
}

export interface VolunteerItem extends WorkItem {}

export interface EducationItem {
    institution: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
}

export interface Award {
    title: string;
    date?: string;
    awarder?: string;
    summary?: string;
}

export interface Certificate {
    name: string;
    date?: string;
    issuer?: string;
    issuerLogo?: string;
    url?: string;
}

export interface Course {
    name: string;
    issuer?: string;
    details?: string;
}

export interface Publication {
    name: string;
    publisher?: string;
    releaseDate?: string;
    url?: string;
    summary?: string;
}

export interface Skill {
    name: string;
    level?: string;
    keywords?: string[];
}

export interface Language {
    language: string;
    fluency?: string;
}

export interface Interest {
    name: string;
    keywords?: string[];
}

export interface Reference {
    name: string;
    reference?: string;
}

export interface Project {
    name: string;
    startDate: string;
    endDate: string;
    description?: string;
    highlights?: string[];
    url?: string;
    image?: string;
}

export interface AcademicAchievement {
    name: string;
    issuer?: string;
    date?: string;
    grade?: string;
    details?: string;
    skillsUsed?: string[];
}

// Convenience: named export for the root type
export type ResumeJSON = Resume;

/*
Usage examples:

import { Resume } from './resume.types';
import resumeData from './resume.json';

const typedResume: Resume = resumeData; // if your tsconfig allows JSON imports

Or apply runtime parsing/validation if JSON imports aren't enabled.
*/
