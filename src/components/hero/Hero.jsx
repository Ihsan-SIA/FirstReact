import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero-section">
            <main className="left-hero">
                <h1>Make <br /> remote work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis perferendis tempora non earum, ipsam eius, eum accusantium odit molestias repellat nostrum voluptate veniam, sint neque quo. Vel, rem facilis.</p>
                <button>Learn more</button>
                <div className="partners">
                    <img src="./databiz.svg" alt="databliz" />
                    <img src="./audiophile.svg" alt="audiophile" />
                    <img src="./meet.svg" alt="meet" />
                    <img src="./maker.svg" alt="maker" />
                </div>
            </main>
            <main className="right-hero">
                <img src="./heroImage.png" alt="hero pic" />
            </main>
        </div>
    )
}

export default Hero