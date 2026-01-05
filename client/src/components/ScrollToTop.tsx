import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollToTop component - Automatically scrolls to top when route changes
 * This ensures all pages open at the very top
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top immediately when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
    });
  }, [location]);

  return null; // This component doesn't render anything
}
