# Frontend Constitutional Contract v1.0

The web frontend is an application surface, not an enforcement authority.

## Required request boundary

Browser UI -> authenticated API -> Safety Gateway -> Rule Engine -> Control Plane -> service

## Non-negotiable rules

1. UI controls cannot bypass server authorization.
2. Hidden buttons are not security controls.
3. Production actions require server-side policy and IAM checks.
4. Consent controls govern optional client-side tracking only; they do not replace privacy, safety, or authorization enforcement.
5. Error states fail closed for protected operations.
6. Every privileged operation must produce an auditable result.
7. Accessibility is a release requirement: keyboard access, visible focus, semantic labels, and reduced-motion support.

## Visual system

The Terminal may use a premium dark, high-contrast visual language with rich purple/gold, red/black/white, or other product-specific palettes. Visual styling must never reduce readability, accessibility, safety messaging, or operator visibility.

## Application-specific design

Kotton's Code is a child-friendly experience: bright/floating-cloud motifs, gentle motion, clear language, and no adult-oriented visual treatment. Other Lingo Legacy properties may use the mature Shadow War studio aesthetic where appropriate.
