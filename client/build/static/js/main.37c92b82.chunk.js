(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={form:"Form_form__2TM1N",heading:"Form_heading__2iqZa",light:"Form_light__15AFB",input:"Form_input__2ESfd",button:"Form_button__243jh"}},11:function(e,t,a){e.exports={card:"ImagesCard_card__1dEhy",img:"ImagesCard_img__1E45u",colors_wrapper:"ImagesCard_colors_wrapper__tNoHQ",color:"ImagesCard_color__3_jwv",addBtn:"ImagesCard_addBtn__17o51"}},12:function(e,t,a){e.exports={paginationBttns:"Pagination_paginationBttns__1hoMW",previousBttn:"Pagination_previousBttn__3A3FT",nextBttn:"Pagination_nextBttn__1ne7j",paginationActive:"Pagination_paginationActive__2zYi6",paginationDisabled:"Pagination_paginationDisabled__1qjiH"}},19:function(e,t,a){e.exports={inputGroup:"SearchBar_inputGroup__XMWWV",searchBox:"SearchBar_searchBox__3hgAq",searchIcon:"SearchBar_searchIcon__RP80o"}},20:function(e,t,a){e.exports={heading:"Header_heading__sAf1D",light:"Header_light__1p9Mt"}},32:function(e,t,a){e.exports={box:"Loader_box__XZ2hR"}},33:function(e,t,a){e.exports={error:"Error_error__1Ykqe",button:"Error_button__1IjL9"}},35:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},6:function(e,t,a){e.exports={selectionWraper:"HomePage_selectionWraper__1oNZA",imageGridWrapper:"HomePage_imageGridWrapper__13Lqu",deleteBtn:"HomePage_deleteBtn__1eV5z",button:"HomePage_button__3ylU7"}},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),i=(a(40),a(41),a(9)),o=a(1),s=a(2),u=a(7),m=a(18),g=a.n(m),d=a(14),p=a.n(d);var f=a(15),b={selectedImages:localStorage.getItem("selectedImages")?JSON.parse(localStorage.getItem("selectedImages")):[]},h=Object(n.createContext)(b),v=function(e){var t=Object(n.useState)(b),a=Object(s.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){localStorage.setItem("selectedImages",JSON.stringify(c.selectedImages))}),[c]);return r.a.createElement(h.Provider,{value:{selectedImages:c.selectedImages,addImageToSelectedImagesList:function(e){l(Object(f.a)(Object(f.a)({},c),{},{selectedImages:[].concat(Object(u.a)(c.selectedImages),[e])}))},removeImageFromSelectedImagesList:function(e){l(Object(f.a)(Object(f.a)({},c),{},{selectedImages:c.selectedImages.filter((function(t){return t.image.id!==e.image.id}))}))},removeSelections:function(){localStorage.removeItem("selectedImages"),localStorage.clear(),l({selectedImages:[]})}}},e.children)},E=a(32),_=a.n(E),j=function(){return r.a.createElement("div",{className:_.a.box},r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"54px",height:"60px",viewBox:"0 0 24 30"},r.a.createElement("rect",{x:"0",y:"0",width:"3",height:"10",fill:"#333"},r.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"10",y:"0",width:"3",height:"10",fill:"#333"},r.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"20",y:"0",width:"3",height:"10",fill:"#333"},r.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"}))))},x=a(33),y=a.n(x),C=function(e){var t=e.message;return r.a.createElement("div",{className:"".concat(y.a.error," alert position-absolute"),role:"alert"},r.a.createElement("h1",null,t))},O=a(6),S=a.n(O),N=a(5);var B=function(){var e=Object(n.useContext)(h).selectedImages,t=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),o=i[0],m=i[1],d=Object(n.useState)([]),f=Object(s.a)(d,2),b=f[0],h=f[1],v=Object(n.useState)([]),E=Object(s.a)(v,2),_=E[0],j=E[1],x=Object(n.useState)(null),y=Object(s.a)(x,2);return y[0],y[1],{loading1:r,error1:o,mainPalette:b,secondaryPalettes:_,getPalettes:function(e){var t=[];e.forEach((function(e){t.push(e.image)})),m(!1),c(!0),j([]),g.a.post("https://paletto-app.herokuapp.com/api/palettes",t).then((function(e){h(e.data.mainPalette);var t=Math.ceil(e.data.finalPalettes.length/25),a=Math.ceil(e.data.finalPalettes.length/50),n=Math.ceil(e.data.finalPalettes.length/100),r=e.data.finalPalettes.slice(t,t+2),l=e.data.finalPalettes.slice(a,a+2),i=e.data.finalPalettes.slice(n,n+2);j([].concat(Object(u.a)(e.data.finalPalettes.slice(0,3)),Object(u.a)(r),Object(u.a)(l),Object(u.a)(i))),c(!1)})).catch((function(e){c(!1),m("Something went wrong")}))},getRGBColors:function(){var e=[],t=[];return b.forEach((function(t){var a=t.replace("#",""),n=p.a.hex.rgb(a);e.push(n)})),_.forEach((function(e){for(var a=[],n=0;n<e.length;n++){var r=e[n].replace("#",""),c=p.a.hex.rgb(r);a.push(c)}t.push(a)})),{RGBList:e,RGBList2:t}},getCMYKColors:function(){var e=[],t=[];return b.forEach((function(t){var a=t.replace("#",""),n=p.a.hex.rgb(a);e.push(n)})),_.forEach((function(e){for(var a=[],n=0;n<e.length;n++){var r=e[n].replace("#",""),c=p.a.hex.rgb(r);a.push(c)}t.push(a)})),{CMYKList:e,CMYKList2:t}}}}(),a=t.error1,c=t.loading1,l=t.mainPalette,o=t.secondaryPalettes,m=t.getPalettes,d=t.getRGBColors,f=t.getCMYKColors,b=Object(n.useState)(!1),v=Object(s.a)(b,2),E=v[0],_=v[1],x=Object(n.useRef)(null),y=Object(n.useState)({HEX:!0,RGB:!1,CMYK:!1}),O=Object(s.a)(y,2),B=O[0],I=O[1];return Object(n.useEffect)((function(){m(e)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"d-flex m-5 justify-content-around align-items-center flex-wrap"},r.a.createElement(i.b,{to:"/",className:"btn  ".concat(S.a.button)},r.a.createElement(N.a,{style:{marginRight:"0.5rem"}}),"Back"),r.a.createElement("div",null,r.a.createElement("h5",null,"Color Mode"),r.a.createElement("select",{ref:x,defaultValue:"0",className:"form-select","aria-label":"Default select example ",onChange:function(e){return function(e){e.preventDefault(),"0"===e.target.value?I({HEX:!0,RGB:!1,CMYK:!1}):"1"===e.target.value?I({HEX:!1,RGB:!0,CMYK:!1}):"2"===e.target.value&&I({HEX:!1,RGB:!1,CMYK:!0})}(e)}},r.a.createElement("option",{value:"0",disabled:B.HEX},"HEX"),r.a.createElement("option",{value:"1",disabled:B.RGB},"RGB"),r.a.createElement("option",{value:"2",disabled:B.CMYK},"CMYK")))),c&&r.a.createElement(j,null),a&&r.a.createElement(C,null),void setTimeout((function(){_(!1)}),1e3),E?r.a.createElement("p",{style:{textAlign:"center"}},E):null,l.length>0&&o.length>0?r.a.createElement("div",{className:"container",style:{height:"75vh",overflowY:"scroll"}},r.a.createElement("div",{className:"d-flex m-2 justify-content-center align-items-center"},l.map((function(e,t){return r.a.createElement("div",{key:t,style:{width:"10rem",height:"5rem",padding:"2rem",backgroundColor:e},onClick:function(){console.log(t),function(e){if("0"===x.current.value)navigator.clipboard.writeText(l[e]);else if("1"===x.current.value){var t=d(),a="(".concat(t.RGBList[e][0],",").concat(t.RGBList[e][1],",").concat(t.RGBList[e][2],")");navigator.clipboard.writeText(a)}else if("2"===x.current.value){var n=f();a="(".concat(n.CMYKList[e][0],",").concat(n.CMYKList[e][1],",").concat(n.CMYKList[e][2],")");navigator.clipboard.writeText(a)}_("Coppied!")}(t)}})}))),o.map((function(e,t){return r.a.createElement("div",{key:t,className:"d-flex m-2 justify-content-center align-items-center"},e.map((function(e,a){return r.a.createElement("div",{key:a,style:{width:"10rem",height:"5rem",padding:"2rem",backgroundColor:e},onClick:function(){console.log(t,a),function(e,t){if("0"===x.current.value)navigator.clipboard.writeText(o[e][t]);else if("1"===x.current.value){var a=d(),n="(".concat(a.RGBList2[e][t][0],",").concat(a.RGBList2[e][t][1],",").concat(a.RGBList2[e][t][2],")");navigator.clipboard.writeText(n)}else if("2"===x.current.value){var r=f();n="(".concat(r.CMYKList2[e][t][0],",").concat(r.CMYKList2[e][t][1],",").concat(r.CMYKList2[e][t][2],")");navigator.clipboard.writeText(n)}_("Coppied!")}(t,a)}})})))}))):"")};var I=a(19),P=a.n(I);var w=function(e){var t=e.submitSearch,a=e.query,c=Object(n.useState)(a),l=Object(s.a)(c,2),i=l[0],o=l[1],u=function(e){e.preventDefault(),i&&""!==i&&t(i)};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:P.a.inputGroup,onSubmit:u},r.a.createElement("input",{type:"search",className:"ml-5 ".concat(P.a.searchBox),placeholder:""===a?a:"Search Images...",value:i,onInput:function(e){return o(e.target.value)}}),r.a.createElement(N.d,{id:"search-button",type:"submit",onClick:u})))},L=a(20),k=a.n(L),R=function(e){var t=e.submitSearch,a=e.query;return r.a.createElement("div",{className:"p-5 d-flex justify-content-between align-items-center flex-wrap"},r.a.createElement("h1",{className:k.a.heading},r.a.createElement("span",{className:k.a.light},"Colour")," Palettes"),r.a.createElement(w,{submitSearch:t,query:a}))},M=a(10),G=a.n(M),q=function(e){var t=e.submitSearch,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],o=function(e){e.preventDefault(),l&&""!==l&&t(l)};return r.a.createElement("form",{className:G.a.form,onSubmit:o},r.a.createElement("h1",{className:G.a.heading},r.a.createElement("span",{className:G.a.light},"Colour")," Palettes"),r.a.createElement("input",{"aria-label":"searchQuery",type:"text",className:"".concat(G.a.input," form-control"),placeholder:"Search color palettes via keywords...",required:!0,value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{type:"submit",className:G.a.button,onClick:o},"Search"))},Y=a(11),T=a.n(Y);function K(e){var t=e.image,a=e.palette,c=e.isSmall,l=Object(n.useContext)(h),i=l.selectedImages,o=l.addImageToSelectedImagesList,u=l.removeImageFromSelectedImagesList,m=Object(n.useState)(!1),g=Object(s.a)(m,2),d=g[0],p=g[1];Object(n.useEffect)((function(){var e=i.find((function(e){return e.image.id===t.id}));p(!!e)}),[i,t]);return r.a.createElement("div",{key:t.id,style:{height:c?"10rem":"20rem",width:"20rem"},className:"card m-4 ".concat(T.a.card)},r.a.createElement("div",{className:T.a.addBtn,style:{backgroundColor:d?"#E55336":"#60c95d"},onClick:function(){var e={image:t,palette:a};d?u(e):o(e)}},r.a.createElement("p",null,d?r.a.createElement(N.c,null):r.a.createElement(N.b,null))),r.a.createElement("img",{className:"card-img-top ".concat(T.a.img),style:{height:c?"6rem":"15rem"},src:t.urls.regular,alt:"Card image cap"}),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap ".concat(T.a.colors_wrapper)},a.map((function(e,t){return r.a.createElement("div",{key:t,className:T.a.color,style:{backgroundColor:e}})}))))}var H=a(34),F=a.n(H),A=a(12),D=a.n(A),W=function(e){var t=e.totalPages,a=e.currentPage,n=e.query,c=e.submitRequest;return r.a.createElement(F.a,{breakLabel:"...",nextLabel:"Next",previousLabel:"Previous",onPageChange:function(e){var t=e.selected;console.log("User requested page number ".concat(t+1,", ")),c(n,t+1)},forcePage:a-1,pageRangeDisplayed:5,pageCount:t,renderOnZeroPageCount:null,containerClassName:"".concat(D.a.paginationBttns),previousLinkClassName:"".concat(D.a.previousBttn),nextLinkClassName:"".concat(D.a.nextBttn),disabledClassName:"".concat(D.a.paginationDisabled),activeClassName:"".concat(D.a.paginationActive)})};var X=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],c=(t[1],function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],o=l[1],u=Object(n.useState)([]),m=Object(s.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(0),b=Object(s.a)(f,2),h=b[0],v=b[1],E=Object(n.useState)(""),_=Object(s.a)(E,2),j=_[0],x=_[1],y=Object(n.useState)(0),C=Object(s.a)(y,2),O=C[0],S=C[1];return{images:d,loading:a,error:i,query:j,totalPages:O,currentPage:h,submitRequest:function(e,t){x(e),o(!1),r(!0),p([]),v(t),g.a.get("".concat("https://paletto-app.herokuapp.com/api/images","?query=").concat(e,"&page=").concat(t)).then((function(e){console.log(e),0===e.data.images.length||0===e.data.total_pages?(r(!1),o("There are no results for your search")):(r(!1),console.log(e.data.total_pages),p(e.data.images),S(e.data.total_pages))})).catch((function(e){r(!1),o("Something went wrong")}))}}}()),l=c.images,o=c.loading,u=c.error,m=c.query,d=c.totalPages,p=c.currentPage,f=c.submitRequest,b=Object(n.useContext)(h),v=b.selectedImages,E=b.removeSelections;function _(e){f(e,a)}var x=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){return x.current=!1}}),[]),r.a.createElement(n.Fragment,null,0===v.length&&""===m?r.a.createElement(q,{submitSearch:_}):r.a.createElement(R,{submitSearch:_,query:m}),u&&r.a.createElement(C,{message:u}),o&&r.a.createElement(j,null),r.a.createElement("div",{className:"row"},v&&v.length>0?r.a.createElement("div",{className:"col-3"},r.a.createElement("h3",{className:"m-3",style:{textAlign:"center"}},"Selected Images"),r.a.createElement("div",{className:"d-flex justify-content-around align-items-center"},r.a.createElement(i.b,{to:"/palettes",className:"btn ".concat(S.a.button)},"Get Palettes"),r.a.createElement("button",{type:"submit",className:"btn ".concat(S.a.deleteBtn),onClick:function(){return E()}},"Remove All")),r.a.createElement("div",{className:"d-flex m-3 justify-content-around align-items-center flex-wrap ".concat(S.a.selectionWraper)},!o&&v.length>0?v.map((function(e){return r.a.createElement(K,{key:e.image.id,image:e.image,palette:e.palette,isSmall:!0})})):"")):"",l&&l.length>0?r.a.createElement("div",{className:v.length>0?"col-9":""},1===d?"":r.a.createElement(W,{totalPages:d,currentPage:p,query:m,submitRequest:f}),r.a.createElement("div",{className:"d-flex m-3 justify-content-around align-items-center flex-wrap ".concat(S.a.imageGridWrapper)},l.map((function(e){return r.a.createElement(K,{image:e.img,palette:e.fiveColors,key:e.img.id,isSmall:!1})})))):""))};var J=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",element:r.a.createElement(X,null)}),r.a.createElement(o.a,{path:"/palettes",element:r.a.createElement(B,null)})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.37c92b82.chunk.js.map