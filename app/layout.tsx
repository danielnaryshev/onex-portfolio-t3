import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from "./components/GoogleAnalytics";
import NextTopLoader from 'nextjs-toploader';



export const metadata: Metadata = {
	metadataBase: new URL('https://onex.zip'),
	title: {
		default: "ONEX RECORDS",
		template: "%s | ONEX RECORDS",
	},
	description: "Text",
	openGraph: {
		title: "ONEX RECORDS",
		description:
			"ONEX Records",
		
		siteName: "ONEX RECORDS",
		images: [
			{
				url: "/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
				{/* <GoogleAnalytics /> */}
							
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<NextTopLoader color="#D946EF" />
				{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics ga_id= 
					{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				) : null}
				{children}
			</body>
		</html>
	);
}
