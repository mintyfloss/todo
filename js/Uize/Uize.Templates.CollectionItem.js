/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Templates.CollectionItem.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({
	name:'Uize.Templates.CollectionItem',
	builder: function(){
		var _a=function(){};
		_a.process=function(input){
			var completionHtml;
			
			if (input.completion)
				completionHtml = 'yes';
			else
				completionHtml = 'no';

			var
				isLowSelected = input.properties.priority == 'low' ? ' selected="selected"' : '',
				isNormalSelected = input.properties.priority == 'normal' ? ' selected="selected"' : '',
				isHighSelected = input.properties.priority == 'high' ? ' selected="selected"' : '',
				isYesSelected = input.properties.completion == 'yes' ?  ' selected="selected"' : '',
				isNoSelected = input.properties.completion == 'no' ?  ' selected="selected"' : ''
			;
			
			var html = '<div id="' + input.idPrefix + '" class="collectionItem">' + 
				'<div id="' + input.idPrefix + '_select' + '" class="column collectionItemSelect"><div class="checkBox"></div></div>' +
				'<div id="' + input.idPrefix + '_editLabel" class="column label"><input id="' + input.idPrefix + '_editLabel-input" type="text" value="' + input.properties.label + '" /></div>' +
				'<div class="column date">' + input.properties.date + '</div>' +
				'<div id="' + input.idPrefix + '_editPriority" class="column priority">' +
					'<select id="' + input.idPrefix + '_editPriority-input">' +
						'<option' + isLowSelected + '>low</option>' + 
						'<option' + isNormalSelected + '>normal</option>' + 
						'<option' + isHighSelected + '>high</option>' + 
					'</select>' +
				'</div>' +
				'<div id="' + input.idPrefix + '_editCompletion" class="column completion">' +
					'<select id="' + input.idPrefix + '_editCompletion-input">' +
						'<option' + isYesSelected + '>yes</option>' + 
						'<option' + isNoSelected + '>no</option>' + 
					'</select>' +
				'</div>';


			return html;
		};
		
		_a.input={idPrefix:'string'};

		return _a;	
	}
});