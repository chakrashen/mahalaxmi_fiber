/**
 * MAHALAXMI TEXTILES - INTERACTIVE JAVASCRIPT CONTROLLER
 */

// Fallback fabric database in case of local file:/// fetch restrictions
const DEFAULT_FABRICS = [
  {
    "id": "ml-101",
    "name": "60x60 Cambric Pure Cotton",
    "category": "cotton",
    "categoryLabel": "Pure Cotton",
    "image": "images/product-cotton.jpg",
    "badge": "Best Seller",
    "gsm": "85-90 GSM",
    "width": "44 / 58 Inches",
    "weave": "Plain Weave (60x60 / 92x88)",
    "finish": "Soft Flow Bio-Washed & Pre-Shrunk",
    "shrinkage": "< 2.5%",
    "composition": "100% Combed Compact Cotton",
    "moq": "1,000 Meters",
    "leadTime": "3-5 Working Days",
    "basePrice": "₹82/m",
    "unitRate": 82,
    "applications": ["Kurtis & Tunics", "Men's Casual Shirts", "Ethnic Dresses", "Nightwear & Loungewear"],
    "description": "Ultra-breathable 60s combed cotton with a silky-soft drape and superior color absorption. Specially engineered for high-end boutique apparel and premium summer collections.",
    "colorsAvailable": ["Optic White", "Midnight Navy", "Crimson Red", "Forest Green", "Pastel Mustard", "Dusty Rose"],
    "stockStatus": "Ready Stock (15,000m+ in warehouse)"
  },
  {
    "id": "ml-102",
    "name": "14kg Heavy Slub Rayon",
    "category": "rayon",
    "categoryLabel": "Liva Rayon",
    "image": "images/product-rayon.jpg",
    "badge": "High Demand",
    "gsm": "140-145 GSM",
    "width": "44 / 56 Inches",
    "weave": "Slub Texture Viscose Rayon",
    "finish": "Zero-Defect Silicone Wash",
    "shrinkage": "< 3%",
    "composition": "100% Liva-Certified Viscose Rayon",
    "moq": "800 Meters",
    "leadTime": "4-6 Working Days",
    "basePrice": "₹94/m",
    "unitRate": 94,
    "applications": ["Anarkalis & Flowy Gowns", "Western Tops", "Palazzo Sets", "Resort Wear"],
    "description": "Luxurious heavy-weight rayon featuring an organic textured slub character. Offers sensational fluid fall, natural cooling properties, and deep color saturation.",
    "colorsAvailable": ["Emerald Green", "Royal Indigo", "Wine Purple", "Ochre Gold", "Charcoal Black", "Blush Pink"],
    "stockStatus": "Ready Stock"
  },
  {
    "id": "ml-103",
    "name": "Royal Gold Foil & Khari Print Fabric",
    "category": "foil",
    "categoryLabel": "Foil & Metallic Print",
    "image": "images/product-foil.jpg",
    "badge": "Festive Special",
    "gsm": "110-120 GSM",
    "width": "44 Inches",
    "weave": "Chanderi / Cotton-Silk Base",
    "finish": "High-Temp Heat-Pressed Foil Seal",
    "shrinkage": "< 2%",
    "composition": "Cotton Viscose Blend with Metallic Inlay",
    "moq": "1,200 Meters",
    "leadTime": "5-7 Working Days",
    "basePrice": "₹128/m",
    "unitRate": 128,
    "applications": ["Festive Kurtas", "Wedding Lehenga Lining", "Dupattas & Scarves", "Designer Sarees"],
    "description": "Exquisite gold foil micro-detailing with long-lasting adhesion test passed (25+ domestic washes). Imparts a royal shimmer without any stiffness or scratchiness.",
    "colorsAvailable": ["Metallic Gold on Maroon", "Antique Copper on Teal", "Champagne Gold on Black", "Silver Foil on Navy"],
    "stockStatus": "Made to Order & In Stock Batches"
  },
  {
    "id": "ml-104",
    "name": "Vintage Discharge Print Rayon Cotton",
    "category": "discharge",
    "categoryLabel": "Discharge Print",
    "image": "images/product-discharge.jpg",
    "badge": "Colorfast Export",
    "gsm": "125 GSM",
    "width": "44 / 54 Inches",
    "weave": "Fine Twill Weave",
    "finish": "True Acid/Discharge Bleach & Steam Cured",
    "shrinkage": "< 2%",
    "composition": "80% Rayon / 20% Cotton",
    "moq": "1,500 Meters",
    "leadTime": "6-8 Working Days",
    "basePrice": "₹115/m",
    "unitRate": 115,
    "applications": ["Bohemian Kurtas", "Indo-Western Co-ord Sets", "Kaftans", "Printed Shrugs"],
    "description": "Authentic discharge printing technique that extracts dye from fabric fibers, resulting in vibrant patterns with zero plastic feel and full breathability front to back.",
    "colorsAvailable": ["Indigo Indigo-White", "Rust Brown Discharge", "Olive Heritage", "Midnight Black Discharge"],
    "stockStatus": "Ready Stock"
  },
  {
    "id": "ml-105",
    "name": "High-Definition Digital Floral Print Modal",
    "category": "printed",
    "categoryLabel": "Digital Prints",
    "image": "images/product-printed.jpg",
    "badge": "New Collection",
    "gsm": "100-105 GSM",
    "width": "44 / 58 Inches",
    "weave": "Fine Satin Modal Weave",
    "finish": "Digital Reactive Ink Infusion",
    "shrinkage": "< 1.5%",
    "composition": "100% Micro Modal",
    "moq": "500 Meters",
    "leadTime": "3-5 Working Days",
    "basePrice": "₹145/m",
    "unitRate": 145,
    "applications": ["High-Fashion Kaftans", "Luxury Dresses", "Scarves & Stoles", "Resort Collections"],
    "description": "Ultra-sharp 1200 DPI digital reactive printing with photorealistic gradients, rich botanical motifs, and featherlight silky hand-feel.",
    "colorsAvailable": ["Pastel Botanicals", "Tropical Lush", "Baroque Floral", "Abstract Geometric"],
    "stockStatus": "Ready Stock"
  },
  {
    "id": "ml-106",
    "name": "Vat Mill-Dyed Pure Poplin",
    "category": "dyed",
    "categoryLabel": "Mill Dyed & Solids",
    "image": "images/category-dyed.jpg",
    "badge": "Certified 100% Fast",
    "gsm": "120-130 GSM",
    "width": "44 / 58 Inches",
    "weave": "High-Density Poplin Weave",
    "finish": "Continuous Pad-Steam Vat Dyed & Mercerized",
    "shrinkage": "< 1%",
    "composition": "100% Giza/Supima Long Staple Cotton",
    "moq": "1,000 Meters",
    "leadTime": "4-5 Working Days",
    "basePrice": "₹98/m",
    "unitRate": 98,
    "applications": ["Formal Dress Shirts", "Uniforms & Institutional Wear", "Trousers & Bottoms", "Hospitality Linens"],
    "description": "Mill-dyed in our automated continuous dyeing range with grade 4/5 washing & light fastness. Flawless shade consistency from roll #1 to roll #100.",
    "colorsAvailable": ["Executive White", "Sky Blue", "French Navy", "Jet Black", "Khaki Beige", "Steel Grey", "Olive"],
    "stockStatus": "60+ Running Shades Ready in Stock"
  }
];

let fabricsData = DEFAULT_FABRICS;
let currentFilter = 'all';
let currentSearchQuery = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', async () => {
  initNavbar();
  await loadFabricsData();
  renderCatalog();
  initTabs();
  initSearch();
  initCalculator();
  initModal();
  initInquiryForm();
});

// Load fabrics data
async function loadFabricsData() {
  try {
    const response = await fetch('data/fabrics.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        fabricsData = data.map(item => ({
          ...item,
          unitRate: item.unitRate || parseFloat(item.basePrice.replace(/[^0-9.]/g, '')) || 95
        }));
      }
    }
  } catch (e) {
    console.log('Using local embedded fabrics data');
  }
}

// Navbar scroll behavior & mobile drawer
function initNavbar() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '84px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'rgba(8, 12, 20, 0.98)';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid var(--border-gold)';
      }
    });
  }
}

// Category Tabs
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-category');
      renderCatalog();
    });
  });
}

// Search Filter
function initSearch() {
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }
}

// Render Catalog Cards
function renderCatalog() {
  const grid = document.getElementById('fabricGrid');
  if (!grid) return;

  const filtered = fabricsData.filter(fabric => {
    const matchesCategory = currentFilter === 'all' || fabric.category === currentFilter;
    const matchesSearch = !currentSearchQuery || 
      fabric.name.toLowerCase().includes(currentSearchQuery) ||
      fabric.weave.toLowerCase().includes(currentSearchQuery) ||
      fabric.description.toLowerCase().includes(currentSearchQuery) ||
      fabric.applications.some(app => app.toLowerCase().includes(currentSearchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-family: var(--font-heading); margin-bottom: 8px;">No matching fabrics found</p>
        <p style="font-size: 0.9rem;">Try selecting another category tab or clearing your search keywords.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(fabric => `
    <article class="fabric-card" data-id="${fabric.id}">
      <div class="card-media">
        <img src="${fabric.image}" alt="${fabric.name}" loading="lazy" />
        <span class="card-badge">${fabric.badge || 'Mill Tested'}</span>
        <span class="card-price-tag">${fabric.basePrice}</span>
      </div>
      <div class="card-body">
        <div class="card-category-label">${fabric.categoryLabel}</div>
        <h3 class="card-title">${fabric.name}</h3>
        <p class="card-description">${fabric.description}</p>
        
        <div class="card-specs-row">
          <div class="spec-cell">
            <span class="spec-key">Weight</span>
            <span class="spec-val">${fabric.gsm}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-key">Width</span>
            <span class="spec-val">${fabric.width}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-key">Shrinkage</span>
            <span class="spec-val">${fabric.shrinkage}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-key">Min. Order</span>
            <span class="spec-val">${fabric.moq}</span>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-outline-gold btn-sm view-spec-btn" onclick="openFabricModal('${fabric.id}')">
            <span>🔬 Specs & Details</span>
          </button>
          <button class="btn btn-gold btn-sm" onclick="requestQuoteFor('${fabric.name}')">
            <span>⚡ Request Sample</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// Quick modal inspector
function initModal() {
  const modal = document.getElementById('fabricDetailModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

window.openFabricModal = function(fabricId) {
  const fabric = fabricsData.find(f => f.id === fabricId);
  if (!fabric) return;

  const modal = document.getElementById('fabricDetailModal');
  const modalImg = document.getElementById('modalFabricImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const modalSpecsBody = document.getElementById('modalSpecsBody');
  const modalColorChips = document.getElementById('modalColorChips');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  if (modalImg) modalImg.src = fabric.image;
  if (modalBadge) modalBadge.textContent = `${fabric.categoryLabel} • ${fabric.badge}`;
  if (modalTitle) modalTitle.textContent = fabric.name;
  if (modalDesc) modalDesc.textContent = fabric.description;

  if (modalSpecsBody) {
    modalSpecsBody.innerHTML = `
      <tr><td class="key">Fabric Composition</td><td class="val">${fabric.composition}</td></tr>
      <tr><td class="key">Weave & Construction</td><td class="val">${fabric.weave}</td></tr>
      <tr><td class="key">GSM / Weight</td><td class="val">${fabric.gsm}</td></tr>
      <tr><td class="key">Fabric Width</td><td class="val">${fabric.width}</td></tr>
      <tr><td class="key">Finishing Process</td><td class="val">${fabric.finish}</td></tr>
      <tr><td class="key">Shrinkage Rate</td><td class="val">${fabric.shrinkage}</td></tr>
      <tr><td class="key">Recommended For</td><td class="val">${fabric.applications.join(', ')}</td></tr>
      <tr><td class="key">Production Lead Time</td><td class="val">${fabric.leadTime}</td></tr>
      <tr><td class="key">Stock Availability</td><td class="val">${fabric.stockStatus}</td></tr>
    `;
  }

  if (modalColorChips) {
    modalColorChips.innerHTML = (fabric.colorsAvailable || []).map(color => `
      <span class="swatch-chip">🎨 ${color}</span>
    `).join('');
  }

  if (modalInquireBtn) {
    modalInquireBtn.onclick = () => {
      modal.classList.remove('active');
      requestQuoteFor(fabric.name);
    };
  }

  modal.classList.add('active');
};

// Interactive B2B Bulk Price Estimator
function initCalculator() {
  const fabricSelect = document.getElementById('calcFabricSelect');
  const meterSlider = document.getElementById('calcMeterSlider');
  const meterDisplay = document.getElementById('calcMeterDisplay');
  const finishChips = document.querySelectorAll('.finish-chip');
  
  const sumBaseRate = document.getElementById('sumBaseRate');
  const sumMeters = document.getElementById('sumMeters');
  const sumFinishCost = document.getElementById('sumFinishCost');
  const sumDiscount = document.getElementById('sumDiscount');
  const sumEstimatedTotal = document.getElementById('sumEstimatedTotal');
  const sumDeliveryDays = document.getElementById('sumDeliveryDays');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  if (!fabricSelect || !meterSlider) return;

  // Populate fabric options
  fabricSelect.innerHTML = fabricsData.map(f => `
    <option value="${f.id}" data-rate="${f.unitRate}">${f.name} (Base: ${f.basePrice})</option>
  `).join('');

  let selectedFinishAddon = 0;
  let selectedFinishName = "Standard Bio-Washed";

  finishChips.forEach(chip => {
    chip.addEventListener('click', () => {
      finishChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedFinishAddon = parseFloat(chip.getAttribute('data-addon') || 0);
      selectedFinishName = chip.textContent.trim();
      updateCalculation();
    });
  });

  function updateCalculation() {
    const selectedOption = fabricSelect.options[fabricSelect.selectedIndex];
    const unitRate = parseFloat(selectedOption.getAttribute('data-rate')) || 90;
    const meters = parseInt(meterSlider.value, 10);
    const fabricName = selectedOption.text.split('(')[0].trim();

    meterDisplay.textContent = `${meters.toLocaleString('en-IN')} Meters`;

    // Tier discount
    let discountPct = 0;
    let leadTime = "3-4 Days";
    if (meters >= 10000) {
      discountPct = 15;
      leadTime = "8-12 Days";
    } else if (meters >= 5000) {
      discountPct = 10;
      leadTime = "6-8 Days";
    } else if (meters >= 2000) {
      discountPct = 5;
      leadTime = "4-6 Days";
    }

    const basePerMeter = unitRate + selectedFinishAddon;
    const discountedPerMeter = basePerMeter * (1 - discountPct / 100);
    const totalCost = discountedPerMeter * meters;

    if (sumBaseRate) sumBaseRate.textContent = `₹${unitRate.toFixed(2)}/m`;
    if (sumMeters) sumMeters.textContent = `${meters.toLocaleString('en-IN')}m`;
    if (sumFinishCost) sumFinishCost.textContent = selectedFinishAddon > 0 ? `+₹${selectedFinishAddon.toFixed(2)}/m` : 'Included';
    if (sumDiscount) {
      sumDiscount.innerHTML = discountPct > 0 
        ? `<span class="discount-badge">${discountPct}% Volume Discount</span>`
        : `<span style="color: var(--text-muted);">No Tier Discount</span>`;
    }
    if (sumEstimatedTotal) sumEstimatedTotal.textContent = `₹${Math.round(totalCost).toLocaleString('en-IN')}`;
    if (sumDeliveryDays) sumDeliveryDays.textContent = leadTime;

    if (calcWhatsAppBtn) {
      const msg = encodeURIComponent(
        `Hello Mahalaxmi Textiles! I would like to request an official wholesale quotation:\n\n` +
        `• Fabric: ${fabricName}\n` +
        `• Quantity: ${meters.toLocaleString('en-IN')} Meters\n` +
        `• Finish: ${selectedFinishName}\n` +
        `• Estimated Quote: ₹${Math.round(totalCost).toLocaleString('en-IN')}\n\n` +
        `Please send fabric swatch kit and bulk dispatch schedule.`
      );
      calcWhatsAppBtn.href = `https://wa.me/919876543210?text=${msg}`;
    }
  }

  meterSlider.addEventListener('input', updateCalculation);
  fabricSelect.addEventListener('change', updateCalculation);
  updateCalculation();
}

// Pre-fill quote for a specific fabric and scroll to inquiry
window.requestQuoteFor = function(fabricName) {
  const reqInput = document.getElementById('inquiryFabricName');
  const section = document.getElementById('inquirySection');
  if (reqInput) {
    reqInput.value = `Sample & Bulk Quote Request for: ${fabricName}`;
  }
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// Inquiry Form Submission & Toast
function initInquiryForm() {
  const form = document.getElementById('rfqForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('clientName')?.value || 'Valued Client';
    showToast(`Thank you ${name}! Your sample & quotation request has been received. Our export team will contact you within 2 hours.`);
    form.reset();
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
