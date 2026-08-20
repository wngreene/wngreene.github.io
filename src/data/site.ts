/** Site-wide metadata. */
export const SITE = {
  title: 'W. Nicholas Greene',
  description:
    'W. Nicholas Greene — researcher and engineer in robotics, computer vision, and 3D perception.',
  email: 'wng@csail.mit.edu',
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
  wng: { name: 'W. Nicholas Greene', url: 'http://people.csail.mit.edu/wng' },
  nickroy: { name: 'Nicholas Roy', url: 'https://www.csail.mit.edu/user/902' },
  kyel: { name: 'Kyel Ok', url: 'http://www.korobotics.com' },
  lommel: { name: 'Peter Lommel' },
} as const satisfies Record<string, { name: string; url?: string }>;

export type PersonKey = keyof typeof PEOPLE;
