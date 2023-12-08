!function(){"use strict";var t,o=function(){return o=Object.assign||function(t){for(var o,n=1,e=arguments.length;n<e;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t},o.apply(this,arguments)};function n(t,o,n,e){return new(n||(n=Promise))((function(i,_){function c(t){try{r(e.next(t))}catch(t){_(t)}}function E(t){try{r(e.throw(t))}catch(t){_(t)}}function r(t){var o;t.done?i(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(c,E)}r((e=e.apply(t,o||[])).next())}))}function e(t,o){var n,e,i,_,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return _={next:E(0),throw:E(1),return:E(2)},"function"==typeof Symbol&&(_[Symbol.iterator]=function(){return this}),_;function E(E){return function(r){return function(E){if(n)throw new TypeError("Generator is already executing.");for(;_&&(_=0,E[0]&&(c=0)),c;)try{if(n=1,e&&(i=2&E[0]?e.return:E[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,E[1])).done)return i;switch(e=0,i&&(E=[2&E[0],i.value]),E[0]){case 0:case 1:i=E;break;case 4:return c.label++,{value:E[1],done:!1};case 5:c.label++,e=E[1],E=[0];continue;case 7:E=c.ops.pop(),c.trys.pop();continue;default:if(!(i=c.trys,(i=i.length>0&&i[i.length-1])||6!==E[0]&&2!==E[0])){c=0;continue}if(3===E[0]&&(!i||E[1]>i[0]&&E[1]<i[3])){c.label=E[1];break}if(6===E[0]&&c.label<i[1]){c.label=i[1],i=E;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(E);break}i[2]&&c.ops.pop(),c.trys.pop();continue}E=o.call(t,c)}catch(t){E=[6,t],e=0}finally{n=i=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}([E,r])}}}"function"==typeof SuppressedError&&SuppressedError;var i,_,c,E="kiosk-mode",r="kiosk_mode",I="[ Non critial warning ]",a=":shadowRoot";!function(t){t.KIOSK="kiosk",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_NOTIFICATIONS="hide_notifications",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.HIDE_DIALOG_HEADER_ACTION_ITEMS="hide_dialog_header_action_items",t.HIDE_DIALOG_HEADER_HISTORY="hide_dialog_header_history",t.HIDE_DIALOG_HEADER_SETTINGS="hide_dialog_header_settings",t.HIDE_DIALOG_HEADER_OVERFLOW="hide_dialog_header_overflow",t.HIDE_DIALOG_HISTORY="hide_dialog_history",t.HIDE_DIALOG_LOGBOOK="hide_dialog_logbook",t.HIDE_DIALOG_ATTRIBUTES="hide_dialog_attributes",t.HIDE_DIALOG_MEDIA_ACTIONS="hide_dialog_media_actions",t.HIDE_DIALOG_UPDATE_ACTIONS="hide_dialog_update_actions",t.HIDE_DIALOG_CLIMATE_ACTIONS="hide_dialog_climate_actions",t.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS="hide_dialog_climate_temperature_actions",t.HIDE_DIALOG_CLIMATE_SETTINGS_ACTIONS="hide_dialog_climate_settings_actions",t.HIDE_DIALOG_TIMER_ACTIONS="hide_dialog_timer_actions",t.HIDE_DIALOG_HISTORY_SHOW_MORE="hide_dialog_history_show_more",t.HIDE_DIALOG_LOGBOOK_SHOW_MORE="hide_dialog_logbook_show_more",t.BLOCK_OVERFLOW="block_overflow",t.BLOCK_MOUSE="block_mouse",t.BLOCK_CONTEXT_MENU="block_context_menu"}(i||(i={})),function(t){t.IGNORE_ENTITY_SETTINGS="ignore_entity_settings",t.IGNORE_MOBILE_SETTINGS="ignore_mobile_settings",t.IGNORE_DISABLE_KM="ignore_disable_km"}(_||(_={})),function(t){t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km"}(c||(c={}));var s,A="ui",O="".concat(A,".common"),T="".concat(A,".panel"),u="".concat(T,".lovelace"),D="".concat(u,".menu"),h="".concat(A,".dialogs.more_info_control");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD",t.DIALOG_DISMISS="DIALOG_DISMISS",t.DIALOG_HISTORY="DIALOG_HISTORY",t.DIALOG_SETTINGS="DIALOG_SETTINGS"}(s||(s={}));var l,L=Object.freeze(((t={})[s.SEARCH]="".concat(D,".search"),t[s.ASSIST]="".concat(D,".assist"),t[s.REFRESH]="".concat(O,".refresh"),t[s.UNUSED_ENTITIES]="".concat(u,".unused_entities.title"),t[s.RELOAD_RESOURCES]="".concat(D,".reload_resources"),t[s.EDIT_DASHBOARD]="".concat(D,".configure_ui"),t[s.DIALOG_HISTORY]="".concat(h,".history"),t[s.DIALOG_SETTINGS]="".concat(h,".settings"),t[s.DIALOG_DISMISS]="".concat(h,".dismiss"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.BUTTON_MENU="ha-button-menu",t.OVERLAY_MENU_ITEM="mwc-list-item",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items",t.HA_MORE_INFO_DIALOG="ha-more-info-dialog",t.HA_DIALOG="ha-dialog",t.HA_DIALOG_HEADER="ha-dialog-header",t.HA_DIALOG_CONTENT=".content",t.HA_DIALOG_MORE_INFO="ha-more-info-info",t.HA_DIALOG_HISTORY="ha-more-info-history",t.HA_DIALOG_LOGBOOK="ha-more-info-logbook",t.HA_DIALOG_MORE_INFO_CONTENT="more-info-content",t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",t.HA_DIALOG_DEFAULT="more-info-default",t.HA_DIALOG_TIMER="more-info-timer",t.HA_DIALOG_VACUUM="more-info-vacuum",t.HA_DIALOG_MEDIA_PLAYER="more-info-media_player",t.HA_DIALOG_LIGHT="more-info-light",t.HA_DIALOG_UPDATE="more-info-update",t.HA_DIALOG_CLIMATE="more-info-climate",t.HA_DIALOG_CLIMATE_CONTROL_SELECT="ha-more-info-control-select-container",t.HA_DIALOG_CLIMATE_TEMPERATURE="ha-more-info-climate-temperature",t.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS=".buttons",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER="ha-control-circular-slider",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION="#interaction",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER='path[role="slider"]',t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET=".target",t.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER=".target-border",t.HA_DIALOG_ATTRIBUTES="ha-attributes"}(l||(l={}));var R,S="true",H="state_changed",d="hass-toggle-menu",N=function(t){return Array.isArray(t)?t:[t]},p=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},C=function(t){var o=p(t);return t.querySelector("#".concat(r,"_").concat(o))},f=function(t,o){var n=p(o),e=C(o);e||((e=document.createElement("style")).setAttribute("id","".concat(r,"_").concat(n)),o.appendChild(e)),e.innerHTML=t},G=function(t){N(t).forEach((function(t){var o=p(t);C(t)&&t.querySelector("#".concat(r,"_").concat(o)).remove()}))},M=function(t){var o=t.replace(/(?:^|_)([a-z])/g,(function(t,o){return o.toUpperCase()}));return"km".concat(o)},v=function(t){var o=new URLSearchParams(window.location.search);return N(t).some((function(t){return o.has(t)}))},U=function(t,o){N(t).forEach((function(t){return window.localStorage.setItem(M(t),o)}))},w=function(t){return N(t).some((function(t){return window.localStorage.getItem(M(t))===S}))},m=function(t){return Object.entries(t).map((function(t){var o=t[0],n=t[1];return"".concat(o,":").concat(n)})).join(";")+";"},b=function(t){return Object.entries(t).map((function(t){var o=t[0],n=t[1];return"".concat(o,"{").concat(m(n),"}")})).join("")},B=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},y=function(t){var o=0,n=Object.values(L);return new Promise((function(e,i){var _=function(){var c,E=null===(c=null==t?void 0:t.hass)||void 0===c?void 0:c.resources,r=!1;if(E){var I=t.hass.language;n.find((function(t){return!E[I][t]}))||(r=!0)}r?e(E):++o<500?setTimeout(_,50):i()};_()}))},g=function(t,o,n){return new Promise((function(e,i){var _=0,c=function(){var r=t();r&&o(r)?e(r):++_<500?setTimeout(c,50):i(new Error("".concat(E,": Cannot select ").concat(n," after ").concat(500," attempts. Giving up!")))};c()}))},F=function(t,o){t.forEach((function(t){if(t&&t.dataset&&!t.dataset.selector){var n=t.shadowRoot.querySelector(l.MENU_ITEM_ICON);t.dataset.selector=o[n.title]}}))},k={HEADER:b({"#view":{"min-height":"100vh !important","--header-height":"0px"},".header":{display:"none"}}),ACCOUNT:B(".profile"),NOTIFICATIONS:B(".notifications-container"),DIVIDER:B(".divider"),PEPER_LISTBOX:function(t,o){var n=132;return t&&o?n=0:t?n-=50:o&&(n-=48),b({"paper-listbox":{height:"calc(100% - var(--header-height) - ".concat(n,"px - env(safe-area-inset-bottom)) !important")}})},MENU_BUTTON:B(".menu ha-icon-button"),MENU_BUTTON_BURGER:B("ha-menu-button"),MOUSE:b({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}}),SIDEBAR:b({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:B(".mdc-drawer"),OVERFLOW_MENU:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU)),BLOCK_OVERFLOW:b((R={},R["".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU)]={"pointer-events":"none !important"},R)),SEARCH:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(s.SEARCH,'"]'),"".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.SEARCH,'"]')),ASSISTANT:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS,' > ha-icon-button[data-selector="').concat(s.ASSIST,'"]'),"".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.ASSIST,'"]')),REFRESH:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.REFRESH,'"]')),UNUSED_ENTITIES:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:B("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.BUTTON_MENU," > ").concat(l.OVERLAY_MENU_ITEM,'[data-selector="').concat(s.EDIT_DASHBOARD,'"]')),DIALOG_HEADER_HISTORY:B("".concat(l.HA_DIALOG_HEADER," > ").concat(l.MENU_ITEM,'[data-selector="').concat(s.DIALOG_HISTORY,'"]')),DIALOG_HEADER_SETTINGS:B("".concat(l.HA_DIALOG_HEADER," > ").concat(l.MENU_ITEM,'[data-selector="').concat(s.DIALOG_SETTINGS,'"]')),DIALOG_HEADER_OVERFLOW:B("".concat(l.HA_DIALOG_HEADER," > ").concat(l.BUTTON_MENU)),DIALOG_HISTORY:B(l.HA_DIALOG_HISTORY),DIALOG_LOGBOOK:B(l.HA_DIALOG_LOGBOOK),DIALOG_ATTRIBUTES:B(l.HA_DIALOG_ATTRIBUTES),DIALOG_MEDIA_ACTIONS:B(".controls"),DIALOG_TIMER_ACTIONS:B(".actions"),DIALOG_UPDATE_ACTIONS:B(".actions","hr:has(+ .actions)"),DIALOG_CLIMATE_ACTIONS:B(l.HA_DIALOG_CLIMATE),DIALOG_CLIMATE_CONTROL_SELECT:B(l.HA_DIALOG_CLIMATE_CONTROL_SELECT),DIALOG_CLIMATE_TEMPERATURE_BUTTONS:B(l.HA_DIALOG_CLIMATE_TEMPERATURE_BUTTONS),DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION:B(l.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,l.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_SLIDER,l.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET_BORDER,l.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION_TARGET),DIALOG_SHOW_MORE:B(".header a")},x=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("4.6.0")}]}return t.prototype.log=function(){var t=[],n=[],e=this.lines.length-1,i={"border-color":"#424242","border-style":"solid",display:"inline-block","font-family":"monospace","font-size":"12px"};this.lines.forEach((function(_,c){t.push(_.content.padEnd(27)),t.push("%c⋮"),c!==e&&t.push("%c\n");var E="0 0 0 1px",r="0 1px 0 1px";0===e?(E="1px 0 1px 1px",r="1px 1px 1px 0"):0===c?(E="1px 0 0 1px",r="1px 1px 0 0"):c===e&&(E="0 0 1px 1px",r="0 1px 1px 0"),n.push(m(o(o({},i),{background:_.background||"white",color:_.color||"#424242",padding:0===c?"1px 0px 1px 5px":"1px 0px 1px 10px","border-width":E}))),n.push(m(o(o({},i),{background:_.background||"white",color:_.color||"white",padding:0===c?"1px 5px":"1px 5px 1px 0px","border-width":r}))),c!==e&&n.push("")})),console.info.apply(console,function(t,o,n){if(n||2===arguments.length)for(var e,i=0,_=o.length;i<_;i++)!e&&i in o||(e||(e=Array.prototype.slice.call(o,0,i)),e[i]=o[i]);return t.concat(e||Array.prototype.slice.call(o))}([t.join("")],n,!1))},t}(),K=function(){function t(){var t=this;window.kioskModeEntities={},this.options={},v(c.CLEAR_CACHE)&&Object.values(i).forEach((function(t){window.localStorage.removeItem(M(t))}));n(t,void 0,void 0,(function(){var t,o,n,i,_,c,E=this;return e(this,(function(e){switch(e.label){case 0:return t=this,[4,g((function(){return document.querySelector(l.HOME_ASSISTANT)}),(function(t){return!(!t||!t.shadowRoot)}),l.HOME_ASSISTANT)];case 1:return t.ha=e.sent(),o=this,[4,g((function(){var t;return null===(t=E.ha.shadowRoot.querySelector(l.HOME_ASSISTANT_MAIN))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(l.HOME_ASSISTANT_MAIN).concat(a))];case 2:return o.main=e.sent(),n=this,[4,g((function(){var t,o;return null===(o=null===(t=E.ha)||void 0===t?void 0:t.hass)||void 0===o?void 0:o.user}),(function(t){return!!t}),"".concat(l.HOME_ASSISTANT," > hass > user"))];case 3:return n.user=e.sent(),this.version=function(t){var o=t?t.match(/^(\d+)\.(\d+)\.(\w+)(?:\.(\w+))?$/):null;return o?[+o[1],+o[2],o[3]]:null}(null===(c=null===(_=this.ha.hass)||void 0===_?void 0:_.config)||void 0===c?void 0:c.version),[4,g((function(){return E.main.querySelector(l.PARTIAL_PANEL_RESOLVER)}),(function(t){return!!t}),"".concat(l.HOME_ASSISTANT_MAIN," > ").concat(l.PARTIAL_PANEL_RESOLVER))];case 4:return i=e.sent(),this.panelResolverObserver=new MutationObserver(this.watchDashboards),this.dialogsMutationObserver=new MutationObserver(this.watchMoreInfoDialogs),this.dialogContentMutationObserver=new MutationObserver(this.watchMoreInfoDialogsContent),this.panelResolverObserver.observe(i,{childList:!0}),this.dialogsMutationObserver.observe(this.ha.shadowRoot,{childList:!0}),this.run(),this.entityWatch(),[2]}}))})),this.resizeWindowBinded=this.resizeWindow.bind(this)}return t.prototype.run=function(t){var o=this;if(void 0===t&&(t=this.main.querySelector(l.HA_PANEL_LOVELACE)),t)return this.lovelace=t,g((function(){var o;return null===(o=null==t?void 0:t.lovelace)||void 0===o?void 0:o.config}),(function(t){return!!t}),"Lovelace config").then((function(t){return o.processConfig(t.kiosk_mode||{})}))},t.prototype.runDialogs=function(t){var o,i;return void 0===t&&(t=null===(i=null===(o=this.ha)||void 0===o?void 0:o.shadowRoot)||void 0===i?void 0:i.querySelector(l.HA_MORE_INFO_DIALOG)),n(this,void 0,void 0,(function(){var o,n,i,_=this;return e(this,(function(e){switch(e.label){case 0:return t?[4,g((function(){return null==t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(l.HA_MORE_INFO_DIALOG,":").concat(a))]:[2];case 1:return o=e.sent(),[4,g((function(){return o.querySelector(l.HA_DIALOG)}),(function(t){return!!t}),"".concat(l.HA_MORE_INFO_DIALOG,":").concat(a," > ").concat(l.HA_DIALOG))];case 2:return n=e.sent(),[4,g((function(){return n.querySelector(l.HA_DIALOG_CONTENT)}),(function(t){return!!t}),"".concat(l.HA_DIALOG," > ").concat(l.HA_DIALOG_CONTENT))];case 3:return i=e.sent(),g((function(){return i.querySelector("".concat(l.HA_DIALOG_MORE_INFO,", ").concat(l.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK))}),(function(t){return!!t}),"".concat(l.HA_DIALOG," > ").concat(l.HA_DIALOG_CONTENT," > child")).then((function(t){_.dialogContentMutationObserver.disconnect(),_.dialogContentMutationObserver.observe(i,{childList:!0}),_.runDialogsChildren(t)})).catch((function(){})),this.insertDialogStyles(n),[2]}}))}))},t.prototype.runDialogsChildren=function(t){return n(this,void 0,void 0,(function(){var o;return e(this,(function(n){switch(n.label){case 0:return!t||t.localName!==l.HA_DIALOG_MORE_INFO&&t.localName!==l.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK?[2]:[4,g((function(){return t.shadowRoot}),(function(t){return!!t}),"".concat(l.HA_DIALOG," > ").concat(l.HA_DIALOG_CONTENT," > ").concat(t.localName,":").concat(a))];case 1:return o=n.sent(),this.insertDialogChildStyles(o),[2]}}))}))},t.prototype.processConfig=function(t){return n(this,void 0,void 0,(function(){var o,r,s,A,O,T,u,D,h,R=this;return e(this,(function(S){switch(S.label){case 0:return o=this.ha.hass.panelUrl,window.kioskModeEntities[o]||(window.kioskModeEntities[o]=[]),Object.values(i).forEach((function(t){R.options[t]=!1})),Object.values(_).forEach((function(t){R.options[t]=!1})),r=this,[4,g((function(){var t,o,n;return null===(n=null===(o=null===(t=R.lovelace)||void 0===t?void 0:t.shadowRoot)||void 0===o?void 0:o.querySelector(l.HUI_ROOT))||void 0===n?void 0:n.shadowRoot}),(function(t){return!!t}),"".concat(l.HUI_ROOT).concat(a))];case 1:return r.huiRoot=S.sent(),s=this,[4,g((function(){return R.main.querySelector(l.HA_DRAWER)}),(function(t){return!!t}),l.HA_DRAWER)];case 2:return s.drawerLayout=S.sent(),A=this,[4,g((function(){return R.huiRoot.querySelector(l.TOOLBAR)}),(function(t){return!!t}),l.TOOLBAR)];case 3:return A.appToolbar=S.sent(),O=this,[4,g((function(){var t;return null===(t=R.drawerLayout.querySelector(l.HA_SIDEBAR))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(l.HA_SIDEBAR).concat(a))];case 4:return O.sideBarRoot=S.sent(),(H=this.ha,n(void 0,void 0,void 0,(function(){var t,o,n,i,_;return e(this,(function(e){switch(e.label){case 0:return[4,y(H)];case 1:return t=e.sent(),o=H.hass.language,n=t[o],i=Object.entries(L),_=i.map((function(t){var o=t[0],e=t[1];return[n[e],o]})),[2,Object.fromEntries(_)]}}))}))).then((function(t){R.menuTranslations=t,R.updateMenuItemsLabels()})).catch((function(){console.warn("".concat(E,": ").concat(I," Cannot get resources translations"))})),w(Object.values(i))||v(Object.values(i))?Object.values(i).forEach((function(t){R.options[t]=w(t)||v(t)})):this.setOptions(t,!1),(T=this.user.is_admin?t.admin_settings:t.non_admin_settings)&&this.setOptions(T,!0),t.user_settings&&N(t.user_settings).forEach((function(t){N(t.users).some((function(t){return t.toLowerCase()===R.user.name.toLowerCase()}))&&R.setOptions(t,!0)})),(u=this.options[_.IGNORE_MOBILE_SETTINGS]?null:t.mobile_settings)&&(D=u.custom_width?u.custom_width:812,window.innerWidth<=D&&this.setOptions(u,!0)),(h=this.options[_.IGNORE_ENTITY_SETTINGS]?null:t.entity_settings)&&h.forEach((function(t){var n=Object.keys(t.entity)[0];window.kioskModeEntities[o].includes(n)||window.kioskModeEntities[o].push(n),R.ha.hass.states[n].state==t.entity[n]&&R.setOptions(t,!1)})),v(c.DISABLE_KIOSK_MODE)&&!this.options[_.IGNORE_DISABLE_KM]?[2]:(this.insertStyles(),[2])}var H}))}))},t.prototype.insertStyles=function(){var t,o,n,e;if(this.options[i.KIOSK]||this.options[i.HIDE_HEADER]?(f(k.HEADER,this.huiRoot),v(c.CACHE)&&U(i.HIDE_HEADER,S)):G(this.huiRoot),null===(o=null===(t=this.main)||void 0===t?void 0:t.host)||void 0===o||o.removeEventListener(d,this.blockEventHandler,!0),this.options[i.KIOSK]||this.options[i.HIDE_SIDEBAR]?(null===(e=null===(n=this.main)||void 0===n?void 0:n.host)||void 0===e||e.addEventListener(d,this.blockEventHandler,!0),f(k.SIDEBAR,this.drawerLayout),f(k.ASIDE,this.drawerLayout.shadowRoot),v(c.CACHE)&&U(i.HIDE_SIDEBAR,S)):(G(this.drawerLayout),G(this.drawerLayout.shadowRoot)),this.options[i.HIDE_ACCOUNT]||this.options[i.HIDE_NOTIFICATIONS]||this.options[i.HIDE_MENU_BUTTON]){var _=[this.options[i.HIDE_ACCOUNT]?k.ACCOUNT:"",this.options[i.HIDE_NOTIFICATIONS]?k.NOTIFICATIONS:"",this.options[i.HIDE_ACCOUNT]&&this.options[i.HIDE_NOTIFICATIONS]?k.DIVIDER:"",this.options[i.HIDE_ACCOUNT]||this.options[i.HIDE_NOTIFICATIONS]?k.PEPER_LISTBOX(this.options[i.HIDE_ACCOUNT],this.options[i.HIDE_NOTIFICATIONS]):"",this.options[i.HIDE_MENU_BUTTON]?k.MENU_BUTTON:""];f(_.join(""),this.sideBarRoot),v(c.CACHE)&&(this.options[i.HIDE_ACCOUNT]&&U(i.HIDE_ACCOUNT,S),this.options[i.HIDE_NOTIFICATIONS]&&U(i.HIDE_NOTIFICATIONS,S))}else G(this.sideBarRoot);if(this.options[i.HIDE_SEARCH]||this.options[i.HIDE_ASSISTANT]||this.options[i.HIDE_REFRESH]||this.options[i.HIDE_UNUSED_ENTITIES]||this.options[i.HIDE_RELOAD_RESOURCES]||this.options[i.HIDE_EDIT_DASHBOARD]||this.options[i.HIDE_OVERFLOW]||this.options[i.BLOCK_OVERFLOW]||this.options[i.HIDE_SIDEBAR]||this.options[i.HIDE_MENU_BUTTON]){_=[this.options[i.HIDE_SEARCH]?k.SEARCH:"",this.options[i.HIDE_ASSISTANT]?k.ASSISTANT:"",this.options[i.HIDE_REFRESH]?k.REFRESH:"",this.options[i.HIDE_UNUSED_ENTITIES]?k.UNUSED_ENTITIES:"",this.options[i.HIDE_RELOAD_RESOURCES]?k.RELOAD_RESOURCES:"",this.options[i.HIDE_EDIT_DASHBOARD]?k.EDIT_DASHBOARD:"",this.options[i.HIDE_OVERFLOW]?k.OVERFLOW_MENU:"",this.options[i.BLOCK_OVERFLOW]?k.BLOCK_OVERFLOW:"",this.options[i.HIDE_MENU_BUTTON]||this.options[i.HIDE_SIDEBAR]?k.MENU_BUTTON_BURGER:""];f(_.join(""),this.appToolbar),v(c.CACHE)&&(this.options[i.HIDE_SEARCH]&&U(i.HIDE_SEARCH,S),this.options[i.HIDE_ASSISTANT]&&U(i.HIDE_ASSISTANT,S),this.options[i.HIDE_REFRESH]&&U(i.HIDE_REFRESH,S),this.options[i.HIDE_UNUSED_ENTITIES]&&U(i.HIDE_UNUSED_ENTITIES,S),this.options[i.HIDE_RELOAD_RESOURCES]&&U(i.HIDE_RELOAD_RESOURCES,S),this.options[i.HIDE_EDIT_DASHBOARD]&&U(i.HIDE_EDIT_DASHBOARD,S),this.options[i.HIDE_OVERFLOW]&&U(i.HIDE_OVERFLOW,S),this.options[i.BLOCK_OVERFLOW]&&U(i.BLOCK_OVERFLOW,S),this.options[i.HIDE_MENU_BUTTON]&&U(i.HIDE_MENU_BUTTON,S))}else G(this.appToolbar);this.options[i.BLOCK_MOUSE]?(f(k.MOUSE,document.body),v(c.CACHE)&&U(i.BLOCK_MOUSE,S)):G(document.body),window.removeEventListener("contextmenu",this.blockEventHandler,!0),this.options[i.BLOCK_CONTEXT_MENU]&&(window.addEventListener("contextmenu",this.blockEventHandler,!0),v(c.CACHE)&&U(i.BLOCK_CONTEXT_MENU,S)),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize"))},t.prototype.insertDialogStyles=function(t){return n(this,void 0,void 0,(function(){var o,n=this;return e(this,(function(e){return g((function(){return t.querySelectorAll("".concat(l.HA_DIALOG_HEADER," > ").concat(l.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(l.HA_DIALOG_HEADER," > ").concat(l.MENU_ITEM)).then((function(t){F(t,n.menuTranslations)})).catch((function(t){console.warn("".concat(E,": ").concat(I," ").concat(t))})),this.options[i.HIDE_DIALOG_HEADER_ACTION_ITEMS]||this.options[i.HIDE_DIALOG_HEADER_HISTORY]||this.options[i.HIDE_DIALOG_HEADER_SETTINGS]||this.options[i.HIDE_DIALOG_HEADER_OVERFLOW]?(o=[this.options[i.HIDE_DIALOG_HEADER_ACTION_ITEMS]||this.options[i.HIDE_DIALOG_HEADER_HISTORY]?k.DIALOG_HEADER_HISTORY:"",this.options[i.HIDE_DIALOG_HEADER_ACTION_ITEMS]||this.options[i.HIDE_DIALOG_HEADER_SETTINGS]?k.DIALOG_HEADER_SETTINGS:"",this.options[i.HIDE_DIALOG_HEADER_ACTION_ITEMS]||this.options[i.HIDE_DIALOG_HEADER_OVERFLOW]?k.DIALOG_HEADER_OVERFLOW:""],f(o.join(""),t),v(c.CACHE)&&(this.options[i.HIDE_DIALOG_HEADER_ACTION_ITEMS]&&U(i.HIDE_DIALOG_HEADER_ACTION_ITEMS,S),this.options[i.HIDE_DIALOG_HEADER_HISTORY]&&U(i.HIDE_DIALOG_HEADER_HISTORY,S),this.options[i.HIDE_DIALOG_HEADER_SETTINGS]&&U(i.HIDE_DIALOG_HEADER_SETTINGS,S),this.options[i.HIDE_DIALOG_HEADER_OVERFLOW]&&U(i.HIDE_DIALOG_HEADER_OVERFLOW,S))):G(t),[2]}))}))},t.prototype.insertDialogChildStyles=function(t){return n(this,void 0,void 0,(function(){var o,n,_=this;return e(this,(function(e){return o=Boolean(this.version&&(this.version[0]<2023||2023===this.version[0]&&this.version[1]<9)),this.options[i.HIDE_DIALOG_HISTORY]||this.options[i.HIDE_DIALOG_LOGBOOK]||this.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]||this.options[i.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS]||this.options[i.HIDE_DIALOG_CLIMATE_SETTINGS_ACTIONS]?(n=[this.options[i.HIDE_DIALOG_HISTORY]?k.DIALOG_HISTORY:"",this.options[i.HIDE_DIALOG_LOGBOOK]?k.DIALOG_LOGBOOK:"",this.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]&&o?k.DIALOG_CLIMATE_ACTIONS:""],f(n.join(""),t),v(c.CACHE)&&(this.options[i.HIDE_DIALOG_HISTORY]&&U(i.HIDE_DIALOG_HISTORY,S),this.options[i.HIDE_DIALOG_LOGBOOK]&&U(i.HIDE_DIALOG_LOGBOOK,S),this.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]&&U(i.HIDE_DIALOG_CLIMATE_ACTIONS,S),this.options[i.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS]&&U(i.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS,S),this.options[i.HIDE_DIALOG_CLIMATE_SETTINGS_ACTIONS]&&U(i.HIDE_DIALOG_CLIMATE_SETTINGS_ACTIONS,S))):G(t),o||g((function(){var o;return null===(o=t.querySelector(l.HA_DIALOG_CLIMATE))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]||_.options[i.HIDE_DIALOG_CLIMATE_SETTINGS_ACTIONS]?f(k.DIALOG_CLIMATE_CONTROL_SELECT,t):G(t),g((function(){var o;return null===(o=t.querySelector(l.HA_DIALOG_CLIMATE_TEMPERATURE))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]||_.options[i.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS]?f(k.DIALOG_CLIMATE_TEMPERATURE_BUTTONS,t):G(t),g((function(){var o;return null===(o=t.querySelector(l.HA_DIALOG_CLIMATE_CIRCULAR_SLIDER))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_CLIMATE_ACTIONS]||_.options[i.HIDE_DIALOG_CLIMATE_TEMPERATURE_ACTIONS]?f(k.DIALOG_CLIMATE_CIRCULAR_SLIDER_INTERACTION,t):G(t)})).catch((function(){}))})).catch((function(){}))})).catch((function(){})),g((function(){var o;return null===(o=t.querySelector(l.HA_DIALOG_HISTORY))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_HISTORY_SHOW_MORE]?(f(k.DIALOG_SHOW_MORE,t),v(c.CACHE)&&U(i.HIDE_DIALOG_HISTORY_SHOW_MORE,S)):G(t)})).catch((function(){})),g((function(){var o;return null===(o=t.querySelector(l.HA_DIALOG_LOGBOOK))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_LOGBOOK_SHOW_MORE]?(f(k.DIALOG_SHOW_MORE,t),v(c.CACHE)&&U(i.HIDE_DIALOG_LOGBOOK_SHOW_MORE,S)):G(t)})).catch((function(){})),g((function(){var o;return null===(o=t.querySelector(["".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_DEFAULT),"".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_VACUUM),"".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_TIMER),"".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_LIGHT),"".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_MEDIA_PLAYER)].join(",")))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){if(_.options[i.HIDE_DIALOG_ATTRIBUTES]||_.options[i.HIDE_DIALOG_TIMER_ACTIONS]||_.options[i.HIDE_DIALOG_MEDIA_ACTIONS]){var o=[_.options[i.HIDE_DIALOG_ATTRIBUTES]?k.DIALOG_ATTRIBUTES:"",_.options[i.HIDE_DIALOG_TIMER_ACTIONS]?k.DIALOG_TIMER_ACTIONS:"",_.options[i.HIDE_DIALOG_MEDIA_ACTIONS]&&t.host.localName===l.HA_DIALOG_MEDIA_PLAYER?k.DIALOG_MEDIA_ACTIONS:""];f(o.join(""),t),v(c.CACHE)&&(_.options[i.HIDE_DIALOG_ATTRIBUTES]&&U(i.HIDE_DIALOG_ATTRIBUTES,S),_.options[i.HIDE_DIALOG_TIMER_ACTIONS]&&U(i.HIDE_DIALOG_TIMER_ACTIONS,S),_.options[i.HIDE_DIALOG_MEDIA_ACTIONS]&&U(i.HIDE_DIALOG_MEDIA_ACTIONS,S))}else G(t)})).catch((function(){})),g((function(){var o;return null===(o=t.querySelector("".concat(l.HA_DIALOG_MORE_INFO_CONTENT," > ").concat(l.HA_DIALOG_UPDATE)))||void 0===o?void 0:o.shadowRoot}),(function(t){return!!t}),"").then((function(t){_.options[i.HIDE_DIALOG_UPDATE_ACTIONS]?(f(k.DIALOG_UPDATE_ACTIONS,t),v(c.CACHE)&&U(i.HIDE_DIALOG_UPDATE_ACTIONS,S)):G(t)})).catch((function(){})),[2]}))}))},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===l.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.watchMoreInfoDialogs=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===l.HA_MORE_INFO_DIALOG&&window.KioskMode.runDialogs(t).catch((function(t){return console.warn("".concat(I," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.watchMoreInfoDialogsContent=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName!==l.HA_DIALOG_MORE_INFO&&t.localName!==l.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK||window.KioskMode.runDialogsChildren(t).catch((function(t){return console.warn("".concat(I," ").concat(null==t?void 0:t.message))}))}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this;this.menuTranslations&&(g((function(){return t.appToolbar.querySelectorAll("".concat(l.TOOLBAR," > ").concat(l.ACTION_ITEMS," > ").concat(l.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(l.ACTION_ITEMS," > ").concat(l.MENU_ITEM)).then((function(o){F(o,t.menuTranslations)})).catch((function(t){console.warn("".concat(E,": ").concat(I," ").concat(t))})),this.user.is_admin&&g((function(){return t.appToolbar.querySelectorAll(l.OVERLAY_MENU_ITEM)}),(function(t){return!(!t||!t.length)}),"".concat(l.TOOLBAR," > ").concat(l.OVERLAY_MENU_ITEM)).then((function(o){o.forEach((function(o){if(o&&o.dataset&&!o.dataset.selector){var n=o.textContent.trim();o.dataset.selector=t.menuTranslations[n]}}))})).catch((function(t){console.warn("".concat(E,": ").concat(I," ").concat(t))})))},t.prototype.entityWatch=function(){return n(this,void 0,void 0,(function(){var t=this;return e(this,(function(o){switch(o.label){case 0:return[4,window.hassConnection];case 1:return o.sent().conn.subscribeMessage((function(o){return t.entityWatchCallback(o)}),{type:"subscribe_events",event_type:H}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){return n(this,void 0,void 0,(function(){var o;return e(this,(function(n){switch(n.label){case 0:return!(o=window.kioskModeEntities[this.ha.hass.panelUrl]||[]).length||t.event_type!==H||!o.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state?[3,2]:[4,this.run()];case 1:n.sent(),this.runDialogs().catch((function(){})),n.label=2;case 2:return[2]}}))}))},t.prototype.blockEventHandler=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.setOptions=function(t,o){var n=this;Object.values(i).forEach((function(o){o in t&&(n.options[o]=t[o])})),o&&Object.values(_).forEach((function(o){o in t&&(n.options[o]=t[o])}))},t}();(new x).log(),Promise.resolve(customElements.whenDefined(l.HUI_VIEW)).then((function(){window.KioskMode=new K}))}();
