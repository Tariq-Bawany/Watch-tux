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
    img: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/470140882_122151403340301123_5614018753324020199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sEdVu8zyWpIQ7kNvgHRu7sm&_nc_oc=AdhFmnisvwXOXjUdKkX9_uXzwrezEQS_XOLab_5MkbtKn1UjaN8ZrJASj9wmrhogttY&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=A2ckoZ3q3wP8oECftR9qj3L&oh=00_AYCacyViA-T-ldpmDniWhTOULZVF63YX_II2912PotmtJg&oe=67720260",
    desc: "Coming Soon",
},
{
    id: "Omega",
    name: "Omega Speedmaster Mark ii",
    img: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/470212497_122151404264301123_2487606839837565210_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tM_lflz3vKUQ7kNvgHUj1HP&_nc_oc=AdjkoWl6rLlSDV_YtluYXl4w-j765STj9Iz65JZ9UY87nDOy-l1dTRCEud0eVDMcGeA&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=A_OQxmK3Cp0lcz3hAmk_5Bj&oh=00_AYD_nIAqRHMPEe0g7Zm40TifGjg4urTJavD07FgwbYcMWg&oe=6772056E",
    desc: "Coming Soon",

},
{
    id: "Rolex",
    name: "Rolex DayDate",
    img: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/469574010_122150653760301123_4148246566049076647_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QGBbyXTyX_AQ7kNvgHup8ZX&_nc_oc=AdgJJM_0NIdnwJDbTq0C_ilnRdi_mSX0Iq5DgdI3hS3uyZoOK9WfLBeHvVY9_KwOLvs&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=AitlBJPBxXzrPi-cDEAsRQn&oh=00_AYCr-ZHTjXuZPnx7kcrmmVef6dqo1Om8BtC76KhbZbp-7g&oe=6772288B",
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
