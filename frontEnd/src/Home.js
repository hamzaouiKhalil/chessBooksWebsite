import React from "react";
import $ from "jquery"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.showMain = this.showMain.bind(this)
    }
  showMain (){
    $("main").empty()
    $("main").append(`    <div class="card"> <img src="/static/media/tacticsTime.a2a58e76.jpg" alt="Avatar" class = "cards" ></img> <div class="container"> <h4><b>Tactics Time</b></h4> <button>10 dollars</button></div> </div> <div class="card"><img src="/static/media/bobbyficher.1d8fabfc.jpeg" alt="Avatar" class = "cards" ></img><div class="container"><h4><b>bobby ficher teacher chess</b></h4><button>15 dollars</button> </div> </div><div class="card"><img src="/static/media/chessForKids.539c23dd.jpg" alt="Avatar" class = "cards" ></img><div class="container"><h4><b>Chess for kids</b></h4><button>20 dollars</button></div></div><div class="card"><img src="/static/media/chessTournament.32976ecc.jpeg" alt="Avatar" class = "cards" ></img><div class="container"><h4><b>Chess for kids</b></h4><button>20 dollars</button></div></div>`)
  }

    render(){
        return (
            
            <button onClick={this.showMain}>home</button>
        )
    }
}


export default Home;