(async function () {
    const response = await fetch ('api/steps.json');
    const product = await response.json();

function renderProduct(product){

    const productContainer = document.guerySelector('.cards__container');
    productContainer.innerHTML='';
    for   (const product of  products){
        productContainer.innerHTML+=
    <div class="cards__section">
                <img
                    class="cards__wrapper"
                    src="${product.image}"
                    alt="${product.title}" 
                />
                <h3 class="steps__decription-card">"${product.title}"</h3>
                <p class="steps__Wait-text">${product.description}</p>
    </div>
    }
    }
    renderSteps(products);
    })();


    