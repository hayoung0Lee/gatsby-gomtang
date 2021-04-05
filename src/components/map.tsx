import React from "react";
import styled from "styled-components";

const MapStyle = styled.div`
  * {
    box-sizing: content-box;
  }
`;

const Map = () => {
  return (
    <MapStyle>
      <a
        href="https://map.kakao.com/?urlX=848845&urlY=768527&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
        target="_blank"
      >
        <img
          width="504"
          height="310"
          src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=848845&MY=768527&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
          style={{ border: "1px solid #ccc" }}
        />
      </a>

      <div
        className="hide"
        style={{
          overflow: `hidden`,
          padding: `7px 11px`,
          border: `1px solid #dfdfdf`,
          borderColor: `rgba(0, 0, 0, 0.1)`,
          borderRadius: `0 0 2px 2px`,
          backgroundColor: `#f9f9f9`,
          width: `482px`,
        }}
      >
        <strong style={{ float: "left" }}>
          <img
            src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
            width="72"
            height="16"
            alt="카카오맵"
          />
        </strong>
        <div style={{ float: "right", position: "relative" }}>
          <a
            style={{
              fontSize: `12px`,
              textDecoration: `none`,
              float: `left`,
              height: `15px`,
              paddingTop: `1px`,
              lineHeight: `15px`,
              color: `#000`,
            }}
            target="_blank"
            href="https://map.kakao.com/?urlX=848845&urlY=768527&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
          >
            지도 크게 보기
          </a>
        </div>
      </div>
    </MapStyle>
  );
};

export default Map;
