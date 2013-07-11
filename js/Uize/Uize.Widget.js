/*
	UIZE JAVASCRIPT FRAMEWORK 2011-05-11

	http://www.uize.com/reference/Uize.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget',required:'Uize.Node',builder:function(b_a){var b_b=null,b_c=true,b_d=false,b_e='string',b_f=Uize.isFunction,b_g='concatenated',b_h,b_i=Uize.Node,b_j=b_i.doForAll,b_k=b_i.isNode,b_l=b_i.getById;var b_m=b_a.subclass(function(b_n){var b_o=this;if(b_n){var b_p=b_o.b_q(b_n.idPrefix,b_n.parent);b_p&&Uize.copyInto(b_n,b_p);delete b_n.widgetClass;}b_o.b_r={};b_o.children=b_o.b_s={};}),b_t=b_m.prototype;b_t.b_q=function(b_u,b_v){var b_n,b_w;(b_u&&(b_n=window[b_w='$'+b_u])&&typeof b_n=='object'&&(!b_v||b_u!=b_v.b_u))?(window[b_w]=b_h):(b_n=b_h);return b_n;};b_t.b_x=function(){var b_o=this,b_p=b_o.b_q(b_o.b_u,b_o.parent);b_p&&b_o.set(b_p);};b_t.b_y=function(b_z,b_A,b_B,b_C){return((!b_C||b_C==b_g)&&b_z!=b_h?(b_z+(b_B!==''?'_':'')+b_B):(b_C=='same as parent'?b_z:b_A));};var b_D={b_E:b_d,b_F:b_c};b_t.b_G=function(){(this.b_H=='inherit'?(this.parent||b_D).b_E:this.b_H)!=this.b_E&&this.set({b_E:!this.b_E});};b_t.b_I=function(){(this.b_J=='inherit'?(this.parent||b_D).b_F:this.b_J)!=this.b_F&&
this.set({b_F:!this.b_F});};b_t.b_K=function(b_L,b_M,b_N){var b_O='show'+Uize.capFirstChar(b_L);this.getProvider(b_O)?this.callInherited(b_O)(b_M):setTimeout(function(){var b_P=b_N();(b_M.callback||(b_P?b_M.yesHandler:b_M.noHandler)||function(){})(b_P)},0);};b_t.confirm=function(b_M){this.b_K('confirm',b_M,function(){return confirm(b_M.message)});};b_t.showInform=b_t.showConfirm=b_h;b_t.inform=function(b_M){this.b_K('inform',b_M,function(){alert(b_M.message);return b_c})};b_t.ajax=function(b_Q,b_R){this.callInherited('performAjax')(b_Q,Uize.isFunction(b_R)?{callback:b_R}:b_R||{})};b_t.localize=function(b_S,b_T,b_U){var b_V,b_W=this;while(!(b_V=b_W.b_X?b_W.b_X[b_S]:b_h)&&(b_W=b_W.parent));return(b_f(b_V)?b_V.call(this,b_T):Uize.substituteInto(b_V,b_T,b_U||'{KEY}'));};b_t.buildHtml=function(b_Y){var b_o=this,b_Z=b_o.b_Z;if(b_Z!=b_h){var b_0=b_o.b_1||b_o.getNode('shell')||b_o.getNode();if(b_Z===b_c){b_Z=b_o.b_Z=Uize.Template&&b_0?{process:Uize.Template.compile((
b_i.find({root:b_0,tagName:'SCRIPT',type:'text/jst'})[0]||b_0).innerHTML,{openerToken:'[%',closerToken:'%]'})}:b_h;if(!b_Z)return;}b_o.b_u||b_o.set({b_u:b_o.instanceId});var b_2=Uize.copyInto({pathToResources:Uize.pathToResources,blankGif:b_m.getBlankImageUrl()},b_Y||b_o.get());b_i.injectHtml(b_0||document.body,typeof b_Z!=b_e&&b_f(b_Z.process)?b_Z.process.call(b_o,b_2):Uize.substituteInto(b_f(b_Z)?b_o.b_Z(b_2):b_Z,b_2),b_o.b_3||(b_0?'inner replace':'inner bottom'));b_o.b_4=b_b;b_o.set({b_5:b_c});}};function b_6(b_7,b_8){b_t[b_7+'Node'+b_8]=new Function('arguments.length'+'?(arguments[0]=this.getNode(arguments[0]))'+':(arguments[arguments.length++]=this.getNode());'+'return Uize.Node.'+b_7+b_8+'.apply(0,arguments)');}b_t.getNode=function(b_9){if(b_9==b_b){if(b_9===b_b)return b_b;b_9='';}var b_o=this;if(b_o.b_ba&&typeof b_9==b_e){var b_bb=b_o.b_ba[b_9];if(b_bb!==b_h)b_9=b_bb;}if(typeof b_9==b_e){return b_l(b_9,b_o.b_u,b_o.b_4||(b_o.b_4={}));}else if(b_k(b_9)){return b_9;}else{var b_bc=b_b;b_j(b_9,
function(b_bd){(b_bc||(b_bc=[])).push(b_bd)},b_o.b_u,b_o.b_4||(b_o.b_4={}));return b_bc;}};b_6('get','Style');b_6('get','Value');b_t.flushNodeCache=function(b_be){if(this.b_4)b_be==b_h?(this.b_4=b_b):delete this.b_4[b_be];};b_t.globalizeNode=function(b_bf){var b_o=this,b_bg=document.body;b_j(b_o.getNode(b_bf),function(b_bd){if(b_bd.parentNode!=b_bg){(b_o.b_bh||(b_o.b_bh=[])).push(b_bd);b_i.setStyle(b_bd,{position:'absolute',left:-10000,top:-10000});b_bg.appendChild(b_bd);}});};b_6('display','');b_6('inject','Html');b_t.removeNode=function(b_bf){b_i.remove(this.getNode(b_bf));this.flushNodeCache(b_bf);};b_6('set','Properties');b_6('set','Opacity');b_6('set','Style');b_6('set','ClipRect');b_6('set','InnerHtml');b_6('set','Value');b_6('show','');b_t.wireNode=function(b_bf,b_bi,b_bj){arguments.length==3?b_i.wire(this.getNode(b_bf),b_bi,b_bj,this.instanceId):b_i.wire(this.getNode(b_bf),b_bi,this.instanceId);};b_t.unwireNode=function(b_bf,b_bi,b_bj){if(b_bf!==b_h)b_bf=this.getNode(b_bf);arguments.length==2&&
typeof b_bi=='object'&&b_bi&& !b_bi.virtualDomEvent?b_i.unwire(b_bf,b_bi,this.instanceId):b_i.unwire(b_bf,b_bi,b_bj,this.instanceId);};b_t.unwireNodeEventsByMatch=function(b_bf,b_bk){this.unwireNode(b_bf,(b_bk||(b_bk={})).eventName,b_bk.handler);};b_t.addChild=function(b_B,b_bl,b_n){if(!b_n)b_n={};var b_o=this,b_u=b_o.b_u,b_bm=Uize.isInstance(b_bl)?b_bl:b_b,b_A='idPrefix'in b_n?b_n.idPrefix:b_n.node,b_bn=b_n.idPrefixConstruction;b_n.parent=b_o;if(b_B==b_h)b_B=b_n.name;if(b_bm){if(b_B==b_h)b_B=b_bm.b_bo;if(b_A==b_h)b_A=b_bm.b_u;if(!b_bn)b_bn=b_bm.b_C;}b_n.idPrefix=b_o.b_y(b_u,b_A,b_n.name=b_B,b_n.idPrefixConstruction=b_bn||(b_A==b_h?b_g:'explicit'));var b_r=b_o.b_r,b_bp=b_r[b_B];if(b_bp){Uize.copyInto(b_n,b_bp);delete b_r[b_B];}b_bm&&b_bm.set(b_n);return b_o.b_s[b_B]=b_bm||new b_bl(b_n);};b_t.removeChild=function(b_bq){var b_s=this.b_s,b_B=typeof b_bq==b_e||Uize.isNumber(b_bq)?b_bq:b_bq.b_bo,b_bm=b_s[b_B];if(b_bm){b_bm.unwireUi();delete b_bm.parent;delete b_s[b_B];}};b_t.getProvider=function(b_br){var
 b_bs=this,b_bt;while(((b_bt=b_bs.get(b_br))==='inherit'||b_bt===b_h)&&(b_bs=b_bs.parent));return b_bs;};b_t.getInherited=function(b_br){var b_bu=this.getProvider(b_br);return b_bu?b_bu.get(b_br):b_h;};b_t.setInherited=function(b_n){var b_bu;for(var b_bv in b_n){if(b_bu=this.getProvider(b_bv))b_bu.set(b_bv,b_n[b_bv]);}};b_t.callInherited=function(b_br){var b_o=this;return(function(){var b_bu=b_o.getProvider(b_br),b_bc;if(b_bu){var b_bw=b_bu.get(b_br);if(b_f(b_bw))b_bc=b_bw.apply(b_bu,arguments);}return b_bc;});};b_t.kill=function(){Uize.callOn(this.b_s,'kill');b_a.prototype.kill.call(this);};b_t.insertOrWireUi=function(){this.b_5?this.wireUi():this.insertUi();};b_t.insertUi=function(){this.buildHtml();this.wireUi();};b_t.removeUi=function(){this.unwireUi();this.removeNode();b_i.remove(this.b_bh);this.b_bh=b_h;Uize.callOn(this.b_s,'removeUi');this.set({b_5:b_d});};b_t.updateUi=function(){};b_t.wireUi=function(){if(!this.isWired){this.b_x();this.set({wired:b_c});var b_s=this.b_s;for(var b_B in b_s)
b_s[b_B].insertOrWireUi();this.updateUi();}};b_t.unwireUi=function(){if(this.isWired){this.b_4=b_b;this.unwireNode();Uize.callOn(this.b_s,'unwireUi');this.set({wired:b_d});}};b_m.getBlankImageUrl=function(){return Uize.pathToResources+'Uize/blank.gif';};b_m.spawn=function(b_n,b_v){var b_o=this,b_bx=[],b_bs,b_by=b_v&&b_v.b_u?b_v.b_u+'_':'',b_bz=b_by.length;b_j(Uize.Node.find(b_n.idPrefix),function(b_bd){b_n.idPrefix=b_bd;b_v?(b_bs=b_v.addChild(b_bd.id.slice(0,b_bz)==b_by?b_bd.id.slice(b_bz):'generatedChildName'+Uize.getGuid(),b_o,b_n)):(b_bs=new b_o(b_n)).insertOrWireUi();b_bx.push(b_bs);});return b_bx;};b_m.registerProperties({b_5:{name:'built',value:b_c},b_H:{name:'busy',onChange:b_t.b_G,value:'inherit'},b_E:{name:'busyInherited',onChange:function(){Uize.callOn(this.b_s,b_t.b_G)},value:b_d},b_s:{name:'children',conformer:function(b_bt){if(b_bt){var b_s=this.b_s,b_r=this.b_r;for(var b_B in b_bt){var b_bA=b_bt[b_B];b_s[b_B]?b_s[b_B].set(b_bA):b_r[b_B]=b_bA;}}return this.b_s;}},b_1:'container',b_J:{
name:'enabled',onChange:b_t.b_I,value:'inherit'},b_F:{name:'enabledInherited',onChange:function(){Uize.callOn(this.b_s,b_t.b_I)},value:b_c},b_Z:'html',b_u:{name:'idPrefix|node',conformer:function(b_u){return b_k(b_u)?(b_u.id||(b_u.id=Uize.getGuid())):b_u;},onChange:function(){var b_o=this,b_u=b_o.b_u;b_o.b_4=b_b;if(b_u!=b_h){b_o.b_x();var b_s=b_o.b_s,b_bm;for(var b_B in b_s)(b_bm=b_s[b_B]).set({b_u:b_o.b_y(b_u,b_bm.b_u,b_B,b_bm.b_C)});if(b_o.isWired){b_o.set({wired:b_d});b_o.wireUi();}}}},b_C:'idPrefixConstruction',b_3:'insertionMode',b_X:'localized',b_bo:'name',b_ba:'nodeMap',isWired:{name:'wired',value:b_d}});return b_m;}});