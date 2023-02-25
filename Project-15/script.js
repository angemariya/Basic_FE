//Входные данные
const products = [
    {
        name: "Велосипед",
        price: 40000
    },
    {
        name: "Самокат",
        price: 15000
    },
    {
        name: "Лыжи",
        price: 30000
    },

]
// html-элементы
const productsWrapper = document.querySelector(".products-wrapper");
const productForm = document.querySelector(".product-form");
const productName = document.querySelector("input[name='product-name']");
const productPrice = document.querySelector("input[name='product-price']");

//READ - чтение или отображение продуктов
function renderProducts() {
    productsWrapper.innerHTML='' //очистка контейнера перед отрисовкой новых элементов
    products.forEach(function(product, index) {
    productsWrapper.innerHTML += `
    <div class="product" id="${index}">
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price}</p>
        <button class="delete-btn">X</button>
    </div>
    `})
            onHover();
            deleteProduct();
};

renderProducts(); //вызываем функцию сразу, как зашел пользователь

//Создание продукта. Слушаем отправку формы. 
productForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value)
    }

    products.push(newProduct);
    renderProducts();
    clearInputs();
})

function clearInputs() {
    productName.value='';
    productPrice.value='';
}

function onHover() {
    const productCard = document.querySelectorAll(".product")
    productCard.forEach(function(card){
        card.addEventListener('mouseover', function() {
            const deleteBtn = card.querySelector('.delete-btn')
            deleteBtn.style.display = 'block'
        })
        card.addEventListener('mouseout', function() {
            const deleteBtn = card.querySelector('.delete-btn')
            deleteBtn.style.display = 'none'
        })
    })
}

function deleteProduct() {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach(function(btn) {
        btn.addEventListener('click', function(){
            const id = btn.parentElement.id
            products.splice(id, 1)
            btn.parentElement.remove();
            renderProducts()
        })
    })
}
