import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMap } from "../state/app";

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
  isMapInstalled: string;
  dispatch: any;
}) => {
  console.log(isMapInstalled);
  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    // alert("executeScript");
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    	"timestamp" : "1617690117752",
    	"key" : "258ih",
    	"mapWidth" : "640",
    	"mapHeight" : "360"
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      // alert("installScript");
      var c = location.protocol == "https:" ? "https:" : "http:";
      var a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      var b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        dispatch(toggleMap(true));
        executeScript();
      };
    })();
  };

  useEffect(() => {
    if (!isMapInstalled) {
      InstallScript();
    } else {
      executeScript();
    }
  }, []);

  return (
    <MapStyle>
      {/* <!-- 1. 지도 노드 --> */}
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
