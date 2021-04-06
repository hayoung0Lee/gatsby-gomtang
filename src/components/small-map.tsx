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

const SmallMap = ({
  isMapInstalled,
  dispatch,
}: {
  isMapInstalled?: string;
  dispatch?: any;
}) => {
  const currentExecuteScript = () =>
    executeScript(`new daum.roughmap.Lander({
		"timestamp" : "1617720029445",
		"key" : "258t7",
		"mapWidth" : "300",
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
      <div
        id="daumRoughmapContainer1617720029445"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></div>
    </MapStyle>
  );
};

export default connect(
  // @ts-ignore
  (state) => ({ isMapInstalled: state.app.isMapInstalled }),
  null
)(SmallMap);
