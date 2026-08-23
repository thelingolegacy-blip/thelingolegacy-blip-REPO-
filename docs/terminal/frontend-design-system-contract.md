# Terminal Frontend Design System Contract v1.0

## Scope
Canonical UI/UX contract for the Lingo Legacy Terminal web and operator surfaces.

## Surfaces
- Overview
- Command Center
- Control Planes
- Security
- DevOps
- Safety
- Parent
- AI
- Data
- Integrations
- Applications
- Auto Mode
- Incidents
- Audit
- Settings

## Visual contract
- Dense enterprise-console information hierarchy
- Responsive desktop/tablet/mobile layouts
- Keyboard-accessible command palette
- Status chips must map only to canonical platform states
- Destructive actions require explicit confirmation and policy authorization
- No UI control may imply authority that the backend has not granted
- Loading, empty, error, degraded, blocked, and unauthorized states are first-class designs
- Accessibility target: WCAG 2.2 AA

## Safety UI rule
The frontend is presentation and operator intent only. Backend IAM, Safety Gateway, Rule Engine, and certification gates remain authoritative.
