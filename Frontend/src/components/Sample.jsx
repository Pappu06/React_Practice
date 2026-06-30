

function Sample(props) {
    function clickHandler() {
        console.log("Button clicked")
       
    }
  return (
    <>
    <div>
        <h1>Hi I'm {props.name}</h1>
    </div>
    <div>
        <button onClick= {clickHandler}>Click me</button>
        
    </div>
    </>
  )
}

export default Sample