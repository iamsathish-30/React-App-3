import React from "react";
import '../main.css';



const Meme = () => {
    const [allMeme , setAllMeme] = React.useState([]);
    const [formData , setFormData] = React.useState({
        topText:"",
        bottomText:"",
        url:"https://i.imgflip.com/30b1gx.jpg"
    })
    React.useEffect(()=>{
        const func = async()=>{
            const res = await fetch("https://api.imgflip.com/get_memes");;
            const data = await res.json();
            console.log(data);
            setAllMeme(data.data.memes);
        }
        func();
    },[]);


    console.log(allMeme)

    

    /* The Below block of code is for Handling EventListener */

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMeme.length);
        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                url:allMeme[randomNumber].url
            }
        })
    }

    function handleChange(event){
        const {name , value , type} = event.target;
        setFormData((prevMeme)=>{
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
                    value = {formData.topText}
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value = {formData.bottomText}
                    onChange={handleChange}
                    />                
                <button className="form-button" onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={formData.url} className="meme-image" />
                <h2 className="meme-text top">{formData.topText}</h2>
                <h2 className="meme-text bottom">{formData.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;