webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HammerSwipesDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HammerSwipesDirective = HammerSwipesDirective_1 = (function () {
    function HammerSwipesDirective(el) {
        this.el = el;
        this.onGesture = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    HammerSwipesDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!HammerSwipesDirective_1.hammerInitialized) {
            var hammertime = new Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            hammertime.on("swipeup", function (ev) {
                _this.onGesture.emit("swipeup");
            });
            hammertime.on("swipedown", function (ev) {
                _this.onGesture.emit("swipedown");
            });
            hammertime.on("swipeleft", function (ev) {
                _this.onGesture.emit("swipeleft");
            });
            hammertime.on("swiperight", function (ev) {
                _this.onGesture.emit("swiperight");
            });
            hammertime.on("tap", function (ev) {
                _this.onGesture.emit("tap");
            });
            HammerSwipesDirective_1.hammerInitialized = true;
        }
    };
    return HammerSwipesDirective;
}());
HammerSwipesDirective.hammerInitialized = false;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], HammerSwipesDirective.prototype, "onGesture", void 0);
HammerSwipesDirective = HammerSwipesDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appHammerSwipes]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], HammerSwipesDirective);

var HammerSwipesDirective_1, _a;
//# sourceMappingURL=hammer-swipes.directive.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_cell_cell__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeGeneratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MazeGeneratorComponent = (function () {
    function MazeGeneratorComponent(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    MazeGeneratorComponent.prototype.ngOnInit = function () {
        this.rows = Math.floor(Math.random() * 11) + 5;
        this.columns = Math.floor(Math.random() * 11) + 5;
        this.startPosition = { y: Math.floor(Math.random() * this.rows), x: Math.floor(Math.random() * this.columns), collectables: 0 };
        this.avatar;
        this.map = [];
        for (var i = 0; i < this.rows; i++) {
            this.map[i] = [];
            for (var j = 0; j < this.columns; j++) {
                this.map[i][j] = [new __WEBPACK_IMPORTED_MODULE_1__classes_cell_cell__["a" /* Cell */](), false];
            }
        }
        this.generateMaze();
        if (this.map[this.startPosition.y][this.startPosition.x][0].hasCollectable) {
            this.map[this.startPosition.y][this.startPosition.x][0].hasCollectable = false;
            this.startPosition.collectables--;
        }
    };
    MazeGeneratorComponent.prototype.ngAfterViewInit = function () {
        var part2 = this.gridItem._element.nativeElement;
        var compuStyle = window.getComputedStyle(part2);
        var stylesObj = { width: compuStyle.width, height: compuStyle.height };
        this.avatar.size = stylesObj;
        this.gridLocation = { left: this.gridItem._element.nativeElement.getBoundingClientRect().left, top: this.gridItem._element.nativeElement.getBoundingClientRect().top };
        var dim = Math.min(Number(compuStyle.width.match(/\d+/g)[0]), Number(compuStyle.height.match(/\d+/g)[0])) / 2;
        this.dimensions = dim;
        this.moveFunction = this.avatar.move;
        this.cdr.detectChanges();
    };
    MazeGeneratorComponent.prototype.generateMaze = function () {
        var unvisitedCells = this.rows * this.columns - 1;
        var cellsStack = [];
        var currentCell = [];
        currentCell.push(Math.floor(Math.random() * this.rows));
        currentCell.push(Math.floor(Math.random() * this.columns));
        this.map[currentCell[0]][currentCell[1]][1] = true;
        if (this.map[currentCell[0]][currentCell[1]][0].hasCollectable)
            this.startPosition.collectables++;
        while (unvisitedCells > 0) {
            var unvisitedNeighbors = this.getUnvisitedNeighbors(currentCell);
            if (unvisitedNeighbors.length > 0) {
                var randomUnvisitedNeighbor = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)];
                var choosenNeighbor = randomUnvisitedNeighbor == 0 ? [currentCell[0], currentCell[1] - 1] :
                    randomUnvisitedNeighbor == 1 ? [currentCell[0] - 1, currentCell[1]] : randomUnvisitedNeighbor == 2 ?
                        [currentCell[0], currentCell[1] + 1] : [currentCell[0] + 1, currentCell[1]];
                cellsStack.push(currentCell);
                this.map[currentCell[0]][currentCell[1]][0].removeWall(randomUnvisitedNeighbor);
                this.map[choosenNeighbor[0]][choosenNeighbor[1]][0].removeWall((randomUnvisitedNeighbor + 2) % 4);
                currentCell = choosenNeighbor;
                this.map[currentCell[0]][currentCell[1]][1] = true;
                if (this.map[currentCell[0]][currentCell[1]][0].hasCollectable)
                    this.startPosition.collectables++;
                unvisitedCells--;
            }
            else {
                currentCell = cellsStack.pop();
            }
        }
        console.log(this.startPosition.collectables);
    };
    MazeGeneratorComponent.prototype.swyped = function (event) {
        console.log(event);
        console.log("AYWA BA2A WE YALLA BA2A");
        this.avatar.swyped(event);
    };
    MazeGeneratorComponent.prototype.getUnvisitedNeighbors = function (currentCell) {
        var neighbors = [];
        if (currentCell[0] > 0 && !this.map[currentCell[0] - 1][currentCell[1]][1])
            neighbors.push(1); //up
        if (currentCell[0] < this.rows - 1 && !this.map[currentCell[0] + 1][currentCell[1]][1])
            neighbors.push(3); //down    
        if (currentCell[1] > 0 && !this.map[currentCell[0]][currentCell[1] - 1][1])
            neighbors.push(0); //left
        if (currentCell[1] < this.columns - 1 && !this.map[currentCell[0]][currentCell[1] + 1][1])
            neighbors.push(2); //right        
        return neighbors;
    };
    return MazeGeneratorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], MazeGeneratorComponent.prototype, "update", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('grid'),
    __metadata("design:type", Object)
], MazeGeneratorComponent.prototype, "grid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('gridItem'),
    __metadata("design:type", Object)
], MazeGeneratorComponent.prototype, "gridItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('avatar'),
    __metadata("design:type", Object)
], MazeGeneratorComponent.prototype, "avatar", void 0);
MazeGeneratorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-maze-generator',
        template: __webpack_require__(168),
        styles: [__webpack_require__(160)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _b || Object])
], MazeGeneratorComponent);

var _a, _b;
//# sourceMappingURL=maze-generator.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ":host {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.arrow {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".playerAvatar {\r\n    /*width: 100%;\r\n    height: 100%;*/\r\n}\r\n\r\n:host {\r\n\r\n    /*height: 50px;\r\n    width: 50px;*/\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    -webkit-transform: translate(0px, 0px);\r\n            transform: translate(0px, 0px);\r\n    transition: -webkit-transform 0.5s ease-in;\r\n    transition: transform 0.5s ease-in;\r\n    transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;\r\n    text-align: center;\r\n      /*background-image:url(../../assets/mariopause.png);*/\r\n\r\n      /*transform: scale(0.5);*/\r\n  /*background-image:url(mariopause.png);*/\r\n  /*background-position-x:0px;*/\r\n  /*background-size: 100%;*/\r\n    /*height:88px;*/\r\n  /*width:44px;*/\r\n}\r\n\r\n.lookLeft{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n.mario{\r\n height:100%;\r\n width:100%;\r\n}\r\n\r\n.mario{\r\n  /*position:relative;*/\r\n  background-image:url(" + __webpack_require__(221) + ");\r\n  background-size: cover;\r\n  /*height:100%;\r\n  width:100%;*/\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".cell {\r\n    margin: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background-color: transparent!important;\r\n}\r\n\r\n.cell::after,\r\n.cell::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 0px;\r\n    height: 0px;\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-animation: draw 1.2s 1s forwards;\r\n            animation: draw 1.2s 1s forwards\r\n}\r\n\r\n.cell::after {\r\n    left: 0;\r\n}\r\n\r\n.rightBorder::before {\r\n    border-right: 3px solid #4267B2;\r\n    right: 0;\r\n}\r\n\r\n.leftBorder::after {\r\n    border-left: 3px solid #4267B2;\r\n    left: 0;\r\n}\r\n\r\n.bottomBorder::after {\r\n    border-bottom: 3px solid #4267B2;\r\n    bottom: 0;\r\n}\r\n\r\n.topBorder::before {\r\n    border-top: 3px solid #4267B2;\r\n    top: 0;\r\n}\r\n\r\n@-webkit-keyframes draw {\r\n    from {\r\n        width: 0%;\r\n        height: 0%;\r\n    }\r\n    to {\r\n        width: 100%;\r\n        height: 100%\r\n    }\r\n}\r\n\r\n@keyframes draw {\r\n    from {\r\n        width: 0%;\r\n        height: 0%;\r\n    }\r\n    to {\r\n        width: 100%;\r\n        height: 100%\r\n    }\r\n}\r\n\r\n.collectable {\r\n    width: 15%;\r\n}\r\n\r\n.collectable::before {\r\n    content: '';\r\n    padding: 50% 0;\r\n    display: inline-block;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "md-grid-list {\r\n    height: 95vh;\r\n    margin: 0;\r\n    padding: 0;\r\n      /*background-color: yellow!important;*/\r\n        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);\r\n\r\n     /*height: 100%;*/\r\n  overflow: hidden;\r\n\r\n}\r\n\r\napp-cell {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n:host{\r\n    -ms-touch-action:manipulation;\r\n        touch-action:manipulation;\r\n}\r\n\r\n\r\n\r\n#stars {\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  box-shadow: 1760px 95px #FFF , 276px 1352px #FFF , 1706px 1089px #FFF , 1611px 529px #FFF , 1793px 1455px #FFF , 895px 1798px #FFF , 1848px 628px #FFF , 797px 485px #FFF , 778px 1504px #FFF , 448px 1746px #FFF , 471px 1483px #FFF , 62px 1040px #FFF , 509px 133px #FFF , 1672px 760px #FFF , 1288px 1813px #FFF , 987px 1229px #FFF , 185px 489px #FFF , 497px 200px #FFF , 66px 858px #FFF , 1180px 350px #FFF , 1927px 834px #FFF , 460px 1973px #FFF , 1509px 832px #FFF , 463px 1454px #FFF , 1762px 795px #FFF , 467px 1749px #FFF , 597px 1240px #FFF , 563px 200px #FFF , 737px 1558px #FFF , 1123px 296px #FFF , 808px 1193px #FFF , 1842px 1814px #FFF , 1493px 1312px #FFF , 54px 1904px #FFF , 1880px 350px #FFF , 1427px 1039px #FFF , 1557px 1571px #FFF , 882px 479px #FFF , 838px 136px #FFF , 344px 834px #FFF , 1779px 1001px #FFF , 360px 1844px #FFF , 1359px 1528px #FFF , 920px 262px #FFF , 1175px 88px #FFF , 238px 1971px #FFF , 1856px 406px #FFF , 883px 388px #FFF , 921px 5px #FFF , 231px 769px #FFF , 417px 1457px #FFF , 1186px 1345px #FFF , 1634px 669px #FFF , 444px 973px #FFF , 832px 968px #FFF , 882px 905px #FFF , 19px 121px #FFF , 1788px 1732px #FFF , 1144px 1316px #FFF , 819px 1268px #FFF , 686px 1586px #FFF , 623px 1491px #FFF , 509px 1634px #FFF , 1754px 953px #FFF , 375px 1588px #FFF , 1908px 1036px #FFF , 1920px 644px #FFF , 1503px 1039px #FFF , 797px 1726px #FFF , 565px 953px #FFF , 435px 1558px #FFF , 1091px 827px #FFF , 1000px 645px #FFF , 1797px 923px #FFF , 1799px 452px #FFF , 1582px 1053px #FFF , 1992px 233px #FFF , 908px 1921px #FFF , 322px 1432px #FFF , 1535px 120px #FFF , 1685px 1997px #FFF , 1270px 1592px #FFF , 321px 1133px #FFF , 859px 371px #FFF , 1443px 192px #FFF , 863px 699px #FFF , 688px 503px #FFF , 63px 1666px #FFF , 1647px 141px #FFF , 61px 655px #FFF , 1323px 355px #FFF , 1232px 1496px #FFF , 1587px 1611px #FFF , 1852px 788px #FFF , 1876px 43px #FFF , 1639px 1046px #FFF , 26px 938px #FFF , 811px 349px #FFF , 166px 1124px #FFF , 278px 1616px #FFF , 1023px 1327px #FFF , 179px 1711px #FFF , 546px 1120px #FFF , 553px 1139px #FFF , 135px 941px #FFF , 1481px 332px #FFF , 1989px 1834px #FFF , 891px 1792px #FFF , 1881px 641px #FFF , 961px 1270px #FFF , 215px 697px #FFF , 1425px 1094px #FFF , 1214px 1484px #FFF , 739px 67px #FFF , 193px 765px #FFF , 1995px 272px #FFF , 567px 211px #FFF , 1946px 710px #FFF , 486px 1849px #FFF , 314px 872px #FFF , 1048px 173px #FFF , 759px 334px #FFF , 1199px 1895px #FFF , 4px 739px #FFF , 1930px 69px #FFF , 1594px 786px #FFF , 431px 1837px #FFF , 113px 1638px #FFF , 953px 1196px #FFF , 1141px 279px #FFF , 573px 1245px #FFF , 518px 1604px #FFF , 1297px 978px #FFF , 987px 288px #FFF , 155px 1905px #FFF , 1667px 313px #FFF , 1465px 1733px #FFF , 1797px 1918px #FFF , 1041px 302px #FFF , 587px 943px #FFF , 87px 459px #FFF , 1393px 491px #FFF , 1151px 2000px #FFF , 1099px 1430px #FFF , 1573px 588px #FFF , 39px 1853px #FFF , 1671px 1970px #FFF , 1973px 1198px #FFF , 2px 1661px #FFF , 515px 1448px #FFF , 536px 687px #FFF , 1921px 411px #FFF , 1077px 1350px #FFF , 1860px 94px #FFF , 1561px 271px #FFF , 1957px 140px #FFF , 1299px 310px #FFF , 1474px 85px #FFF , 491px 1489px #FFF , 46px 1939px #FFF , 1730px 1428px #FFF , 382px 873px #FFF , 1737px 1752px #FFF , 1156px 770px #FFF , 489px 1018px #FFF , 1043px 1190px #FFF , 1138px 1235px #FFF , 1972px 1877px #FFF , 1448px 99px #FFF , 65px 1500px #FFF , 493px 1787px #FFF , 1055px 324px #FFF , 1104px 1758px #FFF , 1683px 1526px #FFF , 1066px 1170px #FFF , 774px 152px #FFF , 1472px 1272px #FFF , 200px 1446px #FFF , 311px 4px #FFF , 853px 1846px #FFF , 131px 707px #FFF , 1888px 242px #FFF , 359px 538px #FFF , 1070px 1682px #FFF , 1151px 84px #FFF , 809px 1447px #FFF , 1847px 1147px #FFF , 1585px 507px #FFF , 1422px 837px #FFF , 1753px 721px #FFF , 1639px 1722px #FFF , 437px 1705px #FFF , 912px 1177px #FFF , 1246px 247px #FFF , 101px 1764px #FFF , 184px 1869px #FFF , 88px 1013px #FFF , 636px 1910px #FFF , 1523px 185px #FFF , 336px 1838px #FFF , 359px 1510px #FFF , 1278px 58px #FFF , 1618px 833px #FFF , 1032px 1610px #FFF , 545px 715px #FFF , 1198px 486px #FFF , 53px 452px #FFF , 779px 664px #FFF , 1449px 1893px #FFF , 781px 1235px #FFF , 415px 532px #FFF , 1758px 1241px #FFF , 656px 1922px #FFF , 186px 120px #FFF , 20px 91px #FFF , 851px 1965px #FFF , 820px 806px #FFF , 894px 1897px #FFF , 1850px 665px #FFF , 1142px 1374px #FFF , 1103px 1127px #FFF , 1946px 1533px #FFF , 852px 1872px #FFF , 1005px 762px #FFF , 1345px 1934px #FFF , 190px 1092px #FFF , 1217px 903px #FFF , 1693px 1590px #FFF , 497px 1988px #FFF , 920px 1569px #FFF , 950px 774px #FFF , 564px 33px #FFF , 1822px 1506px #FFF , 1291px 23px #FFF , 99px 1370px #FFF , 1px 1706px #FFF , 1708px 932px #FFF , 1742px 549px #FFF , 901px 1683px #FFF , 614px 1235px #FFF , 722px 1184px #FFF , 1572px 709px #FFF , 516px 1707px #FFF , 1258px 1760px #FFF , 331px 537px #FFF , 364px 1125px #FFF , 440px 747px #FFF , 506px 842px #FFF , 1654px 1938px #FFF , 701px 1128px #FFF , 1079px 1829px #FFF , 1522px 1474px #FFF , 172px 233px #FFF , 1956px 645px #FFF , 369px 133px #FFF , 892px 1374px #FFF , 460px 677px #FFF , 572px 691px #FFF , 1749px 1135px #FFF , 1324px 1773px #FFF , 513px 1676px #FFF , 1638px 1602px #FFF , 866px 985px #FFF , 170px 517px #FFF , 620px 905px #FFF , 1513px 391px #FFF , 1896px 1649px #FFF , 1985px 944px #FFF , 1018px 1381px #FFF , 1639px 1492px #FFF , 1992px 1603px #FFF , 800px 1512px #FFF , 76px 1484px #FFF , 98px 1887px #FFF , 808px 908px #FFF , 850px 1948px #FFF , 892px 1150px #FFF , 55px 1664px #FFF , 820px 1408px #FFF , 657px 1092px #FFF , 1166px 1596px #FFF , 1371px 394px #FFF , 97px 1019px #FFF , 663px 741px #FFF , 1247px 1280px #FFF , 466px 1455px #FFF , 1630px 1225px #FFF , 66px 744px #FFF , 701px 994px #FFF , 1939px 607px #FFF , 1261px 957px #FFF , 926px 1107px #FFF , 1238px 1914px #FFF , 1247px 1859px #FFF , 1041px 935px #FFF , 1299px 1585px #FFF , 623px 49px #FFF , 1799px 868px #FFF , 667px 973px #FFF , 1060px 163px #FFF , 181px 205px #FFF , 1573px 1558px #FFF , 13px 1187px #FFF , 1527px 1960px #FFF , 1818px 15px #FFF , 736px 133px #FFF , 334px 1490px #FFF , 184px 172px #FFF , 1034px 1041px #FFF , 1074px 227px #FFF , 652px 1683px #FFF , 1333px 1770px #FFF , 386px 809px #FFF , 1845px 434px #FFF , 709px 418px #FFF , 583px 92px #FFF , 1210px 708px #FFF , 431px 470px #FFF , 758px 1019px #FFF , 1339px 1463px #FFF , 699px 480px #FFF , 527px 651px #FFF , 143px 1893px #FFF , 283px 172px #FFF , 1048px 166px #FFF , 671px 1115px #FFF , 410px 732px #FFF , 1275px 900px #FFF , 542px 147px #FFF , 1542px 202px #FFF , 314px 1607px #FFF , 857px 1239px #FFF , 1732px 1895px #FFF , 541px 1047px #FFF , 581px 837px #FFF , 1553px 150px #FFF , 664px 796px #FFF , 1282px 1169px #FFF , 1101px 1690px #FFF , 1142px 1619px #FFF , 1758px 1842px #FFF , 562px 1610px #FFF , 1570px 351px #FFF , 831px 1970px #FFF , 1823px 1536px #FFF , 1951px 698px #FFF , 1904px 1942px #FFF , 1325px 1906px #FFF , 1094px 745px #FFF , 1165px 474px #FFF , 1405px 100px #FFF , 620px 745px #FFF , 1070px 373px #FFF , 119px 1717px #FFF , 1108px 1635px #FFF , 1990px 909px #FFF , 1216px 703px #FFF , 657px 56px #FFF , 1177px 523px #FFF , 363px 815px #FFF , 794px 901px #FFF , 1298px 558px #FFF , 1819px 362px #FFF , 748px 1489px #FFF , 598px 1390px #FFF , 643px 1555px #FFF , 1527px 992px #FFF , 1099px 242px #FFF , 489px 1270px #FFF , 1633px 1443px #FFF , 3px 423px #FFF , 529px 1944px #FFF , 1859px 1849px #FFF , 1560px 702px #FFF , 1312px 1756px #FFF , 1702px 913px #FFF , 406px 623px #FFF , 1085px 1581px #FFF , 471px 1636px #FFF , 1394px 1483px #FFF , 874px 1376px #FFF , 1450px 195px #FFF , 141px 629px #FFF , 51px 1066px #FFF , 1859px 859px #FFF , 1416px 246px #FFF , 761px 1411px #FFF , 595px 618px #FFF , 1298px 568px #FFF , 620px 618px #FFF , 654px 267px #FFF , 358px 641px #FFF , 417px 75px #FFF , 705px 412px #FFF , 948px 27px #FFF , 1613px 282px #FFF , 67px 349px #FFF , 1326px 1471px #FFF , 3px 672px #FFF , 129px 1310px #FFF , 1242px 169px #FFF , 1084px 646px #FFF , 697px 996px #FFF , 1223px 1994px #FFF , 1041px 1939px #FFF , 1839px 1140px #FFF , 1215px 1237px #FFF , 89px 997px #FFF , 1600px 1123px #FFF , 628px 491px #FFF , 1978px 1291px #FFF , 1456px 1563px #FFF , 367px 65px #FFF , 941px 1151px #FFF , 1135px 1313px #FFF , 1436px 443px #FFF , 339px 1843px #FFF , 1793px 652px #FFF , 1503px 1536px #FFF , 1877px 88px #FFF , 307px 845px #FFF , 1633px 1289px #FFF , 385px 1273px #FFF , 49px 794px #FFF , 1096px 1059px #FFF , 1448px 1538px #FFF , 1954px 1484px #FFF , 1892px 1425px #FFF , 1693px 1736px #FFF , 1927px 752px #FFF , 1644px 1401px #FFF , 107px 1736px #FFF , 775px 318px #FFF , 903px 93px #FFF , 1887px 1710px #FFF , 688px 1487px #FFF , 1010px 873px #FFF , 1746px 580px #FFF , 567px 1401px #FFF , 1629px 506px #FFF , 120px 1481px #FFF , 1794px 16px #FFF , 511px 1969px #FFF , 757px 1299px #FFF , 469px 1962px #FFF , 374px 1405px #FFF , 1693px 68px #FFF , 1494px 701px #FFF , 843px 738px #FFF , 1134px 1272px #FFF , 72px 55px #FFF , 1738px 284px #FFF , 104px 943px #FFF , 1156px 763px #FFF , 1482px 1911px #FFF , 1485px 1654px #FFF , 1629px 58px #FFF , 1914px 225px #FFF , 1496px 54px #FFF , 360px 196px #FFF , 1322px 1635px #FFF , 692px 933px #FFF , 924px 1344px #FFF , 1298px 267px #FFF , 1550px 1126px #FFF , 1688px 1377px #FFF , 52px 1614px #FFF , 1360px 855px #FFF , 1145px 1851px #FFF , 1687px 607px #FFF , 1991px 533px #FFF , 1824px 1718px #FFF , 1986px 614px #FFF , 467px 751px #FFF , 955px 817px #FFF , 797px 477px #FFF , 1751px 1842px #FFF , 64px 546px #FFF , 1280px 295px #FFF , 1333px 453px #FFF , 1917px 1339px #FFF , 1177px 592px #FFF , 448px 959px #FFF , 1289px 757px #FFF , 1512px 248px #FFF , 1262px 1609px #FFF , 1573px 1849px #FFF , 1356px 970px #FFF , 1997px 1928px #FFF , 891px 58px #FFF , 609px 723px #FFF , 1059px 1811px #FFF , 1683px 1597px #FFF , 337px 14px #FFF , 1019px 1248px #FFF , 400px 924px #FFF , 909px 1708px #FFF , 1272px 217px #FFF , 1377px 931px #FFF , 1013px 389px #FFF , 1796px 121px #FFF , 1145px 326px #FFF , 302px 1915px #FFF , 481px 841px #FFF , 479px 71px #FFF , 1456px 1801px #FFF , 887px 327px #FFF , 828px 1414px #FFF , 937px 830px #FFF , 353px 897px #FFF , 1728px 138px #FFF , 443px 1427px #FFF , 278px 1503px #FFF , 1983px 956px #FFF , 1681px 313px #FFF , 528px 253px #FFF , 1710px 1447px #FFF , 1219px 1707px #FFF , 1922px 469px #FFF , 765px 1412px #FFF , 1273px 259px #FFF , 1738px 800px #FFF , 263px 671px #FFF , 1157px 1661px #FFF , 1030px 376px #FFF , 1750px 638px #FFF , 1509px 1229px #FFF , 606px 1385px #FFF , 1687px 1012px #FFF , 869px 1205px #FFF , 1383px 1200px #FFF , 421px 620px #FFF , 1130px 935px #FFF , 357px 1379px #FFF , 1965px 1627px #FFF , 423px 1485px #FFF , 675px 1449px #FFF , 12px 214px #FFF , 1985px 1325px #FFF , 850px 1848px #FFF , 1299px 1452px #FFF , 214px 900px #FFF , 1634px 1869px #FFF , 1251px 857px #FFF , 691px 940px #FFF , 920px 698px #FFF , 97px 1336px #FFF , 647px 1829px #FFF , 422px 1968px #FFF , 533px 58px #FFF , 1485px 1466px #FFF , 1122px 1060px #FFF , 657px 1474px #FFF , 1255px 729px #FFF , 268px 415px #FFF , 1315px 718px #FFF , 64px 219px #FFF , 581px 866px #FFF , 312px 1749px #FFF , 1369px 71px #FFF , 891px 1944px #FFF , 574px 315px #FFF , 694px 1042px #FFF , 1297px 746px #FFF , 1654px 23px #FFF , 639px 770px #FFF , 1405px 1045px #FFF , 897px 1590px #FFF , 346px 280px #FFF , 1379px 1075px #FFF , 112px 33px #FFF , 280px 143px #FFF , 1816px 1901px #FFF , 1964px 948px #FFF , 1600px 1651px #FFF , 1211px 218px #FFF , 1888px 101px #FFF , 1351px 1454px #FFF , 135px 948px #FFF , 744px 808px #FFF , 1706px 1007px #FFF , 271px 1640px #FFF , 656px 747px #FFF , 1670px 1623px #FFF , 1216px 1195px #FFF , 908px 1931px #FFF , 1720px 735px #FFF , 586px 209px #FFF , 941px 1832px #FFF , 1494px 12px #FFF , 867px 380px #FFF , 890px 936px #FFF , 1258px 1532px #FFF , 1319px 557px #FFF , 1095px 1053px #FFF , 1080px 637px #FFF , 1963px 70px #FFF , 1094px 1090px #FFF , 816px 750px #FFF , 1604px 1311px #FFF , 792px 56px #FFF , 1795px 1712px #FFF , 1039px 1273px #FFF , 232px 1253px #FFF , 103px 1049px #FFF , 1130px 131px #FFF , 1018px 838px #FFF , 1446px 1971px #FFF , 1112px 1853px #FFF , 1558px 233px #FFF , 1434px 1003px #FFF , 433px 1618px #FFF , 87px 1860px #FFF , 1494px 1843px #FFF , 1826px 434px #FFF , 108px 277px #FFF , 1836px 1264px #FFF , 1105px 1130px #FFF , 1408px 1248px #FFF , 724px 1658px #FFF , 1899px 1491px #FFF , 1880px 644px #FFF , 1714px 1621px #FFF , 56px 1888px #FFF , 1571px 1493px #FFF , 1976px 775px #FFF , 532px 42px #FFF , 1857px 95px #FFF , 1644px 1741px #FFF , 1172px 338px #FFF , 1718px 507px #FFF , 321px 1492px #FFF , 138px 1453px #FFF , 97px 1786px #FFF , 262px 907px #FFF , 672px 1885px #FFF , 1209px 1805px #FFF , 1326px 267px #FFF , 475px 1563px #FFF , 1482px 1710px #FFF , 704px 347px #FFF , 45px 83px #FFF , 1099px 641px #FFF , 47px 1605px #FFF , 1279px 1072px #FFF , 1399px 530px #FFF , 257px 1416px #FFF , 250px 620px #FFF , 701px 1526px #FFF , 1497px 1995px #FFF , 1980px 838px #FFF , 1526px 506px #FFF , 1670px 1377px #FFF , 895px 1077px #FFF , 29px 205px #FFF , 889px 794px #FFF , 129px 1546px #FFF , 1738px 82px #FFF , 1549px 859px #FFF , 1550px 676px #FFF , 1074px 1097px #FFF , 1105px 793px #FFF , 371px 1945px #FFF , 1816px 361px #FFF , 665px 100px #FFF , 1978px 1386px #FFF , 569px 309px #FFF , 998px 1979px #FFF , 754px 1718px #FFF , 743px 505px #FFF , 1786px 568px #FFF , 1085px 1px #FFF , 501px 1329px #FFF , 1598px 1702px #FFF , 1710px 1863px #FFF , 193px 1930px #FFF , 1911px 912px #FFF , 1542px 178px #FFF , 1349px 788px #FFF , 1637px 1887px #FFF , 561px 558px #FFF , 1127px 833px #FFF , 899px 1821px #FFF , 1812px 457px #FFF , 436px 827px #FFF , 1136px 1763px #FFF , 292px 1009px #FFF , 215px 261px #FFF , 1683px 260px #FFF , 476px 1472px #FFF , 111px 1576px #FFF , 886px 1387px #FFF , 1555px 1590px #FFF , 829px 1691px #FFF , 717px 1760px #FFF , 678px 1647px #FFF , 1033px 1162px #FFF , 653px 1422px #FFF , 21px 716px #FFF , 1825px 1384px #FFF;\r\n  -webkit-animation: animStar 50s linear infinite;\r\n          animation: animStar 50s linear infinite;\r\n}\r\n#stars:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 1px;\r\n  height: 1px;\r\n  background: transparent;\r\n  box-shadow: 1760px 95px #FFF , 276px 1352px #FFF , 1706px 1089px #FFF , 1611px 529px #FFF , 1793px 1455px #FFF , 895px 1798px #FFF , 1848px 628px #FFF , 797px 485px #FFF , 778px 1504px #FFF , 448px 1746px #FFF , 471px 1483px #FFF , 62px 1040px #FFF , 509px 133px #FFF , 1672px 760px #FFF , 1288px 1813px #FFF , 987px 1229px #FFF , 185px 489px #FFF , 497px 200px #FFF , 66px 858px #FFF , 1180px 350px #FFF , 1927px 834px #FFF , 460px 1973px #FFF , 1509px 832px #FFF , 463px 1454px #FFF , 1762px 795px #FFF , 467px 1749px #FFF , 597px 1240px #FFF , 563px 200px #FFF , 737px 1558px #FFF , 1123px 296px #FFF , 808px 1193px #FFF , 1842px 1814px #FFF , 1493px 1312px #FFF , 54px 1904px #FFF , 1880px 350px #FFF , 1427px 1039px #FFF , 1557px 1571px #FFF , 882px 479px #FFF , 838px 136px #FFF , 344px 834px #FFF , 1779px 1001px #FFF , 360px 1844px #FFF , 1359px 1528px #FFF , 920px 262px #FFF , 1175px 88px #FFF , 238px 1971px #FFF , 1856px 406px #FFF , 883px 388px #FFF , 921px 5px #FFF , 231px 769px #FFF , 417px 1457px #FFF , 1186px 1345px #FFF , 1634px 669px #FFF , 444px 973px #FFF , 832px 968px #FFF , 882px 905px #FFF , 19px 121px #FFF , 1788px 1732px #FFF , 1144px 1316px #FFF , 819px 1268px #FFF , 686px 1586px #FFF , 623px 1491px #FFF , 509px 1634px #FFF , 1754px 953px #FFF , 375px 1588px #FFF , 1908px 1036px #FFF , 1920px 644px #FFF , 1503px 1039px #FFF , 797px 1726px #FFF , 565px 953px #FFF , 435px 1558px #FFF , 1091px 827px #FFF , 1000px 645px #FFF , 1797px 923px #FFF , 1799px 452px #FFF , 1582px 1053px #FFF , 1992px 233px #FFF , 908px 1921px #FFF , 322px 1432px #FFF , 1535px 120px #FFF , 1685px 1997px #FFF , 1270px 1592px #FFF , 321px 1133px #FFF , 859px 371px #FFF , 1443px 192px #FFF , 863px 699px #FFF , 688px 503px #FFF , 63px 1666px #FFF , 1647px 141px #FFF , 61px 655px #FFF , 1323px 355px #FFF , 1232px 1496px #FFF , 1587px 1611px #FFF , 1852px 788px #FFF , 1876px 43px #FFF , 1639px 1046px #FFF , 26px 938px #FFF , 811px 349px #FFF , 166px 1124px #FFF , 278px 1616px #FFF , 1023px 1327px #FFF , 179px 1711px #FFF , 546px 1120px #FFF , 553px 1139px #FFF , 135px 941px #FFF , 1481px 332px #FFF , 1989px 1834px #FFF , 891px 1792px #FFF , 1881px 641px #FFF , 961px 1270px #FFF , 215px 697px #FFF , 1425px 1094px #FFF , 1214px 1484px #FFF , 739px 67px #FFF , 193px 765px #FFF , 1995px 272px #FFF , 567px 211px #FFF , 1946px 710px #FFF , 486px 1849px #FFF , 314px 872px #FFF , 1048px 173px #FFF , 759px 334px #FFF , 1199px 1895px #FFF , 4px 739px #FFF , 1930px 69px #FFF , 1594px 786px #FFF , 431px 1837px #FFF , 113px 1638px #FFF , 953px 1196px #FFF , 1141px 279px #FFF , 573px 1245px #FFF , 518px 1604px #FFF , 1297px 978px #FFF , 987px 288px #FFF , 155px 1905px #FFF , 1667px 313px #FFF , 1465px 1733px #FFF , 1797px 1918px #FFF , 1041px 302px #FFF , 587px 943px #FFF , 87px 459px #FFF , 1393px 491px #FFF , 1151px 2000px #FFF , 1099px 1430px #FFF , 1573px 588px #FFF , 39px 1853px #FFF , 1671px 1970px #FFF , 1973px 1198px #FFF , 2px 1661px #FFF , 515px 1448px #FFF , 536px 687px #FFF , 1921px 411px #FFF , 1077px 1350px #FFF , 1860px 94px #FFF , 1561px 271px #FFF , 1957px 140px #FFF , 1299px 310px #FFF , 1474px 85px #FFF , 491px 1489px #FFF , 46px 1939px #FFF , 1730px 1428px #FFF , 382px 873px #FFF , 1737px 1752px #FFF , 1156px 770px #FFF , 489px 1018px #FFF , 1043px 1190px #FFF , 1138px 1235px #FFF , 1972px 1877px #FFF , 1448px 99px #FFF , 65px 1500px #FFF , 493px 1787px #FFF , 1055px 324px #FFF , 1104px 1758px #FFF , 1683px 1526px #FFF , 1066px 1170px #FFF , 774px 152px #FFF , 1472px 1272px #FFF , 200px 1446px #FFF , 311px 4px #FFF , 853px 1846px #FFF , 131px 707px #FFF , 1888px 242px #FFF , 359px 538px #FFF , 1070px 1682px #FFF , 1151px 84px #FFF , 809px 1447px #FFF , 1847px 1147px #FFF , 1585px 507px #FFF , 1422px 837px #FFF , 1753px 721px #FFF , 1639px 1722px #FFF , 437px 1705px #FFF , 912px 1177px #FFF , 1246px 247px #FFF , 101px 1764px #FFF , 184px 1869px #FFF , 88px 1013px #FFF , 636px 1910px #FFF , 1523px 185px #FFF , 336px 1838px #FFF , 359px 1510px #FFF , 1278px 58px #FFF , 1618px 833px #FFF , 1032px 1610px #FFF , 545px 715px #FFF , 1198px 486px #FFF , 53px 452px #FFF , 779px 664px #FFF , 1449px 1893px #FFF , 781px 1235px #FFF , 415px 532px #FFF , 1758px 1241px #FFF , 656px 1922px #FFF , 186px 120px #FFF , 20px 91px #FFF , 851px 1965px #FFF , 820px 806px #FFF , 894px 1897px #FFF , 1850px 665px #FFF , 1142px 1374px #FFF , 1103px 1127px #FFF , 1946px 1533px #FFF , 852px 1872px #FFF , 1005px 762px #FFF , 1345px 1934px #FFF , 190px 1092px #FFF , 1217px 903px #FFF , 1693px 1590px #FFF , 497px 1988px #FFF , 920px 1569px #FFF , 950px 774px #FFF , 564px 33px #FFF , 1822px 1506px #FFF , 1291px 23px #FFF , 99px 1370px #FFF , 1px 1706px #FFF , 1708px 932px #FFF , 1742px 549px #FFF , 901px 1683px #FFF , 614px 1235px #FFF , 722px 1184px #FFF , 1572px 709px #FFF , 516px 1707px #FFF , 1258px 1760px #FFF , 331px 537px #FFF , 364px 1125px #FFF , 440px 747px #FFF , 506px 842px #FFF , 1654px 1938px #FFF , 701px 1128px #FFF , 1079px 1829px #FFF , 1522px 1474px #FFF , 172px 233px #FFF , 1956px 645px #FFF , 369px 133px #FFF , 892px 1374px #FFF , 460px 677px #FFF , 572px 691px #FFF , 1749px 1135px #FFF , 1324px 1773px #FFF , 513px 1676px #FFF , 1638px 1602px #FFF , 866px 985px #FFF , 170px 517px #FFF , 620px 905px #FFF , 1513px 391px #FFF , 1896px 1649px #FFF , 1985px 944px #FFF , 1018px 1381px #FFF , 1639px 1492px #FFF , 1992px 1603px #FFF , 800px 1512px #FFF , 76px 1484px #FFF , 98px 1887px #FFF , 808px 908px #FFF , 850px 1948px #FFF , 892px 1150px #FFF , 55px 1664px #FFF , 820px 1408px #FFF , 657px 1092px #FFF , 1166px 1596px #FFF , 1371px 394px #FFF , 97px 1019px #FFF , 663px 741px #FFF , 1247px 1280px #FFF , 466px 1455px #FFF , 1630px 1225px #FFF , 66px 744px #FFF , 701px 994px #FFF , 1939px 607px #FFF , 1261px 957px #FFF , 926px 1107px #FFF , 1238px 1914px #FFF , 1247px 1859px #FFF , 1041px 935px #FFF , 1299px 1585px #FFF , 623px 49px #FFF , 1799px 868px #FFF , 667px 973px #FFF , 1060px 163px #FFF , 181px 205px #FFF , 1573px 1558px #FFF , 13px 1187px #FFF , 1527px 1960px #FFF , 1818px 15px #FFF , 736px 133px #FFF , 334px 1490px #FFF , 184px 172px #FFF , 1034px 1041px #FFF , 1074px 227px #FFF , 652px 1683px #FFF , 1333px 1770px #FFF , 386px 809px #FFF , 1845px 434px #FFF , 709px 418px #FFF , 583px 92px #FFF , 1210px 708px #FFF , 431px 470px #FFF , 758px 1019px #FFF , 1339px 1463px #FFF , 699px 480px #FFF , 527px 651px #FFF , 143px 1893px #FFF , 283px 172px #FFF , 1048px 166px #FFF , 671px 1115px #FFF , 410px 732px #FFF , 1275px 900px #FFF , 542px 147px #FFF , 1542px 202px #FFF , 314px 1607px #FFF , 857px 1239px #FFF , 1732px 1895px #FFF , 541px 1047px #FFF , 581px 837px #FFF , 1553px 150px #FFF , 664px 796px #FFF , 1282px 1169px #FFF , 1101px 1690px #FFF , 1142px 1619px #FFF , 1758px 1842px #FFF , 562px 1610px #FFF , 1570px 351px #FFF , 831px 1970px #FFF , 1823px 1536px #FFF , 1951px 698px #FFF , 1904px 1942px #FFF , 1325px 1906px #FFF , 1094px 745px #FFF , 1165px 474px #FFF , 1405px 100px #FFF , 620px 745px #FFF , 1070px 373px #FFF , 119px 1717px #FFF , 1108px 1635px #FFF , 1990px 909px #FFF , 1216px 703px #FFF , 657px 56px #FFF , 1177px 523px #FFF , 363px 815px #FFF , 794px 901px #FFF , 1298px 558px #FFF , 1819px 362px #FFF , 748px 1489px #FFF , 598px 1390px #FFF , 643px 1555px #FFF , 1527px 992px #FFF , 1099px 242px #FFF , 489px 1270px #FFF , 1633px 1443px #FFF , 3px 423px #FFF , 529px 1944px #FFF , 1859px 1849px #FFF , 1560px 702px #FFF , 1312px 1756px #FFF , 1702px 913px #FFF , 406px 623px #FFF , 1085px 1581px #FFF , 471px 1636px #FFF , 1394px 1483px #FFF , 874px 1376px #FFF , 1450px 195px #FFF , 141px 629px #FFF , 51px 1066px #FFF , 1859px 859px #FFF , 1416px 246px #FFF , 761px 1411px #FFF , 595px 618px #FFF , 1298px 568px #FFF , 620px 618px #FFF , 654px 267px #FFF , 358px 641px #FFF , 417px 75px #FFF , 705px 412px #FFF , 948px 27px #FFF , 1613px 282px #FFF , 67px 349px #FFF , 1326px 1471px #FFF , 3px 672px #FFF , 129px 1310px #FFF , 1242px 169px #FFF , 1084px 646px #FFF , 697px 996px #FFF , 1223px 1994px #FFF , 1041px 1939px #FFF , 1839px 1140px #FFF , 1215px 1237px #FFF , 89px 997px #FFF , 1600px 1123px #FFF , 628px 491px #FFF , 1978px 1291px #FFF , 1456px 1563px #FFF , 367px 65px #FFF , 941px 1151px #FFF , 1135px 1313px #FFF , 1436px 443px #FFF , 339px 1843px #FFF , 1793px 652px #FFF , 1503px 1536px #FFF , 1877px 88px #FFF , 307px 845px #FFF , 1633px 1289px #FFF , 385px 1273px #FFF , 49px 794px #FFF , 1096px 1059px #FFF , 1448px 1538px #FFF , 1954px 1484px #FFF , 1892px 1425px #FFF , 1693px 1736px #FFF , 1927px 752px #FFF , 1644px 1401px #FFF , 107px 1736px #FFF , 775px 318px #FFF , 903px 93px #FFF , 1887px 1710px #FFF , 688px 1487px #FFF , 1010px 873px #FFF , 1746px 580px #FFF , 567px 1401px #FFF , 1629px 506px #FFF , 120px 1481px #FFF , 1794px 16px #FFF , 511px 1969px #FFF , 757px 1299px #FFF , 469px 1962px #FFF , 374px 1405px #FFF , 1693px 68px #FFF , 1494px 701px #FFF , 843px 738px #FFF , 1134px 1272px #FFF , 72px 55px #FFF , 1738px 284px #FFF , 104px 943px #FFF , 1156px 763px #FFF , 1482px 1911px #FFF , 1485px 1654px #FFF , 1629px 58px #FFF , 1914px 225px #FFF , 1496px 54px #FFF , 360px 196px #FFF , 1322px 1635px #FFF , 692px 933px #FFF , 924px 1344px #FFF , 1298px 267px #FFF , 1550px 1126px #FFF , 1688px 1377px #FFF , 52px 1614px #FFF , 1360px 855px #FFF , 1145px 1851px #FFF , 1687px 607px #FFF , 1991px 533px #FFF , 1824px 1718px #FFF , 1986px 614px #FFF , 467px 751px #FFF , 955px 817px #FFF , 797px 477px #FFF , 1751px 1842px #FFF , 64px 546px #FFF , 1280px 295px #FFF , 1333px 453px #FFF , 1917px 1339px #FFF , 1177px 592px #FFF , 448px 959px #FFF , 1289px 757px #FFF , 1512px 248px #FFF , 1262px 1609px #FFF , 1573px 1849px #FFF , 1356px 970px #FFF , 1997px 1928px #FFF , 891px 58px #FFF , 609px 723px #FFF , 1059px 1811px #FFF , 1683px 1597px #FFF , 337px 14px #FFF , 1019px 1248px #FFF , 400px 924px #FFF , 909px 1708px #FFF , 1272px 217px #FFF , 1377px 931px #FFF , 1013px 389px #FFF , 1796px 121px #FFF , 1145px 326px #FFF , 302px 1915px #FFF , 481px 841px #FFF , 479px 71px #FFF , 1456px 1801px #FFF , 887px 327px #FFF , 828px 1414px #FFF , 937px 830px #FFF , 353px 897px #FFF , 1728px 138px #FFF , 443px 1427px #FFF , 278px 1503px #FFF , 1983px 956px #FFF , 1681px 313px #FFF , 528px 253px #FFF , 1710px 1447px #FFF , 1219px 1707px #FFF , 1922px 469px #FFF , 765px 1412px #FFF , 1273px 259px #FFF , 1738px 800px #FFF , 263px 671px #FFF , 1157px 1661px #FFF , 1030px 376px #FFF , 1750px 638px #FFF , 1509px 1229px #FFF , 606px 1385px #FFF , 1687px 1012px #FFF , 869px 1205px #FFF , 1383px 1200px #FFF , 421px 620px #FFF , 1130px 935px #FFF , 357px 1379px #FFF , 1965px 1627px #FFF , 423px 1485px #FFF , 675px 1449px #FFF , 12px 214px #FFF , 1985px 1325px #FFF , 850px 1848px #FFF , 1299px 1452px #FFF , 214px 900px #FFF , 1634px 1869px #FFF , 1251px 857px #FFF , 691px 940px #FFF , 920px 698px #FFF , 97px 1336px #FFF , 647px 1829px #FFF , 422px 1968px #FFF , 533px 58px #FFF , 1485px 1466px #FFF , 1122px 1060px #FFF , 657px 1474px #FFF , 1255px 729px #FFF , 268px 415px #FFF , 1315px 718px #FFF , 64px 219px #FFF , 581px 866px #FFF , 312px 1749px #FFF , 1369px 71px #FFF , 891px 1944px #FFF , 574px 315px #FFF , 694px 1042px #FFF , 1297px 746px #FFF , 1654px 23px #FFF , 639px 770px #FFF , 1405px 1045px #FFF , 897px 1590px #FFF , 346px 280px #FFF , 1379px 1075px #FFF , 112px 33px #FFF , 280px 143px #FFF , 1816px 1901px #FFF , 1964px 948px #FFF , 1600px 1651px #FFF , 1211px 218px #FFF , 1888px 101px #FFF , 1351px 1454px #FFF , 135px 948px #FFF , 744px 808px #FFF , 1706px 1007px #FFF , 271px 1640px #FFF , 656px 747px #FFF , 1670px 1623px #FFF , 1216px 1195px #FFF , 908px 1931px #FFF , 1720px 735px #FFF , 586px 209px #FFF , 941px 1832px #FFF , 1494px 12px #FFF , 867px 380px #FFF , 890px 936px #FFF , 1258px 1532px #FFF , 1319px 557px #FFF , 1095px 1053px #FFF , 1080px 637px #FFF , 1963px 70px #FFF , 1094px 1090px #FFF , 816px 750px #FFF , 1604px 1311px #FFF , 792px 56px #FFF , 1795px 1712px #FFF , 1039px 1273px #FFF , 232px 1253px #FFF , 103px 1049px #FFF , 1130px 131px #FFF , 1018px 838px #FFF , 1446px 1971px #FFF , 1112px 1853px #FFF , 1558px 233px #FFF , 1434px 1003px #FFF , 433px 1618px #FFF , 87px 1860px #FFF , 1494px 1843px #FFF , 1826px 434px #FFF , 108px 277px #FFF , 1836px 1264px #FFF , 1105px 1130px #FFF , 1408px 1248px #FFF , 724px 1658px #FFF , 1899px 1491px #FFF , 1880px 644px #FFF , 1714px 1621px #FFF , 56px 1888px #FFF , 1571px 1493px #FFF , 1976px 775px #FFF , 532px 42px #FFF , 1857px 95px #FFF , 1644px 1741px #FFF , 1172px 338px #FFF , 1718px 507px #FFF , 321px 1492px #FFF , 138px 1453px #FFF , 97px 1786px #FFF , 262px 907px #FFF , 672px 1885px #FFF , 1209px 1805px #FFF , 1326px 267px #FFF , 475px 1563px #FFF , 1482px 1710px #FFF , 704px 347px #FFF , 45px 83px #FFF , 1099px 641px #FFF , 47px 1605px #FFF , 1279px 1072px #FFF , 1399px 530px #FFF , 257px 1416px #FFF , 250px 620px #FFF , 701px 1526px #FFF , 1497px 1995px #FFF , 1980px 838px #FFF , 1526px 506px #FFF , 1670px 1377px #FFF , 895px 1077px #FFF , 29px 205px #FFF , 889px 794px #FFF , 129px 1546px #FFF , 1738px 82px #FFF , 1549px 859px #FFF , 1550px 676px #FFF , 1074px 1097px #FFF , 1105px 793px #FFF , 371px 1945px #FFF , 1816px 361px #FFF , 665px 100px #FFF , 1978px 1386px #FFF , 569px 309px #FFF , 998px 1979px #FFF , 754px 1718px #FFF , 743px 505px #FFF , 1786px 568px #FFF , 1085px 1px #FFF , 501px 1329px #FFF , 1598px 1702px #FFF , 1710px 1863px #FFF , 193px 1930px #FFF , 1911px 912px #FFF , 1542px 178px #FFF , 1349px 788px #FFF , 1637px 1887px #FFF , 561px 558px #FFF , 1127px 833px #FFF , 899px 1821px #FFF , 1812px 457px #FFF , 436px 827px #FFF , 1136px 1763px #FFF , 292px 1009px #FFF , 215px 261px #FFF , 1683px 260px #FFF , 476px 1472px #FFF , 111px 1576px #FFF , 886px 1387px #FFF , 1555px 1590px #FFF , 829px 1691px #FFF , 717px 1760px #FFF , 678px 1647px #FFF , 1033px 1162px #FFF , 653px 1422px #FFF , 21px 716px #FFF , 1825px 1384px #FFF;\r\n}\r\n\r\n#stars2 {\r\n  width: 2px;\r\n  height: 2px;\r\n  background: transparent;\r\n  box-shadow: 57px 1520px #FFF , 451px 544px #FFF , 1470px 1505px #FFF , 1929px 1611px #FFF , 1092px 148px #FFF , 850px 133px #FFF , 1974px 1771px #FFF , 991px 1465px #FFF , 874px 1719px #FFF , 1727px 841px #FFF , 1555px 748px #FFF , 581px 1761px #FFF , 1937px 1824px #FFF , 963px 1211px #FFF , 589px 142px #FFF , 506px 906px #FFF , 1603px 592px #FFF , 198px 1271px #FFF , 78px 951px #FFF , 518px 1287px #FFF , 1322px 1970px #FFF , 84px 489px #FFF , 605px 1007px #FFF , 1459px 1851px #FFF , 410px 119px #FFF , 819px 402px #FFF , 105px 1749px #FFF , 636px 1624px #FFF , 1351px 1664px #FFF , 1580px 470px #FFF , 1763px 20px #FFF , 436px 476px #FFF , 360px 771px #FFF , 1810px 675px #FFF , 437px 1046px #FFF , 1386px 1974px #FFF , 532px 225px #FFF , 436px 616px #FFF , 895px 623px #FFF , 20px 562px #FFF , 1670px 243px #FFF , 1507px 1941px #FFF , 1738px 1947px #FFF , 469px 462px #FFF , 849px 1214px #FFF , 1780px 1160px #FFF , 1789px 802px #FFF , 452px 423px #FFF , 1407px 1088px #FFF , 1640px 1255px #FFF , 534px 431px #FFF , 574px 1875px #FFF , 1674px 155px #FFF , 859px 656px #FFF , 1916px 1093px #FFF , 1703px 1308px #FFF , 1002px 1742px #FFF , 927px 473px #FFF , 1561px 1763px #FFF , 1450px 1719px #FFF , 1557px 463px #FFF , 94px 326px #FFF , 28px 1065px #FFF , 1229px 1934px #FFF , 1464px 203px #FFF , 749px 1610px #FFF , 1429px 1041px #FFF , 1820px 974px #FFF , 1458px 1903px #FFF , 1329px 300px #FFF , 1801px 554px #FFF , 1748px 400px #FFF , 449px 854px #FFF , 569px 29px #FFF , 376px 504px #FFF , 1022px 160px #FFF , 194px 346px #FFF , 183px 1161px #FFF , 1999px 826px #FFF , 374px 964px #FFF , 537px 704px #FFF , 986px 700px #FFF , 1740px 1043px #FFF , 1945px 1925px #FFF , 1526px 124px #FFF , 1593px 1571px #FFF , 1403px 1394px #FFF , 1752px 1254px #FFF , 1474px 886px #FFF , 1841px 43px #FFF , 1486px 249px #FFF , 1883px 469px #FFF , 892px 1759px #FFF , 1791px 37px #FFF , 961px 37px #FFF , 224px 1767px #FFF , 256px 583px #FFF , 1706px 34px #FFF , 872px 1616px #FFF , 1160px 836px #FFF , 735px 654px #FFF , 1575px 195px #FFF , 1605px 802px #FFF , 618px 218px #FFF , 581px 857px #FFF , 134px 679px #FFF , 1339px 1754px #FFF , 1235px 1328px #FFF , 1660px 444px #FFF , 87px 1417px #FFF , 780px 733px #FFF , 149px 195px #FFF , 1035px 1107px #FFF , 1264px 1337px #FFF , 1717px 1862px #FFF , 1723px 482px #FFF , 1472px 415px #FFF , 1832px 1507px #FFF , 374px 1258px #FFF , 1330px 213px #FFF , 460px 420px #FFF , 694px 1209px #FFF , 48px 1838px #FFF , 1367px 801px #FFF , 1652px 709px #FFF , 844px 614px #FFF , 1110px 1077px #FFF , 1881px 1439px #FFF , 1435px 1771px #FFF , 448px 717px #FFF , 1987px 1110px #FFF , 1083px 989px #FFF , 437px 1563px #FFF , 1729px 1808px #FFF , 540px 833px #FFF , 938px 1073px #FFF , 756px 223px #FFF , 971px 1950px #FFF , 1076px 1949px #FFF , 1305px 285px #FFF , 1660px 213px #FFF , 1446px 1621px #FFF , 1219px 760px #FFF , 1128px 692px #FFF , 1570px 1935px #FFF , 1093px 210px #FFF , 402px 1352px #FFF , 1436px 196px #FFF , 1940px 520px #FFF , 164px 1728px #FFF , 1198px 629px #FFF , 1913px 424px #FFF , 1336px 99px #FFF , 318px 620px #FFF , 1639px 1170px #FFF , 1236px 1209px #FFF , 1500px 46px #FFF , 1747px 597px #FFF , 1972px 1751px #FFF , 1357px 1387px #FFF , 1904px 482px #FFF , 690px 1381px #FFF , 364px 1634px #FFF , 1337px 1885px #FFF , 1125px 1051px #FFF , 1103px 1865px #FFF , 1771px 77px #FFF , 945px 3px #FFF , 1273px 261px #FFF , 754px 452px #FFF , 240px 1558px #FFF , 26px 1207px #FFF , 151px 1421px #FFF , 1513px 586px #FFF , 369px 853px #FFF , 362px 780px #FFF , 1690px 1426px #FFF , 422px 20px #FFF , 157px 1876px #FFF , 431px 727px #FFF , 1px 315px #FFF , 728px 833px #FFF , 605px 1707px #FFF , 1610px 590px #FFF , 1061px 1847px #FFF , 314px 342px #FFF , 1380px 901px #FFF , 742px 575px #FFF , 734px 1751px #FFF , 185px 1562px #FFF , 1669px 1860px #FFF , 1762px 1098px #FFF , 1689px 405px #FFF , 364px 980px #FFF , 163px 1973px #FFF , 50px 1176px #FFF , 1865px 1671px #FFF , 749px 497px #FFF , 1450px 1310px #FFF , 471px 163px #FFF;\r\n  -webkit-animation: animStar 100s linear infinite;\r\n          animation: animStar 100s linear infinite;\r\n}\r\n#stars2:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 2px;\r\n  height: 2px;\r\n  background: transparent;\r\n  box-shadow: 57px 1520px #FFF , 451px 544px #FFF , 1470px 1505px #FFF , 1929px 1611px #FFF , 1092px 148px #FFF , 850px 133px #FFF , 1974px 1771px #FFF , 991px 1465px #FFF , 874px 1719px #FFF , 1727px 841px #FFF , 1555px 748px #FFF , 581px 1761px #FFF , 1937px 1824px #FFF , 963px 1211px #FFF , 589px 142px #FFF , 506px 906px #FFF , 1603px 592px #FFF , 198px 1271px #FFF , 78px 951px #FFF , 518px 1287px #FFF , 1322px 1970px #FFF , 84px 489px #FFF , 605px 1007px #FFF , 1459px 1851px #FFF , 410px 119px #FFF , 819px 402px #FFF , 105px 1749px #FFF , 636px 1624px #FFF , 1351px 1664px #FFF , 1580px 470px #FFF , 1763px 20px #FFF , 436px 476px #FFF , 360px 771px #FFF , 1810px 675px #FFF , 437px 1046px #FFF , 1386px 1974px #FFF , 532px 225px #FFF , 436px 616px #FFF , 895px 623px #FFF , 20px 562px #FFF , 1670px 243px #FFF , 1507px 1941px #FFF , 1738px 1947px #FFF , 469px 462px #FFF , 849px 1214px #FFF , 1780px 1160px #FFF , 1789px 802px #FFF , 452px 423px #FFF , 1407px 1088px #FFF , 1640px 1255px #FFF , 534px 431px #FFF , 574px 1875px #FFF , 1674px 155px #FFF , 859px 656px #FFF , 1916px 1093px #FFF , 1703px 1308px #FFF , 1002px 1742px #FFF , 927px 473px #FFF , 1561px 1763px #FFF , 1450px 1719px #FFF , 1557px 463px #FFF , 94px 326px #FFF , 28px 1065px #FFF , 1229px 1934px #FFF , 1464px 203px #FFF , 749px 1610px #FFF , 1429px 1041px #FFF , 1820px 974px #FFF , 1458px 1903px #FFF , 1329px 300px #FFF , 1801px 554px #FFF , 1748px 400px #FFF , 449px 854px #FFF , 569px 29px #FFF , 376px 504px #FFF , 1022px 160px #FFF , 194px 346px #FFF , 183px 1161px #FFF , 1999px 826px #FFF , 374px 964px #FFF , 537px 704px #FFF , 986px 700px #FFF , 1740px 1043px #FFF , 1945px 1925px #FFF , 1526px 124px #FFF , 1593px 1571px #FFF , 1403px 1394px #FFF , 1752px 1254px #FFF , 1474px 886px #FFF , 1841px 43px #FFF , 1486px 249px #FFF , 1883px 469px #FFF , 892px 1759px #FFF , 1791px 37px #FFF , 961px 37px #FFF , 224px 1767px #FFF , 256px 583px #FFF , 1706px 34px #FFF , 872px 1616px #FFF , 1160px 836px #FFF , 735px 654px #FFF , 1575px 195px #FFF , 1605px 802px #FFF , 618px 218px #FFF , 581px 857px #FFF , 134px 679px #FFF , 1339px 1754px #FFF , 1235px 1328px #FFF , 1660px 444px #FFF , 87px 1417px #FFF , 780px 733px #FFF , 149px 195px #FFF , 1035px 1107px #FFF , 1264px 1337px #FFF , 1717px 1862px #FFF , 1723px 482px #FFF , 1472px 415px #FFF , 1832px 1507px #FFF , 374px 1258px #FFF , 1330px 213px #FFF , 460px 420px #FFF , 694px 1209px #FFF , 48px 1838px #FFF , 1367px 801px #FFF , 1652px 709px #FFF , 844px 614px #FFF , 1110px 1077px #FFF , 1881px 1439px #FFF , 1435px 1771px #FFF , 448px 717px #FFF , 1987px 1110px #FFF , 1083px 989px #FFF , 437px 1563px #FFF , 1729px 1808px #FFF , 540px 833px #FFF , 938px 1073px #FFF , 756px 223px #FFF , 971px 1950px #FFF , 1076px 1949px #FFF , 1305px 285px #FFF , 1660px 213px #FFF , 1446px 1621px #FFF , 1219px 760px #FFF , 1128px 692px #FFF , 1570px 1935px #FFF , 1093px 210px #FFF , 402px 1352px #FFF , 1436px 196px #FFF , 1940px 520px #FFF , 164px 1728px #FFF , 1198px 629px #FFF , 1913px 424px #FFF , 1336px 99px #FFF , 318px 620px #FFF , 1639px 1170px #FFF , 1236px 1209px #FFF , 1500px 46px #FFF , 1747px 597px #FFF , 1972px 1751px #FFF , 1357px 1387px #FFF , 1904px 482px #FFF , 690px 1381px #FFF , 364px 1634px #FFF , 1337px 1885px #FFF , 1125px 1051px #FFF , 1103px 1865px #FFF , 1771px 77px #FFF , 945px 3px #FFF , 1273px 261px #FFF , 754px 452px #FFF , 240px 1558px #FFF , 26px 1207px #FFF , 151px 1421px #FFF , 1513px 586px #FFF , 369px 853px #FFF , 362px 780px #FFF , 1690px 1426px #FFF , 422px 20px #FFF , 157px 1876px #FFF , 431px 727px #FFF , 1px 315px #FFF , 728px 833px #FFF , 605px 1707px #FFF , 1610px 590px #FFF , 1061px 1847px #FFF , 314px 342px #FFF , 1380px 901px #FFF , 742px 575px #FFF , 734px 1751px #FFF , 185px 1562px #FFF , 1669px 1860px #FFF , 1762px 1098px #FFF , 1689px 405px #FFF , 364px 980px #FFF , 163px 1973px #FFF , 50px 1176px #FFF , 1865px 1671px #FFF , 749px 497px #FFF , 1450px 1310px #FFF , 471px 163px #FFF;\r\n}\r\n\r\n#stars3 {\r\n  width: 3px;\r\n  height: 3px;\r\n  background: transparent;\r\n  box-shadow: 224px 1059px #FFF , 252px 736px #FFF , 1684px 871px #FFF , 1316px 302px #FFF , 183px 1512px #FFF , 1747px 702px #FFF , 28px 1607px #FFF , 3px 1300px #FFF , 1964px 614px #FFF , 27px 549px #FFF , 1929px 990px #FFF , 1971px 943px #FFF , 1058px 1667px #FFF , 1292px 780px #FFF , 1642px 740px #FFF , 1429px 602px #FFF , 51px 538px #FFF , 1014px 1218px #FFF , 843px 484px #FFF , 1966px 329px #FFF , 282px 486px #FFF , 1320px 446px #FFF , 896px 168px #FFF , 1150px 1072px #FFF , 1475px 1660px #FFF , 1270px 570px #FFF , 1641px 416px #FFF , 1464px 684px #FFF , 765px 246px #FFF , 360px 686px #FFF , 1992px 1423px #FFF , 1782px 1767px #FFF , 1449px 1975px #FFF , 1463px 391px #FFF , 552px 1395px #FFF , 1661px 1685px #FFF , 484px 1636px #FFF , 449px 248px #FFF , 455px 1082px #FFF , 367px 1133px #FFF , 396px 893px #FFF , 25px 625px #FFF , 835px 1083px #FFF , 1268px 749px #FFF , 1322px 581px #FFF , 268px 610px #FFF , 1605px 421px #FFF , 1852px 1732px #FFF , 1530px 1910px #FFF , 1651px 47px #FFF , 1077px 1593px #FFF , 7px 41px #FFF , 1633px 666px #FFF , 1237px 1672px #FFF , 1263px 981px #FFF , 1179px 1684px #FFF , 1780px 1510px #FFF , 1373px 633px #FFF , 1548px 256px #FFF , 1707px 1363px #FFF , 1639px 214px #FFF , 746px 1199px #FFF , 999px 1383px #FFF , 989px 526px #FFF , 1751px 1975px #FFF , 13px 1660px #FFF , 674px 1239px #FFF , 1050px 1021px #FFF , 336px 1336px #FFF , 71px 339px #FFF , 1039px 648px #FFF , 210px 112px #FFF , 1460px 1944px #FFF , 756px 803px #FFF , 1929px 1817px #FFF , 1942px 1610px #FFF , 715px 1222px #FFF , 464px 1450px #FFF , 1823px 766px #FFF , 584px 1170px #FFF , 1927px 1856px #FFF , 1002px 391px #FFF , 569px 1080px #FFF , 1022px 1313px #FFF , 47px 172px #FFF , 1042px 475px #FFF , 113px 1580px #FFF , 912px 1377px #FFF , 132px 634px #FFF , 251px 1100px #FFF , 603px 907px #FFF , 1677px 199px #FFF , 385px 460px #FFF , 1497px 338px #FFF , 1251px 446px #FFF , 626px 22px #FFF , 188px 490px #FFF , 1008px 1105px #FFF , 951px 1692px #FFF , 192px 25px #FFF;\r\n  -webkit-animation: animStar 150s linear infinite;\r\n          animation: animStar 150s linear infinite;\r\n}\r\n#stars3:after {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 2000px;\r\n  width: 3px;\r\n  height: 3px;\r\n  background: transparent;\r\n  box-shadow: 224px 1059px #FFF , 252px 736px #FFF , 1684px 871px #FFF , 1316px 302px #FFF , 183px 1512px #FFF , 1747px 702px #FFF , 28px 1607px #FFF , 3px 1300px #FFF , 1964px 614px #FFF , 27px 549px #FFF , 1929px 990px #FFF , 1971px 943px #FFF , 1058px 1667px #FFF , 1292px 780px #FFF , 1642px 740px #FFF , 1429px 602px #FFF , 51px 538px #FFF , 1014px 1218px #FFF , 843px 484px #FFF , 1966px 329px #FFF , 282px 486px #FFF , 1320px 446px #FFF , 896px 168px #FFF , 1150px 1072px #FFF , 1475px 1660px #FFF , 1270px 570px #FFF , 1641px 416px #FFF , 1464px 684px #FFF , 765px 246px #FFF , 360px 686px #FFF , 1992px 1423px #FFF , 1782px 1767px #FFF , 1449px 1975px #FFF , 1463px 391px #FFF , 552px 1395px #FFF , 1661px 1685px #FFF , 484px 1636px #FFF , 449px 248px #FFF , 455px 1082px #FFF , 367px 1133px #FFF , 396px 893px #FFF , 25px 625px #FFF , 835px 1083px #FFF , 1268px 749px #FFF , 1322px 581px #FFF , 268px 610px #FFF , 1605px 421px #FFF , 1852px 1732px #FFF , 1530px 1910px #FFF , 1651px 47px #FFF , 1077px 1593px #FFF , 7px 41px #FFF , 1633px 666px #FFF , 1237px 1672px #FFF , 1263px 981px #FFF , 1179px 1684px #FFF , 1780px 1510px #FFF , 1373px 633px #FFF , 1548px 256px #FFF , 1707px 1363px #FFF , 1639px 214px #FFF , 746px 1199px #FFF , 999px 1383px #FFF , 989px 526px #FFF , 1751px 1975px #FFF , 13px 1660px #FFF , 674px 1239px #FFF , 1050px 1021px #FFF , 336px 1336px #FFF , 71px 339px #FFF , 1039px 648px #FFF , 210px 112px #FFF , 1460px 1944px #FFF , 756px 803px #FFF , 1929px 1817px #FFF , 1942px 1610px #FFF , 715px 1222px #FFF , 464px 1450px #FFF , 1823px 766px #FFF , 584px 1170px #FFF , 1927px 1856px #FFF , 1002px 391px #FFF , 569px 1080px #FFF , 1022px 1313px #FFF , 47px 172px #FFF , 1042px 475px #FFF , 113px 1580px #FFF , 912px 1377px #FFF , 132px 634px #FFF , 251px 1100px #FFF , 603px 907px #FFF , 1677px 199px #FFF , 385px 460px #FFF , 1497px 338px #FFF , 1251px 446px #FFF , 626px 22px #FFF , 188px 490px #FFF , 1008px 1105px #FFF , 951px 1692px #FFF , 192px 25px #FFF;\r\n}\r\n\r\n#title {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  color: #FFF;\r\n  text-align: center;\r\n  font-family: \"lato\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 50px;\r\n  letter-spacing: 10px;\r\n  margin-top: -60px;\r\n  padding-left: 10px;\r\n}\r\n#title span {\r\n  background: -webkit-linear-gradient(white, #38495a);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n@-webkit-keyframes animStar {\r\n  from {\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-2000px);\r\n            transform: translateY(-2000px);\r\n  }\r\n}\r\n\r\n@keyframes animStar {\r\n  from {\r\n    -webkit-transform: translateY(0px);\r\n            transform: translateY(0px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(-2000px);\r\n            transform: translateY(-2000px);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<app-maze-generator></app-maze-generator>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<i (click)=\"move(37)\" class=\"material-icons arrow \">keyboard_arrow_left\n</i>\n<i (click)=\"move(38)\" class=\"material-icons arrow \">keyboard_arrow_up\n</i>\n<i (click)=\"move(40)\" class=\"material-icons arrow \">keyboard_arrow_down\n</i>\n<i (click)=\"move(39)\" class=\"material-icons arrow \">keyboard_arrow_right\n</i>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div [@shakeyshakey]=\"isShakey\" (@shakeyshakey.done)=\"onDone(event)\" >\r\n    <div [@whereChuGoing]=\"whereTo\" (@whereChuGoing.done)=\"whereDone(event)\" [ngClass]=\"{'mario':true, 'lookLeft':lookingLeft}\"></div>\r\n</div>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ 'cell':true, 'leftBorder': !cell.left, 'rightBorder': !cell.right, 'topBorder': !cell.up, 'bottomBorder': !cell.down}\">\r\n \r\n     <img class=\"collectable\" *ngIf=\"cell.hasCollectable\" src=\"https://vignette2.wikia.nocookie.net/mario/images/a/a6/Super_Mushroom_Artwork_-_Super_Mario_3D_World.png/revision/latest?cb=20131217032455\"\r\n    />\r\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div (onGesture)=\"swyped($event)\" appHammerSwipes>\r\n    <md-grid-list #grid cols=\"{{columns}}\" rowHeight=\"fit\">\r\n\r\n        <div *ngFor=\"let row of map; let i = index\">\r\n            <md-grid-tile #gridItem *ngFor=\"let cell of row; let j = index\" [colspan]=\"1\" [rowspan]=\"1\">\r\n                <app-cell [cell]=\"cell[0]\" [indexX]=\"i\" [indexY]=\"j\"></app-cell>\r\n            </md-grid-tile>\r\n\r\n        </div>\r\n        <div id='stars'></div>\r\n        <div id='stars2'></div>\r\n        <div id='stars3'></div>\r\n    </md-grid-list>\r\n\r\n    <app-avatar [map]=\"map\" [gridLocation]=\"gridLocation\" [startPosition]=\"startPosition\" [style.width.px]=\"dimensions\" [style.height.px]=\"dimensions\"\r\n         #avatar></app-avatar>\r\n    <app-avatar-controller [move]=\"avatar.move\"></app-avatar-controller>\r\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABYCAYAAACONxXWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzE4NDQ4MzkxMDgxMUU0OUU3Mjg5QUVDNzY2MTkyMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzE4NDQ4NDkxMDgxMUU0OUU3Mjg5QUVDNzY2MTkyMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzMTg0NDgxOTEwODExRTQ5RTcyODlBRUM3NjYxOTIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzMTg0NDgyOTEwODExRTQ5RTcyODlBRUM3NjYxOTIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS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"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Cell = (function () {
    function Cell() {
        this.left = false;
        this.up = false;
        this.right = false;
        this.down = false;
        if (Math.floor(Math.random() * 7) > 5)
            this.hasCollectable = true;
        else
            this.hasCollectable = false;
    }
    Cell.prototype.removeWall = function (direction) {
        if (direction == 0)
            this.left = true;
        if (direction == 1)
            this.up = true;
        if (direction == 2)
            this.right = true;
        if (direction == 3)
            this.down = true;
    };
    return Cell;
}());

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(102);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(164),
        styles: [__webpack_require__(156)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maze_generator_maze_generator_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__avatar_avatar_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cell_cell_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__avatar_controller_avatar_controller_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_hammer_swipes_directive__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__maze_generator_maze_generator_component__["a" /* MazeGeneratorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__avatar_avatar_component__["a" /* AvatarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__cell_cell_component__["a" /* CellComponent */],
            __WEBPACK_IMPORTED_MODULE_10__avatar_controller_avatar_controller_component__["a" /* AvatarControllerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_hammer_swipes_directive__["a" /* HammerSwipesDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarControllerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarControllerComponent = (function () {
    function AvatarControllerComponent() {
    }
    AvatarControllerComponent.prototype.ngOnInit = function () {
    };
    return AvatarControllerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AvatarControllerComponent.prototype, "move", void 0);
AvatarControllerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-avatar-controller',
        template: __webpack_require__(165),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], AvatarControllerComponent);

//# sourceMappingURL=avatar-controller.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarComponent = (function () {
    function AvatarComponent(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.shakeCounter = 0;
        // @HostListener('')
        this.move = function (event) {
            if (_this.moving)
                return;
            var keyCode = event.keyCode;
            var compuStyle = window.getComputedStyle(_this.part);
            var origXVal = compuStyle.getPropertyValue("transform").split('(')[1];
            origXVal = origXVal.split(')')[0];
            var origX = origXVal.split(',');
            var width = +_this.size.width.split('px')[0] + 1;
            var height = +_this.size.height.split('px')[0] + 1;
            if (keyCode == 37 || event == 'swipeleft') {
                _this.lookingLeft = true;
                if (!(_this.map[_this.currentPosition.y][_this.currentPosition.x][0].left)) {
                    if (_this.shakeCounter == 5) {
                        _this.isShakey = "SERIOUSLYSHAKEY";
                        _this.shakeCounter = 0;
                        _this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
                    }
                    else {
                        _this.isShakey = "SHAKEYSIDES";
                        _this.shakeCounter++;
                    }
                    // break;
                }
                else {
                    var newX = +origX[4] - width;
                    var oldY = +origX[5];
                    _this.renderer.setStyle(_this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
                    _this.whereTo = "walking";
                    _this.currentPosition.x--;
                    _this.moving = true;
                    // break;
                }
            }
            else if (keyCode == 38 || event == 'swipeup') {
                if (!(_this.map[_this.currentPosition.y][_this.currentPosition.x][0].up)) {
                    if (_this.shakeCounter == 5) {
                        _this.isShakey = "SERIOUSLYSHAKEY";
                        _this.shakeCounter = 0;
                        _this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
                    }
                    else {
                        _this.isShakey = "SHAKEYUPP";
                        _this.shakeCounter++;
                    }
                    // break;
                }
                else {
                    var newY = +origX[5] - height;
                    var oldX = +origX[4];
                    _this.renderer.setStyle(_this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
                    _this.whereTo = "jumping";
                    _this.currentPosition.y--;
                    _this.moving = true;
                    // break;
                }
            }
            else if (keyCode == '39' || event == 'swiperight') {
                _this.lookingLeft = false;
                if (!(_this.map[_this.currentPosition.y][_this.currentPosition.x][0].right)) {
                    if (_this.shakeCounter == 5) {
                        _this.isShakey = "SERIOUSLYSHAKEY";
                        _this.shakeCounter = 0;
                        _this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
                    }
                    else {
                        _this.isShakey = "SHAKEYSIDES";
                        _this.shakeCounter++;
                    }
                    // break;
                }
                else {
                    newX = +origX[4] + width;
                    oldY = +origX[5];
                    _this.renderer.setStyle(_this.part, 'transform', 'translate(' + newX + 'px,' + oldY + 'px)');
                    _this.whereTo = "walking";
                    _this.currentPosition.x++;
                    _this.moving = true;
                    // break;
                }
            }
            else if (keyCode == 40 || event == 'swipedown') {
                if (!(_this.map[_this.currentPosition.y][_this.currentPosition.x][0].down)) {
                    if (_this.shakeCounter == 5) {
                        _this.isShakey = "SERIOUSLYSHAKEY";
                        _this.shakeCounter = 0;
                        _this.imgSource = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIsh0BcvVCIFndpUlILEEFA5BU7juhHjWH6VBg1QUGsBnARYD";
                    }
                    else {
                        _this.isShakey = "SHAKEYUPP";
                        _this.shakeCounter++;
                    }
                    // break;
                }
                else {
                    newY = +origX[5] + height;
                    oldX = +origX[4];
                    _this.renderer.setStyle(_this.part, 'transform', 'translate(' + oldX + 'px,' + newY + 'px)');
                    _this.currentPosition.y++;
                    _this.moving = true;
                    // break;
                }
            }
            _this.renderer.listen(_this.part, 'transitionend', function (event) {
                if (_this.moving && _this.map[_this.currentPosition.y][_this.currentPosition.x][0].hasCollectable) {
                    _this.map[_this.currentPosition.y][_this.currentPosition.x][0].hasCollectable = false;
                    _this.startPosition.collectables--;
                }
                _this.moving = false;
                _this.whereTo = "nowhere";
            });
        };
    }
    AvatarComponent.prototype.ngOnInit = function () {
        this.part = this.el.nativeElement;
        this.currentPosition = { x: 0, y: 0 };
        this.currentIsStart = false;
        this.lookingLeft = false;
        // this.whereTo = "nowhere";
        this.imgSource = "https://upload.wikimedia.org/wikipedia/en/d/d3/Shy_Guy_%28Mario%29.png";
    };
    AvatarComponent.prototype.ngAfterViewChecked = function () {
        if (typeof this.size === "undefined" || (typeof this.gridLocation === "undefined"))
            return;
        var width = +this.size.width.split('px')[0];
        var height = +this.size.height.split('px')[0];
        var dimension = this.part.getBoundingClientRect().width;
        this.renderer.setStyle(this.part, 'left', (this.gridLocation.left + width / 2 - dimension / 2 + this.startPosition.x * (1 + width)) + "px");
        this.renderer.setStyle(this.part, 'top', (this.gridLocation.top + height / 2 - dimension / 2 + this.startPosition.y * (1 + height)) + "px");
        if (!this.currentIsStart) {
            this.currentPosition.x = this.startPosition.x;
            this.currentPosition.y = this.startPosition.y;
            this.currentIsStart = true;
        }
    };
    AvatarComponent.prototype.onDone = function ($event) {
        this.isShakey = "nahh";
        this.imgSource = "https://s3.amazonaws.com/frt-prod/cms/files/files/000/000/069/original/Mario_Pixeles.png";
    };
    AvatarComponent.prototype.whereDone = function ($event) {
        // if (this.moving) {
        //   switch (this.whereTo) {
        //     case ("right"): console.log("ANIMATION DONE" + this.whereTo); this.whereTo = "nowhere"; this.whereTo = "right"; break;
        //     case ("left"): this.whereTo = "left"; break;
        //   }
        // }
    };
    AvatarComponent.prototype.handleKeyboardEvent = function (event) {
        this.move(event);
    };
    AvatarComponent.prototype.swyped = function (event) {
        console.log(event);
        console.log("ANA FE AVATAR YAMMA");
        this.move(event);
    };
    return AvatarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "gridLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AvatarComponent.prototype, "startPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AvatarComponent.prototype, "handleKeyboardEvent", null);
AvatarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-avatar',
        template: __webpack_require__(166),
        styles: [__webpack_require__(158)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('whereChuGoing', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('walking', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => walking', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])("0.5s linear", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ background: 'url(assets/mariowalk.png)', offset: 0.3 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ background: 'url(assets/mariopause.png)', offset: 0.6 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ background: 'url(assets/mariowalk.png)', offset: 0.8 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('jumping', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ background: 'url(assets/mariojump2.png)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => jumping', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])("0.01s")
                    // , keyframes([
                    //   // style({ background: 'url(assets/mariojump1.png)', offset: 0.3 }),
                    //   // style({ background: 'url(assets/mariojump2.png)', offset: 0.1 }),
                    //   // style({ background: 'url(assets/mariojump3.png)', offset: 0.8 }),
                    // ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('nowhere', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ background: 'url(assets/mariopause.png)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* =>nowhere', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])(1))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('shakeyshakey', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('SHAKEYSIDES', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => SHAKEYSIDES', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])("0.82s cubic-bezier(.36,.07,.19,.97)", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('SHAKEYUPP', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => SHAKEYUPP', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])("0.82s cubic-bezier(.36,.07,.19,.97)", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, -1px, 0)', offset: 0.1 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 2px, 0)', offset: 0.2 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, -4px, 0)', offset: 0.3 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 4px, 0)', offset: 0.4 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, -4px, 0)', offset: 0.5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 4px, 0)', offset: 0.6 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, -4px, 0)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 2px, 0)', offset: 0.8 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translate3d(0, -1px, 0)', offset: 0.9 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('SERIOUSLYSHAKEY', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('* => SERIOUSLYSHAKEY', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])("3s ease-in", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'scale(20)', offset: 0.1 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'skew(30deg,30deg) rotate(180deg)', offset: 0.4 }),
                    ]))
                ])
            ])
        ]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: "[playerAvatar]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _b || Object])
], AvatarComponent);

var _a, _b;
//# sourceMappingURL=avatar.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_cell_cell__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CellComponent = (function () {
    function CellComponent() {
    }
    CellComponent.prototype.ngOnInit = function () {
    };
    return CellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_cell_cell__["a" /* Cell */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_cell_cell__["a" /* Cell */]) === "function" && _a || Object)
], CellComponent.prototype, "cell", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CellComponent.prototype, "indexX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CellComponent.prototype, "indexY", void 0);
CellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-cell',
        template: __webpack_require__(167),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], CellComponent);

var _a;
//# sourceMappingURL=cell.component.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map