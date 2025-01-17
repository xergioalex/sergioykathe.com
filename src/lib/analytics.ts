declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posthog: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mixpanel: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any;
  }
}

const isPostHogAvailable = () => {
  return typeof window !== 'undefined' && window.posthog && import.meta.env.PUBLIC_POSTHOG_KEY;
};

const isMixpanelAvailable = () => {
  return typeof window !== 'undefined' && window.mixpanel && import.meta.env.PUBLIC_MIXPANEL_TOKEN;
};

const isGtagAvailable = () => {
  return typeof window !== 'undefined' && window.gtag && import.meta.env.PUBLIC_GA_TRACKING_ID;
};

export const analytics = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  capture: (eventName: string, properties?: Record<string, any>) => {
    if (isPostHogAvailable()) {
      window.posthog.capture(eventName, properties);
    }
    if (isMixpanelAvailable()) {
      window.mixpanel.track(eventName, properties);
    }
    if (isGtagAvailable()) {
      window.gtag('event', eventName, properties);
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  identify: (distinctId: string, properties?: Record<string, any>) => {
    if (isPostHogAvailable()) {
      window.posthog.identify(distinctId, properties);
    }
    if (isMixpanelAvailable()) {
      window.mixpanel.identify(distinctId);
      if (properties) {
        window.mixpanel.people.set(properties);
      }
    }
  },

  reset: () => {
    if (isPostHogAvailable()) {
      window.posthog.reset();
    }
    if (isMixpanelAvailable()) {
      window.mixpanel.reset();
    }
  },

  trackPageView: (url?: string) => {
    const pageUrl = url || window.location.href;

    if (isPostHogAvailable()) {
      window.posthog.capture('$pageview', {
        url: pageUrl,
        path: window.location.pathname,
      });
    }
    if (isMixpanelAvailable()) {
      window.mixpanel.track('pageview', {
        url: pageUrl,
        path: window.location.pathname,
      });
    }
    if (isGtagAvailable()) {
      window.gtag('event', 'page_view', {
        page_location: pageUrl,
        page_path: window.location.pathname,
      });
    }
  },
};
