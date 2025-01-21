'use client';

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: string;
}) {
  const encodedSrc = encodeURIComponent(src);
  console.log(src, width, quality);
  return `https://image.paulgeorge.dev/${encodedSrc}?w=${width}&q=${quality || 75}`;
}
