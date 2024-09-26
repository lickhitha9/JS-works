// JavaScript to handle clicks on categories
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.querySelector(".overlay").textContent}!`);
    // Add navigation or other actions here
  });
});

function openPage(category) {
  let url = "";
  switch (category) {
    case "men":
      url = "men.html";
      break;
    case "women":
      url = "women.html";
      break;
    case "kids":
      url = "kids.html";
      break;
  }
  window.location.href = url;
}

document.querySelectorAll(".wishlist").forEach((item) => {
  item.addEventListener("click", function () {
    alert("Added to Wishlist!");
  });
});
function filterProducts() {
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const priceText = product.querySelector("p").textContent;
    const price = parseInt(priceText.replace("Rs.", "").trim());

    if ((minPrice && price < minPrice) || (maxPrice && price > maxPrice)) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  });
}
