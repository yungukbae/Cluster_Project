import {useEffect, useRef} from "react";

const Map = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        var map = new window.kakao.maps.Map(container, options);
    }, []);

    return(
        <div>
            <div id="map" style={{width:400,height:400}}></div>
        </div>
    );
}

export default Map;