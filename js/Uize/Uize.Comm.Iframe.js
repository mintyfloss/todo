/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Comm.Iframe.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Comm.Iframe',required:['Uize.Url','Uize.Node'],builder:function(c_a){var c_b=c_a.subclass(),c_c=c_b.prototype;var c_d;c_c.performRequest=function(c_e,c_f){var c_g=this,c_h=Uize.Node.getById(c_d),c_i=Uize.Url.resolve(c_e.url,{comm_mode:'ajax',output:'js',rnd:c_e.cache=='never'?Uize.Url.getCacheDefeatStr():null}),c_j=c_e.returnType,c_k=c_j=='object';handleResponse=function(c_l){if(c_k||c_j=='json')c_e.responseJson=Uize.clone(c_l);Uize.Node.isIe&&c_h.contentWindow.history.go(-1);c_f();};if(c_e.requestMethod=='POST'){var c_m=Uize.Node.getById('CommIframe_form'),c_n=Uize.Node.getById('CommIframe_params'),c_o=c_i.indexOf('?');c_n.value=c_o> -1?c_i.substr(c_o+1):'';c_m.action=c_i.slice(0,c_o);c_m.submit();}else{c_h.src=c_i;}};if(typeof navigator!='undefined'){c_d=c_c.iframeId='Uize_Comm_Iframe_iframe'+Uize.Url.getCacheDefeatStr();Uize.Node.injectHtml(Uize.Node.getById('globalContent')||document.body,
'<form id="CommIframe_form" style="display:none;" target="'+c_d+'" method="POST" accept-charset="utf-8">'+'<input id="CommIframe_params" name="params" type="hidden"/>'+'</form>'+'<iframe id="'+c_d+'" name="'+c_d+'" width="1" height="1" src="/z.2/js/library/Zazzle_CommIframe/blank.html" frameborder="1" style="position:absolute; visibility:hidden;" scrolling="no"></iframe>');}handleResponse=function(){};return c_b;}});