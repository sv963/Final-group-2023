import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookiBanner";
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<GoogleAnalytics GA_MEASUREMENT_ID='G-EH7WHEXDLL'/>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Header />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							<CookieBanner/>
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600 customer-gradient">Powered by</span>
								<p className="text-primary">NextUI</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
