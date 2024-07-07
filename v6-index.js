/*! api-component - 1.0.45 */
!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports["api-component"] = n())
    : (t["api-component"] = n());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var t = {
          d: (n, e) => {
            for (var o in e)
              t.o(e, o) &&
                !t.o(n, o) &&
                Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
          },
          o: (t, n) => Object.prototype.hasOwnProperty.call(t, n),
          r: (t) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          },
        },
        n = {};
      t.r(n), t.d(n, { default: () => Y });
      var e = function () {
          function t(t) {
            var n = document.getElementById("quantity");
            if (n) {
              var e = parseInt(n.value);
              (e += t) < 1 && (e = 1),
                (n.value = e),
                (function (t) {
                  var n = document.getElementById("productPrice"),
                    e = document.getElementById("showProduct");
                  if (n && e) {
                    var o = parseFloat(n.value) * t;
                    e.textContent = o.toFixed(2);
                  }
                })(e);
            }
          }
          var n = document.getElementById("decrease");
          null !== n &&
            n.addEventListener("click", function () {
              return t(-1);
            });
          var e = document.getElementById("increase");
          null !== e &&
            e.addEventListener("click", function () {
              return t(1);
            }),
            document
              .querySelectorAll(".contact-form .input-text")
              .forEach(function (t) {
                t.addEventListener("input", function () {
                  "" !== t.value.trim()
                    ? t.classList.add("not-empty")
                    : t.classList.remove("not-empty");
                });
              });
        },
        o =
          "\n\n[data-loader=\"circle-side\"] {\n\tposition: absolute;\n\twidth: 50px;\n\theight: 50px;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-left: -25px;\n\tmargin-top: -25px;\n\t-webkit-animation: circle infinite .95s linear;\n\t-moz-animation: circle infinite .95s linear;\n\t-o-animation: circle infinite .95s linear;\n\tanimation: circle infinite .95s linear;\n\tborder: 3px solid #02b843;\n\tborder-top-color: rgba(0, 0, 0, 0.2);\n\tborder-right-color: rgba(0, 0, 0, 0.2);\n\tborder-bottom-color: rgba(0, 0, 0, 0.2);\n\t-webkit-border-radius: 100%;\n\t-moz-border-radius: 100%;\n\t-ms-border-radius: 100%;\n\tborder-radius: 100%;\n}\n\n.checkbox{\ndisplay: flex;\n    gap: 1rem;\n    align-items: center;\n}\n  .checkbox-wrapper-7 .tgl {\n    display: none;\n  }\n  .checkbox-wrapper-7 .tgl,\n  .checkbox-wrapper-7 .tgl:after,\n  .checkbox-wrapper-7 .tgl:before,\n  .checkbox-wrapper-7 .tgl *,\n  .checkbox-wrapper-7 .tgl *:after,\n  .checkbox-wrapper-7 .tgl *:before,\n  .checkbox-wrapper-7 .tgl + .tgl-btn {\n    box-sizing: border-box;\n  }\n  .checkbox-wrapper-7 .tgl::-moz-selection,\n  .checkbox-wrapper-7 .tgl:after::-moz-selection,\n  .checkbox-wrapper-7 .tgl:before::-moz-selection,\n  .checkbox-wrapper-7 .tgl *::-moz-selection,\n  .checkbox-wrapper-7 .tgl *:after::-moz-selection,\n  .checkbox-wrapper-7 .tgl *:before::-moz-selection,\n  .checkbox-wrapper-7 .tgl + .tgl-btn::-moz-selection,\n  .checkbox-wrapper-7 .tgl::selection,\n  .checkbox-wrapper-7 .tgl:after::selection,\n  .checkbox-wrapper-7 .tgl:before::selection,\n  .checkbox-wrapper-7 .tgl *::selection,\n  .checkbox-wrapper-7 .tgl *:after::selection,\n  .checkbox-wrapper-7 .tgl *:before::selection,\n  .checkbox-wrapper-7 .tgl + .tgl-btn::selection {\n    background: none;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    width: 4em;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:after,\n  .checkbox-wrapper-7 .tgl + .tgl-btn:before {\n    position: relative;\n    display: block;\n    content: \"\";\n    width: 50%;\n    height: 100%;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:after {\n    left: 0;\n  }\n  .checkbox-wrapper-7 .tgl + .tgl-btn:before {\n    display: none;\n  }\n  .checkbox-wrapper-7 .tgl:checked + .tgl-btn:after {\n    left: 50%;\n  }\n\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn {\n    background: #fbfbfb;\n    border-radius: 2em;\n    padding: 2px;\n    transition: all 0.4s ease;\n    border: 1px solid #e8eae9;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:after {\n    border-radius: 2em;\n    background: #fbfbfb;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:hover:after {\n    will-change: padding;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active {\n    box-shadow: inset 0 0 0 2em #e8eae9;\n  }\n  .checkbox-wrapper-7 .tgl-ios + .tgl-btn:active:after {\n    padding-right: 0.8em;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn {\n    background: #86d993;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active {\n    box-shadow: none;\n  }\n  .checkbox-wrapper-7 .tgl-ios:checked + .tgl-btn:active:after {\n    margin-left: -0.8em;\n  }\n\n\n@-webkit-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@-moz-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@-o-keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n@keyframes circle {\n  0% {\n\t-webkit-transform: rotate(0);\n\t-moz-transform: rotate(0);\n\t-ms-transform: rotate(0);\n\t-o-transform: rotate(0);\n\ttransform: rotate(0);\n  }\n  100% {\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n\t-ms-transform: rotate(360deg);\n\t-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);\n  }\n}\n\n\nmain {\n  background: #f8f8f8;\n  position: relative;\n  z-index: 1;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #333;\n}\n\nh1,\nh2 {  \t\n  \tfont-weight: 700;  \t\n}\n\nhr {\n\tmargin: 15px 0 30px 0;\t\n\tborder-color: #ededed;\n}\n\np {\n\tmargin-top: 25px;\n\tmargin-bottom: 30px;\n}\n\na {\n\tcolor: #02b843;\n\ttext-decoration: none;\n\t-moz-transition: all 0.5s ease-in-out;\n\t-o-transition: all 0.5s ease-in-out;\n\t-webkit-transition: all 0.5s ease-in-out;\n\t-ms-transition: all 0.5s ease-in-out;\n\ttransition: all 0.5s ease-in-out;\n\toutline: none;\n}\na:hover, \na:focus,\na:visited {\n\tcolor: #333;\n\ttext-decoration: none;\n\toutline: none;\n}\n\nul,\nol {\n  list-style: none;\n  margin: 0 0 25px 0;\n  padding: 0;\n}\n\np {\n  margin-bottom: 25px;\n}\n\np.lead {\n  font-weight: 400;\n  font-size: 20px;\n  color: #555;  \n}\n\nstrong {\n  font-weight: 600;\n}\n\nlabel {\n\tcolor: #555;  \t\n  \tfont-size: 14px;\n  \tfont-weight: 500;  \n  \tmargin: 0;\n}\n\nbutton:focus {\n\toutline: none;\n}\n\n.underline-link {\n\tcolor: #02b843;\n\ttext-decoration: none;\t\n\toutline: none;\n}\n.underline-link:hover {\n\tcolor: #02b843;\n\ttext-decoration: underline;\n\toutline: none;\n}\n\n/* Modal Window */\n\n.btn-modal {\n\tborder: none;\n\tfont-family: inherit;\n\tcolor: #fff;\n\tbackground: #02b843;\n\tcursor: pointer;\n\tpadding: 7px 15px;\n\tdisplay: inline-block;\n\toutline: 0;\n\tfont-size: 15px;\n\t-webkit-transition: all .3s;\n\t-moz-transition: all .3s;\n\ttransition: all .3s;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\tborder-radius: 3px;\n\tfont-weight: 400;\n}\n\n.btn-modal:hover {\n\topacity: 0.7;\n}\n\n.modal-header .close {\n\tcolor: #000 !important;\n}\n\n.alert-text-strong {\n\tcolor: #02b843;\n\tfont-weight: 700;  \n}\n\nbody.modal-open {\n\toverflow: auto;\t\n\tpadding: 0 !important;\t\n}\n\nbody.modal-open .mm-slideout{\n\tz-index: inherit;\n\tpadding:0;\n}\n\n.modal {\n    background: rgba(0, 0, 0, 0.5);\n}\n\n/* Header\n==================================== */\nheader {\n\tbackground-color: #fff;\n\tmin-height: 55px;\n\tpadding: 10px 0;\n\tborder-bottom: 1px solid transparent;\n}\n\nheader.main-header {\n\twidth: 100%;\n\tz-index: 2;\n\tposition: relative;\n\t-moz-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-ms-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\nheader.main-header.sticky {\n\tborder-bottom: 1px solid #fff;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 2;\n}\n\nheader.main-header.active {\n\tborder-bottom: 1px solid #ddd;\n}\n\nheader.static {\n\tposition: static;\n\tborder-bottom: 1px solid #ddd;\n\tz-index: 2;\n\tposition: relative;\n}\n\n/* Header Menu Color */\n\n.main-menu > ul > li span:hover > a {\n    color: #02b843;\n}\n\n.main-menu ul ul {    \n    border-top: 2px solid #02b843;\n}\n\n.main-menu ul ul li:hover > a {   \n    color: #02b843;   \n}\n\n.main-menu ul ul li span > a:hover {\t\n\tcolor: #02b843;\n}\n\n/* Header Menu Chevron Down */\n\n.main-menu a i {\n\tfont-size: 9px;\n\tmargin-left: 2px;\n}\n\n/* Header Icons */\n\nul#menuIcons {\n\tfloat: right;\n\tposition: relative;\n\ttop: 3px;\n\tmargin: -1px 0 0 0;\n}\n\nul#menuIcons li {\n\tdisplay: inline-block;\n\tposition: relative;\n\tpadding: 0;\n\tmargin-left: 15px;\n}\n\nul#menuIcons li i {\n  \tfont-size: 34px;  \n}\n\nul#menuIcons li a {\n  \tcolor: #02b843;\n}\n\nul#menuIcons li a:hover {\n  \tcolor: #333;\n}\n\n/* Logo */\n\n#logo h1 {\n\tmargin: 0;\n\tpadding: 0;\n\tline-height: 1;\n}\n\n#logo h1 a {\n\twidth: 149px;\n\theight: 35px;\n\tdisplay: block;\n\tbackground: url(../img/logo.green.svg) no-repeat 0 0;\n\tbackground-size: 149px 35px;\n\ttext-indent: -9999px;\n}\n\n/* Sub Header\n==================================== */\n\n.sub-header {\n\tbackground-color: #02b843;\n\tpadding: 15px 0;\n\tmargin-top: 59px;\t\n}\n\n.sub-header h1 {\n    color: #fff;\n    margin: 0;\n\tfont-size: 24px;\n\tfont-weight: 500;\n}\n\n/* Footer\n==================================== */\n\nfooter.main-footer {\n\tpadding-top: 30px;\n\tpadding-bottom: 30px;\t\n\tcolor: #555;\n\tbackground: #fff;\n\tborder-top: 1px solid #ddd;\t\n}\n\nfooter.main-footer ul.nav-links li i {\n\tfont-size: 13px;\n}\n\n.footer-heading {\n\tmargin-bottom: 1.25rem;\n\tfont-weight: 600;\n}\n\n.footer-link {\n\tcolor: #555;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tline-height: 1.8;\t\n}\n  \n.footer-link:hover, .footer-link:focus {\n\ttext-decoration: underline;\n} \n\n.contact-links i {\n\tcolor: #02b843;\n\tmargin-right: 10px;\n\tfont-size: 18px;\n\tvertical-align: middle;\n}\n\n.social-link {\n\tcolor: #999;\n\topacity: 0.6;\n\tfont-size: 20px;\n\tfont-weight: 400;\n\tmargin-right: 10px;\n}\n\n.social-links li {\n\tdisplay: inline-block;\n}\n\nfooter #copy {\n\ttext-align: right;\n\tfont-size: 13px;\n\tfont-size: 0.8125rem;\n\tcolor: #999;\n}\n\n/* Sub Footer Links */\n\nul#subFooterLinks {\n\tmargin: 0;\n\tfont-size: 13px;\n\tfont-size: 0.8125rem;\n\tcolor: #999;\n}\n\nul#subFooterLinks li {\n\tdisplay: inline-block;\n\tmargin-right: 15px;\n}\n\nul#subFooterLinks li:first-child {\n\tmargin-right: 20px;\n}\n\nul#subFooterLinks li:last-child:after {\n\tcontent: \"\";\n}\n\nul#subFooterLinks li a {\n\tcolor: #999\n}\n\nul#subFooterLinks li a:hover {\n\ttext-decoration: underline;\n}\n\nul#subFooterLinks li:after {\n\tcontent: \"|\";\n\tfont-weight: 300;\n\tposition: relative;\n\tleft: 10px;\n}\n\nul#subFooterLinks i {\n\tcolor: #02b843;\t\n}\n\n/* Containers\n==================================== */\n\n#orderContainer,\n#personalDetails {  \n\tbackground: #fff;  \n  \tmargin-bottom: 30px;\n\tpadding: 30px !important;\n\tborder: 1px solid #ddd;\t\n}\n\n.order {\n\tpadding: 60px 0;\n}\n.multiple-item-form{\n  width: 90%;\n  margin: 0 auto;\n}\n.option-box,\n.order-box {  \n\tposition: relative;\n\tbackground: #fff;\n  \tmargin: 0 0 30px 0;\n\tpadding: 30px 15px;\n\tborder: 1px solid #ddd;\t\t\n}\n\n.option-box-header {\n\tmargin: 0 15px 10px 15px;\n\twidth: 100%;\n\tborder-bottom: 2px dotted #ddd;\n}\n\n.order-box-header {\n\tmargin: 0 15px 20px 15px;\n\twidth: 100%;\n\tborder-bottom: 2px dotted #ddd;\t\n}\n\n.option-box-header h3,\n.order-box-header h3 {\n\tfont-size: 20px;\t\n\tcolor: #555;\t\n}\n\n.option-box-header p,\n.order-box-header p {\t\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin-bottom: 20px;\n\tcolor: #999;\n}\n\t.order-summary{\n\tdisplay: flex;\n    justify-content: space-between;\n    align-items: center;\n\t\t    font-size: 14px;\n    font-weight: 600;\n\t\tmargin: 1rem 0.5rem;\n\t}\n\n.option-box-link,\n.option-box-link:focus,\n.option-box-link:active,\n.option-box-link:visited {\n\tcolor: #555;\n    font-size: 11px;\n    font-weight: 500;\n    border: 1px solid #ddd;\n    background: #fff;\n    margin-left: 5px;\n    padding: 4px 8px;\n    position: absolute;\n    top: -1px;\n    right: -1px;\n}\n\n.option-box-link:hover {\n\tbackground: #02b843;\n\tborder: 1px solid #02b843;\n\tcolor: #fff;\n}\n\n/* Form Elements\n==================================== */\n\n/* Fields, Textareas */\n\ninput.form-control,\nselect.form-control,\ntextarea.form-control {\n\t-webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n\tbackground: transparent;\n\tborder: none;\n\tborder: 1px solid #ddd;\n\tborder-radius: 0;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\ttransition: none;\n\theight: 40px;\n  \tfont-family: 'Karla', sans-serif;\n  \tfont-size: 14px;\n\tfont-weight: 400;\n\tpadding: 10px;\n\tresize: none;\n}\n\ninput.form-control:focus,\ntextarea.form-control:focus {\n\tbackground: transparent;\n\tborder-color: #02b843;\n\toutline: none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tcolor: #555;\n\t-webkit-transition: all 0.9s ease;\n\ttransition: all 0.9s ease;\n}\n\ninput.form-control:disabled {\n\tborder: none;\n}\n\n#inputMessage {\n\theight: 80px;\t\n}\n\n#total {\n  \ttext-align: right;\n}\n\n.summaryInput {\n\twidth: 100%;\n\tfont-family: 'Poppins', sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tbackground: #fff;\n\tborder: none;\n\ttext-align: end;\n}\n\n/* Single Option */\n\ninput.form-control.single-option {\t\n\tborder: 1px solid #02b843;\n\tmargin-top: 20px;\n  \tpadding: 0 10px;\n  \theight: 45px;\n  \tfont-family: 'Poppins', sans-serif;\n  \tfont-size: 14px;\n\tfont-weight: 400;\t\n\ttext-align: center;\n}\n\n.form-control:disabled, .form-control[readonly] {\n\tbackground-color: #fff;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n/* Range Slider Input */\n\ninput.form-control.qty-input {\n\tborder: 1px solid #ddd;\n\tmargin-top: 20px;\n  \tpadding: 0 10px;\n  \theight: 45px;\n  \tfont-family: 'Karla', sans-serif;\n  \tfont-size: 14px;\n  \tfont-weight: 400;\n}\n\ninput.form-control.qty-input.standalone-slider-round-input {\n  \tmargin-top: 15px;\n}\n\ninput.form-control.qty-input.standalone-slider-flat-input {\n  \tmargin-top: 10px;\n}\n\n.form-group {\n    margin-bottom: 10px;\n}\n\n/* Rounded Range Slider */\n\n.irs {    \n    font-family: 'Karla', sans-serif;\n}\n\n.irs--round {\n\tmargin-top: 20px;\n\theight: 45px;\n}\n\n.irs--round .irs-line {\n    top: 20px;\n    height: 5px;\n    background-color: #ddd;\n    border-radius: 0;\n}\n\n.irs--round .irs-bar {  \n\tbackground-color: #02b843;\n\theight: 5px;\n\ttop: 20px;\n\tborder-radius: 0;\n}\n\n.irs-from, .irs-to, .irs-single {\n    top: -13px;    \n}\n\n.irs--round .irs-from:before, .irs--round .irs-to:before, .irs--round .irs-single:before {  \n  \tborder-top-color: #02b843;\n}\n\n.irs--round .irs-from, .irs--round .irs-to, .irs--round .irs-single {  \n\tbackground-color: #02b843;\n\tborder-radius: 0;\n\ttop: -15px;\t  \n}\n\n.irs--round .irs-handle {\n\ttop: 10px;\n\twidth: 24px;\n\theight: 24px;\n\tborder: 2px solid #02b843;\n\tcursor: pointer;  \n}\n\n/* Flat Range Slider */\n\n.irs--flat { \n  \tmargin-top: 13px;\n}\n\n.irs--flat .irs-bar { \n\tbackground-color: #02b843;\n}\n\n.irs--flat .irs-from, .irs--flat .irs-to, .irs--flat .irs-single {  \n\tfont-size: 14px;  \n\tpadding: 0 5px;\n\tbackground-color: #02b843;\n\tborder-radius: 0;\n\ttop: -1px;\n\tcursor: pointer;\n}\n\n.irs--flat .irs-handle > i:first-child {\n  \tbackground-color: #02b843;\n}\n\n.irs--flat .irs-handle.state_hover > i:first-child, .irs--flat .irs-handle:hover > i:first-child {\n  \tbackground-color: #02b843;\n}\n\n.irs--flat .irs-line {  \n\tbackground-color: #ddd;\n\tborder-radius: 0;\n}\n\n.irs--flat .irs-bar--single {\n  \tborder-radius: 0;\n}\n\n.irs--flat .irs-from:before, .irs--flat .irs-to:before, .irs--flat .irs-single:before {  \n  \tborder-top-color: #02b843;\n}\n\n.irs--flat .irs-handle {\n\tcursor: pointer;  \n}\n\n/* Ribbon Left */\n\n.ribbon-left {\n\tposition: absolute;\n    left: -5px;\n    top: -5px;\n    z-index: 1;\n    overflow: hidden;\n    width: 75px;\n    height: 75px;\n\ttext-align: right;\n}\n\n.ribbon-left span.left {\n    font-size: 10px;\n    font-weight: 700;\n    font-style: normal;\n    color: #555;\n\ttext-align: center;\n\ttext-transform: uppercase;\n    line-height: 20px;\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    width: 100px;\n    display: block;\n    background: #ffda8f;    \n    -webkit-box-shadow: 0 3px 10px -5px #000;\n    -moz-box-shadow: 0 3px 10px -5px #000;\n    box-shadow: 0 3px 10px -5px #000;\n    text-shadow: 1px 1px 2px rgba(0,0,0,.25);\n    position: absolute;\n    top: 19px;\n    left: -21px;\n}\n\n.ribbon-left span.left::before,\n.ribbon-left span.left::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    z-index: -1;\n    border-bottom: 3px solid transparent;\n    border-top: 3px solid #ffda8f;\n}\n\n.ribbon-left span.left::before {\n    left: 0;\n    border-left: 3px solid #ffda8f;\n    border-right: 3px solid transparent;\n}\n\n.ribbon-left span.left::after {\n    right: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid #ffda8f;\n}\n\n\n\n/* Placeholders */\n\n.form-control::-webkit-input-placeholder { /* Chrome */\n\tcolor: #ccc;\n\tfont-style: italic;\n}\n\n.form-control:-ms-input-placeholder { /* IE 10+ */\n\tcolor: #ccc;\n\tfont-style: italic;\n}\n\n.form-control::-moz-placeholder { /* Firefox 19+ */\n  \tcolor: #ccc;\n\topacity: 1;\n\tfont-style: italic;\n}\n\n.form-control:-moz-placeholder { /* Firefox 4 - 18 */\n  \tcolor: #ccc;\n\topacity: 1;\n\tfont-style: italic;\n}\n\n/* Form Buttons */\n\n.btn-form-func {\n\tbackground: #02b843;\n\tborder-radius: 4px;\n\tborder: 2px solid #02b843;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: 12px 30px 12px 16px;\n\tposition: relative;\n\ttext-decoration: none;\n\tline-height: 1;\n\twidth: 100%;\n\tfont-weight: 600;\n\tmargin-bottom: 10px;\n}\n\n.btn-form-func:hover {\n\tcolor: #fff;\n}\n\n.btn-form-func .btn-form-func-content {\n\tfont-size: 1em;\n\tline-height: 1.2;\n\tpadding: 0 15px;\n\tposition: relative;\n\tright: 0;\n\tdisplay: block;\n\ttext-align: left;\n}\n\n.btn-form-func .icon {\n\tborder-left: 1px solid #fff;\n\tposition: absolute;\n\tright: 0;\n\ttext-align: center;\n\ttop: 50%;\n\ttransition: all 300ms ease;\n\ttransform: translateY(-50%);\n\twidth: 58px;\n\theight: 70%;\n}\n\n.btn-form-func .icon i {\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n}\n\n.btn-form-func:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tleft: 0;\n\tbackground-color: transparent;\n\topacity: 0;\n\ttransition: opacity 300ms ease;\n}\n\n\n.btn-form-func:hover .icon {\n\tborder-left: 0;\n\tfont-size: 1.4em;\n\twidth: 100%;\n}\n\n.btn-form-func:hover:after {\n  \topacity: .2;\n}\n\n.btn-form-func.btn-form-func-alt-color {\n\tbackground: #fff;\n\tborder-color: #02b843;\n\tcolor: #02b843 !important;\n}\n\n.btn-form-func.btn-form-func-alt-color .icon {\n  \tborder-left-color: #02b843;\n}\n\n.btn-form-func.btn-form-func-alt-color:after {\n  \tbackground-color: transparent;\n}\n\n/* Checkboxes */\n\nlabel.cbx.terms {    \n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0; \n\theight: 22px;\t\n}\n\nlabel.cbx {\t\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tmargin-top: 20px;\n\tborder: solid 1px #ddd;\n    height: 45px;\n    padding: 10px 15px;\n\twidth: 100%\n}\n\n.cbx {\n\t-webkit-user-select: none;\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n.cbx span {\n\tdisplay: inline-block;\n\tvertical-align: middle;  \n\tfont-size: 14px;\n\tfont-weight: 500;\n}\n\n.cbx span:first-child {\n\tposition: relative;\n\twidth: 18px;\n\theight: 18px;\n\ttransform: scale(1);\n\tvertical-align: middle;\n\tborder: 1px solid #02b843;\n\ttransition: all 0.2s ease;\n\tmargin-right: 10px;\t\n}\n\n.cbx span:first-child svg {\n\tposition: absolute;\n\ttop: 3px;\n    left: 2px;\n\tfill: none;\n\tstroke: #fff;\n\tstroke-width: 2;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-dasharray: 16px;\n\tstroke-dashoffset: 16px;\n\ttransition: all 0.3s ease;\n\ttransition-delay: 0.1s;\n\ttransform: translate3d(0, 0, 0);\n}\n\n.cbx span:first-child:before {\n\tcontent: \"\";\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #02b843;\n\tdisplay: block;\n\ttransform: scale(0);\n\topacity: 1;\n\tborder-radius: 50%;\n}\n\n.radio-label{\n  margin-left: 1rem;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.cbx:hover span:first-child {\n  \tborder-color: #02b843;\n}\n\n.inp-cbx {\n  \tdisplay: none;\n}\n\n.inp-cbx:checked + .cbx span:first-child {\n\tbackground: #02b843;\n\tborder-color: #02b843;\n\tanimation: wave 0.4s ease;\n}\n\n.inp-cbx:checked + .cbx span:first-child svg {\n  \tstroke-dashoffset: 0;\n}\n\n.inp-cbx:checked + .cbx span:first-child:before {\n\ttransform: scale(3.5);\n\topacity: 0;\n\ttransition: all 0.6s ease;\n}\n\n@keyframes wave {\n\t50% {\n\t\ttransform: scale(0.9);\n\t}\n}\n\n/* Terms Link */\n\n.terms-link,\n.terms-link:visited {\n\ttext-decoration: none;\n  \tcolor:#02b843;\n  \tmargin-left: 5px;\n  \ttransition: none;\n}\n\n.terms-link:hover {\n  \tcolor:#02b843;\n  \ttext-decoration: underline;\n}\n\n/* Form validation */\n\n.parsley-errors-list {  \n\tfont-size: 10px !important;\n\ttext-transform: uppercase;\n\tborder: 1px solid #02b843;\n\tbackground-color: #02b843;\n\tcolor: #fff;\n\tpadding: 2px 0 0 3px !important;\n\tmargin: 10px 0 10px 0 !important;\n\tlist-style-type: none;\n\topacity: 0;\n}\n\n.parsley-errors-list.filled {\n\topacity: 1;\n}\n\n.parsley-errors-list:before {\n\tcontent: '';\n\tdisplay: block;\n\tmargin-top: -9px;\n\tpointer-events: none;\n\tposition: absolute;\n\tborder-bottom: solid 6px #02b843;\n\tborder-left: solid 6px transparent;\n\tborder-right: solid 6px transparent;\n}\n\n/* Order Summary\n==================================== */\n\n/* Header */\n\n#orderContainer h3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n\tcolor: #555;\n\tmargin-bottom: 30px;\n}\n\n/* List */\n\n#orderContainer span {\t\n\tfont-size: 14px;\n\tfont-weight: 700;\n}\n\n#orderContainer ul {\n\tlist-style: none;\n  \tpadding: 15px 0;\n  \tmargin: 0;\n}\n\n#orderSumList li i {\n  \tcolor: #02b843;\n}\n\n#orderContainer ul li span.price,\n.price {\n\tfloat: right;\n}\n\n#orderContainer .total-container {    \n  \tborder-top: 2px dotted #ddd;\n  \tborder-bottom: 2px dotted #ddd;\n  \tpadding: 10px 0;\n  \tmargin: 10px 0;  \n}\n\n/* Order Summary Footer */\n\n.footer {\n  \tfont-size: 13px;\n  \tcolor: #ccc;\n}\n\n.footer i {\n  \tcolor: #f15e75;\n}\n\n.footer a {\n  \ttext-decoration: underline;\n}\n\n.footer small {\n\tcolor: #555;\n}\n\n/* Back To Top\n==================================== */\n\n#toTop {\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: black;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttext-align: center;\n\tpadding: 10px;\n\tline-height: 20px;\n\tposition: fixed;\n\tbottom: 15px;\n\tright: 15px;\n\tcursor: pointer;\n\tdisplay: none;\n\tcolor: #fff;\n\tfont-size: 20px;\n\t-webkit-border-radius: 3px;\n\t-moz-border-radius: 3px;\n\t-ms-border-radius: 3px;\n\tborder-radius: 3px;\n\tz-index: 2;\n}\n\n/* Success Submit\n==================================== */\n\n#success {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 300px;\n\theight: 190px;\n\tmargin-top: -85px;\n\tmargin-left: -150px;\n\ttext-align: center;\n}\n\n#success h4 {\n\tmargin-top: 10px;\n\tfont-family: 'Poppins', sans-serif;\n\tfont-size: 18px;\n}\n\n@-webkit-keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@-ms-keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@keyframes checkmark {\n\t0% { stroke-dashoffset: 50 }\n\t100% { stroke-dashoffset: 0 }\n}\n\n@-webkit-keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n@-ms-keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n@keyframes checkmark-circle {\n\t0% { stroke-dashoffset: 240 }\n\t100% { stroke-dashoffset: 480 }\n}\n\n.inlinesvg .svg svg {\n\tdisplay: inline\n}\n\n.icon-order-success svg path {\n\t-webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;\n\tanimation: checkmark 0.25s ease-in-out 0.7s backwards\n}\n\n.icon-order-success svg circle {\n\t-webkit-animation: checkmark-circle 0.6s ease-in-out backwards;\n\tanimation: checkmark-circle 0.6s ease-in-out backwards\n}\n\n/* Responsive\n==================================== */\n\n@media (max-width: 575px) {\t\n\t.hero-home .content h3 {\t  \n\t\tfont-size: 32px;\t\t\n\t}\n}\n\n@media (max-width: 767px) {\t\n\t/* Footer\n\t==================================== */\n\tfooter #copy {\t\t\n\t\ttext-align: left;\n\t\tmargin-bottom: 25px;\n\t}\n\tfooter ul li {\n\t\tmargin-bottom: 10px;\n\t}\n}\n\n@media (max-width: 991px) {\t\t\n\t/* Header\n\t==================================== */\n\theader.main-header.sticky {\t\t\n\t\tposition: static;\n\t}\n\theader .container {\t\n\t\twidth: 100% !important;\n\t\tmargin-right: auto !important;\n\t\tmargin-left: auto !important;\n\t\tpadding-right: 15px !important;\n\t\tpadding-left: 15px !important;\n\t\twidth: 100% !important;\n\t\tmax-width: 100%;\n\t}\n\t/* Header Menu Chevron Down */\n\t.main-menu a i {\n\t\tdisplay: none;\n\t}\t\n\t/* Header Icons */\n\tul#menuIcons {\t\t\n\t\tright: 0;\n\t\ttop: 2px;\n\t}\t\n\t/* Logo */\n\t#logo {\n\t\tposition: relative;\n\t\tleft: 45px;\n\t}\n\t/* Sub Header\n\t==================================== */\n\t.sub-header {\n\t\tmargin-top: 0;\n\t}\t\t\n\t/* Containers\n\t==================================== */\t\n\t#orderContainer,\n\t#personalDetails {\t\t\n\t\tmargin-bottom: 15px;\t\t\n\t}\n\t.order {\n\t\tpadding: 15px 0 0 0;\n\t}\t\t\t\n\t.option-box {\n\t\tmargin: 0 0 15px 0;\n\t}\n\t/* Color Panel */\n\t#colorPanel {\n\t\tdisplay: none;\n\t}\n\t\t.sizeColorAndQuantity{\n\t\tdisplay: none;\n\t\t}\n\n\n\n\n\n    \n\n",
        a = "basicForm",
        i = "input",
        r = "button",
        s = "label",
        l = "text",
        c = "div",
        d = "hiddenDiv",
        p = "navbar",
        u = "hero",
        m = "wrapper",
        b = "social",
        f = "standardForm",
        h = "multipleItemForm";
      var g =
          '\n<div id="carouselExample" class="carousel slide slideDivClass">\n<div class="carousel-inner" style="">\n  <div class="carousel-item active">\n    <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n  </div>\n  <div class="carousel-item">\n    <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n  </div>\n  <div class="carousel-item">\n    <img src="https://via.placeholder.com/250x150/78c5d6/fff/" class="d-block w-100 imgClass" alt="...">\n  </div>\n</div>\n<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\n  <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n  <span class="visually-hidden">Previous</span>\n</button>\n<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\n  <span class="carousel-control-next-icon" aria-hidden="true"></span>\n  <span class="visually-hidden">Next</span>\n</button>\n</div>\n\n<style>\n.slideDivClass{\nwidth: 600px;\n}\n.imgClass{\nheight: 366px;\n}\n@media only screen and (max-width: 600px) {\n.slideDivClass{\n  width: 100% !important;\n}\n.imgClass{\n  height: 15rem;\n}\n}\n</style>\n',
        v =
          '<blockquote class="alert alert-primary py-3 m-2 quote-block d-flex">\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"/></svg>\n\n  <span class="lead mx-2 quote-block-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</span>\n\n<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537"/></svg>\n  </blockquote>',
        x =
          '<h1 class="gjs-droppable h1 text-center font-weight-bold h1-block">Put your title here</h1>\n      \n  <style>\n      .h1{\n        font-weight: 800;\n        font-size: 3rem;\n      }\n  </style>\n  \n  ',
        w =
          '\n<div class="shadow-lg p-3 mb-5 bg-body rounded text-sect-head">\n <h1 class="heading text-sect-h1">Insert title here</h1>\n<p class="paragraph text-sect-p">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n</p></div>\n',
        y =
          '\n<div class="d-flex container text-center sect50Class gjs-droppable">\n<div class=" gjs-droppable sect50Div1"></div>\n<div class=" gjs-droppable sect50Div1"></div>\n</div>\n\n\n<style>\n.sect50Class{\nheight: 10rem;\nmargin-top: 1rem;\nmargin-bottom: 1rem;\n}\n.sect50Div1{\nwidth: 50%;\nheight: 100%;\n}\n</style>\n',
        k =
          '\n\n<div class="d-flex container text-center sect30Class gjs-droppable">\n<div class=" gjs-droppable sect30Div1"></div>\n<div class=" gjs-droppable sect30Div1"></div>\n<div class=" gjs-droppable sect30Div1"></div>\n</div>\n\n  <style>\n  .sect30Class{\n    height: 10rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .sect30Div1{\n    width: 50%;\n    height: 100%;\n  }\n  </style>\n',
        C =
          '\n<div class="d-flex container text-center sect37Class gjs-droppable">\n<div class=" gjs-droppable sect37Div1"></div>\n<div class=" gjs-droppable sect37Div2"></div>\n</div>\n\n<style>\n  .sect37Class{\n    height: 10rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .sect37Div1{\n    width: 30%;\n    height: 100%;\n  }\n  .sect37Div2{\n    width: 70%;\n    height: 100%;\n  }\n  </style>\n',
        z =
          '\n<section class="customer-review">\n<div class="container py-5 customer-review-container-div">\n  \x3c!-- head  --\x3e\n  <div class="row d-flex justify-content-center customer-review-flex-div">\n    <div class="col-md-10 col-xl-8 text-center customer-review-head-div">\n      <h3 class="fw-bold mb-4 customer-review-head-title">\n        Testimonials\n      </h3>\n      <p class="mb-4 pb-2 mb-md-5 pb-md-0 customer-review-head-desc">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,\n        error amet numquam iure provident voluptate esse quasi, veritatis\n        totam voluptas nostrum quisquam eum porro a pariatur veniam.\n      </p>\n    </div>\n  </div>\n\n  \x3c!-- body  --\x3e\n  <div class="row text-center customer-review-card-body">\n    <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div class="card-body py-4 mt-2 customer-review-inner-card">\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Teresa May\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Founder at ET Company\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-half text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Quod eos id officiis hic tenetur quae quaerat ad velit ab hic\n            tenetur.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div\n          class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n        >\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Maggie McLoan\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Photographer at Studio LA\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Autem, totam debitis suscipit saepe sapiente magnam officiis\n            quaerat necessitatibus odio assumenda perferendis labore\n            laboriosam.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class="col-md-4 mb-0 customer-review-card-container">\n      <div class="card customer-review-card">\n        <div\n          class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"\n        >\n          <div\n            class="d-flex justify-content-center mb-4 customer-review-body-head"\n          >\n            <img\n              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"\n              class="rounded-circle shadow-1-strong customer-review-head-img"\n              width="100"\n              height="100"\n            />\n          </div>\n          <h5 class="font-weight-bold customer-review-card-title">\n            Alexa Horwitz\n          </h5>\n          <h6\n            class="font-weight-bold my-3 customer-review-card-second-title"\n          >\n            Front-end Developer in NY\n          </h6>\n          <ul\n            class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"\n          >\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-fill text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"\n                />\n              </svg>\n            </li>\n            <li class="customer-review-card-star-li">\n              <svg\n                width="16"\n                height="16"\n                fill="currentColor"\n                class="bi bi-star-half text-warning"\n                viewBox="0 0 16 16"\n              >\n                <path\n                  d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"\n                />\n              </svg>\n            </li>\n          </ul>\n          <p class="mb-2 customer-review-card-p">\n            <svg\n              width="16"\n              height="16"\n              fill="currentColor"\n              class="bi bi-quote text-white"\n              viewBox="0 0 16 16"\n            >\n              <path\n                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"\n              /></svg\n            >Cras sit amet nibh libero, in gravida nulla metus scelerisque\n            ante sollicitudin commodo cras purus odio, vestibulum in\n            tempus viverra turpis.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</section>\n\n<style>\n.customer-review {\ncolor: #000;\nbackground-color: #f3f2f2;\n}\n.card {\nbackground-color: #303030;\ncolor: #fff;\n}\n</style>\n\n',
        H =
          '\n<div class="divider-table container">\n</div>\n\n\n<style>\n  .divider-table {\n    width: 100%;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    height: 0px;\n    border: 1px solid gray;\n  }\n</style>\n',
        M =
          '\n  <div class="card grid-item-card">\n          <img class="card-img-top grid-item-img" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>\n            <div class="card-body  d-flex flex-column grid-item-card-body-col mt-4">\n                <h1 class="card-titl p-2 text-center grid-item-card-body-col-head">Title here</h1>\n                <p class="card-text p-2 text-center grid-item-card-body-col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n                <a href="#" class="btn btn-success p-2 grid-item-card-body-btn"><span>Go somewhere</span></a>\n            </div>\n   </div>\n  \n  <style>\n    .grid-item-card{\n      width: 18rem;\n    }\n  </style>\n  ',
        L =
          '<div class="card list-container d-inline-flex">\n    <div class="list-item-cell list-inner-container">\n      <div class="list-item-content list-content">\n        <div class="list-item-row list-content-row">\n          <div class="list-cell-left list-content-cell-left">\n            <img class="card rounded list-content-cell-left-img" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>\n          </div>\n          <div class="list-cell-right list-content-cell-right">\n            <h1 class="card-title list-content-cell-title">Title here</h1>\n            <p class="card-text list-content-cell-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<style>\n  .list-inner-container{\n    margin: 13px;\n  }\n  .list-content{\n    margin: 13px;\n  }\n  .list-content-row{\n    display: flex;\n    gap: 1rem;\n  }\n  .3-list-content-cell-right{\n    margin-left: 10px;\n  }\n</style>\n\n',
        V =
          '\n<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups social-container">\n  <div class="btn-group" role="group" aria-label="First group social-inner-div">\n        <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">\n        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>\n      </svg><br> <span>Facebook</span></a>\n        <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">\n        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>\n      </svg><br> <span>Facebook</span></a>\n        <a href="#" class="btn btn-primary social-icon-link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">\n        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>\n  </svg><br> <span>Facebook</span></a>\n  </div>\n</div>\n\n<style>\n.btn-toolbar {\ndisplay: inline-block;\n}\n.social-icon-link{\nmargin: 12px;\n}\n.social-inner-div{\nmargin: 0.5rem;\n}\n</style>\n',
        B =
          '<nav class="navbar navbar-expand-lg bg-light">\n<div class="container-fluid">\n  <a class="navbar-brand" href="#"><span>Navbar</span></a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav justify-conter-center me-auto mb-2 mb-lg-0">\n      <li class="nav-item">\n        <a class="nav-link active" aria-current="page" href="#"><span>Home</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>About</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>Contact Us</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#"><span>Products</span></a>\n      </li>\n        </ul>\n      </li>\n    </ul>\n    <form class="d-flex" role="search">\n      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n      <button class="btn btn-outline-success" type="submit"><span>Search</span></button>\n    </form>\n  </div>\n</div>\n</nav>\n',
        S =
          '\n<div class="hero-container">\n<p class="hero-text">GO TO SPACE</p>\n<p class="text-center text-white hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea libero animi neque officiis. Nemo corporis perspiciatis modi amet, saepe quaerat tempora deserunt consequuntur dolore libero recusandae ex, voluptate veniam?</p>\n<a class="btn btn-outline-light btn-lg hero-btn" href="#" style="align-items: center;" ><span>ORDER NOW</span></a>\n</div>\n\n<style>\n.hero-container {\n  background-image: url(\'https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg\');\n  background-color: #2a3448;\n  background-size: 600px 469px;\n  height: 469px;\n  padding: 100px 0px;\n  text-align: center;\n}\n.hero-text {\n  color: #ffffff;\n  font-family: Helvetica;\n  font-size: 45px;\n  line-height: 45px;\n  font-weight: 900;\n  padding: 20px;\n}\n\n@media only screen and (max-width: 600px) {\n  .hero {\n    display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  }\n}\n\n</style>\n',
        D =
          '<div class="wrapper shadow-lg p-3 mb-5 bg-body rounded">\n<div class="wrapper-section-top">\n    <div class="wrapper-section-top-column">\n        <img class="rounded" src="https://via.placeholder.com/350x250/78c5d6/fff" style="padding: 0; width: 100%">\n    </div>\n</div>\n\n<div class="wrapper-section-bottom">\n    <div class="wrapper-column">\n        <p class="wrapper-column-text fs-4">First line of text</p>\n        <hr class="wrapper-divider">\n        <p class="wrapper-column-text fs-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fugiat dolorum nemo voluptatibus corrupti nesciunt unde ut qui distinctio modi.</p>\n    </div>\n</div>\n</div>\n\n<style>\n    .wrapper {\n        padding: 50px 30px;\n        width: 36rem;\n    }\n    .wrapper-section-top {\n        padding: 20px;\n    }\n    .wrapper-section-bottom {\n        padding: 20px;\n    }\n    .wrapper-column {\n        border: 1px solid #dddddd;\n    }\n    .wrapper-column-text {\n        padding: 20px;\n    }\n    .wrapper-divider {\n        border-width: 1px;\n        border-style: dashed;\n        border-color: lightgrey;\n        padding: 0 20px;\n    }\n\n    @media only screen and (max-width: 600px) {\n      .wrapper{\n        width: 100% !important;\n        padding: 1rem;\n      }\n      .wrapper-column-text{\n        padding: 1rem;\n      }\n\n      .wrapper-section-top {\n        padding: 1rem;\n    }\n    .wrapper-section-bottom {\n        padding: 1rem;\n    }\n    }\n</style>\n',
        j =
          '\n<p class="d-inline-flex gap-1">\n<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span>Toggle element</span></a>\n</p>\n<div class="row rowClass">\n<div class="col">\n<div class="collapse multi-collapse" id="multiCollapseExample1">\n  <div class="card card-body">\n  <p class="fs-6"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>\n  </div>\n</div>\n</div>\n</div>\n',
        q =
          '\n<ul class="nav nav-tabs myTab" id="myTab" role="tablist">\n<li class="nav-item" role="presentation">\n  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><p class="fs-6" style="margin-bottom: 0rem;">Home</p></button>\n</li>\n<li class="nav-item" role="presentation">\n  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Profile</p></button>\n</li>\n<li class="nav-item" role="presentation">\n  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Contact</p></button>\n</li>\n</ul>\n<div class="tab-content border border-secondary myTab" id="myTabContent">\n<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis ullam expedita sed ipsum tenetur laudantium architecto cumque esse accusamus praesentium quas eos quasi repellendus, a rem. Hic, soluta iusto?\n</p>\n</div>\n<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, velit quasi. Reprehenderit, quidem quos. Quibusdam, in? Veniam quas obcaecati eligendi maxime perferendis, atque ducimus cumque, praesentium voluptas delectus laboriosam quis necessitatibus ratione perspiciatis voluptatibus iusto.\n</p>\n</div>\n<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">\n<p class="fs-6" style="margin-bottom: 0rem;">\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, facilis. Rerum, ad? Facilis ipsa illum quaerat corrupti earum? Sequi, distinctio!\n</p>\n</div>\n</div>\n\n<style>\n.myTab {\nwidth: 25rem;\n}\n@media only screen and (max-width: 600px) {\n.myTab{\n  width: 100% !important;\n}\n}\n</style>\n',
        T =
          '\n<footer class="w-100 py-4 flex-shrink-0">\n<div class="container py-4">\n    <div class="row">\n        <div class="col-lg-4 col-md-6">\n            <h5 class="h1 text-white">FB.</h5>\n            <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n            <p class="small mb-0 text-whte">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>\n        </div>\n        <div class="col-lg-2 col-md-6">\n            <h5 class="text-white mb-3">Quick links</h5>\n            <ul class="list-unstyled text-muted">\n                <li><a href="#"><span>Home</span></a></li>\n                <li><a href="#"><span>About</span></a></li>\n                <li><a href="#"><span>Get started</span></a></li>\n                <li><a href="#"><span>FAQ</span></a></li>\n            </ul>\n        </div>\n        <div class="col-lg-2 col-md-6">\n            <h5 class="text-white mb-3">Quick links</h5>\n            <ul class="list-unstyled text-muted">\n            <li><a href="#"><span>Home</span></a></li>\n                <li><a href="#"><span>About</span></a></li>\n                <li><a href="#"><span>Get started</span></a></li>\n                <li><a href="#"><span>FAQ</span></a></li>\n            </ul>\n        </div>\n        <div class="col-lg-4 col-md-6">\n            <h5 class="text-white mb-3">Newsletter</h5>\n            <p class="small  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n        </div>\n    </div>\n</div>\n</footer>\n\n<style>\n\nfooter {\nbackground: #212529;\n}\na {\ncolor: white;\ntext-decoration: none;\ntransition: all 0.3s;\n}\n\na:hover, a:focus {\ntext-decoration: none;\n}\n</style>\n',
        A =
          '\n          <section class="get-in-touch">\n   <h1 class="title">Order Form</h1>\n   <section class="contact-form row">\n      <div class="form-field col-lg-6">\n         <input id="name2" name="name2" class="input-text js-input" type="text" required>\n         <label class="label" for="name2">Name</label>\n      </div>\n       <div class="form-field col-lg-6 ">\n         <input id="phone2" name="phone2" class="input-text js-input" type="text" required>\n         <label class="label" for="phone2">Contact Number</label>\n      </div>\n      <div class="form-field col-lg-12">\n         <input id="address2" name="address2" class="input-text js-input" type="text" required>\n         <label class="label" for="address2">Address</label>\n      </div>\n\n      <div class="form-field col-lg-6" id="size"> </div>\n\n      <div class="form-field col-lg-6">\n          <div style="color: rgb(85, 67, 202); font-size: 18px; font-weight: 400; margin-bottom: 1rem">Select Quantity</div>\n            <div class="quantity-selector">\n              <button type="button" class="btn input-text btn-outline-secondary quantity-input js-input input-text-sm " id="decrease" onclick="updateQuantity()">-</button>\n              <input type="text" class="form-control quantity-input-sm" id="quantity" value="1" readonly name="quantity">\n              <button type="button" class="btn input-text btn-outline-secondary quantity-input js-input input-text-sm" id="increase" onclick="updateQuantity()">+</button>\n            </div>\n      </div>\n\n      <div class="form-field col-lg-6" id="colorDiv"> </div>\n\n\n      <div class="form-field col-lg-6" id="shipping">\n       <div style="color: rgb(85, 67, 202); font-size: 18px; font-weight: 400;">Shipping</div>\n       <p style="font-size: 20px; font-weight: 600; margin-right: 5px;" id="cashOnDelivery">Cash on Delivery</p>\n         <input type="radio" id="insideDhaka" value="60" name="insideDhaka">\n        <label class="radio-label" for="insideDhaka">Inside Dhaka: 60 BDT</label><br>\n        <input type="radio" id="outsideDhaka" value="120" name="insideDhaka">\n        <label class="radio-label" for="outsideDhaka">Outside Dhaka: 120 BDT</label><br>\n      </div>\n\n        <div class="form-field col-lg-12" style="display: none;">\n         <input type="hidden" id="server" name="landingpage" value="true">\n         <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}">\n         <input type="hidden" id="productId" name="productId" class="productId" value="">\n         <input type="hidden" id="formCheck" name="formCheck" value="Standard Form">\n        </div>\n\n\n      <div class="form-field col-lg-6" id="priceDiv">\n        <div style="color: rgb(85, 67, 202); font-size: 18px; font-weight: 400; margin-bottom: 1rem">Total Price</div>\n        <span style="font-size: 20px; font-weight: 600; margin-right: 5px;" id="showProduct">0</span>BDT\n        <input type="hidden" id="productPrice" name="productPrice" class="productPrice" value="0">\n      </div>\n\n\n      <div class="form-field col-lg-12">\n         <input class="submit-btn" type="submit" value="Submit">\n      </div>\n   </section>\n</section>\n',
        I =
          '\n          <section class="multiple-item-form">\n            \t\t<div class="sub-header">\n                  <div class="container">\n                    <h1>Order Form</h1>\n                  </div>\n                </div>\n            \t\t\t<div class="order">\n\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-lg-8" id="mainContent">\n\n\n\t\t\t\t\t\t\t\t<div id="sizeGroup" class="row option-box sizeColorAndQuantity">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\n\n\n\n\n\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t<div id="extraOptionGroup1" class="row option-box">\n\t\t\t\t\t\t\t\t\t<div class="option-box-header">\n\t\t\t\t\t\t\t\t\t\t<h3>ক্যাশ অন ডেলিভারি (হোম ডেলিভারি)</h3>\n\t\t\t\t\t\t\t\t\t\t<p>আপনি যদি ক্যাশ অন ডেলিভারি চান তাহলে নিচের অপশনটি চেক করুন</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="col-md-12 col-sm-12 checkbox">\n                  <div class="checkbox-wrapper-7">\n                      <input class="tgl tgl-ios" id="cb2-7" type="checkbox"/>\n                      <label class="tgl-btn" for="cb2-7">\n                    </div>\n\t\t\t\t\t\t\t\t\t\t<label class="radio-label" for="cashOnDelivery">ক্যাশ অন ডেলিভারি</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n                <div class="row option-box" id="shipping">\n                \t\t<div class="option-box-header">\n\t\t\t\t\t\t\t\t\t\t<h3>শিপিং ফি</h3>\n\t\t\t\t\t\t\t\t\t</div>\n                  <div class="form-group">\n                    <input type="radio" id="insideDhaka" value="60" name="insideDhaka">\n                    <label class="radio-label" for="insideDhaka">Inside Dhaka: 60 BDT</label><br>\n\t\t\t\t\t\t\t\t\t</div>\n                  <div class="form-group">\n                    <input type="radio" id="outsideDhaka" value="120" name="insideDhaka">\n                    <label class="radio-label" for="outsideDhaka">Outside Dhaka: 120 BDT</label><br>\n\t\t\t\t\t\t\t\t\t</div>\n                </div>\n\n\n                \n\t\t\t\t\t\t\t\t<div id="personalDetails">\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="order-box-header">\n\t\t\t\t\t\t\t\t\t\t\t<h3>অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="username" class="form-control" name="username" placeholder="Enter Full Name" type="text" required />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n                    \t<div class="col-md-6 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Phone</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="phone" class="form-control" name="phone" placeholder="Enter Phone e.g.: 01711111111" type="text" required/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input id="address" class="form-control" name="address" placeholder="Enter Address" type="text" required />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Message</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea id="inputMessage" class="form-control" name="message" placeholder="Enter Message"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n                     <div class="form-field col-lg-12" style="display: none;">\n                      <input type="hidden" id="server" name="landingpage" value="true">\n                      <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}">\n                      <input type="hidden" id="productId" name="productId" class="productId" value="">\n                      <input type="hidden" id="formCheck" name="formCheck" value="Standard Form">\n                    </div>\n\n\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t\t\t\t<div class="order-box-header">\n\t\t\t\t\t\t\t\t\t\t\t<h3>আরও তথ্যের জন্য, এই নম্বরে যোগাযোগ করুন 01711111111</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n                \n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="col-lg-4" id="sidebar">\n\t\t\t\t\t\t\t\t<div id="orderContainer" class="theiaStickySidebar">\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" id="subSum1" name="subSum1" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" id="subSum2" name="subSum2" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" id="subSum3" name="subSum3" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" id="totalDue" name="totalDue" value="0" />\n\t\t\t\t\t\t\t\t\t\t\t<h3>Order Summary</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul id="orderSumList">\n                      <li id="optionGroup1Sum" class="order-summary">\n                      <a href="javascript:;" id="optionGroup1SumReset"  class="btn btn-outline-danger" style="border-radius: 50%">\n                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n                      </svg>\n                      </a>\n                      Red x 2\n                      <span class="price">৳ 1,522.50</span>\n                      </li>\n                      <li id="optionGroup1Sum" class="order-summary">\n                      <a href="javascript:;" id="optionGroup1SumReset"  class="btn btn-outline-danger" style="border-radius: 50%">\n                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n                      </svg>\n                      </a>\n                      Red x 2\n                      <span class="price">৳ 1,522.50</span>\n                      </li>\n                      <li id="optionGroup1Sum" class="order-summary">\n                      <a href="javascript:;" id="optionGroup1SumReset"  class="btn btn-outline-danger" style="border-radius: 50%">\n                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n                      </svg>\n                      </a>\n                      Red x 2\n                      <span class="price">৳ 1,522.50</span>\n                      </li>\n                      <li id="optionGroup1Sum" class="order-summary">\n                      <a href="javascript:;" id="optionGroup1SumReset"  class="btn btn-outline-danger" style="border-radius: 50%">\n                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n                      </svg>\n                      </a>\n                      Red x 2\n                      <span class="price">৳ 1,522.50</span>\n                      </li>\n                      <li id="optionGroup1Sum" class="order-summary">\n                      <a href="javascript:;" id="optionGroup1SumReset"  class="btn btn-outline-danger" style="border-radius: 50%">\n                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>\n                      </svg>\n                      </a>\n                      Red x 2\n                      <span class="price">৳ 1,522.50</span>\n                      </li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row total-container">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 p-0">\n                        <label>Total Price</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 p-0">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" id="totalPrice" class="summaryInput" name="total" value="৳ 2334433"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t<div class="col-lg-12">\n\t\t\t\t\t\t\t\t\t\t\t<button type="submit" name="submit" class="btn-form-func">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn-form-func-content">SUBMIT</span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n          </section>',
        P =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (P =
                Object.assign ||
                function (t) {
                  for (var n, e = 1, o = arguments.length; e < o; e++)
                    for (var a in (n = arguments[e]))
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (t[a] = n[a]);
                  return t;
                }),
              P.apply(this, arguments)
            );
          },
        F =
          (void 0 && (void 0).__awaiter) ||
          function (t, n, e, o) {
            return new (e || (e = Promise))(function (a, i) {
              function r(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  l(o["throw"](t));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                var n;
                t.done
                  ? a(t.value)
                  : ((n = t.value),
                    n instanceof e
                      ? n
                      : new e(function (t) {
                          t(n);
                        })).then(r, s);
              }
              l((o = o.apply(t, n || [])).next());
            });
          },
        E =
          (void 0 && (void 0).__generator) ||
          function (t, n) {
            var e,
              o,
              a,
              i,
              r = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (e) throw new TypeError("Generator is already executing.");
                  for (; i && ((i = 0), s[0] && (r = 0)), r; )
                    try {
                      if (
                        ((e = 1),
                        o &&
                          (a =
                            2 & s[0]
                              ? o["return"]
                              : s[0]
                              ? o["throw"] ||
                                ((a = o["return"]) && a.call(o), 0)
                              : o.next) &&
                          !(a = a.call(o, s[1])).done)
                      )
                        return a;
                      switch (((o = 0), a && (s = [2 & s[0], a.value]), s[0])) {
                        case 0:
                        case 1:
                          a = s;
                          break;
                        case 4:
                          return r.label++, { value: s[1], done: !1 };
                        case 5:
                          r.label++, (o = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = r.ops.pop()), r.trys.pop();
                          continue;
                        default:
                          if (
                            !((a = r.trys),
                            (a = a.length > 0 && a[a.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0]))
                          ) {
                            r = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!a || (s[1] > a[0] && s[1] < a[3]))
                          ) {
                            r.label = s[1];
                            break;
                          }
                          if (6 === s[0] && r.label < a[1]) {
                            (r.label = a[1]), (a = s);
                            break;
                          }
                          if (a && r.label < a[2]) {
                            (r.label = a[2]), r.ops.push(s);
                            break;
                          }
                          a[2] && r.ops.pop(), r.trys.pop();
                          continue;
                      }
                      s = n.call(t, r);
                    } catch (t) {
                      (s = [6, t]), (o = 0);
                    } finally {
                      e = a = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          };
      var N =
          (void 0 && (void 0).__awaiter) ||
          function (t, n, e, o) {
            return new (e || (e = Promise))(function (a, i) {
              function r(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  l(o["throw"](t));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                var n;
                t.done
                  ? a(t.value)
                  : ((n = t.value),
                    n instanceof e
                      ? n
                      : new e(function (t) {
                          t(n);
                        })).then(r, s);
              }
              l((o = o.apply(t, n || [])).next());
            });
          },
        O =
          (void 0 && (void 0).__generator) ||
          function (t, n) {
            var e,
              o,
              a,
              i,
              r = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (e) throw new TypeError("Generator is already executing.");
                  for (; i && ((i = 0), s[0] && (r = 0)), r; )
                    try {
                      if (
                        ((e = 1),
                        o &&
                          (a =
                            2 & s[0]
                              ? o["return"]
                              : s[0]
                              ? o["throw"] ||
                                ((a = o["return"]) && a.call(o), 0)
                              : o.next) &&
                          !(a = a.call(o, s[1])).done)
                      )
                        return a;
                      switch (((o = 0), a && (s = [2 & s[0], a.value]), s[0])) {
                        case 0:
                        case 1:
                          a = s;
                          break;
                        case 4:
                          return r.label++, { value: s[1], done: !1 };
                        case 5:
                          r.label++, (o = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = r.ops.pop()), r.trys.pop();
                          continue;
                        default:
                          if (
                            !((a = r.trys),
                            (a = a.length > 0 && a[a.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0]))
                          ) {
                            r = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!a || (s[1] > a[0] && s[1] < a[3]))
                          ) {
                            r.label = s[1];
                            break;
                          }
                          if (6 === s[0] && r.label < a[1]) {
                            (r.label = a[1]), (a = s);
                            break;
                          }
                          if (a && r.label < a[2]) {
                            (r.label = a[2]), r.ops.push(s);
                            break;
                          }
                          a[2] && r.ops.pop(), r.trys.pop();
                          continue;
                      }
                      s = n.call(t, r);
                    } catch (t) {
                      (s = [6, t]), (o = 0);
                    } finally {
                      e = a = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          };
      const _ = function (t, n) {
        t.Panels.addButton("options", {
          id: "publishSite",
          active: !0,
          className: "btn-toggle-borders",
          label: "Save as Template",
          command: "sw-visibility",
        }),
          t.Panels.getButton("options", "publishSite").on(
            "change",
            function () {
              return N(void 0, void 0, void 0, function () {
                var n, e, o, a, i, r, s, l, c, d;
                return O(this, function (p) {
                  return (
                    (n = t.getHtml()),
                    (e = t.getCss()),
                    (o = t.getProjectData()),
                    (a = n
                      .replace(/<body[^>]*>/, "")
                      .replace(/<\/body\s*>/, "")),
                    (i = document.location.href),
                    (r = new URL(i)),
                    (s = new URLSearchParams(r.search)),
                    (l = s.get("id")),
                    console.log(l),
                    (c = {
                      id: l,
                      html: "".concat(a),
                      css: "".concat(e),
                      projectData: o,
                    }),
                    console.log(c),
                    (d = ""
                      .concat(
                        document.location.protocol +
                          "//" +
                          document.location.host,
                        "/api/dev/user/landing-page/"
                      )
                      .concat(l, "/save")),
                    (function () {
                      N(this, void 0, void 0, function () {
                        var n;
                        return O(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [
                                4,
                                fetch(d, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify(c),
                                }),
                              ];
                            case 1:
                              return [4, e.sent().json()];
                            case 2:
                              return (
                                (n = e.sent()),
                                console.log(n),
                                n.project_data
                                  ? (t.Modal.open({
                                      title: "Your Page has been Published",
                                      content: "Thank you",
                                    }),
                                    t.loadProjectData(n.project_data),
                                    localStorage.clear())
                                  : t.Modal.open({
                                      title: "There was a server side error!",
                                    }),
                                [2]
                              );
                          }
                        });
                      });
                    })(),
                    [2]
                  );
                });
              });
            }
          );
      };
      var Z =
          (void 0 && (void 0).__awaiter) ||
          function (t, n, e, o) {
            return new (e || (e = Promise))(function (a, i) {
              function r(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  l(o["throw"](t));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                var n;
                t.done
                  ? a(t.value)
                  : ((n = t.value),
                    n instanceof e
                      ? n
                      : new e(function (t) {
                          t(n);
                        })).then(r, s);
              }
              l((o = o.apply(t, n || [])).next());
            });
          },
        R =
          (void 0 && (void 0).__generator) ||
          function (t, n) {
            var e,
              o,
              a,
              i,
              r = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (e) throw new TypeError("Generator is already executing.");
                  for (; i && ((i = 0), s[0] && (r = 0)), r; )
                    try {
                      if (
                        ((e = 1),
                        o &&
                          (a =
                            2 & s[0]
                              ? o["return"]
                              : s[0]
                              ? o["throw"] ||
                                ((a = o["return"]) && a.call(o), 0)
                              : o.next) &&
                          !(a = a.call(o, s[1])).done)
                      )
                        return a;
                      switch (((o = 0), a && (s = [2 & s[0], a.value]), s[0])) {
                        case 0:
                        case 1:
                          a = s;
                          break;
                        case 4:
                          return r.label++, { value: s[1], done: !1 };
                        case 5:
                          r.label++, (o = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = r.ops.pop()), r.trys.pop();
                          continue;
                        default:
                          if (
                            !((a = r.trys),
                            (a = a.length > 0 && a[a.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0]))
                          ) {
                            r = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!a || (s[1] > a[0] && s[1] < a[3]))
                          ) {
                            r.label = s[1];
                            break;
                          }
                          if (6 === s[0] && r.label < a[1]) {
                            (r.label = a[1]), (a = s);
                            break;
                          }
                          if (a && r.label < a[2]) {
                            (r.label = a[2]), r.ops.push(s);
                            break;
                          }
                          a[2] && r.ops.pop(), r.trys.pop();
                          continue;
                      }
                      s = n.call(t, r);
                    } catch (t) {
                      (s = [6, t]), (o = 0);
                    } finally {
                      e = a = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          };
      var G =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (G =
                Object.assign ||
                function (t) {
                  for (var n, e = 1, o = arguments.length; e < o; e++)
                    for (var a in (n = arguments[e]))
                      Object.prototype.hasOwnProperty.call(n, a) &&
                        (t[a] = n[a]);
                  return t;
                }),
              G.apply(this, arguments)
            );
          },
        Q =
          (void 0 && (void 0).__awaiter) ||
          function (t, n, e, o) {
            return new (e || (e = Promise))(function (a, i) {
              function r(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                try {
                  l(o["throw"](t));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                var n;
                t.done
                  ? a(t.value)
                  : ((n = t.value),
                    n instanceof e
                      ? n
                      : new e(function (t) {
                          t(n);
                        })).then(r, s);
              }
              l((o = o.apply(t, n || [])).next());
            });
          },
        U =
          (void 0 && (void 0).__generator) ||
          function (t, n) {
            var e,
              o,
              a,
              i,
              r = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(s) {
              return function (l) {
                return (function (s) {
                  if (e) throw new TypeError("Generator is already executing.");
                  for (; i && ((i = 0), s[0] && (r = 0)), r; )
                    try {
                      if (
                        ((e = 1),
                        o &&
                          (a =
                            2 & s[0]
                              ? o["return"]
                              : s[0]
                              ? o["throw"] ||
                                ((a = o["return"]) && a.call(o), 0)
                              : o.next) &&
                          !(a = a.call(o, s[1])).done)
                      )
                        return a;
                      switch (((o = 0), a && (s = [2 & s[0], a.value]), s[0])) {
                        case 0:
                        case 1:
                          a = s;
                          break;
                        case 4:
                          return r.label++, { value: s[1], done: !1 };
                        case 5:
                          r.label++, (o = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = r.ops.pop()), r.trys.pop();
                          continue;
                        default:
                          if (
                            !((a = r.trys),
                            (a = a.length > 0 && a[a.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0]))
                          ) {
                            r = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!a || (s[1] > a[0] && s[1] < a[3]))
                          ) {
                            r.label = s[1];
                            break;
                          }
                          if (6 === s[0] && r.label < a[1]) {
                            (r.label = a[1]), (a = s);
                            break;
                          }
                          if (a && r.label < a[2]) {
                            (r.label = a[2]), r.ops.push(s);
                            break;
                          }
                          a[2] && r.ops.pop(), r.trys.pop();
                          continue;
                      }
                      s = n.call(t, r);
                    } catch (t) {
                      (s = [6, t]), (o = 0);
                    } finally {
                      e = a = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, l]);
              };
            }
          },
        W =
          (void 0 && (void 0).__spreadArray) ||
          function (t, n, e) {
            if (e || 2 === arguments.length)
              for (var o, a = 0, i = n.length; a < i; a++)
                (!o && a in n) ||
                  (o || (o = Array.prototype.slice.call(n, 0, a)),
                  (o[a] = n[a]));
            return t.concat(o || Array.prototype.slice.call(n));
          };
      const Y = function (t) {
        for (var n = [], N = 1; N < arguments.length; N++)
          n[N - 1] = arguments[N];
        return Q(void 0, W([t], n, !0), void 0, function (t, n) {
          var N;
          return (
            void 0 === n && (n = {}),
            U(this, function (O) {
              return (
                (N = G(
                  {
                    blocks: ["productform"],
                    id: ["basicForm", "standardForm", "multipleItemForm"],
                    label: [
                      "Basic Form",
                      "Standard Form",
                      "Multiple Item Form",
                    ],
                    block: function () {
                      return {};
                    },
                    style: "",
                    styleAdditional: "",
                    classPrefix: "productform",
                    inlineCss: !0,
                    updateStyleManager: !0,
                    cellStyle: {
                      padding: "0",
                      margin: "0",
                      "vertical-align": "top",
                    },
                    tableStyle: {
                      height: "150px",
                      margin: "0 auto 10px auto",
                      padding: "5px 5px 5px 5px",
                      width: "100%",
                    },
                  },
                  n
                )),
                t.on("load", function () {
                  var n = document.location.href,
                    e = new URL(n),
                    o = new URLSearchParams(e.search).get("id");
                  !(function () {
                    Q(this, void 0, void 0, function () {
                      var n, e;
                      return U(this, function (a) {
                        switch (a.label) {
                          case 0:
                            return (
                              a.trys.push([0, 3, , 4]),
                              [
                                4,
                                fetch(
                                  ""
                                    .concat(
                                      document.location.protocol +
                                        "//" +
                                        document.location.host,
                                      "/api/dev/user/landing-page/"
                                    )
                                    .concat(o),
                                  {
                                    method: "GET",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                ),
                              ]
                            );
                          case 1:
                            return [4, a.sent().json()];
                          case 2:
                            return (
                              (n = a.sent()).data
                                ? (t.setComponents(n.data.content),
                                  t.setStyle(n.data.css),
                                  localStorage.setItem(
                                    "gjsProject",
                                    n.data.project_data
                                  ))
                                : (t.setComponents(
                                    '<div class="cls">Start editing</div>'
                                  ),
                                  (e = localStorage.getItem("gjsProject")),
                                  t.loadProjectData(JSON.parse(e))),
                              [3, 4]
                            );
                          case 3:
                            return (
                              a.sent(),
                              t.Modal.open({
                                title: "There was some server side error",
                                content: "Sorry for inconvenience",
                              }),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    });
                  })();
                }),
                t.on("update", function () {
                  var n = t.getProjectData();
                  localStorage.setItem("gjsProject", JSON.stringify(n));
                }),
                (function (t, n) {
                  var l,
                    p = t.Components,
                    g = n.label,
                    v = n.classPrefix,
                    x = "".concat(a, "-container");
                  p.addType(a, {
                    view: {
                      onRender: function () {
                        l = this.model.attributes.selectedData;
                      },
                      events: {
                        submit: function (t) {
                          return t.preventDefault();
                        },
                      },
                    },
                    model: {
                      defaults: {
                        tagName: "form",
                        droppable: ":not(form)",
                        draggable: ":not(form)",
                        name: g[0],
                        attributes: {
                          class: "".concat(v, " ").concat(v, "-container"),
                          method: "post",
                          action: "".concat(
                            document.location.protocol +
                              "//" +
                              document.location.host,
                            "/checkout"
                          ),
                        },
                        traits: [{ type: a, name: "product" }],
                        components: { type: x, data: l },
                        styles: "\n          ."
                          .concat(
                            v,
                            " {\n            max-width: 50rem;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: rgb(223 223 223) 0px 6px 20px 7px;\n            margin: 1rem;\n            outline: none !important;\n            border: 2px solid #d9d9d9;\n\n          }\n\n          ."
                          )
                          .concat(
                            v,
                            "-container {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 2rem;\n            margin-bottom: 2rem;\n            padding: 3rem;\n          }\n\n          @media only screen and (max-width: 600px) {\n            ."
                          )
                          .concat(
                            v,
                            "{\n              width: 90%;\n            }\n\n            ."
                          )
                          .concat(
                            v,
                            "-container {\n              padding: 0.3rem;\n              padding-bottom: 2rem;\n            }\n          }\n        "
                          ),
                      },
                      init: function () {
                        var n = this;
                        this.on("change:attributes:selectedData", function () {
                          var e,
                            o,
                            a,
                            i,
                            r = n.getAttributes().selectedData,
                            s = t.getWrapper(),
                            l =
                              null === (e = s.find(".productId")[0].view) ||
                              void 0 === e
                                ? void 0
                                : e.el,
                            c =
                              null === (o = s.find(".productPrice")[0].view) ||
                              void 0 === o
                                ? void 0
                                : o.el,
                            d =
                              null ===
                                (a = s.find(".productQuantity")[0].view) ||
                              void 0 === a
                                ? void 0
                                : a.el;
                          (l.value = r.id), (c.value = r.price), (d.value = 1);
                          var u =
                              document.head.querySelector(
                                'meta[name="csrf-token"]'
                              ) || "{{ csrf_token() }}",
                            m =
                              null === (i = p.getById("token").view) ||
                              void 0 === i
                                ? void 0
                                : i.attr;
                          m
                            ? (m.value = u)
                            : console.error("Token input element not found");
                        });
                      },
                    },
                  }),
                    p.addType(f, {
                      view: {
                        onRender: function () {
                          l = this.model.attributes.selectedData;
                        },
                        events: {
                          submit: function (t) {
                            t.preventDefault();
                            for (
                              var n = new FormData(t.target),
                                e = 0,
                                o = n.entries();
                              e < o.length;
                              e++
                            ) {
                              var a = o[e];
                              console.log(a[0] + ": " + a[1]);
                            }
                            console.log(Object.fromEntries(n));
                          },
                        },
                      },
                      model: {
                        defaults: {
                          script: e,
                          tagName: "form",
                          droppable: ":not(form)",
                          draggable: ":not(form)",
                          name: g[1],
                          attributes: {
                            class: "".concat(v, " ").concat(v, "-container"),
                            method: "post",
                            action: "".concat(
                              document.location.protocol +
                                "//" +
                                document.location.host,
                              "/checkout"
                            ),
                          },
                          traits: [{ type: a, name: "product" }],
                          components: { type: x, data: l },
                          styles:
                            "\n        .get-in-touch {\n          max-width: 800px;\n          margin: 50px auto;\n          position: relative;\n\n        }\n        .get-in-touch .title {\n          text-align: center;\n          text-transform: uppercase;\n          letter-spacing: 3px;\n          font-size: 3.2em;\n          line-height: 48px;\n          padding-bottom: 48px;\n            color: #5543ca;\n            background: #5543ca;\n            background: -moz-linear-gradient(left,#f4524d  0%,#5543ca 100%) !important;\n            background: -webkit-linear-gradient(left,#f4524d  0%,#5543ca 100%) !important;\n            background: linear-gradient(to right,#f4524d  0%,#5543ca  100%) !important;\n            -webkit-background-clip: text !important;\n            -webkit-text-fill-color: transparent !important;\n        }\n\n      .contact-form .form-field {\n        position: relative;\n        margin: 32px 0;\n      }\n      .contact-form .input-text {\n        display: block;\n        width: 100%;\n        height: 36px;\n        border-width: 0 0 2px 0;\n        border-color: #5543ca;\n        font-size: 18px;\n        line-height: 26px;\n        font-weight: 400;\n      }\n\n        .contact-form .input-text:focus {\n          outline: none;\n        }\n          .radio-label{\n            margin-left: 1rem;\n            font-size: 15px;\n            font-weight: 400;\n                border-bottom: 2px solid rgb(85, 67, 202);\n          }\n        .quantity-selector {\n          display: flex;\n          align-items: center;\n          gap: 1rem;\n        }\n          .quantity-input-sm {\n            width: 50px;\n            text-align: center;\n          }\n          .quantity-input {\n          text-align: center;\n          width: 40px !important;\n          height: 37px !important;\n          padding-bottom: 32px;\n          font-size: 27px !important;\n          }\n          .input-text-sm:hover {\n         color: #r3r3r3;\n          }\n        .contact-form .input-text:focus + .label,\n        .contact-form .input-text.not-empty + .label {\n          -webkit-transform: translateY(-24px);\n                  transform: translateY(-24px);\n        }\n        .contact-form .label {\n          position: absolute;\n          left: 20px;\n          bottom: 11px;\n          font-size: 18px;\n          line-height: 26px;\n          font-weight: 400;\n          color: #5543ca;\n          cursor: text;\n          transition: -webkit-transform .2s ease-in-out;\n          transition: transform .2s ease-in-out;\n          transition: transform .2s ease-in-out, \n          -webkit-transform .2s ease-in-out;\n        }\n        .contact-form .submit-btn {\n          display: inline-block;\n          background-color: #000;\n          background-image: linear-gradient(125deg,#a72879,#064497);\n          color: #fff;\n          text-transform: uppercase;\n          letter-spacing: 2px;\n          font-size: 16px;\n          padding: 8px 16px;\n          border: none;\n          width:200px;\n          cursor: pointer;\n        }\n\n        #colorDiv, #size{\n        display: none;\n        }\n        \n        ",
                        },
                        init: function () {
                          var n = this;
                          this.on(
                            "change:attributes:selectedData",
                            function () {
                              var e,
                                o,
                                a,
                                i = JSON.parse(n.getAttributes().selectedData);
                              console.log(i);
                              var r = t.getWrapper(),
                                s =
                                  null === (e = r.find(".productId")[0].view) ||
                                  void 0 === e
                                    ? void 0
                                    : e.el,
                                l =
                                  null ===
                                    (o = r.find(".productPrice")[0].view) ||
                                  void 0 === o
                                    ? void 0
                                    : o.el,
                                c = r.find("#showProduct")[0].view.el;
                              if (
                                (s && l && c
                                  ? ((s.value = i.id),
                                    (l.value = i.price),
                                    (c.innerHTML = i.price))
                                  : console.error(
                                      "One or more elements are missing."
                                    ),
                                i.color)
                              ) {
                                var d = i.color.split("/"),
                                  u = r.find("#colorDiv")[0];
                                u.set("style", { display: "block" }),
                                  u.get("components").reset();
                                var m = u.get("components");
                                m.add(
                                  '<div style="color: rgb(85, 67, 202); font-size: 18px; font-weight: 400; margin-bottom: 1rem">Color</div>'
                                ),
                                  d.forEach(function (t, n) {
                                    m.add(
                                      '<input type="radio" id="'
                                        .concat(n, '" value=')
                                        .concat(t, ' name="color">')
                                    ),
                                      m.add(
                                        '<label class="radio-label" for='
                                          .concat(t, ">")
                                          .concat(t, "</label><br>")
                                      );
                                  });
                              }
                              if (i.size) {
                                var b = i.size.split("/"),
                                  f = r.find("#size")[0],
                                  h = f.get("components");
                                h.reset(), f.set("style", { display: "block" });
                                var g = h
                                  .add('<div class="input-group"> </div>')
                                  .get("components");
                                g.reset(),
                                  g.add(
                                    '<select class="form-control input-text js-input" id="sizeSelect" name="size" required>'
                                  );
                                var v = r
                                  .find("#sizeSelect")[0]
                                  .get("components");
                                v.reset(),
                                  v.add(
                                    '<option selected="true" disabled="disabled">Select Size</option>'
                                  ),
                                  b.forEach(function (t) {
                                    v.add("<option>".concat(t, "</option>"));
                                  });
                              }
                              var x =
                                  document.head.querySelector(
                                    'meta[name="csrf-token"]'
                                  ) || "{{ csrf_token() }}",
                                w =
                                  null === (a = p.getById("token").view) ||
                                  void 0 === a
                                    ? void 0
                                    : a.attr;
                              w
                                ? (w.value = x)
                                : console.error(
                                    "Token input element not found"
                                  );
                            }
                          );
                        },
                      },
                    }),
                    p.addType(h, {
                      view: {
                        onRender: function () {
                          l = this.model.attributes.selectedData;
                        },
                        events: {
                          submit: function (t) {
                            t.preventDefault();
                            for (
                              var n = new FormData(t.target),
                                e = 0,
                                o = n.entries();
                              e < o.length;
                              e++
                            ) {
                              var a = o[e];
                              console.log(a[0] + ": " + a[1]);
                            }
                            console.log(Object.fromEntries(n));
                          },
                        },
                      },
                      model: {
                        defaults: {
                          script: e,
                          tagName: "form",
                          droppable: ":not(form)",
                          draggable: ":not(form)",
                          name: g[2],
                          attributes: {
                            class: "".concat(v, " ").concat(v, "-container"),
                            method: "post",
                            action: "".concat(
                              document.location.protocol +
                                "//" +
                                document.location.host,
                              "/checkout"
                            ),
                          },
                          traits: [{ type: a, name: "product" }],
                          components: { type: x, data: l },
                          styles: o,
                        },
                        init: function () {
                          var n = this;
                          this.on(
                            "change:attributes:selectedData",
                            function () {
                              var e,
                                o = n.getAttributes().selectedData;
                              console.log(o);
                              var a = t.getWrapper();
                              if (o.size) {
                                var i = o.size.split(","),
                                  r =
                                    (o.color.split(","),
                                    a.find(".sizeColorAndQuantity")[0]);
                                r.set("style", { display: "block" });
                                var s = r.get("components");
                                i.forEach(function (t, n) {
                                  s.add(
                                    '<div class="option-box-header" key="'
                                      .concat(
                                        n,
                                        '">\n                      <h3>Size '
                                      )
                                      .concat(
                                        t,
                                        '</h3>\n                      <p>আপনার পছন্দের রঙ এবং পরিমাণ নির্বাচন করুন</p>\n                    </div>\n                    <div class="col-md-6 col-sm-6">\n                      <input type="hidden" id="option1Title" name="option1Title" value="Select" />\n                      <input type="hidden" id="option1Price" name="option1Price" value="0" />\n                      <select id="colorList" class="form-control colorList" name="color">\n                        <option selected="true" disabled="disabled">Select a Color</option>\n                      </select>\n                    </div>\n                    <div class="col-md-6 col-sm-6">\n                      <div class="row">\n                        <div class="col-8">\n                          <input id="quantity" name="quantity" class="form-control" type="number" value="0" />\n                        </div>\n                      </div>\n                    </div>'
                                      )
                                  );
                                });
                              }
                              var l =
                                  document.head.querySelector(
                                    'meta[name="csrf-token"]'
                                  ) || "{{ csrf_token() }}",
                                c =
                                  null === (e = p.getById("token").view) ||
                                  void 0 === e
                                    ? void 0
                                    : e.attr;
                              c
                                ? (c.value = l)
                                : console.error(
                                    "Token input element not found"
                                  );
                            }
                          );
                        },
                      },
                    }),
                    p.addType(s, {
                      isComponent: function (t) {
                        return "LABEL" == t.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "label",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(v, "-idLabel") },
                          styles:
                            n.style ||
                            "\n          .".concat(
                              v,
                              "-idLabel {\n            \n          } \n          "
                            ),
                        },
                      },
                    }),
                    p.addType(c, {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "div",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(v, "-inputDiv") },
                          styles:
                            n.style ||
                            "\n          ."
                              .concat(
                                v,
                                "-inputDiv {\n            display: flex;\n            gap: 2rem;\n            justify-content: space-between;\n            font-size: 1.2rem !important;\n            align-items: center;\n            width: 26rem;\n          }\n\n          \n          \n          @media only screen and (max-width: 600px) {\n            ."
                              )
                              .concat(
                                v,
                                "-inputDiv{\n              width: 100%;\n              font-size: 1rem;\n              flex-direction: column;\n              gap: 0.5rem;\n  \n            }\n          }\n          "
                              ),
                        },
                      },
                    }),
                    p.addType(d, {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "div",
                          droppable: !1,
                          highlightable: !1,
                          attributes: { class: "".concat(v, "-hiddenInput") },
                          styles:
                            n.style ||
                            "\n          .".concat(
                              v,
                              "-hiddenInput {\n            display: none;\n          }\n          "
                            ),
                        },
                      },
                    }),
                    p.addType(i, {
                      isComponent: function (t) {
                        return "INPUT" == t.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "input",
                          droppable: !1,
                          highlightable: !1,
                          attributes: {
                            type: "text",
                            class: "".concat(v, "-inputField"),
                          },
                          traits: [
                            { name: "name" },
                            { name: "placeholder" },
                            {
                              type: "select",
                              name: "type",
                              options: [{ value: "text", id: "" }],
                            },
                            { type: "checkbox", name: "required" },
                          ],
                          styles:
                            n.style ||
                            "\n          .".concat(
                              v,
                              "-inputField {\n            border: 2px solid #10101033;\n            padding: 0.5rem;\n            outline: none;\n            border-radius: 10px;\n          } \n          "
                            ),
                        },
                      },
                      extendFnView: ["updateAttributes"],
                      view: {
                        updateAttributes: function () {
                          this.el.setAttribute("autocomplete", "off");
                        },
                      },
                    }),
                    p.addType(r, {
                      extend: i,
                      isComponent: function (t) {
                        return "BUTTON" == t.tagName;
                      },
                      model: {
                        defaults: {
                          tagName: "button",
                          attributes: {
                            type: "submit",
                            value: "submit",
                            class: "".concat(v, "-inputBtn btn btn-success"),
                          },
                          text: "Submit Now",
                        },
                      },
                    }),
                    t.Components.addType(b, {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: { name: "Social Icons", tagName: "div" },
                      },
                    }),
                    p.addType(m, {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Wrapper",
                          tagName: "div",
                          attributes: {
                            style: "margin-bottom: 1rem; padding-bottom: 1rem;",
                          },
                        },
                      },
                    }),
                    p.addType(u, {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Hero Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("sect100", {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "1 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("sect50", {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "2 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("sect30", {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "3 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("sect37", {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "3/7 Section Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("text", {
                      isComponent: function (t) {
                        return "P" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Text Sect",
                          tagName: "p",
                          draggable: !0,
                          droppable: !0,
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("customer-review", {
                      isComponent: function (t) {
                        return "DIV" == t.tagName;
                      },
                      model: {
                        defaults: {
                          name: "Editable  Div",
                          tagName: "div",
                          class: "gjs-droppable",
                        },
                      },
                    }),
                    p.addType("video", {
                      model: {
                        defaults: {
                          attributes: { class: "".concat(v, "-video") },
                          styles:
                            n.style ||
                            "\n            ."
                              .concat(
                                v,
                                "-video {\n              height: 350px;\n               width: 615px;\n               padding: 0.5rem;\n            }\n\n            @media only screen and (max-width: 600px) {\n              ."
                              )
                              .concat(
                                v,
                                "-video{\n                width: 100%;\n                height: 100%;\n              }\n            }\n            "
                              ),
                        },
                      },
                    });
                })(t, N),
                (function (t, n) {
                  F(void 0, void 0, void 0, function () {
                    var e, o, F, N, O, _, Z, R;
                    return E(this, function (E) {
                      switch (E.label) {
                        case 0:
                          if (((e = n.block), (o = n.label), (F = n.id), !e))
                            return [3, 5];
                          (N =
                            document.location.protocol +
                            "//" +
                            document.location.host +
                            "/api/dev/products"),
                            (O = null),
                            (E.label = 1);
                        case 1:
                          return E.trys.push([1, 4, , 5]), [4, fetch(N)];
                        case 2:
                          if (!(_ = E.sent()).ok)
                            throw new Error("Failed to fetch data");
                          return [4, _.json()];
                        case 3:
                          return (
                            (Z = E.sent()),
                            (O = Z.data),
                            console.log(O),
                            t.BlockManager.add(
                              F[0],
                              P(
                                {
                                  media:
                                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
                                  label: o[0],
                                  category: "Form",
                                  content: {
                                    type: a,
                                    data: O,
                                    data1: 1,
                                    components: [
                                      {
                                        type: c,
                                        components: [
                                          {
                                            type: l,
                                            components: "Order Form",
                                            attributes: {
                                              class: "h1 text-center",
                                            },
                                          },
                                        ],
                                        attributes: { class: "text-center " },
                                      },
                                      {
                                        components: [
                                          {
                                            type: c,
                                            components: [
                                              {
                                                type: s,
                                                components: "Your Name:",
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Name",
                                                  name: "userName",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          {
                                            type: c,
                                            components: [
                                              {
                                                type: s,
                                                components: "Phone Number:",
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Number",
                                                  name: "number",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          {
                                            type: c,
                                            components: [
                                              {
                                                type: s,
                                                components: "Address:",
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "text",
                                                  placeholder:
                                                    "Enter your Address",
                                                  name: "address",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        type: d,
                                        components: [
                                          {
                                            type: d,
                                            components: [
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "server",
                                                  name: "landingpage",
                                                  value: "true",
                                                },
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "token",
                                                  name: "_token",
                                                  value: "{{ csrf_token() }}",
                                                },
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productId",
                                                  name: "productId",
                                                  class: "productId",
                                                },
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productPrice",
                                                  name: "productPrice",
                                                  class: "productPrice",
                                                },
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "productQuantity",
                                                  name: "productQuantity",
                                                  class: "productQuantity",
                                                },
                                              },
                                              {
                                                type: i,
                                                attributes: {
                                                  type: "hidden",
                                                  id: "formCheck",
                                                  name: "formCheck",
                                                  value: "Basic Form",
                                                },
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        components: [
                                          { type: r, components: "Submit" },
                                        ],
                                      },
                                    ],
                                  },
                                },
                                e
                              )
                            ),
                            t.BlockManager.add(
                              F[1],
                              P(
                                {
                                  media:
                                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
                                  label: o[1],
                                  category: "Form",
                                  content: { type: f, data: O, components: A },
                                },
                                e
                              )
                            ),
                            t.BlockManager.add(
                              F[2],
                              P(
                                {
                                  media:
                                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
                                  label: o[2],
                                  category: "Form",
                                  content: { type: h, data: O, components: I },
                                },
                                e
                              )
                            ),
                            [3, 5]
                          );
                        case 4:
                          return (
                            (R = E.sent()),
                            console.error("Error in Fetching Data", R),
                            [3, 5]
                          );
                        case 5:
                          return (
                            t.BlockManager.add("link-block", {
                              label: "Link Block",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>\n    </svg>',
                              content:
                                '<a href="#" class="btn btn-outline-secondary p-2"><span>Link</span></a>',
                            }),
                            t.BlockManager.add("quote", {
                              label: "Quote",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />\n    </svg>',
                              content: v,
                            }),
                            t.BlockManager.add("h1-block", {
                              label: "Heading",
                              media:
                                '<svg  class="bi bi-type-h1" viewBox="0 0 16 16"><path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/></svg>',
                              content: x,
                              category: "Basic",
                              attributes: { title: "Insert h1 block" },
                            }),
                            t.BlockManager.add("text-sect", {
                              label: "Text Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n    </svg>',
                              content: w,
                            }),
                            t.BlockManager.add("image", {
                              label: "Image",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n    </svg>',
                              activate: !0,
                              content: {
                                type: "image",
                                style: { color: "black" },
                                attributes: { class: "img-fluid img-block" },
                              },
                            }),
                            t.BlockManager.add("sect100", {
                              label: "1 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              attributes: { class: "gjs-droppable" },
                              content:
                                '\n    <div class="gjs-droppable container sect100Class"></div>\n\n      <style>\n      .sect100Class{\n        height: 10rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n      }\n      </style>\n    ',
                            }),
                            t.BlockManager.add("text", {
                              label: "Text",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n    </svg>',
                              attributes: { class: "gjs-droppable" },
                              content:
                                '\n    <p class= "gjs-droppable alert alert-success text-block-p">Insert your text here</p>\n    ',
                            }),
                            t.BlockManager.add("sect50", {
                              label: "1/2 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              content: y,
                            }),
                            t.BlockManager.add("sect30", {
                              label: "1/3 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 23 24">\n      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>\n    </svg>',
                              content: k,
                            }),
                            t.BlockManager.add("sect37", {
                              label: "3/7 Section",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>',
                              content: C,
                            }),
                            t.BlockManager.add("customer-review", {
                              label: "Reviews",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>\n    </svg>',
                              content: z,
                            }),
                            t.BlockManager.add("button", {
                              label: "Button",
                              category: "Basic",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />\n    </svg>',
                              content:
                                '<a class="btn btn-primary btn-block"><span>Button</span></a>',
                            }),
                            t.BlockManager.add("divider", {
                              label: "Divider",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />\n    </svg>',
                              content: H,
                            }),
                            t.BlockManager.add("grid-items", {
                              label: "Grid Items",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>\n  </svg>',
                              content:
                                '\n    <div class="all-grid-items">\n    <div >'
                                  .concat(M, "</div>\n    <div>")
                                  .concat(M, "</div>\n    <div >")
                                  .concat(
                                    M,
                                    "</div>\n    </div>\n\n    <style>\n      .all-grid-items{\n        display: flex;\n        gap: 1rem;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n      }\n    </style>\n  "
                                  ),
                            }),
                            t.BlockManager.add("list-items", {
                              label: "List Items",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>\n  </svg>',
                              content: L + L,
                            }),
                            t.BlockManager.add(b, {
                              label: "socialGroup",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />\n  </svg>',
                              content: V,
                            }),
                            t.BlockManager.add(p, {
                              label: "Navbar",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />\n</svg>',
                              content: B,
                            }),
                            t.BlockManager.add(u, {
                              label: "Hero Section",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />\n</svg>',
                              content: S,
                            }),
                            t.BlockManager.add(m, {
                              label: "Wrapper",
                              category: "Extra",
                              media:
                                '<svg viewBox="0 0 24 24">\n    <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />\n</svg>',
                              content: D,
                            }),
                            t.BlockManager.add("video", {
                              label: "Video",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-play-circle-fill" viewBox="0 0 16 16">\n    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>\n  </svg>',
                              content: { type: "video", src: "" },
                            }),
                            t.BlockManager.add("carousel", {
                              label: "Slider",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-sliders" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>\n  </svg>',
                              content: g,
                            }),
                            t.BlockManager.add("collapse", {
                              label: "Collapse",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-arrows-collapse" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"/>\n  </svg>',
                              content: j,
                            }),
                            t.BlockManager.add("tabs", {
                              label: "Tabs",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-segmented-nav" viewBox="0 0 16 16">\n    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>\n  </svg>',
                              content: q,
                            }),
                            t.BlockManager.add("footer", {
                              label: "Footer",
                              category: "Extra",
                              media:
                                '<svg class="bi bi-caret-up-square" viewBox="0 0 16 16">\n    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>\n  </svg>',
                              content: T,
                            }),
                            [2]
                          );
                      }
                    });
                  });
                })(t, N),
                (function (t) {
                  Z(void 0, void 0, void 0, function () {
                    var n, e, o, i, r;
                    return R(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (n = "".concat(
                            document.location.protocol +
                              "//" +
                              document.location.host,
                            "/api/dev/products"
                          )),
                            (e = null),
                            (s.label = 1);
                        case 1:
                          return s.trys.push([1, 4, , 5]), [4, fetch(n)];
                        case 2:
                          if (!(o = s.sent()).ok)
                            throw new Error("Failed to fetch data");
                          return [4, o.json()];
                        case 3:
                          return (
                            (i = s.sent()),
                            (e = i.data),
                            t.TraitManager.addType(a, {
                              events: { keyup: "click" },
                              createInput: function (t) {
                                var n = t.trait.get("options") || [],
                                  o = n.length ? n : e,
                                  a = document.createElement("div");
                                return (
                                  (a.innerHTML =
                                    '\n          <select class="products">\n          <option value="" disabled selected>Select a Product</option>\n            '.concat(
                                      o
                                        .map(function (t) {
                                          return '<option value="'
                                            .concat(t.id, '">')
                                            .concat(t.title, "</option>");
                                        })
                                        .join(""),
                                      "\n          </select>\n        "
                                    )),
                                  a
                                    .querySelector(".products")
                                    .addEventListener("click", function (t) {
                                      var n =
                                        a.querySelector("option:first-child");
                                      t.target !== n ||
                                        n.dataset.clicked ||
                                        ((n.dataset.clicked = !0),
                                        (n.style.display = "none"),
                                        (n.disabled = !0));
                                    }),
                                  a
                                );
                              },
                              onEvent: function (t) {
                                for (
                                  var n,
                                    o = t.elInput,
                                    a = t.component,
                                    i = o.querySelector(".products"),
                                    r = 0;
                                  r < e.length;
                                  r++
                                )
                                  e[r].id == i.value &&
                                    (e[r].value, i.value, (n = e[r]));
                                a.addAttributes({
                                  selectedData: JSON.stringify(n),
                                }),
                                  (a.attributes.selectedData =
                                    JSON.stringify(n)),
                                  console.log(a);
                              },
                            }),
                            [3, 5]
                          );
                        case 4:
                          return (
                            (r = s.sent()),
                            console.log("Error in Fetching Data", r),
                            [3, 5]
                          );
                        case 5:
                          return [2];
                      }
                    });
                  });
                })(t),
                _(t),
                [2]
              );
            })
          );
        });
      };
      return n;
    })()
);
//# sourceMappingURL=index.js.map
