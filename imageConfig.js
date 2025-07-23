// imageConfig.js
export const katsuraImages = {
  // Define all your images here
  afro: '/images/afro.jpg',
  captain: '/images/captain.jpg',
  comedyGold: '/images/comedy-gold.jpg',
  seriousLeader: '/images/serious-leader.jpg',
  withElizabeth: '/images/with-elizabeth.jpg'
};

// Define image sets for each page
export const pageImages = {
  home: [
    {
      src: katsuraImages.afro,
      position: 'absolute top-20 left-10',
      size: 'w-32 h-32',
      animation: 'animate-bounce-slow',
      alt: 'Katsura with Afro'
    },
    {
      src: katsuraImages.captain,
      position: 'fixed right-0 top-1/2 -translate-y-1/2',
      size: 'w-24 h-24',
      animation: 'hover:scale-110 transition-transform',
      alt: 'Captain Katsura'
    }
  ],
  quotes: [
    {
      src: katsuraImages.seriousLeader,
      position: 'absolute top-10 right-10',
      size: 'w-32 h-32',
      animation: 'animate-pulse',
      alt: 'Thinking Katsura'
    }
  ],
  games: [
    {
      src: katsuraImages.comedyGold,
      position: 'fixed bottom-20 right-20',
      size: 'w-28 h-28',
      animation: 'animate-bounce',
      alt: 'Gaming Katsura'
    }
  ]
};