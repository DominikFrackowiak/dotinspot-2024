import Image from "next/image"
import SocialNav from "./SocialNav"
import EmailLink from "./EmailLink"

export default function Header() {
  return (
		<header className="flex justify-between items-center max-w-[355px] md:max-w-[728px] xl:max-w-[1040px] mx-auto ">
			<Image
				src='/LOGO.svg'
				alt='logo'
				width={300}
				height={300}
				className='h-[96px] w-[96px]'
			/>
			<div className="flex flex-col items-end gap-1 md:gap-10 md:flex-row">
				<span className="font-bold text-red">Hello! You are in the right spot :)</span>
        <SocialNav className="hidden md:flex"/>
								<EmailLink/>
			</div>
		</header>
	)
}
