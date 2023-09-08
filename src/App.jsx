
import './App.css'

function App() {
  
  return (
    <>
      <h1>Welcome from react</h1>
      <Student></Student>
      <Developer></Developer>
      <Device name = 'laptop' price='55'></Device>
      <Device name= 'Mobile' price = '17000' ></Device>
      <Device name= 'watch' price = '7000' ></Device>
    </>
  )
}


function Student (){
  const student = {
    name: "kasem",
    age: 38,
    designation: "webdeveloper",
    languages: ['HTML', "CSS", "JS"]
  }
return(
    <>
    <div className='student'>
      <h1>I am a student</h1>
      <p>My Name is: {student.name}</p>
      <p>My age : {student.age}</p>
    </div>
    </>
)
    
}

function Developer (){
  const developerStyle = {
    border: '1 px solid red',
    borderRadious: '10px',
    backgroundColor: 'white',
    color: 'black',
    padding: '20px'
  }
  return(

  <div style={developerStyle}>
    <h5>Developer</h5>
    <p>Hi, THis is Kasem I am frontend developer</p>
    <button>Read More</button>

  </div>
  )
}

function Device (props) {
  console.log(props);
  return <h2>This Device {props.name} price-{props.price}</h2>
}

export default App
