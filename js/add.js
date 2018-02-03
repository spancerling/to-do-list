var listModule = {
	add : function () {
	    var content = document.getElementById("list_type"),
              tasks = document.getElementById("list_tasks"),
       finishedArea = document.getElementById("list_finished");
	    if(content.value){
	    	var li = document.createElement("li"),
	    	 check = document.createElement("input"),
	    	   btn = document.createElement("button");
	    	   del = document.createTextNode("DEL");
               txt = document.createTextNode(content.value);
	    	btn.appendChild(del);
	    	check.setAttribute("type","checkbox");
	    	li.appendChild(check);
	        li.appendChild(txt);
	    	li.appendChild(btn);
	    	tasks.appendChild(li);
	    	content.value = "";
	    	btn.onclick = function () {
	    	    TaskModule.dele(btn);             
	    	}
	    	check.onclick = function() {
	    		TaskModule.isFinished(check,btn);
	    		finishedArea.appendChild(li);
	    		li.setAttribute("class","task_finished")
	    	}
	    	
	    }
	}
}
document.getElementById("add").onclick = function(){
	listModule.add();
}
document.getElementById("list_type").onkeydown = function(event){
	if(event.keyCode == 13){
		listModule.add();
	}
}

var TaskModule = (function(){
    function dele(element) {
    	var l = element.parentNode,
            p = l.parentNode;
	    	p.removeChild(l);      
    }
    function isFinished(element1,element2) {
    	if(element1.checked == true){
	    	dele(element2);		
	    }
    }
    return {
    	dele: dele,
    	isFinished: isFinished
    };
})();