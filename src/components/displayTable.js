import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';


// import '/tabledata.css';

function DisplayTable() {
    const [data, getData] = useState([])
    const URL = 'https://minh-restfulapi.herokuapp.com/drugs/view/all';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    return (
        <>
            <h1>TEST table data</h1>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>prescribe</th>
                    <th>contraindication</th>
                    <th>manufacturer</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>{item.prescribe}</td>
                        <td>{item.contraindication}</td>
                        <td>{item.manufacturer}</td>
                    </tr>
                ))}
            </tbody>

        </>
    );
}


export default DisplayTable;
