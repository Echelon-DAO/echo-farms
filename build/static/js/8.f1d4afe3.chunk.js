(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[8],{666:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(60),c=t(14),a=t(0),o=t.n(a),i=t(3);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),l=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function b(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return b=function(){return e},e}function j(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return j=function(){return e},e}var d=i.e.div(j(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),x=i.e.div(b()),p=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(d,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{children:e}),n<t-1&&Object(c.jsx)(l,{})]})}))})}},668:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(14),c=(t(0),t(50)),a=function(){return Object(r.jsx)(c.A,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.A,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.D,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.A,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.A,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},669:function(e,n,t){"use strict";var r=t(60);function c(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"]);return c=function(){return e},e}var a=t(3).e.div(c(),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"text"]}));n.a=a},671:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t(60),c=t(14),a=(t(0),t(3)),o=t(667),i=t(50),s=t(661);function u(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return l=function(){return e},e}var b=a.e.div(l(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),j=a.e.input(u(),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(b,{children:[!!a&&a,Object(c.jsx)(j,{placeholder:r,value:o,onChange:t}),!!n&&n]})};function x(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return x=function(){return e},e}function p(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return p=function(){return e},e}function f(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return f=function(){return e},e}function O(){var e=Object(r.a)(["\n  width: ","px;\n"]);return O=function(){return e},e}function h(){var e=Object(r.a)([""]);return h=function(){return e},e}var m=a.e.div(h()),v=a.e.div(O(),(function(e){return e.theme.spacing[3]})),g=a.e.div(f()),k=a.e.div(p(),(function(e){return e.theme.colors.primary})),y=a.e.span(x(),(function(e){return e.theme.colors.primary})),w=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,u=e.value,l=e.depositFeeBP,b=void 0===l?0:l,j=Object(s.a)();return Object(c.jsxs)(m,{children:[Object(c.jsxs)(k,{children:[n.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(d,{endAdornment:Object(c.jsxs)(g,{children:[Object(c.jsx)(y,{children:t}),Object(c.jsx)(v,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.d,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),b>0?Object(c.jsxs)(k,{children:[j(10001,"Deposit Fee"),": ",new o.a(u||0).times(b/1e4).toString()," ",t]}):null]})}},673:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(55),u=t(128),l=t(664),b=t(663),j=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(i.m)(),j=r.account,d=Object(b.d)(),x=Object(b.e)(e),p=Object(o.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(l.i)(d,0,a,j);case 3:r.next=12;break;case 5:if(!n){r.next=10;break}return r.next=8,Object(l.e)(x,a,j);case 8:r.next=12;break;case 10:return r.next=12,Object(l.d)(x,a,j);case 12:t(Object(u.g)(e,j)),t(Object(u.e)(e,j));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[j,t,n,d,x,e]);return{onStake:p}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(b.d)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.i)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},674:function(e,n,t){"use strict";var r=t(60);function c(){var e=Object(r.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"]);return c=function(){return e},e}var a=t(3).e.div(c(),(function(e){return e.theme.card.background}),(function(e){var n=e.isFinished;return e.theme.colors[n?"textDisabled":"secondary"]}),(function(e){return e.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"}));n.a=a},681:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var r=t(4),c=t.n(r),a=t(15),o=t(132),i=t.n(o),s=t(63),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},682:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(667);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var c=new r.a(10512e3)},683:function(e,n,t){"use strict";var r=t(60);function c(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return e},e}var a=t(3).e.div(c());n.a=a},684:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(66),s=t(55),u=t(128),l=t(664),b=t(663),j=[5,6,3,1,22,23],d=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(b.d)(),d=Object(b.e)(e),x=j.includes(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i,s,b;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=7;break}return c.next=3,Object(l.j)(r,0,o,t);case 3:i=c.sent,console.info(i),c.next=18;break;case 7:if(!x){c.next=14;break}return c.next=10,Object(l.c)(d,o,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(l.f)(d,o,t);case 16:b=c.sent,console.info(b);case 18:n(Object(u.g)(e,t)),n(Object(u.e)(e,t)),n(Object(u.f)(e,t));case 21:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,x,r,d,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(b.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.j)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},685:function(e,n,t){"use strict";var r=t(14),c=t(60),a=(t(0),t(3)),o=t(50),i=t(668),s=t(661),u=t(674),l=t(669);function b(){var e=Object(c.a)(["\n  border-top: 1px solid ",";\n  padding: 24px;\n"]);return b=function(){return e},e}function j(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return j=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n  font-size: 14px;\n"]);return d=function(){return e},e}function x(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-bottom: 16px;\n"]);return x=function(){return e},e}function p(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 600;\n"]);return p=function(){return e},e}var f=a.e.div(p(),(function(e){return e.theme.colors.text})),O=a.e.div(x(),(function(e){return e.theme.colors.textSubtle})),h=a.e.div(d()),m=a.e.div(j(),(function(e){return e.theme.colors.text})),v=a.e.div(b(),(function(e){return e.theme.isDark?"#524B63":"#E9EAEB"}));n.a=function(){var e=Object(s.a)();return Object(r.jsxs)(u.a,{children:[Object(r.jsxs)("div",{style:{padding:"24px"},children:[Object(r.jsxs)(l.a,{children:[e(414,"Your Project?")," ",Object(r.jsx)("span",{role:"img","aria-label":"eyes",children:"\ud83d\udc40"})]}),Object(r.jsx)(o.p,{src:"/images/bunny-question.svg",width:64,height:64,alt:"Your project here"}),Object(r.jsx)(f,{children:"???"}),Object(r.jsx)(O,{children:e(416,"Create a pool for your token")}),Object(r.jsx)(o.d,{variant:"secondary",as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSekxfSHHTEdKwO2dDrG2A-hG6h7LQPszWHzyGSP4viGkiRJhA/viewform?usp=sf_link",external:!0,fullWidth:!0,mb:"16px",children:e(418,"Apply Now")}),Object(r.jsxs)(h,{children:[Object(r.jsxs)("div",{style:{flex:1},children:[e(736,"APR"),":"]}),Object(r.jsx)(m,{children:"??"})]}),Object(r.jsxs)(h,{children:[Object(r.jsxs)("div",{style:{flex:1},children:[Object(r.jsx)("span",{role:"img","aria-label":"syrup",children:" "}),e(384,"Your Stake"),":"]}),Object(r.jsx)(m,{children:"??? ECHO"})]})]}),Object(r.jsx)(v,{children:Object(r.jsx)(i.b,{})})]})}},786:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ge}));var r=t(14),c=t(16),a=t(25),o=t(0),i=t(27),s=t(55),u=t(12),l=t.n(u),b=t(66),j=t(50),d=t(682),x=t(683),p=t(176),f=t(108),O=t(130),h=t(128),m=t(35),v=t(661),g=t(60),k=t(3);function y(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return y=function(){return e},e}var w=k.e.div(y(),(function(e){return e.theme.colors.primary})),S=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(w,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(j.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(j.k,{}):Object(r.jsx)(j.j,{})]})};S.defaultProps={expanded:!1};var C=S,T=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"BNB":n[56],a=r[56];return"".concat(c,"/").concat(a)};function A(){var e=Object(g.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(g.a)(["\n  margin-top: 24px;\n"]);return B=function(){return e},e}var P=k.e.div(B()),F=Object(k.e)(j.r)(A(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),D=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,l=Object(v.a)(),b=T({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(P,{children:[Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[l(316,"Stake"),":"]}),Object(r.jsx)(F,{href:n?"https://exchange.echoswap.app/#/swap/".concat(u[56]):"https://exchange.echoswap.app/#/add/".concat(b),children:o})]}),!c&&Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[l(23,"Total Liquidity"),":"]}),Object(r.jsx)(j.B,{children:a})]}),Object(r.jsx)(j.m,{justifyContent:"flex-start",children:Object(r.jsx)(j.q,{external:!0,href:t,bold:!1,children:l(356,"View on BscScan")})})]})},z=t(668);function I(){var e=Object(g.a)(["\n  margin-left: 4px;\n"]);return I=function(){return e},e}function q(){var e=Object(g.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return q=function(){return e},e}var E=Object(k.e)(j.m)(q()),L=Object(k.e)(j.A)(I()),N=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;return Object(r.jsxs)(E,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(j.p,{src:"/images/farms/".concat(c,".png"),alt:a,width:60,height:60}),Object(r.jsxs)(j.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(j.n,{mb:"4px",children:n}),Object(r.jsxs)(j.m,{justifyContent:"center",children:[0===o?Object(r.jsx)(z.d,{}):null,Object(r.jsxs)(L,{children:[" ",Object(r.jsx)("span",{children:t})]})]})]})]})},G=t(4),M=t.n(G),H=t(15),R=t(681),Q=t(677),U=(t(676),t(664)),W=t(663),Y=t(673),J=t(684),V=t(662),X=t(666),_=t(671),K=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,i=e.tokenName,s=void 0===i?"":i,u=e.depositFeeBP,l=void 0===u?0:u,b=Object(o.useState)(""),d=Object(a.a)(b,2),x=d[0],p=d[1],f=Object(o.useState)(!1),O=Object(a.a)(f,2),h=O[0],m=O[1],g=Object(v.a)(),k=Object(o.useMemo)((function(){return Object(V.b)(n)}),[n]),y=Object(o.useCallback)((function(e){p(e.currentTarget.value)}),[p]),w=Object(o.useCallback)((function(){p(k)}),[k,p]);return Object(r.jsxs)(j.v,{title:"".concat(g(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(_.a,{value:x,onSelectMax:w,onChange:y,max:k,symbol:s,depositFeeBP:l}),Object(r.jsxs)(X.a,{children:[Object(r.jsx)(j.d,{variant:"secondary",onClick:c,children:g(462,"Cancel")}),Object(r.jsx)(j.d,{disabled:h,onClick:Object(H.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(x);case 3:m(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:h?g(488,"Pending Confirmation"):g(464,"Confirm")})]})]})},$=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,i=e.tokenName,s=void 0===i?"":i,u=Object(o.useState)(""),l=Object(a.a)(u,2),b=l[0],d=l[1],x=Object(o.useState)(!1),p=Object(a.a)(x,2),f=p[0],O=p[1],h=Object(v.a)(),m=Object(o.useMemo)((function(){return Object(V.b)(c)}),[c]),g=Object(o.useCallback)((function(e){d(e.currentTarget.value)}),[d]),k=Object(o.useCallback)((function(){d(m)}),[m,d]);return Object(r.jsxs)(j.v,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(_.a,{onSelectMax:k,onChange:g,value:b,max:m,symbol:s}),Object(r.jsxs)(X.a,{children:[Object(r.jsx)(j.d,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(r.jsx)(j.d,{disabled:f,onClick:Object(H.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(b);case 3:O(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:f?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})};function Z(){var e=Object(g.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return Z=function(){return e},e}var ee=k.e.div(Z()),ne=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(v.a)(),u=Object(Y.a)(o).onStake,l=Object(J.a)(o).onUnstake,b=Object(V.a)(n),d=b.toLocaleString(),x=Object(j.G)(Object(r.jsx)(K,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),p=Object(a.a)(x,1)[0],f=Object(j.G)(Object(r.jsx)($,{max:n,onConfirm:l,tokenName:c})),O=Object(a.a)(f,1)[0];return Object(r.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(j.n,{color:0===b?"textDisabled":"text",children:d}),0===b?Object(r.jsx)(j.d,{onClick:p,children:s(999,"Stake")}):Object(r.jsxs)(ee,{children:[Object(r.jsx)(j.o,{variant:"tertiary",onClick:O,mr:"6px",children:Object(r.jsx)(j.u,{color:"primary"})}),Object(r.jsx)(j.o,{variant:"tertiary",onClick:p,children:Object(r.jsx)(j.a,{color:"primary"})})]})]})},te=t(675);function re(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return re=function(){return e},e}var ce=k.e.div(re()),ae=function(e){var n=e.earnings,t=e.pid,c=Object(v.a)(),i=Object(o.useState)(!1),s=Object(a.a)(i,2),u=s[0],l=s[1],b=Object(te.b)(t).onReward,d=Object(Y.a)(t).onStake,x=Object(V.a)(n),p=x.toFixed(4);return Object(r.jsxs)(j.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(j.n,{color:0===x?"textDisabled":"text",children:p}),Object(r.jsxs)(ce,{children:[12===t?Object(r.jsx)(j.d,{disabled:0===x||u,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(H.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d(x.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(r.jsx)(j.d,{disabled:0===x||u,onClick:Object(H.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})};function oe(){var e=Object(g.a)(["\n  padding-top: 16px;\n"]);return oe=function(){return e},e}var ie=k.e.div(oe()),se=function(e){var n=e.farm,t=e.ethereum,c=e.account,i=Object(v.a)(),u=Object(o.useState)(!1),l=Object(a.a)(u,2),d=l[0],x=l[1],p=Object(f.a)(n.pid),O=p.pid,m=p.lpAddresses,g=p.tokenAddresses,k=p.isTokenOnly,y=p.depositFeeBP,w=Object(f.b)(O),S=w.allowance,C=w.tokenBalance,T=w.stakedBalance,A=w.earnings,B=m[56],P=g[56],F=n.lpSymbol.toUpperCase(),D=c&&S&&S.isGreaterThan(0),z=function(e){var n=Object(s.b)(),t=Object(b.m)().account,r=Object(W.d)();return{onApprove:Object(o.useCallback)(Object(H.a)(M.a.mark((function c(){var a;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(U.a)(e,r,t);case 3:return a=c.sent,n(Object(h.a)(t)),c.abrupt("return",a);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),c,null,[[0,8]])}))),[t,n,e,r])}}(Object(o.useMemo)((function(){return k?Object(R.a)(t,P):Object(R.a)(t,B)}),[t,B,P,k])).onApprove,I=Object(o.useCallback)(Object(H.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,z();case 4:x(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[z]);return Object(r.jsxs)(ie,{children:[Object(r.jsxs)(j.m,{children:[Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"secondary",style:{color:"#5677ba"},fontSize:"12px",pr:"3px",children:"ECHO"}),Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Earned")})]}),Object(r.jsx)(ae,{earnings:A,pid:O}),Object(r.jsxs)(j.m,{children:[Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"secondary",style:{color:"#5677ba"},fontSize:"12px",pr:"3px",children:F}),Object(r.jsx)(j.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i(999,"Staked")})]}),c?D?Object(r.jsx)(ne,{stakedBalance:T,tokenBalance:C,tokenName:F,pid:O,depositFeeBP:y}):Object(r.jsx)(j.d,{mt:"8px",fullWidth:!0,disabled:d,onClick:I,children:i(999,"Approve Contract")}):Object(r.jsx)(Q.a,{mt:"8px",fullWidth:!0})]})},ue=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},le=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function be(){var e=Object(g.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return be=function(){return e},e}function je(){var e=Object(g.a)(["\n  margin-bottom: '10px';\n"]);return je=function(){return e},e}function de(){var e=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return de=function(){return e},e}var xe=k.e.div(de()),pe=k.e.div(je()),fe=Object(k.e)(j.B)(be()),Oe=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(v.a)(),b=T({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),d=s.times(new l.a(100)).toNumber(),x=1e3/i.toNumber(),p=ue({numberOfDays:1,farmApy:d,cakePrice:i}),f=ue({numberOfDays:7,farmApy:d,cakePrice:i}),O=ue({numberOfDays:30,farmApy:d,cakePrice:i}),h=ue({numberOfDays:365,farmApy:d,cakePrice:i});return Object(r.jsxs)(j.v,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(xe,{children:[Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ECHO per $1000")})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:"1d"})}),Object(r.jsx)(pe,{children:Object(r.jsxs)(j.B,{children:[le({amountEarned:p,amountInvested:x}),"%"]})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:p})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:"7d"})}),Object(r.jsx)(pe,{children:Object(r.jsxs)(j.B,{children:[le({amountEarned:f,amountInvested:x}),"%"]})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:f})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:"30d"})}),Object(r.jsx)(pe,{children:Object(r.jsxs)(j.B,{children:[le({amountEarned:O,amountInvested:x}),"%"]})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:O})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:"365d(APY)"})}),Object(r.jsx)(pe,{children:Object(r.jsxs)(j.B,{children:[le({amountEarned:h,amountInvested:x}),"%"]})}),Object(r.jsx)(pe,{children:Object(r.jsx)(j.B,{children:h})})]}),Object(r.jsx)(fe,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(j.m,{justifyContent:"center",children:Object(r.jsxs)(j.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[u(999,"Get")," ",t]})})]})},he=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(j.G)(Object(r.jsx)(Oe,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:o,cakePrice:i,apy:s})),l=Object(a.a)(u,1)[0];return Object(r.jsx)(j.o,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(j.g,{})})};function me(){var e=Object(g.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return me=function(){return e},e}function ve(){var e=Object(g.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return ve=function(){return e},e}function ge(){var e=Object(g.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return ge=function(){return e},e}function ke(){var e=Object(g.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return ke=function(){return e},e}function ye(){var e=Object(g.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return ye=function(){return e},e}var we=Object(k.f)(ye()),Se=k.e.div(ke(),we),Ce=k.e.div(ge(),(function(e){return e.theme.card.background})),Te=k.e.div(ve(),(function(e){return e.theme.colors.borderColor})),Ae=k.e.div(me(),(function(e){return e.expanded?"100%":"0px"})),Be=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,i=e.bnbPrice,s=e.ethereum,u=e.account,b=Object(v.a)(),d=Object(o.useState)(!1),x=Object(a.a)(d,2),p=x[0],f=x[1],O=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),h=Object(o.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===m.b.BNB?i.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===m.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[i,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),g=h?"$".concat(Number(h).toLocaleString(void 0,{maximumFractionDigits:0})):"-",k=n.lpSymbol,y=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),w=n.quoteTokenAdresses,S=n.quoteTokenSymbol,T=n.tokenAddresses,A=n.risk;return Object(r.jsxs)(Ce,{children:["ECHO"===n.tokenSymbol&&Object(r.jsx)(Se,{}),Object(r.jsx)(N,{lpLabel:k,multiplier:n.multiplier,risk:A,depositFee:n.depositFeeBP,farmImage:O,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(j.B,{children:[b(352,"APR"),":"]}),Object(r.jsx)(j.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(he,{lpLabel:k,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:T,cakePrice:c,apy:n.apy}),y,"%"]}):Object(r.jsx)(j.y,{height:24,width:80})})]}),Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{children:[b(318,"Earn"),":"]}),Object(r.jsx)(j.B,{bold:!0,children:"ECHO"})]}),Object(r.jsxs)(j.m,{justifyContent:"space-between",children:[Object(r.jsxs)(j.B,{style:{fontSize:"24px"},children:[b(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(j.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(se,{farm:n,ethereum:s,account:u}),Object(r.jsx)(Te,{}),Object(r.jsx)(C,{onClick:function(){return f(!p)},expanded:p}),Object(r.jsx)(Ae,{expanded:p,children:Object(r.jsx)(D,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:g,lpLabel:k,quoteTokenAdresses:w,quoteTokenSymbol:S,tokenAddresses:T})})]})},Pe=t(69);function Fe(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return Fe=function(){return e},e}function De(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return De=function(){return e},e}var ze=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(i.g)(),a=c.url,o=c.isExact,s=Object(v.a)();return Object(r.jsxs)(Ie,{children:[Object(r.jsxs)(qe,{children:[Object(r.jsx)(j.C,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsxs)(j.B,{children:[" ",s(699,"Staked only")]})]}),Object(r.jsxs)(j.e,{activeIndex:o?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(j.f,{as:Pe.b,to:"".concat(a),children:s(698,"Active")}),Object(r.jsx)(j.f,{as:Pe.b,to:"".concat(a,"/history"),children:s(700,"Inactive")})]})]})},Ie=k.e.div(De()),qe=k.e.div(Fe(),j.B);function Ee(){var e=Object(g.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return Ee=function(){return e},e}var Le=k.e.div(Ee(),(function(e){return e.theme.colors.textSubtle})),Ne=t(685),Ge=function(e){var n=Object(i.g)().path,t=Object(v.a)(),u=Object(f.c)(),g=Object(f.g)(),k=Object(f.f)(),y=Object(b.m)(),w=y.account,S=y.ethereum,C=e.tokenMode,T=Object(s.b)(),A=Object(O.a)().fastRefresh;Object(o.useEffect)((function(){w&&T(Object(h.a)(w))}),[w,T,A]);var B=Object(o.useState)(!1),P=Object(a.a)(B,2),F=P[0],D=P[1],z=u.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"!==e.multiplier})),I=u.filter((function(e){return!!e.isTokenOnly===!!C&&"0X"===e.multiplier})),q=z.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),E=Object(o.useCallback)((function(e,n){return e.map((function(e){var n=new l.a(e.eggPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(d.a),t=g.times(n),r=new l.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===m.b.BNB&&(r=r.times(k)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(r.jsx)(Be,{farm:e,removed:n,bnbPrice:k,cakePrice:g,ethereum:S,account:w},e.pid)}))}),[k,w,g,S]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(j.n,{style:{color:"#FFFFFF",backgroundColor:"#5677ba",paddingTop:"40px",paddingBottom:"40px",width:"100%",paddingLeft:"10px",fontSize:"4rem",textAlign:"center"},children:C?"Pools":"Farms"}),Object(r.jsxs)(p.a,{children:[Object(r.jsx)(j.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:C?t(10002,"Stake tokens to earn "):t(320,"Stake LP tokens to earn EGG")}),Object(r.jsx)(j.n,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center",color:"#5677ba"},children:t(1e4,"Deposit Fee will be used to buyback EGG")}),window.screen.width>900&&!C&&Object(r.jsx)(j.n,{style:{width:"300px",float:"right",clear:"left",display:"inline",marginTop:"-120px"},children:Object(r.jsx)("img",{src:"/images/2-01.png",alt:"SYRUP POOL icon",width:500,height:200})}),window.screen.width>900&&C&&Object(r.jsx)(j.n,{style:{width:"300px",float:"right",clear:"left",display:"inline",marginTop:"-120px"},children:Object(r.jsx)("img",{src:"/images/3-01.png",alt:"SYRUP POOL icon",width:500,height:200})}),Object(r.jsx)(ze,{stakedOnly:F,setStakedOnly:D}),Object(r.jsxs)("div",{style:{marginTop:"30px"},children:[Object(r.jsx)(Le,{}),Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(i.a,{exact:!0,path:"".concat(n),children:[E(F?q:z,!1),C?Object(r.jsx)(Ne.a,{}):null]}),Object(r.jsx)(i.a,{exact:!0,path:"".concat(n,"/history"),children:E(I,!0)})]})]})]})]})}}}]);
//# sourceMappingURL=8.f1d4afe3.chunk.js.map