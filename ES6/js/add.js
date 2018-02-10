
var todolist=[];
var listModule = {
        add () {
            var content = document.getElementById("list_type");
            var obj_list = {
    	        todo: "",
    	        done: false
            };
            if(content.value){
                var content = document.getElementById("list_type");
                obj_list.todo = content.value;
                todolist.push(obj_list);
                dataModule.saveData(todolist);
                content.value="";
                show();
            }
        },
        
        clear (){  
            localStorage.clear();  
            show();  
        },
        switchStyle (target,style,) {
		var box = document.getElementById(target);
		box.classList.add(style);
	},
	removeStyle (target,style,) {
		var box = document.getElementById(target);
		box.classList.remove(style);
	}  
	}
var dataModule = {			
	    saveData (data){
            localStorage.setItem("mytodolist",JSON.stringify(data));
	    },
	    loadData (){
            var hisTory = localStorage.getItem("mytodolist");
	        if(hisTory!==null){
		        return JSON.parse(hisTory);
	        }
	        else{
		        return [];
	        }
	    }
	}
function show() {
    var  tasks = document.getElementById("list_tasks"),
    finishedArea = document.getElementById("list_finished"),
    todoString = "",
    doneString = "";
    todolist = dataModule.loadData();
    for(let i=0;i<todolist.length;i++) {
    	if(!todolist[i].done){
    		todoString +="<li>"+"<input type='checkbox' onchange='update("+i+",\"done\", true)'>"
    		+todolist[i].todo+"<button onclick='remove("+i+")'>DEL</button>"+"</li>";
    	}
    	else{
    		doneString +="<li>"+"<input type='checkbox' onchange='update("+i+",\"done\", false)' checked>"
    		+todolist[i].todo+"<button onclick='remove("+i+")'>DEL</button>"+"</li>";
    	}
    }
    tasks.innerHTML = todoString;
    finishedArea.innerHTML = doneString;
}
function update(i,field,value) {
	todolist[i][field] =value;
	dataModule.saveData(todolist);
	show();
}
function remove(i) {
	todolist.splice(i,1);
	dataModule.saveData(todolist);
	show();
}
window.addEventListener("load",show());
document.getElementById("add").onclick = () =>{
	listModule.add();
}
document.getElementById("list_type").onkeydown = (event) => {
	if(event.keyCode == 13){
		listModule.add();
	}
}
document.getElementById("list_clear").onclick = () => {
	listModule.clear();
}
document.getElementById("list_switch_red").onclick = () =>{
	listModule.switchStyle("list_top","list_top_a");
}
document.getElementById("list_switch_blue").onclick = () =>{
	listModule.removeStyle("list_top","list_top_a");
}
