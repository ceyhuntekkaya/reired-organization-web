import {Chrono} from "react-chrono";
// https://www.npmjs.com/package/react-chrono#item-width
export default function ApplicationTimeLine() {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",

        cardSubtitle: "<b>Men of the British Expeditionary Force (BEF) wade out to..</b>",
        cardDetailedText: "<b>Men of the British Expeditionary Force (BEF) wade out to..</b>",

    }, {
        title: "May 1941",
        cardTitle: "Dunkirkeeee",

        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    }, {
        title: "May 1942",
        cardTitle: "Dunkirk",

        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    }, {
        title: "May 1943",
        cardTitle: "Dunkirkeeee",

        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    },];

// disableToolbar={true}
    return (
        <div>
            <Chrono items={items} disableToolbar={false} disableNavOnKey mode="VERTICAL"
                    parseDetailsAsHTML
                    theme={{
                        primary: 'red',
                        secondary: 'gray',
                        cardBgColor: 'yellow',
                        titleColor: 'black',
                        titleColorActive: 'red',
                    }}>
                <div className="chrono-icons">
                    <img src="image1.svg" alt="image1"/>
                    <img src="image2.svg" alt="image2"/>
                </div>
            </Chrono>
        </div>
    )
}