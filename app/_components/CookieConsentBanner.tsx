"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type CookieConsentBannerProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export default function CookieConsentBanner({
  onAccept,
  onDecline,
}: CookieConsentBannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { y: 8, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
      className="fixed right-4 bottom-4 left-4 z-50 vertical gap-4 rounded-2xl border border-stone-700/60 bg-stone-900/95 p-4 shadow-[0_8px_30px_rgb(0_0_0/0.35)] backdrop-blur-sm md:right-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:transform"
    >
      <p className="text-xs text-pretty wrap-break-word hyphens-auto text-stone-50 sm:text-left md:max-w-100">
        This site uses tracking technologies. You may opt in or opt out of the
        use of these technologies.
      </p>
      <div className="horizontal shrink-0 center-v gap-2">
        <button
          type="button"
          onClick={onDecline}
          className="min-h-10 rounded-lg bg-stone-800/80 px-3 py-1.5 text-xs text-stone-50 shadow-[0_0_0_1px_rgb(120_113_108/0.35)] transition-[color,background-color,transform] duration-150 ease-out hover:bg-stone-700 active:scale-[0.96]"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="min-h-10 rounded-lg bg-stone-100 px-3 py-1.5 text-xs text-stone-900 transition-[color,background-color,transform] duration-150 ease-out hover:bg-white active:scale-[0.96]"
        >
          Accept
        </button>
        <Link
          href="/privacy"
          className="ml-auto inline-flex min-h-10 items-center px-1 text-xs text-stone-400 underline underline-offset-2 transition-[color,transform] duration-150 ease-out hover:text-white active:scale-[0.96]"
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
