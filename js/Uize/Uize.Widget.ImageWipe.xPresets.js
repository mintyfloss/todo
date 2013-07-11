/*
	UIZE JAVASCRIPT FRAMEWORK 2011-04-01

	http://www.uize.com/reference/Uize.Widget.ImageWipe.xPresets.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.ImageWipe.xPresets',builder:function(d_a){var d_b=true,d_c=false,d_d='outside in',d_e='inside out',d_f='normal',d_g='reverse',d_h=2000,d_i=3000,d_j={start:0,end:1,keyedTo:'row'},d_k={start:0,end:1,keyedTo:'pane'},d_l={start:1,end:0,keyedTo:'pane'},d_m={start:1,end:.5,keyedTo:'pane'};var d_n={blindsVerticalFromOutside:[0,d_i,d_c,16,1,100,100,d_k,0,0,100,0,10,d_d],blindsVerticalFromInside:[0,d_i,d_c,16,1,100,100,d_l,0,0,100,0,10,d_e],blindsVerticalFromLeft:[0,d_i,d_c,16,1,10,100,d_m,0,0,100,0,10,d_f],blindsVerticalFromRight:[0,d_i,d_c,16,1,10,100,d_m,0,0,100,0,10,d_g],blindsVerticalFromRightEven:[0,d_i,d_c,16,1,100,100,d_k,0,0,100,100,15,d_g],blindsVerticalBackSlash:[0,2500,d_c,16,1,100,100,d_k,d_k,0,0,0,0,d_f],blindsVerticalForwardSlash:[0,2500,d_c,16,1,100,100,d_k,d_l,0,0,0,0,d_f],blindsVerticalArrowLeft:[0,d_i,d_c,16,1,100,100,1,.5,0,0,0,10,d_g],blindsVerticalArrowRight:[0,d_i,d_c,16,1,100,100,0,.5,0,0,0,10,d_f],blindsVerticalZoom:[0,d_h,d_c,16,1,100,100,.5,.5,5,0,100,10,d_d],
blindsVerticalGrowFromCenter:[0,d_h,d_c,16,1,100,100,.5,.5,0,0,50,0,d_f],blindsHorizontalFromOutside:[0,d_i,d_c,1,16,100,100,0,d_k,100,0,0,10,d_d],blindsHorizontalFromInside:[0,d_i,d_c,1,16,100,100,0,d_l,100,0,0,10,d_e],blindsHorizontalFromTop:[0,d_i,d_c,1,16,100,100,0,d_k,100,0,0,10,d_f],blindsHorizontalFromBottom:[0,d_i,d_c,1,16,100,100,0,d_k,100,0,0,10,d_g],blindsHorizontalTornado:[0,d_i,d_c,1,16,100,100,d_k,d_k,0,0,0,10,d_f],blindsHorizontalZoom:[0,d_h,d_c,1,16,100,100,.5,.5,0,5,100,10,d_d],blindsHorizontalGrowFromCenter:[0,d_h,d_c,1,16,100,100,.5,.5,0,0,50,0,d_f],verticalStackingAgainstLeft:[0,d_h,d_b,16,1,0,100,{start:1,end:0.9,keyedTo:'pane'},0,0,100,80,100,d_f],verticalStackingAgainstRight:[0,d_h,d_b,16,1,200,100,{start:.1,end:0,keyedTo:'pane'},0,0,100,80,100,d_g],trapezoidClockwise:[0,d_h,d_c,1,16,100,100,d_k,.5,0,0,100,0,d_f],trapezoidCounterClockwise:[0,d_h,d_c,16,1,100,100,.5,d_k,0,0,100,0,d_f],openingV:[0,d_h,d_c,16,1,100,100,.5,{start:0,end:1,keyedTo:'pane',wraps:2,wrapMode:'triangle'},5,20,100,
0,d_f],tornado:[0,d_h,d_c,1,16,100,200,d_k,d_k,0,100,0,5,d_f],wBlinds:[0,d_h,d_c,16,1,100,100,d_k,{start:0,end:1,keyedTo:'column',wraps:2,wrapMode:'triangle'},0,{start:0,end:100,keyedTo:'column',wraps:2,wrapMode:'triangle'},0,0,d_f],diamondVertical:[0,d_i,d_c,16,1,100,100,d_l,.5,0,0,0,10,d_e],diamondHorizontal:[0,d_i,d_c,1,16,100,100,.5,d_l,0,0,0,10,d_e],matrix:[0,d_h,d_c,4,4,100,100,{start:0,end:1,keyedTo:'column'},d_j,0,0,0,0,d_f],matrixZoomBottomRight:[0,4000,d_c,4,4,100,100,1,1,0,0,100,20,d_f],matrixZoomTopLeft:[0,4000,d_c,4,4,100,100,0,0,0,0,100,20,d_g],matrixZoomCenter:[0,4000,d_c,4,4,100,100,.5,.5,0,0,100,20,d_d],matrixFromOutside:[0,4000,d_c,4,4,100,100,d_j,d_j,0,0,0,20,d_d],matrixJumbled:[0,d_h,d_c,4,4,100,100,0,.5,100,0,0,20,'jumbled'],matrixDrifting:[0,d_h,d_c,4,4,100,100,{start:0,end:1,keyedTo:'pane',wraps:20,wrapMode:'triangle'},{start:0,end:1,keyedTo:'pane',wraps:4,wrapMode:'triangle'},0,0,100,2,d_g],matrixFromTopLeftFade:[0,d_h,d_b,4,4,100,100,0,0,100,100,0,20,d_f],matrixFromBottomRightFade:[0,
d_h,d_b,4,4,100,100,0,0,100,100,0,20,d_g],matrixFromCornersFade:[0,d_h,d_b,4,4,100,100,0,0,100,100,0,20,d_d],matrixTartanFacetedFade:[100,5000,d_b,4,4,100,100,{start:0,end:1,keyedTo:'column'},{start:0,end:1,keyedTo:'row'},0,0,0,0,d_f],backSlash:[100,d_h,d_c,16,1,100,100,d_k,d_k,0,0,0,0,d_f],forwardSlash:[100,d_h,d_c,16,1,100,100,d_k,d_l,0,0,0,0,d_g],backSlashWithCurl:[100,d_h,d_c,16,1,100,100,d_k,d_k,0,0,0,2,d_f],twoBackSlashesCoalesce:[0,d_h,d_c,8,2,100,100,.5,d_k,0,0,100,0,d_f],forwardSlashWithCurl:[100,d_h,d_c,16,1,100,100,d_k,d_l,0,0,0,2,d_g],fourSlashesCounterClockwise:[0,d_h,d_c,4,4,100,100,d_l,d_k,0,0,100,0,d_f],verticalFadeFromTop:[0,d_h,d_b,1,16,100,100,0,0,100,100,0,10,d_f],verticalFadeFromBottom:[0,d_h,d_b,1,16,100,100,0,0,100,100,0,10,d_g],verticalFadeFromInside:[0,d_h,d_b,1,16,100,100,0,0,100,100,0,10,d_e],verticalFadeFromOutside:[0,d_h,d_b,1,16,100,100,0,0,100,100,0,10,d_d],horizontalFadeFromLeft:[0,d_h,d_b,16,1,100,100,0,0,100,100,0,10,d_f],horizontalFadeFromRight:[0,d_h,d_b,16,1,100,100,0,0,
100,100,0,10,d_g],horizontalFadeFromInside:[0,d_h,d_b,16,1,100,100,0,0,100,100,0,10,d_e],horizontalFadeFromOutside:[0,d_h,d_b,16,1,100,100,0,0,100,100,0,10,d_d],horizontalRibbonFadeFromInside:[0,d_h,d_b,1,16,100,100,{start:0,end:1,keyedTo:'row',wraps:5},0,0,100,0,20,d_e],verticalRibbonFadeFromInside:[0,d_h,d_b,16,1,100,100,0,{start:0,end:1,keyedTo:'column',wraps:5},100,0,0,20,d_e],facetedFade:[50,d_i,d_b,4,4,300,0,{start:0,end:1,keyedTo:'pane',wraps:5,wrapMode:'triangle'},{start:0,end:1,keyedTo:'pane',wraps:7,wrapMode:'triangle'},50,100,100,10,'jumbled']},d_o=d_a.presets={};for(var d_p in d_n){var d_q=d_n[d_p];d_o[d_p]={allToFull:d_q[0],duration:d_q[1],dissolve:d_q[2],divisionsX:d_q[3],divisionsY:d_q[4],firstPaneSizeX:d_q[5],firstPaneSizeY:d_q[6],alignX:d_q[7],alignY:d_q[8],paneSeedSizeX:d_q[9],paneSeedSizeY:d_q[10],paneSeedContext:d_q[11],paneProgressDelay:d_q[12],paneOrderScheme:d_q[13]};}}});