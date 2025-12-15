import React from 'react';
import AffiliateLink from './AffiliateLink';
import { AFFILIATE_PRODUCTS, AffiliateProduct } from '@/config/affiliateProducts';

interface ProductRecommendationsProps {
  productIds: string[];
  title?: string;
  variant?: 'button' | 'card';
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  productIds,
  title = 'Recommended Products',
  variant = 'card',
}) => {
  const products = productIds
    .map(id => AFFILIATE_PRODUCTS[id])
    .filter((product): product is AffiliateProduct => product !== undefined);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="my-12 p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">
        Products I personally use and recommend for your wellness journey
      </p>
      
      {variant === 'card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <AffiliateLink
              key={product.id}
              productName={product.name}
              amazonUrl={product.amazonUrl}
              variant="card"
              imageUrl={product.imageUrl}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                {product.description && (
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                )}
              </div>
              <AffiliateLink
                productName={product.name}
                amazonUrl={product.amazonUrl}
                variant="button"
                className="ml-4 shrink-0"
              />
            </div>
          ))}
        </div>
      )}
      
      <p className="text-xs text-gray-500 mt-6 text-center italic">
        As an Amazon Associate, I earn from qualifying purchases at no additional cost to you.
      </p>
    </div>
  );
};

export default ProductRecommendations;
