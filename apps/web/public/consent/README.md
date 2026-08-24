# Lingo Legacy Consent Guard

The consent guard is framework-neutral and can be mounted by the eventual web application shell.

## Constitutional behavior

- Essential operation remains available.
- Optional analytics, marketing, and personalization remain disabled until explicit consent.
- Consent withdrawal must be available.
- Do not treat client-side consent as authorization for protected operations.
- Safety, IAM, policy, and server-side enforcement remain authoritative.

## Integration contract

The future web shell should load `cookie-box.js` before optional tracking integrations and provide a visible consent-management entry point.
