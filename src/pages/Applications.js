import GutendexDemo from "../components/applications/GutendexDemo";
import SunsetSunrise from "../components/applications/SunsetSunrise";
import UnitedStatesAwardungAgencySearch from "../components/applications/UnitedStatesAwardungAgencySearch";

function Applications() {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-12 p-5 m-5 landing">
                        Let me demonstrate what I can do.
                    </div>
                </div>
                <GutendexDemo></GutendexDemo>
                <hr />
                <SunsetSunrise></SunsetSunrise>
                <hr />
                <UnitedStatesAwardungAgencySearch></UnitedStatesAwardungAgencySearch>
            </div>
        </section>
    )
}

export default Applications;