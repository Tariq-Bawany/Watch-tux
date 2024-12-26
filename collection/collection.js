// script.js
// products is a object that has array of objects
const productss = {
    rolex: [
        {
            name: "Rolex Smurf", price: "$4999", image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/469610812_122150777642301123_1926673612586756425_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=afLT3YeUDksQ7kNvgEqFVMI&_nc_oc=AdhURfjj-qCnAv1hUiLBHMF1JcGuc4xjlDbAeQSPa-HLMOikgujL4e7cIj-XajJwuu4&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=AFiAB207b02hj7_xPi_WrSV&oh=00_AYBZEBGFSDSPKWcsKyvDu3x_CU9UzTxXUKvI0t3xVB8Jhg&oe=6772123C", hover: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/469821298_122150777366301123_8419037772509042977_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SzQ2JjeGiW8Q7kNvgGO0Q2o&_nc_oc=AdjKQ-rNbX6S_f9rzFuBOH7oqin811M39F5sP_VBukw857o5YpO7hsSp-tOj06eP9DM&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=AEFN97D_QvQT8X0thcXrL_1&oh=00_AYBA9uFS7aY44Z75Kr33pTWkOaTJkfva98umzEaaVRJPNg&oe=67721A32"
        },
        {
            name: "Rolex Datejust", price: "$5999", image: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/470203955_122151405980301123_7714452806378396815_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GGkboxB0XSkQ7kNvgG3x45V&_nc_oc=Adim28sfEZDNSmV30S9G0P88-HVABxixgcMFmOveOOszljjccRlfzfATa5XlKL79H8I&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=ASg2tsRogGpS66Tnrj3VUFV&oh=00_AYDO5funITNhvq7YwseKYQRQFEYZscQUcp0p6ok9h5VLsw&oe=67721187", hover: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/470130211_122151405530301123_7814656030978994496_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=65g84xXesUQQ7kNvgGcwdAV&_nc_oc=AdimL8GB--etBmotlTXYpEZN969XDhPfnpZrcFENS09Bqovr5X95IFqHNzd9XpUkMl4&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=ApGnez9lMvpFiX_T4TPogFq&oh=00_AYDzoiZn9qEcKtZjqPuFnxZdYY1JsD0ymvwY3Sit3F28rQ&oe=6772068A"
        },
        {
            name: "Rolex GMT || Gold", price: "$6999", image: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/469530483_122150677280301123_8262726796572277203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GMexkT13jgoQ7kNvgGzP7XO&_nc_oc=AdgIkJlzeJbw6vw6BuXql4GWc4xt0Dk1_OmtxTleK0lSl2t4P_9GqwaJjYAkW7q5B7M&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=AZd--ZRnC-3baAhIiAXl_04&oh=00_AYAIkEsXQos7mPRJ3e7dV8Xd02SXL5CxiOt-Zb_0By6-7Q&oe=67720214", hover: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/469673462_122150677394301123_5636467622960741469_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N8I0spl_KEAQ7kNvgEjW0Ym&_nc_oc=AdhmSWjOxuWuWhNwM_QwUmHaoz7cfUTiYP0fhOIOTwXTOHRAs02e-OLPEHMDOuEYFGQ&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=A9aswsKFfb_f7lPzhkTDK_C&oh=00_AYABOqdVojb3Pmvs8ui3waQU-svz_KFhM-hEWDQjPpsrRQ&oe=67720489"
        },
        {
            name: "Rolex Day Date II ", price: "$6999", image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/469574010_122150653760301123_4148246566049076647_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QGBbyXTyX_AQ7kNvgHup8ZX&_nc_oc=AdgJJM_0NIdnwJDbTq0C_ilnRdi_mSX0Iq5DgdI3hS3uyZoOK9WfLBeHvVY9_KwOLvs&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=AitlBJPBxXzrPi-cDEAsRQn&oh=00_AYCr-ZHTjXuZPnx7kcrmmVef6dqo1Om8BtC76KhbZbp-7g&oe=6772288B", hover: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/469343172_122150653130301123_3983995545356592994_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rqnbKiE75DQQ7kNvgGhAbLc&_nc_oc=Adj1FWKXLhZfGR6FfE8be8eW9phSp9ayu0UF13RbMImBIQNwQL96G2hZkyLizPH6JCs&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=As_9FVm1JbAvu5aBhUKXE66&oh=00_AYDDT0z4F6czLvTnk9DOlkpY8Pry_lslHiz_MOAspxqD8w&oe=677214FF"
        },
    ],
    omega: [
        {
            name: "Omega Speedmaster Mark ii", price: "$3999", image: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/470212497_122151404264301123_2487606839837565210_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tM_lflz3vKUQ7kNvgHUj1HP&_nc_oc=AdjkoWl6rLlSDV_YtluYXl4w-j765STj9Iz65JZ9UY87nDOy-l1dTRCEud0eVDMcGeA&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=A_OQxmK3Cp0lcz3hAmk_5Bj&oh=00_AYD_nIAqRHMPEe0g7Zm40TifGjg4urTJavD07FgwbYcMWg&oe=6772056E", hover: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/470188192_122151404558301123_1027345488520760464_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qmTNxMxtGvYQ7kNvgH5R3Wf&_nc_oc=AdhNVBQFQKj_age4kDv0PLLqOlrtWVAHBPQu3TsW9w8TBpNXfTBggMuRkmAuLODv0UM&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=ADbZk3srlMRvNb4snCk9_5d&oh=00_AYBqwT_KuMpchwvJwTOMTLCGs85Nk2luWGdHc5UVnDc8gg&oe=6771F4F8"
        },
    ],
    patek_philipe: [
        {
            name: "PP Geneve", price: "$3999", image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/470140882_122151403340301123_5614018753324020199_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sEdVu8zyWpIQ7kNvgHRu7sm&_nc_oc=AdhFmnisvwXOXjUdKkX9_uXzwrezEQS_XOLab_5MkbtKn1UjaN8ZrJASj9wmrhogttY&_nc_zt=23&_nc_ht=scontent.fkhi16-1.fna&_nc_gid=A2ckoZ3q3wP8oECftR9qj3L&oh=00_AYCacyViA-T-ldpmDniWhTOULZVF63YX_II2912PotmtJg&oe=67720260", hover: "https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/470197562_122151403322301123_8266741322866038324_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bMI0-Z2RQUAQ7kNvgFIAY1g&_nc_oc=AdjBd6onn492nAFlUUJK4hMjwP4hq-LIlpwF_ZVv8bA0OGLC03FSJH71IqpXOsOML9k&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=AOLUIsK0X_d2SwyzI8Fq5V6&oh=00_AYC5AJTkoLMfWUGrW_CSXFpYjhGEv57PHrjGDjCNzT5qFw&oe=6772068A"
        },
    ],
};


// render collection  on the collection.html file
function renderCollection() {
    try { // used because of error when importing in product.js file 

        Object.keys(productss).forEach((category, j) => { // will loop on each key of productss that is rolex,omega,patekphilip
            const productCollection = document.getElementById(category);// it will get element of the id rolex, omega from HTML
            // 2nd loop is on the array of the keys that is the array of the rolex and omega
            productss[category].forEach((product, i) => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                        <img id="${category}-${i}"  src="${product.image}" alt="${product.name}"
                        original-image="${product.image}" hover-image="${product.hover}"
                        >
                        <h2>${product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onclick="viewProduct('${category}-${i}')">View Details</button>
                    `;
                productCollection.appendChild(card);
            });
        });
        const productCards = document.querySelectorAll(".product-card");
        
        productCards.forEach(card => { //will apply event listener  of mouseover and mouse out in every img in product-card
            // hover effect of chaning images 
            var img = card.querySelector("img")
            img.addEventListener('mouseover', () => {
                setTimeout(() => {
                    var hover = img.getAttribute('hover-image')
                    img.src = hover
                }, 500);
            })
            img.addEventListener('mouseout', () => {
                setTimeout(() => {
                    var originalImage = img.getAttribute('original-image');
                    img.src = originalImage
                }, 500);
            })
        });
    } catch (error) {
        const erroeCode = error.code;
        const erroeMessage = error.message;
        // console.log(erroeCode);
        // console.log(erroeMessage);
    }


}
renderCollection()


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


export { productss, viewProduct } 