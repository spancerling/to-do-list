//创建数组存放每个todo对象
var todolist = [];
var listModule = {
    add () {
        var content = document.getElementById("list_type");
        var obj_list = {
    	        todo: "",//todo事项的内容
    	        done: false
            };
            if(content.value){
                var content = document.getElementById("list_type");
                obj_list.todo = content.value;
                todolist.push(obj_list);
                dataModule.saveData(todolist);
                content.value = "";
                show();
            }
    },
    clear (){  
        localStorage.clear();  
        show();  
    },
    /**
     * [switchStyle]
     * @param  {[string]} target [要改变样式的元素的id名]
     * @param  {[string]} style  [元素要添加的class名]
     */
    switchStyle (target,style,) {
		var box = document.getElementById(target);
		box.classList.add(style);
	},
     /**
     * [removeStyle]
     * @param  {[string]} target [要改变样式的元素的id名]
     * @param  {[string]} style  [元素要移除的class名]
     */
	removeStyle (target,style,) {
		var box = document.getElementById(target);
		box.classList.remove(style);
	}  
}
var dataModule = {
    /**
     * [saveData 保存到localStorage]
     * @param  {[object]} data []
     * @return {[string]}      [把对象转换成json字符串]
     */			
	saveData (data){
        localStorage.setItem("mytodolist",JSON.stringify(data));
	},
    /**
     * [loadData 从localStorage提取数据]
     * @return {[object]} [把json字符串转换成对象]
     */
	loadData (){
        var hisTory = localStorage.getItem("mytodolist");
	    if(hisTory !== null){
		    return JSON.parse(hisTory);
	    }
	    else{
		    return [];
	    }
	}
}
function show() {
    var    tasks = document.getElementById("list_tasks"),
    finishedArea = document.getElementById("list_finished"),
      todoString = "",
      doneString = "";
    todolist = dataModule.loadData();
    for(let i = 0;i < todolist.length;i++) {
        //根据done属性将todo事项加入到不同区域
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
/**
 * [update 根据checkbox的变化改变done属性的布尔值]
 * @param  {[number]} i    
 * @param  {[string]} field [done属性]
 * @param  {[boolean]} value 
 */
function update(i,field,value) {
	todolist[i][field] = value;
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
