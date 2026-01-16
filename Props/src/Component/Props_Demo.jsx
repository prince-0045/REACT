import React from 'react'

const Props_Demo = (props) => {
    console.log("props",props);
    console.log("name",props.name);
  return (
    <h1> hello from Props_Demo: {props.name}</h1>
  )
}

export default Props_Demo