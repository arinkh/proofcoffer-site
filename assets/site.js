const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-mail]").forEach((link) => {
  const subject = encodeURIComponent(link.dataset.subject || "ProofCoffer support");
  link.href = `mailto:${link.dataset.mail}?subject=${subject}`;
});
