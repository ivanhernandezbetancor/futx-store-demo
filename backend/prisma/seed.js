import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing products first
  await prisma.product.deleteMany({});

  await prisma.product.createMany({
    data: [
      {
        name: 'Real Madrid 2023-2024 Local',
        description: 'La camiseta blanca merengue de la temporada. Elegancia pura con detalles dorados.',
        price: 34.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2023/05/comprar-camiseta-real-madrid-local-2023-2024-la-liga-bellingham-vinicius-4.jpg',
        category: 'Retro',
        stock: 15,
        isLimited: false
      },
      {
        name: 'Barcelona 1999-2000 Local',
        description: 'La blaugrana de Rivaldo y Kluivert. Rayas verticales azul y grana que hicieron historia.',
        price: 39.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-barcelona-local-1999-2000-rivaldo-kluivert-1.jpg',
        category: 'Histórica',
        stock: 3,
        isLimited: true
      },
      {
        name: 'Juventus 1997-1998 Local',
        description: 'Las rayas blancas y negras de Del Piero y Zidane. La Vecchia Signora en su máximo esplendor.',
        price: 49.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/12/comprar-camiseta-juventus-local-1997-1998-del-piero-zidane-1.jpg',
        category: 'Vintage',
        stock: 2,
        isLimited: true
      },
      {
        name: 'Arsenal 2005-2006 Local',
        description: 'La última temporada en Highbury. La camiseta roja y blanca de Henry y Bergkamp.',
        price: 44.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-arsenal-local-2005-2006-henry-bergkamp-1.jpg',
        category: 'Retro',
        stock: 8,
        isLimited: false
      },
      {
        name: 'Manchester United 2007-2008 Final UCL',
        description: 'La camiseta de la final de Champions en Moscú. Ronaldo, Rooney y el triplete rojo.',
        price: 42.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-manchester-united-final-champions-league-2008-local-ronaldo-rooney-1.jpg',
        category: 'Histórica',
        stock: 5,
        isLimited: false
      },
      {
        name: 'Inter de Milán 2009-2010 Final UCL',
        description: 'El triplete de Mourinho. Sneijder, Milito y la noche mágica del Bernabéu.',
        price: 47.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/12/comprar-camiseta-inter-de-milan-final-champions-league-2010-local-sneijder-milito-1.jpg',
        category: 'Histórica',
        stock: 4,
        isLimited: true
      },
      {
        name: 'Barcelona 1995-1997 Visitante',
        description: 'La equipación visitante de la era Ronaldo Nazário. Diseño naranja vibrante legendario.',
        price: 44.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-barcelona-visitante-1995-1997-meyba-retro-vintage-1.jpg',
        category: 'Vintage',
        stock: 6,
        isLimited: false
      },
      {
        name: 'Atlético de Madrid 2004-2005 Local',
        description: 'La rojiblanca de Fernando Torres. La camiseta que vio nacer al Niño del Calderón.',
        price: 39.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-atletico-de-madrid-local-2004-2005-torres-1.jpg',
        category: 'Retro',
        stock: 7,
        isLimited: false
      },
      {
        name: 'Real Madrid 1999-2000 Visitante',
        description: 'La azul oscura de Raúl y Morientes. Elegancia visitante del Real Madrid galáctico.',
        price: 41.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2022/10/comprar-camiseta-real-madrid-visitante-1999-2000-raul-morientes-1.jpg',
        category: 'Retro',
        stock: 9,
        isLimited: false
      },
      {
        name: 'Athletic Club Bilbao 1995-1997 Local',
        description: 'Las rayas rojiblancas de Julen Guerrero. San Mamés rugiendo con esta equipación.',
        price: 42.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2023/01/comprar-camiseta-athletic-club-bilbao-local-1995-1997-julens-guerrero-1.jpg',
        category: 'Vintage',
        stock: 3,
        isLimited: true
      },
      {
        name: 'Santos 2012-2013 Neymar',
        description: 'La camiseta blanca del Santos de Neymar. Antes de Europa, el jogo bonito brasileño.',
        price: 37.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2023/01/comprar-camiseta-santos-local-2012-2013-neymar-1.jpg',
        category: 'Retro',
        stock: 10,
        isLimited: false
      },
      {
        name: 'Sporting Lisboa 2001-2003 Local',
        description: 'El verde de la cantera que formó a Cristiano Ronaldo. Sporting Clube de Portugal.',
        price: 36.99,
        image: 'https://camisetasfutbolymas.com/wp-content/uploads/2023/04/IMG-5843.jpg',
        category: 'Vintage',
        stock: 5,
        isLimited: false
      }
    ]
  });
  console.log('✅ Database seeded with 12 REAL jersey products!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
