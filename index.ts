import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Check Prisma entries
async function main() {
  // await prisma.profile.create({ data: { name: 'Adam' } });
  // await prisma.profile.create({ data: { name: 'Alex' } });
  // await prisma.profile.create({ data: { name: 'Alice' } });
  const entries = await prisma.profile.findMany({
    where: { name: { contains: 'A' } },
  });
  console.log(entries);

  await prisma.$disconnect();
}

main();
