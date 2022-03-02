import React from "react";
import { useState } from "react";
import "./app.css";

function App() {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [empty, setEmpty] = useState(true);

  const handleClick = () => {
    console.log(message)
    setMessage('')
    setSuccessMessage(true) 
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleBlur = (e) => {
    setSuccessMessage('')
    setEmpty(e.target.value)
  }

  return (
    <div className="button">
        <input value={message} onChange={handleChange} onBlur={handleBlur}/>
        <button type="submit" onClick={handleClick} disabled={message ? false: true}>Отправить</button>  
        <div className="success">{successMessage ? 'Сообщение отправлено!': ''}</div>
        <div className="error">{!empty ? 'Поле ввода не должно быть пустым' : ''}</div>
    </div>
  );
}

export default App;
