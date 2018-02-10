define(function(require,exports,module){
	//引入todo任务模块的功能
	var taskModule = require("taskModule");
	var ListModule = {};
    ListModule.add = function () {
	    var content = document.getElementById("list_type"),
              tasks = document.getElementById("list_tasks"),
       finishedArea = document.getElementById("list_finished");
	    if(content.value){
	    	//添加每项todo
	    	var li = document.createElement("li"),
	    	 check = document.createElement("input"),
	    	   btn = document.createElement("button"),
	    	   del = document.createTextNode("DEL"),
               txt = document.createTextNode(content.value);

	    	btn.appendChild(del);
	    	check.type = "checkbox";
	    	li.appendChild(check);
	        li.appendChild(txt);
	    	li.appendChild(btn);
	    	tasks.appendChild(li);
	    	//清空输入框
	    	content.value = "";
	    	//为按钮添加事件，用事件委托提升性能
	    	li.addEventListener("click",function(event){
	    		var target = event.target;
	    		switch(target.nodeName.toLowerCase()){
	    			case "button":
	    			    btn.onclick = null;
	    			    check.onclick = null;
	    	            taskModule.dele(btn);             
	                break;
	                case "input":
	                    taskModule.isFinished(check,finishedArea);
	                break;
	    		}
	    	});
	    	
	    }
	};
    /**
     * [switchStyle]
     * @param  {[string]} target [要赋予样式元素的id]
     * @param  {[string]} style  [class名]
     */
	ListModule.switchStyle = function(target,style) {
		var box = document.getElementById(target);
		box.classList.add(style);
	},
	ListModule.removeStyle = function(target,style) {
		var box = document.getElementById(target);
		box.classList.remove(style);
	};

    module.exports = ListModule;
})