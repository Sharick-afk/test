const starsItemsList = document.querySelectorAll('.stars_item');
const starsItemsArray = Array.prototype.slice.call(starsItemsList);

starsItemsArray.forEach(item => 
    item.addEventListener("click", () => {
        
        item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
 );