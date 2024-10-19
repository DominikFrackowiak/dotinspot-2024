import type { Metadata } from 'next'

import './globals.css'

import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
	title:
		'Marcin Chylinski | A freelance Motion Designer & Illustrator based in Madrid, Spain',
	description:
		'Marcin Chylinski - freelance Motion Designer & Illustrator based in Madrid, Spain. Explore creative solutions for your projects in illustration, motion graphics, and design.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='max-w-[375px] md:max-w-[768px] xl:max-w-[1200px] mx-auto'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
