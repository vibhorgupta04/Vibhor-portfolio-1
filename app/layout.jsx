import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Vibhor | Portofolio",
	description:
		"My name is Vibhor, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	author: "Vibhor Gupta",
	applicationName: "Vibhors",
	keywords: [
		"vibhors",
		"vibhor",
		"vibhor gupta",
	],
	openGraph: {
		type: "website",
		title: "Vibhor | Portofolio",
		site_name: "Vibhor | Portofolio",
		description: "My name is Vibhor, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Vibhor Portofolio",
			},
		],
		site_name: "Vibhor | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
