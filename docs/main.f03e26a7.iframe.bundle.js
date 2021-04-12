(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject,web=__webpack_require__(103),taggedTemplateLiteral=__webpack_require__(104),styled_components_browser_esm=__webpack_require__(105),DotStyled=Object(styled_components_browser_esm.a)(web.a.div)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  border-radius: 99px;\n  background-color: ",";\n  width: 5px;\n  height: 5px;\n  margin: 0.3rem;\n"])),(function(_ref){return _ref.color||"#ffffff"})),jsx_runtime=__webpack_require__(39);function Dot(_ref){var active=_ref.active,color=_ref.color,_useSpring=Object(web.b)({opacity:active?1:.8,transform:active?"scale(1.5)":"scale(1)",config:{mass:5,tension:500,friction:80}}),transform=_useSpring.transform,opacity=_useSpring.opacity;return Object(jsx_runtime.jsx)(DotStyled,{color:color,style:{opacity:opacity.interpolate((function(o){return o})),transform:transform}})}Dot.defaultProps={color:"#FFFFFF",active:!1};__webpack_exports__.a=Dot;try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#FFFFFF"},description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/Dot/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},165:function(module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject,_templateObject2,slicedToArray=__webpack_require__(106),createForOfIteratorHelper=__webpack_require__(447),Dot=(__webpack_require__(0),__webpack_require__(164)),taggedTemplateLiteral=__webpack_require__(104),styled_components_browser_esm=__webpack_require__(105),DotsListStyled=styled_components_browser_esm.a.div(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  position: absolute;\n  width: 100%;\n  display: flex;\n  bottom: 10px;\n  justify-content: space-around;\n"]))),DotContainerStyled=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n  padding: 0.7rem 1rem;\n  margin: 1rem;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n"]))),jsx_runtime=__webpack_require__(39);function DotsList(_ref){var _step,activeIndex=_ref.activeIndex,items=_ref.items,dotsColor=_ref.dotsColor,dots=[],_iterator=Object(createForOfIteratorHelper.a)(items.entries());try{for(_iterator.s();!(_step=_iterator.n()).done;){var index=Object(slicedToArray.a)(_step.value,1)[0];dots.push(Object(jsx_runtime.jsx)(Dot.a,{active:activeIndex-1===index,color:dotsColor},"dot-".concat(index)))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return Object(jsx_runtime.jsx)(DotsListStyled,{children:Object(jsx_runtime.jsx)(DotContainerStyled,{children:dots})})}DotsList.defaultProps={activeIndex:1,items:[],dotsColor:"#FFFFFF"};__webpack_exports__.a=DotsList;try{DotsList.displayName="DotsList",DotsList.__docgenInfo={description:"",displayName:"DotsList",props:{activeIndex:{defaultValue:{value:"1"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"any[]"}},dotsColor:{defaultValue:{value:"#FFFFFF"},description:"",name:"dotsColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DotsList/DotsList.tsx#DotsList"]={docgenInfo:DotsList.__docgenInfo,name:"DotsList",path:"src/components/DotsList/DotsList.tsx#DotsList"})}catch(__react_docgen_typescript_loader_error){}},469:function(module,exports,__webpack_require__){__webpack_require__(470),__webpack_require__(625),__webpack_require__(626),__webpack_require__(827),__webpack_require__(828),__webpack_require__(832),__webpack_require__(833),__webpack_require__(831),__webpack_require__(829),__webpack_require__(834),__webpack_require__(835),module.exports=__webpack_require__(822)},537:function(module,exports){},626:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(336)},822:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(336).configure)([__webpack_require__(823)],module,!1)}).call(this,__webpack_require__(193)(module))},823:function(module,exports,__webpack_require__){var map={"./components/Dot/Dot.stories.tsx":824,"./components/DotsList/DotsList.stories.tsx":826,"./components/Slides/Slides.stories.tsx":830};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=823},824:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleExample",(function(){return SimpleExample}));var _Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(51),_Dot__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(39);__webpack_exports__.default={title:"SubComponents/Dot",component:_Dot__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{active:{control:{type:"boolean"}},color:{control:{type:"color"}}}};var SimpleExample=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Dot__WEBPACK_IMPORTED_MODULE_1__.a,Object(_Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});SimpleExample.args={active:!0,color:"#000000"},SimpleExample.parameters=Object(_Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Dot {...args} />"}},SimpleExample.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleExample",(function(){return SimpleExample}));var _Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(51),_DotsList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(165),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(39);__webpack_exports__.default={title:"SubComponents/DotsList",component:_DotsList__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{activeIndex:{control:{type:"number",min:1,max:5}},items:{control:{type:"object"}},dotsColor:{control:{type:"color"}}}};var SimpleExample=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DotsList__WEBPACK_IMPORTED_MODULE_1__.a,Object(_Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});SimpleExample.args={activeIndex:1,items:[1,2,3,4,5],dotsColor:"#000000"},SimpleExample.parameters=Object(_Users_renemonroy_Development_renemonroy_react_slides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <DotsList {...args} />"}},SimpleExample.parameters)},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithGap",(function(){return WithGap}));var _templateObject,_templateObject2,objectSpread2=__webpack_require__(51),slicedToArray=__webpack_require__(106),react=__webpack_require__(0),web=__webpack_require__(103),reactusegesture_esm=__webpack_require__(448),DotsList=__webpack_require__(165),taggedTemplateLiteral=__webpack_require__(104),styled_components_browser_esm=__webpack_require__(105),SlidesStyled=styled_components_browser_esm.a.div(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n"]))),SlideStyled=Object(styled_components_browser_esm.a)(web.a.div)(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n  position: absolute;\n  height: 100%;\n  will-change: transform;\n"])));var jsx_runtime=__webpack_require__(39);function Slides(_ref){var children=_ref.children,width=_ref.width,items=_ref.items,itemsGap=_ref.itemsGap,style=_ref.style,mass=_ref.mass,tension=_ref.tension,friction=_ref.friction,dotsColor=_ref.dotsColor,disableDots=_ref.disableDots,onSlideChange=_ref.onSlideChange,containerWidth=width,itemsSize=items.length,containerPadding=containerWidth*itemsGap*2,itemWidth=containerWidth-2*containerPadding,itemGap=containerPadding/2;function calcInitialPos(i){return(itemWidth+itemGap)*i+containerPadding}var slide=Object(react.useRef)(0),_useState=Object(react.useState)(slide.current+1),_useState2=Object(slicedToArray.a)(_useState,2),activeIndex=_useState2[0],setActiveIndex=_useState2[1],_useSprings=Object(web.c)(itemsSize,(function(i){return{x:calcInitialPos(i),config:{mass:mass,tension:tension,friction:friction}}})),_useSprings2=Object(slicedToArray.a)(_useSprings,2),springs=_useSprings2[0],setSprings=_useSprings2[1],dragCallback=Object(react.useCallback)((function(active,cancel,distance,xDir,xMov){active&&distance>containerWidth/2&&(slide.current=function clamp(number,min,max){return Math.max(min,Math.min(number,max))}(slide.current+(xDir>0?-1:1),0,itemsSize-1),cancel()),setActiveIndex(slide.current+1),setSprings((function(i){return{x:(i-slide.current)*(itemWidth+itemGap)+(active?xMov:0+containerPadding)}}))}),[containerWidth,setSprings,itemsSize]),bindDrag=Object(reactusegesture_esm.a)((function(_ref2){var cancel=_ref2.cancel,xDir=Object(slicedToArray.a)(_ref2.direction,1)[0],distance=_ref2.distance,active=_ref2.active,xMov=Object(slicedToArray.a)(_ref2.movement,1)[0];Object(slicedToArray.a)(_ref2.vxvy,1)[0]&&dragCallback(active,cancel,distance,xDir,xMov)}),{useTouch:!0});return Object(react.useEffect)((function(){setSprings((function(i){return{x:calcInitialPos(i)}}))}),[width,itemsGap]),Object(react.useEffect)((function(){onSlideChange(items[activeIndex-1],activeIndex)}),[activeIndex]),Object(jsx_runtime.jsxs)(SlidesStyled,Object(objectSpread2.a)(Object(objectSpread2.a)({},bindDrag()),{},{style:Object(objectSpread2.a)(Object(objectSpread2.a)({},style),{},{width:"".concat(containerWidth,"px")}),children:[springs.map((function(_ref3,i){var x=_ref3.x;return Object(jsx_runtime.jsx)(SlideStyled,{style:{width:"".concat(itemWidth,"px"),transform:x.interpolate((function(x){return"translate3d(".concat(x,"px, 0, 0)")}))},children:children(items[i],{next:function next(){activeIndex<itemsSize&&(slide.current=activeIndex,setActiveIndex(slide.current+1),setSprings((function(i){return{x:(i-slide.current)*(itemWidth+itemGap)+containerPadding}})))},prev:function prev(){activeIndex>1&&(slide.current=slide.current-1,setActiveIndex(slide.current+1),setSprings((function(i){return{x:(i-slide.current)*(itemWidth+itemGap)+containerPadding}})))}},i)},"slide-".concat(i))})),disableDots?null:Object(jsx_runtime.jsx)(DotsList.a,{activeIndex:activeIndex,items:items,dotsColor:dotsColor})]}))}Slides.defaultProps={width:480,itemsGap:.035,mass:1,tension:500,friction:50,dotsColor:"#ffffff",disableDots:!1,active:1,onSlideChange:function onSlideChange(){}};var Slides_Slides=Slides;try{Slides.displayName="Slides",Slides.__docgenInfo={description:"",displayName:"Slides",props:{active:{defaultValue:{value:"1"},description:"",name:"active",required:!1,type:{name:"number"}},disableDots:{defaultValue:{value:"false"},description:"",name:"disableDots",required:!1,type:{name:"boolean"}},dotsColor:{defaultValue:{value:"#ffffff"},description:"",name:"dotsColor",required:!1,type:{name:"string"}},friction:{defaultValue:{value:"50"},description:"",name:"friction",required:!1,type:{name:"number"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"object[]"}},itemsGap:{defaultValue:{value:"0.035"},description:"",name:"itemsGap",required:!1,type:{name:"number"}},mass:{defaultValue:{value:"1"},description:"",name:"mass",required:!1,type:{name:"number"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!0,type:{name:"(item: Object, i: number) => void"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"CSSProperties"}},tension:{defaultValue:{value:"500"},description:"",name:"tension",required:!1,type:{name:"number"}},width:{defaultValue:{value:"480"},description:"",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slides/Slides.tsx#Slides"]={docgenInfo:Slides.__docgenInfo,name:"Slides",path:"src/components/Slides/Slides.tsx#Slides"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Main Components/Slides",component:Slides_Slides,argTypes:{disableDots:{control:{type:"boolean"}},dotsColor:{control:{type:"color"}},friction:{control:{type:"number"}},items:{control:{type:"object"}},itemsGap:{control:{type:"number"}},mass:{control:{type:"number"}},tension:{control:{type:"number"}}}};var WithGap=function Template(args){return Object(jsx_runtime.jsx)(Slides_Slides,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{style:{backgroundColor:"#D7D7D7",border:"1px solid #c1c1c1",boxSizing:"border-box",height:"400px",paddingTop:"5px"},children:function children(_ref){var text=_ref.text;return Object(jsx_runtime.jsx)("div",{style:{alignItems:"center",backgroundColor:"#FFFFFF",borderRadius:"20px",color:"#6002EE",display:"flex",height:"calc(100% - 10px)",justifyContent:"center",textAlign:"center"},children:text})}}))}.bind({});WithGap.args={disableDots:!0,dotsColor:"#010101",items:[{text:"First"},{text:"Second"},{text:"Third"},{text:"Fourth"}],itemsGap:.035,width:300},WithGap.parameters=Object(objectSpread2.a)({storySource:{source:'(args) => (\n  <Slides\n    {...args}\n    style={{\n      backgroundColor: "#D7D7D7",\n      border: "1px solid #c1c1c1",\n      boxSizing: "border-box",\n      height: "400px",\n      paddingTop: "5px",\n    }}\n  >\n    {({ text }: any) => (\n      <div\n        style={{\n          alignItems: "center",\n          backgroundColor: "#FFFFFF",\n          borderRadius: "20px",\n          color: "#6002EE",\n          display: "flex",\n          height: "calc(100% - 10px)",\n          justifyContent: "center",\n          textAlign: "center",\n        }}\n      >\n        {text}\n      </div>\n    )}\n  </Slides>\n)'}},WithGap.parameters)},835:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(840),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[469,2,3]]]);