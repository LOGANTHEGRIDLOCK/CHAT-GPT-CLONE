import React ,{useEffect, useRef, useState} from "react";
import sendBtn from "../assets/send.svg"
import userIcon from "../assets/user-icon.jpg"
import gptLogo from "../assets/chatgptLogo.svg"
import { sendMsgToOpenAI } from "../OpenAi";

const MainContent = () => {
  
  const msgEnd = useRef(null) 

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([{
    text: "Hi, I am Logan",
    isBot: true,
  }]);

  useEffect( () => {
         msgEnd.current.scrollIntoView();
  },[messages])

  const handleSend = async() => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
       {text, isBot: false}
    ])
    const response = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
    {text: input, isBot: false},
    {text : response, isBot: true}]);
  }



  const handleEnter = async (e) => {
    if(e.key === 'Enter') await handleSend();
  }
    return (
      <div className="main">
        <div className="chats">

             {messages.map((message, i) => (
                      <div className={message.isBot?"chat bot":"chat"}>
                      <img src={message.isBot?gptLogo:userIcon} alt="" className="chatImg"/><p className="txt">
                        { message.text}
                      </p>
                   </div>
             ))}

             <div ref={msgEnd}/>
        </div>
         <div className="chatFooter">
           <div className="inp">
            <input type="text" placeholder="Type here ....." onKeyDown={handleEnter} value={input} onChange={(e)=>{setInput(e.target.value)}} /> 
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
              </button>
              </div>
              <p>it may produce in correct result you are using openAi for this project</p>
         </div>
      </div>
    );
  }
  
export default MainContent;