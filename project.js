const productsCont = document.querySelector("#products");

async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
          <div class="product-image">
            <img src="${product.thumbnail}" alt="${product.title}" />
          </div>
          <div class="product-details">
            <h2>${product.title}</h2>
            <p class="description">${product.description}</p>
            <div class="product-footer">
              <span class="price">$${product.price}</span>
              <span class="rating">⭐ ${product.rating}</span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
          </div>
          `;
      productsCont.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getProducts();
