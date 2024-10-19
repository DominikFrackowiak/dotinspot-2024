import Image from 'next/image'

export default function Hello() {
	return (
		<section className='flex w-full max-w-[355px] md:max-w-[728px] xl:max-w-[1040px] mx-auto gap-[20px]'>
			<Image
				src='/doticon.jpg'
				alt='illustation'
				width={85}
				height={85}
				className='hidden md:block'
			/>
			<h1 className='flex flex-col justify-start gap-[5px]'>
				<span className='text-2xl'>Hello. I&apos;m Marcin</span>
				<span className='text-sm md:text-base xl:text-lg'>
					A freelance Motion Designer & Illustrator based in Madrid / Spain.
				</span>
				<span className='text-sm md:text-base xl:text-lg'>
					I'm curious to know your project and how we could design it in the
					most interesting way.
				</span>
			</h1>
		</section>
	)
}
