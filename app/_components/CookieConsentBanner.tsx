'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type CookieConsentBannerProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export default function CookieConsentBanner({ onAccept, onDecline }: CookieConsentBannerProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5 }}
      className="vertical fixed right-4 bottom-4 left-4 z-50 gap-4 border border-stone-500 bg-stone-900/95 p-4 shadow-lg backdrop-blur-sm md:right-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:transform"
    >
      <p className="text-xs break-words hyphens-auto text-stone-50 sm:text-left md:max-w-[400px]">
        This site uses tracking technologies. You may opt in or opt out of the use of these
        technologies.
      </p>
      <div className="horizontal center-v flex-shrink-0 gap-2">
        <button
          onClick={onDecline}
          className="rounded-md border border-stone-500 px-3 py-1 text-xs text-stone-50 transition-colors hover:border-white hover:text-white"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="rounded-md border border-stone-500 px-3 py-1 text-xs text-stone-50 transition-colors hover:border-white hover:text-white"
        >
          Accept
        </button>
        <Link
          href="/privacy"
          className="ml-auto text-xs text-stone-400 underline transition-colors hover:text-white"
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
