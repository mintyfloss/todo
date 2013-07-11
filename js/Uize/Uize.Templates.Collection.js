/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Templates.Collection.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({
	name:'Uize.Templates.Collection',
	builder:function() {
		var _a = function(){};
		_a.process = function(input) {
			var output=[];
			output.push('<div class="collectionToolbar">\r\n	<a id="',input.idPrefix,'_selectAll" class="button">SELECT ALL</a>\r\n	<a id="',input.idPrefix,'_selectNone" class="button">SELECT NONE</a>\r\n	<a id="',input.idPrefix,'_remove" class="button">REMOVE</a>\r\n</div>\r\n<table id="',input.idPrefix,'-items" class="collectionView">\r\n</table>\r\n\r\n');
			
			return output.join('');
		};
		
		_a.input={idPrefix:'string'};
		
		return _a;
	}
});