import Hello from "./components/Hello";
import LinksToPortfolio from "./components/LinksToPortfolio";
import LinkToPortfolio from "./components/LinksToPortfolio";
import SocialNav from "./components/SocialNav";
import VideoAndAsidesSection from "./components/VideoAndAsidesSection";


export default function Home() {
  return (
		<main className="flex flex-col gap-[20px]">
			<VideoAndAsidesSection />
			<LinksToPortfolio/>
			<SocialNav
				iconClasses='w-9 h-9'
				ulClasses='flex md:hidden w-[355px] items-center justify-around'
				navClasses='max-w-[355px] md:max-w-[728px] xl:max-w-[1040px] mx-auto'
			/>
			<Hello/>
		</main>
	)
}
