function p8clickTag(event){
	let cart=document.getElementById("cart");
	let gamelink=document.querySelector(".gamelink");
	cart.src="//paradoxskin.github.io/carts/"+gamesCart[this.id];
	gamelink.href="//paradoxskin.github.io/games/"+gamesName[this.id]+"_"+gamesCart[this.id]+".html";
}
function checkgame(){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			var tmpt=xmlhttp.responseText.split("\n");
			const mn=document.querySelector(".menu");
			for(var i=0;i<tmpt.length-1;i++){ // last line is empty
				var tmpls=tmpt[i].split("_");
				gamesName[i]=tmpls[0];
				gamesCart[i]=tmpls[1].slice(0,tmpls[1].length-5);
				var tmpli=document.createElement("li");
				var tmpspan=document.createElement("span");
				tmpspan.id=i;
				tmpspan.textContent=gamesName[i];
				tmpspan.addEventListener('click',p8clickTag);
				tmpli.appendChild(tmpspan);
				mn.appendChild(tmpli);
			}
		}
	}
	xmlhttp.open("GET","https://paradoxskin.github.io/game",true);
	xmlhttp.send();
}
