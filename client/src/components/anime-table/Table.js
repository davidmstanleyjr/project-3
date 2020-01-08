import React from "react";
import useTable from "react-table";
// import "react-table/react-table.css";

//for the table columns
const Table = ({ data }) => {
	if (!data || !data[0]) {
		return null;
	}
	const columns = Object.keys(data[0]).map(key => {
		return { Header: key, accessor: key };
	});

	// const firstRow = data[0];
	// const columns = [];

	// for (let key in firstRow) {
	// 	columns.push({ Header: key, accessor: key });
	// }

	return <useTable className="striped -highlight" data={data} columns={columns} defaultPageSize={100} />;
};

export default Table;
