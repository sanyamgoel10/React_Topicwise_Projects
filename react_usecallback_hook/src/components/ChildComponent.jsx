import React from 'react'

const ChildComponent = React.memo((props) => {
  console.log("Child Component got rendered");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
});

export default ChildComponent

// React.memo -> component re renders only when props are changed

// If we are sending a function in a component, then the React.memo does not prevent the component from reloading