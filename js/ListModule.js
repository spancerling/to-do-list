define(["TaskModule"],function(w){
	function ListModule () {
	}
    ListModule.prototype = {
	add : function () {
	    var content = document.getElementById("list_type"),
              tasks = document.getElementById("list_tasks"),
       finishedArea = document.getElementById("list_finished");
	    if(content.value){
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
	    	content.value = "";
	    	btn.onclick = function () {
	    	    new w.TaskModule().dele(btn);             
	    	}
	    	check.onclick = function() {
	    		new w.TaskModule().isFinished(check,finishedArea);
	    	}
	    	
	    }
	},
	switchStyle : function(target,style) {
		var box = document.getElementById(target);
		box.classList.add(style);
	},
	removeStyle : function(target,style) {
		var box = document.getElementById(target);
		box.classList.remove(style);
	}
}
    return {
    	ListModule: ListModule
    }
})