import { Navigation } from "./components/Navigation/Navigation";
import { Slider } from "./components/Slider/Slider";
import "./App.scss";
import "./media.scss";

export const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Navigation />
                <Slider />
            </div>
        </div>
    );
};
