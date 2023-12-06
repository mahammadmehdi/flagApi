import React, { useEffect, useState } from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

function Home() {
    function Theme() {
      document.body.classList.toggle("theme")
    }
    const [apidata, setApidata] = useState([])
    const [searchInp, setSearchInp] = useState("");
    const [categories, setCategories] = useState("")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all ")
            .then((res) => res.json())
            .then((data) => setApidata(data))
    }, [])

    function handleInput(e) {
        setSearchInp(e.target.value);
      }

    return (
        <>
         <div className="selector">
            <select onChange={(e)=>setCategories(e.target.value)}>
              <option value={"africa"}>Africa</option>
              <option value={"america"}>America</option>
              <option value={"asia"}>Asia</option>
              <option value={"europe"}>Europe</option>
              <option value={"oceania"}>Oceania</option>
            </select>
          </div>
            <button onClick={Theme}>Dark/Light Mode</button>
            <input type="text" value={searchInp} onChange={handleInput} />
            <div className='cards'>
                {apidata
                .filter((x) => x.name.common.toLowerCase().includes(searchInp.toLowerCase()))
                .filter((x) => x.region.toLowerCase().includes(categories))
                .map((x) =>
                    <NavLink to={"/detail/name/"+x.name.common}>
                        <ul className='card'>
                            <div><img src={x.flags.png} alt="flag" /></div>
                            <h3>{x.name.common}</h3>
                            <li>Population: {x.population}</li>
                            <li>Region: {x.region}</li>
                            <li>Capital: {x.capital}</li>
                        </ul>
                    </NavLink>
                )}
            </div>
        </>
    )
}

export default Home;
