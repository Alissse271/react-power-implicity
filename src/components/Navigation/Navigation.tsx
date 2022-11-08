import "./styles.scss";
import "./media.scss";
import logo from "../../img/logo.svg";

export const Navigation = () => {
    const menuItems = [
        {
            label: "Features",
            link: "",
        },
        {
            label: "Partners",
            link: "",
        },
        {
            label: "Stories",
            link: "",
        },
    ];
    return (
        <nav className="nav">
            <div className="logo nav__logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="menu nav__menu">
                {menuItems.map(({ label, link }) => {
                    return (
                        <li>
                            <a href={link}>{label}</a>
                        </li>
                    );
                })}
            </ul>
            <button type="button" className="button nav__button">
                Download for free
            </button>
            <div className="nav-burger">
                <p className="nav-burger__line"></p>
                <p className="nav-burger__line"></p>
                <p className="nav-burger__line"></p>
            </div>
        </nav>
    );
};
