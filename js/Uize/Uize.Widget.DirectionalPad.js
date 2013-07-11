/*
	UIZE JAVASCRIPT FRAMEWORK 2011-05-15

	http://www.uize.com/reference/Uize.Widget.DirectionalPad.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.DirectionalPad',required:'Uize.Widget.Button',builder:function(c_a){var c_b={north:'North',south:'South',east:'East',west:'West',northeast:'Northeast',northwest:'Northwest',southeast:'Southeast',southwest:'Southwest',northEdge:'NorthEdge',southEdge:'SouthEdge',eastEdge:'EastEdge',westEdge:'WestEdge',northeastEdge:'NortheastEdge',southeastEdge:'SoutheastEdge',northwestEdge:'NorthwestEdge',southwestEdge:'SouthwestEdge',center:'Center'},c_c={north:1,south:1,east:1,west:1},c_d=c_a.subclass(function(){var c_e=this;for(var c_f in c_b)c_e.c_g(c_f);}),c_h=c_d.prototype;c_h.c_g=Uize.Widget.Button.addChildButton;c_h.c_i=function(){var c_e=this;if(c_e.isWired){var c_j=c_e.children;for(var c_k in c_j)c_j[c_k].displayNode('',c_e.c_l=='full'||c_k in c_c);}};c_h.wireUi=function(){var c_e=this;if(!c_e.isWired){c_e.wire('Changed.enabled',function(){var c_j=c_e.children,c_m=c_e.get('enabled');if(typeof c_m=='object'){var c_n=c_m.defaultValue===undefined||c_m.defaultValue,c_o;for(c_o in c_j){
var c_p=c_o in c_m;(c_p||c_n!==undefined)&&c_j[c_q].set({enabled:c_p?c_m[c_o]:c_n});}}else for(c_o in c_j)c_j[c_o].set({enabled:c_m});});c_a.prototype.wireUi.call(c_e);c_e.c_i();}};c_d.registerProperties({c_l:{name:'mode',onChange:c_h.c_i,value:'full'}});return c_d;}});