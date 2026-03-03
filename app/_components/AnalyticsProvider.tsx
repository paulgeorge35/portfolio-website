"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { OpenPanelComponent } from "@openpanel/nextjs";
import CookieConsentBanner from "./CookieConsentBanner";
import { UmamiAnalytics } from "./UmamiAnalytics";

// Assuming the banner component is in the same directory

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export function AnalyticsProvider() {
  const [consentStatus, setConsentStatus] = useLocalStorage<
    "accepted" | "declined" | null
  >("cookie-consent-v1", null); // Added versioning
  const hasMounted = useHasMounted();

  const handleAccept = () => setConsentStatus("accepted");
  const handleDecline = () => setConsentStatus("declined");

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {consentStatus === "accepted" && (
        <>
          {!!process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID &&
            !!process.env.NEXT_PUBLIC_OPENPANEL_API_URL && (
              <OpenPanelComponent
                clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID}
                apiUrl={process.env.NEXT_PUBLIC_OPENPANEL_API_URL}
                trackScreenViews={true}
                trackAttributes={true}
                trackHashChanges={true}
                trackOutgoingLinks={true}
              />
            )}
          <Analytics />
          <UmamiAnalytics appId={process.env.NEXT_PUBLIC_UMAMI_APP_ID} />
        </>
      )}
      {consentStatus === null && (
        <CookieConsentBanner
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
    </>
  );
}
