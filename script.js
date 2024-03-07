function adjustQuantity(btn, change) {
    var quantityElement = btn.parentNode.querySelector('.quantity');
    var price = parseInt(btn.parentNode.getAttribute('data-price'));
    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + change;

    if (newQuantity >= 0) {
        quantityElement.textContent = newQuantity;
        updateTotal();
    }
}

function removeItem(btn) {
    var item = btn.parentNode;
    item.parentNode.removeChild(item);
    updateTotal();
}

function toggleLike(btn) {
    btn.classList.toggle('like');
}

function updateTotal() {
    var totalElement = document.getElementById('total');
    var items = document.querySelectorAll('.item');
    var total = 0;

    items.forEach(function (item) {
        var price = parseInt(item.getAttribute('data-price'));
        var quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });

    totalElement.textContent = 'Total : ' + total + 'fcfa';
}