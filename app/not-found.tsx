import NavigationItem from "./_components/NavigationItom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] p-8 gap-4">
      <h1 className="text-4xl font-bold">404 - Page not found</h1>
      <p className="text-lg text-muted-foreground">I'm sorry, but the page you're looking for doesn't exist.</p>
      <NavigationItem href="/">
        Back to homepage
      </NavigationItem>
    </div>
  );
} 