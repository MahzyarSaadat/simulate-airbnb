import hero from "../assets/Group 77.png"

const Hero = () => {
    return(
        <section className="hero--container section">
            <div className="heroImg--container">
                <img src={hero} alt="hero" />
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;