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

We should get the intimation of it in the dashboards we have created and steps would be taken accordingly.

3️⃣ What happens if worker stops processing?

Background jobs will get affected and Kubernetes should also take care of it as in case of API

4 What happens if Redis crashes?

System will get slow due to cache issues and all the job queue will also get affected, we should get the alert from dashboards.

