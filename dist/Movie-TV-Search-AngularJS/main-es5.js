(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/chenxiang/Downloads/571hw/571_HW8_efewqdqfe/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0SVh":
    /*!*********************************************************!*\
      !*** ./src/app/components/my-list/my-list.component.ts ***!
      \*********************************************************/

    /*! exports provided: MyListComponent */

    /***/
    function SVh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyListComponent", function () {
        return MyListComponent;
      });
      /* harmony import */


      var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../LocalStorage */
      "GMd0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1, a2) {
        return ["/watch/", a1, a2];
      };

      function MyListComponent_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cur_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, cur_r3.type, cur_r3.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cur_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", cur_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", cur_r3.title);
        }
      }

      function MyListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My WatchList");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyListComponent_div_1_div_4_Template, 9, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.mylistData);
        }
      }

      function MyListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No items found in Watchlist.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var MyListComponent = /*#__PURE__*/function () {
        function MyListComponent() {
          _classCallCheck(this, MyListComponent);

          this.mylistData = [];
          this.mobile = false;
        }

        _createClass(MyListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mylistData = Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["getMylist"])();
          }
        }]);

        return MyListComponent;
      }();

      MyListComponent.ɵfac = function MyListComponent_Factory(t) {
        return new (t || MyListComponent)();
      };

      MyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyListComponent,
        selectors: [["app-my-list"]],
        decls: 3,
        vars: 2,
        consts: [[1, "mylistContainer"], ["class", "foundedContainer", 4, "ngIf"], ["class", "\u201CnotfoundedContainer\u201D", 4, "ngIf"], [1, "foundedContainer"], [1, "title", "BigTitle"], [1, "mainContainer"], ["class", "singlePoster", 4, "ngFor", "ngForOf"], [1, "singlePoster"], [1, "singleA"], [1, "aClass", 3, "routerLink"], [1, "titleText"], [1, "shadow"], [1, "picsum-img-wrapper"], [1, "imgPic", 3, "src", "alt"], [1, "\u201CnotfoundedContainer\u201D"], [1, "ntitile", "BigTitle"]],
        template: function MyListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyListComponent_div_1_Template, 5, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyListComponent_div_2_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylistData.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mylistData.length === 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".mylistContainer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    padding: 0 6rem 0 9rem;\n    min-height: 94vh;\n}\n.title[_ngcontent-%COMP%]{\n\n}\n.ntitile[_ngcontent-%COMP%]{\n    margin-top: 4rem;\n    text-align: center;\n}\n.mainContainer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n}\n.singlePoster[_ngcontent-%COMP%]{\n    \n    padding: 4% 1.5% 0 1.5%;\n    text-align: center;\n    position: relative;\n    width: 15% \n}\n.singleA[_ngcontent-%COMP%]{\n   \n}\n.singleA[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n.singleA[_ngcontent-%COMP%]:hover   .shadow[_ngcontent-%COMP%]{\n    opacity: 1;\n    width:100%;\n}\n.singleA[_ngcontent-%COMP%]:hover   .titleText[_ngcontent-%COMP%]{\n    opacity: 1;\n    width:100%;\n}\n.titleText[_ngcontent-%COMP%]{\n    width: 75%;\n    font-size: 1.2vw;\n    color: white;\n    z-index: 3;\n    position: absolute;\n    bottom: 0.5vw;\n    word-wrap: break-word;\n    word-break: normal;\n    overflow: hidden;\n    opacity: 0;\n    margin-left: 0.5vw;\n    text-align:left;\n    padding-right:2vw\n}\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\n.imgPic[_ngcontent-%COMP%]{\n    \n    height : 100%;\n    width: 100%;\n    max-width: 11.5vw;\n    z-index: 1;\n}\n.shadow[_ngcontent-%COMP%]{\n    display: flex;\n    background-image: linear-gradient(to top, rgba(0,0,0,1.1) , rgba(0,0,0,0.1));\n    filter: blur(0.6rem);\n    opacity: 0;\n    width: 80%;\n    height: 50%;\n    z-index: 2;\n    position: absolute;\n    bottom: 0;\n}\n@media (max-width:990px){\n    .mylistContainer[_ngcontent-%COMP%]{\n        padding: 0 2rem 0 2rem;\n    }\n    .mainContainer[_ngcontent-%COMP%]{\n        flex-direction: column;\n    }\n    .singlePoster[_ngcontent-%COMP%]{\n        \n        width: 100%;\n        margin-top: 2rem;\n        margin-bottom: 6rem;\n        padding-left: 12vw;\n        padding-right: 12vw;\n    }\n    .imgPic[_ngcontent-%COMP%]{\n        height : 81vw;\n        max-width: 56vw;\n        z-index: 1;\n    }\n    .singleA[_ngcontent-%COMP%]:hover   .shadow[_ngcontent-%COMP%]{\n        width:88.3%;\n        left: 5.9%;\n    }\n    .singleA[_ngcontent-%COMP%]:hover   .titleText[_ngcontent-%COMP%]{\n        width: 82.5%;\n        left:11%;\n    }\n    .shadow[_ngcontent-%COMP%]{\n        opacity: 1;\n        width:64.3%;\n        left:17.9%;\n    }\n    .titleText[_ngcontent-%COMP%]{\n        opacity: 1;\n        font-size: 4.5vw;\n        width:60%;\n        bottom: 3%;\n        left:22%\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO29CQUNnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiw0RUFBNEU7SUFDNUUsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxVQUFVO1FBQ1Y7SUFDSjtBQUNKIiwiZmlsZSI6Im15LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWxpc3RDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgNnJlbSAwIDlyZW07XG4gICAgbWluLWhlaWdodDogOTR2aDtcbn1cbi50aXRsZXtcblxufVxuLm50aXRpbGV7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zaW5nbGVQb3N0ZXJ7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICAgIHBhZGRpbmc6IDQlIDEuNSUgMCAxLjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE1JSBcbn1cbi5zaW5nbGVBe1xuICAgXG59XG4uc2luZ2xlQTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uc2luZ2xlQTpob3ZlciAuc2hhZG93e1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5zaW5nbGVBOmhvdmVyIC50aXRsZVRleHR7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDoxMDAlO1xufVxuLnRpdGxlVGV4dHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMC41dnc7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OjJ2d1xufVxuLnBpY3N1bS1pbWctd3JhcHBlcntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZ1BpY3tcbiAgICAvKiBoZWlnaHQgOiAxOXZ3O1xuICAgIHdpZHRoOiAxMS41dnc7ICovXG4gICAgaGVpZ2h0IDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDExLjV2dztcbiAgICB6LWluZGV4OiAxO1xufVxuLnNoYWRvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMS4xKSAsIHJnYmEoMCwwLDAsMC4xKSk7XG4gICAgZmlsdGVyOiBibHVyKDAuNnJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk5MHB4KXtcbiAgICAubXlsaXN0Q29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW0gMCAycmVtO1xuICAgIH1cbiAgICAubWFpbkNvbnRhaW5lcntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnNpbmdsZVBvc3RlcntcbiAgICAgICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnZ3O1xuICAgIH1cbiAgICAuaW1nUGlje1xuICAgICAgICBoZWlnaHQgOiA4MXZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDU2dnc7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5zaW5nbGVBOmhvdmVyIC5zaGFkb3d7XG4gICAgICAgIHdpZHRoOjg4LjMlO1xuICAgICAgICBsZWZ0OiA1LjklO1xuICAgIH1cbiAgICAuc2luZ2xlQTpob3ZlciAudGl0bGVUZXh0e1xuICAgICAgICB3aWR0aDogODIuNSU7XG4gICAgICAgIGxlZnQ6MTElO1xuICAgIH1cbiAgICAuc2hhZG93e1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDo2NC4zJTtcbiAgICAgICAgbGVmdDoxNy45JTtcbiAgICB9XG4gICAgLnRpdGxlVGV4dHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiA0LjV2dztcbiAgICAgICAgd2lkdGg6NjAlO1xuICAgICAgICBib3R0b206IDMlO1xuICAgICAgICBsZWZ0OjIyJVxuICAgIH1cbn1cblxuXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "151J":
    /*!*******************************************************!*\
      !*** ./src/app/components/detail/detail.component.ts ***!
      \*******************************************************/

    /*! exports provided: DetailComponent */

    /***/
    function J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
        return DetailComponent;
      });
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../CommonFun */
      "N1mo");
      /* harmony import */


      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../ipconfig.json */
      "6jeS");

      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../ipconfig.json */
      "6jeS", 1);
      /* harmony import */


      var _LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../LocalStorage */
      "GMd0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_gets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/gets.service */
      "Rm7d");
      /* harmony import */


      var _video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./video/video.component */
      "eZFB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _cast_cast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cast/cast.component */
      "FqaP");
      /* harmony import */


      var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./review/review.component */
      "OFvo");
      /* harmony import */


      var _home_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../home/carousel-item/carousel-item.component */
      "ZVOs");

      function DetailComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Genres : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.detailData.genres);
        }
      }

      function DetailComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Spoken Languages : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.detailData.spoken_languages);
        }
      }

      function DetailComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.detailData.overview);
        }
      }

      var DetailComponent = /*#__PURE__*/function () {
        function DetailComponent(route, router, getsService) {
          _classCallCheck(this, DetailComponent);

          this.route = route;
          this.router = router;
          this.getsService = getsService;
          this.videoData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initVideo"])();
          this.detailData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initDetail"])();
          this.yearTimeVote = '';
          this.isNeedAddCheckList = true;
          this.showChecklist = false;
          this.twitterlink = '';
          this.facebooklink = '';
          this.castData = [];
          this.reviewData = [];
          this.recommendedTitle = '';
          this.recommendedData = [];
          this.similarTitle = '';
          this.similarData = [];
        }

        _createClass(DetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (data) {
              _this.type = data.type;
              _this.id = data.id;

              _this.fetchData(_this.type, _this.id);
            });
          }
        }, {
          key: "fetchData",
          value: function fetchData(type, id) {
            var _this2 = this;

            if (type === 'movie') {
              this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/detail_movie?id=' + id).subscribe(function (res) {
                _this2.detailData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieDetail"])(res);
                var cur = {
                  title: _this2.detailData.title,
                  id: _this2.id,
                  poster_path: _this2.detailData.poster_path,
                  backdrop_path: _this2.detailData.backdrop_path,
                  type: _this2.type
                };
                Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["addContinueWatch"])(cur);
                _this2.yearTimeVote = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["generateYearTimeVote"])(_this2.detailData);

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/cast_movie?id=' + id).subscribe(function (res) {
                  _this2.castData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterCast"])(res);
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/review_movie?id=' + id).subscribe(function (res) {
                  _this2.reviewData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterReview"])(res);
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/recommended_movie?id=' + id).subscribe(function (res) {
                  _this2.recommendedData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
                  _this2.recommendedTitle = 'Recommended Movies';
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/similar_movie?id=' + id).subscribe(function (res) {
                  _this2.similarData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
                  _this2.similarTitle = 'Similar Movies';
                });

                var curInfo = {
                  poster_path: _this2.detailData.poster_path,
                  type: _this2.type,
                  id: _this2.id,
                  title: _this2.detailData.title
                };
                _this2.isNeedAddCheckList = Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["checkContain"])(Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["getMylist"])(), curInfo);

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/video_movie?id=' + id).subscribe(function (res) {
                  _this2.videoData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterVideo"])(res);

                  if (_this2.detailData.title !== 'N/A') {
                    _this2.twitterlink = ' ' + _this2.detailData.title + '\n' + 'https://www.youtube.com/watch?v=' + _this2.videoData.key + '\n' + "#USC  #CSCI571  #FightOn";
                    _this2.twitterlink = encodeURIComponent(_this2.twitterlink);
                    _this2.facebooklink = 'https://www.youtube.com/watch?v=' + _this2.videoData.key;
                    _this2.facebooklink = encodeURIComponent(_this2.facebooklink);
                  }
                });
              });
            } else if (type === 'tv') {
              this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/detail_tv?id=' + id).subscribe(function (res) {
                _this2.detailData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvDetail"])(res);
                var cur = {
                  title: _this2.detailData.title,
                  id: _this2.id,
                  poster_path: _this2.detailData.poster_path,
                  backdrop_path: _this2.detailData.backdrop_path,
                  type: _this2.type
                };
                Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["addContinueWatch"])(cur);
                _this2.yearTimeVote = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["generateYearTimeVote"])(_this2.detailData);

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/cast_tv?id=' + id).subscribe(function (res) {
                  _this2.castData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterCast"])(res);
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/review_tv?id=' + id).subscribe(function (res) {
                  _this2.reviewData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterReview"])(res);
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/recommended_tv?id=' + id).subscribe(function (res) {
                  _this2.recommendedData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvArrInCarousel"])(res);
                  _this2.recommendedTitle = 'Recommended TV Shows';
                });

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/similar_tv?id=' + id).subscribe(function (res) {
                  _this2.similarData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvArrInCarousel"])(res);
                  _this2.similarTitle = 'Similar TV Shows';
                });

                var curInfo = {
                  poster_path: _this2.detailData.poster_path,
                  type: _this2.type,
                  id: _this2.id,
                  title: _this2.detailData.title
                };
                _this2.isNeedAddCheckList = Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["checkContain"])(Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["getMylist"])(), curInfo);

                _this2.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/video_tv?id=' + id).subscribe(function (res) {
                  _this2.videoData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterVideo"])(res);

                  if (_this2.detailData.title !== 'N/A') {
                    _this2.twitterlink = ' ' + _this2.detailData.title + '\n' + 'https://www.youtube.com/watch?v=' + _this2.videoData.key + '\n' + "#USC  #CSCI571  #FightOn";
                    _this2.twitterlink = encodeURIComponent(_this2.twitterlink);
                    _this2.facebooklink = 'https://www.youtube.com/watch?v=' + _this2.videoData.key;
                    _this2.facebooklink = encodeURIComponent(_this2.facebooklink);
                  }
                });
              });
            }
          }
        }, {
          key: "checklistBtnFun",
          value: function checklistBtnFun() {
            var _this3 = this;

            this.isNeedAddCheckList = !this.isNeedAddCheckList;
            var curInfo = {
              poster_path: this.detailData.poster_path,
              type: this.type,
              id: this.id,
              title: this.detailData.title
            }; //add

            if (this.isNeedAddCheckList) {
              Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["addMylist"])(curInfo);
            } //remove
            else {
                Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["removeMylist"])(curInfo);
              }

            this.showChecklist = true;
            this.time = setTimeout( //arrow function(this => class)
            //traditional function(this => window),the settimeout function executes on the window scope
            function () {
              _this3.showChecklist = false;
              clearTimeout(_this3.time);
            }, 5000);
          }
        }, {
          key: "cancelchecklist",
          value: function cancelchecklist() {
            this.showChecklist = false;
            clearTimeout(this.time);
          }
        }]);

        return DetailComponent;
      }();

      DetailComponent.ɵfac = function DetailComponent_Factory(t) {
        return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_gets_service__WEBPACK_IMPORTED_MODULE_5__["GetsService"]));
      };

      DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DetailComponent,
        selectors: [["app-detail"]],
        decls: 35,
        vars: 25,
        consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], [1, "detailContainer"], [1, "topContainer"], [1, "videoContainer"], [3, "data"], [1, "introContainer"], [1, "title", "big", "white"], [1, "tagline", "light", "italic", "medium", "grey"], [1, "yearTimeVote", "light", "medium", "grey"], ["class", "genres small grey", 4, "ngIf"], ["class", "language small grey", 4, "ngIf"], [1, "checklistBtnContainer"], [1, "checklistBtn", "small", "white", 3, "click"], [1, "checklistInfoContainer"], [1, "small"], [1, "InfoCancelBtn", 3, "click"], ["class", "descrContainer", 4, "ngIf"], [1, "shareContainer"], [1, "belowtitle", "medium", "white"], [1, "belowtitle"], ["target", "_blank", 1, "fa", "fa-twitter", 3, "href"], ["target", "_blank", 1, "fa", "fa-facebook-square", "fa-facebook-color", 3, "href"], [1, "carousal"], [3, "data", "title"], [1, "genres", "small", "grey"], [1, "white"], [1, "light"], [1, "language", "small", "grey"], [1, "descrContainer"], [1, "small", "grey", "light"]],
        template: function DetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-video", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetailComponent_div_13_Template, 5, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DetailComponent_div_14_Template, 5, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_16_listener() {
              return ctx.checklistBtnFun();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_21_listener() {
              return ctx.cancelchecklist();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u2716");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DetailComponent_div_23_Template, 5, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "app-cast", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-review", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "app-carousel-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "app-carousel-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.videoData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detailData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.detailData.tagline);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.yearTimeVote);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.detailData.genres);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.detailData.spoken_languages);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](!ctx.isNeedAddCheckList ? "" : "isRemove");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx.isNeedAddCheckList ? "Add to Watchlist" : "Remove from Watchlist");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.isNeedAddCheckList ? "addedInfo" : "removeInfo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.showChecklist ? "flex" : "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isNeedAddCheckList ? "Added to watchlist." : "Removed from watchlist.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.isNeedAddCheckList ? "addedInfo" : "removeInfo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx.detailData.overview);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/intent/tweet?text=Watch", ctx.twitterlink, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.facebooklink, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.castData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.reviewData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.recommendedData)("title", ctx.recommendedTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.similarData)("title", ctx.similarTitle);
          }
        },
        directives: [_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _cast_cast_component__WEBPACK_IMPORTED_MODULE_8__["CastComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"], _home_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__["CarouselItemComponent"]],
        styles: ["div[_ngcontent-%COMP%]{\n    word-wrap: break-word;\n    word-break: normal;\n}\n.detailContainer[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.topContainer[_ngcontent-%COMP%]{\n    padding: 0 7vw 0 7vw;\n    \n}\n.videoContainer[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.introContainer[_ngcontent-%COMP%]{\n    display: inline-block;\n    min-height: 40vw;\n    width:80vw;\n    padding: 5vw 0 0 0;\n    \n}\n.tagline[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n.yearTimeVote[_ngcontent-%COMP%]{\n    margin-top: 1.8rem;\n    white-space: pre\n}\n.genres[_ngcontent-%COMP%]{\n    margin-top: 0.8rem;\n}\n.language[_ngcontent-%COMP%]{\n    margin-top: 0;\n}\n.checklistBtnContainer[_ngcontent-%COMP%]{\n    margin-top: 1.4rem;\n}\n.checklistBtn[_ngcontent-%COMP%]{\n    background: rgb(68, 137, 248);\n    height:2.4rem;\n    width:10.5rem;\n    border-radius: 0.3rem;\n    border: transparent;\n}\n.watch[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    line-height: 1.7rem;\n}\n.isRemove[_ngcontent-%COMP%]{\n    width:14rem;\n}\n.checklistBtn[_ngcontent-%COMP%]:focus{\n    outline: none;\n}\n.checklistBtn[_ngcontent-%COMP%]:hover{\n    background: rgb(56,118,224);\n}\n.checklistInfoContainer[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 1.5rem;\n    margin-top: 1.5rem;\n    height:3rem;\n    width:100%;\n    border-radius: 0.3rem;\n}\n.InfoCancelBtn[_ngcontent-%COMP%]{\n    height:3rem;\n    width:3rem;\n    border-radius: 0.3rem;\n    border: transparent;\n}\n.InfoCancelBtn[_ngcontent-%COMP%]:focus{\n    outline: none;\n}\n.addedInfo[_ngcontent-%COMP%]{\n    background: rgb(206, 233, 215);\n    color:rgb(106,156,129)\n}\n.removeInfo[_ngcontent-%COMP%]{\n    background: rgb(245, 208, 214);\n    color:rgb(169,125,121)\n}\n.descrContainer[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    padding: 0 7vw 0 7vw;\n}\n.belowtitle[_ngcontent-%COMP%]{\n    height:2.5rem;\n}\n.shareContainer[_ngcontent-%COMP%]{\n    margin-top: 2rem;\n    padding: 0 7vw 0 7vw;\n}\n.carousal[_ngcontent-%COMP%]{\n    margin-top: 4rem;\n    padding: 0 6vw 0 6vw;\n}\n.fa[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    width: 2rem;\n    text-align: center;\n    text-decoration: none;\n    margin: 0 1rem 0 0;\n  }\n.fa[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n}\n.fa-facebook-color[_ngcontent-%COMP%] {\n    color: rgb(4, 40, 174);\n}\n.fa-twitter[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #55ACEE;\n}\n@media (min-width:990px){\n    .detailContainer[_ngcontent-%COMP%]{\n        \n    }\n    .topContainer[_ngcontent-%COMP%]{\n        display: flex;\n    }\n    .introContainer[_ngcontent-%COMP%]{\n        min-height: 25vw;\n        width: 30vw;\n        padding: 0 3vw 0 3vw;\n    }\n    .descrContainer[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n        padding: 0 10vw 0 7vw;\n    }\n    .shareContainer[_ngcontent-%COMP%]{\n        margin-top: 2rem;\n        padding: 0 10vw 0 7vw;\n    }\n    .tagline[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n    .yearTimeVote[_ngcontent-%COMP%]{\n        margin-top: 2.2rem;\n    }\n    .genres[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n    .checklistBtnContainer[_ngcontent-%COMP%]{\n        margin-top: 2.2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUVGO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC1icmVhazogbm9ybWFsO1xufVxuLmRldGFpbENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3BDb250YWluZXJ7XG4gICAgcGFkZGluZzogMCA3dncgMCA3dnc7XG4gICAgXG59XG4udmlkZW9Db250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmludHJvQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4taGVpZ2h0OiA0MHZ3O1xuICAgIHdpZHRoOjgwdnc7XG4gICAgcGFkZGluZzogNXZ3IDAgMCAwO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjsgKi9cbn1cbi50YWdsaW5le1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG4ueWVhclRpbWVWb3Rle1xuICAgIG1hcmdpbi10b3A6IDEuOHJlbTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlXG59XG4uZ2VucmVze1xuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcbn1cbi5sYW5ndWFnZXtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuLmNoZWNrbGlzdEJ0bkNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XG59XG4uY2hlY2tsaXN0QnRue1xuICAgIGJhY2tncm91bmQ6IHJnYig2OCwgMTM3LCAyNDgpO1xuICAgIGhlaWdodDoyLjRyZW07XG4gICAgd2lkdGg6MTAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbn1cbi53YXRjaHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xufVxuLmlzUmVtb3Zle1xuICAgIHdpZHRoOjE0cmVtO1xufVxuLmNoZWNrbGlzdEJ0bjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmNoZWNrbGlzdEJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTYsMTE4LDIyNCk7XG59XG4uY2hlY2tsaXN0SW5mb0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBoZWlnaHQ6M3JlbTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cbi5JbmZvQ2FuY2VsQnRue1xuICAgIGhlaWdodDozcmVtO1xuICAgIHdpZHRoOjNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG59XG4uSW5mb0NhbmNlbEJ0bjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmFkZGVkSW5mb3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA2LCAyMzMsIDIxNSk7XG4gICAgY29sb3I6cmdiKDEwNiwxNTYsMTI5KVxufVxuLnJlbW92ZUluZm97XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjA4LCAyMTQpO1xuICAgIGNvbG9yOnJnYigxNjksMTI1LDEyMSlcbn1cbi5kZXNjckNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgcGFkZGluZzogMCA3dncgMCA3dnc7XG59XG4uYmVsb3d0aXRsZXtcbiAgICBoZWlnaHQ6Mi41cmVtO1xufVxuLnNoYXJlQ29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgcGFkZGluZzogMCA3dncgMCA3dnc7XG59XG4uY2Fyb3VzYWx7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICBwYWRkaW5nOiAwIDZ2dyAwIDZ2dztcbn1cbi5mYSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICB9XG4gIFxuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mYS1mYWNlYm9vay1jb2xvciB7XG4gICAgY29sb3I6IHJnYig0LCA0MCwgMTc0KTtcbn1cblxuLmZhLXR3aXR0ZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNTVBQ0VFO1xufVxuQG1lZGlhIChtaW4td2lkdGg6OTkwcHgpe1xuICAgIC5kZXRhaWxDb250YWluZXJ7XG4gICAgICAgIC8qIHBhZGRpbmctdG9wOiA2dnc7ICovXG4gICAgfVxuICAgIC50b3BDb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5pbnRyb0NvbnRhaW5lcntcbiAgICAgICAgbWluLWhlaWdodDogMjV2dztcbiAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgICAgIHBhZGRpbmc6IDAgM3Z3IDAgM3Z3O1xuICAgIH1cbiAgICAuZGVzY3JDb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMTB2dyAwIDd2dztcbiAgICB9XG4gICAgLnNoYXJlQ29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDEwdncgMCA3dnc7XG4gICAgfVxuICAgIC50YWdsaW5le1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgICAueWVhclRpbWVWb3Rle1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjJyZW07XG4gICAgfVxuICAgIC5nZW5yZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICAgIC5jaGVja2xpc3RCdG5Db250YWluZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "6jeS":
    /*!***********************!*\
      !*** ./ipconfig.json ***!
      \***********************/

    /*! exports provided: ip, default */

    /***/
    function jeS(module) {
      module.exports = JSON.parse("{\"ip\":{\"node\":\"https://massive-marker-308712.wl.r.appspot.com/api\",\"angular\":\"https://massive-marker-308712.wl.r.appspot.com\"}}");
      /***/
    },

    /***/
    "9IuO":
    /*!******************************************************************************!*\
      !*** ./src/app/components/home/carousel-header/carousel-header.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CarouselHeaderComponent */

    /***/
    function IuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselHeaderComponent", function () {
        return CarouselHeaderComponent;
      });
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../CommonFun */
      "N1mo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["carousel"];

      var _c1 = function _c1(a2) {
        return ["./watch/", "movie", a2];
      };

      function CarouselHeaderComponent_2_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, data_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", data_r2.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", data_r2.title);
        }
      }

      function CarouselHeaderComponent_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarouselHeaderComponent_2_ng_template_0_Template, 7, 6, "ng-template", 3);
        }
      }

      var CarouselHeaderComponent = /*#__PURE__*/function () {
        function CarouselHeaderComponent() {
          _classCallCheck(this, CarouselHeaderComponent);

          this.dataArr = [];
          this.interval = 5000;
          this.paused = false;
          this.unpauseOnArrow = false;
          this.pauseOnIndicator = false;
          this.pauseOnHover = true;
          this.pauseOnFocus = true;
          this.showNavigationIndicators = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["getCurWidth"])() > 990 ? true : false;
        }

        _createClass(CarouselHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.data !== undefined) {
              this.dataArr = this.data;
            }
          }
        }, {
          key: "togglePaused",
          value: function togglePaused() {
            if (this.paused) {
              this.carousel.cycle();
            } else {
              this.carousel.pause();
            }

            this.paused = !this.paused;
          }
        }, {
          key: "onSlide",
          value: function onSlide(slideEvent) {
            if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
              this.togglePaused();
            }

            if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
              this.togglePaused();
            }
          }
        }]);

        return CarouselHeaderComponent;
      }();

      CarouselHeaderComponent.ɵfac = function CarouselHeaderComponent_Factory(t) {
        return new (t || CarouselHeaderComponent)();
      };

      CarouselHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CarouselHeaderComponent,
        selectors: [["app-carousel-header"]],
        viewQuery: function CarouselHeaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
          }
        },
        inputs: {
          data: "data",
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 5,
        consts: [[1, "container", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], [1, "picsum-img-wrapper"], [1, "shadow"], [1, "carousel-caption", "title"], [1, "titleText"], [1, "imgPic", 3, "src", "alt"]],
        template: function CarouselHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-carousel", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function CarouselHeaderComponent_Template_ngb_carousel_slide_0_listener($event) {
              return ctx.onSlide($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CarouselHeaderComponent_2_Template, 1, 0, undefined, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", ctx.interval)("pauseOnHover", ctx.pauseOnHover)("pauseOnFocus", ctx.pauseOnFocus)("showNavigationIndicators", ctx.showNavigationIndicators);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataArr);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".container[_ngcontent-%COMP%]{\n    width:85vw;\n}\n.container[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    transform: scale(1.05);\n}\n.container[_ngcontent-%COMP%]:hover   .titleText[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n.container[_ngcontent-%COMP%]:hover   .shadow[_ngcontent-%COMP%]{\n    opacity: 0.6;\n}\n.container[_ngcontent-%COMP%]:focus{\n    outline:none;\n}\n.title[_ngcontent-%COMP%]{\n    display: inline;\n    left:3rem;\n    width: 20rem;\n    text-align: start;\n    bottom: 1vw;\n    word-wrap: break-word;\n    word-break: normal;\n    overflow: hidden;\n}\n.titleText[_ngcontent-%COMP%]{\n    \n    font-size: 2rem;\n    z-index: 3;\n    opacity: 0;\n}\n.imgPic[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 45vh;\n    z-index: 1;\n}\n.shadow[_ngcontent-%COMP%]{\n    background-image: linear-gradient(to top, rgba(0,0,0,1.1) , rgba(0,0,0,0.1));\n    filter: blur(0.6rem);\n    opacity: 0;\n    width: 100%;\n    height: 50%;\n    z-index: 2;\n    position: absolute;\n    top: 50%;\n    left: 0;\n}\n.container[_ngcontent-%COMP%]     .carousel-indicators{\n    display: flex;\n}\n.container[_ngcontent-%COMP%]     .carousel-control-prev{\n    width: 4.5vw;\n    margin-left: 0.9vw;\n}\n.container[_ngcontent-%COMP%]     .carousel-control-next{\n    width: 4.5vw;\n    margin-right: 0.9vw;\n}\n@media (max-width:990px){\n    .title[_ngcontent-%COMP%]{\n        display: inline;\n        left: 2.5vw;\n        bottom: 0.5vw;\n        text-align: start;\n    }\n    .imgPic[_ngcontent-%COMP%]{\n        height: 100%;\n    }\n\n    .titleText[_ngcontent-%COMP%]{\n        \n        font-size: 1.3rem;\n        z-index: 3;\n        opacity: 0;\n    }\n    .container[_ngcontent-%COMP%]     .carousel-indicators{\n        display: none;\n    }\n    .container[_ngcontent-%COMP%]     .carousel-control-prev{\n        width: 15%;\n        margin-left: 0.9vw;\n    }\n    .container[_ngcontent-%COMP%]     .carousel-control-next{\n        width: 15%;\n        margin-right: 0.9vw;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztBQUNYO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6ImNhcm91c2VsLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICB3aWR0aDo4NXZ3O1xufVxuLmNvbnRhaW5lcjpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5jb250YWluZXI6aG92ZXIgLnRpdGxlVGV4dHtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lcjpob3ZlciAuc2hhZG93e1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cbi5jb250YWluZXI6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lO1xufVxuLnRpdGxle1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsZWZ0OjNyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGJvdHRvbTogMXZ3O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50aXRsZVRleHR7XG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB6LWluZGV4OiAzO1xuICAgIG9wYWNpdHk6IDA7XG59XG4uaW1nUGlje1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDV2aDtcbiAgICB6LWluZGV4OiAxO1xufVxuLnNoYWRvd3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDEuMSkgLCByZ2JhKDAsMCwwLDAuMSkpO1xuICAgIGZpbHRlcjogYmx1cigwLjZyZW0pO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbn1cbi5jb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3Jze1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOiA0LjV2dztcbiAgICBtYXJnaW4tbGVmdDogMC45dnc7XG59XG4uY29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIHdpZHRoOiA0LjV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOXZ3O1xufSBcbkBtZWRpYSAobWF4LXdpZHRoOjk5MHB4KXtcbiAgICAudGl0bGV7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbGVmdDogMi41dnc7XG4gICAgICAgIGJvdHRvbTogMC41dnc7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgICAuaW1nUGlje1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRpdGxlVGV4dHtcbiAgICAgICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciA6Om5nLWRlZXAgLmNhcm91c2VsLWluZGljYXRvcnN7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5jb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjl2dztcbiAgICB9XG4gICAgLmNvbnRhaW5lciA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjl2dztcbiAgICB9IFxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../CommonFun */
      "N1mo");
      /* harmony import */


      var _LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../LocalStorage */
      "GMd0");
      /* harmony import */


      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../ipconfig.json */
      "6jeS");

      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../ipconfig.json */
      "6jeS", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_gets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/gets.service */
      "Rm7d");
      /* harmony import */


      var _carousel_header_carousel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./carousel-header/carousel-header.component */
      "9IuO");
      /* harmony import */


      var _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./carousel-item/carousel-item.component */
      "ZVOs");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(getsService) {
          _classCallCheck(this, HomeComponent);

          this.getsService = getsService;
          this.Movietype = "movie";
          this.Tvtype = "tv";
          this.continueWatchtitle = "Continue Watching";
          this.popularMovietitle = "Popular Movies";
          this.topRatedMovietitle = "Top Rated Movies";
          this.trendingMovietitle = "Trending Movies";
          this.popularTVtitle = "Popular TV Shows";
          this.topRatedTVtitle = "Top Rated TV Shows";
          this.trendingTVtitle = "Trending TV Shows";
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.continueWatchData = Object(_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["getContinueWatch"])();
            this.fetchData();
          }
        }, {
          key: "fetchData",
          value: function fetchData() {
            var _this4 = this;

            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/currently_playing').subscribe(function (res) {
              _this4.currentPlayingData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/popular_movies').subscribe(function (res) {
              _this4.popularMovieData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/top_rated_movies').subscribe(function (res) {
              _this4.topRatedMovieData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/trending_movies').subscribe(function (res) {
              _this4.trendingMovieData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullMovieArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/popular_tv').subscribe(function (res) {
              _this4.popularTVData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/top_rated_tv').subscribe(function (res) {
              _this4.topRatedTVData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvArrInCarousel"])(res);
            });
            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_2__.ip.node + '/gets/trending_tv').subscribe(function (res) {
              _this4.trendingTVData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterNullTvArrInCarousel"])(res);
            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_gets_service__WEBPACK_IMPORTED_MODULE_4__["GetsService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 11,
        vars: 16,
        consts: [[1, "homeContainer"], [1, "headerContainer"], [3, "data", "type"], [1, "itemContainer"], [3, "data", "title"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-carousel-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-carousel-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.currentPlayingData)("type", ctx.Movietype);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.continueWatchData)("title", ctx.continueWatchtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.popularMovieData)("title", ctx.popularMovietitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.topRatedMovieData)("title", ctx.topRatedMovietitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.trendingMovieData)("title", ctx.trendingMovietitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.popularTVData)("title", ctx.popularTVtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.topRatedTVData)("title", ctx.topRatedTVtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.trendingTVData)("title", ctx.trendingTVtitle);
          }
        },
        directives: [_carousel_header_carousel_header_component__WEBPACK_IMPORTED_MODULE_5__["CarouselHeaderComponent"], _carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_6__["CarouselItemComponent"]],
        styles: [".homeContainer[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n@media (min-width:990px){\n    .homeContainer[_ngcontent-%COMP%]{\n        \n    }\n}\n.headerContainer[_ngcontent-%COMP%]{\n    padding: 0;\n}\n.itemContainer[_ngcontent-%COMP%]{\n    margin-top: 6vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6OTkwcHgpe1xuICAgIC5ob21lQ29udGFpbmVye1xuICAgICAgICAvKiBwYWRkaW5nLXRvcDogNnZ3OyAqL1xuICAgIH1cbn1cblxuLmhlYWRlckNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwO1xufVxuLml0ZW1Db250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogNnZ3O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "FqaP":
    /*!**********************************************************!*\
      !*** ./src/app/components/detail/cast/cast.component.ts ***!
      \**********************************************************/

    /*! exports provided: CastComponent */

    /***/
    function FqaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CastComponent", function () {
        return CastComponent;
      });
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../CommonFun */
      "N1mo");
      /* harmony import */


      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../ipconfig.json */
      "6jeS");

      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../ipconfig.json */
      "6jeS", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_gets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/gets.service */
      "Rm7d");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal/modal.component */
      "YaZ0");

      function CastComponent_div_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-modal", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modaldata", ctx_r2.modalData)("externaldata", ctx_r2.castExternalData);
        }
      }

      function CastComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CastComponent_div_0_div_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var cur_r5 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.castBtnFun(cur_r5.id, _r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " AS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cur_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cur_r5.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cur_r5.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cur_r5.character, " ");
        }
      }

      function CastComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CastComponent_div_0_ng_template_1_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Full and Crew");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CastComponent_div_0_div_7_Template, 9, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.castData);
        }
      }

      var CastComponent = /*#__PURE__*/function () {
        function CastComponent(getsService, modalService) {
          _classCallCheck(this, CastComponent);

          this.getsService = getsService;
          this.modalService = modalService;
          this.modalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initCastDetail"])();
          this.castExternalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initExternal"])();
        }

        _createClass(CastComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.data !== undefined) {
              this.castData = this.data;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "castBtnFun",
          value: function castBtnFun(id, modal) {
            var _this5 = this;

            this.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/cast_detail?id=' + id).subscribe(function (res) {
              _this5.modalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterCastDetail"])(res);

              _this5.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_1__.ip.node + '/gets/cast_external?id=' + id).subscribe(function (res) {
                _this5.castExternalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["filterExternal"])(res);

                _this5.modalService.open(modal, {
                  scrollable: true
                });
              });
            });
          }
        }]);

        return CastComponent;
      }();

      CastComponent.ɵfac = function CastComponent_Factory(t) {
        return new (t || CastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_gets_service__WEBPACK_IMPORTED_MODULE_3__["GetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
      };

      CastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CastComponent,
        selectors: [["app-cast"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "Container", 4, "ngIf"], [1, "Container"], ["modal", ""], [1, "BigTitle"], [1, "ItemContainer"], [1, "d-flex", "flex-row", "flex-nowrap", "overflowScroll", "contentHeight"], ["class", "Item", 3, "click", 4, "ngFor", "ngForOf"], [3, "modaldata", "externaldata"], [1, "Item", 3, "click"], [1, "Img", 3, "src"], [1, "Intro"], [1, "small", "black"], [1, "small", "bolder", "black"], [1, "small", "light", "black"]],
        template: function CastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CastComponent_div_0_Template, 8, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.castData.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]],
        styles: [".Container[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    padding: 0 7vw 0 7vw;\n}\n.ItemContainer[_ngcontent-%COMP%]{\n    margin-top: 1.5rem;\n}\n.Item[_ngcontent-%COMP%]{\n    height: 24rem;\n    max-width: 12rem;\n    margin-right: 1.5rem;\n    border-radius: 1rem;\n    display: flex;\n    flex:auto;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n.Item[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.Img[_ngcontent-%COMP%]{\n    height: 100%;\n    border-radius: 1rem 1rem 0 0;\n    overflow: hidden;\n}\n.Intro[_ngcontent-%COMP%]{\n    background: white;\n    border-radius: 0 0 1rem 1rem;\n    text-align: center;\n    padding: 1rem 2rem 1rem 1rem;\n}\n.contentHeight[_ngcontent-%COMP%]{\n    height: 27rem;\n}\n@media (min-width:990px){\n    .Container[_ngcontent-%COMP%]{\n        margin-top: 4rem;\n        padding: 0 10vw 0 7vw;\n    }\n    .ItemContainer[_ngcontent-%COMP%]{\n        margin-top: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAwIDd2dyAwIDd2dztcbn1cbi5JdGVtQ29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5JdGVte1xuICAgIGhlaWdodDogMjRyZW07XG4gICAgbWF4LXdpZHRoOiAxMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDphdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5JdGVtOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5JbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5JbnRyb3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAxcmVtO1xufVxuLmNvbnRlbnRIZWlnaHR7XG4gICAgaGVpZ2h0OiAyN3JlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOjk5MHB4KXtcbiAgICAuQ29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDEwdncgMCA3dnc7XG4gICAgfVxuICAgIC5JdGVtQ29udGFpbmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "GMd0":
    /*!*********************************!*\
      !*** ./src/app/LocalStorage.ts ***!
      \*********************************/

    /*! exports provided: checkContain, addMylist, getMylist, removeMylist, getContinueWatch, addContinueWatch */

    /***/
    function GMd0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkContain", function () {
        return checkContain;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addMylist", function () {
        return addMylist;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMylist", function () {
        return getMylist;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "removeMylist", function () {
        return removeMylist;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getContinueWatch", function () {
        return getContinueWatch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addContinueWatch", function () {
        return addContinueWatch;
      });

      var MAX_CAPACITY = 24;

      var checkContain = function checkContain(dataArr, data) {
        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i].id === data.id && data.type === dataArr[i].type) {
            return true;
          }
        }

        return false;
      };

      function removeContain(dataArr, data) {
        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i].id === data.id) {
            dataArr.splice(i, 1);
            return;
          }
        }
      }

      var addMylist = function addMylist(data) {
        var mylist = JSON.parse(localStorage.getItem('mylist'));

        if (!mylist || mylist.length === 0) {
          var mylistData = [];
          mylistData.unshift(data);
          localStorage.setItem('mylist', JSON.stringify(mylistData));
        } else {
          if (checkContain(mylist, data)) {
            removeContain(mylist, data);
            mylist.unshift(data);
            localStorage.setItem('mylist', JSON.stringify(mylist));
          } else {
            if (mylist.length < MAX_CAPACITY) {
              mylist.unshift(data);
            } else {
              mylist.pop();
              mylist.unshift(data);
            }

            localStorage.setItem('mylist', JSON.stringify(mylist));
          }
        }
      };

      var getMylist = function getMylist() {
        var mylist = JSON.parse(localStorage.getItem('mylist'));

        if (!mylist) {
          return [];
        }

        return mylist;
      };

      var removeMylist = function removeMylist(data) {
        var mylist = JSON.parse(localStorage.getItem('mylist'));

        if (checkContain(mylist, data)) {
          removeContain(mylist, data);
        }

        localStorage.setItem('mylist', JSON.stringify(mylist));
      };

      var getContinueWatch = function getContinueWatch() {
        var mylist = JSON.parse(localStorage.getItem('ContinueWatch'));

        if (!mylist) {
          return [];
        }

        return mylist;
      };

      var addContinueWatch = function addContinueWatch(data) {
        var mylist = JSON.parse(localStorage.getItem('ContinueWatch'));

        if (!mylist || mylist.length === 0) {
          var mylistData = [];
          mylistData.unshift(data);
          localStorage.setItem('ContinueWatch', JSON.stringify(mylistData));
        } else {
          if (checkContain(mylist, data)) {
            removeContain(mylist, data);
            mylist.unshift(data);
            localStorage.setItem('ContinueWatch', JSON.stringify(mylist));
          } else {
            if (mylist.length < MAX_CAPACITY) {
              mylist.unshift(data);
            } else {
              mylist.pop();
              mylist.unshift(data);
            }

            localStorage.setItem('ContinueWatch', JSON.stringify(mylist));
          }
        }
      };
      /***/

    },

    /***/
    "N1mo":
    /*!******************************!*\
      !*** ./src/app/CommonFun.ts ***!
      \******************************/

    /*! exports provided: getCurWidth, divideImgArr, filterNullMovieArrInCarousel, filterNullTvArrInCarousel, initDetail, filterNullMovieDetail, filterNullTvDetail, generateYearTimeVote, initVideo, filterVideo, filterCast, filterReview, initCastDetail, generateAlsoKnow, filterCastDetail, initExternal, filterExternal, initSearch, filterSearch */

    /***/
    function N1mo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCurWidth", function () {
        return getCurWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "divideImgArr", function () {
        return divideImgArr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNullMovieArrInCarousel", function () {
        return filterNullMovieArrInCarousel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNullTvArrInCarousel", function () {
        return filterNullTvArrInCarousel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initDetail", function () {
        return initDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNullMovieDetail", function () {
        return filterNullMovieDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterNullTvDetail", function () {
        return filterNullTvDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateYearTimeVote", function () {
        return generateYearTimeVote;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initVideo", function () {
        return initVideo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterVideo", function () {
        return filterVideo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterCast", function () {
        return filterCast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterReview", function () {
        return filterReview;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initCastDetail", function () {
        return initCastDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "generateAlsoKnow", function () {
        return generateAlsoKnow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterCastDetail", function () {
        return filterCastDetail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initExternal", function () {
        return initExternal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterExternal", function () {
        return filterExternal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initSearch", function () {
        return initSearch;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterSearch", function () {
        return filterSearch;
      });
      /* harmony import */


      var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! validator */
      "+QwO");
      /* harmony import */


      var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

      var getCurWidth = function getCurWidth() {
        return document.body.offsetWidth;
      };

      var divideImgArr = function divideImgArr(dataArr, k) {
        var res = [];
        var p = 0;
        var cur = [];

        while (p < dataArr.length) {
          if (p % k == 0) {
            if (p != 0) {
              res.push(cur);
            }

            cur = [];
          }

          cur.push(dataArr[p]);
          p++;

          if (p == dataArr.length) {
            res.push(cur);
          }
        }

        return res;
      };

      var filterNullMovieArrInCarousel = function filterNullMovieArrInCarousel(dataArr) {
        var res = [];

        for (var i = 0; i < dataArr.length; i++) {
          var cur = {
            id: null,
            title: null,
            poster_path: null,
            backdrop_path: null,
            type: null
          };
          cur.id = !dataArr[i].id ? null : dataArr[i].id;
          cur.title = !dataArr[i].title ? null : dataArr[i].title;
          cur.poster_path = !dataArr[i].poster_path ? "https://cinemaone.net/images/movie_placeholder.png" : "https://image.tmdb.org/t/p/w500" + dataArr[i].poster_path;
          cur.backdrop_path = !dataArr[i].backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" : "https://image.tmdb.org/t/p/w500" + dataArr[i].backdrop_path;
          cur.type = "movie";
          res.push(cur);
        }

        return res;
      };

      var filterNullTvArrInCarousel = function filterNullTvArrInCarousel(dataArr) {
        var res = [];

        for (var i = 0; i < dataArr.length; i++) {
          var cur = {
            id: null,
            title: null,
            poster_path: null,
            backdrop_path: null,
            type: null
          };
          cur.id = !dataArr[i].id ? null : dataArr[i].id;
          cur.title = !dataArr[i].name ? null : dataArr[i].name;
          cur.poster_path = !dataArr[i].poster_path ? "https://cinemaone.net/images/movie_placeholder.png" : "https://image.tmdb.org/t/p/w500" + dataArr[i].poster_path;
          cur.backdrop_path = !dataArr[i].backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" : "https://image.tmdb.org/t/p/w500" + dataArr[i].backdrop_path;
          cur.type = "tv";
          res.push(cur);
        }

        return res;
      };

      var getGenre = function getGenre(genreArr) {
        var res = '';

        for (var i = 0; i < genreArr.length; i++) {
          res += genreArr[i].name;

          if (i != genreArr.length - 1) {
            res += ', ';
          }
        }

        return res;
      };

      var getLanguages = function getLanguages(languageArr) {
        var res = '';

        for (var i = 0; i < languageArr.length; i++) {
          res += languageArr[i].english_name;

          if (i != languageArr.length - 1) {
            res += ', ';
          }
        }

        return res;
      };

      var getRuntime = function getRuntime(time) {
        var res = '';
        var hour = Math.floor(time / 60);
        var minute = time - hour * 60;

        if (hour !== 0) {
          res += hour + 'hrs ';
        }

        if (minute !== 0) {
          res += minute + 'mins';
        }

        return res;
      };

      var initDetail = function initDetail() {
        var res = {
          title: '',
          genres: '',
          spoken_languages: '',
          overview: '',
          release_date: '',
          tagline: '',
          vote_average: '',
          runtime: '',
          poster_path: '',
          backdrop_path: ''
        };
        return res;
      };

      var filterNullMovieDetail = function filterNullMovieDetail(data) {
        var res = {
          title: !data.title ? '' : data.title,
          genres: !data.genres ? '' : getGenre(data.genres),
          spoken_languages: !data.spoken_languages ? '' : getLanguages(data.spoken_languages),
          overview: !data.overview ? '' : data.overview,
          release_date: !data.release_date ? '' : data.release_date.slice(0, 4),
          tagline: !data.tagline ? '' : data.tagline,
          vote_average: !data.vote_average ? '' : '★ ' + data.vote_average,
          runtime: !data.runtime ? '' : getRuntime(data.runtime),
          poster_path: !data.poster_path ? "https://cinemaone.net/images/movie_placeholder.png" : "https://image.tmdb.org/t/p/w500" + data.poster_path,
          backdrop_path: !data.backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" : "https://image.tmdb.org/t/p/w500" + data.backdrop_path
        };
        return res;
      };

      var filterNullTvDetail = function filterNullTvDetail(data) {
        var res = {
          title: !data.name ? '' : data.name,
          genres: !data.genres ? '' : getGenre(data.genres),
          spoken_languages: !data.spoken_languages ? '' : getLanguages(data.spoken_languages),
          overview: !data.overview ? '' : data.overview,
          release_date: !data.first_air_date ? '' : data.first_air_date.slice(0, 4),
          tagline: !data.tagline ? '' : data.tagline,
          vote_average: !data.vote_average ? '' : '★ ' + data.vote_average,
          runtime: !data.episode_run_time ? '' : getRuntime(data.episode_run_time),
          poster_path: !data.poster_path ? "https://cinemaone.net/images/movie_placeholder.png" : "https://image.tmdb.org/t/p/w500" + data.poster_path,
          backdrop_path: !data.backdrop_path ? "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg" : "https://image.tmdb.org/t/p/w500" + data.backdrop_path
        };
        return res;
      };

      var generateYearTimeVote = function generateYearTimeVote(dataArr) {
        var res = '';

        if (!!dataArr.release_date) {
          res += dataArr.release_date;

          if (!!dataArr.vote_average || !!dataArr.runtime) {
            res += '  | ';
          }
        }

        if (!!dataArr.vote_average) {
          res += ' ';
          res += dataArr.vote_average;

          if (!!dataArr.runtime) {
            res += ' | ';
          }
        }

        if (!!dataArr.runtime) {
          res += dataArr.runtime;
        }

        return res;
      };

      var initVideo = function initVideo() {
        var obj = {
          site: '',
          type: '',
          name: '',
          key: ''
        };
        return obj;
      };

      var filterVideo = function filterVideo(dataArr) {
        var res = {
          site: '',
          type: '',
          name: '',
          key: 'tzkWB85ULJY'
        };

        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i].type === 'Trailer') {
            res.site = !dataArr[i].site ? '' : dataArr[i].site;
            res.type = !dataArr[i].type ? '' : dataArr[i].type;
            res.name = !dataArr[i].name ? '' : dataArr[i].name;
            res.key = !dataArr[i].key ? 'tzkWB85ULJY' : dataArr[i].key;
            return res;
          }

          if (dataArr[i].type === 'Teaser') {
            res.site = !dataArr[i].site ? '' : dataArr[i].site;
            res.type = !dataArr[i].type ? '' : dataArr[i].type;
            res.name = !dataArr[i].name ? '' : dataArr[i].name;
            res.key = !dataArr[i].key ? 'tzkWB85ULJY' : dataArr[i].key;
          }
        }

        return res;
      };

      var filterCast = function filterCast(dataArr) {
        var res = [];

        for (var i = 0; i < dataArr.length; i++) {
          if (!!dataArr[i].profile_path) {
            var cur = {
              id: !dataArr[i].id ? '' : dataArr[i].id,
              name: !dataArr[i].name ? '' : dataArr[i].name,
              character: !dataArr[i].character ? '' : dataArr[i].character,
              profile_path: 'https://image.tmdb.org/t/p/w500' + dataArr[i].profile_path
            };
            res.push(cur);
          }
        }

        return res;
      };

      var generateAvaPath = function generateAvaPath(avaPath) {
        var res = '';
        var options = {
          require_protocol: true
        };

        if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isURL(avaPath.slice(1), options)) {
          res = avaPath.slice(1);
        } else {
          res = 'https://image.tmdb.org/t/p/original/' + avaPath.slice(1);
        }

        return res;
      };

      var filterReview = function filterReview(dataArr) {
        var res = [];

        for (var i = 0; i < Math.min(dataArr.length, 10); i++) {
          var cur = {
            author: !dataArr[i].author ? '' : dataArr[i].author,
            content: !dataArr[i].content ? '' : dataArr[i].content,
            created_at: !dataArr[i].created_at ? '' : moment__WEBPACK_IMPORTED_MODULE_1___default()(dataArr[i].created_at).format('LL') + ', ' + moment__WEBPACK_IMPORTED_MODULE_1___default()(dataArr[i].created_at).format('LTS'),
            url: !dataArr[i].url ? '' : dataArr[i].url,
            rating: !dataArr[i].author_details || !dataArr[i].author_details.rating ? '★ ' + 0 : '★ ' + dataArr[i].author_details.rating,
            avatar_path: !dataArr[i].author_details || !dataArr[i].author_details.avatar_path ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU' : generateAvaPath(dataArr[i].author_details.avatar_path)
          };
          res.push(cur);
        }

        return res;
      };

      var initCastDetail = function initCastDetail() {
        var res = {};
        res = {
          birthday: '',
          gender: '',
          name: '',
          homepage: '',
          also_know_as: '',
          known_for_department: '',
          place_of_birth: '',
          biography: '',
          profile_path: ''
        };
        return res;
      };

      var generateAlsoKnow = function generateAlsoKnow(dataArr) {
        var res = "Also Known as: ";

        for (var i = 0; i < dataArr.length; i++) {
          res += dataArr[i];

          if (i != dataArr.length - 1) {
            res += ',';
          }
        }

        return res;
      };

      var filterCastDetail = function filterCastDetail(data) {
        var res = {};
        res = {
          birthday: !data.birthday ? '' : 'Birth: ' + data.birthday,
          gender: !data.gender || data.gender === 0 ? '' : 'Gender: ' + (data.gender === 1 ? 'Female' : 'Male'),
          name: !data.name ? '' : data.name,
          homepage: !data.homepage ? '' : 'Website: ' + data.homepage,
          also_known_as: !data.also_known_as || data.also_known_as.length === 0 ? '' : generateAlsoKnow(data.also_known_as),
          known_for_department: !data.known_for_department ? '' : 'Know for: ' + data.known_for_department,
          place_of_birth: !data.place_of_birth ? '' : 'Birth Place: ' + data.place_of_birth,
          biography: !data.biography ? '' : data.biography,
          profile_path: !data.profile_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png' : 'https://image.tmdb.org/t/p/w500' + data.profile_path
        };
        return res;
      };

      var initExternal = function initExternal() {
        var res = {};
        res = {
          imdb_id: '',
          facebook_id: '',
          instagram_id: '',
          twitter_id: ''
        };
        return res;
      };

      var filterExternal = function filterExternal(data) {
        var res = {};
        res = {
          imdb_id: !data.imdb_id ? '' : 'https://imdb.com/name/' + data.imdb_id,
          facebook_id: !data.facebook_id ? '' : 'https://facebook.com/' + data.facebook_id,
          instagram_id: !data.instagram_id ? '' : 'https://instagram.com/' + data.instagram_id,
          twitter_id: !data.twitter_id ? '' : 'https://twitter.com/' + data.twitter_id
        };
        return res;
      };

      var initSearch = function initSearch() {
        var res = [];
        var cur = {};
        cur = {
          id: '',
          name: '',
          backdrop_path: '',
          media_type: ''
        };
        res.push(cur);
        return res;
      };

      var filterSearch = function filterSearch(dataArr) {
        var res = [];

        for (var i = 0; i < dataArr.length; i++) {
          if (dataArr[i].media_type === 'tv') {
            var cur = {
              id: !dataArr[i].id ? '' : dataArr[i].id,
              name: !dataArr[i].name ? '' : dataArr[i].name.slice(0, 30),
              backdrop_path: !dataArr[i].backdrop_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg' : 'https://image.tmdb.org/t/p/w500' + dataArr[i].backdrop_path,
              media_type: !dataArr[i].media_type ? '' : dataArr[i].media_type
            };
            res.push(cur);
          } else if (dataArr[i].media_type === 'movie') {
            var _cur = {
              id: !dataArr[i].id ? '' : dataArr[i].id,
              name: !dataArr[i].title ? '' : dataArr[i].title.slice(0, 30),
              backdrop_path: !dataArr[i].backdrop_path ? 'https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/movie-placeholder.jpg' : 'https://image.tmdb.org/t/p/w500' + dataArr[i].backdrop_path,
              media_type: !dataArr[i].media_type ? '' : dataArr[i].media_type
            };
            res.push(_cur);
          }
        }

        return res;
      };
      /***/

    },

    /***/
    "OFvo":
    /*!**************************************************************!*\
      !*** ./src/app/components/detail/review/review.component.ts ***!
      \**************************************************************/

    /*! exports provided: ReviewComponent */

    /***/
    function OFvo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
        return ReviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ReviewComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " read the rest ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cur_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cur_r2.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", cur_r2.author, " \xA0 \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cur_r2.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", cur_r2.author, " on ", cur_r2.created_at, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cur_r2.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cur_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ReviewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewComponent_div_0_div_5_Template, 15, 7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.reviewData.length, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviewData);
        }
      }

      var ReviewComponent = /*#__PURE__*/function () {
        function ReviewComponent() {
          _classCallCheck(this, ReviewComponent);

          this.data = [];
          this.reviewData = [];
        }

        _createClass(ReviewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.data !== undefined) {
              this.reviewData = this.data;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReviewComponent;
      }();

      ReviewComponent.ɵfac = function ReviewComponent_Factory(t) {
        return new (t || ReviewComponent)();
      };

      ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReviewComponent,
        selectors: [["app-review"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "Container", 4, "ngIf"], [1, "Container"], [1, "BigTitle"], [1, "grey"], ["class", "Item", 4, "ngFor", "ngForOf"], [1, "Item"], [1, "Icon"], [1, "Img", 3, "src"], [1, "main"], [1, "title", "black", "medium"], [1, "vote", "small", "white"], [1, "info", "grey", "small"], [1, "content", "black", "small"], [1, "rest", "black", "small"], ["target", "_blank", 3, "href"]],
        template: function ReviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewComponent_div_0_Template, 6, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewData.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".Container[_ngcontent-%COMP%]{\n    margin-top: 4rem;\n    padding: 0 10vw 0 7vw;\n}\n.Item[_ngcontent-%COMP%]{\n    background: white;\n    border-radius: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 2rem;\n}\n.Icon[_ngcontent-%COMP%]{\n    flex:1;\n    padding: 2rem 0 0 3rem;\n}\n.Img[_ngcontent-%COMP%]{\n    height: 5rem;\n    width: 5rem;\n    border-radius: 5rem\n}\n.main[_ngcontent-%COMP%]{\n    flex: 8;\n    padding: 1.5rem 5.5rem 1rem 2rem;\n    line-height: 2rem;\n}\n.title[_ngcontent-%COMP%]{\n    display: inline;\n}\n.vote[_ngcontent-%COMP%]{\n    display: inline-flex;\n    border-radius: 3rem;\n    padding: 0.2rem 0.8rem 0.2rem 0.8rem;\n    justify-content: center;\n    align-items: center;\n    background: black;\n}\n.info[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n}\n.content[_ngcontent-%COMP%]{\n    display: -webkit-box;\n    margin-top: 1.5rem;\n    -webkit-line-clamp:3;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.rest[_ngcontent-%COMP%]{\n    margin-top: 1.2rem;\n}\n.rest[_ngcontent-%COMP%]     a{\n    color:rgb(1,26,134);\n}\n@media (max-width:990px){\n    .Container[_ngcontent-%COMP%]{\n        margin-top: 2.5rem;\n        padding: 0 7vw 0 7vw;\n    }\n    .Item[_ngcontent-%COMP%]{\n        flex-direction: column;\n    }\n    .main[_ngcontent-%COMP%]{\n        width:100%;\n        padding: 1rem 3.5rem 1rem 1.5rem;\n    }\n    .Icon[_ngcontent-%COMP%]{\n        width: 50%;\n        padding: 2rem 0 0 3rem;\n    }\n    .title[_ngcontent-%COMP%]{\n        display: block;\n    }\n    .vote[_ngcontent-%COMP%]{\n        margin-top: 0;\n    }\n    .info[_ngcontent-%COMP%]{\n        margin-top: 1.6rem;\n    }\n    .content[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n    .rest[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksTUFBTTtJQUNOLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIHBhZGRpbmc6IDAgMTB2dyAwIDd2dztcbn1cbi5JdGVte1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5JY29ue1xuICAgIGZsZXg6MTtcbiAgICBwYWRkaW5nOiAycmVtIDAgMCAzcmVtO1xufVxuLkltZ3tcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXJlbVxufVxuLm1haW57XG4gICAgZmxleDogODtcbiAgICBwYWRkaW5nOiAxLjVyZW0gNS41cmVtIDFyZW0gMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50aXRsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udm90ZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjhyZW0gMC4ycmVtIDAuOHJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLmluZm97XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDozO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yZXN0e1xuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcbn1cbi5yZXN0IDo6bmctZGVlcCBhe1xuICAgIGNvbG9yOnJnYigxLDI2LDEzNCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDo5OTBweCl7XG4gICAgLkNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDd2dyAwIDd2dztcbiAgICB9XG4gICAgLkl0ZW17XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5tYWlue1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDMuNXJlbSAxcmVtIDEuNXJlbTtcbiAgICB9XG4gICAgLkljb257XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwIDNyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC52b3Rle1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgbWFyZ2luLXRvcDogMS42cmVtO1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnJlc3R7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "RZmA":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function RZmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../ipconfig.json */
      "6jeS");

      var _ipconfig_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../ipconfig.json */
      "6jeS", 1);
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../CommonFun */
      "N1mo");
      /* harmony import */


      var _services_gets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/gets.service */
      "Rm7d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var _c0 = function _c0(a1, a2) {
        return ["./watch/", a1, a2];
      };

      function SearchComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r2 = ctx.result;
          var t_r3 = ctx.term;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, r_r2.media_type, r_r2.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", r_r2.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r2.name)("term", t_r3);
        }
      }

      var SearchComponent = function SearchComponent(getsService, router, route) {
        var _this6 = this;

        _classCallCheck(this, SearchComponent);

        this.getsService = getsService;
        this.router = router;
        this.route = route;
        this.navbarHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searching = false;
        this.searchFailed = false;

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (query) {
            return _this6.getsService.getURL(_ipconfig_json__WEBPACK_IMPORTED_MODULE_3__.ip.node + '/gets/multi_search?query=' + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return Object(_CommonFun__WEBPACK_IMPORTED_MODULE_4__["filterSearch"])(res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }));
          }));
        };

        this.formatter = function (obj) {
          // this.router.navigate(['/watch/',obj.media_type,obj.id]);
          _this6.navbarHidden.emit("");

          return "";
        };
      };

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gets_service__WEBPACK_IMPORTED_MODULE_5__["GetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        outputs: {
          navbarHidden: "navbarHidden"
        },
        decls: 4,
        vars: 4,
        consts: [[1, "searchContainer"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], [3, "routerLink"], [1, "imgPic", 3, "src"], [3, "result", "term"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_template_1_Template, 3, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbHighlight"]],
        styles: [".searchContainer[_ngcontent-%COMP%]{\n    color: white;\n}\n.imgPic[_ngcontent-%COMP%]{\n    width:5rem;\n    height:2.5rem;\n    margin-right: 1rem;\n}\n.searchContainer[_ngcontent-%COMP%]     .form-control{\n    background-color: transparent;\n    border-width: 0 0 2px 0;\n    color: white;\n    border-radius: 0;\n}\n.searchContainer[_ngcontent-%COMP%]     .form-control:focus{\n    background: transparent;\n    border-color: white;\n    box-shadow: none;\n}\n.searchContainer[_ngcontent-%COMP%]     .dropdown-menu{\n    border:rgb(205, 209, 220) solid 1px;\n    background: rgb(5, 14, 77);\n}\n.searchContainer[_ngcontent-%COMP%]     .dropdown-item{\n    padding: 0.6rem;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaENvbnRhaW5lcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaW1nUGlje1xuICAgIHdpZHRoOjVyZW07XG4gICAgaGVpZ2h0OjIuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4uc2VhcmNoQ29udGFpbmVyIDo6bmctZGVlcCAuZm9ybS1jb250cm9se1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnNlYXJjaENvbnRhaW5lciA6Om5nLWRlZXAgLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VhcmNoQ29udGFpbmVyIDo6bmctZGVlcCAuZHJvcGRvd24tbWVudXtcbiAgICBib3JkZXI6cmdiKDIwNSwgMjA5LCAyMjApIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgMTQsIDc3KTtcbn1cbi5zZWFyY2hDb250YWluZXIgOjpuZy1kZWVwIC5kcm9wZG93bi1pdGVte1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "Rm7d":
    /*!******************************************!*\
      !*** ./src/app/services/gets.service.ts ***!
      \******************************************/

    /*! exports provided: GetsService */

    /***/
    function Rm7d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetsService", function () {
        return GetsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GetsService = /*#__PURE__*/function () {
        function GetsService(httpClient) {
          _classCallCheck(this, GetsService);

          this.httpClient = httpClient;
        }

        _createClass(GetsService, [{
          key: "getURL",
          value: function getURL(url) {
            return this.httpClient.get(url);
          }
        }]);

        return GetsService;
      }();

      GetsService.ɵfac = function GetsService_Factory(t) {
        return new (t || GetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GetsService,
        factory: GetsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = "Movie-TV-Search-AngularJS";
          this.isMenuCollapsed = true;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {}
        }, {
          key: "navHidden",
          value: function navHidden() {
            this.isMenuCollapsed = true;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        ), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 22,
        vars: 6,
        consts: [[1, "selfcontainer"], [1, "header"], [1, "navbar", "navbar-expand-lg", "navbar-light", "mb-3"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-Item"], [1, "navbar-nav"], [1, "nav-item"], ["routerLinkActive", "selected", 1, "nav-left", "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "selected", 1, "nav-left", "nav-link", 3, "routerLink"], [1, "navbar-search"], [3, "navbarHidden"], [1, "itemContainer"], [1, "footerContainer"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "USC Films");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
              return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u2630 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "My List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "app-search", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("navbarHidden", function AppComponent_Template_app_search_navbarHidden_17_listener() {
              return ctx.navHidden();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Powered by TMDB. Developed by Xiang Chen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./mylist");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".selfcontainer[_ngcontent-%COMP%]{\n  background: rgb(5, 14, 77);\n  font-family: sans-serif;\n  min-height: 100vh;\n}\n.header[_ngcontent-%COMP%]{ \n    position: sticky;\n    top: 0;\n    z-index: 999;\n}\n.itemContainer[_ngcontent-%COMP%]{\n  margin-top: 2rem;\n  padding-left: 3vw;\n  padding-right: 3vw;\n}\n.nav-item[_ngcontent-%COMP%]{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.selfcontainer[_ngcontent-%COMP%]     .navbar{\n  background: rgb(6, 12, 42);\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n@media (min-width:990px){\n  .selfcontainer[_ngcontent-%COMP%]     .navbar-collapse{\n    justify-content: space-between !important;\n  }\n}\n@media (max-width:990px){\n  .selfcontainer[_ngcontent-%COMP%]     .nav-item{\n    align-items: flex-end;\n  }\n  .navbar-search[_ngcontent-%COMP%]{\n    margin-top: 2rem;\n  }\n  .selfcontainer[_ngcontent-%COMP%]     .navbar{\n    padding-right: 0;\n  }\n  .nav-item[_ngcontent-%COMP%]{\n    padding-right: 4rem;\n  }\n  .navbar-toggler[_ngcontent-%COMP%]{\n    margin-right: 3rem ;\n  }\n}\n.selfcontainer[_ngcontent-%COMP%]     .active{\n  color: white;\n}\n.selfcontainer[_ngcontent-%COMP%]     .navbar-brand{\n  color: white;\n}\n.selfcontainer[_ngcontent-%COMP%]     .navbar-brand:hover{\n  color: white;\n}\n.navbar-toggler[_ngcontent-%COMP%]{\n  color: rgb(121,126,143) !important;\n}\n.nav-link[_ngcontent-%COMP%]{\n  color: rgb(116,126,143) !important;\n  font-size:1rem;\n  text-align: end;\n}\n.selected[_ngcontent-%COMP%]{\n  color: white !important;\n}\n.nav-link[_ngcontent-%COMP%]:hover{\n  color: white !important;\n}\n.navbar-search[_ngcontent-%COMP%]{\n  position: relative;\n  right: 0;\n  padding-right: 4rem;\n}\n.footerContainer[_ngcontent-%COMP%]{\n  width: 100%;\n  text-align: center;\n  color: white;\n  margin-top: 2vw;\n  position: relative;\n  bottom: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQSxTQUM4QixXQUFXO0lBQ3JDLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztBQUNGO0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGZjb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IHJnYig1LCAxNCwgNzcpO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5O1xufVxuLml0ZW1Db250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogM3Z3O1xuICBwYWRkaW5nLXJpZ2h0OiAzdnc7XG59XG4ubmF2LWl0ZW17XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi5zZWxmY29udGFpbmVyIDo6bmctZGVlcCAubmF2YmFye1xuICBiYWNrZ3JvdW5kOiByZ2IoNiwgMTIsIDQyKTtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6OTkwcHgpe1xuICAuc2VsZmNvbnRhaW5lciA6Om5nLWRlZXAgLm5hdmJhci1jb2xsYXBzZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6OTkwcHgpe1xuICAuc2VsZmNvbnRhaW5lciA6Om5nLWRlZXAgLm5hdi1pdGVte1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuICAubmF2YmFyLXNlYXJjaHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG4gIC5zZWxmY29udGFpbmVyIDo6bmctZGVlcCAubmF2YmFye1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLm5hdi1pdGVte1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbiAgLm5hdmJhci10b2dnbGVye1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSA7XG4gIH1cbn1cbi5zZWxmY29udGFpbmVyIDo6bmctZGVlcCAuYWN0aXZle1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VsZmNvbnRhaW5lciA6Om5nLWRlZXAgLm5hdmJhci1icmFuZHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlbGZjb250YWluZXIgOjpuZy1kZWVwIC5uYXZiYXItYnJhbmQ6aG92ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZiYXItdG9nZ2xlcntcbiAgY29sb3I6IHJnYigxMjEsMTI2LDE0MykgIWltcG9ydGFudDtcbn1cbi5uYXYtbGlua3tcbiAgY29sb3I6IHJnYigxMTYsMTI2LDE0MykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOjFyZW07XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5zZWxlY3RlZHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubmF2LWxpbms6aG92ZXJ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLm5hdmJhci1zZWFyY2h7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG4uZm9vdGVyQ29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDJ2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDF2dztcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "YaZ0":
    /*!*****************************************************************!*\
      !*** ./src/app/components/detail/cast/modal/modal.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function YaZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../CommonFun */
      "N1mo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ModalComponent_div_2_a_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 20);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r1.externalData.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ModalComponent_div_2_a_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 21);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.externalData.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ModalComponent_div_2_a_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 22);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r3.externalData.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ModalComponent_div_2_a_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 23);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r4.externalData.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ModalComponent_div_2_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Biography");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.modalData.biography);
        }
      }

      function ModalComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_div_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.closeFun();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ModalComponent_div_2_a_25_Template, 1, 1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ModalComponent_div_2_a_26_Template, 1, 1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ModalComponent_div_2_a_27_Template, 1, 1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ModalComponent_div_2_a_28_Template, 1, 1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ModalComponent_div_2_div_29_Template, 5, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.modalData.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.birthday);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.place_of_birth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.homepage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.known_for_department);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalData.also_known_as);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.externalData.imdb_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.externalData.instagram_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.externalData.facebook_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.externalData.twitter_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.modalData.biography);
        }
      }

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(modal) {
          _classCallCheck(this, ModalComponent);

          this.modal = modal;
          this.modalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initCastDetail"])();
          this.externalData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_0__["initExternal"])();
        }

        _createClass(ModalComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.modaldata !== undefined) {
              this.modalData = this.modaldata;
            }

            if (this.externaldata !== undefined) {
              this.externalData = this.externaldata;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeFun",
          value: function closeFun() {
            this.modal.dismissAll();
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          modaldata: "modaldata",
          externaldata: "externaldata"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 1,
        consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], ["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "Content"], [1, "header"], [1, "icon"], [1, "iconImg", 3, "src"], [1, "info"], [1, "infoText", "small", "black"], [1, "external"], ["class", "fa fa-imdb", "target", "_blank", "title", "Visit IMDB", 3, "href", 4, "ngIf"], ["class", "fa fa-instagram", "target", "_blank", "title", "Visit Instagram", 3, "href", 4, "ngIf"], ["class", "fa fa-facebook-square", "target", "_blank", "title", "Visit Facebook", 3, "href", 4, "ngIf"], ["class", "fa fa-twitter", "target", "_blank", "title", "Visit Twitter", 3, "href", 4, "ngIf"], ["class", "biography", 4, "ngIf"], ["target", "_blank", "title", "Visit IMDB", 1, "fa", "fa-imdb", 3, "href"], ["target", "_blank", "title", "Visit Instagram", 1, "fa", "fa-instagram", 3, "href"], ["target", "_blank", "title", "Visit Facebook", 1, "fa", "fa-facebook-square", 3, "href"], ["target", "_blank", "title", "Visit Twitter", 1, "fa", "fa-twitter", 3, "href"], [1, "biography"], [1, "bioTitle", "black"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalComponent_div_2_Template, 30, 13, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.modaldata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".modal-container[_ngcontent-%COMP%]{\n    width:50vw;\n    max-height: 80vh;\n    display: flex;\n    flex-direction: column;  \n}\n.modal-container[_ngcontent-%COMP%]     .modal-header{\n    position: fixed;\n    height: 4.3rem;\n    width: 49.9vw;\n    background-color: white;\n}\n@media (max-width:1500px){\n    .modal-container[_ngcontent-%COMP%]     .modal-header{\n        width: 49.8vw;\n    }\n}\n.modal-container[_ngcontent-%COMP%]     .close{\n    margin-bottom: -0.4rem;\n}\n  .modal-content{\n   background-color: transparent !important;\n}\n.Content[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n    margin-top: 4.3rem;\n    background-color: white;\n    max-height: 42vh;\n    border-radius: 0 0 4.8px 4.8px;\n}\n.header[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.icon[_ngcontent-%COMP%]{\n    flex:1;\n}\n.iconImg[_ngcontent-%COMP%]{\n    width: 90%;\n    height: 100%;\n    padding: 1rem;\n}\n.info[_ngcontent-%COMP%]{\n    flex: 3;\n    padding: 1.5rem 0.5rem 1rem 0.5rem;\n}\n.external[_ngcontent-%COMP%]{\n    margin-top: 2rem;\n}\n.biography[_ngcontent-%COMP%]{\n    padding:0 0.5rem 0 1rem;\n}\n.bioTitle[_ngcontent-%COMP%]{\n    font-size: calc(1.275rem + .3vw) ;\n}\n.fa[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    width: 1.6rem;\n    text-align: center;\n    text-decoration: none;\n    margin: 0 0.3rem 0 0;\n}\n.fa[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n}\n.fa-imdb[_ngcontent-%COMP%]{\n    color:rgb(230,174,0);\n}\n.fa-instagram[_ngcontent-%COMP%]{\n    color:rgb(122,62,119);\n}\n.fa-facebook-square[_ngcontent-%COMP%] {\n    color: rgb(4, 40, 174);\n}\n.fa-twitter[_ngcontent-%COMP%] {\n    color: #55ACEE;\n}\n@media (min-width:576px){\n      .modal-dialog-scrollable {\n        max-width:50vw !important;\n        max-height: 50vh !important;\n        margin-top: 20vh !important;\n    }\n}\n@media (max-width:576px){\n    .modal-container[_ngcontent-%COMP%]     .modal-header{\n        width: calc(100vw - 1.1rem);\n    }\n      .modal-dialog-scrollable {\n        max-height: 100vh !important;\n    }\n    .Content[_ngcontent-%COMP%]{\n        max-height: 88.5vh;\n    }\n    .info[_ngcontent-%COMP%]{\n        padding-top: 0;\n    }\n    .external[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n    .iconImg[_ngcontent-%COMP%]{\n        padding-bottom: 0;\n    }\n}\n@media (max-width:990px){\n    .modal-container[_ngcontent-%COMP%]{\n        width:100%;\n        max-height: 100%\n    }\n    .header[_ngcontent-%COMP%]{\n        flex-direction: column;\n    }\n    .info[_ngcontent-%COMP%]{\n        padding-left: 1rem;\n    }\n    .iconImg[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n}\n.Content[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 10px;\n}\n.Content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background-color: rgb(243,243,243);\n    border: rgb(198,198,198) solid 1px;\n  }\n\n.Content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgb(88,88, 88);\n    border-radius: 10px;\n  }\n\n.Content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: rgb(88,88, 88);\n    border-radius: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0dBQ0csd0NBQXdDO0FBQzNDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLE1BQU07QUFDVjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxPQUFPO0lBQ1Asa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsMkJBQTJCO0lBQy9CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Y7SUFDSjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxrQ0FBa0M7RUFDcEM7QUFFQSxXQUFXO0FBQ1g7SUFDRSwwQkFBMEI7SUFDMUIsbUJBQW1CO0VBQ3JCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsMEJBQTBCO0lBQzFCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lcntcbiAgICB3aWR0aDo1MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXG59XG4ubW9kYWwtY29udGFpbmVyIDo6bmctZGVlcCAubW9kYWwtaGVhZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDQuM3JlbTtcbiAgICB3aWR0aDogNDkuOXZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6MTUwMHB4KXtcbiAgICAubW9kYWwtY29udGFpbmVyIDo6bmctZGVlcCAubW9kYWwtaGVhZGVye1xuICAgICAgICB3aWR0aDogNDkuOHZ3O1xuICAgIH1cbn1cbi5tb2RhbC1jb250YWluZXIgOjpuZy1kZWVwIC5jbG9zZXtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC40cmVtO1xufVxuOjpuZy1kZWVwIC5tb2RhbC1jb250ZW50e1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5Db250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWFyZ2luLXRvcDogNC4zcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1heC1oZWlnaHQ6IDQydmg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDQuOHB4IDQuOHB4O1xufVxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaWNvbntcbiAgICBmbGV4OjE7XG59XG4uaWNvbkltZ3tcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLmluZm97XG4gICAgZmxleDogMztcbiAgICBwYWRkaW5nOiAxLjVyZW0gMC41cmVtIDFyZW0gMC41cmVtO1xufVxuLmV4dGVybmFse1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG4uYmlvZ3JhcGh5e1xuICAgIHBhZGRpbmc6MCAwLjVyZW0gMCAxcmVtO1xufVxuLmJpb1RpdGxle1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjI3NXJlbSArIC4zdncpIDtcbn1cbi5mYSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgd2lkdGg6IDEuNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogMCAwLjNyZW0gMCAwO1xufVxuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4uZmEtaW1kYntcbiAgICBjb2xvcjpyZ2IoMjMwLDE3NCwwKTtcbn1cbi5mYS1pbnN0YWdyYW17XG4gICAgY29sb3I6cmdiKDEyMiw2MiwxMTkpO1xufVxuLmZhLWZhY2Vib29rLXNxdWFyZSB7XG4gICAgY29sb3I6IHJnYig0LCA0MCwgMTc0KTtcbn1cblxuLmZhLXR3aXR0ZXIge1xuICAgIGNvbG9yOiAjNTVBQ0VFO1xufVxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpe1xuICAgIDo6bmctZGVlcCAubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICBtYXgtd2lkdGg6NTB2dyAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwdmggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcbiAgICAubW9kYWwtY29udGFpbmVyIDo6bmctZGVlcCAubW9kYWwtaGVhZGVye1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEuMXJlbSk7XG4gICAgfVxuICAgIDo6bmctZGVlcCAubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuQ29udGVudHtcbiAgICAgICAgbWF4LWhlaWdodDogODguNXZoO1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5leHRlcm5hbHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLmljb25JbWd7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkwcHgpe1xuICAgIC5tb2RhbC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCVcbiAgICB9XG4gICAgLmhlYWRlcntcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICB9XG4gICAgLmljb25JbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4uQ29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuLkNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsMjQzLDI0Myk7XG4gICAgYm9yZGVyOiByZ2IoMTk4LDE5OCwxOTgpIHNvbGlkIDFweDtcbiAgfVxuICBcbiAgLyogSGFuZGxlICovXG4gIC5Db250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDg4LDg4LCA4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIC5Db250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDg4LDg4LCA4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/youtube-player */
      "TIDI");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/my-list/my-list.component */
      "0SVh");
      /* harmony import */


      var _components_home_carousel_header_carousel_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/home/carousel-header/carousel-header.component */
      "9IuO");
      /* harmony import */


      var _components_home_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/home/carousel-item/carousel-item.component */
      "ZVOs");
      /* harmony import */


      var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/detail/detail.component */
      "151J");
      /* harmony import */


      var _components_detail_video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/detail/video/video.component */
      "eZFB");
      /* harmony import */


      var _components_detail_cast_cast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/detail/cast/cast.component */
      "FqaP");
      /* harmony import */


      var _components_detail_review_review_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/detail/review/review.component */
      "OFvo");
      /* harmony import */


      var _components_detail_cast_modal_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/detail/cast/modal/modal.component */
      "YaZ0");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/search/search.component */
      "RZmA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_8__["MyListComponent"], _components_home_carousel_header_carousel_header_component__WEBPACK_IMPORTED_MODULE_9__["CarouselHeaderComponent"], _components_home_carousel_item_carousel_item_component__WEBPACK_IMPORTED_MODULE_10__["CarouselItemComponent"], _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"], _components_detail_video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"], _components_detail_cast_cast_component__WEBPACK_IMPORTED_MODULE_13__["CastComponent"], _components_detail_review_review_component__WEBPACK_IMPORTED_MODULE_14__["ReviewComponent"], _components_detail_cast_modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZVOs":
    /*!**************************************************************************!*\
      !*** ./src/app/components/home/carousel-item/carousel-item.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CarouselItemComponent */

    /***/
    function ZVOs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselItemComponent", function () {
        return CarouselItemComponent;
      });
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../CommonFun */
      "N1mo");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["carousel"];

      var _c1 = function _c1(a1, a2) {
        return ["/watch/", a1, a2];
      };

      function CarouselItemComponent_div_0_ngb_carousel_3_2_ng_template_0_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cur_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, cur_r9.type, cur_r9.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cur_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", cur_r9.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", cur_r9.title);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_3_2_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CarouselItemComponent_div_0_ngb_carousel_3_2_ng_template_0_div_0_Template, 9, 7, "div", 8);
        }

        if (rf & 2) {
          var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r5);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CarouselItemComponent_div_0_ngb_carousel_3_2_ng_template_0_Template, 1, 1, "ng-template", 7);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-carousel", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("slide", function CarouselItemComponent_div_0_ngb_carousel_3_Template_ngb_carousel_slide_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r12.onSlide($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CarouselItemComponent_div_0_ngb_carousel_3_2_Template, 1, 0, undefined, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("interval", ctx_r1.interval)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus)("showNavigationIndicators", ctx_r1.showNavigationIndicators);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.pcDataArr);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_4_2_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cur_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c1, cur_r16.type, cur_r16.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cur_r16.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", cur_r16.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", cur_r16.title);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_4_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CarouselItemComponent_div_0_ngb_carousel_4_2_ng_template_0_Template, 9, 7, "ng-template", 7);
        }
      }

      function CarouselItemComponent_div_0_ngb_carousel_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-carousel", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("slide", function CarouselItemComponent_div_0_ngb_carousel_4_Template_ngb_carousel_slide_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r20.onSlide($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CarouselItemComponent_div_0_ngb_carousel_4_2_Template, 1, 0, undefined, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("interval", ctx_r2.interval)("pauseOnHover", ctx_r2.pauseOnHover)("pauseOnFocus", ctx_r2.pauseOnFocus)("showNavigationIndicators", ctx_r2.showNavigationIndicators);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.originDataArr);
        }
      }

      function CarouselItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CarouselItemComponent_div_0_ngb_carousel_3_Template, 3, 5, "ngb-carousel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CarouselItemComponent_div_0_ngb_carousel_4_Template, 3, 5, "ngb-carousel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.mobile);
        }
      }

      var CarouselItemComponent = /*#__PURE__*/function () {
        function CarouselItemComponent() {
          _classCallCheck(this, CarouselItemComponent);

          this.mobile = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["getCurWidth"])() > 990 ? false : true;
          this.originDataArr = [];
          this.pcDataArr = [];
          this.interval = 0;
          this.paused = true;
          this.unpauseOnArrow = false;
          this.pauseOnIndicator = false;
          this.pauseOnHover = true;
          this.pauseOnFocus = true;
          this.showNavigationIndicators = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["getCurWidth"])() > 990 ? true : false;
        }

        _createClass(CarouselItemComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.data !== undefined) {
              this.originDataArr = this.data;
              this.pcDataArr = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["divideImgArr"])(this.originDataArr, 6);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.resizeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'); //after 200ms check size

            this.resizeSubscription = this.resizeObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200)).subscribe(function (e) {
              _this7.mobile = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["getCurWidth"])() > 990 ? false : true;
              _this7.showNavigationIndicators = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_1__["getCurWidth"])() > 990 ? true : false;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resizeSubscription.unsubscribe();
          } // window.onresize = function(){
          //   this.mobile = getCurWidth() > 990 ? false : true;
          //   this.showNavigationIndicators = getCurWidth() > 990 ? true : false;
          // }

        }, {
          key: "togglePaused",
          value: function togglePaused() {
            if (this.paused) {
              this.carousel.cycle();
            } else {
              this.carousel.pause();
            }

            this.paused = !this.paused;
          }
        }, {
          key: "onSlide",
          value: function onSlide(slideEvent) {
            if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
              this.togglePaused();
            }

            if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
              this.togglePaused();
            }
          }
        }]);

        return CarouselItemComponent;
      }();

      CarouselItemComponent.ɵfac = function CarouselItemComponent_Factory(t) {
        return new (t || CarouselItemComponent)();
      };

      CarouselItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: CarouselItemComponent,
        selectors: [["app-carousel-item"]],
        viewQuery: function CarouselItemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
          }
        },
        inputs: {
          title: "title",
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "mainContainer", 4, "ngIf"], [1, "mainContainer"], [1, "title", "BigTitle"], ["class", "carouselContainer", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide", 4, "ngIf"], [1, "carouselContainer", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], ["class", "singlePoster", 4, "ngFor", "ngForOf"], [1, "singlePoster"], [1, "singleA"], [1, "aClass", 3, "routerLink"], [1, "titleText"], [1, "shadow"], [1, "picsum-img-wrapper"], [1, "imgPic", 3, "src", "alt"]],
        template: function CarouselItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CarouselItemComponent_div_0_Template, 5, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.originDataArr.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: [".mainContainer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    min-height: 38vw;\n}\n.title[_ngcontent-%COMP%]{\n    padding-left: 3rem;\n}\n.carouselContainer[_ngcontent-%COMP%]{\n    \n    \n}\n.carouselContainer[_ngcontent-%COMP%]:focus{\n    outline:none;\n}\n.carouselContainer[_ngcontent-%COMP%]     .carousel-item.active{\n    padding-left: 7%;\n    padding-right: 7%;\n    display: flex;\n}\n.singlePoster[_ngcontent-%COMP%]{\n    \n    padding: 1.2% 1.1% 1.2% 1.4%;\n    text-align: center;\n    position: relative;\n}\n.singleA[_ngcontent-%COMP%]{\n}\n.singleA[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n.singleA[_ngcontent-%COMP%]:hover   .shadow[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n.singleA[_ngcontent-%COMP%]:hover   .titleText[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n.titleText[_ngcontent-%COMP%]{\n    width: 9vw;\n    font-size: 1.2vw;\n    color: white;\n    z-index: 3;\n    position: absolute;\n    bottom: 0.5vw;\n    word-wrap: break-word;\n    word-break: normal;\n    overflow: hidden;\n    opacity: 0;\n    margin-left: 0.5vw;\n    text-align:left \n}\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\n.imgPic[_ngcontent-%COMP%]{\n    \n    height : 19vw;\n    width: 100%;\n    max-width: 11.5vw;\n    z-index: 1;\n}\n.shadow[_ngcontent-%COMP%]{\n    display: flex;\n    background-image: linear-gradient(to top, rgba(0,0,0,1.1) , rgba(0,0,0,0.1));\n    filter: blur(0.6rem);\n    opacity: 0;\n    width: 100%;\n    height: 10vw;\n    z-index: 2;\n    position: absolute;\n    top: 9.5vw;\n}\n.carouselContainer[_ngcontent-%COMP%]     .carousel-indicators{\n    display: flex;\n    position: relative;\n    top:28vw;\n    bottom: -5vw;\n}\n.carouselContainer[_ngcontent-%COMP%]     .carousel-control-prev{\n    width: 4vw;\n    margin-left: 0.9vw;\n}\n.carouselContainer[_ngcontent-%COMP%]     .carousel-control-next{\n    width: 4vw;\n    margin-right: 0.9vw;\n}\n@media (min-width:990px){\n    .carouselContainer[_ngcontent-%COMP%]     .carousel-inner{\n        max-height: 20.6vw;\n    } \n}\n\n@media (max-width:990px){\n    .mainContainer[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n    }\n    .title[_ngcontent-%COMP%]{\n        padding-left: 2rem;\n    }\n    .imgPic[_ngcontent-%COMP%]{\n        height : 81vw;\n        max-width: 56vw;\n        z-index: 1;\n    }\n    .singleA[_ngcontent-%COMP%]:hover   .shadow[_ngcontent-%COMP%]{\n        left: 0.2vw;\n    }\n    .singleA[_ngcontent-%COMP%]:hover   .titleText[_ngcontent-%COMP%]{\n        left: 1.2vw;\n    }\n    .shadow[_ngcontent-%COMP%]{\n        opacity: 1;\n        height : 40.5vw;\n        width: 100%;\n        top:40vw;\n        \n    }\n    .titleText[_ngcontent-%COMP%]{\n        opacity: 1;\n        width: 30vw;\n        font-size: 4.5vw;\n        bottom: 5vw;\n        left: 4vw;\n    }\n    .singlePoster[_ngcontent-%COMP%]{\n        margin-top: 1rem;\n        padding: 0;\n    }\n    .carouselContainer[_ngcontent-%COMP%]     .carousel-inner{\n        max-height: 89vw;\n    } \n    .carouselContainer[_ngcontent-%COMP%]     .carousel-item{\n        text-align: center;\n    }\n    .carouselContainer[_ngcontent-%COMP%]     .carousel-item.active{\n        justify-content: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO29CQUNnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiw0RUFBNEU7SUFDNUUsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBRUEsVUFBVTtBQUNWO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7UUFDZixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFdBQVc7UUFDWCxRQUFRO1FBQ1IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsU0FBUztJQUNiO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDM4dnc7XG59XG4udGl0bGV7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuLmNhcm91c2VsQ29udGFpbmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHRlYWw7ICovXG4gICAgXG59XG4uY2Fyb3VzZWxDb250YWluZXI6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lO1xufVxuLmNhcm91c2VsQ29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2luZ2xlUG9zdGVye1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICBwYWRkaW5nOiAxLjIlIDEuMSUgMS4yJSAxLjQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2luZ2xlQXtcbn1cbi5zaW5nbGVBOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5zaW5nbGVBOmhvdmVyIC5zaGFkb3d7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5zaW5nbGVBOmhvdmVyIC50aXRsZVRleHR7XG4gICAgb3BhY2l0eTogMTtcbn1cbi50aXRsZVRleHR7XG4gICAgd2lkdGg6IDl2dztcbiAgICBmb250LXNpemU6IDEuMnZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuNXZ3O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcbiAgICB0ZXh0LWFsaWduOmxlZnQgXG59XG4ucGljc3VtLWltZy13cmFwcGVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nUGlje1xuICAgIC8qIGhlaWdodCA6IDE5dnc7XG4gICAgd2lkdGg6IDExLjV2dzsgKi9cbiAgICBoZWlnaHQgOiAxOXZ3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTEuNXZ3O1xuICAgIHotaW5kZXg6IDE7XG59XG4uc2hhZG93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLDAsMCwxLjEpICwgcmdiYSgwLDAsMCwwLjEpKTtcbiAgICBmaWx0ZXI6IGJsdXIoMC42cmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTB2dztcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDkuNXZ3O1xufVxuLmNhcm91c2VsQ29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6Mjh2dztcbiAgICBib3R0b206IC01dnc7XG59XG4uY2Fyb3VzZWxDb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tbGVmdDogMC45dnc7XG59XG4uY2Fyb3VzZWxDb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XG4gICAgd2lkdGg6IDR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOXZ3O1xufVxuQG1lZGlhIChtaW4td2lkdGg6OTkwcHgpe1xuICAgIC5jYXJvdXNlbENvbnRhaW5lciA6Om5nLWRlZXAgLmNhcm91c2VsLWlubmVye1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMC42dnc7XG4gICAgfSBcbn1cblxuLyogcGhvbmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOjk5MHB4KXtcbiAgICAubWFpbkNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgfVxuICAgIC5pbWdQaWN7XG4gICAgICAgIGhlaWdodCA6IDgxdnc7XG4gICAgICAgIG1heC13aWR0aDogNTZ2dztcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLnNpbmdsZUE6aG92ZXIgLnNoYWRvd3tcbiAgICAgICAgbGVmdDogMC4ydnc7XG4gICAgfVxuICAgIC5zaW5nbGVBOmhvdmVyIC50aXRsZVRleHR7XG4gICAgICAgIGxlZnQ6IDEuMnZ3O1xuICAgIH1cbiAgICAuc2hhZG93e1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBoZWlnaHQgOiA0MC41dnc7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6NDB2dztcbiAgICAgICAgLyogbGVmdDogMS40dnc7ICovXG4gICAgfVxuICAgIC50aXRsZVRleHR7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgICBmb250LXNpemU6IDQuNXZ3O1xuICAgICAgICBib3R0b206IDV2dztcbiAgICAgICAgbGVmdDogNHZ3O1xuICAgIH1cbiAgICAuc2luZ2xlUG9zdGVye1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuY2Fyb3VzZWxDb250YWluZXIgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbm5lcntcbiAgICAgICAgbWF4LWhlaWdodDogODl2dztcbiAgICB9IFxuICAgIC5jYXJvdXNlbENvbnRhaW5lciA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW17XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcm91c2VsQ29udGFpbmVyIDo6bmctZGVlcCAuY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "eZFB":
    /*!************************************************************!*\
      !*** ./src/app/components/detail/video/video.component.ts ***!
      \************************************************************/

    /*! exports provided: VideoComponent */

    /***/
    function eZFB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
        return VideoComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _CommonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../CommonFun */
      "N1mo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/youtube-player */
      "TIDI");

      var VideoComponent = /*#__PURE__*/function () {
        function VideoComponent() {
          _classCallCheck(this, VideoComponent);

          this.width = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])() > 990 ? 0.5 * Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])() : 0.8 * Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])();
          this.height = this.width / 2;
          this.videoData = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["filterVideo"])([]);
        }

        _createClass(VideoComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.data !== undefined) {
              this.videoData = Object.assign(Object.assign({}, this.videoData), this.data);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(tag);
            this.resizeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize'); //after 200ms check size

            this.resizeSubscription = this.resizeObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200)).subscribe(function (e) {
              _this8.width = Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])() > 990 ? 0.5 * Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])() : 0.8 * Object(_CommonFun__WEBPACK_IMPORTED_MODULE_2__["getCurWidth"])();
              _this8.height = _this8.width / 2;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resizeSubscription.unsubscribe();
          }
        }]);

        return VideoComponent;
      }();

      VideoComponent.ɵfac = function VideoComponent_Factory(t) {
        return new (t || VideoComponent)();
      };

      VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: VideoComponent,
        selectors: [["app-video"]],
        inputs: {
          data: "data"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 4,
        consts: [["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds"]],
        template: function VideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "youtube-player", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("videoId", ctx.videoData.key);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", ctx.height)("width", ctx.width)("startSeconds", 0);
          }
        },
        directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/detail/detail.component */
      "151J");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/my-list/my-list.component */
      "0SVh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'mylist',
        component: _components_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_3__["MyListComponent"]
      }, {
        path: 'mylist',
        component: _components_my_list_my_list_component__WEBPACK_IMPORTED_MODULE_3__["MyListComponent"]
      }, {
        path: 'watch/:type/:id',
        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["DetailComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map