import React from "react";
import Home from './Home'
import AboutUs from "./AboutUs";
import Login from "./Login";

class Header extends React.Component{



    render(){
        return(
            <header>
                <nav>
                    <Home/>
                    <AboutUs/>
                    <Login/>
                </nav>
            </header>
        )
    }
}

export default Header;