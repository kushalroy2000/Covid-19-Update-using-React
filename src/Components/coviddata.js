import React, {useEffect, useState} from 'react'

const Coviddata = () => {

    const [actualdata, setactualdata] = useState([]);

    const getcoviddata = async () => {
       const res = await fetch('http://api.covid19india.org/data.json')
       const data = await res.json()
       setactualdata(data.statewise)
    }

    useEffect(() => {
        getcoviddata();
    }, []);

    return (
        <>
         <h1 className="mb-5 text-center">INDIA COVID-19 UPDATE</h1>
              <div>
                  <table className="table">
                      <thead className="table-dark">
                          <tr>
                              <th>State</th>
                              <th>Confirmed</th>
                              <th>Recovered</th>
                              <th>Deaths</th>
                              <th>Active</th>
                              <th>Updated</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              actualdata.map((cur, ind)=> {
                                  return(
                                    <tr key={ind}>
                                        <td>{cur.state}</td>
                                        <td>{cur.confirmed}</td>
                                        <td>{cur.recovered}</td>
                                        <td>{cur.deaths}</td>
                                        <td>{cur.active}</td>
                                        <td>{cur.lastupdatedtime}</td>
                                    </tr>
                                  )
                              })
                          } 
                      </tbody>
                  </table>
             </div>  
        </>
    )
}

export default Coviddata
