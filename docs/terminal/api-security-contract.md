# Terminal API Security Contract v1.0

## Request boundary
All protected API requests require authenticated identity, authorization, request validation, rate limiting, safety evaluation, rule evaluation, and audit correlation.

## Required controls
- TLS in transit
- short-lived credentials where supported
- least-privilege service identities
- schema validation at ingress
- idempotency for mutating operations where applicable
- correlation/trace ID propagation
- structured security logging without secrets
- rate limits and abuse protection
- fail-closed behavior on authorization or policy uncertainty
- explicit environment separation

## Sensitive data
Secrets, tokens, private keys, and authentication material must never be returned to frontend clients, stored in application records, or emitted into logs.

## Production gate
Security-control failures block certification and deployment; the UI cannot override the API security boundary.
