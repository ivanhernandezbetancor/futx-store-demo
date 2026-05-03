import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Real Madrid 1998 Retro Oficial',
        description: 'La mítica camiseta de la Séptima.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=500&auto=format&fit=crop',
        category: 'Retro',
        stock: 15,
        isLimited: false
      },
      {
        name: 'Barcelona 2009 Edición Sextete',
        description: 'La camiseta con la que se ganó todo.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=500&auto=format&fit=crop',
        category: 'Histórica',
        stock: 3,
        isLimited: true
      },
      {
        name: 'Juventus 1995 Vintage Limitada',
        description: 'Clásica bianconeri con la estrella.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1518605368461-1e12f452076e?q=80&w=500&auto=format&fit=crop',
        category: 'Vintage',
        stock: 2,
        isLimited: true
      },
      {
        name: 'Arsenal 2004 Invencibles',
        description: 'La temporada perfecta.',
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=500&auto=format&fit=crop',
        category: 'Retro',
        stock: 8,
        isLimited: false
      }
    ]
  });
  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
