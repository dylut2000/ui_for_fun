const productsDisplay = document.getElementById('products')
const cartModal = document.getElementById('cartModal')
const cartModalContent = document.getElementById('cartModalContent')
const btn_closeCartModal = document.getElementById('btn_closeCartModal')

// scroll to a specific id
function scrollToId(sectionId) {
  const id = document.getElementById(sectionId)
  id.scrollIntoView({behavior: 'smooth'}, true)
}

// open cart modal
function onOpenCartModal() {
  cartModal.style.display = 'block'
}

// close cart modal
function onCloseCartModal() {
  cartModal.style.display = 'none'
}

// close modal after clicking X button from the cart
btn_closeCartModal.addEventListener('click', onCloseCartModal)

// close modal after clicking outside
cartModal.addEventListener('click', (e) => {
  if (e.target.id === 'cartModal') onCloseCartModal()
})

// display all products
function onDisplayProduct() {
  productsDisplay.innerHTML = ''

  for (let i = 0; i < data.length; i++) {
    let product = data[i]

    productsDisplay.innerHTML += `
    
    <div class="product-item">
          <div class="product">
            <img
              src="${product.thumbnail}"
              loading="lazy"
              alt="${product.title}"
            />
            <div class="details">
              <div class="left">
                <div class="name">${product.title}</div>
                <div class="category">${product.category}</div>
              </div>
              <div class="price">R${product.price}</div>
            </div>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"
              />
              <path
                d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
          </button>
        </div>
    
    `
  }
}

onDisplayProduct()
