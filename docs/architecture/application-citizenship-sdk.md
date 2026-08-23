# Application Citizenship SDK v1.0

## Constitutional contract
Applications are platform citizens. They must use platform identity, Safety Gateway, Rule Engine, audit, observability, and deployment gates. Applications cannot override platform decisions or self-certify production readiness.

## Enforcement path
Identity → API/WAF → Safety Gateway → Rule Engine → Control Plane API → Service → Audit/Telemetry.

## Required checks
- identity binding
- IAM scope
- secrets binding
- safety gateway integration
- rule-engine integration
- audit events
- observability
- CI/CD gates
- rollback evidence
- privacy/data-boundary compliance

## Fail-safe
Unavailable safety or policy dependencies block protected actions. No fail-open production path exists.
