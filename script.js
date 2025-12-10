const request = new XMLHttpRequest();
const elList = document.querySelector(".cards");
const loading = document.querySelector(".loader");
const logo = document.querySelector(".nav__logo"); 
const footer = document.querySelector(".footer");
const nav = document.querySelector(".navbar");
const load = document.querySelector(".loadingio-spinner-spin-nq4q5u6dq7r")

load.style.display = "flex";
nav.style.display = "none";
footer.style.display = "none";
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    const data = JSON.parse(request.responseText);
    showData(data);
  }
});

request.open("GET", "https://fakestoreapi.com/products");
request.send();

function showData(data) {
  data.map(({ title, image, id, category, price, description }) => {
    elList.innerHTML += `
      <article class="product-card" aria-label="Mens Cotton Jacket">
        <div class="product-card__media">
          <img
            width="100%"
            height="200"
            class="product-card__img"
            src=${image}
            alt="${title}"
          />
        </div>

        <div class="product-card__body">
          <div>
            <h3 class="product-card__title">${title}</h3>
            <div class="product-card__category">${category}</div>
          </div>

          <div class="product-card__price-row">
            <div class="product-card__price">$${price}</div>
            <div class="product-card__rating">
              <span class="star">★</span>
              <span>4.7</span>
              <small style="opacity: 0.6">(500)</small>
            </div>
          </div>

          <p class="product-card__desc">${description}</p>

          <div class="product-card__actions">
            <button class="btn btn--primary" type="button">Add to cart</button>
            <button class="btn btn--ghost" type="button">View</button>
          </div>
        </div>
      </article>
    `;
    footer.style.display = "block";
    nav.style.display = "flex"
    load.style.display = "none";
  });
}
const wrap = document.querySelector(".wrapper");
  const showToast = (text, color = "red") => {
      Toastify({
        text: text, 
        duration: 1500,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background:
            color === "red"
              ? "linear-gradient(to right, red, crimson)"
              : "linear-gradient(to right, green, limegreen)"
        }
      }).showToast();
    };
wrap.style.display = "block";