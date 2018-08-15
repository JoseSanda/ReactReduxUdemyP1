import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList =  (props) => {
	return (
		<ul className="list-unstyled">
			{
				props.videos.map((video)=>{
					return(
						<VideoListItem
							key={video.id.videoId}
							onVideoSelect={props.onVideoSelect}
							video={video}/>
					);
				})
			}
		</ul>
	);
};

export default VideoList;
