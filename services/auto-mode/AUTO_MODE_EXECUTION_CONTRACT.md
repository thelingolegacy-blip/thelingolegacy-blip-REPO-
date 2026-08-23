# Auto Mode Execution Contract v1.0

## Constitutional boundary
Auto Mode is an orchestrator, not an authority escalation mechanism.

## Execution lifecycle
OBSERVE -> DETECT -> CLASSIFY -> SAFETY_CHECK -> RULE_EVALUATION -> IAM_CHECK -> EXECUTE_ALLOWED_ACTION -> VERIFY -> AUDIT

Every action requires a trace ID, actor identity, environment, policy decision, authorization result, execution result, and verification result.

## Allowed without human approval
- health checks
- diagnostics
- test execution
- report generation
- blocker detection
- dependency monitoring
- staging validation
- dashboard updates
- incident creation/routing

## Approval required
- production deployment
- rollback
- policy modification
- IAM/permission changes
- secret/configuration changes
- destructive data operations

## Forbidden
Auto Mode cannot bypass Safety Gateway, Rule Engine, IAM, audit, approval gates, or fail-closed behavior.

## Failure behavior
Safety uncertainty, authorization failure, policy conflict, missing dependency, or verification failure => STOP, RECORD, REPORT.

## Idempotency
Every playbook invocation must carry an idempotency key. Replays must not create duplicate destructive effects.
