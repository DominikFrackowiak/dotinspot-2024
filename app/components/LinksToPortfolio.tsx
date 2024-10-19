import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface LinksToPortfolioData {
	icon: string
	txt: string
	color: string
	url: string
}

interface Link {
	link: LinksToPortfolioData
}

const linksToPortfolioData: LinksToPortfolioData[] = [
	{
		icon: '/portfolio-icons/icon-graphic.svg',
		txt: 'Illustration & Graphic',
		color: 'red',
		url: 'https://www.behance.net/dotinspot',
	},
	{
		icon: '/portfolio-icons/icon-motion.svg',
		txt: 'Motion Graphic',
		color: 'turquoise',
		url: 'https://vimeo.com/dotinspot',
	},
]

function SingleLinkToPortfolio({ link }: Link) {
	const border = link.color === 'red' ? 'border-b-red' : 'border-b-turquoise'
	return (
		<a
			href={link.url}
			target='_blank'
			rel='noopener noreferrer'
			className={twMerge(
				'flex gap-[20px] items-center justify-center w-full md:w-[50%] pb-[12px] border-b-[7px] hover:border-b-blue transition-all duration-300',
				border
			)}
		>
			<Image
				src={link.icon}
				width={1649}
				height={1601}
				alt='icon'
				className='w-[38px]'
			/>
			<span className='text-2xl'>{link.txt}</span>
		</a>
	)
}

export default function LinksToPortfolio() {
	return (
		<div className='flex flex-col md:flex-row items-center justify-start md:justify-between w-full max-w-[355px] md:max-w-[728px] xl:max-w-[1040px] py-[20px] mx-auto gap-[20px]'>
			{linksToPortfolioData.map(link => (
				<SingleLinkToPortfolio key={link.txt} link={link} />
			))}
		</div>
	)
}
