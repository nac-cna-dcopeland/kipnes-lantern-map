'use strict';

let panel_dimensions = {
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
let panel_groups = [
	{
		name: "row-1",
		config : {
			rows: 7,
			panels:[
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"}
			],
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
			panels:[
				{shape:"I"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"}
			],
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
			panels:[
				{shape:"O"},
				{shape:"spacerCol8"},
				{shape:"K"},
				{shape:"J"},
				{shape:"spacerCol8"},
				{shape:"K"},
				{shape:"Q"},
				{shape:"spacerCol8"},
				{shape:"L"},
				{shape:"J"},
				{shape:"spacerCol8"},
				{shape:"K"},
				{shape:"J"},
				{shape:"spacerCol8"},
				{shape:"M"}
			],
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
			panels:[
				{shape:"P"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"E"},
				{shape:"spacerCol8"},
				{shape:"F"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"H"},
				{shape:"G"},
				{shape:"spacerCol8"},
				{shape:"N"}
			],
			offset: 477
		}
	}
];
let panel_ids = [
    {
        table_id: "row-1",
        table_rows: {
            0: ["1-1-155","1-1-154","1-1-127","1-1-126","1-1-99","1-1-98","1-1-71","1-1-70","1-1-43","1-1-42","1-1-15","1-1-14","1-3-14","1-3-15","1-3-42","1-3-43","1-3-70","1-3-71","1-3-98","1-3-99","1-3-126","1-3-127","1-3-154","1-3-155"],
            1: ["1-1-156","1-1-153","1-1-128","1-1-125","1-1-100","1-1-97","1-1-72","1-1-69","1-1-44","1-1-41","1-1-16","1-1-13","1-3-13","1-3-16","1-3-41","1-3-44","1-3-69","1-3-72","1-3-97","1-3-100","1-3-125","1-3-128","1-3-153","1-3-156"],
            2: ["1-1-157","1-1-152","1-1-129","1-1-124","1-1-101","1-1-96","1-1-73","1-1-68","1-1-45","1-1-40","1-1-17","1-1-12","1-3-12","1-3-17","1-3-40","1-3-45","1-3-68","1-3-73","1-3-96","1-3-101","1-3-124","1-3-129","1-3-152","1-3-157"],
            3: ["1-1-158","1-1-151","1-1-130","1-1-123","1-1-102","1-1-95","1-1-74","1-1-67","1-1-46","1-1-39","1-1-18","1-1-11","1-3-11","1-3-18","1-3-39","1-3-46","1-3-67","1-3-74","1-3-95","1-3-102","1-3-123","1-3-130","1-3-151","1-3-158"],
            4: ["1-1-159","1-1-150","1-1-131","1-1-122","1-1-103","1-1-94","1-1-75","1-1-66","1-1-47","1-1-38","1-1-19","1-1-10","1-3-10","1-3-19","1-3-38","1-3-47","1-3-66","1-3-75","1-3-94","1-3-103","1-3-122","1-3-131","1-3-150","1-3-159"],
            5: ["1-1-160","1-1-149","1-1-132","1-1-121","1-1-104","1-1-93","1-1-76","1-1-65","1-1-48","1-1-37","1-1-20","1-1-9","1-3-9","1-3-20","1-3-37","1-3-48","1-3-65","1-3-76","1-3-93","1-3-104","1-3-121","1-3-132","1-3-149","1-3-160"],
            6: ["1-1-161","1-1-148","1-1-133","1-1-120","1-1-105","1-1-92","1-1-77","1-1-64","1-1-49","1-1-36","1-1-21","1-1-8","1-3-8","1-3-21","1-3-36","1-3-49","1-3-64","1-3-77","1-3-92","1-3-105","1-3-120","1-3-133","1-3-148","1-3-161"]
        }
    },
    {
        table_id: "row-2",
        table_rows: {
            0: ["1-1-162","1-1-147","1-1-134","1-1-119","1-1-106","1-1-91","1-1-78","1-1-63","1-1-50","1-1-35","1-1-22","1-1-7","1-3-7","1-3-22","1-3-35","1-3-50","1-3-63","1-3-78","1-3-91","1-3-106","1-3-119","1-3-134","1-3-147","1-3-162"],
            1: ["1-1-163","1-1-146","1-1-135","1-1-118","1-1-107","1-1-90","1-1-79","1-1-62","1-1-51","1-1-34","1-1-23","1-1-6","1-3-6","1-3-23","1-3-34","1-3-51","1-3-62","1-3-79","1-3-90","1-3-107","1-3-118","1-3-135","1-3-146","1-3-163"],
            2: ["1-1-164","1-1-145","1-1-136","1-1-117","1-1-108","1-1-89","1-1-80","1-1-61","1-1-52","1-1-33","1-1-24","1-1-5","1-3-5","1-3-24","1-3-33","1-3-52","1-3-61","1-3-80","1-3-89","1-3-108","1-3-117","1-3-136","1-3-145","1-3-164"],
            3: ["1-1-165","1-1-144","1-1-137","1-1-116","1-1-109","1-1-88","1-1-81","1-1-60","1-1-53","1-1-32","1-1-25","1-1-4","1-3-4","1-3-25","1-3-32","1-3-53","1-3-60","1-3-81","1-3-88","1-3-109","1-3-116","1-3-137","1-3-144","1-3-165"],
            4: ["1-1-166","1-1-143","1-1-138","1-1-115","1-1-110","1-1-87","1-1-82","1-1-59","1-1-54","1-1-31","1-1-26","1-1-3","1-3-3","1-3-26","1-3-31","1-3-54","1-3-59","1-3-82","1-3-87","1-3-110","1-3-115","1-3-138","1-3-143","1-3-166"],
            5: ["1-1-167","1-1-142","1-1-139","1-1-114","1-1-111","1-1-86","1-1-83","1-1-58","1-1-55","1-1-30","1-1-27","1-1-2","1-3-2","1-3-27","1-3-30","1-3-55","1-3-58","1-3-83","1-3-86","1-3-111","1-3-114","1-3-139","1-3-142","1-3-167"],
            6: ["1-1-168","1-1-141","1-1-140","1-1-113","1-1-112","1-1-85","1-1-84","1-1-57","1-1-56","1-1-29","1-1-28","1-1-1","1-3-1","1-3-28","1-3-29","1-3-56","1-3-57","1-3-84","1-3-85","1-3-112","1-3-113","1-3-140","1-3-141","1-3-168"]
        }
    },
    {
        table_id: "row-3",
        table_rows: {
            0: ["1-2-41","1-2-40","1-2-21","1-2-20","1-2-1","1-4-1","1-4-20","1-4-21","1-4-40","1-4-41"],
            1: ["1-2-42","1-2-39","1-2-22","1-2-19","1-2-2","1-4-2","1-4-19","1-4-22","1-4-39","1-4-42"]
        }
    },
    {
        table_id: "row-4",
        table_rows: {
            0: ["1-2-43","1-2-38","1-2-23","1-2-18","1-2-3","1-4-3","1-4-18","1-4-23","1-4-38","1-4-43"],
            1: ["1-2-44","1-2-37","1-2-24","1-2-17","1-2-4","1-4-4","1-4-17","1-4-24","1-4-37","1-4-44"],
            2: ["1-2-45","1-2-36","1-2-25","1-2-16","1-2-5","1-4-5","1-4-16","1-4-25","1-4-36","1-4-45"],
            3: ["1-2-46","1-2-35","1-2-26","1-2-15","1-2-6","1-4-6","1-4-15","1-4-26","1-4-35","1-4-46"],
            4: ["1-2-47","1-2-34","1-2-27","1-2-14","1-2-7","1-4-7","1-4-14","1-4-27","1-4-34","1-4-47"],
            5: ["1-2-48","1-2-33","1-2-28","1-2-13","1-2-8","1-4-8","1-4-13","1-4-28","1-4-33","1-4-48"],
            6: ["1-2-49","1-2-32","1-2-29","1-2-12","1-2-9","1-4-9","1-4-12","1-4-29","1-4-32","1-4-49"],
            7: ["1-2-50","1-2-31","1-2-30","1-2-11","1-2-10","1-4-10","1-4-11","1-4-30","1-4-31","1-4-50"]
        }
    }
];

let spacerCol4 = 4, spacerRow4 = 4;
let spacerCol5 = 5, spacerRow5 = 5;
let spacerCol6 = 6, spacerRow6 = 6;
let spacerCol7 = 7, spacerRow7 = 7;
let spacerCol8 = 8, spacerRow8 = 8;
let spacerCol9 = 9, spacerRow9 = 9;
let spacerCol10 = 10, spacerRow10 = 10;
let spacerCol11 = 11, spacerRow11 = 11;
let spacerCol12 = 12, spacerRow12 = 12;

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
	} else {
		tblClass = "panel-table";
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
			//console.log(toString(panel.config.panels[j].shape));
			var panel_type;

			if (panel.name.indexOf("spacer-row") == -1){
				const current_panel = Object.entries(panel.config.panels[j]);

				for (const [key, val] of current_panel) {
					panel_type = val;
				}
			} else{
				panel_type = panel.config.panels[j];
			}

			//console.log(panel_type);
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
					tr += '<td \
								class="lantern-panel noborder spacer-row-col spacer-col" \
								width="100%" \
								height="'+getSpacerSize(panel_type)+'"\
							></td>';
				} else {
					tr += '<td \
								class="lantern-panel lantern-led-panel" \
								style="max-width:'+panel_dimensions[panel_type].width+'px;" \
								width="'+panel_dimensions[panel_type].width+'" \
								height="'+panel_dimensions[panel_type].height+'"\
							>'+panel_type+'</td>';
				}
			} else {
				// is spacer cell
				//console.log("hello-3");
				var panelWidth;
				panelWidth = getSpacerSize(panel_type);
				tr += '<td \
							class="lantern-panel noborder spacer-col" \
							style="max-width:'+panelWidth+'px;" \
							width="'+panelWidth+'"\
						>'+panel_type+'</td>';
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
	//console.log("test1");
	build_table(panel);
}

const tables = document.querySelectorAll(".panel-table");

for (const table of tables) {
	let table_row_class = table.getAttribute("class");
	let table_row_id = table.getAttribute("id");

	let panel_ids_each = Object.entries(panel_ids);

	for (const [panel_id_key, panel_id] of panel_ids_each) {
		//console.log(panel_config,panel);
		//console.log(panel_id.table_id,table_row_id);
		if (panel_id.table_id.toString() == table_row_id.toString()){
			var current_table_panel_id = panel_id_key;
		}
	}

	for (var i = 0, row; row = table.rows[i]; i++) {
		//iterate through rows
		//rows would be accessed using the "row" variable assigned in the for loop
		var table_cell_panels = row.querySelectorAll(".lantern-led-panel");
		for (var j = 0, table_cell_panel; table_cell_panel = table_cell_panels[j]; j++) {

			let table_cell_class = table_cell_panel.getAttribute("class");
			if (table_cell_class.indexOf("spacer-col") == -1){
				//iterate through columns
				//columns would be accessed using the "col" variable assigned in the for loop
				let panel_id = "test"+i+"-"+j;
				//console.log(j);
				if (panel_ids[current_table_panel_id].table_rows[i][j] === undefined){
					console.log("busted: "+i+"-"+j);
				}

				//console.log(panel_ids[current_table_panel_id].table_rows[i][j]);
				table_cell_panel.setAttribute("data-panel-id",panel_ids[current_table_panel_id].table_rows[i][j]);
			}
		}
	}  
}

const rendered_panels = document.querySelectorAll(".lantern-panel");
const parent_container = document.querySelector(".bounding-box");
const parent_container_styles = window.getComputedStyle(parent_container);
const parent_container_pos = document.querySelector(".bounding-box").getBoundingClientRect();
rendered_panels.forEach(rendered_panel => {
	//console.log('rendered_panel_coords: x:', rendered_panel.offsetLeft,'y:', rendered_panel.offsetTop);
	const rendered_panel_pos = rendered_panel.getBoundingClientRect();
	let rendered_panel_class = rendered_panel.getAttribute("class");

	// Calculate the top and left positions for each cell
	const top = Math.abs(Math.floor(parent_container_pos.top - rendered_panel_pos.top));
	const left = Math.abs(Math.floor((parent_container_pos.left + parseFloat(parent_container_styles.paddingLeft)) - rendered_panel_pos.left));
	if (rendered_panel_class.indexOf("spacer-col") >= 0){
		var tippy_panel_id = "Spacer cell";
	} else {
		var tippy_panel_id = rendered_panel.getAttribute("data-panel-id");
	}
	rendered_panel.setAttribute("data-tippy-content", tippy_panel_id+"<br>"+"x : "+left+", y : "+top);
});

const widest_table = document.querySelector("#row-1");
const widest_table_styles = window.getComputedStyle(widest_table);
//console.log(widest_table_styles.width);
document.body.style.width = widest_table_styles.width;

tippy('.lantern-panel', {
	arrow: false,
	placement: 'top',
	allowHTML: true
});
