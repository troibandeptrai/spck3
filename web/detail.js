let url_string = window.location;
console.log("lll", url_string)
let url = new URL(url_string);
let id = url.searchParams.get("id");
if (!id){
    alert('Ko tồn tại')
    window.location = './baihoc.html';
}

const getProducts = async () => {
    const response = await fetch(`https://652a85bd4791d884f1fd059f.mockapi.io/baihoc/${id}`);
    const product = await response.json();
    console.log(document.getElementById('product-img2'))
    document.getElementById('product-img2').src = product.img2
    document.getElementById('product-name1').textContent = product.name
    document.getElementById('product-detail').textContent = product.detail
    document.getElementById('product-img3').src = product.img3
    document.getElementById('product-ndc2').textContent = product.ndc2
    document.getElementById('product-ndc3').textContent = product.ndc3
    document.getElementById('product-ndchinh').textContent = product.ndchinh
    document.getElementById('product-link').href = `./detail.html?id=${product.id}`
}
getProducts();