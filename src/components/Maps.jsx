/** @jsxImportSource @emotion/react */
import "../style/maps.css";
import "../style/esriIcons.css";
import "../style/home.scss";

/* UNFINISHED
  * may need to properly embed interactive map from Classic Viewer
  */

export default function Maps() {
    return (
        <div className="MapPage">
            {/* maybe add drop-down to navigate through maps, but unnecessary right now
            example:
                interactive
                vegetation
                    flowers
                    trees
                structures
                    pre-fire
                    post-fire
                */}
            <h1 className="mapTitle">Swanton Pacific Ranch Maps</h1>
            <text className="mapText">The interactive map below provides different views of the ranch. It may take a few seconds to load. You can toggle different layers and map elements by clicking <span class="esri-icon-layers"></span>. A map legend is available by clicking <span class="esri-icon-layer-list"></span>. A more comprehensive interactive map will be made available at a later date.</text>
            <iframe title="CalPoly SPR" class="map"
            src="https://calpoly.maps.arcgis.com/apps/instant/basic/index.html?appid=154965d4fc4245e0ab96e94e63252f15"></iframe>

            <br/>
            <text className="mapText">Here is an additional interactive map if the ArcGIS map does not load.</text>
            <br/>
            <iframe title="Google SPR" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43564.99188828965!2d-122.25948581283794!3d37.06328194401197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bb4cbc2d3b0620!2sSwanton%20Pacific%20Ranch-Cal%20Poly!5e0!3m2!1sen!2sus!4v1654876300117!5m2!1sen!2sus" class="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <br/>
            <hr className="divline"></hr>
            <h1 className="mapTitle">Other Maps</h1>
            <text className="mapText">More maps coming soon.</text>
        </div>
        
    )
}