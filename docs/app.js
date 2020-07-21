'use strict';

var panel_dimensions = {
	E:{
		"width":66,
		"height":36
	},
	F:{
		"width":66,
		"height":36
	},
	G:{
		"width":72,
		"height":36
	},
	H:{
		"width":72,
		"height":36
	},
	I:{
		"width":48,
		"height":36
	},
	J:{
		"width":72,
		"height":55
	},
	K:{
		"width":72,
		"height":55
	},
	L:{
		"width":66,
		"height":55
	},
	M:{
		"width":105,
		"height":55
	},
	N:{
		"width":105,
		"height":36
	},
	O:{
		"width":105,
		"height":55
	},
	P:{
		"width":105,
		"height":36
	},
	Q:{
		"width":66,
		"height":55
	}
};
var panel_groups = [
	{
		name: "row-1",
		config : {
			rows: 7,
			panels:["F","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E"],
			offset: 0
		}
	},
	{
		name: "spacer-row-1",
		config : {
			rows: 1,
			panels:["spacerRow8"],
			offset: 0
		}
	},
	{
		name: "row-2",
		config : {
			rows: 7,
			panels:["I","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","H","E"],
			offset: 18
		}
	},
	{
		name: "spacer-row-2",
		config : {
			rows: 1,
			panels:["spacerRow8"],
			offset: 477
		}
	},
	{
		name: "row-3",
		config : {
			rows: 2,
			panels:["O","spacerCol8","K","J","spacerCol8","K","Q","spacerCol8","L","J","spacerCol8","K","J","spacerCol8","M"],
			offset: 477
		}
	},
	{
		name: "spacer-row-3",
		config : {
			rows: 1,
			panels:["spacerRow8"],
			offset: 477
		}
	},
	{
		name: "row-4",
		config : {
			rows: 8,
			panels:["P","spacerCol8","H","G","spacerCol8","H","E","spacerCol8","F","G","spacerCol8","H","G","spacerCol8","N"],
			offset: 477
		}
	}
];
var spacerCol4 = 4, spacerRow4 = 4;
var spacerCol5 = 5, spacerRow5 = 5;
var spacerCol6 = 6, spacerRow6 = 6;
var spacerCol7 = 7, spacerRow7 = 7;
var spacerCol8 = 8, spacerRow8 = 8;
var spacerCol9 = 9, spacerRow9 = 9;
var spacerCol10 = 10, spacerRow10 = 10;
var spacerCol11 = 11, spacerRow11 = 11;
var spacerCol12 = 12, spacerRow12 = 12;

function getSpacerSize(size){
	return eval(size);
}

function calculateCoords(el){
	var x = el.offsetLeft;
	return "x:"+x+",y:test2";
}

function build_table(panel){
	var tblClass = "";
	var styleAttr = "";
	if (panel.name.indexOf("spacer-row") >= 0){
		tblClass = "spacer-row";
		styleAttr = "margin-left:"+panel.config.offset+"px;height:8px;";
	}
	var id = '<table style="'+styleAttr+'" id="'+panel.name+'" class="'+tblClass+'"><tbody>';
	var placeholder='10';
	var tr='';
	//console.log(typeof(panel.config.rows));
	for(var i=0;i<panel.config.rows;i++){
		tr = '<tr>';
		var j;
		var offset = 0;
		for(j in panel.config.panels){
			//console.log("hello-1");
			var panel_type = panel.config.panels[j];
			var panel_dimension;
			// is not spacer cell?
			if (panel_type.indexOf("spacerCol") == -1){
				//console.log(panel_dimensions[panel_type].width);
				// is first cell in row?
				if (j == 0){
					offset = panel.config.offset;
					var panelHeight;
					if (panel.name.indexOf("spacer-row") == -1 && offset >= 1){
						panelHeight = panel_dimensions[panel_type].height;
						tr += '<td class="lantern-panel lantern-panel-offset noborder" width="'+offset+'" height="'+panelHeight+'"></td>';
					}
				}
				// is blank row of spacers?
				if (panel.name.indexOf("spacer-row") >= 0){
					tr += '<td class="lantern-panel noborder spacer-row-col spacer-col" width="100%" height="'+getSpacerSize(panel_type)+'"></td>';
				} else {
					tr += '<td class="lantern-panel" style="max-width:'+panel_dimensions[panel_type].width+'px;" width="'+panel_dimensions[panel_type].width+'" height="'+panel_dimensions[panel_type].height+'">'+panel.config.panels[j]+'</td>';
				}
			} else {
				// is spacer cell
				//console.log("hello-3");
				var panelWidth;
				panelWidth = getSpacerSize(panel_type);
				tr += '<td class="lantern-panel noborder spacer-col" style="max-width:'+panelWidth+'px;" width="'+panelWidth+'">'+panel.config.panels[j]+'</td>';
			}
			//console.log("hello-4");
		}
		tr +='</tr>';
		id += tr;
	}
	id += '</tbody></table>';
	return document.getElementById('app').innerHTML += id;
}

const panel_groups_each = Object.entries(panel_groups);

for (const [panel_key, panel] of panel_groups_each) {
	//console.log(panel_config,panel);
	console.log("test1");
	build_table(panel);
}

const rendered_panels = document.querySelectorAll(".lantern-panel");
const parent_container = document.querySelector(".bounding-box");
const parent_container_styles = window.getComputedStyle(parent_container);
const parent_container_pos = document.querySelector(".bounding-box").getBoundingClientRect();
rendered_panels.forEach(rendered_panel => {
	//console.log('rendered_panel_coords: x:', rendered_panel.offsetLeft,'y:', rendered_panel.offsetTop);
	const rendered_panel_pos = rendered_panel.getBoundingClientRect();

	// Calculate the top and left positions for each cell
	const top = parent_container_pos.top - rendered_panel_pos.top;
	const left = (parent_container_pos.left + parseFloat(parent_container_styles.paddingLeft)) - rendered_panel_pos.left;
	rendered_panel.setAttribute("data-tippy-content", "x : "+Math.abs(Math.floor(left))+", y : "+Math.abs(Math.floor(top)));
});

const widest_table = document.querySelector("#row-1");
const widest_table_styles = window.getComputedStyle(widest_table);
//console.log(widest_table_styles.width);
document.body.style.width = widest_table_styles.width;

tippy('.lantern-panel', {
	arrow: false,
	placement: 'top'
});
