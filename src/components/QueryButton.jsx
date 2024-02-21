import React, {useState} from 'react';
import msgIcon from '../assets/message.svg';
import { sendMsgToOpenAI } from "../OpenAi";

const QueryButton = ({ value }) => {

 
  const [messages, setMessages] = useState([{
    text: "Hi, I am Logan",
    isBot: true,
  }]);

  const handleQuery = async(e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
       {text, isBot: false}
    ])
    const response = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
    {text, isBot: false},
    {text : response, isBot: true}]);
  }

    return (
      <button className="query" onClick={handleQuery}>
        <img src={msgIcon} alt="query" />
        {value}
      </button>
    );
  }

export default QueryButton;