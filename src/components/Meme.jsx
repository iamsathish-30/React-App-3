import React from "react";
import '../main.css';
import datas from '../data.jsx'

const Meme = () => {
    const urlsArr = datas.data.memes; 
    console.log(urlsArr)
    const [url , setUrl] = React.useState("");

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * urlsArr.length);
        setUrl(urlsArr[randomNumber].url)
    }

    return (
        <main className="meme-container">
            <div className = "form">
                <input type="text" className="input-field" placeholder="Top text"/>
                <input type="text" className="input-field" placeholder="Bottom text"/>                
                <button className="form-button" onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <img src={url} className="meme-image"/>
        </main>
    );
};

export default Meme;