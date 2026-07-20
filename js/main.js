// Debbie Hair Empire — homepage interactions

function renderProductCard(p) {
  const discount = p.oldPrice
    ? Math.round(100 - (p.price / p.oldPrice) * 100)
    : 0;
  return `
    <div class="product-card" data-type="${p.type}" data-category="${p.category}">
      <div class="thumb">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : discount > 0 ? `<span class="badge">-${discount}%</span>` : ""}
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="info">
        <span class="cat-tag">${p.category} · ${p.type === "human" ? "Human Hair" : "Synthetic"}</span>
        <h3>${p.name}</h3>
        <div class="price-row">
          <span class="price">${formatNaira(p.price)}</span>
          ${p.oldPrice ? `<span class="old-price">${formatNaira(p.oldPrice)}</span>` : ""}
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" data-add-to-cart="${p.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(filter) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  let list = PRODUCTS;
  if (filter && filter !== "all") {
    if (filter === "human" || filter === "synthetic") {
      list = PRODUCTS.filter((p) => p.type === filter);
    } else {
      list = PRODUCTS.filter((p) => p.category === filter);
    }
  }
  // Show a curated set on the homepage (max 8) unless a specific filter narrows it further
  list = list.slice(0, 8);

  grid.innerHTML = list.map(renderProductCard).join("");

  grid.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
    btn.addEventListener("click", () => {
      Cart.add(btn.dataset.addToCart, 1);
      const original = btn.textContent;
      btn.textContent = "Added ✓";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 1200);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
  }

  // Filter chips
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      renderProducts(chip.dataset.filter);
    });
  });

  // Category cards jump to featured section with matching filter
  document.querySelectorAll(".category-card[data-filter]").forEach((card) => {
    card.addEventListener("click", (e) => {
      const filterValue = card.dataset.filter;
      const matchingChip = Array.from(chips).find(
        (c) => c.dataset.filter === filterValue,
      );
      if (matchingChip) {
        chips.forEach((c) => c.classList.remove("active"));
        matchingChip.classList.add("active");
        renderProducts(filterValue);
      }
    });
  });
});
