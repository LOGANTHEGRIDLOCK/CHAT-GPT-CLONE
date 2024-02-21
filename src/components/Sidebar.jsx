import gptLogo from "../assets/chatgpt.svg";
import addBtn from '../assets/add-30.png';
import QueryButton from "./QueryButton";



const Sidebar = () => {
    return (
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">LOGAN</span>
            <button className="midBtn" onClick={() => {window.location.reload()}}>
              <img src={addBtn} alt="new chat" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <QueryButton value ="What is Programming ?" />
              <QueryButton value="How to use an API?" />
            </div>
          </div>
        </div>

      </div>
    );
  }

export default Sidebar;