require(["ListModule"],function(w){

document.getElementById("add").onclick = function(){
	new w.ListModule().add();
}
document.getElementById("list_type").onkeydown = function(event){
	if(event.keyCode == 13){
	new w.ListModule().add();
	}
}
document.getElementById("list_switch_red").onclick = function(){
	new w.ListModule().switchStyle("list_top","list_top_a");
}
document.getElementById("list_switch_blue").onclick = function(){
	new w.ListModule().removeStyle("list_top","list_top_a");
}
})


