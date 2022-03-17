import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const ShipDetails = (props) => {
  const [shipDetails, setShipDetails] = useState({})

  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(shipDetails => setShipDetails(shipDetails))
  }, [])

  return (
    <>
    <div class="icon-container" >
      <div id="classDiv">
        {shipDetails.name ?
        <>
          <p>NAME: {shipDetails.name}</p>
          <p> MODEL: {shipDetails.model}</p>
          <Link to="/starship" style={{textDecoration: 'none'}}>
            RETURN
          </Link>
        </>
        :
        <>
          <p>Loading starship details...</p>
        </>
        }
      </div>
      </div>
    </>
  )
}

export default ShipDetails