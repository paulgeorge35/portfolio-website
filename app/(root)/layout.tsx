import { Footer, Navigation, Shell } from "@/app/_components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Shell>
            <Navigation />
            {children}
            <Footer />
        </Shell>
    )
}