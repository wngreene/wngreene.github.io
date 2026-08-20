/** Site-wide metadata. */
export const SITE = {
  title: 'W. Nicholas Greene',
  /* Shown under the name on every page. */
  tagline: 'AI · ML · Robotics · Perception',
  description:
    'W. Nicholas Greene — research engineer working in AI, ML, robotics, and 3D perception.',
  github: 'https://github.com/wngreene',
  linkedin: 'https://www.linkedin.com/in/wnickgreene',
  x: 'https://x.com/wnickgreene',
  cv: '/data/wnickgreene_cv.pdf',
};

/**
 * Author links, referenced by key from publications.yaml so each URL is
 * defined exactly once. Mirrors the `links:` map from the old _config.yml.
 */
export const PEOPLE = {
  // No url: this is the site owner, and the old CSAIL page 301s straight
  // back here, so every author credit was a link to the current page.
  wng: { name: 'W. Nicholas Greene', self: true },
  nickroy: { name: 'Nicholas Roy', url: 'https://www.csail.mit.edu/user/902' },
  kyel: { name: 'Kyel Ok', url: 'http://www.korobotics.com' },
  lommel: { name: 'Peter Lommel' },
} as const satisfies Record<
  string,
  { name: string; url?: string; self?: boolean }
>;

export type PersonKey = keyof typeof PEOPLE;
