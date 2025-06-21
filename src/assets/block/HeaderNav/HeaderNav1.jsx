import MyImage from "../../../assets/logo.svg"
import "./HeaderNav.css"
const HeaderNav1 = () =>{
    return(
        <div className="left-header">
            <img src= {MyImage} alt="Logo" />
            <nav>Features</nav>
            <nav>Company</nav>
            <nav>Careers</nav>
            <nav>About</nav>
        </div>
    )
}

export default HeaderNav1