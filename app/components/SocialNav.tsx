import Image from 'next/image'
import { twMerge } from 'tw-merge'

interface socialDataElement {
	url: string
	iconRed: string
	iconBlue: string
}

interface Props {
	className?: string
}

const socialNavData: socialDataElement[] = [
	{
		url: 'https://www.instagram.com/dotinspot/',
		iconRed: '/social-icons/insta-icon-red.svg',
		iconBlue: '/social-icons/insta-icon-blue.svg',
	},
	{
		url: 'https://vimeo.com/dotinspot',
		iconRed: '/social-icons/vimeo-icon-red.svg',
		iconBlue: '/social-icons/vimeo-icon-blue.svg',
	},
	{
		url: 'https://www.behance.net/dotinspot',
		iconRed: '/social-icons/beh-icon-red.svg',
		iconBlue: '/social-icons/beh-icon-blue.svg',
	},
]

export default function SocialNav({ className = '' }: Props) {
	return (
		<nav className={twMerge(className)}>
			<ul className='flex gap-4'>
				{socialNavData.map(social => (
					<li key={social.url}>
						<a href={social.url} className='relative block w-6 h-6 group'>
							<Image
								src={social.iconRed}
								height={300}
								width={300}
								alt='social media icon'
								className='absolute top-0 left-0 w-full transition-opacity duration-300 opacity-100 group-hover:opacity-110'
							/>
							<Image
								src={social.iconBlue}
								height={300}
								width={300}
								alt='social media icon'
								className='absolute top-0 left-0 w-full transition-opacity duration-300 opacity-100 group-hover:opacity-0'
							/>
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
