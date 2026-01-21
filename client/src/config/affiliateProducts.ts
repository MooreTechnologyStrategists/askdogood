export interface AffiliateProduct {
  id: string;
  name: string;
  amazonUrl: string;
  category: 'supplements' | 'health' | 'wellness' | 'books';
  imageUrl?: string;
  price?: string;
  description?: string;
}

export const AFFILIATE_PRODUCTS: Record<string, AffiliateProduct> = {
  // Rosee's Personal Favorites - Products She Actually Uses & Recommends
  
  hairGrowth: {
    id: 'hair-growth',
    name: 'Hair Growth Supplement - Biotin & Collagen Formula',
    amazonUrl: 'https://amzn.to/49HJmhu',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71xR5gQYdPL._AC_SL1500_.jpg',
    description: 'My go-to for stress thinning spots! Helps hair get fuller, thicker, and longer fast. Only downside - you\'ll have to shave everywhere more often! 💁‍♀️',
  },
  
  weightLoss: {
    id: 'weight-loss',
    name: 'Quick Weight Loss Supplement',
    amazonUrl: 'https://amzn.to/4b5H0LN',
    category: 'wellness',
    imageUrl: 'https://m.media-amazon.com/images/I/71JtZqZ8YxL._AC_SL1500_.jpg',
    description: 'When I seriously need to lose a few pounds quick, this is my secret weapon. Fast results you can actually see! 🔥',
  },
  
  skinSnapback: {
    id: 'skin-snapback',
    name: 'Youthful Skin Complex',
    amazonUrl: 'https://amzn.to/3YMbdIr',
    category: 'wellness',
    imageUrl: 'https://m.media-amazon.com/images/I/61oqvGH7zVL._AC_SL1500_.jpg',
    description: 'I call this my "snapback" - take this for a few days and see the results in glowy, youthful skin. Absolutely love it! ✨',
  },
  
  thermalLeggings: {
    id: 'thermal-leggings',
    name: 'Premium Thermal Fleece Lined Leggings',
    amazonUrl: 'https://amzn.to/4pIJGm1',
    category: 'wellness',
    imageUrl: 'https://m.media-amazon.com/images/I/61z8M+kDe9L._AC_SL1500_.jpg',
    description: 'I love these SO much I bought 4 pairs! Amazing price, feel, length, and quality. Perfect as main pants or layered for cold weather. 🖤',
  },
  
  productOne: {
    id: 'product-one',
    name: 'Wellness Essential #1',
    amazonUrl: 'https://amzn.to/4t8sN7x',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71Z8pR2QJSL._AC_SL1500_.jpg',
    description: 'A must-have for your daily wellness routine',
  },
  
  productTwo: {
    id: 'product-two',
    name: 'Wellness Essential #2',
    amazonUrl: 'https://amzn.to/4qtmzNx',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71C8g+QQVHL._AC_SL1500_.jpg',
    description: 'Another essential I rely on daily',
  },
  
  // Keep some originals for legacy blog posts
  seaMoss: {
    id: 'sea-moss',
    name: 'Organic Sea Moss Supplement',
    amazonUrl: 'https://amzn.to/49HJmhu',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71xR5gQYdPL._AC_SL1500_.jpg',
    description: 'Wild-harvested Irish Sea Moss with 92 minerals for immune support and thyroid health',
  },
  
  collagen: {
    id: 'collagen',
    name: 'Vital Proteins Collagen Peptides',
    amazonUrl: 'https://amzn.to/3YMbdIr',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/61oqvGH7zVL._AC_SL1500_.jpg',
    description: 'Grass-fed collagen peptides for skin, hair, nails, and joint health',
  },
  
  superBeets: {
    id: 'super-beets',
    name: 'SuperBeets Heart Chews',
    amazonUrl: 'https://amzn.to/4b5H0LN',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71JtZqZ8YxL._AC_SL1500_.jpg',
    description: 'Nitric oxide booster for heart health, energy, and circulation',
  },
  
  turmeric: {
    id: 'turmeric',
    name: 'Organic Turmeric Curcumin',
    amazonUrl: 'https://amzn.to/4t8sN7x',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71Z8pR2QJSL._AC_SL1500_.jpg',
    description: 'Anti-inflammatory support with black pepper for enhanced absorption',
  },
  
  omega3: {
    id: 'omega-3',
    name: 'Nordic Naturals Omega-3',
    amazonUrl: 'https://amzn.to/4qtmzNx',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71C8g+QQVHL._AC_SL1500_.jpg',
    description: 'High-quality fish oil for heart, brain, and immune health',
  },
  
  vitaminD: {
    id: 'vitamin-d',
    name: 'Vitamin D3 + K2',
    amazonUrl: 'https://amzn.to/4t8sN7x',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71Z8pR2QJSL._AC_SL1500_.jpg',
    description: 'Immune support and bone health with optimal absorption',
  },
  
  magnesium: {
    id: 'magnesium',
    name: 'Magnesium Glycinate',
    amazonUrl: 'https://amzn.to/4qtmzNx',
    category: 'supplements',
    imageUrl: 'https://m.media-amazon.com/images/I/71C8g+QQVHL._AC_SL1500_.jpg',
    description: 'Highly absorbable magnesium for sleep, stress, and muscle health',
  },
};

export const AFFILIATE_TAG = 'dogoodcollect-20';
