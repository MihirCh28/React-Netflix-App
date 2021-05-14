import React from 'react';

function cd(props){
    return(
    <>
      <div className = 'cards'>
        <div className = 'card'>
          <img src = {props.imgsrc} alt = "you can't see me" 
          className = 'card__img' />
          <div className = 'card__info'>
            <span className ='card__category'> {props.title} </span>
            <h3 className = 'card__title'> {props.sname} </h3>
            <a href = {props.link} target ='_kuch'>
              <button> Watch Now</button> 
            </a>
          </div> 
        </div>  
      </div>
    </>
    );
  }

export default cd;