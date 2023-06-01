// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  var [list, setlist] = useState([])

  useEffect(()=>{

     axios.get('https://android-kotlin-fun-mars-server.appspot.com/amphibians')
  .then(function (response) {
    // handle success
    setlist(response.data)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])
 
  return (
    <div className="App" >

      {
      list.map((data)=>{
      return <div >
       <div class="img"><img  src={data?.img_src}/></div>
         
        <p >{data?.name}</p>
        <p id="desc">{data?.description}</p>
        <h1>{data?.type}</h1>
        </div>
      })
      }
    </div>
  );
}

export default App;
