# Auto Mode Playbooks v1.0

| Playbook | Default decision | Production impact |
|---|---|---|
| health-check | ALLOW | None |
| diagnostics | ALLOW | None |
| test-execution | ALLOW | None |
| report-generation | ALLOW | None |
| blocker-detection | ALLOW | None |
| dependency-monitoring | ALLOW | None |
| staging-validation | ALLOW | Staging only |
| dashboard-update | ALLOW | None |
| incident-routing | ALLOW | Creates/routs incident |
| deployment-proposal | REQUIRE_APPROVAL | Yes |
| rollback-proposal | REQUIRE_APPROVAL | Yes |
| policy-change-proposal | REQUIRE_APPROVAL | Yes |

## Playbook contract
Each playbook declares inputs, required permissions, permitted environments, rate limits, safety policy IDs, verification checks, and audit event type.

No playbook may grant itself additional permissions or change its own policy.
