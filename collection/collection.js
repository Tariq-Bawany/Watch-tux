// script.js
// products is a object that has array of objects
// import { collection, db,  getDocs, } from "./config/firebase.js";

import { collection, db, getDocs, } from "../config/firebase.js";


var productss = {
}


async function getDataFromFirestore() {

    try {
        const categories = ['Rolex', 'Omega', 'CURREN', 'SKMEI', 'Patek-Philippe']
        for (const category of categories) {
            productss[category] = []; // Initialize an empty array for each category

            // Fetch all documents in the collection
            const querySnapshot = await getDocs(collection(db, category));

            querySnapshot.forEach((doc) => {
                productss[category].push(doc.data()); // Push each document data to the respective category array
            });
        }
        document.getElementById('loading-spinner').style.display = "none";
        document.getElementById('firebase-content').style.display = "initial";

    } catch (error) {
        const errorCode =error.code
        const errorMessage =error.message

    }
    renderProdcutsFromFirebase()
}

function renderProdcutsFromFirebase() {
    try {
        Object.keys(productss).forEach((category, j) => {
            const productCollection = document.getElementById(category);
            // 2nd loop is on the array of the keys that is the array of the rolex and omega
            productss[category].forEach((product, i) => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <img id="${category}-${product.name}"  src="${product.img}" alt="${product.name}"
                    original-image="${product.img}" hover-image="${product.hover}">
                   <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onclick="viewProduct('${category}|${product.name}')">View Details</button>
                                `;
                productCollection.appendChild(card);
            });
        })

        const productCards = document.querySelectorAll(".product-card");

        productCards.forEach(card => {
            var img = card.querySelector("img");
            img.addEventListener('mouseover', () => {
                setTimeout(() => {
                    var hover = img.getAttribute('hover-image');
                    img.src = hover;
                }, 1000);
            });
            img.addEventListener('mouseout', () => {
                setTimeout(() => {
                    var originalImage = img.getAttribute('original-image');
                    img.src = originalImage;
                }, 1000);
            });
        });
    } catch (error) {
        const errorCode = error.code
        const errorMessage =error.message
    }
}
getDataFromFirestore()


// scrolling with arrow putton on each collection to scroll right and left
function scrollCategory(categoryId, distance) {
    const categoryElement = document.getElementById(categoryId);
    categoryElement.scrollBy({ left: distance, behavior: "smooth" });
}

// when click on view details btn it will generate a query param and naviagtes to the product.html
function viewProduct(imgID) {
    // console.log(imgID);
    window.location.href = `../product/product.html?id=${imgID}`
}

// makingg it global so HTML can access it
window.scrollCategory = scrollCategory
window.viewProduct = viewProduct


export { viewProduct, } 