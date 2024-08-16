import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Searchbar() {
    // export const Searchbar = ({ setResults }) => {

    const [input, setInput] = useState("");

    return (
        <>
            <div className="input-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder="search here..." value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </>
    );
} export default Searchbar;