import React from "react";
import '../main.css';
import datas from '../data.jsx'

const Meme = () => {
    const urlsArr = datas.data.memes; 
    console.log(urlsArr)
    const [meme , setMeme] = React.useState({
        topText:"",
        bottomText:"",
        img:"http://i.imgflip.com/1bij.jpg"});

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * urlsArr.length);
        const url = urlsArr[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            img:url
        }))    
    }

    function handleChange(event){
        const {name , value , type} = event.target;
        setMeme((prevMeme)=>{
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }


    return (
        <main className="meme-container">
            <div className = "form">
                <input 
                    type="text"
                    className="input-field" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />                
                <button className="form-button" onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.img} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;