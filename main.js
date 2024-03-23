/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  font-size: 20px;
  font-family: "roboto", sans-serif;
}
:root a {
  text-decoration: none;
}
:root svg {
  height: 20px;
  width: 20px;
}
:root h1 {
  text-align: center;
  font-size: 2rem;
}

body {
  line-height: 1.5;
  background-color: white;
}

header {
  display: flex;
  flex-direction: column;
  text-align: center;
}
header .image-background {
  background: linear-gradient(-25deg, white 50%, #0891b2 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
header .image-background .image p {
  font-size: 2rem;
  color: white;
  margin-top: auto;
}
header .introduction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header .image {
  width: 60%;
  height: 400px;
  background-image: url("https://images.pexels.com/photos/7726308/pexels-photo-7726308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-position: center;
  display: flex;
}
header .image .my-name {
  color: white;
  font-size: 2rem;
  margin-left: auto;
  margin-top: auto;
}

.introduction-container {
  text-align: left;
  margin: 0px 10px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icons-container {
  align-self: center;
  display: flex;
  gap: 15px;
}
.icons-container .colored {
  color: black;
}

main {
  border: 1px solid black;
  text-align: center;
}
main .title {
  font-size: 2rem;
}
main .project-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
main .project-container .project {
  margin: 20px;
  display: flex;
  border: 1px solid black;
  border-radius: 0.1em;
  box-shadow: 2px 3px 10px gray;
  flex-direction: column;
}
main .project-container .project .project-screen-shot {
  min-height: 300px;
  min-width: 100px;
  background-color: green;
}
main .project-container .project .project-name-icons-wrapper {
  margin: 5px 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
main .project-container .project p {
  margin: 5px 15px;
  text-align: left;
}
main .project-container .project .description {
  padding-bottom: 60px;
}

footer {
  border: 1px solid black;
  background-color: #0891b2;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
footer .contact-container {
  margin: 10px;
}
footer .contact-info {
  font-size: 0.7rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
footer .icons-container {
  align-self: center;
  font-size: 2rem;
  display: flex;
  gap: 20px;
  padding-bottom: 50px;
}
footer .icons-container .colored {
  color: black;
}
footer .image {
  background-image: url("https://images.pexels.com/photos/7726308/pexels-photo-7726308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;
}

@media (min-width: 601px) {
  header {
    all: unset;
    background: linear-gradient(-25deg, white 50%, #0891b2 50%);
    display: block;
    padding: 70px;
  }
  header .image-background {
    all: unset;
    float: left;
    margin-top: -60px;
    margin-left: -30px;
    min-height: 200px;
  }
  header .image-background .image {
    display: block;
    width: auto;
    height: 60vh;
  }
  header .image-background .image p {
    position: relative;
    float: right;
    transform: translate(150px);
  }
  header .introduction-container {
    display: block;
    background-color: white;
    border: 1px black solid;
  }
  header .introduction-container h1 {
    display: inline;
  }
  header .icons-container {
    display: none;
  }
  main {
    text-align: left;
  }
  main .title {
    margin-left: 20px;
    margin-top: 10px;
  }
}
@media (min-width: 701px) {
  header {
    background: linear-gradient(-15deg, white 50%, #0891b2 50%);
  }
}
/**
 prioritize natural layout first
implementing grid layout for project-containers in main tag.
 starting change layout with media for header tag,
 starting change layout with media queries for footer
*/`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgFC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AAAD;;AAEA,gDAAA;AACA;;;;;;;;;;;EAWC,cAAA;AACD;;AACA;EACC,cAAA;AAED;;AAAA;;EAEC,gBAAA;AAGD;;AADA;;EAEC,YAAA;AAID;;AAFA;;;;EAIC,WAAA;EACA,aAAA;AAKD;;AAHA;EACC,yBAAA;EACA,iBAAA;AAMD;;AAHA;EACC,eAAA;EACA,iCAAA;AAMD;AALC;EACC,qBAAA;AAOF;AALC;EACC,YAAA;EACA,WAAA;AAOF;AALC;EACC,kBAAA;EACA,eAAA;AAOF;;AAHA;EAEC,gBAAA;EAEA,uBAAA;AAID;;AAGA;EAHC,aAAA;EACA,sBAAA;EAIA,kBAAA;AACD;AAAC;EACC,2DAAA;EAPD,aAAA;EACA,sBAAA;EAQC,mBAAA;AAGF;AADG;EACC,eAAA;EACA,YAAA;EACA,gBAAA;AAGJ;AACC;EAEC,aAAA;EACA,sBAAA;EACA,mBAAA;AAAF;AAEC;EACC,UAAA;EACA,aAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EAEA,aAAA;AADF;AAEE;EACC,YAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;AAAH;;AAKA;EACC,gBAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAFD;;AAIA;EACC,kBAAA;EACA,aAAA;EACA,SAAA;AADD;AAEC;EACC,YAAA;AAAF;;AAIA;EACC,uBAAA;EACA,kBAAA;AADD;AAEC;EACC,eAAA;AAAF;AAEC;EACC,aAAA;EAEA,4DAAA;EAEA,SAAA;AAFF;AAIE;EAEC,YAAA;EACA,aAAA;EACA,uBAAA;EACA,oBAAA;EACA,6BAAA;EACA,sBAAA;AAHH;AAKG;EACC,iBAAA;EACA,gBAAA;EACA,uBAAA;AAHJ;AAKG;EACC,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAHJ;AAKG;EACC,gBAAA;EACA,gBAAA;AAHJ;AAKG;EACC,oBAAA;AAHJ;;AAQA;EACC,uBAAA;EACA,yBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AALD;AAMC;EACC,YAAA;AAJF;AAMC;EACC,iBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAJF;AAMC;EACC,kBAAA;EACA,eAAA;EACA,aAAA;EACA,SAAA;EAIA,oBAAA;AAPF;AAIE;EACC,YAAA;AAFH;AAMC;EACC,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;AAJF;;AASC;EAMA;IACC,UAAA;IACA,2DAAA;IACA,cAAA;IACA,aAAA;EAXA;EAYA;IACC,UAAA;IACA,WAAA;IAKA,iBAAA;IACA,kBAAA;IACA,iBAAA;EAdD;EAeC;IACC,cAAA;IACA,WAAA;IACA,YAAA;EAbF;EAcE;IACC,kBAAA;IACA,YAAA;IACA,2BAAA;EAZH;EAgBA;IACC,cAAA;IACA,uBAAA;IACA,uBAAA;EAdD;EAeC;IACC,eAAA;EAbF;EAuBA;IACC,aAAA;EArBD;EAwBD;IAKC,gBAAA;EA1BA;EAsBA;IACC,iBAAA;IACA,gBAAA;EApBD;AACF;AAnCC;EA4DA;IACC,2DAAA;EAtBA;AACF;AA2BA;;;;;CAAA","sourcesContent":["//* main scss style sheet\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: \"\";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n:root {\n\tfont-size: 20px;\n\tfont-family: \"roboto\", sans-serif;\n\ta {\n\t\ttext-decoration: none;\n\t}\n\tsvg {\n\t\theight: 20px;\n\t\twidth: 20px;\n\t}\n\th1 {\n\t\ttext-align: center;\n\t\tfont-size: 2rem;\n\t}\n}\n\nbody {\n\t// body is display flex with direction column\n\tline-height: 1.5;\n\n\tbackground-color: white;\n}\n// header includes  an image(bg-img with text inside), and paragraph container, and an icons' container\n@mixin flexColumn() {\n\tdisplay: flex;\n\tflex-direction: column;\n}\nheader {\n\t@include flexColumn();\n\ttext-align: center;\n\t.image-background {\n\t\tbackground: linear-gradient(-25deg, white 50%, #0891b2 50%);\n\t\t@include flexColumn();\n\t\talign-items: center;\n\t\t.image {\n\t\t\tp {\n\t\t\t\tfont-size: 2rem;\n\t\t\t\tcolor: white;\n\t\t\t\tmargin-top: auto;\n\t\t\t}\n\t\t}\n\t}\n\t.introduction-container {\n\t\t// margin-top: 100px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\t.image {\n\t\twidth: 60%;\n\t\theight: 400px;\n\t\tbackground-image: url(\"https://images.pexels.com/photos/7726308/pexels-photo-7726308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\t// moving the p down to bottom\n\t\tdisplay: flex;\n\t\t.my-name {\n\t\t\tcolor: white;\n\t\t\tfont-size: 2rem;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-top: auto;\n\t\t}\n\t}\n}\n\n.introduction-container {\n\ttext-align: left;\n\tmargin: 0px 10px 0px 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n.icons-container {\n\talign-self: center;\n\tdisplay: flex;\n\tgap: 15px;\n\t.colored {\n\t\tcolor: black;\n\t}\n}\n\nmain {\n\tborder: 1px solid black;\n\ttext-align: center;\n\t.title {\n\t\tfont-size: 2rem;\n\t}\n\t.project-container {\n\t\tdisplay: grid;\n\t\t// the goal: resize from 1 column -> 2 column in grid layout\n\t\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); // if the web -page reach 600px width:\n\t\t// or the project reach 500px width -> start to separate project into 2 columns;\n\t\tgap: 20px;\n\n\t\t.project {\n\t\t\t// give it a little border blur\n\t\t\tmargin: 20px;\n\t\t\tdisplay: flex;\n\t\t\tborder: 1px solid black;\n\t\t\tborder-radius: 0.1em;\n\t\t\tbox-shadow: 2px 3px 10px gray;\n\t\t\tflex-direction: column;\n\n\t\t\t.project-screen-shot {\n\t\t\t\tmin-height: 300px;\n\t\t\t\tmin-width: 100px;\n\t\t\t\tbackground-color: green;\n\t\t\t}\n\t\t\t.project-name-icons-wrapper {\n\t\t\t\tmargin: 5px 15px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tflex-direction: row;\n\t\t\t}\n\t\t\tp {\n\t\t\t\tmargin: 5px 15px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t.description {\n\t\t\t\tpadding-bottom: 60px;\n\t\t\t}\n\t\t}\n\t}\n}\nfooter {\n\tborder: 1px solid black;\n\tbackground-color: #0891b2;\n\tcolor: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n\t.contact-container {\n\t\tmargin: 10px;\n\t}\n\t.contact-info {\n\t\tfont-size: 0.7rem;\n\t\tmargin: 10px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 30px;\n\t}\n\t.icons-container {\n\t\talign-self: center;\n\t\tfont-size: 2rem;\n\t\tdisplay: flex;\n\t\tgap: 20px;\n\t\t.colored {\n\t\t\tcolor: black;\n\t\t}\n\t\tpadding-bottom: 50px;\n\t}\n\t.image {\n\t\tbackground-image: url(\"https://images.pexels.com/photos/7726308/pexels-photo-7726308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\twidth: 100%;\n\t\theight: 50vh; // doesn't work\n\t}\n}\n\n@mixin width-greater-than($width) {\n\t@media (min-width: ($width + 1)) {\n\t\t@content;\n\t}\n}\n\n@include width-greater-than(600px) {\n\theader {\n\t\tall: unset;\n\t\tbackground: linear-gradient(-25deg, white 50%, #0891b2 50%);\n\t\tdisplay: block;\n\t\tpadding: 70px;\n\t\t.image-background {\n\t\t\tall: unset;\n\t\t\tfloat: left;\n\t\t\t// position: relative;\n\n\t\t\t// right: 20px;\n\t\t\t// bottom: 20px;\n\t\t\tmargin-top: -60px;\n\t\t\tmargin-left: -30px;\n\t\t\tmin-height: 200px;\n\t\t\t.image {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: auto;\n\t\t\t\theight: 60vh;\n\t\t\t\tp {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttransform: translate(150px);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.introduction-container {\n\t\t\tdisplay: block;\n\t\t\tbackground-color: white;\n\t\t\tborder: 1px black solid;\n\t\t\th1 {\n\t\t\t\tdisplay: inline;\n\t\t\t}\n\t\t}\n\t\t// .introduction-container::before {\n\t\t// \tcontent: \"\";\n\t\t// \talign-self: flex-start;\n\t\t// \tdisplay: inline-block;\n\t\t// \theight: 30vh;\n\t\t// \twidth: 90px;\n\t\t// }\n\t\t.icons-container {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\tmain {\n\t\t.title {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-top: 10px;\n\t\t}\n\t\ttext-align: left;\n\t}\n}\n@include width-greater-than(700px) {\n\theader {\n\t\tbackground: linear-gradient(-15deg, white 50%, #0891b2 50%);\n\t}\n}\n@include width-greater-than(1000px) {\n\t//\n}\n/**\n prioritize natural layout first\nimplementing grid layout for project-containers in main tag.\n starting change layout with media for header tag,\n starting change layout with media queries for footer\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

console.log('hello');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxXQUFXLGVBQWUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFV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LCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dpdGh1YnRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9naXRodWJ0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2l0aHVidGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG46cm9vdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOnJvb3Qgc3ZnIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbjpyb290IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5pbWFnZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yNWRlZywgd2hpdGUgNTAlLCAjMDg5MWIyIDUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgLmltYWdlLWJhY2tncm91bmQgLmltYWdlIHAge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbmhlYWRlciAuaW50cm9kdWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgLmltYWdlIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzcyNjMwOC9wZXhlbHMtcGhvdG8tNzcyNjMwOC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5oZWFkZXIgLmltYWdlIC5teS1uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uaW50cm9kdWN0aW9uLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLmljb25zLWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuLmljb25zLWNvbnRhaW5lciAuY29sb3JlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubWFpbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbm1haW4gLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5tYWluIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdCB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICBib3gtc2hhZG93OiAycHggM3B4IDEwcHggZ3JheTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1haW4gLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0IC5wcm9qZWN0LXNjcmVlbi1zaG90IHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxubWFpbiAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QgLnByb2plY3QtbmFtZS1pY29ucy13cmFwcGVyIHtcbiAgbWFyZ2luOiA1cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxubWFpbiAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QgcCB7XG4gIG1hcmdpbjogNXB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5tYWluIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdCAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuZm9vdGVyIC5jb250YWN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweDtcbn1cbmZvb3RlciAuY29udGFjdC1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuZm9vdGVyIC5pY29ucy1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbmZvb3RlciAuaWNvbnMtY29udGFpbmVyIC5jb2xvcmVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuZm9vdGVyIC5pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzc3MjYzMDgvcGV4ZWxzLXBob3RvLTc3MjYzMDguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjVkZWcsIHdoaXRlIDUwJSwgIzA4OTFiMiA1MCUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDcwcHg7XG4gIH1cbiAgaGVhZGVyIC5pbWFnZS1iYWNrZ3JvdW5kIHtcbiAgICBhbGw6IHVuc2V0O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuICBoZWFkZXIgLmltYWdlLWJhY2tncm91bmQgLmltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDYwdmg7XG4gIH1cbiAgaGVhZGVyIC5pbWFnZS1iYWNrZ3JvdW5kIC5pbWFnZSBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MHB4KTtcbiAgfVxuICBoZWFkZXIgLmludHJvZHVjdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICB9XG4gIGhlYWRlciAuaW50cm9kdWN0aW9uLWNvbnRhaW5lciBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIGhlYWRlciAuaWNvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIG1haW4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgbWFpbiAudGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkge1xuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTVkZWcsIHdoaXRlIDUwJSwgIzA4OTFiMiA1MCUpO1xuICB9XG59XG4vKipcbiBwcmlvcml0aXplIG5hdHVyYWwgbGF5b3V0IGZpcnN0XG5pbXBsZW1lbnRpbmcgZ3JpZCBsYXlvdXQgZm9yIHByb2plY3QtY29udGFpbmVycyBpbiBtYWluIHRhZy5cbiBzdGFydGluZyBjaGFuZ2UgbGF5b3V0IHdpdGggbWVkaWEgZm9yIGhlYWRlciB0YWcsXG4gc3RhcnRpbmcgY2hhbmdlIGxheW91dCB3aXRoIG1lZGlhIHF1ZXJpZXMgZm9yIGZvb3RlclxuKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpb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YkY7RUF1QkE7SUFDQyxhQUFBO0VBckJEO0VBd0JEO0lBS0MsZ0JBQUE7RUExQkE7RUFzQkE7SUFDQyxpQkFBQTtJQUNBLGdCQUFBO0VBcEJEO0FBQ0Y7QUFuQ0M7RUE0REE7SUFDQywyREFBQTtFQXRCQTtBQUNGO0FBMkJBOzs7OztDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vKiBtYWluIHNjc3Mgc3R5bGUgc2hlZXRcXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbjpyb290IHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJyb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcdGEge1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHR9XFxuXFx0c3ZnIHtcXG5cXHRcXHRoZWlnaHQ6IDIwcHg7XFxuXFx0XFx0d2lkdGg6IDIwcHg7XFxuXFx0fVxcblxcdGgxIHtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdH1cXG59XFxuXFxuYm9keSB7XFxuXFx0Ly8gYm9keSBpcyBkaXNwbGF5IGZsZXggd2l0aCBkaXJlY3Rpb24gY29sdW1uXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLy8gaGVhZGVyIGluY2x1ZGVzICBhbiBpbWFnZShiZy1pbWcgd2l0aCB0ZXh0IGluc2lkZSksIGFuZCBwYXJhZ3JhcGggY29udGFpbmVyLCBhbmQgYW4gaWNvbnMnIGNvbnRhaW5lclxcbkBtaXhpbiBmbGV4Q29sdW1uKCkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuaGVhZGVyIHtcXG5cXHRAaW5jbHVkZSBmbGV4Q29sdW1uKCk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdC5pbWFnZS1iYWNrZ3JvdW5kIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTI1ZGVnLCB3aGl0ZSA1MCUsICMwODkxYjIgNTAlKTtcXG5cXHRcXHRAaW5jbHVkZSBmbGV4Q29sdW1uKCk7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHQuaW1hZ2Uge1xcblxcdFxcdFxcdHAge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQuaW50cm9kdWN0aW9uLWNvbnRhaW5lciB7XFxuXFx0XFx0Ly8gbWFyZ2luLXRvcDogMTAwcHg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcblxcdC5pbWFnZSB7XFxuXFx0XFx0d2lkdGg6IDYwJTtcXG5cXHRcXHRoZWlnaHQ6IDQwMHB4O1xcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzcyNjMwOC9wZXhlbHMtcGhvdG8tNzcyNjMwOC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXFxcIik7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0XFx0Ly8gbW92aW5nIHRoZSBwIGRvd24gdG8gYm90dG9tXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHQubXktbmFtZSB7XFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5pbnRyb2R1Y3Rpb24tY29udGFpbmVyIHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdG1hcmdpbjogMHB4IDEwcHggMHB4IDIwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMTBweDtcXG59XFxuLmljb25zLWNvbnRhaW5lciB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxNXB4O1xcblxcdC5jb2xvcmVkIHtcXG5cXHRcXHRjb2xvcjogYmxhY2s7XFxuXFx0fVxcbn1cXG5cXG5tYWluIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0LnRpdGxlIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcdC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHQvLyB0aGUgZ29hbDogcmVzaXplIGZyb20gMSBjb2x1bW4gLT4gMiBjb2x1bW4gaW4gZ3JpZCBsYXlvdXRcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7IC8vIGlmIHRoZSB3ZWIgLXBhZ2UgcmVhY2ggNjAwcHggd2lkdGg6XFxuXFx0XFx0Ly8gb3IgdGhlIHByb2plY3QgcmVhY2ggNTAwcHggd2lkdGggLT4gc3RhcnQgdG8gc2VwYXJhdGUgcHJvamVjdCBpbnRvIDIgY29sdW1ucztcXG5cXHRcXHRnYXA6IDIwcHg7XFxuXFxuXFx0XFx0LnByb2plY3Qge1xcblxcdFxcdFxcdC8vIGdpdmUgaXQgYSBsaXR0bGUgYm9yZGVyIGJsdXJcXG5cXHRcXHRcXHRtYXJnaW46IDIwcHg7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjFlbTtcXG5cXHRcXHRcXHRib3gtc2hhZG93OiAycHggM3B4IDEwcHggZ3JheTtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcblxcdFxcdFxcdC5wcm9qZWN0LXNjcmVlbi1zaG90IHtcXG5cXHRcXHRcXHRcXHRtaW4taGVpZ2h0OiAzMDBweDtcXG5cXHRcXHRcXHRcXHRtaW4td2lkdGg6IDEwMHB4O1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQucHJvamVjdC1uYW1lLWljb25zLXdyYXBwZXIge1xcblxcdFxcdFxcdFxcdG1hcmdpbjogNXB4IDE1cHg7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0bWFyZ2luOiA1cHggMTVweDtcXG5cXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQuZGVzY3JpcHRpb24ge1xcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5mb290ZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0LmNvbnRhY3QtY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW46IDEwcHg7XFxuXFx0fVxcblxcdC5jb250YWN0LWluZm8ge1xcblxcdFxcdGZvbnQtc2l6ZTogMC43cmVtO1xcblxcdFxcdG1hcmdpbjogMTBweDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0Z2FwOiAzMHB4O1xcblxcdH1cXG5cXHQuaWNvbnMtY29udGFpbmVyIHtcXG5cXHRcXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0Z2FwOiAyMHB4O1xcblxcdFxcdC5jb2xvcmVkIHtcXG5cXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxuXFx0XFx0fVxcblxcdFxcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xcblxcdH1cXG5cXHQuaW1hZ2Uge1xcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzcyNjMwOC9wZXhlbHMtcGhvdG8tNzcyNjMwOC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXFxcIik7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiA1MHZoOyAvLyBkb2Vzbid0IHdvcmtcXG5cXHR9XFxufVxcblxcbkBtaXhpbiB3aWR0aC1ncmVhdGVyLXRoYW4oJHdpZHRoKSB7XFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICgkd2lkdGggKyAxKSkge1xcblxcdFxcdEBjb250ZW50O1xcblxcdH1cXG59XFxuXFxuQGluY2x1ZGUgd2lkdGgtZ3JlYXRlci10aGFuKDYwMHB4KSB7XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRhbGw6IHVuc2V0O1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjVkZWcsIHdoaXRlIDUwJSwgIzA4OTFiMiA1MCUpO1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdHBhZGRpbmc6IDcwcHg7XFxuXFx0XFx0LmltYWdlLWJhY2tncm91bmQge1xcblxcdFxcdFxcdGFsbDogdW5zZXQ7XFxuXFx0XFx0XFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0XFx0XFx0Ly8gcG9zaXRpb246IHJlbGF0aXZlO1xcblxcblxcdFxcdFxcdC8vIHJpZ2h0OiAyMHB4O1xcblxcdFxcdFxcdC8vIGJvdHRvbTogMjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAtNjBweDtcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogLTMwcHg7XFxuXFx0XFx0XFx0bWluLWhlaWdodDogMjAwcHg7XFxuXFx0XFx0XFx0LmltYWdlIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRcXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDYwdmg7XFxuXFx0XFx0XFx0XFx0cCB7XFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdFxcdFxcdFxcdGZsb2F0OiByaWdodDtcXG5cXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTBweCk7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0LmludHJvZHVjdGlvbi1jb250YWluZXIge1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdFxcdGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcblxcdFxcdFxcdGgxIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmU7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHRcXHQvLyAuaW50cm9kdWN0aW9uLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG5cXHRcXHQvLyBcXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRcXHQvLyBcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdFxcdC8vIFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHQvLyBcXHRoZWlnaHQ6IDMwdmg7XFxuXFx0XFx0Ly8gXFx0d2lkdGg6IDkwcHg7XFxuXFx0XFx0Ly8gfVxcblxcdFxcdC5pY29ucy1jb250YWluZXIge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRtYWluIHtcXG5cXHRcXHQudGl0bGUge1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAyMHB4O1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDEwcHg7XFxuXFx0XFx0fVxcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0fVxcbn1cXG5AaW5jbHVkZSB3aWR0aC1ncmVhdGVyLXRoYW4oNzAwcHgpIHtcXG5cXHRoZWFkZXIge1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTVkZWcsIHdoaXRlIDUwJSwgIzA4OTFiMiA1MCUpO1xcblxcdH1cXG59XFxuQGluY2x1ZGUgd2lkdGgtZ3JlYXRlci10aGFuKDEwMDBweCkge1xcblxcdC8vXFxufVxcbi8qKlxcbiBwcmlvcml0aXplIG5hdHVyYWwgbGF5b3V0IGZpcnN0XFxuaW1wbGVtZW50aW5nIGdyaWQgbGF5b3V0IGZvciBwcm9qZWN0LWNvbnRhaW5lcnMgaW4gbWFpbiB0YWcuXFxuIHN0YXJ0aW5nIGNoYW5nZSBsYXlvdXQgd2l0aCBtZWRpYSBmb3IgaGVhZGVyIHRhZyxcXG4gc3RhcnRpbmcgY2hhbmdlIGxheW91dCB3aXRoIG1lZGlhIHF1ZXJpZXMgZm9yIGZvb3RlclxcbiovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnNvbGUubG9nKCdoZWxsbycpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9