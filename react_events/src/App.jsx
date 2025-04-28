import './App.css'

function App() {
  function handleClick(){
    alert("I got clicked");
  }

  function handleMouseOver(){
    alert("Aahh!! You have hovered over paragraph");
  }

  function handleInputChange(e){
    console.log("Change in input value: ", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert('should i submit the form?');
  }

  return (
    <div>
      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        I am a paragraph
      </p>
      <button onClick={handleClick}>
        Click Me
      </button>
      <button onClick={() => { alert("I got clicked too") }}>
        Click Me Plz
      </button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}

      <button onClick={() => alert("button clicked") }>Click Me</button>
    </div>
  )
}

export default App
