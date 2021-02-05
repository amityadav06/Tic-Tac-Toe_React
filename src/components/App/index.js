import React from "react";
import './App.css';
import GridRow from '../GridRow';
import Header from "../Header";
import Footer from "../Footer";

const operateNumber = (num) =>{
  return num*num;
};

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      gameState:[
        ["","",""],
        ["","",""],
        ["","",""]
      ],
      playerTurn: "X",
    };
  }
  
  handlePlayerClick = (rowIndex, colIndex)=>{
    const copiedGameState = [...this.state.gameState];
    copiedGameState[rowIndex][colIndex] = this.state.playerTurn;
    this.setState({
      gameState:copiedGameState,
      playerTurn: this.state.playerTurn ==="X" ? "0" : "X",
    });
  }

  render(){
    return (
      <div className="container">
          <Header />
          <div id="board">
            {this.state.gameState.map((row,rowIndex) =>(
              <GridRow 
                row={row}
                rowIndex={rowIndex}
                handlePlayerClick={this.handlePlayerClick}
              />
            ))}
             {/*  <GridRow />
              <GridRow />
              <GridRow /> */}
          </div>
          <Footer
           turn={this.state.playerTurn}
          />
      </div>
    );
  }
}

export default App;

/* 

// your JS here

/*write your css*/
/* .grid{
  display: grid;
  grid-template-columns: auto auto auto; */
  /* background-color: #2196F3; */
 /*  padding: 10px; */
/* }
.cells{
  background-color: rgba(255, 255, 255, 0.986);
border: 1px solid rgba(0, 0, 0, 0.8);
padding: 20px;
font-size: 30px;
text-align: center;
} */




/* 

<!-- write your HTML here-->
<html>
    <body>
        <div>input block id:
            <br>
        <input id="block_id" type="text" value="">
        <br>
        input colour:
        <br>
        <input id="colour_id" type = "text" value="">
        <br>
        <button id="change_button" onclick="changeBg()">change background color</button>
        <button id="reset_button" onclick="resetBg()">reset background color</button>
        <div class="grid">
        <div id="1" value="1" class="cells"></div>
        <div id="2" value="2" class="cells"></div>
        <div id="3" value="3" class="cells"></div>
        <div id="4" value="4" class="cells"></div>
        <div id="5" value="5" class="cells"></div>
        <div id="6" value="6" class="cells"></div>
        <div id="7" value="7" class="cells"></div>
        <div id="8" value="8" class="cells"></div>
        <div id="9" value="9" class="cells"></div>
        </div>

        </div>
    </body>
</html>


 */

/* 
var headOfCells = document.getElementsByClassName("grid");
var allCells = document.getElementsByClassName("cells");
var inputId = document.getElementById("block_id");
var inputColor = document.getElementById("colour_id");
function changeBg(){
    var cell = document.getElementById(inputId.value);

    for(var i=1; i<=9; i++){
        
            allCells[i-1].style.backgroundColor= 'rgba(255, 255, 255, 0.986)';
    }
     cell.style.backgroundColor = inputColor.value;
}

function resetBg(){
     for(var i=1; i<=9; i++){
        
            allCells[i-1].style.backgroundColor= 'rgba(255, 255, 255, 0.986)';
    }

} */ 