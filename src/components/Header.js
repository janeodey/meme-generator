import trollface from "../images/TrollFace.png"

const Header = () =>{
    return(
        <div className="header">
            <img 
                src={trollface} alt="" 
                className="img_header"
            />
            <h1 className="headerTitle">Meme-Generator</h1>
        </div>
    )
}
export default Header