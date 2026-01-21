import React from 'react';
import { ExternalLink } from 'lucide-react';
import { trackAffiliateClick } from './GoogleAnalytics';

interface AffiliateLinkProps {
  productName: string;
  amazonUrl: string;
  affiliateTag?: string;
  className?: string;
  variant?: 'button' | 'text' | 'card';
  imageUrl?: string;
  price?: string;
  description?: string;
}

const AffiliateLink: React.FC<AffiliateLinkProps> = ({
  productName,
  amazonUrl,
  affiliateTag = 'dogoodcollect-20',
  className = '',
  variant = 'button',
  imageUrl,
  price,
  description,
}) => {
  // Add affiliate tag to Amazon URL
  const getAffiliateUrl = () => {
    try {
      const url = new URL(amazonUrl);
      url.searchParams.set('tag', affiliateTag);
      return url.toString();
    } catch {
      // If URL parsing fails, append tag manually
      const separator = amazonUrl.includes('?') ? '&' : '?';
      return `${amazonUrl}${separator}tag=${affiliateTag}`;
    }
  };

  const affiliateUrl = getAffiliateUrl();

  const handleClick = () => {
    trackAffiliateClick(productName, affiliateUrl);
  };

  // Button variant
  if (variant === 'button') {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        onClick={handleClick}
        className={`inline-flex items-center gap-2 px-6 py-3 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg ${className}`}
      >
        <span>View {productName} on Amazon</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    );
  }

  // Text link variant
  if (variant === 'text') {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        onClick={handleClick}
        className={`text-[#FF9900] hover:text-[#FF9900]/80 underline inline-flex items-center gap-1 ${className}`}
      >
        <span>{productName}</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    );
  }

  // Card variant
  if (variant === 'card') {
    return (
      <div className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white ${className}`}>
        {imageUrl && (
          <div className="aspect-square bg-gradient-to-br from-orange-50 to-yellow-50 relative">
            <img
              src={imageUrl}
              alt={productName}
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm p-8 text-center">Product Image</div>';
                }
              }}
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">{productName}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>
          )}
          {price && (
            <p className="text-xl font-bold text-[#FF9900] mb-3">{price}</p>
          )}
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold rounded transition-colors w-full justify-center shadow-sm"
          >
            <span>View on Amazon</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            As an Amazon Associate, I earn from qualifying purchases.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default AffiliateLink;
