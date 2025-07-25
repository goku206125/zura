const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data to prevent errors on re-seeding
  console.log('Deleting existing data...');
  await prisma.question.deleteMany({});
  await prisma.video.deleteMany({});
  await prisma.quote.deleteMany({});

  // Seed Quotes - KEEPING EXISTING
  console.log('Seeding quotes...');
  await prisma.quote.create({
    data: { text: 'It is not Zura. It is Katsura!' },
  });
  await prisma.quote.create({
    data: { text: 'People improve by being struck down.' },
  });

  // Seed Videos - UPDATED WITH YOUR NEW VIDEOS
  console.log('Seeding videos...');
  
  await prisma.video.create({
    data: {
      title: 'Katsura with Jackie Chan on a dangerous mission',
      url: 'https://www.youtube.com/embed/KcH-9SNR9sA',
    },
  });
  
  await prisma.video.create({
    data: {
      title: 'Katsura san cosplaying as Will Smith for a mission',
      url: 'https://www.youtube.com/embed/MuylJDEZN4M',
    },
  });
  
  await prisma.video.create({
    data: {
      title: 'Katsura san becomes president',
      url: 'https://www.youtube.com/embed/F1lXgWuhdQI?si=kqQhyQfOh0OE53T', // Note: Same URL as above
    },
  });
  
  await prisma.video.create({
    data: {
      title: 'Katsura san meets old friend Tatsuma Sakamoto',
      url: 'https://www.youtube.com/embed/3oULgLAe6DQ',
    },
  });
  
  await prisma.video.create({
    data: {
      title: 'Katsura san heroic sacrifice',
      url: 'https://www.youtube.com/embed/yEm1xzDmGXs',
    },
  });
  
  await prisma.video.create({
    data: {
      title: 'Katsura san is into cuckoldry',
      url: 'https://www.youtube.com/embed/3j1SaPvFSDc',
    },
  });

  // Seed 10 Katsura-themed Questions - KEEPING ALL EXISTING QUESTIONS
  console.log('Seeding questions...');
  
  // Question 1
  await prisma.question.create({
    data: {
      text: "You're at a ramen shop and someone calls you 'Zura'. What do you do?",
      options: [
        "Politely correct them and continue eating",
        "Dramatically slam the table and yell 'ZURA JANAI, KATSURA DA!' then leave without paying",
        "Ignore them completely",
        "Thank them for recognizing you"
      ],
      answer: 1, // Index 1 = second option is correct
    },
  });

  // Question 2
  await prisma.question.create({
    data: {
      text: "The Shinsengumi are chasing you down the street. Your escape plan?",
      options: [
        "Fight them head-on like a true samurai",
        "Hide in a trash can",
        "Put on a fake mustache and walk past them confidently",
        "Call Elizabeth to pick you up in a taxi"
      ],
      answer: 2, // Index 2 = third option is correct
    },
  });

  // Question 3
  await prisma.question.create({
    data: {
      text: "Elizabeth hasn't shown up for work in 3 days. You:",
      options: [
        "File a missing person report",
        "Assume they're on vacation and hire a temporary replacement",
        "Break down crying and put up 'Missing: My Best Friend' posters everywhere",
        "Check if they left a sign"
      ],
      answer: 2,
    },
  });

  // Question 4
  await prisma.question.create({
    data: {
      text: "You need to infiltrate a government building. Your disguise of choice?",
      options: [
        "A janitor with a mop",
        "An overly dramatic space captain named Captain Katsura",
        "A regular businessman",
        "Just wear sunglasses"
      ],
      answer: 1,
    },
  });

  // Question 5
  await prisma.question.create({
    data: {
      text: "Someone asks about your terrorist activities. You respond:",
      options: [
        "I'm not a terrorist, I'm a patriot!",
        "What terrorist activities?",
        "ZURA JANAI, KATSURA DA! Wait, that's not what you asked...",
        "Would you like to hear about our revolution instead?"
      ],
      answer: 0,
    },
  });

  // Question 6
  await prisma.question.create({
    data: {
      text: "You're giving a serious revolutionary speech when a cat walks by. You:",
      options: [
        "Continue the speech professionally",
        "Stop mid-sentence to pet the cat while making baby talk",
        "Incorporate the cat into your speech as a symbol of freedom",
        "Ignore it completely"
      ],
      answer: 2,
    },
  });

  // Question 7
  await prisma.question.create({
    data: {
      text: "Your rental spaceship is due back today but you're nowhere near the return location. You:",
      options: [
        "Call and extend the rental",
        "Return it late and pay the fee",
        "Abandon it and assume a new identity",
        "Paint it a different color and claim it's a different ship"
      ],
      answer: 3,
    },
  });

  // Question 8
  await prisma.question.create({
    data: {
      text: "What is Katsura's catchphrase?",
      options: [
        "Zura janai, Katsura da!",
        "I am Shock!",
        "Ora ora ora!",
        "Believe it!"
      ],
      answer: 0,
    },
  });

  // Question 9
  await prisma.question.create({
    data: {
      text: "What is the name of Katsura's alien pet?",
      options: [
        "Sadaharu",
        "Justaway",
        "Elizabeth",
        "Neo Armstrong Cyclone Jet Armstrong Cannon"
      ],
      answer: 2,
    },
  });

  // Question 10
  await prisma.question.create({
    data: {
      text: "You're caught in an awkward situation. Your escape phrase?",
      options: [
        "ZURA JANAI, KATSURA DA! *runs away*",
        "Elizabeth, use Smokescreen!",
        "This isn't what it looks like! It's for the revolution!",
        "I AM CAPTAIN KATSURA! *dramatic pose and exit*"
      ],
      answer: 2,
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });