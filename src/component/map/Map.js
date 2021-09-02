import {useEffect} from "react";
import './Map.css';

const Map = () => {

    useEffect(() => {



        let container = document.getElementById('map');
        let options = {
            center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        let map = new window.kakao.maps.Map(container, options);
        // 마우스 드래그로 지도 이동 가능여부를 설정합니다
        map.setDraggable(false);
        map.setZoomable(false);
    }, []);

    return(
        <div>
        <div id="map_title">Meetup-Space</div>
        <div id="map_container">
            <div id="map"></div>
            <div id="location_info">
                <div id="destination"><i className="fas fa-map-marked-alt"></i> 서울특별시 강남구 봉은사로 213-1, 301호</div>
            </div>
        </div>
        </div>
    );
}

export default Map;