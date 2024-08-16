import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Location() {
    return (
        <>
            <div className="input-search">
                <FontAwesomeIcon icon={faLocationDot} />
                <input placeholder="type location here..." />
            </div>
        </>
    );
} export default Location;