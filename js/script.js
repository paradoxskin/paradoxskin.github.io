function p8clickTag(data){
	let cart=document.getElementById("cart");
	cart.src=data.id
}
function checkgame(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var tmpt=xmlhttp.responseText.split("\n");
			for(var i=0;i<tmpt.length-1;i++){ // last line is empty
				var tmpls=tmpt[i].split("_");
				gamesName[i]=tmpls[0];
				gamesCart[i]=tmpls[1].slice(0,tmpls[1].length-5);
			}
		}
	}
	xmlhttp.open("GET","https://paradoxskin.github.io/game",true);
	xmlhttp.send();
}
