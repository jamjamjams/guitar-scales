import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';


const [currStrings, setCurrStrings] = useState([]);

const stringsMarkerStyle = {
    height:`${100/6 * currStrings.length}%`,
    top:`${strumDir === 'down' ? '0' : 'unset'}`,
    bottom:`${strumDir === 'down' ? 'unset' : '0'}`
}

function getCurrStrings(string, dir){
    let strings = [0,1,2,3,4,5];
    return strumDir === 'down' ? strings.slice(string) : strings.slice(0, string+1);
}

function showStringsMarker(e){
    if (e.target.className === 'body-string'){
        const startString = +e.target.id.replace('body-string-', '');
        setCurrStrings(getCurrStrings(startString, strumDir))
    }
}

function hideStringsMarker(){
    setCurrStrings([])
}



function GuitarBody({ currFrets }){

    return (
        <div className="guitar-body-container">
            <div
                className="guitar-body"
                onMouseMove={showStringsMarker}
                onMouseLeave={hideStringsMarker}
            >

            <label
                className="strum-dir-btn"
                htmlFor="strum-dir"
            >
                {strumDir === 'down' ? <FaArrowDown /> : <FaArrowUp />}
                <input
                    id="strum-dir"
                    type="checkbox"
                    name="strum-dir"
                    value={strumDir}
                    onChange={updateStrumDir}
                />
            </label>

                <div className="body-strings">
                    <div className="body-string" id="body-string-5"></div>
                    <div className="body-string" id="body-string-4"></div>
                    <div className="body-string" id="body-string-3"></div>
                    <div className="body-string" id="body-string-2"></div>
                    <div className="body-string" id="body-string-1"></div>
                    <div className="body-string" id="body-string-0"></div>
                    {currStrings.length > 0 &&
                        <div id="strings-marker" style={stringsMarkerStyle}></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GuitarBody;
