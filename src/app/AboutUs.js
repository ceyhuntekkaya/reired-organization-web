import WhyUs from "./about-us/WhyUs";
import BeforeUs from "./about-us/BeforeUs";
import SloganUs from "./about-us/SloganUs";
import TeamUs from "./about-us/TeamUs";

export default function AboutUs() {
    return (
        <div className="wrapper">
            <WhyUs/>
            <BeforeUs/>
            <SloganUs/>
            <TeamUs/>
        </div>
    )
}