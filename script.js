const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');

        // Function to save the cart to localStorage
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Function to update the cart count
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = totalItems;
        }

        // Add product to cart
        document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.card');
                const name = card.querySelector('h1').textContent;
                const price = parseInt(card.querySelector('.price').textContent);

                // Check if the item already exists in the cart
                const existingItem = cart.find(item => item.name === name);
                if (existingItem) {
                    existingItem.quantity += 1; // Increment quantity
                } else {
                    cart.push({ name, price, quantity: 1 });
                }

                saveCart(); // Save cart to localStorage
                updateCartCount(); // Update cart count display
                alert(`${name} added to the cart!`);
            });
        });

        // Update cart count on page load
        