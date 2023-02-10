import React, { useState } from 'react'
import "./Header.css";

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () =>{
        setIsActive(current => !current);
    }
  return (
    <>
        <div className='header'>
            <p id='heading'>Clients </p> 
            <input type="text" id='input' placeholder='Company, Entity, User, Domain, Service, Location'/>
        </div>
        <div id='header_img'></div>
        <div className='detail_box' style={{backgroundColor : isActive ? '#112949' : ''}} onClick={handleClick} >
            <p className='company_name'>Company Name</p>
            <p className='code'style={{color: isActive ? 'white' : ''}} >CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        <div className='detail_box' onClick={handleClick} style={{backgroundColor : isActive ? '#112949' : '', color: isActive ? 'white' : ''}}>
            <p className='company_name'>Company Name</p>
            <p className='code' style={{color: isActive ? 'white' : ''}}>CODE</p>
            <p className='entities' style={{color: isActive ? 'white' : ''}}>8 Entities</p>
            <p className='user' style={{color: isActive ? 'white' : ''}}>64 Users</p>   
        </div>
        
    </>
  )
}

export default Header
