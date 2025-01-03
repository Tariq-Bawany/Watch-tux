import {  } from "./collection/collection.js"
// Navbar scroll effect
window.addEventListener('scroll', () => {
    var nav = document.querySelector('nav');
    var navLinks = document.querySelectorAll('nav a');
    var logo = document.getElementById('logo')

    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0B2238  ';
        // Change the color of each <a> tag to white
        navLinks.forEach(link => {
            link.style.color = '#fff';
        });
        logo.style.color = "#fff"
    } else {
        nav.style.backgroundColor = '#001526';
        // Change the color of each <a> tag to white
        navLinks.forEach(link => {
            link.style.color = '#fff';
        });
        logo.style.color = "#fff"


    }
});

// what's app message 
// const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
//Products cards Render 
var cards = [{
    id: "Patek-Philippe",
    name: "PP Geneve",
    img: "https://github.com/Tariq-Bawany/Watch-tux-assets/blob/main/PatekPhilippe/PP%20Geneve/PP-Geneve-05.jpg?raw=true",
    desc: "Coming Soon",
},
{
    id: "Omega",
    name: "Omega Speedmaster Mark ii",
    img: "https://github.com/Tariq-Bawany/Watch-tux-assets/blob/main/Omega/Omega-Speedmaster-Mark-ii/Omega-Speedmaster-Mark-ii-03.jpg?raw=true",
    desc: "Coming Soon",

},
{
    id: "Rolex",
    name: "Rolex GMT ii Gold",
    img: "https://github.com/Tariq-Bawany/Watch-tux-assets/blob/main/Rolex/Rolex-GMT-ii-Gold/Rolex-GMT-ii-Gold-01.jpg?raw=true",
    desc: "Coming Soon",

},
]
// Procuts card render 
var products = document.getElementById("products")
function renderProducCard() {
    cards.forEach((val, i) => {
        try {
            products.innerHTML += `
        <div class="featured-product-card">
                <img  src="${val.img}" alt="${val.name}-Watch" >
                <h3>${val.name}</h3>
                <p>${val.desc}</p>
                <button onclick="viewProduct('${val.id}|${val.name}')">View Details</button>
        </div>
        `
        } catch (error) {
            const erroeCode = error.code
            const erroeMessage = error.message
        }

    })



}
renderProducCard()
// viewProduct import from collection.js and not called here 

function viewProduct(imgID) {
    // console.log(imgID);
    window.location.href = `/product/product.html?id=${imgID}`
}
// Image slider functionality
function initImageSlider() {
    try {
        const images = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    // Show first image initially
    images[0].classList.add('active');

    // Change image every 1.5 seconds
    setInterval(() => {
        // Remove active class from current image
        images[currentImageIndex].classList.remove('active');

        // Move to next image or back to first
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Add active class to new current image
        images[currentImageIndex].classList.add('active');
    }, 2000);
    } catch (error) {
        const errorCode= error.code
        const errorMessage= error.message
    }
    
}

var viewAllCollection = document.getElementById("view-all-collection")
viewAllCollection.addEventListener('click', () => {
    window.location.href = "./collection/collection.html"
})
// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initImageSlider);
export {cards,renderProducCard }
