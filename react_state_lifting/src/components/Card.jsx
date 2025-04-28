import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>I am inside "{props.title}" child, and value of name is: {props.name}</p>
    </div>
  )
}

export default Card
