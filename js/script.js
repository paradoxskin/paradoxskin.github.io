function p8clickTag(data){
	let cart=document.getElementById("cart");
	cart.src=data.id
}
function checkgame(){
	var tmp=jQuery.get("https://paradoxskin.github.io/game").responseText.split('\n');
	for(var i=0;i<tmp.length();i++){
		var tmpls=i.split("_")
		gamesName[i]=tmpls[0];
		gamesCart[i]=tmpls[1].slice(0,tmpls[1].length-5);
	}
}
