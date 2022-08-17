import React,{useState} from 'react'
import './StyleB2.css';
import ComponentC from './componentC'
import ComponentF from './componentF'
 

const Apps = () => {
        const [show,setShow]=useState(false);
        
        let button1=()=>{
          setShow(!show);
        }
      
        const [show2,setShow2]=useState(false);
        let button2=()=>{
          setShow2(!show2);
        }
        
   return (
     <div>

       <div className="Apps">
        <button onClick={()=>{button1();}} className='ButtonF'>To See Style In Function Component</button>

        <button onClick={()=>{button2();}} className='ButtonC'>To See Style In Class Component</button>
        {show && <ComponentF/>}
        {show2 && <ComponentC/>}

      </div>
 
     </div>
   )
 }
 
 export default Apps
 