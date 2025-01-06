import { db, doc, getDoc } from "../config/firebase.js";
import { cards, renderProducCard, } from "../script.js";



// featured cards

var products = document.getElementById("products")
var productDetailImages = document.getElementById("product-detail-images")
var productDetailInfo = document.getElementById("product-detail-info")
var imgDetail;


// renderProducCard()
async function queryParamAndRenderCard(params) {
    try {

        // query params || getting id of product from url and then import productss from collection show the related product images and description
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const indexno = urlParams.get('id').indexOf('|');
        const productDetails = productId.split('|')

        const docRef = doc(db, productDetails[0], productDetails[1]);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            imgDetail = docSnap.data()
            // console.log(imgDetail);
            // console.log("Document data:", docSnap.data());

        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            alert("In maintenance!")
        }
        productDetailImages.innerHTML = `
        <img id="main-image" src="${imgDetail.img}" alt="${imgDetail.name}">
        <div class="image-thumbnails">
            <img src="${imgDetail.img}" alt="${imgDetail.name}-1" onclick="changeImage(this)">
            <img src="${imgDetail.hover}" alt="${imgDetail.name}-2" onclick="changeImage(this)">
            
        </div>
`
        const phoneNumber = '923219315177'; // Your WhatsApp number in international format (without + or spaces)

        const message = encodeURIComponent(`Hello, I am interested in your watch => ${imgDetail.name}`); // Default message

        productDetailInfo.innerHTML = `
        <h1>${imgDetail.name}</h1>
            <p>Price: <strong>${imgDetail.price}</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <a 
                href="https://wa.me/${phoneNumber}?text=${message}" 
                class="whatsapp-button" 
                target="_blank">
                Inquire on WhatsApp
            </a>
`


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

}


// console.log(imgDetail);

queryParamAndRenderCard()






// Change main image on thumbnail hover click
function changeImage(thumbnail) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = thumbnail.src;
}

var viewAllCollection = document.getElementById("view-all-collection")
viewAllCollection.addEventListener('click', () => {
    window.location.href = "../collection/collection.html"
})

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
// Auto close sidebar on larger screens
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// console.log(productId);

// // declaring function globally so HTML can access it 
window.changeImage = changeImage;
window.toggleSidebar = toggleSidebar;
