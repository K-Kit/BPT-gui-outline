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
                    headerName: "symbol",
                    field: "symbol"
                },
                {
                    headerName: "price",
                    field: "price"
                },
                {
                    headerName: "bought_price",
                    field: "bought_price"
                },
                {
                    headerName: "percent_change",
                    field: "percent_change"
                },
                {
                    headerName: "volume",
                    field: "volume"
                },
                {
                    headerName: "change24",
                    field: "change24"
                },
                {
                    headerName: "DCA_level",
                    field: "DCA_level"
                },
                {
                    headerName: "MFI_24",
                    field: "MFI_24"
                }
            ],
            rowData: [
                {
                    id: "aa",
                    make: "Toyota",
                    model: "Celica",
                    price: 35000
                },
                {
                    id: "bb",
                    make: "Ford",
                    model: "Mondeo",
                    price: 32000
                },
                {
                    id: "cc",
                    make: "Porsche",
                    model: "Boxter",
                    price: 72000
                },
                {
                    id: "dd",
                    make: "BMW",
                    model: "5 Series",
                    price: 59000
                },
                {
                    id: "ee",
                    make: "Dodge",
                    model: "Challanger",
                    price: 35000
                },
                {
                    id: "ff",
                    make: "Mazda",
                    model: "MX5",
                    price: 28000
                },
                {
                    id: "gg",
                    make: "Horse",
                    model: "Outside",
                    price: 99000
                }
            ],
            defaultColDef: { editable: false },
            getRowNodeId: function(data) {
                return data.id;
            }
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    updateSort() {
        this.gridApi.refreshClientSideRowModel("sort");
    }
    updateFilter() {
        this.gridApi.refreshClientSideRowModel("filter");
    }
    setPriceOnToyota() {
        var rowNode = this.gridApi.getRowNode("aa");
        var newPrice = Math.floor(Math.random() * 100000);
        rowNode.setDataValue("price", newPrice);
    }
    setDataOnFord() {
        var rowNode = this.gridApi.getRowNode("bb");
        var newPrice = Math.floor(Math.random() * 100000);
        var newModel = "T-" + Math.floor(Math.random() * 1000);
        var newData = {
            id: "bb",
            make: "Ford",
            model: newModel,
            price: newPrice
        };
        rowNode.setData(newData);
    }
    componentDidMount() {
              fetch('https://gist.githubusercontent.com/K-Kit/d3fe07c5430c76b92a8585fc11baf49f/raw/3af793758a3ed6f6260e0e0017c74b6a0078499f/apx.json')
                  .then(result => result.json())
                  .then(rowData => this.setState({rowData}))
            }
    render() {
        return (
            <div style={{ width: "auto", height: "900px" }}>
                <div style={{ height: "100%", boxSizing: "border-box" }}>
                    <div
                        id="myGrid"
                        style={{
                            boxSizing: "border-box",
                            height: "100%",
                            width: "100%"
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