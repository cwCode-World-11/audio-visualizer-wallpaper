const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const randomPlayEle = document.querySelector("#randomPlayEle");

const barCountEle = document.querySelector(".barCount");
const barWidthEle = document.querySelector("#barWidthEle");
const barHeightEle = document.querySelector("#barHeightEle");
const barInitialPosXEle = document.querySelector("#barInitialPosX");
const barInitialPosYEle = document.querySelector("#barInitialPosY");
const barMirXYEle = document.querySelector("#barMirXYEle"); //right-top
const barMirMinXYEle = document.querySelector("#barMirMinXYEle"); //left-top
const barMirMinXMinYEle = document.querySelector("#barMirMinXMinYEle"); //left-down
const barMirXMinYEle = document.querySelector("#barMirXMinYEle"); //right-down
const barSpacingEle = document.querySelector("#barSpacing");
const barRoundedCornerEle = document.querySelector("#barRoundedCornerEle");
const barColorsTableDataEle = document.querySelector("#barColorsTableDataEle"); ////////////////////////////
const barAddMoreColorEle = document.querySelector("#barAddMoreColorEle"); ////////////////////////////////////
const barSubMoreColorEle = document.querySelector("#barSubMoreColorEle"); /////////////////////////////////

const audioPlayerDivEle = document.querySelector(".audioPlayerDivEle");
const audioFileEle = document.querySelector("#audioFileEle");
const audioPositionXEle = document.querySelector("#audioPositionXEle");
const audioPositionYEle = document.querySelector("#audioPositionYEle");
const audioScaleEleX = document.querySelector("#audioScaleEleX");
const audioScaleEleY = document.querySelector("#audioScaleEleY");
const audioThumbnailBorderEle = document.querySelector(
  "#audioThumbnailBorderEle"
);
const audioThumbnailEle = document.querySelector(".thumbnailImg");
const audioStartTimeEle = document.querySelector(".timeStart");
const audioEndTimeEle = document.querySelector(".timeEnd");
const seekBGEle = document.querySelector(".seekBG");
const audioPlayBtnEle = document.querySelector(".playBtn");

const filterBlurEle = document.querySelector("#filterBlurEle");
const filterBrightnessEle = document.querySelector("#filterBrightnessEle");
const filterContrastEle = document.querySelector("#filterContrastEle");
const filterGrayscaleEle = document.querySelector("#filterGrayscaleEle");
const filterHueRotateEle = document.querySelector("#filterHueRotateEle");
const filterInvertEle = document.querySelector("#filterInvertEle");
const filterOpacityEle = document.querySelector("#filterOpacityEle");
const filterSaturateEle = document.querySelector("#filterSaturateEle");
const filterSapiaEle = document.querySelector("#filterSapiaEle");
const filterShadowLeftRightEle = document.querySelector(
  "#filterShadowLeftRightEle"
);
const filterShadowUpDownEle = document.querySelector("#filterShadowUpDownEle");
const filterShadowBlurEle = document.querySelector("#filterShadowBlurEle");
const filterShadowColorEle = document.querySelector("#filterShadowColorEle");

const circleLightShowEle = document.querySelector("#circleLightShowEle");
const circleNumOfLightsXEle = document.querySelector("#circleNumOfLightsXEle");
const circleNumOfLightsYEle = document.querySelector("#circleNumOfLightsYEle");
const circleColorsTableData = document.querySelector("#lightColorsTableData"); /////////////////////////////////////////
const circleAddMoreColor = document.querySelector("#circleAddMoreColor"); //////////////////////////////////////////
const circleSubMoreColor = document.querySelector("#circleSubMoreColor"); /////////////////////
const circleSizeEle = document.querySelector("#circleSizeEle");
const circlePositionXEle = document.querySelector("#circlePositionXEle");
const circlePositionYEle = document.querySelector("#circlePositionYEle");
const circleSpacingXEle = document.querySelector("#circleSpacingXEle");
const circleSpacingYEle = document.querySelector("#circleSpacingYEle");
const circleMaxInValEle = document.querySelector("#circleMaxInValEle");
const circleFlickerOpacityEle = document.querySelector(
  "#circleFlickerOpacityEle"
);

const bgColorEle = document.querySelector("#bgColorEle");
const bgUseMultiColorEle = document.querySelector("#bgUseMultiColorEle");
const bgUseColorTableEle = document.querySelector("#bgUseColorTableEle");
const bgUseMultiColorTableEle = document.querySelector(".multiColor");

// Alert : BG Element
const bgStyleEle = document.querySelectorAll(".bgStyle");
const isMulColorEle = document.querySelector("#isMulColorEle");
const bgImageSecEle = document.querySelector(".bgImageSec");
const bgColorSecEle = document.querySelector(".bgColorSec");
const bgImgRadioEle = document.querySelectorAll("#bgImgRadio");
const singleColor = document.querySelector(".singleColor"); //NOTE : tr
const multiColor = document.querySelectorAll(".multiColor"); //NOTE : tr
const singleColorValueEle = document.querySelector("#singleColorValueEle");
const mulColorsEle = document.querySelectorAll("#mulColorsEle");
const mulColorProperty = document.querySelectorAll("[name='mulColorProperty']");
const gradientRotate = document.querySelector("#gradientRotate");
const linearRotateRow = document.querySelector(".linearRotateRow");
const bgFileRow = document.querySelector(".bgFileRow");
const bgChooseFile = document.querySelector("#bgChooseFile");

// Filter
const bgFilterOpacity = document.querySelector("#bgFilterOpacity");
// Show control
const mainControlContainer = document.querySelector(".container");
const showControlsBtn = document.querySelector(".showControls");
const showControlsBtnOut = document.querySelector("#showControlsOut");

const songNameSpan = document.querySelector(".songNameSpan");

let canvasCenterX = Math.floor(canvas.width / 2);
let canvasCenterY = Math.floor(canvas.height / 2);
let audDiff;
let lightColorChange = 0;
let defaultColorVal = "rgb(255,255,0)";
let t2;
let thumbnailRotate = 0;
// Alert:Show controls
let topPos = 0,
  rightPos = 0;

let dBody = document.body;

const options = {
  defaultVal: {
    randomPlay: true,

    barPosX: 0,
    barWidth: 10,
    barHeight: 0,
    barHeightAdd: 0, //NOTE: Not actual height.just increasing bar while playing
    barCount: 64,
    barInitialPosX: 0,
    barInitialPosY: 0,
    colors: ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"],
    barMirXY: true,
    barMirMinXY: false,
    barMirMinXMinY: false,
    barMirXMinY: false,
    barSpacing: 0,
    barRoundedCorner: 0,

    isAudioPlaying: false,
    audioPositionX: 0,
    audioPositionY: 0,
    audioScaleX: 100,
    audioScaleY: 100,
    audioEndTime: null,
    audioCurrentTime: null,
    audioThumbnailBorder: 10,

    circleLightShow: true,
    circleNumOfLightsX: 3,
    circleNumOfLightsY: 2,
    circleColors: ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"],
    circleSize: 20,
    circlePositionX: 0,
    circlePositionY: 0,
    circleSpacingX: 0,
    circleSpacingY: 0,
    circleMaxInVal: 5000,
    circleFlickerOpacity: 100,

    filterBlur: 0,
    filterBrightness: 1,
    filterContrast: 1,
    filterGrayscale: 0,
    filterHueRotate: 0,
    filterInvert: 0,
    filterOpacity: 1,
    filterSaturate: 100,
    filterSapia: 0,
    filterShadowLeftRight: 0,
    filterShadowUpDown: 0,
    filterShadowBlur: 0,
    filterShadowColor: "",

    // NOTE: BG
    bgColor: true,
    isMulColor: true,
    singleColor: "#959532",
    mulColors: [
      "rgb(255,0,0)",
      "rgb(0,255,0)",
      "rgb(0,0,255)",
      "rgb(255,255,0)",
      "rgb(0,255,255)",
    ],
    bgImgSrc: "./Asset/BG/bg_01.jpg",
    mulColorProperty: "",
    mulColorPropertyType: "",
    linearGradientRotate: 0,
    bgImgOpacity: 1,
  },
};

// Alert: BG
const imgSrcArr = [
  "./Asset/BG/bg_01.jpg",
  "./Asset/BG/bg_02.jpg",
  "./Asset/BG/bg_03.jpg",
  "./Asset/BG/bg_04.jpg",
  "./Asset/BG/bg_05.jpg",
  "",
];
const bodyStyle = document.body.style;
bgStyleEle.forEach((e) => {
  e.addEventListener("change", (ele) => {
    if (ele.target.checked && ele.target.value === "bgColor") {
      bgImageSecEle.classList.add("hide");
      bgColorSecEle.classList.remove("hide");
      options.defaultVal.bgColor = true;
    } else {
      bgImageSecEle.classList.remove("hide");
      bgColorSecEle.classList.add("hide");
      options.defaultVal.bgColor = false;
    }
  });
});

bgImgRadioEle.forEach((e, i) => {
  e.addEventListener("change", (ele) => {
    if (ele.target.checked) {
      if (ele.target.value === "customImg") {
        bgFileRow.classList.remove("hide");
      } else {
        bgFileRow.classList.add("hide");
        imgSrcArr[imgSrcArr.length - 1] = "";
      }
      options.defaultVal.bgImgSrc = imgSrcArr[i];
    }
  });
});

isMulColorEle.addEventListener(
  "change",
  (e) => (options.defaultVal.isMulColor = e.target.checked)
);

singleColorValueEle.addEventListener(
  "input",
  (e) => (options.defaultVal.singleColor = e.target.value)
);
gradientRotate.addEventListener(
  "input",
  (e) => (options.defaultVal.mulColorPropertyType = e.target.value + "deg")
);

bgFilterOpacity.addEventListener(
  "change",
  (e) =>
    (options.defaultVal.bgImgOpacity = e.target.value == 0 ? e.target.value : 1)
);

bgChooseFile.addEventListener("change", (e) => {
  options.defaultVal.bgImgSrc = URL.createObjectURL(e.target.files[0]);
  imgSrcArr[imgSrcArr.length - 1] = URL.createObjectURL(e.target.files[0]);
});

// obj to ele
isMulColorEle.checked = options.defaultVal.isMulColor;
singleColorValueEle.value = options.defaultVal.singleColor;
mulColorsEle.forEach((e, i) => {
  e.value = colorConveter("rgbToHex", options.defaultVal.mulColors[i]);

  e.addEventListener("change", (ele) => {
    options.defaultVal.mulColors[i] = colorConveter(
      "hexToRGB",
      ele.target.value
    );
  });
});
mulColorProperty.forEach((e, i) => {
  if (e.checked) {
    options.defaultVal.mulColorProperty = e.value;
    options.defaultVal.mulColorPropertyType =
      e.value === "linear-gradient"
        ? options.defaultVal.linearGradientRotate
        : "circle";
  }
  e.addEventListener("change", (ele) => {
    options.defaultVal.mulColorProperty = ele.target.value;
    if (ele.target.value === "radial-gradient") {
      linearRotateRow.classList.add("hide");
      options.defaultVal.mulColorPropertyType = "circle";
    } else {
      linearRotateRow.classList.remove("hide");
      options.defaultVal.mulColorPropertyType = "0deg";
    }
  });
});

// NOTE: Applying default values to object
options.defaultVal.barInitialPosX = canvasCenterX;
options.defaultVal.barInitialPosY = canvasCenterY;
options.defaultVal.audioPositionX = canvasCenterX;
options.defaultVal.audioPositionY = canvasCenterY;
options.defaultVal.circleSpacingY = options.defaultVal.circleSize * 2;
options.defaultVal.circleSpacingX = options.defaultVal.circleSize * 2;
options.defaultVal.circlePositionX =
  canvasCenterX -
  (options.defaultVal.circleSize / 2) * options.defaultVal.circleNumOfLightsX +
  100;
options.defaultVal.circlePositionY =
  canvasCenterY -
  (options.defaultVal.circleSize / 2) * options.defaultVal.circleNumOfLightsY +
  100;
options.defaultVal.audioPositionX = canvasCenterX / 2;
options.defaultVal.audioPositionY = canvasCenterY / 2;

const ctx = canvas.getContext("2d");

const audio1 = document.querySelector("#audio1");
// audio1.src = "./Asset/Audio/Badass.mp3";

// alert :Important
audio1.addEventListener("playing", (e) => {
  options.defaultVal.isAudioPlaying = true;
  options.defaultVal.audioEndTime = parseInt(e.target.duration);
  audDiff =
    options.defaultVal.audioEndTime / options.defaultVal.circleColors.length;
  t2 = audDiff;
  audioPlayBtnEle.innerHTML = "&#9616;&#9616;";
  audioEndTimeEle.innerHTML = audioTime(options.defaultVal.audioEndTime);
});

audio1.addEventListener("timeupdate", (e) => {
  options.defaultVal.audioCurrentTime = parseInt(e.target.currentTime);
  // dummyTxt.innerHTML = audioTime(parseInt(e.target.currentTime));
  seekBGEle.style.width =
    (options.defaultVal.audioCurrentTime / options.defaultVal.audioEndTime) *
      100 +
    "%";
  audioStartTimeEle.innerHTML = audioTime(options.defaultVal.audioCurrentTime);
});

audio1.addEventListener("ended", () => {
  if (options.defaultVal.randomPlay === false) {
    options.defaultVal.isAudioPlaying = false;
    audioFileEle.value = audioFileEle.defaultValue;
    audio1.loop = false;
    audio1.pause();
    audio1.currentTime = 0;
    audioPlayBtnEle.innerHTML = "&#10148;";
  }
});

// NOTE: Apply object value to HTML element
barCountEle.value = options.defaultVal.barCount;
barInitialPosXEle.value = Math.floor(
  canvas.width / 2 -
    options.defaultVal.barWidth * (options.defaultVal.barCount / 4)
);
barInitialPosYEle.value = Math.floor(options.defaultVal.barInitialPosY);
barMirXYEle.checked = options.defaultVal.barMirXY;
barMirMinXYEle.checked = options.defaultVal.barMirMinXY;
barMirMinXMinYEle.checked = options.defaultVal.barMirMinXMinY;
barMirXMinYEle.checked = options.defaultVal.barMirXMinY;
barSpacingEle.value = options.defaultVal.barSpacing;
audioPositionXEle.value = options.defaultVal.audioPositionX;
audioPositionYEle.value = options.defaultVal.audioPositionY;

circleLightShowEle.value = options.defaultVal.circleLightShow;
circleNumOfLightsXEle.value = options.defaultVal.circleNumOfLightsX;
circleNumOfLightsYEle.value = options.defaultVal.circleNumOfLightsY;
circleSizeEle.value = options.defaultVal.circleSize;
circlePositionXEle.value = options.defaultVal.circlePositionX;
circlePositionYEle.value = options.defaultVal.circlePositionY;
circleSpacingXEle.value = options.defaultVal.circleSpacingX;
circleSpacingYEle.value = options.defaultVal.circleSpacingY;
circleMaxInValEle.value = options.defaultVal.circleMaxInVal;
circleFlickerOpacityEle.value = options.defaultVal.circleFlickerOpacity;
randomPlayEle.checked = options.defaultVal.randomPlay;
audioPlayerDivEle.style.right = `${options.defaultVal.audioPositionX}px`;
audioPlayerDivEle.style.top = `${options.defaultVal.audioPositionY}px`;

// Alert : Show controls position
showControlsBtnOut.style.top = "110px";
showControlsBtnOut.style.right = "180px";

// Alert : lively
audioThumbnailEle.src = "./Asset/BG/bg_01.jpg";

if (randomPlayEle.checked) {
  options.defaultVal.isAudioPlaying = true;
  audioFileEle.files = null;
  audio1.src = "./Asset/Audio/Badass.mp3";
  audio1.loop = true;
  audio1.play();
  audioPlayBtnEle.innerHTML = "&#9616;&#9616;";
}

for (let i = 0; i < options.defaultVal.circleColors.length; i++) {
  const v = colorConveter("rgbToHex", options.defaultVal.circleColors[i]);
  circleColorsTableData.innerHTML += `
  <input type='color' id='circleColorEle' value=${v} />
  `;
}

for (let i = 0; i < options.defaultVal.colors.length; i++) {
  const e = colorConveter("rgbToHex", options.defaultVal.colors[i]);
  barColorsTableDataEle.innerHTML += `
  <input type='color' id='barColorEle' value='${e}'/>`;
}

const audioCtx = new window.AudioContext();
let audioSource, analyser;

audioSource = audioCtx.createMediaElementSource(audio1);
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = options.defaultVal.barCount;
let bufferLength, dataArray;
bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array(bufferLength);

function animate() {
  // canvas.style.filter = "url('./Asset/BG/bg_04.jpg')";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.filter = `
  blur(${options.defaultVal.filterBlur}px) 
  brightness(${options.defaultVal.filterBrightness}) 
  contrast(${options.defaultVal.filterContrast}) 
  grayscale(${options.defaultVal.filterGrayscale}%) 
  hue-rotate(${options.defaultVal.filterHueRotate}deg) 
  invert(${options.defaultVal.filterInvert}) 
  opacity(${options.defaultVal.filterOpacity}) 
  saturate(${options.defaultVal.filterSaturate}%) 
  sepia(${options.defaultVal.filterSapia}%) 
  drop-shadow(${options.defaultVal.filterShadowLeftRight}px ${options.defaultVal.filterShadowUpDown}px ${options.defaultVal.filterShadowBlur}px ${options.defaultVal.filterShadowColor})
  `;
  audioPlayerDivEle.style.left = `${options.defaultVal.audioPositionX}px`;
  audioPlayerDivEle.style.top = `${options.defaultVal.audioPositionY}px`;
  audioPlayerDivEle.style.transform = `scale(${options.defaultVal.audioScaleX}%,${options.defaultVal.audioScaleY}%)`;
  audioThumbnailEle.style.borderRadius = `${options.defaultVal.audioThumbnailBorder}px`;

  // Alert : show controls
  if (showControlsBtnOut.checked == false) {
    if (topPos <= 0) {
      topPos = 0;
    }
    if (rightPos <= 0) {
      rightPos = 0;
    }
    showControlsBtnOut.style.top = (topPos -= 1) + "px";
    showControlsBtnOut.style.right = (rightPos -= 1) + "px";
  } else {
  }

  if (options.defaultVal.audioThumbnailBorder >= 100) {
    audioThumbnailEle.style.rotate = `${thumbnailRotate++}deg`;
  }

  // Alert : BG
  if (options.defaultVal.bgColor) {
    bodyStyle.backgroundImage = "none";
    if (options.defaultVal.isMulColor) {
      singleColor.classList.add("hide");
      multiColor.forEach((e) => {
        e.classList.remove("hide");
      });
      options.defaultVal.mulColorProperty === "linear-gradient"
        ? multiColor[2].classList.remove("hide")
        : multiColor[2].classList.add("hide");

      bodyStyle.backgroundImage = `${options.defaultVal.mulColorProperty}(${options.defaultVal.mulColorPropertyType},${options.defaultVal.mulColors[0]},
        ${options.defaultVal.mulColors[1]},${options.defaultVal.mulColors[2]},${options.defaultVal.mulColors[3]},${options.defaultVal.mulColors[4]})`;
    } else {
      singleColor.classList.remove("hide");
      multiColor.forEach((e) => {
        e.classList.add("hide");
      });
      bodyStyle.backgroundColor = options.defaultVal.singleColor;
    }
  } else {
    bodyStyle.backgroundImage = `url(${options.defaultVal.bgImgSrc})`;
  }

  bodyStyle.background = options.defaultVal.bgImgOpacity;

  analyser.getByteFrequencyData(dataArray);

  if (options.defaultVal.barMirXY) {
    drawBar(
      options.defaultVal.colors,
      options.defaultVal.barPosX,
      options.defaultVal.barInitialPosX,
      options.defaultVal.barInitialPosY,
      options.defaultVal.barWidth,
      options.defaultVal.barHeight,
      options.defaultVal.barHeightAdd,
      -1,
      options.defaultVal.barSpacing,
      options.defaultVal.barRoundedCorner
    );
  }

  if (options.defaultVal.barMirMinXY) {
    drawBar(
      options.defaultVal.colors,
      options.defaultVal.barPosX,
      options.defaultVal.barInitialPosX,
      options.defaultVal.barInitialPosY,
      -options.defaultVal.barWidth,
      options.defaultVal.barHeight,
      options.defaultVal.barHeightAdd,
      -1,
      options.defaultVal.barSpacing * -1,
      options.defaultVal.barRoundedCorner
    );
  }

  if (options.defaultVal.barMirMinXMinY) {
    drawBar(
      options.defaultVal.colors,
      options.defaultVal.barPosX,
      options.defaultVal.barInitialPosX,
      options.defaultVal.barInitialPosY - 0.5,
      -options.defaultVal.barWidth,
      options.defaultVal.barHeight,
      options.defaultVal.barHeightAdd,
      1,
      options.defaultVal.barSpacing * -1,
      options.defaultVal.barRoundedCorner
    );
  }

  if (options.defaultVal.barMirXMinY) {
    drawBar(
      options.defaultVal.colors,
      options.defaultVal.barPosX,
      options.defaultVal.barInitialPosX,
      options.defaultVal.barInitialPosY - 0.5,
      options.defaultVal.barWidth,
      options.defaultVal.barHeight,
      options.defaultVal.barHeightAdd,
      1,
      options.defaultVal.barSpacing,
      options.defaultVal.barRoundedCorner
    );
  }

  // ALERT: Circle Lights///////////////////////////

  if (options.defaultVal.circleLightShow) {
    // canvas.style.filter = `drop-shadow(${"10"}px ${"110"}px ${"2"}px rgba(0,0,0,${1}))`;
    if (
      options.defaultVal.circleNumOfLightsX === 0 ||
      options.defaultVal.circleNumOfLightsY === 0
    ) {
      return;
    } else {
      let circleMulPosX = options.defaultVal.circlePositionX;
      let circleMulPosY = options.defaultVal.circlePositionY;
      for (let i = 1; i <= options.defaultVal.circleNumOfLightsY; i++) {
        for (let j = 1; j <= options.defaultVal.circleNumOfLightsX; j++) {
          if (options.defaultVal.audioCurrentTime >= audDiff) {
            audDiff += t2;
            lightColorChange++;
            if (lightColorChange >= options.defaultVal.circleColors.length) {
              lightColorChange = 0;
            }
          }
          const sum = dataArray.reduce(function (acc, cVal) {
            return acc - cVal;
          });
          drawCircle(
            circleMulPosX, //posX
            circleMulPosY, //posY
            options.defaultVal.circleSize,
            colorApplyingFunctionLights(
              options.defaultVal.circleColors[lightColorChange],
              0,
              options.defaultVal.circleMaxInVal,
              sum - options.defaultVal.circleFlickerOpacity
            )
          );
          circleMulPosX += options.defaultVal.circleSpacingX;
        }
        circleMulPosX = options.defaultVal.circlePositionX;
        circleMulPosY += options.defaultVal.circleSpacingY;
      }
    }
  }

  requestAnimationFrame(animate);
}
animate();

barCountEle.addEventListener("change", (e) => {
  analyser.fftSize = parseInt(e.target.value);
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
});
barWidthEle.addEventListener("change", (e) => {
  options.defaultVal.barWidth = parseInt(e.target.value);
});
barHeightEle.addEventListener("change", (e) => {
  options.defaultVal.barHeightAdd = parseInt(e.target.value);
});

barInitialPosXEle.addEventListener("change", (e) => {
  options.defaultVal.barInitialPosX = parseInt(e.target.value);
});
barInitialPosYEle.addEventListener("change", (e) => {
  options.defaultVal.barInitialPosY = parseInt(e.target.value);
});

barMirXYEle.addEventListener("change", (e) => {
  options.defaultVal.barMirXY = e.target.checked ? true : false;
});

barMirMinXYEle.addEventListener("change", (e) => {
  options.defaultVal.barMirMinXY = e.target.checked ? true : false;
});

barMirMinXMinYEle.addEventListener("change", (e) => {
  options.defaultVal.barMirMinXMinY = e.target.checked ? true : false;
});

barMirXMinYEle.addEventListener("change", (e) => {
  options.defaultVal.barMirXMinY = e.target.checked ? true : false;
});

barSpacingEle.addEventListener("change", (e) => {
  options.defaultVal.barSpacing = parseInt(e.target.value);
});

barRoundedCornerEle.addEventListener("change", (e) => {
  options.defaultVal.barRoundedCorner = parseInt(Math.floor(e.target.value));
});

// NOTE: Filter Effects
filterBlurEle.addEventListener("change", (e) => {
  options.defaultVal.filterBlur = parseInt(e.target.value);
});
filterBrightnessEle.addEventListener("change", (e) => {
  options.defaultVal.filterBrightness = parseFloat(e.target.value);
});
filterContrastEle.addEventListener("change", (e) => {
  options.defaultVal.filterContrast = parseInt(e.target.value);
});
filterGrayscaleEle.addEventListener("change", (e) => {
  options.defaultVal.filterGrayscale = parseInt(e.target.value);
});
filterHueRotateEle.addEventListener("change", (e) => {
  options.defaultVal.filterHueRotate = parseInt(e.target.value);
});
filterInvertEle.addEventListener("change", (e) => {
  options.defaultVal.filterInvert = parseFloat(e.target.value);
});
filterOpacityEle.addEventListener("change", (e) => {
  options.defaultVal.filterOpacity = parseFloat(e.target.value);
});
filterSaturateEle.addEventListener("change", (e) => {
  options.defaultVal.filterSaturate = parseInt(e.target.value);
});
filterSapiaEle.addEventListener("change", (e) => {
  options.defaultVal.filterSapia = parseInt(e.target.value);
});
filterShadowLeftRightEle.addEventListener("change", (e) => {
  options.defaultVal.filterShadowLeftRight = parseInt(e.target.value);
});
filterShadowUpDownEle.addEventListener("change", (e) => {
  options.defaultVal.filterShadowUpDown = parseInt(e.target.value);
});
filterShadowBlurEle.addEventListener("change", (e) => {
  options.defaultVal.filterShadowBlur = parseInt(e.target.value);
});
filterShadowColorEle.addEventListener("change", (e) => {
  options.defaultVal.filterShadowColor = e.target.value;
});

circleLightShowEle.addEventListener("change", () => {
  options.defaultVal.circleLightShow = !options.defaultVal.circleLightShow;
});
circleNumOfLightsXEle.addEventListener("change", (e) => {
  options.defaultVal.circleNumOfLightsX = parseInt(Math.floor(e.target.value));
});
circleNumOfLightsYEle.addEventListener("change", (e) => {
  options.defaultVal.circleNumOfLightsY = parseInt(Math.floor(e.target.value));
});

circleSizeEle.addEventListener("change", (e) => {
  options.defaultVal.circleSize = parseInt(Math.floor(e.target.value));
});
circlePositionXEle.addEventListener("change", (e) => {
  options.defaultVal.circlePositionX = parseInt(Math.floor(e.target.value));
});
circlePositionYEle.addEventListener("change", (e) => {
  options.defaultVal.circlePositionY = parseInt(Math.floor(e.target.value));
});
circleSpacingXEle.addEventListener("change", (e) => {
  options.defaultVal.circleSpacingX = parseInt(Math.floor(e.target.value));
});
circleSpacingYEle.addEventListener("change", (e) => {
  options.defaultVal.circleSpacingY = parseInt(Math.floor(e.target.value));
});
circleMaxInValEle.addEventListener("change", (e) => {
  options.defaultVal.circleMaxInVal = parseInt(Math.floor(e.target.value));
});
circleFlickerOpacityEle.addEventListener("change", (e) => {
  options.defaultVal.circleFlickerOpacity = parseInt(
    Math.floor(e.target.value)
  );
});
circleAddMoreColor.addEventListener("click", () => {
  options.defaultVal.circleColors.push(defaultColorVal);
  circleColorsTableData.innerHTML = "";
  audDiff =
    options.defaultVal.audioEndTime / options.defaultVal.circleColors.length;
  t2 = audDiff;
  for (let i = 0; i < options.defaultVal.circleColors.length; i++) {
    const v = colorConveter("rgbToHex", options.defaultVal.circleColors[i]);
    circleColorsTableData.innerHTML += `
    <input type='color' id='circleColorEle' value=${v} />
    `;
  }
  const circleColorEle = document.querySelectorAll("#circleColorEle"); /////////////////////////////////////////
  circleColorEle.forEach((e, i) => {
    e.addEventListener("change", (ele) => {
      options.defaultVal.circleColors[i] = colorConveter(
        "hexToRGB",
        ele.target.value
      );
    });
  });
});
circleSubMoreColor.addEventListener("click", () => {
  if (options.defaultVal.circleColors.length <= 1) {
    return;
  } else {
    options.defaultVal.circleColors.pop(defaultColorVal);
    circleColorsTableData.innerHTML = "";
    audDiff =
      options.defaultVal.audioEndTime / options.defaultVal.circleColors.length;
    t2 = audDiff;
    for (let i = 0; i < options.defaultVal.circleColors.length; i++) {
      const v = colorConveter("rgbToHex", options.defaultVal.circleColors[i]);
      circleColorsTableData.innerHTML += `
    <input type='color' id='circleColorEle' value=${v} />
    `;
    }
    const circleColorEle = document.querySelectorAll("#circleColorEle"); /////////////////////////////////////////
    circleColorEle.forEach((e, i) => {
      e.addEventListener("change", (ele) => {
        options.defaultVal.circleColors[i] = colorConveter(
          "hexToRGB",
          ele.target.value
        );
      });
    });
  }
});
barAddMoreColorEle.addEventListener("click", () => {
  options.defaultVal.colors.push(defaultColorVal);
  barColorsTableDataEle.innerHTML = "";
  for (let i = 0; i < options.defaultVal.colors.length; i++) {
    const e = colorConveter("rgbToHex", options.defaultVal.colors[i]);
    barColorsTableDataEle.innerHTML += `
    <input type='color' id='barColorEle' value='${e}'/>`;
  }
  const barColorEle = document.querySelectorAll("#barColorEle"); /////////////////////////////////////////
  barColorEle.forEach((e, i) => {
    e.addEventListener("change", (ele) => {
      options.defaultVal.colors[i] = colorConveter(
        "hexToRGB",
        ele.target.value
      );
    });
  });
});
barSubMoreColorEle.addEventListener("click", () => {
  options.defaultVal.colors.pop(defaultColorVal);
  barColorsTableDataEle.innerHTML = "";
  for (let i = 0; i < options.defaultVal.colors.length; i++) {
    const e = colorConveter("rgbToHex", options.defaultVal.colors[i]);
    barColorsTableDataEle.innerHTML += `
    <input type='color' id='barColorEle' value='${e}'/>`;
  }
  const barColorEle = document.querySelectorAll("#barColorEle"); /////////////////////////////////////////
  barColorEle.forEach((e, i) => {
    e.addEventListener("change", (ele) => {
      options.defaultVal.colors[i] = colorConveter(
        "hexToRGB",
        ele.target.value
      );
    });
  });
});

audioFileEle.addEventListener("change", (e) => {
  randomPlayEle.checked = false;
  if (
    e.target.files[0].type === "audio/mpeg" ||
    e.target.files[0].type === "audio/mp3"
  ) {
    options.defaultVal.isAudioPlaying = true;
    audio1.loop = false;
    audio1.src = null;
    audio1.src = URL.createObjectURL(e.target.files[0]);
    audio1.play();
    audioPlayBtnEle.innerHTML = "&#9616;&#9616;";
  } else {
    options.defaultVal.isAudioPlaying = false;
    audioPlayBtnEle.innerHTML = "&#10148;";
    audio1.loop = false;
    alert("Please select a valid format");
  }
});

randomPlayEle.addEventListener("change", (e) => {
  if (e.target.checked) {
    options.defaultVal.isAudioPlaying = true;
    audioFileEle.value = audioFileEle.defaultValue;
    audio1.src = "./Asset/Audio/Badass.mp3";
    audio1.loop = true;
    audio1.play();
    audioPlayBtnEle.innerHTML = "&#9616;&#9616;";
  } else {
    // audio1.src = null;
    options.defaultVal.isAudioPlaying = false;
    audio1.pause();
    audio1.loop = false;
    audio1.currentTime = 0;
    audioPlayBtnEle.innerHTML = "&#10148;";
  }
});

audioPositionXEle.addEventListener("change", (e) => {
  options.defaultVal.audioPositionX = parseInt(e.target.value);
});

audioPositionYEle.addEventListener("change", (e) => {
  options.defaultVal.audioPositionY = parseInt(e.target.value);
});

audioScaleEleX.addEventListener("change", (e) => {
  options.defaultVal.audioScaleX = parseInt(e.target.value);
});
audioScaleEleY.addEventListener("change", (e) => {
  options.defaultVal.audioScaleY = parseInt(e.target.value);
});

audioThumbnailBorderEle.addEventListener("change", (e) => {
  options.defaultVal.audioThumbnailBorder = parseInt(e.target.value);
});
audioPlayBtnEle.addEventListener("click", () => {
  if (options.defaultVal.isAudioPlaying) {
    audioPlayBtnEle.innerHTML = "&#10148;";
    audio1.pause();
    audio1.loop = false;
    options.defaultVal.isAudioPlaying = false;
  } else {
    audioPlayBtnEle.innerHTML = "&#9616;&#9616;";
    audio1.play();
    audio1.loop = false;
    options.defaultVal.isAudioPlaying = true;
  }
});
// Alert:Show controls
showControlsBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    mainControlContainer.classList.remove("hide");
    showControlsBtn.checked = false;
    showControlsBtnOut.checked = true;

    showControlsBtnOut.classList.add("hide");
  } else {
    showControlsBtnOut.classList.remove("hide");
    showControlsBtn.checked = true;
    showControlsBtnOut.style.top = "110px";
    showControlsBtnOut.style.right = "180px";
    showControlsBtnOut.checked = false;
    showControlsBtnOut.style.opacity = 1;

    setTimeout(() => {
      showControlsBtnOut.style.opacity = 0.3;
    }, 3000);
    mainControlContainer.classList.add("hide");
  }
});

showControlsBtnOut.addEventListener("change", (e) => {
  if (e.target.checked) {
    e.target.classList.add("hide");
    mainControlContainer.classList.remove("hide");
    showControlsBtn.checked = true;
    showControlsBtnOut.checked = false;
  } else {
    mainControlContainer.classList.add("hide");
    showControlsBtn.checked = false;
    showControlsBtnOut.checked = true;
    showControlsBtnOut.style.right = "180px";
    showControlsBtnOut.style.top = "110px";
    e.target.classList.remove("hide");
    showControlsBtnOut.style.opacity = 1;
  }
});

function drawBar(
  colorArr,
  barXpos,
  barIniPosX,
  barIniPosY,
  barW,
  barH,
  barHAdd,
  barHCal,
  barSpacing,
  barRoundedCorner
) {
  const cArr = colorArr.length > 1 ? colorArr : colorArr.push(colorArr[0]);
  const d = Math.floor(analyser.fftSize / 2 / (cArr.length - 1));
  barXpos = barIniPosX;
  let a = 0,
    b = d;
  for (let i = 0; i < cArr.length - 1; i++) {
    for (let j = a; j < b; j++) {
      let arr1, arr2;
      arr1 = cArr[i];
      arr2 = cArr[i + 1] || cArr[i];
      ctx.fillStyle = colorApplyingFunction(arr1, arr2, a, b - 1, j);
      barH = dataArray[j];

      ctx.beginPath();
      ctx.roundRect(barXpos, barIniPosY, barW, (barH + barHAdd) * barHCal, [
        barRoundedCorner,
      ]);
      ctx.fill();
      barXpos += barW + barSpacing;
    }
    a += d;
    b += d;
  }
}

function colorApplyingFunction(cVal1, cVal2, inValMin, inValMax, inVal) {
  const cArr1 = cVal1.replace(/rgb/g, "").replace(/[()]/g, "").split(",");
  const cArr2 = cVal2.replace(/rgb/g, "").replace(/[()]/g, "").split(",");

  let r, g, b;
  let r1 = Math.floor(cArr1[0]),
    r2 = Math.floor(cArr2[0]),
    g1 = Math.floor(cArr1[1]),
    g2 = Math.floor(cArr2[1]),
    b1 = Math.floor(cArr1[2]),
    b2 = Math.floor(cArr2[2]);

  r = linear(
    Math.floor(inValMin),
    Math.floor(inValMax),
    Math.floor(inVal),
    r1,
    r2
  );
  g = linear(
    Math.floor(inValMin),
    Math.floor(inValMax),
    Math.floor(inVal),
    g1,
    g2
  );
  b = linear(
    Math.floor(inValMin),
    Math.floor(inValMax),
    Math.floor(inVal),
    b1,
    b2
  );
  return `rgb(${r},${g},${b})`;
}

function colorApplyingFunctionLights(cVal1, minIn, maxIn, inVal) {
  const cArr1 = cVal1.replace(/rgb/g, "").replace(/[()]/g, "").split(",");
  // console.log("cVal1:", cVal1);
  let transparentColor = -linear(minIn, maxIn, inVal, 0, 1);
  return `rgb(${cArr1[0]},${cArr1[1]},${cArr1[2]},${transparentColor})`;
}

function drawCircle(posX, posY, circleSize, circleColor) {
  ctx.beginPath();
  ctx.fillStyle = circleColor;
  // ctx.arc(posX, posY, size, startRad, endRad);
  ctx.arc(posX, posY, circleSize, 0, Math.PI * 2);
  ctx.fill();
}

// alert:Don't delete this linear function
// NOTE:Linear
function linear(minInput, maxInput, inValue, minOut, maxOut) {
  if (minInput === maxInput) {
    return false;
  }
  // Define the input values
  const inputMin = minInput;
  const inputMax = maxInput;
  const inputValue = inValue; // Change this value as your input

  // Define the output range
  const outputMin = minOut;
  const outputMax = maxOut;

  // Calculate the proportion
  const inputRange = inputMax - inputMin;
  const outputRange = outputMax - outputMin;
  const proportion = (inputValue - inputMin) / inputRange;

  // Calculate the output value
  const outputValue = proportion * outputRange + outputMin;

  // console.log(
  //   `For input value ${inputValue}, the output value is ${outputValue}`
  // );

  return outputValue;
}

// alert:Don't delete this funciton
function colorConveter(type, colorVal) {
  switch (type) {
    case "rgbToHex":
      let rgbArr = colorVal.replace(/rgb/g, "").replace(/[()]/g, "").split(",");
      let hexR = parseInt(rgbArr[0]).toString(16);
      let hexG = parseInt(rgbArr[1]).toString(16);
      let hexB = parseInt(rgbArr[2]).toString(16);
      return `#${hexR.length !== 1 ? hexR : "0" + hexR}${
        hexG.length !== 1 ? hexG : "0" + hexG
      }${hexB.length !== 1 ? hexB : "0" + hexB}`;

    case "hexToRGB":
      // Note : Search a string for the character "colorVal"
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorVal);
      return result
        ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
            result[3],
            16
          )})`
        : null;

    default:
      return colorVal;
  }
}

const circleColorEle = document.querySelectorAll("#circleColorEle"); /////////////////////////////////////////
circleColorEle.forEach((e, i) => {
  e.addEventListener("change", (ele) => {
    options.defaultVal.circleColors[i] = colorConveter(
      "hexToRGB",
      ele.target.value
    );
  });
});

const barColorEle = document.querySelectorAll("#barColorEle"); /////////////////////////////////////////
barColorEle.forEach((e, i) => {
  e.addEventListener("change", (ele) => {
    options.defaultVal.colors[i] = colorConveter("hexToRGB", ele.target.value);
  });
});

function audioTime(aTime) {
  if (aTime < 60) {
    return aTime < 10 ? "00:0" + aTime : "00:" + aTime;
  } else {
    let m = Math.floor(parseInt(aTime / 60));
    let sec = aTime % 60;
    let s = sec.toString().length === 1 ? "0" + sec : sec;
    return m.toString().length === 1 ? "0" + m + ":" + s : m + ":" + s;
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvasCenterX = Math.floor(canvas.width / 2);
  canvasCenterY = Math.floor(canvas.height / 2);
});
