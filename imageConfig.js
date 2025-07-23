// imageConfig.js
export const katsuraImages = {
  // Define all your images here
  afro: '/images/afro.png',
  captain: '/images/captain.png',
  comedyGold: '/images/comedy-gold.png',
  seriousLeader: '/images/serious-leader.png',
  withElizabeth: '/images/with-elizabeth.png'
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