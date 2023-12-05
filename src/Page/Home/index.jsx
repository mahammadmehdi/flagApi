import React, { useEffect, useState } from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';

function Home() {
    const [apidata, setApidata] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all ")
            .then((res) => res.json())
            .then((data) => setApidata(data))
    }, [])

    return (
        <>
            <button>Dark Mode</button>
            <div className='cards'>
                {apidata.map((x) =>
                    <NavLink to={"/detail/name/:"+x.name}>
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
