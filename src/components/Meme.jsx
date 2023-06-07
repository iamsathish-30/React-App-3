import React from "react";
import '../main.css';



const Meme = () => {
    const [allMeme , setAllMeme] = React.useState({});

    React.useEffect(()=>{
        const func = async()=>{
            const res = await fetch("https://api.imgflip.com/get_memes");;
            const data = await res.json();
            console.log(data);
            setAllMeme(data);
        }
        func();
    },[]);

    const urlsArr = allMeme.data.memes; 
    console.log(urlsArr)
    const [meme , setMeme] = React.useState({
        topText:"",
        bottomText:"",
        img:"http://i.imgflip.com/1bij.jpg"});

    

    /* The Below block of code is for Handling EventListener */

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

    /* The Above block of code is for Handling EventListener */


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