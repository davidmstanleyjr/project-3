import React, { Component } from "react";
import Table from "./anime-table/Table.js/index.js";

export default class App extends Component {
	state = {
		data: []
	};
	//finds the getallanime url in the Api.js file
	componentDidMount() {
		fetch("http://localhost:4000/getAllAnime").then(res => res.json()).then(json => {
			this.setState({ data: json });
		});
	}

	render() {
		console.log(this.state);

		return <Table data={this.state.data} />;
	}
}
