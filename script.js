// Navbar menubar responsive section

let menu = document.querySelector('#menubar');
let navbar= document.querySelector('.navbar');


menu.onclick= () =>{
  
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll= () =>{
  
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

// home Section Slide

let slides = document.querySelectorAll('.slide_container');
let index = 0;

function next(){
 
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    

}

function prev(){
 
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    

}

// feature products section

function functio(small){

    var full = document.getElementById("imagebox")
    full.src = small.src
}


document.querySelectorAll('.feature_img_1').forEach(image_1 =>{

image_1.addEventListener('click', () =>{

   var src =image_1.getAttribute('src');
   document.querySelector('.big_image1').src = src;
});
});

document.querySelectorAll('.feature_img_2').forEach(image_2 =>{

    image_2.addEventListener('click', () =>{
    
       var src =image_2.getAttribute('src');
       document.querySelector('.big_image2').src = src;
    });
    });