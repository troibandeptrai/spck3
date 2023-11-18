const productList = document.getElementById('product-list');
const productItemTemp = document.getElementById('product-item');

const getProducts = async () => {
    const response = await fetch("https://652a85bd4791d884f1fd059f.mockapi.io/khoahoc");
    const products = await response.json();
    products.forEach((product) => {
        let productItem = productItemTemp.content.cloneNode(true);
        productItem.getElementById('img').src = product.img
        productItem.getElementById('noidung').textContent = product.noidung
        productItem.getElementById('tacgia').textContent = product.ten
        productItem.getElementById('product-link').href = `./detail2.html?id=${product.id}`
        productList.appendChild(productItem);
    });
}


getProducts();