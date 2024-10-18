import LinkToPortfolio from "./components/LinksToPortfolio";
import VideoAndAsidesSection from "./components/VideoAndAsidesSection";


export default function Home() {
  return (
		<main>
			<VideoAndAsidesSection />
			<div className='flex justify-between max-w-[1040px] py-[20px] mx-auto'>
				<LinkToPortfolio
					txt='Illustration & Graphic'
					icon='/portfolio-icons/icon-graphic.svg'
					color='red'
				/>
				<LinkToPortfolio
					txt='Motion Graphic'
					icon='/portfolio-icons/icon-motion.svg'
					color='turquoise'
				/>
			</div>
		</main>
	)
}
