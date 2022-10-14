import React from "react";
import $ from "jquery";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.login = this.login.bind(this)
    }
    
    login(){
        $("main").empty()
        $("main").html("</br><p>name : </p><input id ='input' type='text'></input></br><p>username: </p><input id ='inputUsername' type='text'></input></br><p>password: </p><input id ='inputPassword' type='text'></input></br><p>email: </p><input id ='inputEmail' type='text'></input></br><p>username: </p><input id ='inputBalance' type='text'></input></br><button id= 'join'>join</button>")

    }

    render(){
        return (
            
            <button onClick={this.login}>login</button>
        )
    }
}

export default Login;