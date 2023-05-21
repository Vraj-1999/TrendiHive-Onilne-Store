
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

let categorySelected = {};

categories.forEach((category) => {
    let elem = document.createElement("button");
    elem.innerText = category.title;
    elem.style.margin = "0.5em";
    document.querySelector("#menu").appendChild(elem);
    elem.addEventListener("click", () => {
        categorySelected = category;
        document.querySelector("#selected-category").innerText = categorySelected.title;
        const newTBody = document.createElement("tbody");
        products
            .filter((product) => {
                return product.category.indexOf(categorySelected.id) === 0 && product.discontinued;
            })
            .forEach((product) => {
                var card = createProductCard(product);
                newTBody.appendChild(card);
            });
        document.querySelector("#category-products").replaceWith(newTBody);
        newTBody.setAttribute("id", "category-products");
    });
});

products
    .filter((product) => {
        return product.discontinued === false;
    })
    .forEach((product) => {
        let prdElem = createProductCard(product);

        document.querySelector("#category-products").appendChild(prdElem);
    });

function convertCurrency(price) {
    return price / 100;
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.classList.add("card-img");
    card.appendChild(productImage);

    var productTitle = document.createElement("h3");
    productTitle.innerHTML = product.title;
    productTitle.classList.add("card-title");
    card.appendChild(productTitle);

    var productDetail = document.createElement("p");
    productDetail.innerHTML = product.description;
    productDetail.classList.add("card-desc");
    card.appendChild(productDetail);

    var productPrice = document.createElement("span");
    productPrice.innerHTML = `$${(product.price / 100).toLocaleString("en-ca")}`;
    productPrice.classList.add("card-price");
    card.appendChild(productPrice);
    return card;
}

function createProduct()
{
  let prdElem = document.createElement("tr");
  const title = document.createElement("td");
  title.innerText = product.title;
  const description = document.createElement("td");
  description.innerText = product.description;
  const price = document.createElement("td");
  price.innerText = `$${(product.price / 100).toLocaleString("en-ca")}`;

  prdElem.appendChild(title);
  prdElem.appendChild(description);
  prdElem.appendChild(price);
  return prdElem;
}







