// Debbie Hair Empire — product catalogue (demo data)
const PRODUCTS = [
  {
    id: "amara-bone-straight",
    name: "Amara Bone Straight Lace Wig",
    type: "human",
    category: "Bone Straight",
    length: 20,
    price: 185000,
    oldPrice: 230000,
    img: "https://images.pexels.com/photos/19742926/pexels-photo-19742926.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "100% virgin human hair, glueless 5x5 HD lace closure. Silky bone-straight finish that lays flat from root to tip — our best seller for a natural hairline.",
    badge: "Best Seller"
  },
  {
    id: "zuri-bob",
    name: "Zuri Blunt Cut Bob Wig",
    type: "human",
    category: "Bob",
    length: 12,
    price: 75000,
    oldPrice: 98000,
    img: "https://images.pexels.com/photos/30424844/pexels-photo-30424844.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "A crisp, blunt-cut bob in 100% human hair with a 4x4 closure. Low manipulation, high impact — perfect for the office or the owambe.",
    badge: null
  },
  {
    id: "ronke-curly-closure",
    name: "Ronke Curly Closure Wig",
    type: "human",
    category: "Curly",
    length: 16,
    price: 150000,
    oldPrice: 180000,
    img: "https://images.pexels.com/photos/4373427/pexels-photo-4373427.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Bouncy, defined curls that hold their pattern wash after wash. 5x5 closure, pre-plucked hairline, ready to wear out of the box.",
    badge: "New In"
  },
  {
    id: "ada-headband",
    name: "Ada Silky Straight Headband Wig",
    type: "human",
    category: "Headband",
    length: 18,
    price: 95000,
    oldPrice: 115000,
    img: "https://images.pexels.com/photos/8498370/pexels-photo-8498370.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "No lace, no glue, no stress. Slip it on and go — ideal for beginners or anyone who needs to be out the door in five minutes.",
    badge: null
  },
  {
    id: "chidinma-kinky-curly",
    name: "Chidinma Kinky Curly Afro Wig",
    type: "human",
    category: "Curly",
    length: 14,
    price: 120000,
    oldPrice: 145000,
    img: "https://images.pexels.com/photos/3776211/pexels-photo-3776211.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Full, textured kinky curl pattern that celebrates natural volume. 4x4 closure with baby hairs left for a seamless part.",
    badge: null
  },
  {
    id: "folake-glueless-hd",
    name: "Folake Glueless HD Lace Wig",
    type: "human",
    category: "Bone Straight",
    length: 22,
    price: 210000,
    oldPrice: 260000,
    img: "https://images.pexels.com/photos/1757281/pexels-photo-1757281.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Our undetectable lace, engineered for melanin-rich skin tones. Adjustable straps and combs — glue optional, confidence guaranteed.",
    badge: "Premium"
  },
  {
    id: "ngozi-fringe-bob",
    name: "Ngozi Bob With Fringe",
    type: "human",
    category: "Bob",
    length: 10,
    price: 65000,
    oldPrice: 82000,
    img: "https://images.pexels.com/photos/1820978/pexels-photo-1820978.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "A soft curtain fringe softens this classic bob. Machine double-drawn for extra fullness at every strand.",
    badge: null
  },
  {
    id: "blessing-loose-wave",
    name: "Blessing Loose Wave Frontal Wig",
    type: "human",
    category: "Wavy",
    length: 20,
    price: 195000,
    oldPrice: 235000,
    img: "https://images.pexels.com/photos/6343295/pexels-photo-6343295.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "13x4 frontal with a relaxed beachy wave. Can be parted anywhere and styled up for special occasions.",
    badge: null
  },
  {
    id: "tayo-synthetic-bob",
    name: "Tayo Synthetic Bob Wig",
    type: "synthetic",
    category: "Bob",
    length: 12,
    price: 18500,
    oldPrice: 24000,
    img: "https://images.pexels.com/photos/3765166/pexels-photo-3765166.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Heat-resistant fibre with a natural sheen. A budget-friendly way to switch up your look for the weekend.",
    badge: "Affordable"
  },
  {
    id: "efe-synthetic-curly-afro",
    name: "Efe Synthetic Curly Afro Wig",
    type: "synthetic",
    category: "Curly",
    length: 14,
    price: 22000,
    oldPrice: 29000,
    img: "https://images.pexels.com/photos/1820987/pexels-photo-1820987.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Pre-styled curls that keep their shape without any heat tools. Lightweight machine cap for all-day comfort.",
    badge: null
  },
  {
    id: "kemi-synthetic-straight",
    name: "Kemi Synthetic Straight Wig",
    type: "synthetic",
    category: "Straight",
    length: 18,
    price: 25000,
    oldPrice: 32000,
    img: "https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Sleek, long and lightweight. A wear-and-go option that still passes for the real thing.",
    badge: null
  },
  {
    id: "ijeoma-ombre-highlight",
    name: "Ijeoma Ombre Highlight Wig",
    type: "human",
    category: "Straight",
    length: 18,
    price: 165000,
    oldPrice: 205000,
    img: "https://images.pexels.com/photos/3290250/pexels-photo-3290250.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Rich dark roots melting into a warm honey ombre. Double-drawn for a full, healthy-looking finish.",
    badge: null
  },
  {
    id: "nneka-pixie",
    name: "Nneka Short Pixie Wig",
    type: "human",
    category: "Short Cut",
    length: 8,
    price: 58000,
    oldPrice: 72000,
    img: "https://images.pexels.com/photos/10158002/pexels-photo-10158002.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "Effortlessly chic and low maintenance. A closer-to-scalp cut for the woman who wants her wig to disappear.",
    badge: null
  },
  {
    id: "yemisi-synthetic-headband",
    name: "Yemisi Synthetic Headband Wig",
    type: "synthetic",
    category: "Headband",
    length: 16,
    price: 20000,
    oldPrice: 27000,
    img: "https://images.pexels.com/photos/4861411/pexels-photo-4861411.jpeg?auto=compress&cs=tinysrgb&w=900",
    desc: "The easiest wig in the shop. No lace to tint, no glue to buy — attach the band and step out.",
    badge: null
  }
];

function formatNaira(n) {
  return "₦" + n.toLocaleString("en-NG");
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}