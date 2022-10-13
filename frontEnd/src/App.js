import React, { useState,useEffect} from 'react';
import axios from 'axios';
const App = ()=> {
const [data,setData] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:3000/')
  .then((response)=>{setData(response.data)})
  .catch(err=>console.log(err))
},[])

  return (
    <div className="App">
      {console.log(data)}
      hello
    </div>
  )
}


export default App;
