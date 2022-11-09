import "./styles.scss";
import "./media.scss";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";

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
            <a href="#" className="nav__link-logo">
                <LogoIcon className="nav__logo" />
            </a>
            <nav className="nav__menu">
                {menuItems.map(({ label, link }) => {
                    return (
                        <a href={link} className="nav__menu-link">
                            {label}
                        </a>
                    );
                })}
            </nav>
            <button type="button" className="nav__button">
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
