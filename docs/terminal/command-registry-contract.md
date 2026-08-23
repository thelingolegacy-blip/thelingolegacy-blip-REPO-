# Terminal Command Registry Contract v1.0

Every operator command must declare:
- command_id
- version
- domain
- required_role
- target/resource
- environment scope
- safety classification
- rule-engine action
- approval requirement
- timeout
- audit requirement
- verification procedure

Execution pipeline:
AUTHENTICATE -> AUTHORIZE -> VALIDATE -> SAFETY CHECK -> RULE EVALUATION -> EXECUTE -> VERIFY -> AUDIT

Unknown commands fail closed. A frontend command cannot grant permissions. Production-impacting commands require their configured approval gate.

Canonical examples:
- lingo platform status --deep
- lingo safety policies
- lingo auto status
- lingo auto simulate <event>
- lingo devops check
- lingo apps certify <app>
