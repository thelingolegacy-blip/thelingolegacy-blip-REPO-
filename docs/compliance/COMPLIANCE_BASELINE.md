# Lingo Legacy Compliance Baseline v1.0

## Purpose
Production baseline for privacy, consent, safety, auditability, accessibility, and data-governance controls.

## Mandatory controls
- Privacy notice and terms links must be accessible from every public application surface.
- Consent must be explicit for non-essential cookies and storage technologies.
- Essential security/session storage may operate only when necessary for the requested service.
- Analytics, advertising, personalization, and social/media cookies remain disabled until consent is recorded where applicable.
- Consent records must include timestamp, policy/version, consent categories, and a non-sensitive consent identifier.
- Users must be able to reopen preferences and withdraw non-essential consent.
- Do not collect secrets, passwords, payment credentials, or unnecessary sensitive data in consent logs.
- Safety Gateway and Rule Engine remain authoritative; UI controls cannot bypass them.
- Fail closed for unknown consent state when a non-essential technology requires consent.
- Accessibility target: keyboard navigation, visible focus, semantic controls, reduced-motion support, and screen-reader labels.
- Retention and deletion schedules must be configured per jurisdiction and data category before production activation.

## Release gate
A production deployment is blocked until privacy/terms URLs, consent categories, jurisdiction configuration, retention policy, and audit sink are configured and verified.

This document is an engineering baseline, not legal advice. Jurisdiction-specific legal review remains required before production launch.
