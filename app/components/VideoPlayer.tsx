import Script from 'next/script'

export default function VideoPlayer() {
	return (
		<div className='w-full max-w-[1040px] mx-auto '>
			<div className='relative pt-[56.25%]'>
				<iframe
					src='https://player.vimeo.com/video/510626075?muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0'
					className='absolute top-0 left-0 w-full h-full'
					frameBorder='0'
					allow='autoplay; fullscreen; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
			<Script src='https://player.vimeo.com/api/player.js' />
		</div>
	)
}
