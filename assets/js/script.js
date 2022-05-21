axios({
    method: "post",
    url: "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush",
    data: {
        username: "kullanici adi",
        password: "parola"
    }
});