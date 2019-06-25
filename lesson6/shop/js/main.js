const NAMES = ['Tomato', 'Potato', 'Cucumber', 'Cherry', 'Cabbage', 'Watermelon'];
const PRICES = [300, 60, 980, 360, 34, 80];
const PRODUCTS = [];
const CART = [];

function generProducts() {
    for (let i = 0;i<NAMES.length;i++){
        PRODUCTS.push(createProduct(i));

    }
    productsRender()
}

function createProduct(index) {
    return {
        name: NAMES[index],
        price: PRICES[index],
        count : 1
    }
}

function productsRender() {
    let $productsList = document.querySelector('.products');
    for (let i = 0;i<PRODUCTS.length;i++){

        $productsList.insertAdjacentHTML("beforeend", `
            <div class="product-item">
            <div class="desc">
                 <h3>${PRODUCTS[i].name}</h3>
                 <p>${PRODUCTS[i].price}</p>
                 <button class="buy-btn" onclick="handlAddToCart()" data-btn="${i}">Купить</button>
             </div>
             </div>
        `)
    }
}
function handlAddToCart() {
let item = event.target;
if (item.classList.contains('buy-btn')){
    if (CART.indexOf(PRODUCTS[item.dataset.btn]) === -1){
        CART.push(PRODUCTS[item.dataset.btn]);
    }else  {
        CART[CART.indexOf(PRODUCTS[item.dataset.btn])].count++;
    }

    cartRender();
}
}

document.querySelector('.btn-cart').addEventListener('click', handlCloseOpenCart);


function handlCloseOpenCart(){
    let $cartBlock = document.querySelector('.cart-block');
    let key = event.target;
    if(key.classList.contains('btn-cart')){
        $cartBlock.classList.toggle('invisible');
    }
}
function cartRender() {
    let cartSum = 0;
    for (let i = 0;i<CART.length;i++){
        cartSum += CART[i].price * CART[i].count
    }

    let $cartList = document.querySelector('.cart-block');
    $cartList.innerHTML = '';
    for (let i = 0;i<CART.length;i++){

        $cartList.insertAdjacentHTML("beforeend", `
            <div class="cart-item">
                <div class="product-bio">
                    <div class="product-desc">
                        <p class="product-title">${CART[i].name}</p>
                        <p class="product-quantity">Кол-во: ${CART[i].count}</p>
                        <p class="product-single-price">${CART[i].price} рублей</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${CART[i].count * CART[i].price }</p>
                    <button class="del-btn">×</button>
                </div>
            </div>
        `)
    }
    $cartList.insertAdjacentHTML("beforeend",`
    <div class="cart-sum">Товаров на сумму ${cartSum} рублей</div>
    `)
}
generProducts();

