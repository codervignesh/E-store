document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8081/inventory/category/')
      .then(response => response.json())
      .then(categoriesData => {
        const categoriesRow = document.querySelector('.categories-row');
        categoriesData.forEach(category => {
          const categoryElement = document.createElement('div');
          categoryElement.classList.add('categories');
          categoryElement.innerHTML = `
            <div class="category-image">
              <img src="https://mediaserver.goepson.com/ImConvServlet/imconv/32ca9f80247256b4a08708abb40e0d327dd9bc84/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L18050-%284%29" alt="${category.name}">
            </div>
            <div class="category-info">
              <p>${category.name}</p>
            </div>
          `;
          categoriesRow.appendChild(categoryElement);

          const productDisplay = document.createElement('div');
          productDisplay.classList.add('product-display');
          productDisplay.innerHTML = `
            <h3 class="category-heading">Best of ${category.name}</h3>
            <div class="products-row" id="products-${category.id}"></div>
          `;
          document.body.appendChild(productDisplay);

          const productsRow = document.getElementById(`products-${category.id}`);
          category.product.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
              <div class="product-image">
                <img src="https://mediaserver.goepson.com/ImConvServlet/imconv/32ca9f80247256b4a08708abb40e0d327dd9bc84/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L18050-%284%29" alt="${product.name}">
              </div>
              <div class="product-info">
                <p>${product.name}</p>
                <p>Rs ${product.price}</p>
              </div>
            `;
            productsRow.appendChild(productElement);
          });
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
