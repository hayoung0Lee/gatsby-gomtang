import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMap } from "../state/app";
import { InstallScript, executeScript } from "../utils/kakao-map";

const MapStyle = styled.div`
  * {
    box-sizing: content-box;
  }
`;

declare global {
  interface Window {
    daum: any;
  }
}

const Map = ({
  isMapInstalled,
  dispatch,
}: {
  isMapInstalled?: string;
  dispatch?: any;
}) => {
  const currentExecuteScript = () =>
    executeScript(`new daum.roughmap.Lander({
    	"timestamp" : "1617690117752",
    	"key" : "258ih",
    	"mapWidth" : "640",
    	"mapHeight" : "360"
    }).render();`);

  useEffect(() => {
    if (!isMapInstalled) {
      InstallScript(dispatch, toggleMap, currentExecuteScript);
    } else {
      currentExecuteScript();
    }
  }, []);

  return (
    <MapStyle>
      {/* <!-- 1. 지도 노드 --> */}
      {/* webpack, chunk 분리 */}
      <div
        id="daumRoughmapContainer1617690117752"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></div>
    </MapStyle>
  );
};

export default connect(
  // @ts-ignore
  (state) => ({ isMapInstalled: state.app.isMapInstalled }),
  null
)(Map);
