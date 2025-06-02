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
		"width":66,
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
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"}
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
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"I"}
			],
			offset: 0
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
				{shape:"M"},
				{shape:"spacerCol8"},
				{shape:"J"},
				{shape:"K"},
				{shape:"spacerCol8"},
				{shape:"J"},
				{shape:"L"},
				{shape:"spacerCol8"},
				{shape:"Q"},
				{shape:"K"},
				{shape:"spacerCol8"},
				{shape:"J"},
				{shape:"K"},
				{shape:"spacerCol8"},
				{shape:"O"}
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
				{shape:"N"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"F"},
				{shape:"spacerCol8"},
				{shape:"E"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"G"},
				{shape:"H"},
				{shape:"spacerCol8"},
				{shape:"P"}
			],
			offset: 477
		}
	}
];
let panel_ids = [
    {
        table_id: "row-1",
        table_rows: {
            0: ["1-155","1-154","1-127","1-126","1-99","1-98","1-71","1-70","1-43","1-42","1-15","1-14","3-14","3-15","3-42","3-43","3-70","3-71","3-98","3-99","3-126","3-127","3-154","3-155"],
            1: ["1-156","1-153","1-128","1-125","1-100","1-97","1-72","1-69","1-44","1-41","1-16","1-13","3-13","3-16","3-41","3-44","3-69","3-72","3-97","3-100","3-125","3-128","3-153","3-156"],
            2: ["1-157","1-152","1-129","1-124","1-101","1-96","1-73","1-68","1-45","1-40","1-17","1-12","3-12","3-17","3-40","3-45","3-68","3-73","3-96","3-101","3-124","3-129","3-152","3-157"],
            3: ["1-158","1-151","1-130","1-123","1-102","1-95","1-74","1-67","1-46","1-39","1-18","1-11","3-11","3-18","3-39","3-46","3-67","3-74","3-95","3-102","3-123","3-130","3-151","3-158"],
            4: ["1-159","1-150","1-131","1-122","1-103","1-94","1-75","1-66","1-47","1-38","1-19","1-10","3-10","3-19","3-38","3-47","3-66","3-75","3-94","3-103","3-122","3-131","3-150","3-159"],
            5: ["1-160","1-149","1-132","1-121","1-104","1-93","1-76","1-65","1-48","1-37","1-20","1-9","3-9","3-20","3-37","3-48","3-65","3-76","3-93","3-104","3-121","3-132","3-149","3-160"],
            6: ["1-161","1-148","1-133","1-120","1-105","1-92","1-77","1-64","1-49","1-36","1-21","1-8","3-8","3-21","3-36","3-49","3-64","3-77","3-92","3-105","3-120","3-133","3-148","3-161"]
        }
    },
    {
        table_id: "row-2",
        table_rows: {
            0: ["1-162","1-147","1-134","1-119","1-106","1-91","1-78","1-63","1-50","1-35","1-22","1-7","3-7","3-22","3-35","3-50","3-63","3-78","3-91","3-106","3-119","3-134","3-147","3-162"],
            1: ["1-163","1-146","1-135","1-118","1-107","1-90","1-79","1-62","1-51","1-34","1-23","1-6","3-6","3-23","3-34","3-51","3-62","3-79","3-90","3-107","3-118","3-135","3-146","3-163"],
            2: ["1-164","1-145","1-136","1-117","1-108","1-89","1-80","1-61","1-52","1-33","1-24","1-5","3-5","3-24","3-33","3-52","3-61","3-80","3-89","3-108","3-117","3-136","3-145","3-164"],
            3: ["1-165","1-144","1-137","1-116","1-109","1-88","1-81","1-60","1-53","1-32","1-25","1-4","3-4","3-25","3-32","3-53","3-60","3-81","3-88","3-109","3-116","3-137","3-144","3-165"],
            4: ["1-166","1-143","1-138","1-115","1-110","1-87","1-82","1-59","1-54","1-31","1-26","1-3","3-3","3-26","3-31","3-54","3-59","3-82","3-87","3-110","3-115","3-138","3-143","3-166"],
            5: ["1-167","1-142","1-139","1-114","1-111","1-86","1-83","1-58","1-55","1-30","1-27","1-2","3-2","3-27","3-30","3-55","3-58","3-83","3-86","3-111","3-114","3-139","3-142","3-167"],
            6: ["1-168","1-141","1-140","1-113","1-112","1-85","1-84","1-57","1-56","1-29","1-28","1-1","3-1","3-28","3-29","3-56","3-57","3-84","3-85","3-112","3-113","3-140","3-141","3-168"]
        }
    },
    {
        table_id: "row-3",
        table_rows: {
            0: ["2-41","2-40","2-21","2-20","2-1","4-1","4-20","4-21","4-40","4-41"],
            1: ["2-42","2-39","2-22","2-19","2-2","4-2","4-19","4-22","4-39","4-42"]
        }
    },
    {
        table_id: "row-4",
        table_rows: {
            0: ["2-43","2-38","2-23","2-18","2-3","4-3","4-18","4-23","4-38","4-43"],
            1: ["2-44","2-37","2-24","2-17","2-4","4-4","4-17","4-24","4-37","4-44"],
            2: ["2-45","2-36","2-25","2-16","2-5","4-5","4-16","4-25","4-36","4-45"],
            3: ["2-46","2-35","2-26","2-15","2-6","4-6","4-15","4-26","4-35","4-46"],
            4: ["2-47","2-34","2-27","2-14","2-7","4-7","4-14","4-27","4-34","4-47"],
            5: ["2-48","2-33","2-28","2-13","2-8","4-8","4-13","4-28","4-33","4-48"],
            6: ["2-49","2-32","2-29","2-12","2-9","4-9","4-12","4-29","4-32","4-49"],
            7: ["2-50","2-31","2-30","2-11","2-10","4-10","4-11","4-30","4-31","4-50"]
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
						tr += '<td class="lantern-panel lantern-panel-offset noborder" width="'+offset+'" height="'+panelHeight+'" data-panel-id="Spacer cell"></td>';
					}
				}
				// is blank row of spacers?
				if (panel.name.indexOf("spacer-row") >= 0){
					tr += '<td \
								class="lantern-panel noborder spacer-row-col spacer-col" \
								width="100%" \
								height="'+getSpacerSize(panel_type)+'"\
								data-panel-id="Spacer cell"\
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
							data-panel-id="Spacer cell"\
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

let isBlinking = false;
let blinkId = "";
const searchParams = new URLSearchParams(window.location.search);

// Check the query for blink param
const blink = searchParams.get('blink');
if(blink != undefined){
	console.log("Blink panel ID value is: " + blink);
	isBlinking = true;
	blinkId = blink;
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
	var tippy_panel_id = rendered_panel.getAttribute("data-panel-id");
	console.log(isBlinking);
	if(isBlinking){
	//console.log("Blink panel ID value is: " + blink);
		if (tippy_panel_id == blinkId){ rendered_panel.classList.add("blink"); }
		if (tippy_panel_id == "1-82"){
			var a = document.createElement('a');
			a.href = "https://www.youtube.com/watch?v=V1WhOWvlcjI";
			a.target = "_blank";
			a.classList.add("link");
			rendered_panel.appendChild(a);
  		}
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
