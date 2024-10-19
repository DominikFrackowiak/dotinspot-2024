import { twMerge } from 'tailwind-merge'

interface Props {
	txt: string
	direction: 'left' | 'right'
}

export default function AsideText({ txt, direction }: Props) {
	const divClasses = twMerge(
		'relative top-0 bottom-0 w-[20px] hidden md:flex items-center justify-center mx-auto',
		direction === 'left' ? 'left-0' : 'right-0'
	)

	const pClasses = twMerge(
		'whitespace-nowrap text-red text-xs font-normal',
		'transform origin-center',
		direction === 'left' ? 'rotate-90' : '-rotate-90'
	)

	return (
		<div className={divClasses}>
			<p className={pClasses}>{txt}</p>
		</div>
	)
}
