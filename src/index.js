import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import youtubeSearch from 'youtube-api-v3-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = "AIzaSyDIWN3LCcQHPEM_THR6nk6rSxUF5bj-2hw";

//Creamos el componente
class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			videos: [],
			currentVideo:null,
			term:''
		};
		this.videoSearch('david guetta');
	}

	videoSearch(term){
		youtubeSearch(API_KEY,{q:term,type:'video'},(error, data) => {
			this.setState({term, videos : data.items,currentVideo:data.items[0]});
		});
	}

	render(){
		return (
			<div>
				<SearchBar onSearch={(searchTerm) => {this.videoSearch(searchTerm)}}/>
				<div className="container-fluid">
					<div className="row">
						<div>
							<VideoDetail video={this.state.currentVideo}/>
						</div>
						<div>
							<VideoList onVideoSelect={(currentVideo) => {this.setState({currentVideo})}}
								videos={this.state.videos}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
//Mostramos el componente en el DOM
ReactDOM.render(<App />, document.querySelector(".container"));
