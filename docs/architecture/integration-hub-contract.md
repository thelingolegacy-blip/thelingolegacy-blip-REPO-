# Integration Hub Contract v1.0

Every external integration exposes a normalized lifecycle:

`connect() → authenticate() → configure() → healthCheck() → getStatus() → disconnect()`

## Required properties
- least-privilege credentials
- explicit configuration state
- health/readiness evidence
- timeout and retry policy
- audit correlation ID
- no secret material in logs or client bundles
- failure state is surfaced as AUTH_REQUIRED, CONFIG_REQUIRED, DEGRADED, DISABLED, BLOCKED, or UNAVAILABLE

Integrations do not bypass Safety Gateway, Rule Engine, IAM, or deployment gates.
