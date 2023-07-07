// import logo from './logo.svg';
import './App.css';
import picture from "./Assets/Will smith.webp";
import Profile from "./component/Profile";

function App() {
  return (
    <div style={{backgroundColor:"darkblue", width:"60", margin: "auto", border: "1px solid black", padding: "10" }}>
      <h1 style={{textAlign: "center", color:"white" }}>React Props</h1>
      
      <Profile 
        fullName={"Busari Adam.B"} bio="I am a web developer with great knowledge in front-end and back-end languages, responsive frameworks, databases, and best code practices.
          My objective is simply to be the best web developer and to contribute to the technology industry, I am dedicated to perfecting my craft by learning from more seasoned developers, and continously learning all i can about wed development."
        profession={"Full Stack Developer"}
      >
        <center>
        <img src={picture}
        alt="mypic"
        style={{width: "50%", borderRadius:"12px", borderColor:"white", borderStyle:"groove"}}/>
        </center>
      </Profile>
    </div>
  );
}


export default App;


