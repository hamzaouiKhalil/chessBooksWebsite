import React, { useState,useEffect} from 'react';
import axios from 'axios';
import logoo from "./images/logoo.png"
import Header  from './Header';
import Main from './Main';
import Footer from './Footer';

const App = ()=> {
const [data,setData] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:3000/users/getall')
  .then((response)=>{setData(response.data)})
  .catch(err=>console.log(err))
},[])

  return (
    
    <div className="App">
      <img id = "logo" src={logoo}></img>
      <Header/>
      <Main/>
      {console.log(data)}
      <Footer/>
      
    </div>
  )
}


export default App;
