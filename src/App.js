import './App.css';
import AdventureGridArea from "./app/adventure/AdventureGridArea";
import SubscribeArea from "./app/adventure/SubscribeArea";


function App() {
    const loadingPanel = () => {

        return (
            <div className="preloader-wrap">
                <div className="cube-wrapper">
                    <div className="cube-folding">
                        <span className="leaf1"></span>
                        <span className="leaf2"></span>
                        <span className="leaf3"></span>
                        <span className="leaf4"></span>
                    </div>
                    <span className="loading" data-name="Loading">Loading</span>
                </div>
            </div>
        )
    }
    return (
        <>
            {
                //loadingPanel()
            }
            <div className="wrapper">
                <AdventureGridArea/>
                <SubscribeArea/>
            </div>
        </>
    );
}

export default App;
