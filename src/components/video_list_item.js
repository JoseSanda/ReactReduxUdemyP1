import React from 'react';

const VideoListItem = (props) => {
	return (
		<li className="list-group-item video-item media" onClick={() => props.onVideoSelect(props.video)}>
			<img className="mr-3" src={props.video.snippet.thumbnails.default.url} />
			<div className="media-body">
      			<h5 className="mt-0 mb-1">
      				{props.video.snippet.channelTitle}
      			</h5>
      			{props.video.snippet.description}
			</div>
		</li>
	);
};

export default VideoListItem;
