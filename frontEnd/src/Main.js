import React from "react";
import $ from "jquery"
import tactics from "./images/tacticsTime.jpg"
import bobbyficher from "./images/bobbyficher.jpeg"
import chessForKids from "./images/chessForKids.jpg"
import chessTournament from "./images/chessTournament.jpeg"
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            result: 0,
        }

    }
    
    
    render(){
        return (
            
            <main>
            <div id ="anotherDiv">
            <div id = "containerCards">
            <div class="card">
            <img src={tactics} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>Tactics Time</b></h4>
            <button onClick={()=>this.setState({ result: this.state.result + 9 })}>9 dollars</button>
            {console.log(this.state.result)}
            </div>
            </div>
            <div class="card">
            <img src={bobbyficher} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>bobby ficher teacher chess</b></h4>
            <button onClick={()=>{this.setState({ result: this.state.result + 19 })}}>19 dollars</button>
            
            </div>
            </div>
            <div class="card">
            <img src={chessForKids} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>Chess for kids</b></h4>
            <button onClick={()=>this.setState({ result: this.state.result + 23})}>23 dollars</button>
            
            </div>
            </div>
            <div class="card">
            <img src={chessTournament} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>zurich international chess tournament 1953</b></h4>
            <button onClick={()=>{this.setState({ result: this.state.result + 1999 })}}>1999 dollars</button>
            </div>
            </div>
            </div>
            <div id= "bill">
                <h2>your bill sir :</h2> 
                <div id = "resultContainer"><h3>Your sum :! </h3><h5>{this.state.result}</h5><button id = "buy">buy</button></div>
                
            </div>
            </div>
            </main>
        )
    }
}
export default Main;