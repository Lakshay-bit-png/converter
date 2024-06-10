import React, { useState } from 'react'
import index from './index.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [crossenable, setCrossEnable] = useState(false)
    const drop=()=>{
        setCrossEnable(!crossenable)
    }

    const pathToSelected = {
        '/': 1, // Home
        '/community': 2, // Community
        '/store': 3, // Store
        '/contact': 4 // Contact Us
    };
    const [hovered, setHovered] = useState(null);
    const selectedone = pathToSelected[location.pathname];
    const [selected, setSelected] = useState(selectedone);
    // Mapping pathnames to corresponding selected values
    

    // Getting the selected value based on the current pathname
    
  return (
    <>
    <div className='parent'>
        <div className='navbar'>
            <div className='logo'>
                Converter
            </div>
            <div className='navigator'>
                <div className={selected === 1 || hovered === 1 ? 'options selected-option' : 'options' } 
                                onClick={() => {setSelected(1);navigate('/')}} 
                                onMouseEnter={() => setHovered(1)} 
                                onMouseLeave={() => setHovered(null)}>Center
                </div>
                <div className={selected === 2 || hovered === 2 ? 'options selected-option' : 'options' } 
                                onClick={() => {setSelected(2);navigate('/')}} 
                                onMouseEnter={() => setHovered(2)} 
                                onMouseLeave={() => setHovered(null)}>Categories
                </div>
                <div className={selected === 3 || hovered === 3 ? 'options selected-option' : 'options' } 
                                onClick={() => {setSelected(3);navigate('/')}} 
                                onMouseEnter={() => setHovered(3)} 
                                onMouseLeave={() => setHovered(null)}>Why Us ?
                </div>
                <div className={selected === 4 || hovered === 4 ? 'options selected-option' : 'options' } 
                                onClick={() => {setSelected(4);navigate('/')}} 
                                onMouseEnter={() => setHovered(4)} 
                                onMouseLeave={() => setHovered(null)}>FAQ & Support
                </div>
            </div>


            <div className='extras'>
                <button><IoIosNotificationsOutline/></button>
                <button><CiUser/>Dashboard</button>
            </div>


            
            <div className='hamburg' onClick={drop}>
                <div className={crossenable === true ? 'line-1-cust line-1' : 'line-1' }></div>
                <div className={crossenable === true ? 'line-2-cust line-2' : 'line-2' }></div>
                <div className={crossenable === true ? 'line-3-cust line-3' : 'line-3' }></div>
            </div>
        
        
        </div>
        <div className={crossenable === true ? 'hello dropvisible' : ' hello drophide'}>
            <div >Center</div>
            <div >Categories</div>
            <div >Why Us ?</div>
            <div >FAQ & Support</div>
        </div>
    </div>
 
    </>
  )
}
