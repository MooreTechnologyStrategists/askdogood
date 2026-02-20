import { GA_MEASUREMENT_ID, GA_DEBUG, GA_EVENTS, CONVERSION_GOALS } from '@/config/analytics';

// Initialize Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

// Load Google Analytics script
export function initGoogleAnalytics() {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-7K8N2DFHDP') {
    if (GA_DEBUG) console.log('GA not initialized - missing or placeholder ID');
    return;
  }

  // Create script tags
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      send_page_view: false
    });
  `;
  document.head.appendChild(script2);

  if (GA_DEBUG) {
    console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
  }
}

// Load Microsoft Clarity script
export function initClarity(projectId: string) {
  if (typeof window === 'undefined' || !projectId || projectId === 'clarity_placeholder') {
    if (GA_DEBUG) console.log('Clarity not initialized - missing or placeholder ID');
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${projectId}");
  `;
  document.head.appendChild(script);

  if (GA_DEBUG) {
    console.log('Microsoft Clarity initialized with project ID:', projectId);
  }
}

// Track page views
export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  });

  if (GA_DEBUG) {
    console.log('Page view tracked:', path, title);
  }
}

// Track custom events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window === 'undefined' || !window.gtag) {
    if (GA_DEBUG) {
      console.log('Event tracked (GA not loaded):', eventName, eventParams);
    }
    return;
  }

  window.gtag('event', eventName, eventParams);

  if (GA_DEBUG) {
    console.log('Event tracked:', eventName, eventParams);
  }
}

// Track conversion goals
export function trackConversion(
  goalName: string,
  value?: number,
  additionalParams?: Record<string, any>
) {
  trackEvent(goalName, {
    value,
    currency: 'USD',
    ...additionalParams,
  });

  if (GA_DEBUG) {
    console.log('Conversion tracked:', goalName, value, additionalParams);
  }
}

// Lead Magnet Tracking
export function trackLeadMagnetView(magnetType: string, pagePath: string) {
  trackEvent(GA_EVENTS.LEAD_MAGNET_VIEW, {
    magnet_type: magnetType,
    page_path: pagePath,
  });
}

export function trackLeadMagnetDownload(magnetType: string, pagePath: string) {
  trackEvent(GA_EVENTS.LEAD_MAGNET_DOWNLOAD, {
    magnet_type: magnetType,
    page_path: pagePath,
  });
  
  // Also track as a conversion goal
  trackConversion(CONVERSION_GOALS.LEAD_GENERATED, 1, {
    magnet_type: magnetType,
  });
}

// Newsletter/Email Tracking
export function trackNewsletterSignup(
  source: string,
  magnetType?: string
) {
  trackEvent(GA_EVENTS.NEWSLETTER_SIGNUP, {
    signup_source: source,
    magnet_type: magnetType,
  });
  
  trackConversion(CONVERSION_GOALS.EMAIL_CAPTURED, 1, {
    source,
    magnet_type: magnetType,
  });
}

export function trackNewsletterSignupSuccess(
  source: string,
  magnetType?: string
) {
  trackEvent(GA_EVENTS.NEWSLETTER_SIGNUP_SUCCESS, {
    signup_source: source,
    magnet_type: magnetType,
  });
}

// Coaching Page Tracking
export function trackCoachingPageView() {
  trackEvent(GA_EVENTS.COACHING_PAGE_VIEW);
}

export function trackCoachingInquiry(packageType: string, packageValue: number) {
  trackEvent(GA_EVENTS.COACHING_INQUIRY, {
    package_type: packageType,
    package_value: packageValue,
  });
  
  trackConversion(CONVERSION_GOALS.COACHING_INQUIRY_SUBMITTED, packageValue, {
    package_type: packageType,
  });
}

export function trackCoachingCTAClick(ctaType: string, packageValue: number) {
  const eventMap: Record<string, string> = {
    'discovery-call': GA_EVENTS.DISCOVERY_CALL_CLICK,
    'transformation': GA_EVENTS.TRANSFORMATION_PACKAGE_CLICK,
    'vip': GA_EVENTS.VIP_INTENSIVE_CLICK,
  };
  
  trackEvent(eventMap[ctaType] || GA_EVENTS.COACHING_INQUIRY, {
    package_type: ctaType,
    package_value: packageValue,
  });
}

// Course & Product Tracking
export function trackCoursePageView(courseName: string, courseValue: number) {
  trackEvent(GA_EVENTS.COURSE_PAGE_VIEW, {
    course_name: courseName,
    course_value: courseValue,
  });
}

export function trackCourseCTAClick(courseName: string, courseValue: number, ctaLocation: string) {
  trackEvent(GA_EVENTS.COURSE_CTA_CLICK, {
    course_name: courseName,
    course_value: courseValue,
    cta_location: ctaLocation,
  });
  
  trackEvent(GA_EVENTS.COURSE_PURCHASE_INTENT, {
    course_name: courseName,
    value: courseValue,
  });
}

export function trackProductClick(productName: string, productValue: number, productCategory: string) {
  trackEvent(GA_EVENTS.PRODUCT_CLICK, {
    product_name: productName,
    product_value: productValue,
    product_category: productCategory,
  });
}

// Social Media Tracking
export function trackSocialClick(platform: string, location: string) {
  trackEvent(GA_EVENTS.SOCIAL_CLICK, {
    platform,
    location,
  });
}

export function trackSocialFollow(platform: string) {
  trackEvent(GA_EVENTS.SOCIAL_FOLLOW, {
    platform,
  });
}

// Affiliate Link Tracking
export function trackAffiliateClick(
  productName: string,
  affiliateProgram: string,
  commissionValue?: number
) {
  trackEvent(GA_EVENTS.AFFILIATE_CLICK, {
    product_name: productName,
    affiliate_program: affiliateProgram,
    commission_value: commissionValue,
  });
}

// Contact Form Tracking
export function trackContactFormSubmit(formType: string, subject?: string) {
  trackEvent(GA_EVENTS.CONTACT_FORM_SUBMIT, {
    form_type: formType,
    subject,
  });
}

// Video Tracking
export function trackVideoPlay(videoTitle: string, videoLocation: string) {
  trackEvent(GA_EVENTS.VIDEO_PLAY, {
    video_title: videoTitle,
    video_location: videoLocation,
  });
}

export function trackVideoComplete(videoTitle: string, videoLocation: string) {
  trackEvent(GA_EVENTS.VIDEO_COMPLETE, {
    video_title: videoTitle,
    video_location: videoLocation,
  });
}

// Engagement Tracking
export function trackEngagedVisitor(timeOnSite: number, pagesViewed: number) {
  if (timeOnSite > 120 || pagesViewed > 2) { // 2+ minutes or 2+ pages
    trackConversion(CONVERSION_GOALS.ENGAGED_VISITOR, 0, {
      time_on_site: timeOnSite,
      pages_viewed: pagesViewed,
    });
  }
}

// Payment/Purchase Tracking
export function trackPurchase(
  transactionId: string,
  value: number,
  items: Array<{
    name: string;
    category: string;
    price: number;
    quantity: number;
  }>
) {
  trackEvent(GA_EVENTS.PAYMENT_COMPLETE, {
    transaction_id: transactionId,
    value,
    currency: 'USD',
    items,
  });
  
  // Determine the conversion type
  const category = items[0]?.category || 'unknown';
  if (category.includes('course')) {
    trackConversion(CONVERSION_GOALS.COURSE_PURCHASE, value, {
      transaction_id: transactionId,
    });
  } else {
    trackConversion(CONVERSION_GOALS.PRODUCT_PURCHASE, value, {
      transaction_id: transactionId,
    });
  }
}
