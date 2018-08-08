import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = "AIzaSyDIWN3LCcQHPEM_THR6nk6rSxUF5bj-2hw";

//Creamos el componente
const App =  () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}
//Mostramos el componente en el DOM
ReactDOM.render(<App />, document.querySelector(".container"));


