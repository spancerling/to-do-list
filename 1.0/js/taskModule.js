define(function(require,exports,module){
	var taskModule = {};
	
		taskModule.dele = function (element) {
    	    var l = element.parentNode,
                p = l.parentNode;
	    	    p.removeChild(l);      
        };
        taskModule.isFinished = function (element,area) {
    	    if(element.checked == true){
	    	    this.dele(element);	
	    	    var li = element.parentNode;
	    	    area.appendChild(li);
	            li.className = "task_finished";
	        }
	    };

            module.exports = taskModule;   
	
})