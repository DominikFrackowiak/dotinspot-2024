import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface Props{
 icon: string
 txt: string
 color: string
}

export default function LinkToPortfolio({
 icon, txt, color
}: Props) {
 const border = color === 'red' ? 'border-b-red' : 'border-b-turquoise'
  return (
		<button
			className={twMerge(
				'flex gap-[20px] items-center justify-center w-2/5 pb-[12px] border-b-[7px] hover:border-b-blue',
				border,
    
			)}
		>
			<Image
				src={icon}
				width={1649}
				height={1601}
				alt='icon'
				className='w-[38px]'
			/>
			<span className='text-3xl'>{txt}</span>
		</button>
	)
}
