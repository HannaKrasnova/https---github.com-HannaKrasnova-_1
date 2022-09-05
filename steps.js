(function () {
    const product = [{

        id: "1",
        title: "Wait a Bit",
        description: "We harvest honey approximately 4 times a year, excluding winter.",
        image: "img/walt.svg"
    
    
    },
    {

        id: "2",
        title: "2.Choose Honey Type",
        description: "Depending on the season, there may be different types of recently bottled honey on our site.",
        image: "img/order.svg"
    
    
    },
    {

        id: "3",
        title: "3.Order & Enjoy",
        description: "Depending on the season, there may be different types of recently bottled honey on our site.",
        image: "img/choose.svg"
    
    
    }
];

function renderProduct(product){

    const productContainer = document.guerySelector('.cards__container');
    productContainer.innerHTML='';
    for   product of  products={
        productContainer.innerHTML+=
         <div class="cards__section">
        <img src="${product.image}">${product.title}</h3>
        <p class="steps__Wait-text">${product. description}</p>
    </div>
    renderProducts(products);
            
    }