import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid/dist/styles/ag-theme-balham-dark.css';

class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //todo add column defs api call
            columnDefs: [
                {
                    headerName: "Pair",
                    field: "symbol"
                },
                {
                    headerName: "Current Price",
                    field: "price"
                },
                {
                    headerName: "Bought Price",
                    field: "bought_price"
                },
                {
                    headerName: "Percent Change",
                    field: "percent_change"
                },
                {
                    headerName: "24H Change",
                    field: "change24"
                },
                {
                    headerName: "DCA Level",
                    field: "DCA_level"
                },
                {
                    headerName: "Volume",
                    field: "volume"
                },
                {
                    headerName: "MFI 24H",
                    field: "MFI_24"
                },
            ],
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

    componentDidMount() {
              fetch('https://gist.githubusercontent.com/K-Kit/d3fe07c5430c76b92a8585fc11baf49f/raw/3af793758a3ed6f6260e0e0017c74b6a0078499f/apx.json')
                  .then(result => result.json())
                  .then(rowData => this.setState({rowData}))
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
