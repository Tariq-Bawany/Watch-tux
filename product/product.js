import { productss, } from "../collection/collection.js";
import { cards, renderProducCard, } from "../script.js";

// console.log(productss);


// featured cards
//Products cards Render 

// Procuts card render 
var products = document.getElementById("products")

console.log(cards.length);

// renderProducCard()

// query params || getting id of product from url and then import productss from collection show the related product images and description
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
var categoryName = productId.slice(0, productId.length - 2)
var mainImageId = productId.charAt(productId.length - 1)

var productDetailImages = document.getElementById("product-detail-images")
var productDetailInfo = document.getElementById("product-detail-info")

productDetailImages.innerHTML = `
    <img id="main-image" src="${productss[categoryName][mainImageId].image}" alt="${productss[categoryName][0].name}">
        <div class="image-thumbnails">
            <img src="${productss[categoryName][mainImageId].image}" alt="${productss[categoryName][0].name}-1" onclick="changeImage(this)">
            <img src="${productss[categoryName][mainImageId].hover}" alt="${productss[categoryName][0].name}-2" onclick="changeImage(this)">
        </div>
`
const phoneNumber = '923219315177'; // Your WhatsApp number in international format (without + or spaces)

const message = encodeURIComponent(`Hello, I am interested in your watch => ${productss[categoryName][0].name}`); // Default message

productDetailInfo.innerHTML = `
<h1>${productss[categoryName][0].name}</h1>
            <p>Price: <strong>${productss[categoryName][0].price}</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <a 
                href="https://wa.me/${phoneNumber}?text=${message}" 
                class="whatsapp-button" 
                target="_blank">
                Inquire on WhatsApp
            </a>
`

// Change main image on thumbnail hover click
function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src;
}

var viewAllCollection = document.getElementById("view-all-collection")
viewAllCollection.addEventListener('click', () => {
    window.location.href = "../collection/collection.html"
})



// console.log(productId);

// // declaring function globally so HTML can access it 
window.changeImage = changeImage;
