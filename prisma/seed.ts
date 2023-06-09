import { PrismaClient } from '@prisma/client'
import { links } from '../data/links'
const prisma = new PrismaClient()

// async function wipeData() {
//   await prisma.user.deleteMany();
//   await prisma.link.deleteMany();

//   console.log('Data wiped out successfully.');
// }

// wipeData()
//   .catch((e) => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
// });

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail3@gmail.com`,
      role: 'ADMIN',
    },
  })

  const linkCreateManyInputs = links.map((link) => ({
    id: link.id,
    title: link.title,
    description: link.description,
    category: link.category,
    imageUrl: link.imageUrl,
    url: link.url,
  }));

  await prisma.link.createMany({
    data: linkCreateManyInputs,
  });
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
})