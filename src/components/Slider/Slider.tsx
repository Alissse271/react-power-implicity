import "./styles.scss";
import "./media.scss";
import navItemButton from "../../img/nav-item-button.svg";
import navItemButtonActive from "../../img/nav-item-button-active.svg";
export const Slider = () => {
    return (
        <div className="slider">
            <h1 className="slider__title title">The Power of Simplicity</h1>
            <p className="slider__subtitle subtitle">
                Instead of spending time searching for the right app, our AI
                will bring the right app to you.
            </p>
            <button type="button" className="slider__button button"></button>
            <div className="slider__nav">
                <button type="button" className="nav-item__button">
                    <img src={navItemButton} alt="" />
                </button>
                <button type="button" className="nav-item__button">
                    <img src={navItemButton} alt="" />
                </button>
                <button type="button" className="nav-item__button">
                    <img src={navItemButtonActive} alt="" />
                </button>
                <button type="button" className="nav-item__button">
                    <img src={navItemButton} alt="" />
                </button>
                <button type="button" className="nav-item__button">
                    <img src={navItemButton} alt="" />
                </button>
            </div>
        </div>
    );
};
