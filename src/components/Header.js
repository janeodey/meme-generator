import trollface from "../images/TrollFace.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollface}
                className="img_head"
            />
            <h1 className="header_title">Meme Generator</h1>
        </header>
    )
}