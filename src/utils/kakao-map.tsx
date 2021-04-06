// <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
// document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
const InstallScript = (dispatch: any, toggleMap: any, executeScript: any) => {
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

// <!-- 3. 실행 스크립트 -->
const executeScript = (content: string) => {
  // alert("executeScript");
  const scriptTag = document.createElement("script");
  const inlineScript = document.createTextNode(content);
  scriptTag.appendChild(inlineScript);
  document.body.appendChild(scriptTag);
};

export { InstallScript, executeScript };
