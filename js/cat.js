$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

	$('.owl-carousel').owlCarousel({
		  center: true,
		loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

//ajax ;)
//taking posts from api web site

var Postrow=document.getElementById("Postsrow");
var link=document.getElementsByClassName("catego");


var category="business";

var posts="";

var req = new XMLHttpRequest();

var po="";

getposts();

cat();

function cat(){
	
	for(var i=0;i<link.length;i++){
		
		link[i].addEventListener("click",function(e){
			
		category=e.target.innerHTML;
		getposts(category);
		console.log(category);
		
		})

	}
}

function getposts(){
	
	var url = 'https://newsapi.org/v2/top-headlines?category='+category+'&apiKey=6274bc8dd4e14c89afdec25c6ec4a1b3';
	
	
	req.open("GET",url ,false);
	
	req.onreadystatechange = function(){
		console.log("55555555555");
		if(req.readyState == 4 && req.status == 200){
			posts=JSON.parse(req.response);
			po=posts.articles;
			console.log(po);
			console.log("55555555555");
			displayposts();
			
		}
		else{
			console.log("connection error");
			}
		
	}
	
	req.send();
	
	
}

console.log("55555555555");

displayposts();


function displayposts(){
	
	var temps="";
	
	for(var i=0;i<po.length;i++){
		
		temps+=`<div class="col-md-4"><div class="thumb position-relative"><img class="img-fluid" src="images/web-1045994__340.jpg"/></div><div class="details d-flex">
		<div class="short-details">
		<a class="date"  href=#>`+po[i].author+`</a>
/
<a class="date"  href=#>`+po[i].publishedAt+`</a>
<h6>`+po[i].title+`</h6>
<a class="social" href=#><i class="far fa-comment-alt px-2"></i>05 comment</a>
<a class="social" href=#><i class="far fa-heart px-2"></i>0 like</a>
</div>
</div>
</div>
		</div>`
	console.log(temps);
	
	}
	
	
	Postrow.innerHTML= temps;
	
	
}


