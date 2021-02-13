import React from 'react'
import Fade from 'react-reveal/Fade'
import {AiOutlineGlobal} from 'react-icons/ai'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {SiInstagram} from "react-icons/si"
import {VscGithub} from "react-icons/vsc"
import "./botonera.css";

function Botonera(props) {
    const {data}=props;

   
    return (
        <div className="Button-Component">
            {data?.links ?
            <>
                <Fade bottom duration={1000} delay={500} distance="30px">
                <ul>
                {Object.keys(data.links).map((e)=>{
                if(e==="Web"){
                return <li key={e}><a href={data.links[e]} className="boton1"><button><AiOutlineGlobal size="1.5rem"/>       {e}</button></a></li>
                }if(e==="Facebook"){
                return <li key={e}><a href={data.links[e]} className="boton1"><button><RiFacebookCircleLine size="1.7rem"/>       {e}</button></a></li>
                }if(e==="Instagram"){
                return <li key={e}><a href={data.links[e]} className="boton1"><button><SiInstagram size="1.5rem"/>       {e}</button></a></li>
                }if(e==="Github"){
                    return <li key={e}><a href={data.links[e]} className="boton1"><button><VscGithub size="1.5rem"/>       {e}</button></a></li>
                }
                })}
                </ul>
                </Fade>
            </>
            : ""}
        </div>
    )
}

export default Botonera;
