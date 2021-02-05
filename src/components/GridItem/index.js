import React from "react";
import { render } from "react-dom";
import "./GridItem.css";

class GridItem extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
        <div className="grid-item" onClick={()=> {
            this.props.handlePlayerClick(this.props.rowIndex, this.props.colIndex)
        }}>
            {this.props.colText}
        </div>
        );
    }
}

export default GridItem;