let itemsContainerElements = document.querySelector('.items-container');
let item = {
    item_image: 'images/1.jpg',
    rating: {
        stars: 4.5,
        noOfReviews: 1400,
    },
    companyName: 'Carlton Landon',
    itemName: 'Rhodum-Plated CZ Floral Studs',
    currentPrice : 606,
    originalPrice : 1045,
    discoundPercentage : 42
}


itemsContainerElements.innerHTML = `
    <div class="item-container">
        <img class="item-img" src="${item.item_image}" alt="item-image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
            </div>
            <div class="company-name">${item.companyName}</div>
            <div class="item-name">${item.itemName}</div>
            <div class="pricing">
                <span class="current-price">Rs ${item.currentPrice}</span>
                <span class="original-price">Rs ${item.originalPrice}</span>
                <span class="discount">(${item.discoundPercentage}%)</span>
            </div>
        <button class="btn-add-bag">Add to Bag</button>
    </div>
`;