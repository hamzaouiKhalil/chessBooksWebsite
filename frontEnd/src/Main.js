import React from "react";
import tactics from "./images/tacticsTime.jpg"
import bobbyficher from "./images/bobbyficher.jpeg"
import chessForKids from "./images/chessForKids.jpg"
import chessTournament from "./images/chessTournament.jpeg"
class Main extends React.Component {


    render(){
        return (
            
            <main>
            <div class="card">
            <img src={tactics} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>Tactics Time</b></h4>
            <button>10 dollars</button>
            </div>
            </div>
            <div class="card">
            <img src={bobbyficher} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>bobby ficher teacher chess</b></h4>
            <button>15 dollars</button>
            
            </div>
            </div>
            <div class="card">
            <img src={chessForKids} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>Chess for kids</b></h4>
            <button>20 dollars</button>
            
            </div>
            </div>
            <div class="card">
            <img src={chessTournament} alt="Avatar" class = "cards" ></img>
            <div class="container">
            <h4><b>Chess for kids</b></h4>
            <button>20 dollars</button>
            
            </div>
            </div>
            </main>
        )
    }
}
export default Main;