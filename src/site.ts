export const SITE = {
  name: "Ohithere (it's Owen)",
  url: 'https://www.owenwang.com',
  author: 'Owen Wang',
  gaId: 'G-BMRNWX7M5C',
};

export const SECTIONS = {
  blog: {
    title: 'O Musing Myself',
    description: "Hi, I'm Owen Wang! I write about whatever's on my mind, usually life and tech learnings.",
    feed: '/feed.xml',
  },
  food: {
    title: 'Post Mort Yum',
    description:
      "Retrospectives on what went well / could be improved when I try to cook new dishes. Let's learn together!",
    feed: '/food.xml',
  },
  travel: {
    title: 'In Place, Of Food',
    description:
      'Food, geography, culture, and history are all so interconnected, we cannot fully experience a place without also understanding their food. Here, one dish and location at a time, we explore a little more.',
    feed: '/travel.xml',
  },
} as const;

