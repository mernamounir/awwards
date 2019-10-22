//section toggle
(function hamp() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

  new WOW().init();
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop:true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1),
  
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000,
  
    
  });



			//section winner 
			
			new Photostack( document.getElementById( 'photostack-2' ), {
				callback : function( item ) {
					//console.log(item)
				}
			} );

$(".icon-home").click(function(){
    
  let y= $("#articles").offset().top;
    
     $("html,body").animate({scrollTop:y},1000);
    
});





      var news; 
var category='technology'
       getPost();

          function getPost()
 {
    
    
    var req= new XMLHttpRequest; 
       
     req.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=4cc8944615594158b9b3b7da2a07bd37");
     
       req.onreadystatechange=function(){
           if (req.readyState == 4 && req.status == 200)
           {
                news=JSON.parse(req.response);
                  news =news.articles;
               console.log(news);
               dispalyPost();
           }
           
           
           
       }
       req.send();
}
  

  function dispalyPost(){
      
     var slideImages = [];
  for (var i = 0; i < news.length; i++) {
    slideImages.push({
      src: news[i].urlToImage,
        urlImage:news[i].url,
        titl:news[i].title,
        des:news[i].description
    })
  }
      console.log(slideImages);
  $('.jR3DCarouselGalleryDefault').jR3DCarousel({
  	width: 800,
  	height: 400,
    slides: slideImages
  });

  // Or with options
  
}
   
$(window).scroll(function(){
    
   let scrollNav= $("#articles").offset().top;
    let window1 =$(window).scrollTop();
    if (window1 > scrollNav - 50)
        {
            
              $(".nav-toggle").css("opacity",0);  
          $(".nav-trans").css("opacity",1);  
            
        }
    else
        {
             $(".nav-trans").css("opacity",0);  
              $(".nav-toggle").css("opacity",1);  
        
            
        }
    

    
})
 checkTest();

function checkTest(){
    
    
     if($(window).width() <= 990)
        { 
            alert("hola");
            
            
              $(".nav-toggle").css("display","block");
           $(".nav-toggle").css("opacity",1);
            
        }
    
}

    
//section register 

var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
var password_confirm = document.forms['vform']['password_confirm'];


var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');



email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function Validate() {

  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }

  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }

  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }

  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}

function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
  if (password.value === password_confirm.value) {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('pass_confirm_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}


$(".sign-up").click(function()
{
   
    $(".login").removeClass("show");
    $("#register").addClass("dis");
    
    
})

//section login
var form = document.createElement('form');
if ('checkValidity' in form && 'querySelector' in document && 'classList' in document.documentElement) {

  
    var inputs = document.querySelectorAll("[data-error]");

    if (inputs.length > 0) {

        var toggleErrorMessage = function(input, hasError) {
            var message = (input.value === '') ? input.dataset.empty : input.dataset.error;
            var oldMessage = document.getElementById("alert-" + input.name);
            var newMessage;

            if (hasError) {
                if (!oldMessage) {
                    newMessage = document.createElement("p");
                    newMessage.setAttribute('role', 'alert');
                    newMessage.classList.add('form__error');
                    newMessage.setAttribute('id', 'alert-' + input.name);
                } else {
                    newMessage = oldMessage;
                }


                newMessage.innerText = message;

                input.setAttribute('aria-describedby', 'alert-' + input.name);
                input.parentElement.appendChild(newMessage);

                input.parentElement.classList.add('has-error');
            } else {

                if (oldMessage) {
                    input.parentElement.removeChild(oldMessage);
                    input.removeAttribute('aria-describedby');
                    input.parentElement.classList.remove('has-error');
                }

            }
        };
      
        [].forEach.call(inputs, function(input) {

           
            input.addEventListener("blur", function(event) {

                if (event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON') {
                    return;
                }

                input.checkValidity();

                if (input.checkValidity()) {
                    input.classList.remove("error");
                    input.setAttribute("aria-invalid", "false");
                    toggleErrorMessage(input, false);
                } else {
                    input.classList.add("error");
                    input.setAttribute("aria-invalid", "true");
                    toggleErrorMessage(input, true);
                }
            });
        });
    }

   
    var togglePasswordButton = document.querySelector('[data-toggle-password]');

    if (togglePasswordButton) {
        var togglePasswordButtonText = togglePasswordButton.querySelector('span');
        var passwordField = document.querySelector('[data-toggle-password-field]');
        togglePasswordButton.removeAttribute('hidden');


        togglePasswordButton.addEventListener('click', function() {
            var isPressed = JSON.parse(this.getAttribute('aria-pressed'));

            if (isPressed) {
                passwordField.setAttribute('type', 'password');
                this.setAttribute('aria-pressed', false);
                togglePasswordButtonText.textContent = 'Show password';
            } else {
                passwordField.setAttribute('type', 'text');
                this.setAttribute('aria-pressed', true);
                togglePasswordButtonText.textContent = 'Hide password';
            }
        });
    }
  
  
   
    var messageComponents = document.querySelectorAll("[data-message]");

   
    if (messageComponents.length > 0) {
   
        [].forEach.call(messageComponents, function (message) {
            var messageButton = message.querySelector("[data-close-notification]");
        
            messageButton.removeAttribute('hidden');

         
            messageButton.addEventListener("click", function () {
                this.parentElement.hidden = true;
            });
        });
    }
}

$(".log-home").click(function()
{
    $(".login").addClass("show");
    $(".log-home").css("display","none");
     $(".nav-toggle").css("display","none");
    
})

$(".signin").click(function()
{
    $("#register").removeClass("dis");
    $(".login").addClass("show");
   
    
})
$(".close").click(function()
{
    $(".login").removeClass("show");
     $("#register").removeClass("dis");
    $(".log-home").css("display","block");
      $(".nav-toggle").css("display","block");
    
})

  $(".log").click(function(){
   
       $(".login").addClass("show");
        $(".log-home").css("display","none");
      
  })  
$(".reg").click(function(){
       $(".register1").addClass("dis");
        $(".log-home").css("display","none");
      
  })    
      
     
  $(".logI").click(function(){
   
       $(".login").addClass("show");
        $(".log-home").css("display","none");
      
  })  
$(".regI").click(function(){
       $(".register1").addClass("dis");
        $(".log-home").css("display","none");
      
  })  
 // section navigation
$("nav a").click(function(){
    
    let hrefNav =$(this).attr("href");
    let navN =$(hrefNav).offset().top;
      $("html,body").animate({scrollTop:navN} , 1000);
    
    
})
 
 
