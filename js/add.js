//声明全局变量将每个todo对象保存在数组里
var TODOLIST=[];
var listModule = {
        add:function (){
            var content = document.getElementById("list_type");
            var obj_list ={
    	        todo: "",/*保存内容*/
    	        done: false
            };
            if(content.value){
                var content = document.getElementById("list_type");
                obj_list.todo = content.value;
                TODOLIST.push(obj_list);
                dataModule.saveData(TODOLIST);
                content.value="";
                show();
            }
        },
        
        clear:function (){  
            localStorage.clear();  
            show();  
        },
        /**
         * [switchStyle]
         * @param  {[string]} target [应用样式的元素的id]
         * @param  {[string]} style  [class的名字]
         */
        switchStyle : function(target,style) {
		   var box = document.getElementById(target);
		   box.classList.add(style);
	    },
	    removeStyle : function(target,style) {
		   var box = document.getElementById(target);
		   box.classList.remove(style);
	    }  
	}
var dataModule = {
	    /**
	     * [saveData 把对象转换为json字符串储存在localStorage]
	     * @param  {[object]} data 
	     * @return {[string]}      
	     */
	    saveData: function(data){
            localStorage.setItem("mytodolist",JSON.stringify(data));
	    },
	    loadData: function(){
            var hisTory = localStorage.getItem("mytodolist");
	        if(hisTory!==null){
	        	//将json字符串转化为对象
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
    TODOLIST = dataModule.loadData();
    //从localStorage中获取并渲染呈现，用html一次赋值避免重复dom操作
    for(var i=0;i<TODOLIST.length;i++) {
    	//通过done属性在不同区域呈现
    	if(!TODOLIST[i].done){
    		todoString +="<li>"+"<input type='checkbox' onchange='update("+i+",\"done\", true)'>"
    		+TODOLIST[i].todo+"<button onclick='remove("+i+")'>DEL</button>"+"</li>";
    	}
    	else{
    		doneString +="<li>"+"<input type='checkbox' onchange='update("+i+",\"done\", false)' checked>"
    		+TODOLIST[i].todo+"<button onclick='remove("+i+")'>DEL</button>"+"</li>";
    	}
    }
    tasks.innerHTML = todoString;
    finishedArea.innerHTML = doneString;
}
//改变done的布尔值
function update(i,field,value) {
	TODOLIST[i][field] =value;
	dataModule.saveData(TODOLIST);
	show();
}
function remove(i) {
	TODOLIST.splice(i,1);
	dataModule.saveData(TODOLIST);
	show();
}
window.addEventListener("load",show());
document.getElementById("add").onclick = function(){
	listModule.add(); 
}
document.getElementById("list_type").onkeydown = function(event){
	if(event.keyCode == 13){
		listModule.add();
	}
}
document.getElementById("list_clear").onclick = function(){
	listModule.clear();
}
document.getElementById("list_switch_red").onclick = function(){
	listModule.switchStyle("list_top","list_top_a");
}
document.getElementById("list_switch_blue").onclick = function(){
	listModule.removeStyle("list_top","list_top_a");
}
