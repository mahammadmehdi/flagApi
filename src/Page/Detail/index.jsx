import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { name } = useParams();
  const [apidata, setApidata] = useState([])
  console.log(name.replace(":",""))

 

  async function getFetch() {
    const data = await fetch("https://restcountries.com/v3.1/name/"+name.replace(":",""))
    const res = await data.json()
    setApidata(res)
    console.log(apidata);
}

useEffect(() => {
    getFetch()
}, [])

  return (
    <div> 
      
      {console.log(apidata.name.common)}
      <div className='cards'>
      {
        apidata &&
        <ul className='card' >
          {/* <div><img src={apidata.flags.png} alt="flag" /></div>
          <h3>{apidata.name.common}</h3> */}
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
