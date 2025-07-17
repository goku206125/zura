const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data to prevent errors on re-seeding
  console.log('Deleting existing data...');
  await prisma.question.deleteMany({});
  await prisma.video.deleteMany({});
  await prisma.quote.deleteMany({});

  // Seed Quotes
  console.log('Seeding quotes...');
  await prisma.quote.create({
    data: { text: 'It is not Zura. It is Katsura!' },
  });
  await prisma.quote.create({
    data: { text: 'People improve by being struck down.' },
  });

  // Seed Videos (using YouTube embed URLs)
  console.log('Seeding videos...');
  await prisma.video.create({
    data: {
      title: 'Gintama Funny Moments',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example URL
    },
  });
  await prisma.video.create({
    data: {
      title: 'Katsura Rap',
      url: 'https://www.youtube.com/embed/KcH-9SNR9sA?si=hfMQG4ImrudoH0O4', // Example URL
    },
  });

  // Seed Questions
  console.log('Seeding questions...');
  await prisma.question.create({
    data: {
      text: 'What is Katsura\'s catchphrase?',
      options: ['Zura janai, Katsura da!', 'I am Shock!', 'Ora ora ora!', 'Believe it!'],
      answer: 0,
    },
  });
  await prisma.question.create({
    data: {
      text: 'What is the name of Katsura\'s alien pet?',
      options: ['Sadaharu', 'Justaway', 'Elizabeth', 'Neo Armstrong Cyclone Jet Armstrong Cannon'],
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