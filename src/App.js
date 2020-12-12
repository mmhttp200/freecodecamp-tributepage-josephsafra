import './App.css';
import Journey from './Components/Journey';
import ProfilePicture from './Components/ProfilePicture';

function App() {
  return (
    <div className="container">
      <header className="col text-center p-5" id="header"><h1>Joseph Safra</h1></header>
      <ProfilePicture />
      <Journey />
      <footer className="col text-center p-5"><a href="#header" className="text-light">Return to top</a></footer>
    </div>
  );
}

export default App;
