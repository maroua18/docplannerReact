
import React from  'react';


const Nav=(props)=>{
    return (
      <div class="header">
    <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/> 
        
<ul className="nav-menu">{
      props.navItem.map(el => <li className="title"><a href="#"> {el.title}</a>
      {!el.sousitem ? null :
        <ul className='sousitems'> {el.sousitem.map(el => <li>{el}</li>)}
        </ul>
      }</li>

      )}
    </ul></div>
    );
}


export default Nav ;