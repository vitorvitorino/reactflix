const Hero = ({ text, backdrop }) => {
const missingImgUrl = `https://theheizenbergeffect.files.wordpress.com/2012/06/walt_missing_poster.jpg`


   


    return (
        
        <header className="bg-dark text-white p-5 text-center hero-container">
            <h1 className="hero-text">{text}</h1>
            {backdrop &&
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            }
        </header>
        
    )
}

export default Hero