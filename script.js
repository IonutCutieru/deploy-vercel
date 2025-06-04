fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        let carouselHTML = '';
        let productosHTML = '';

        const mostrarProductos = (productos) => {
            productosHTML = '';
            productos.forEach((perfume, index) => {
                carouselHTML += `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${perfume.imagen}" class="d-block w-100" alt="${perfume.nombre}">
                    </div>`;

                productosHTML += `
                    <div class="col-6 col-md-3 mb-3">
                        <div class="card add-to-cart" data-nombre="${perfume.nombre}" data-precio="${perfume.precio}" data-imagen="${perfume.imagen}">
                            <img src="${perfume.imagen}" class="card-img-top" alt="${perfume.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${perfume.nombre}</h5>
                                <p class="card-text">Precio: ${perfume.precio}€</p>
                            </div>
                        </div>
                    </div>`;
            });

            document.getElementById('carouselContainer').innerHTML = carouselHTML;
            document.getElementById('productosContainer').innerHTML = productosHTML;
        };

        // Usa la propiedad correcta del JSON
        mostrarProductos(data.perfumes);
    });
