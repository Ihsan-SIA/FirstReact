import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero-section">
            <main className="left">
                <h1>Make remote work</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis perferendis tempora non earum, ipsam eius, eum accusantium odit molestias repellat nostrum voluptate veniam, sint neque quo. Vel, rem facilis.</p>
                <button>Learn more</button>
            </main>
            <main className="right">
                <img src="./image-hero-desktop.png" alt="" />
            </main>
        </div>
    )
}

export default Hero