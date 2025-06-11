import NavigationItem from './_components/NavigationItom';

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <p className="text-muted-foreground text-lg">
        I&apos;m sorry, but the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <NavigationItem href="/">Back to homepage</NavigationItem>
    </div>
  );
}
