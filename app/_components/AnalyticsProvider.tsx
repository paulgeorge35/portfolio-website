'use client';

import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import CookieConsentBanner from './CookieConsentBanner';
import { UmamiAnalytics } from './UmamiAnalytics';

// Assuming the banner component is in the same directory

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export function AnalyticsProvider() {
  const [consentStatus, setConsentStatus] = useLocalStorage<'accepted' | 'declined' | null>(
    'cookie-consent-v1',
    null
  ); // Added versioning
  const hasMounted = useHasMounted();

  const handleAccept = () => setConsentStatus('accepted');
  const handleDecline = () => setConsentStatus('declined');

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {consentStatus === 'accepted' && (
        <>
          <Analytics />
          <UmamiAnalytics appId="832764d4-122f-4f5c-a816-0af42459d3b7" />
        </>
      )}
      {consentStatus === null && (
        <CookieConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}
