document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://crudcrud.com/api/7ad1dc83f0e444be8c83a8aa62ebd5db/products';
    let editMode = false;

    function fetchProducts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('#productTable tbody');
                tbody.innerHTML = '';
                data.forEach(product => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${product.name}</td>
                        <td>$${product.price}</td>
                        <td><button class="edit" data-id="${product._id}">Edit</button></td>
                        <td><button class="delete" data-id="${product._id}">Delete</button></td>
                    `;
                    tbody.appendChild(tr);
                });
            });
    }

    function addProduct(e) {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const formData = {
            name: productName,
            price: productPrice
        };

        if (editMode) {
            const productId = document.getElementById('productId').value;
            fetch(`${apiUrl}/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(() => {
                    fetchProducts();
                    document.getElementById('productName').value = '';
                    document.getElementById('productPrice').value = '';
                    document.getElementById('addOrUpdateBtn').textContent = 'Add Product';
                    document.getElementById('productId').value = '';
                    editMode = false;
                });
        } else {
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(() => {
                    fetchProducts();
                    document.getElementById('productName').value = '';
                    document.getElementById('productPrice').value = '';
                });
        }
    }

    function editProduct() {
        const productId = this.dataset.id;
        fetch(`${apiUrl}/${productId}`)
            .then(response => response.json())
            .then(product => {
                document.getElementById('productName').value = product.name;
                document.getElementById('productPrice').value = product.price;
                document.getElementById('addOrUpdateBtn').textContent = 'Update Product';
                document.getElementById('productId').value = productId;
                editMode = true;
            });
    }

    function deleteProduct() {
        const productId = this.dataset.id;
        fetch(`${apiUrl}/${productId}`, {
            method: 'DELETE'
        })
            .then(() => {
                fetchProducts();
            });
    }

    document.getElementById('productForm').addEventListener('submit', addProduct);

    document.getElementById('productTable').addEventListener('click', function (e) {
        if (e.target.classList.contains('edit')) {
            editProduct.call(e.target);
        } else if (e.target.classList.contains('delete')) {
            deleteProduct.call(e.target);
        }
    });

    fetchProducts();
});