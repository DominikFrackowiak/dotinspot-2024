import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Envelope {
	src: string
	alt: string
	text: string
	textColor: string
	hoverOpacity: string
	initialOpacity: string
}

const envelopes: Envelope[] = [
	{
		src: '/envelope-off.svg',
		alt: 'email icon off',
		text: 'hello@dotinspot.com',
		textColor: 'text-red',
		hoverOpacity: 'group-hover:opacity-110',
		initialOpacity: 'opacity-100',
	},
	{
		src: '/envelope-on.svg',
		alt: 'email icon on',
		text: 'hello@dotinspot.com',
		textColor: 'text-blue',
		hoverOpacity: 'group-hover:opacity-0',
		initialOpacity: 'opacity-100',
	},
]

export default function EmailLink() {
	return (
		<a
			href='mailto:hello@dotinspot.com'
			className='relative block h-6 group w-[180px]'
		>
			{envelopes.map((envelope, index) => (
				<span
					key={index}
					className={twMerge(
						`flex gap-3 absolute top-0 left-0 w-full transition-opacity duration-300 ${envelope.textColor} ${envelope.initialOpacity} ${envelope.hoverOpacity}`
					)}
				>
					<Image
						src={envelope.src}
						height={300}
						width={300}
						alt={envelope.alt}
						className='w-6 h-6'
					/>
					{envelope.text}
				</span>
			))}
		</a>
	)
}
