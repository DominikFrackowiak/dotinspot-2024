import React from 'react'
import VideoPlayer from './VideoPlayer'
import AsideText from './AsideText'

export default function VideoAndAsidesSection() {
  return (
		<div className='flex justify-between w-[1200px]'>
			<AsideText
				txt='If you want to see more of my work please check it below > > >'
				direction='left'
			/>
			
			<VideoPlayer />
			<AsideText
				txt='< < < If you want to see more of my work please check it below'
				direction='right'
			/>
			
		</div>
	)
}
