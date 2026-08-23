"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { useSyncExternalStore } from "react";
import { useLocalStorage } from "usehooks-ts";

import CookieConsentBanner from "./CookieConsentBanner";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const useHasMounted = () =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

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
      {consentStatus === "accepted" && (
        <>
          <Analytics />
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
