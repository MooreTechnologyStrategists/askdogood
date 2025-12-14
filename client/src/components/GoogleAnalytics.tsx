import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const [location] = useLocation();

  useEffect(() => {
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics: No valid measurement ID provided');
      return;
    }

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;

    // Configure GA4
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: location,
      send_page_view: true,
    });

    console.log('Google Analytics initialized:', measurementId);
  }, [measurementId]);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag && measurementId && measurementId !== 'G-XXXXXXXXXX') {
      window.gtag('config', measurementId, {
        page_path: location,
      });
      console.log('GA4 page view:', location);
    }
  }, [location, measurementId]);

  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
    </>
  );
};

export default GoogleAnalytics;

// Utility function to track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('GA4 event:', eventName, eventParams);
  }
};

// Utility function to track affiliate link clicks
export const trackAffiliateClick = (productName: string, url: string) => {
  trackEvent('affiliate_click', {
    product_name: productName,
    destination_url: url,
    event_category: 'affiliate',
    event_label: productName,
  });
};

// Utility function to track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    currency: 'USD',
  });
};
