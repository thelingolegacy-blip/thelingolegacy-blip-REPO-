# Data Privacy & Retention Charter v1.0

## Principles
- collect only required data
- classify data before storage
- enforce purpose and access boundaries
- encrypt data in transit and at rest
- keep secrets outside application records and logs
- define retention and deletion policies per data class
- audit privileged access and policy changes

## Control planes
Firestore: operational state and bounded application data.
Cloud SQL: relational records and audit/governance records.
BigQuery: analytics with governed datasets and retention.
Cloud Storage: artifacts/media/reports with lifecycle controls.

Protected operations fail closed when required privacy controls cannot be evaluated.
