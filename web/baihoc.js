const productList = document.getElementById('product-list');
const productItemTemp = document.getElementById('product-item');

const getProducts = async () => {
    const response = await fetch("https://652a85bd4791d884f1fd059f.mockapi.io/baihoc");
    const products = await response.json();
    products.forEach((product) => {
        let productItem = productItemTemp.content.cloneNode(true);
        productItem.getElementById('product-image').src = product.img
        productItem.getElementById('product-name').textContent = product.ten
        productItem.getElementById('product-nd').textContent = product.noidung
        productItem.getElementById('product-link').href = `./detail.html?id=${product.id}`
        productList.appendChild(productItem);
        
        // console.log(product);
    }); 
    
}
getProducts();


