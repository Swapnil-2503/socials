import './App.css';
import { Email, Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from "@material-ui/icons";

function App() {
  return (
    <div className="App">  
    <p className='quote'>My Quote: Life is a journey, don't enjoy it live it, experience every aspects.</p>
    <div className='Home'>
     <h1 className='bio'>Connect with Swapnil</h1>
   
     
     <div className="link">
       <a className="b" href="htttps://www.linkedin.com/in/swapnil-jadhav03"><LinkedIn/></a>
       <a className="bl" href="https://www.github.com/Swapnil-2503"><GitHub/></a>
       <a className="r" href="mailto://swapniljadhav6022@gmailcom"><Email/></a>  
       <a className="b" href="https://www.facebook.com/100023952010963"><Facebook /></a>
       <a className="b" href="https://www.twitter.com/SwapNetFlix"><Twitter /></a>
       <a className="r" href="https://www.instagram.com/swapnil_._jadhav"><Instagram /></a> 
       <a className="r" href="https://www.youtube.com/@SwapNet"><YouTube/></a> 
       <a className="r" href="https://www.youtube.com/@SwapFlix"><YouTube/></a>    
     </div>
     </div>
    </div>
  );
}

export default App;

