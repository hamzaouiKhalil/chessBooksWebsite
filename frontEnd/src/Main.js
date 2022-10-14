import React from "react";
import $ from "jquery"
import tactics from "./images/tacticsTime.jpg"
import bobbyficher from "./images/bobbyficher.jpeg"
import chessForKids from "./images/chessForKids.jpg"
import chessTournament from "./images/chessTournament.jpeg"
class Main extends React.Component {


     each(coll,func)  { 
        if (Array.isArray(coll)){
            for (var i =0;i<coll.length;i++){
            func(coll[i],i)
        }
        }
        else {
            for (var key in coll){
                func(coll[key],key)
            }
        }
    }
      reduce(array, f, start) { 
           var acc = start; 
           each(array, function(element) { 
                 acc = f(acc, element); 
           }); 
    
           return acc; 
     }
   sum(array){

        return reduce(array,function(result,e,i){
      return  result + e
        },0)
    
        }
    
        randomfunction(){ result = sum($(".prc"))
        $("#finished").click(function(){
            $("#secondSpan").append(`<p>${result}</p>`)
        })
        }
     sum2(){
        var result=0
        var k=$(".prc");
        for (var i =0;i<k.length;i++){
            result+=parseInt(k[i].innerHTML)
        }
        return result
    }
    function1 (){$("#finished").click(function(){
        $("#secondSpan").append(`<p id = "cost"> your Order cost : ${sum2()} dt </p>`)
    })
    $("#reset").click(function(){
        $(".p").remove()
        $("#cost").remove()
    })
}

    render(){
        return (
            
            <main>
            <div id = "containerCards">
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
            </div>
            <div id= "bill">
                <h2>your bill sir : </h2> 
            </div>

            </main>
        )
    }
}
export default Main;