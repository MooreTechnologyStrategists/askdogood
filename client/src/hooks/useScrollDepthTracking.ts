import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';
import { GA_EVENTS } from '@/config/analytics';

/**
 * Hook to track scroll depth on a page
 * Tracks at 25%, 50%, 75%, and 100% scroll depth
 */
export function useScrollDepthTracking(pageName: string) {
  const trackedDepths = useRef(new Set<number>());
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Track milestones
      const milestones = [
        { depth: 25, event: GA_EVENTS.SCROLL_DEPTH_25 },
        { depth: 50, event: GA_EVENTS.SCROLL_DEPTH_50 },
        { depth: 75, event: GA_EVENTS.SCROLL_DEPTH_75 },
        { depth: 100, event: GA_EVENTS.SCROLL_DEPTH_100 },
      ];

      milestones.forEach(({ depth, event }) => {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackEvent(event, {
            page_name: pageName,
            scroll_depth: depth,
            time_to_depth: Math.round((Date.now() - startTime.current) / 1000),
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track time on page when unmounting
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      if (timeOnPage > 10) { // Only track if user spent more than 10 seconds
        trackEvent(GA_EVENTS.TIME_ON_PAGE, {
          page_name: pageName,
          time_seconds: timeOnPage,
        });
      }
    };
  }, [pageName]);
}
