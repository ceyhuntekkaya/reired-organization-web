import {Link} from "react-router-dom";

export default function AdventureLeft (){
    return (
        <div className="alpine-left-content mb-40">
            <p>Matterhorn. Eiger. Jungfrau. Schilthorn. These are storied names among the nearly 100
                summits in the Swiss Alps that rise above 13,000 feet. The sheer peaks of Europe's
                most
                celebrated mountain range tower over lush valleys where waterfalls pour from
                perennial
                glaciers. High-country snows feed terraced vineyards and pastoral foothills where
                every
                grazing cow wears a bell, and every dairy farmer makes a cheese that brings renown
                to
                the local region.</p>
            <p>With the impacts of climate change evident in its receding glaciers, Switzerland is
                at
                the forefront of protecting its wild places and promoting sustainability. </p>
            <Link to="/detail" className="btn btn-theme">Book This Trip</Link>
        </div>
    )
}