type ShellProps = {
    children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
    return (
        <div className="vertical gap-8 min-h-[100dvh] max-w-4xl w-full p-8 md:min-h-0">
            {children}
        </div>
    )
}