/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Templates.SevenSegmentDisplay.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Templates.SevenSegmentDisplay',builder:function(){var _a=function(){};_a.process=function(input){var output=[];
output.push('<div id="',input.idPrefix,'" class="sevenSeg">\r\n	<div id="',input.idPrefix,'-segmentA" class="sevenSegSegment sevenSegHorzSegment sevenSegHorzSegmentTop sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentLeftEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentRightEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentB" class="sevenSegSegment sevenSegVertSegment sevenSegVertSegmentRight sevenSegVertSegmentTop sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentTopEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentBottomEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentC" class="sevenSegSegment sevenSegVertSegment sevenSegVertSegmentRight sevenSegVertSegmentBottom sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentTopEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentBottomEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentD" class="sevenSegSegment sevenSegHorzSegment sevenSegHorzSegmentBottom sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentLeftEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentRightEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentE" class="sevenSegSegment sevenSegVertSegment sevenSegVertSegmentLeft sevenSegVertSegmentBottom sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentTopEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentBottomEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentF" class="sevenSegSegment sevenSegVertSegment sevenSegVertSegmentLeft sevenSegVertSegmentTop sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentTopEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentBottomEnd"></div>\r\n	</div>\r\n	<div id="',input.idPrefix,'-segmentG" class="sevenSegSegment sevenSegHorzSegment sevenSegHorzSegmentMiddle sevenSegSegmentOff">\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentLeftEnd"></div>\r\n		<div class="sevenSegSegmentBar"></div>\r\n		<div class="sevenSegSegmentEnd sevenSegSegmentRightEnd"></div>\r\n	</div>\r\n</div>\r\n\r\n');
return output.join('');};_a.input={idPrefix:'string'};return _a;}});