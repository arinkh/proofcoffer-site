# ProofCoffer Website Deployment

This folder is a static website for `proofcoffer.com`. It can be hosted by GitHub Pages, Wix static hosting, Namecheap hosting, Netlify, Cloudflare Pages, or any host that serves plain HTML/CSS/JS.

Clean URLs are included for App Store Connect and the app settings links:

- `/privacy` serves `privacy/index.html`
- `/support` serves `support/index.html`
- `/terms` serves `terms/index.html`

## Preferred Launch Path

Use GitHub Pages if the account plan supports Pages for this repository. GitHub Pages works for public repositories on GitHub Free and for private repositories on GitHub Pro, Team, Enterprise Cloud, and Enterprise Server.

1. Push the repository to GitHub.
2. Open the GitHub repository.
3. Go to `Settings > Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Add `proofcoffer.com` as the custom domain.
6. Wait for the workflow named `Deploy ProofCoffer Website`.
7. After DNS is correct and GitHub allows it, turn on `Enforce HTTPS`.

## Namecheap DNS Records

In Namecheap, open `Domain List > proofcoffer.com > Manage > Advanced DNS`.

For the root domain:

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |

For the `www` version:

| Type | Host | Value |
| --- | --- | --- |
| CNAME Record | www | arinkh.github.io |

Do not add a wildcard DNS record such as `*`.

## Verify DNS

Run these checks after saving DNS. Propagation can take up to 24 hours.

```sh
dig proofcoffer.com +noall +answer -t A
dig www.proofcoffer.com +nostats +nocomments +nocmd
```

The root domain should show the four GitHub Pages IP addresses above. The `www` record should point to `arinkh.github.io`.

## Required App Store URLs

Use these URLs in App Store Connect after the website is live:

- Marketing URL: `https://proofcoffer.com/`
- Privacy Policy URL: `https://proofcoffer.com/privacy`
- Support URL: `https://proofcoffer.com/support`
- Terms URL: `https://proofcoffer.com/terms`

The `.html` versions are also kept as fallback URLs:

- `https://proofcoffer.com/privacy.html`
- `https://proofcoffer.com/support.html`
- `https://proofcoffer.com/terms.html`

## Email Forwarding

Set these addresses in Namecheap or the chosen mail provider:

- `support@proofcoffer.com`
- `privacy@proofcoffer.com`
- `feedback@proofcoffer.com`
- `business@proofcoffer.com`

Forward them to a business email account that is separate from personal social accounts.

## Legal Review Before Public Launch

The privacy policy and terms are launch-ready drafts, not legal advice. Before public App Store release, review them with a qualified professional, especially around subscriptions, business use, backups, and user-created exports.
