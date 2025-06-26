import Script from 'next/script';

/**
 * Props for the UmamiAnalytics component
 */
interface UmamiAnalyticsProps {
  /**
   * The Umami website/app ID. If not provided, will fall back to NEXT_PUBLIC_UMAMI_APP_ID environment variable
   */
  appId?: string;
}

/**
 * UmamiAnalytics component for integrating Umami web analytics into a Next.js application.
 *
 * This component conditionally renders the Umami analytics script based on environment and configuration.
 * In development mode, it logs debug information but doesn't render the script to avoid sending
 * development data to the analytics server.
 *
 * @param props - The component props
 * @param props.appId - Optional Umami website ID. Falls back to NEXT_PUBLIC_UMAMI_APP_ID env var
 *
 * @returns JSX.Element | null - The analytics script component or null if conditions aren't met
 *
 * @example
 * ```tsx
 * // Using environment variable
 * <UmamiAnalytics />
 *
 * // Using explicit app ID
 * <UmamiAnalytics appId="your-umami-app-id" />
 * ```
 */
export function UmamiAnalytics({ appId }: UmamiAnalyticsProps) {
  const UMAMI_APP_ID = appId ?? process.env.NEXT_PUBLIC_UMAMI_APP_ID;
  const NODE_ENV = process.env.NODE_ENV;

  if (!UMAMI_APP_ID) {
    return null;
  }

  if (NODE_ENV === 'development') {
    console.log(
      `[Umami Web Analytics] App ID: ${UMAMI_APP_ID}`,
      '\nDebug mode is enabled by default in development. No requests will be sent to the server.'
    );
    return null;
  }

  return (
    <Script
      defer
      src="https://umami.paulgeorge.dev/script.js"
      data-website-id={UMAMI_APP_ID}
      strategy="afterInteractive"
    />
  );
}
