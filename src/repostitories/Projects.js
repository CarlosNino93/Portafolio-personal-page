import { TAGS } from '../repostitories/TechnologyTags.js';

export const PROJECTS = [
    {
        title: 'Tesla Landing Clone',
        description:
            'Made learning to use the Astro framework to build static web pages.',
        link: 'project url',
        github: 'project repository url',
        image: '../public/assets/projectsPhotos/teslaClone.webp',
        tags: [TAGS.ASTRO, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: 'X-clone',
        description:
            'A functional replica of the X site, using Next.js and supabase',
        link: 'project url',
        github: 'project repository url',
        image: 'https://via.placeholder.com/300x200',
        tags: [TAGS.NEXT, TAGS.SUPABASE],
    },
];
