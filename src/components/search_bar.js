
import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {term: props.term};

		this.handleChange = this.handleChange.bind(this);
	}

	render(){
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={(event) => this.handleChange(event.target.value)}/>
			</div>
		);
	}

	handleChange(term){
			this.setState({term});
			this.props.onSearch(term);
	}
}

export default SearchBar;
