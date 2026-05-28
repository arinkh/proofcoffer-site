# ProofCoffer Website

Static website package for `proofcoffer.com`.

This folder is ready for GitHub Pages or any plain static host. See `DEPLOYMENT.md` for Namecheap DNS, GitHub Pages, HTTPS, email forwarding, and App Store Connect URL steps.

## Files

- `index.html` - product landing page
- `privacy.html` and `privacy/` - App Store privacy policy URL
- `support.html` and `support/` - App Store support URL
- `terms.html` and `terms/` - terms and Apple standard EULA reference
- `assets/` - icon, CSS, and small JavaScript helpers

## Recommended Live URLs

- `https://proofcoffer.com/`
- `https://proofcoffer.com/privacy`
- `https://proofcoffer.com/support`
- `https://proofcoffer.com/terms`

The `.html` versions are also kept as fallback URLs:

- `https://proofcoffer.com/privacy.html`
- `https://proofcoffer.com/support.html`
- `https://proofcoffer.com/terms.html`

## Before Going Live

- Set up email forwarding for:
  - `support@proofcoffer.com`
  - `privacy@proofcoffer.com`
  - `feedback@proofcoffer.com`
  - `business@proofcoffer.com`
- If using GitHub Pages, enable Pages from `GitHub Actions` in repository settings.
- Configure the custom domain as `proofcoffer.com`, then add the Namecheap DNS records from `DEPLOYMENT.md`.
- Confirm the privacy policy and terms with a qualified legal professional before public launch.
- Add App Store / TestFlight links when Apple provides them.
