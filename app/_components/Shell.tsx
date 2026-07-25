type ShellProps = {
  children: React.ReactNode;
};

export default function Shell({ children }: ShellProps) {
  return (
    <div className="vertical min-h-dvh w-full max-w-4xl gap-10 px-6 py-10 sm:px-8 sm:py-12 md:min-h-0 md:gap-12">
      {children}
    </div>
  );
}
