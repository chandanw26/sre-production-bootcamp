1. Overview - 

This repository contains a production simulation project used to learn Site Reliability Engineering practices.
The goal is to build, operate, monitor, and improve a distributed application while applying real SRE concepts such as SLOs, observability, incident response, and automation.

2. Architecture Overview

The system will include:

API service
Worker service
PostgreSQL database
Redis cache
Message queue
Kubernetes deployment
Observability stack
CI/CD pipeline

3. Reliability Goals

High availability
Low latency
fast incident detection
automated recovery
We will formalize this later with SLOs.

4. Repository Structure

Each directory is for:

app/ → application code
infra/ → infrastructure definitions
k8s/ → Kubernetes manifests
observability/ → monitoring stack configuration
runbooks/ → operational procedures
docs/ → system documentation

5. What Production Means Here?

Production means:

real monitoring
automated deployment
clear incident handling
reliability objectives

