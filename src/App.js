import "./App.css";
import "./Component/Profile/Profile.css";
import Name from "./Component/Profile/FullName";
import Photo from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
function App() {
  return (
    <div className="profile">
      <Name />
      <Photo />
      <Address />
      <div className="buttons">
        <button>Follow</button>
        <button className="msg">Message</button>
      </div>
    </div>
  );
}

export default App;
