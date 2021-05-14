import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const App = () =>(
  <>

  <h1 className ='heading_style'> List of top 5 Netflix series in 2021</h1>
  {Sdata.map((val,index) => {
      console.log(index);
      return (
        <Cards 
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link = {val.link}
        />
        ); 
  })}

  </>
)

export default App;
