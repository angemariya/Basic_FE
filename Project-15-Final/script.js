const items = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000,
    },
    {
        id: 2,
        name: "Самокат",
        price: 15000,
    },
    {
        id: 1,
        name: "Лыжи",
        price: 20000,
    },
    {
        id: 1,
        name: "Сноуборд",
        price: 25000,
    },
]

const itemsCatalog = document.querySelector(".items");

items.forEach(function(item) {
    itemsCatalog.innerHTML += `<li class="items-card">
    <div class="items-card__name">${item.name}</div>
    <div class="items-card__price">${item.price}</div>
</li>`
})