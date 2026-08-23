# Production Certification & CI/CD Gates v1.0

## Required sequence
PR → typecheck → lint → unit tests → integration tests → dependency scan → secret scan → build → staging → smoke tests → security validation → canary approval → production rollout → health verification.

## Gate invariants
- no forced production bypass
- failed required checks stop promotion
- deployment identity is least privilege
- production-impacting Auto Mode actions require configured approval
- rollback capability and evidence must be verified before certification
- certification is platform-issued, not application-declared

## Certification states
CHECKING → BLOCKED/FAILED or CERTIFIED → READY_FOR_RELEASE.
