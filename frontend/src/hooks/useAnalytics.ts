// Google Analytics tracking hook for conversion events

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export interface PricingEventData {
  role: string;
  plan_name: string;
  billing_period: 'monthly' | 'annual';
  price?: number | string;
}

export interface ToggleEventData {
  role: string;
  from: 'monthly' | 'annual';
  to: 'monthly' | 'annual';
}

export function useAnalytics() {
  const isGtagAvailable = () => typeof window !== 'undefined' && window.gtag;

  // Track pricing plan CTA clicks
  const trackPlanClick = (data: PricingEventData) => {
    console.log('[Analytics] Plan click:', data);
    
    if (isGtagAvailable()) {
      window.gtag!('event', 'select_plan', {
        event_category: 'pricing',
        event_label: `${data.role}_${data.plan_name}`,
        role: data.role,
        plan_name: data.plan_name,
        billing_period: data.billing_period,
        price: data.price,
      });
    }

    // Also push to dataLayer for GTM compatibility
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'select_plan',
        ...data,
      });
    }
  };

  // Track billing toggle switches
  const trackBillingToggle = (data: ToggleEventData) => {
    console.log('[Analytics] Billing toggle:', data);
    
    if (isGtagAvailable()) {
      window.gtag!('event', 'toggle_billing', {
        event_category: 'pricing',
        event_label: `${data.role}_${data.to}`,
        role: data.role,
        from_period: data.from,
        to_period: data.to,
      });
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'toggle_billing',
        ...data,
      });
    }
  };

  // Track pricing section view
  const trackPricingView = (role: string) => {
    console.log('[Analytics] Pricing section view:', role);
    
    if (isGtagAvailable()) {
      window.gtag!('event', 'view_pricing', {
        event_category: 'pricing',
        event_label: role,
        role,
      });
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'view_pricing',
        role,
      });
    }
  };

  // Generic event tracking
  const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    console.log(`[Analytics] ${eventName}:`, params);
    
    if (isGtagAvailable()) {
      window.gtag!('event', eventName, params);
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  };

  return {
    trackPlanClick,
    trackBillingToggle,
    trackPricingView,
    trackEvent,
  };
}
