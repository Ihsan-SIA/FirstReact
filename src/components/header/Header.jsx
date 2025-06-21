import "./Header.css"
import HeaderNav1  from "../../assets/block/HeaderNav/HeaderNav1";
import HeaderNav2 from "../../assets/block/HeaderNav/HeaderNav2";

const Header = () =>{
    return(
        <div className="main-header">
            {/* <h1>This is the header</h1> */}
            <HeaderNav1 />
            <HeaderNav2 />
        </div>
    )
}

export default Header;