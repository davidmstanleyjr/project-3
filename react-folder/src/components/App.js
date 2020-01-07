import React, { Component } from "react";
import TableContainer from "./anime-table/tableContainer";

export default class App extends Component {

render() {
	return (
		<TableContainer/>
	)
	


	// 	state = {
// 		data: []
// 	};
// 	//finds the getallanime url in the Api.js file
// 	componentDidMount() {
// 		fetch("http://localhost:4000/getAllAnime").then(res => res.json()).then(json => {
// 			this.setState({ data: json });
// 		});
// 	}

// 	render() {
// 		console.log(this.state);

// 		return <Table data={this.state.data} />;
// 	}
// }
