import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid/dist/styles/ag-theme-balham-dark.css';

class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //todo add column defs api call
            columnDefs: [],
            rowData: [],
            defaultColDef: { editable: false },
            getRowNodeId: function(data) {
                return data.id;
            }
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.api.sizeColumnsToFit();
    }

    updateSort() {
        this.gridApi.refreshClientSideRowModel("sort");
    }
    updateFilter() {
        this.gridApi.refreshClientSideRowModel("filter");
    }
    update(){
        fetch(window.location.href +this.props.url)
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }
    componentDidMount() {
        fetch(window.location.href +this.props.url +'_cols')
            .then(result => result.json())
            .then(columnDefs => this.setState({columnDefs}))
        fetch(window.location.href +this.props.url)
          .then(result => result.json())
          .then(rowData => this.setState({rowData}))
        this.interval = setInterval(() => this.update(), 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div style={{width: "auto", height: "900px" }}>
                <div style={{ height: "100%", boxSizing: "border-box" }}>
                    <div
                        id="myGrid"
                        style={{
                            boxSizing: "border-box",
                            height: "100%",
                            width: "100%",
                        }}
                        className="ag-theme-balham-dark"
                    >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}
                            defaultColDef={this.state.defaultColDef}
                            enableSorting={true}
                            enableFilter={true}
                            animateRows={true}
                            getRowNodeId={this.state.getRowNodeId}
                            onGridReady={this.onGridReady.bind(this)}
                        />
                    </div>
                </div>


            </div>
        );
    }
}

export default GridExample
