const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/framartech.incloudsolutions?dlrf=MTdndDVidW10ajdrZw%3D%3D&utm_source=qr",
    label: "Instagram",
    icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="12" r="4.5" stroke="white" stroke-width="2"/>
      <circle cx="17.3" cy="6.7" r="1.3" fill="white"/>
    </svg>`,
  },
  facebook: {
    url: "https://www.facebook.com/share/1D9U8yYUBM/?mibextid=wwXIfr",
    label: "Facebook",
    icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.2 4.32 15.19 4.23 14 4.23c-2.38 0-4 1.45-4 4.11V10.5H7.5v3H10V21h3.5z" fill="white"/>
    </svg>`,
  },
  tiktok: {
    url: "https://www.tiktok.com/@framartech_incloudsol",
    label: "TikTok",
    icon: `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 3c.4 2.1 1.8 3.5 4 3.7v2.9c-1.4.1-2.7-.3-4-1.1v6.2c0 3.1-2.5 5.6-5.6 5.6S5.3 17.8 5.3 14.7c0-3 2.4-5.5 5.4-5.6v3.1a2.5 2.5 0 1 0 2.5 2.5V3h3.3z" fill="white"/>
    </svg>`,
  },
};

function renderLinks() {
  const container = document.getElementById("links");
  if (!container) return;

  const instagram = document.createElement("a");
  instagram.className = "link-btn instagram";
  instagram.href = SOCIAL_LINKS.instagram.url;
  instagram.target = "_blank";
  instagram.rel = "noopener noreferrer";
  instagram.innerHTML = `${SOCIAL_LINKS.instagram.icon}<span class="label">${SOCIAL_LINKS.instagram.label}</span>`;
  container.appendChild(instagram);

  const secondaryRow = document.createElement("div");
  secondaryRow.className = "secondary-links";

  ["facebook", "tiktok"].forEach((key) => {
    const data = SOCIAL_LINKS[key];
    const a = document.createElement("a");
    a.className = `link-btn ${key}`;
    a.href = data.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${data.icon}<span class="label">${data.label}</span>`;
    secondaryRow.appendChild(a);
  });

  container.appendChild(secondaryRow);
}

function renderYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderLinks();
  renderYear();
});
