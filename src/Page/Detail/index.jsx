import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { name } = useParams();
  const [apidata, setApidata] = useState([])
  console.log(name.replace(":",""))

 

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setApidata(data[0]));
  }, []);
console.log(apidata);
  return (
    <div> 
      
     
      <div className='cards'>
      {
        apidata &&
        <ul className='card' >
          <div><img src={apidata.flags?.png} alt="flag" /></div>
          <h3>{apidata.name?.common}</h3>
          <li>Population: {apidata.population}</li>
          <li>Region: {apidata.region}</li>
          <li>Capital: {apidata.capital}</li>
        </ul>
      }
     </div>
    </div>
  )
}

export default Detail;
