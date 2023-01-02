
function changeWpByUrl(url){
	document.getElementById('lybody').style.backgroundImage = 'url('+url+')';
}

function randomSwitch(){
	var tmp = 'pic'+Math.floor(Math.random()*localStorage['bgs[num]']+1).toString();
	if(localStorage['bgs[num]']!=1){
		while(tmp==localStorage['now']){
			tmp = 'pic'+Math.floor(Math.random()*localStorage['bgs[num]']+1).toString();
		}
	}
	localStorage['now'] = tmp;
	changeWpByUrl(localStorage['bgs['+localStorage['now']+']']);
}

function initBg(){
	changeWpByUrl(localStorage['bgs['+localStorage['now']+']']);
}

function noBg(){
	localStorage['now'] = '#';
	changeWpByUrl(localStorage['bgs['+localStorage['now']+']']);
}
function showMenu(){
	document.getElementById('nav-show').style.display = 'none';
	document.getElementById('nav').style.display = 'block';
}
function hideMenu(){
	document.getElementById('nav-show').style.display = 'block';
	document.getElementById('nav').style.display = 'none';
}
function goTop(){
	$("html,body").animate({scrollTop:0},500);
}

function showAIndex() {
	hList = new Array();
    var labelList = $("#post").children();
    for ( var i=0; i<labelList.length; i++ ) {
        if ( $(labelList[i]).is("h1") ) {
            hList.push({node: $(labelList[i]), id: i, x: 1});
        }

        if ( $(labelList[i]).is("h2") ) {
            hList.push({node: $(labelList[i]), id: i, x: 2});
        }

        if ( $(labelList[i]).is("h3") ) {
            hList.push({node: $(labelList[i]), id: i, x: 3});
        }
    }
	var content="<ul>";
	hList.forEach(function(htag){
		htag.node.before('<span id="_label'+htag.id+'"></span>')
		content+='<li class="th'+htag.x+'"'+'>'
		content+='<a href="#_label'+htag.id+'">'
		content+=htag.node.text();
		content+='</a></li>'
	});
	content+="</ul>"

	$('#cart').append(content);

	$("#cart a").on("click", function(e){
			e.preventDefault();
			var target = $(this.hash);
			$("body, html").animate(
					{'scrollTop': target.offset().top},
					500
					);
			});
}

function cartCg(){
	if(document.getElementById('cart-hide').innerHTML=='◀'){
		document.getElementById('cart-hide').innerHTML='▶';
		$('#cart ul')[0].style.display = 'block';
	}
	else{
		document.getElementById('cart-hide').innerHTML='◀';
		$('#cart ul')[0].style.display = 'none';
	}
}

function Gobk(){
	if(history.state!=null){
		history.back(-1);
	}
	else{
		location.href="/blogs";
	}
}
