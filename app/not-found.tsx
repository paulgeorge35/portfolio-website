import NavigationItem from "./_components/NavigationItom";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <p className="text-lg text-muted-foreground">
        I&apos;m sorry, but the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <NavigationItem href="/">Back to homepage</NavigationItem>
    </div>
  );
}
