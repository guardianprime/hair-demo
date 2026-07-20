// Debbie Hair Empire — cart (demo: stored in this browser only via localStorage)
const WHATSAPP_NUMBER = "2348100000000"; // demo number

const Cart = {
  key: "dhe_cart",

  read() {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  write(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
    Cart.updateBadge();
  },

  add(id, qty = 1) {
    const items = this.read();
    const existing = items.find((i) => i.id === id);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id, qty });
    }
    this.write(items);
  },

  remove(id) {
    const items = this.read().filter((i) => i.id !== id);
    this.write(items);
  },

  setQty(id, qty) {
    const items = this.read();
    const existing = items.find((i) => i.id === id);
    if (existing) {
      existing.qty = Math.max(1, qty);
    }
    this.write(items);
  },

  clear() {
    this.write([]);
  },

  count() {
    return this.read().reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return this.read().reduce((sum, i) => {
      const p = getProductById(i.id);
      return p ? sum + p.price * i.qty : sum;
    }, 0);
  },

  updateBadge() {
    const badges = document.querySelectorAll("[data-cart-count]");
    const n = Cart.count();
    badges.forEach((b) => {
      b.textContent = n;
      b.style.display = n > 0 ? "inline-flex" : "none";
    });
  },

  renderDrawer() {
    const list = document.getElementById("cart-drawer-items");
    const totalEl = document.getElementById("cart-drawer-total");
    const emptyEl = document.getElementById("cart-drawer-empty");
    if (!list) return;

    const items = this.read();
    list.innerHTML = "";

    if (items.length === 0) {
      if (emptyEl) emptyEl.style.display = "block";
      if (totalEl) totalEl.textContent = formatNaira(0);
      return;
    }
    if (emptyEl) emptyEl.style.display = "none";

    items.forEach((item) => {
      const p = getProductById(item.id);
      if (!p) return;
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-row-info">
          <p class="cart-row-name">${p.name}</p>
          <p class="cart-row-price">${formatNaira(p.price)}</p>
          <div class="cart-row-qty">
            <button class="qty-btn" data-action="dec" data-id="${p.id}">–</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${p.id}">+</button>
            <button class="cart-row-remove" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        const items = Cart.read();
        const existing = items.find((i) => i.id === id);
        if (action === "inc" && existing) Cart.setQty(id, existing.qty + 1);
        if (action === "dec" && existing) {
          if (existing.qty <= 1) Cart.remove(id);
          else Cart.setQty(id, existing.qty - 1);
        }
        if (action === "remove") Cart.remove(id);
        Cart.renderDrawer();
      });
    });

    if (totalEl) totalEl.textContent = formatNaira(this.total());
  },

  whatsappLink() {
    const items = this.read();
    if (items.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Debbie Hair Empire, I'd like to place an order.")}`;
    }
    let msg = "Hi Debbie Hair Empire, I'd like to order:\n\n";
    items.forEach((item) => {
      const p = getProductById(item.id);
      if (!p) return;
      msg += `• ${p.name} (${p.length}") x${item.qty} — ${formatNaira(p.price * item.qty)}\n`;
    });
    msg += `\nTotal: ${formatNaira(this.total())}\n\nPlease confirm availability and delivery to my address.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  },
};

function toggleCartDrawer(forceOpen) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer) return;
  const isOpen = drawer.classList.contains("open");
  const open = typeof forceOpen === "boolean" ? forceOpen : !isOpen;
  drawer.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  document.body.classList.toggle("no-scroll", open);
  if (open) Cart.renderDrawer();
}

document.addEventListener("DOMContentLoaded", () => {
  Cart.updateBadge();

  document.querySelectorAll("[data-open-cart]").forEach((btn) => {
    btn.addEventListener("click", () => toggleCartDrawer(true));
  });
  document.querySelectorAll("[data-close-cart]").forEach((btn) => {
    btn.addEventListener("click", () => toggleCartDrawer(false));
  });

  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(Cart.whatsappLink(), "_blank");
    });
  }
});
