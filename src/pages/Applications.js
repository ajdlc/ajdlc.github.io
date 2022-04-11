import GutendexDemo from "../components/applications/GutendexDemo";
import InternetArchiveWaybackMachine from "../components/applications/InternetArchiveWaybackMachine";
import SunsetSunrise from "../components/applications/SunsetSunrise";

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
                <InternetArchiveWaybackMachine></InternetArchiveWaybackMachine>
            </div>
        </section>
    )
}

export default Applications;