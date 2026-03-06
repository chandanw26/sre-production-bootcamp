1. System Components - 

API Service
Handles incoming HTTP requests.

Worker Service
Processes background jobs.

PostgreSQL
Stores persistent application data.

Redis
Used as cache and job queue.

2. Observability Stack - 

Prometheus, Grafana, Loki for monitoring.

3. Traffic Flow - 

Client → API → Database
       → Queue → Worker

4. Failure Scenarios

1 What happens if API crashes?

Requests will fail. Kubernetes restart policies will later be used to recover.

2 What happens if DB becomes slow?

3️⃣ What happens if worker stops processing?

4 What happens if Redis crashes?
