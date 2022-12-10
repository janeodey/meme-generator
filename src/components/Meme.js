

const Meme = () =>{
    return(
        <div className="main">
           <form className="form">
                <input type="text" className="form_input" placeholder="Top Text"/>
                <input type="text" className="form_input" placeholder="Buttom Text"/>
                <button className="form_btn">Get a new Meme image ✨</button>
           </form>
        </div>
    )
}

export default Meme