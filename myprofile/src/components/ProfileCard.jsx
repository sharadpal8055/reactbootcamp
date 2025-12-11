import React from 'react'

const ProfileCard = ({ name = "Your name", age = "", city = "" }) => {
  return (
     <div className="card">
      <div className="avatar">{name ? name[0]?.toUpperCase() : "?"}</div>
      <div className="card-body">
        <h3 className="card-name">{name || "Your name"}</h3>
        <p className="card-info">{age ? `Age: ${age}` : "Age: —"}</p>
        <p className="card-info">{city ? `City: ${city}` : "City: —"}</p>
      </div>
    </div>
  )
}

export default ProfileCard