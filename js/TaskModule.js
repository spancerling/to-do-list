define(function(){
	function TaskModule() {		
	}
	TaskModule.prototype = {
		dele: function (element) {
    	    var l = element.parentNode,
                p = l.parentNode;
	    	    p.removeChild(l);      
        },
        isFinished : function (element1,area) {
    	    if(element1.checked == true){
	    	    this.dele(element1);	
	    	    var li = element1.parentNode;
	    	    area.appendChild(li);
	            li.className = "task_finished";
	        }
	    }
    }
    return {
                TaskModule:TaskModule
	}
})