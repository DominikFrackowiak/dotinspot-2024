import Link from "next/link"
import Image from "next/image"
import SocialNav from "./SocialNav"
import EmailLink from "./EmailLink"

export default function Header() {
  return (
		<header className='flex justify-between items-center max-w-[355px] md:max-w-[728px] xl:max-w-[1040px] mx-auto '>
			<Link href='/'>
				<Image
					src='/LOGO.svg'
					alt='logo'
					width={300}
					height={300}
					className='h-[96px] w-[96px]'
				/>
			</Link>
			<div className='flex flex-col justify-end items-end gap-1 md:gap-10 md:flex-row'>
				<span className='font-normal text-red text-sm md:text-base'>
					Hello! You are in the right spot :)
				</span>
				<SocialNav navClasses='hidden md:flex' />
				<EmailLink />
			</div>
		</header>
	)
}
