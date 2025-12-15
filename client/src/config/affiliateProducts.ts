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
  // Sea Moss Products
  seaMoss: {
    id: 'sea-moss',
    name: 'Organic Sea Moss Supplement',
    amazonUrl: 'https://www.amazon.com/dp/B08XYQR8ZN',
    category: 'supplements',
    description: 'Wild-harvested Irish Sea Moss with 92 minerals for immune support and thyroid health',
  },
  
  // Collagen Products
  collagen: {
    id: 'collagen',
    name: 'Vital Proteins Collagen Peptides',
    amazonUrl: 'https://www.amazon.com/dp/B00K7XKF0W',
    category: 'supplements',
    description: 'Grass-fed collagen peptides for skin, hair, nails, and joint health',
  },
  
  // SuperBeets
  superBeets: {
    id: 'super-beets',
    name: 'SuperBeets Heart Chews',
    amazonUrl: 'https://www.amazon.com/dp/B07VWXQXZQ',
    category: 'supplements',
    description: 'Nitric oxide booster for heart health, energy, and circulation',
  },
  
  // Additional wellness products
  turmeric: {
    id: 'turmeric',
    name: 'Organic Turmeric Curcumin with BioPerine',
    amazonUrl: 'https://www.amazon.com/dp/B019ET28WA',
    category: 'supplements',
    description: 'Anti-inflammatory support with black pepper for enhanced absorption',
  },
  
  omega3: {
    id: 'omega-3',
    name: 'Nordic Naturals Omega-3',
    amazonUrl: 'https://www.amazon.com/dp/B002CQU55Y',
    category: 'supplements',
    description: 'High-quality fish oil for heart, brain, and immune health',
  },
  
  probiotics: {
    id: 'probiotics',
    name: 'Garden of Life Probiotics',
    amazonUrl: 'https://www.amazon.com/dp/B00Y8MP4G6',
    category: 'supplements',
    description: 'Digestive health support with 50 billion CFU and diverse strains',
  },
  
  vitaminD: {
    id: 'vitamin-d',
    name: 'Vitamin D3 + K2',
    amazonUrl: 'https://www.amazon.com/dp/B07FMTM8JT',
    category: 'supplements',
    description: 'Immune support and bone health with optimal absorption',
  },
  
  magnesium: {
    id: 'magnesium',
    name: 'Magnesium Glycinate',
    amazonUrl: 'https://www.amazon.com/dp/B000BD0RT0',
    category: 'supplements',
    description: 'Highly absorbable magnesium for sleep, stress, and muscle health',
  },
};

export const AFFILIATE_TAG = 'dogoodcollect-20';
