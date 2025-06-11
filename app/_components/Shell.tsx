type ShellProps = {
  children: React.ReactNode;
};

export default function Shell({ children }: ShellProps) {
  return (
    <div className="vertical min-h-[100dvh] w-full max-w-4xl gap-8 p-8 md:min-h-0">{children}</div>
  );
}
