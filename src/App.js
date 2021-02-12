import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Botonera from "./components/web/botonera/index";
import Fade from 'react-reveal/Fade'
import {getUserAPI} from "./api/users";

 function App() {
  //EN ESTA CONSTANTE GUARDO LOS DATOS QUE RECIBO DEL API
  const [data,setData]= useState(null);
  //utilizo el useEffect para actualizar datos
  useEffect(() => {
    (async()=>{
      //le paso el id de user a la api
      const json= await getUserAPI("6004940f8812576fb0a3508d");
      setData(json);
    })();
  }, [])

  //le paso los datos que guarden en data a la botonera, 
  
  return (
    <div className="App">
      <Helmet>
      <title>GNUno-BOTONERA</title>
      <meta name='description' content='Botonera para GNUno con todos sus enlaces' data-react-helmet='true' />
      </Helmet>
        <header className="App-header">
          <Fade bottom duration={1000} delay={500} distance="30px">
          <div className="div-header" id="id-div">
          
            <p>Bienvenidos a: </p>
            <Fade bottom duration={1000} delay={500} distance="30px">
            <h1>{data?.name}</h1>
            </Fade>
          </div>
          </Fade>
        </header>
        <Fade bottom duration={1000} delay={500} distance="30px">
        <Botonera data={data}/>
        </Fade>
    </div>
  );
}

export default App;
