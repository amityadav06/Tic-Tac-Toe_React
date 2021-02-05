import React from "react";
import "./gridRow.css";
import GridItem from "../GridItem";

class GridRow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //console.log("My Index is:", this.props.row)
        let gridRow=[<GridItem />,<GridItem />,<GridItem />];
        return <div className="grid-row"> 
        {this.props.row.map((col,colIndex) =>( 
                <GridItem 
                    handlePlayerClick={this.props.handlePlayerClick}
                    rowIndex={this.props.rowIndex}
                    colIndex ={colIndex}
                    colText = {col} 
                />
            ))} 
        </div>
    }
}

export default GridRow;