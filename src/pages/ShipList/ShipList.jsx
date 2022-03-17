import React, { useEffect, useState } from 'react'
import { getShipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const ShipList = (props) => {
  const [starships, setShips] = useState([])
 
  useEffect(() => {
    getShipList()
    .then(shipData => setShips(shipData.results))
  }, [])

  return (
    <>
      <div>
        <h3>Ship List</h3>
        <div className="icon-container">
          {starships.map((starship) => (
            <Link
            to='/starship-page'
            state={{starship}}
            style={{textDecoration: 'none'}}
            >
              <div key={starship.name} id='classDiv'>
                {starship.name}
              </div>
            </Link>
            
          ))}
        </div>
      </div>
    </>
  )
}

export default ShipList