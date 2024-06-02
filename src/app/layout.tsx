import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SmoothCV: AI-Powered Resume Builder for Professional CVs",
    description:
        "SmoothCV is an AI-powered tool that helps you easily create professional resumes and CVs. Get AI suggestions for rich wording and expert tips to make your resume stand out.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cupcake" className="!scroll-smooth">
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
