Create the static roadmap under `src/data/roadmap/`.

Do not research, expand, remove, rename, or invent roadmap content. Use the curriculum below exactly. Your job is only to structure it into TypeScript and connect prerequisites.

Each card must contain:

```ts
{
  id,
  title,
  description,
  level,
  category,
  prerequisites,
  difficulty,
  learnToComplete: string[],
  practice: string[],
  azureServices: string[]
}
```

The application is only a self-learning progress tracker. Do not add quizzes, lessons, exams, or course pages.

# LEVEL 1 — FOUNDATIONS

## Cloud Computing Basics

learnToComplete:

* Cloud computing and on-demand resource provisioning
* IaaS, PaaS, and SaaS
* Public, private, and hybrid cloud
* Shared responsibility model
* Scalability vs elasticity
* High availability vs fault tolerance
* Regions and availability concepts
* CapEx vs OpEx and consumption-based pricing

practice:

* Compare hosting the same application on-premises, IaaS, and PaaS
* Identify customer vs Microsoft responsibilities for common Azure services
* Compare scaling up vs scaling out

azureServices:

* Azure Portal
* Azure Pricing Calculator
* Azure Service Health

## Networking Basics

learnToComplete:

* IPv4 addressing
* Public vs private IP addresses
* CIDR notation
* Subnetting
* Default gateways
* Routing and route tables
* DNS resolution
* TCP vs UDP
* Common ports
* NAT
* HTTP, HTTPS, and TLS
* Firewalls and basic VPN concepts

practice:

* Calculate CIDR subnet ranges
* Split an address range into multiple subnets
* Use ping, traceroute/tracert, nslookup, and curl
* Inspect DNS and routing information on your machine

azureServices:

* None required

## Linux Basics

learnToComplete:

* Linux filesystem structure
* Files, directories, and permissions
* Users and groups
* Processes
* Services and systemd
* SSH
* Package management
* Environment variables
* Basic Bash
* Linux network commands
* System and application logs

practice:

* Create users and modify permissions
* Manage a systemd service
* Connect to another machine using SSH
* Inspect processes, ports, routes, and logs

azureServices:

* Azure Virtual Machines

## Windows & PowerShell

learnToComplete:

* Windows Server fundamentals
* Windows users and groups
* Services
* Event Viewer
* Windows networking tools
* PowerShell commands and syntax
* PowerShell objects
* Pipeline usage
* PowerShell modules
* Basic remote administration

practice:

* Inspect services and processes using PowerShell
* Query network configuration
* Filter PowerShell objects through the pipeline
* Inspect Windows event logs

azureServices:

* Azure Virtual Machines
* Azure PowerShell

## Git & GitHub

learnToComplete:

* Git repositories
* Commits
* Branches
* Merge and rebase concepts
* Remote repositories
* Pull requests
* Merge conflicts
* `.gitignore`
* Basic collaborative Git workflow

practice:

* Create a repository and push it to GitHub
* Work with feature branches
* Create and merge a pull request
* Resolve a merge conflict

azureServices:

* None required

## APIs, JSON & YAML

learnToComplete:

* REST API fundamentals
* HTTP methods
* HTTP status codes
* Headers
* Authentication tokens
* JSON syntax and structure
* YAML syntax and structure
* Environment variables
* CLI-based API interaction

practice:

* Send GET and POST requests using curl or another HTTP client
* Read and modify JSON payloads
* Create YAML configuration files
* Inspect API errors and HTTP response codes

azureServices:

* Azure REST API
* Azure CLI

## Azure Fundamentals

learnToComplete:

* Azure geographies
* Regions
* Availability Zones
* Region pairs
* Azure tenant
* Management hierarchy
* Subscriptions
* Resource Groups
* Resources
* Azure Resource Manager
* Azure Portal
* Azure CLI
* Azure PowerShell
* Cloud Shell
* Tags
* Resource locks
* Azure Advisor
* Azure pricing fundamentals

practice:

* Navigate the Azure Portal
* Create and delete a Resource Group
* List Azure resources using Azure CLI
* Apply tags and resource locks
* Explore Azure Advisor recommendations

azureServices:

* Azure Resource Manager
* Azure Portal
* Azure CLI
* Azure Advisor

# LEVEL 2 — CORE CLOUD ENGINEER

## Microsoft Entra ID

learnToComplete:

* Microsoft Entra tenant
* Users
* Groups
* Guest identities
* Administrative units
* Authentication
* MFA
* Self-service password reset
* Basic Conditional Access concepts

practice:

* Create users and groups
* Assign users to groups
* Inspect user authentication settings
* Explore Conditional Access configuration

azureServices:

* Microsoft Entra ID

## Azure RBAC

learnToComplete:

* Authentication vs authorization
* Azure RBAC
* Built-in roles
* Role assignments
* Management group, subscription, resource group, and resource scopes
* Permission inheritance
* Least privilege
* Custom role concepts

practice:

* Assign Reader and Contributor roles
* Apply roles at different scopes
* Inspect inherited permissions
* Remove unnecessary permissions

azureServices:

* Azure RBAC
* Microsoft Entra ID

## Managed Identities

learnToComplete:

* Service principals
* Managed identities
* System-assigned identities
* User-assigned identities
* Token-based resource access
* Identity lifecycle
* RBAC with managed identities

practice:

* Enable a managed identity for an Azure resource
* Grant it access to another Azure service
* Access the target service without storing credentials

azureServices:

* Microsoft Entra ID
* Managed Identities
* Azure RBAC
* Azure Key Vault

## Virtual Networks

learnToComplete:

* VNet address spaces
* CIDR planning
* Azure network isolation
* VNet boundaries
* Network interfaces
* Private IP allocation
* Public IP concepts
* Azure routing fundamentals

practice:

* Create a VNet
* Create multiple address ranges
* Deploy resources into the VNet
* Inspect network interfaces and effective routes

azureServices:

* Azure Virtual Network
* Network Interface
* Network Watcher

## Subnets & Routing

learnToComplete:

* Azure subnets
* Subnet address planning
* System routes
* Route tables
* User Defined Routes
* Next-hop types
* Effective routes
* Route precedence

practice:

* Divide a VNet into multiple subnets
* Create a custom route table
* Associate routes with a subnet
* Inspect effective routes on a NIC

azureServices:

* Azure Virtual Network
* Route Tables
* Network Watcher

## NSG & ASG

learnToComplete:

* Network Security Groups
* Inbound and outbound rules
* Priority processing
* Service tags
* Application Security Groups
* Stateful filtering
* Effective security rules

practice:

* Restrict VM traffic using an NSG
* Create application groups
* Allow traffic between specific application tiers
* Inspect effective NSG rules

azureServices:

* Network Security Groups
* Application Security Groups
* Network Watcher

## Azure DNS

learnToComplete:

* DNS zones
* DNS records
* Public Azure DNS
* Private DNS zones
* VNet links
* Name resolution inside Azure
* Private DNS resolution concepts

practice:

* Create a DNS zone
* Create A and CNAME records
* Create a Private DNS zone
* Link a Private DNS zone to a VNet

azureServices:

* Azure DNS
* Azure Private DNS

## VNet Peering

learnToComplete:

* VNet peering
* Local and global peering
* Peering address-space requirements
* Traffic forwarding
* Gateway transit
* Non-transitive nature of standard peering

practice:

* Peer two VNets
* Test private connectivity between VMs
* Inspect peering status
* Experiment with traffic forwarding settings

azureServices:

* Azure Virtual Network
* VNet Peering
* Network Watcher

## Private Endpoints

learnToComplete:

* Private Endpoint
* Azure Private Link
* Private IP access to PaaS services
* Private DNS integration
* Service Endpoints vs Private Endpoints
* Public network access controls

practice:

* Create a storage account
* Connect using a Private Endpoint
* Configure Private DNS
* Disable public access and verify connectivity

azureServices:

* Azure Private Link
* Private Endpoint
* Azure Private DNS
* Azure Storage

## NAT Gateway

learnToComplete:

* Outbound internet connectivity
* Source NAT
* NAT Gateway
* Public IP association
* Subnet-level NAT
* SNAT port concepts

practice:

* Attach NAT Gateway to a subnet
* Verify outbound public IP
* Compare default outbound access with NAT Gateway

azureServices:

* Azure NAT Gateway
* Public IP
* Azure Virtual Network

## Virtual Machines

learnToComplete:

* VM sizes
* Images
* OS disks
* Data disks
* Managed disks
* Network interfaces
* VM extensions
* Availability options
* Boot diagnostics
* VM access and administration

practice:

* Deploy Linux and Windows VMs
* Connect using SSH and RDP
* Add a managed disk
* Resize a VM
* Inspect boot diagnostics

azureServices:

* Azure Virtual Machines
* Managed Disks
* Azure Bastion

## VM Scale Sets

learnToComplete:

* VM Scale Set architecture
* Instance templates
* Autoscaling
* Upgrade policies
* Load balancing integration
* Availability Zones

practice:

* Deploy a VM Scale Set
* Configure autoscaling
* Generate load and observe scaling
* Perform an instance upgrade

azureServices:

* Virtual Machine Scale Sets
* Azure Monitor
* Azure Load Balancer

## App Service

learnToComplete:

* App Service Plans
* Web Apps
* Runtime stacks
* Application settings
* Deployment slots
* Scaling
* Custom domains
* TLS
* Managed identities

practice:

* Deploy a web application
* Configure environment variables
* Create a deployment slot
* Scale the application
* Enable managed identity

azureServices:

* Azure App Service
* App Service Plans

## Azure Functions

learnToComplete:

* Serverless computing
* Function Apps
* Triggers
* Bindings
* Hosting plans
* Scaling
* Application settings
* Managed identities
* Event-driven execution

practice:

* Deploy an HTTP-triggered Function
* Create an event-triggered Function
* Configure application settings
* Inspect execution logs

azureServices:

* Azure Functions
* Azure Monitor
* Application Insights

## Storage Accounts

learnToComplete:

* Storage account types
* Storage endpoints
* LRS, ZRS, GRS, and GZRS
* Access keys
* Shared Access Signatures
* Entra authentication
* Storage firewall
* Private access
* Encryption

practice:

* Create a Storage Account
* Compare redundancy options
* Configure firewall restrictions
* Create a SAS token
* Access storage using Entra authentication

azureServices:

* Azure Storage

## Blob Storage

learnToComplete:

* Blob containers
* Block blobs
* Hot, cool, cold, and archive access concepts
* Lifecycle management
* Versioning
* Soft delete
* Access control
* Encryption

practice:

* Upload and download blobs
* Configure lifecycle rules
* Enable versioning
* Recover a deleted blob

azureServices:

* Azure Blob Storage

## Azure Files

learnToComplete:

* Azure file shares
* SMB
* NFS concepts
* Share quotas
* Authentication
* Azure File Sync concepts
* Backup

practice:

* Create a file share
* Mount it on a VM
* Configure authentication
* Inspect share metrics

azureServices:

* Azure Files
* Azure File Sync

## Managed Disks

learnToComplete:

* OS vs data disks
* Disk types
* Disk performance
* Snapshots
* Disk encryption
* Shared disk concepts
* Availability considerations

practice:

* Attach a disk to a VM
* Create a snapshot
* Create a disk from a snapshot
* Compare disk SKUs

azureServices:

* Azure Managed Disks
* Azure Virtual Machines

## Azure SQL

learnToComplete:

* Azure SQL Database
* Logical SQL servers
* Compute tiers
* Scaling
* Authentication
* Firewall rules
* Private connectivity
* Backups
* High availability concepts

practice:

* Deploy an Azure SQL Database
* Connect from an application or client
* Configure Entra authentication
* Restrict network access

azureServices:

* Azure SQL Database

## Azure Database for PostgreSQL

learnToComplete:

* Flexible Server
* Compute and storage configuration
* PostgreSQL authentication
* Networking
* Private access
* High availability
* Backups
* Scaling

practice:

* Deploy PostgreSQL Flexible Server
* Connect from a VM or application
* Configure private networking
* Review backup and HA settings

azureServices:

* Azure Database for PostgreSQL

## Cosmos DB

learnToComplete:

* NoSQL concepts
* Cosmos DB accounts
* Databases and containers
* Partition keys
* Request Units
* Consistency models
* Global distribution
* Autoscale concepts

practice:

* Create a Cosmos DB account
* Create a container with a partition key
* Insert and query documents
* Compare consistency options

azureServices:

* Azure Cosmos DB

## Azure Monitor

learnToComplete:

* Azure Monitor architecture
* Metrics
* Logs
* Activity Log
* Resource health
* Diagnostic settings
* Alerts
* Action Groups

practice:

* Inspect resource metrics
* Create an alert rule
* Configure an Action Group
* Send diagnostic logs to Log Analytics

azureServices:

* Azure Monitor
* Azure Alerts

## Log Analytics

learnToComplete:

* Log Analytics Workspace
* Data collection
* Azure Monitor Logs
* Tables
* Basic KQL queries
* Diagnostic Settings
* Retention

practice:

* Create a workspace
* Send resource logs to it
* Run basic queries
* Filter and summarize log data

azureServices:

* Log Analytics
* Azure Monitor

## Application Insights

learnToComplete:

* Application telemetry
* Requests
* Dependencies
* Exceptions
* Performance
* Application maps
* Availability tests
* Distributed application monitoring basics

practice:

* Enable Application Insights
* Generate application traffic
* Inspect requests and failures
* Inspect dependency calls

azureServices:

* Application Insights
* Azure Monitor

## Azure Backup

learnToComplete:

* Backup vault concepts
* Recovery Services Vault
* Backup policies
* Retention
* VM backups
* Restore points
* Restore operations

practice:

* Back up a VM
* Create a backup policy
* Trigger an on-demand backup
* Perform a restore

azureServices:

* Azure Backup
* Recovery Services Vault

## Azure Site Recovery

learnToComplete:

* Business continuity
* Replication
* Recovery plans
* Failover
* Test failover
* Planned vs unplanned failover
* Failback

practice:

* Explore Site Recovery configuration
* Create a recovery plan
* Understand a test-failover workflow

azureServices:

* Azure Site Recovery

# LEVEL 3 — ADVANCED CLOUD ENGINEER

## Bicep

learnToComplete:

* Declarative infrastructure
* Bicep syntax
* Resources
* Parameters
* Variables
* Outputs
* Modules
* Dependencies
* Deployment scopes
* Idempotent deployments

practice:

* Deploy a Resource Group architecture using Bicep
* Split infrastructure into modules
* Pass parameters between modules

azureServices:

* Azure Resource Manager
* Bicep
* Azure CLI

## Terraform

learnToComplete:

* Providers
* Resources
* Variables
* Outputs
* Locals
* Data sources
* Plan and apply workflow
* Resource dependencies
* Provider authentication
* AzureRM provider

practice:

* Deploy Azure networking using Terraform
* Run plan before apply
* Modify infrastructure and inspect the plan
* Destroy the environment

azureServices:

* Terraform
* AzureRM Provider
* Azure CLI

## Terraform State & Modules

learnToComplete:

* Terraform state
* Remote state
* State locking
* State security
* Terraform modules
* Module inputs and outputs
* Resource import
* Lifecycle rules
* Environment separation

practice:

* Store Terraform state remotely
* Build a reusable VNet module
* Import an existing Azure resource
* Separate dev and production configuration

azureServices:

* Terraform
* Azure Storage

## Docker

learnToComplete:

* Images
* Containers
* Dockerfile
* Image layers
* Ports
* Volumes
* Networking
* Environment variables
* Multi-stage builds
* Container registries

practice:

* Containerize an application
* Build and run the image
* Use volumes
* Create a multi-stage build

azureServices:

* None required

## Azure Container Registry

learnToComplete:

* Container registries
* Repositories
* Tags
* Push and pull
* Authentication
* RBAC
* Managed identity integration
* Image security concepts

practice:

* Create an ACR
* Push an image
* Pull the image from Azure
* Grant access using managed identity

azureServices:

* Azure Container Registry

## Azure Container Apps

learnToComplete:

* Container Apps environments
* Revisions
* Ingress
* Scaling
* KEDA concepts
* Secrets
* Managed identities
* Internal vs external applications

practice:

* Deploy a container
* Enable ingress
* Configure environment variables
* Configure autoscaling

azureServices:

* Azure Container Apps

## Kubernetes Fundamentals

learnToComplete:

* Kubernetes architecture
* Control plane
* Worker nodes
* Pods
* ReplicaSets
* Deployments
* Services
* Namespaces
* ConfigMaps
* Secrets

practice:

* Deploy an application to Kubernetes
* Scale a Deployment
* Expose an application using a Service
* Update a Deployment

azureServices:

* AKS later
* Local Kubernetes acceptable

## Kubernetes Networking

learnToComplete:

* Pod networking
* Cluster networking
* Services
* ClusterIP
* LoadBalancer
* Ingress
* Network Policies
* DNS inside Kubernetes

practice:

* Expose services internally and externally
* Configure Ingress
* Inspect pod-to-pod communication

azureServices:

* Azure Kubernetes Service

## Kubernetes Storage

learnToComplete:

* Volumes
* Persistent Volumes
* Persistent Volume Claims
* Storage Classes
* Stateful workload concepts
* Dynamic provisioning

practice:

* Deploy a stateful workload
* Create a PVC
* Restart a pod and verify data persistence

azureServices:

* Azure Kubernetes Service
* Azure Disk CSI
* Azure Files CSI

## Kubernetes Security

learnToComplete:

* Kubernetes RBAC
* Service Accounts
* Secrets
* Namespaces
* Security contexts
* Image security
* Network Policies
* Least privilege

practice:

* Create a restricted Kubernetes role
* Bind it to a user or service account
* Apply network restrictions

azureServices:

* Azure Kubernetes Service
* Microsoft Entra ID

## AKS Architecture

learnToComplete:

* Managed control plane
* Node pools
* System and user node pools
* AKS Automatic vs Standard
* Cluster upgrades
* Availability concepts

practice:

* Deploy an AKS cluster
* Add a node pool
* Inspect cluster and node resources

azureServices:

* Azure Kubernetes Service

## AKS Networking

learnToComplete:

* AKS networking models
* Azure CNI
* Pod address planning
* Load balancers
* Ingress
* Private clusters
* Network Policies

practice:

* Deploy AKS into a custom VNet
* Expose an application
* Configure Ingress

azureServices:

* AKS
* Azure Virtual Network
* Azure Load Balancer

## AKS Identity

learnToComplete:

* Entra integration
* Kubernetes RBAC
* Azure RBAC for Kubernetes
* Managed identities
* Workload Identity
* Service accounts

practice:

* Integrate AKS with Entra ID
* Configure workload identity
* Access an Azure resource without secrets

azureServices:

* AKS
* Microsoft Entra ID
* Managed Identities

## AKS Scaling

learnToComplete:

* Horizontal Pod Autoscaler
* Cluster Autoscaler
* KEDA
* Resource requests
* Resource limits
* Scaling signals

practice:

* Configure HPA
* Generate load
* Observe pod scaling
* Configure node autoscaling

azureServices:

* AKS
* Azure Monitor
* KEDA

## AKS Operations

learnToComplete:

* Cluster upgrades
* Node upgrades
* Monitoring
* Container Insights
* Prometheus
* Backup considerations
* Troubleshooting
* Operational maintenance

practice:

* Monitor cluster health
* Inspect workload logs
* Perform a controlled upgrade
* Troubleshoot a failed workload

azureServices:

* AKS
* Azure Monitor
* Managed Prometheus
* Container Insights

## GitHub Actions

learnToComplete:

* Workflows
* Events
* Jobs
* Steps
* Actions
* Runners
* Secrets
* Environments
* OIDC authentication
* Azure deployment workflows

practice:

* Build an application with GitHub Actions
* Deploy to Azure
* Replace static Azure credentials with OIDC

azureServices:

* GitHub Actions
* Microsoft Entra ID

## Azure DevOps

learnToComplete:

* Organizations
* Projects
* Azure Repos
* Azure Pipelines
* Artifacts
* Service connections
* Environments
* Approvals

practice:

* Create an Azure DevOps project
* Build a pipeline
* Deploy an Azure resource or application

azureServices:

* Azure DevOps

## CI/CD

learnToComplete:

* Continuous Integration
* Continuous Delivery
* Build artifacts
* Automated testing concepts
* Environment promotion
* Pipeline variables
* Secrets
* Deployment approvals

practice:

* Build a complete build-and-deploy pipeline
* Promote an artifact between environments

azureServices:

* GitHub Actions
* Azure Pipelines

## IaC Pipelines

learnToComplete:

* Terraform/Bicep automation
* Plan validation
* Infrastructure review
* State handling
* Credentials
* Environment separation
* Deployment approvals

practice:

* Run Terraform plan in CI
* Require approval before apply
* Deploy infrastructure automatically

azureServices:

* GitHub Actions or Azure Pipelines
* Terraform
* Bicep

## Deployment Strategies

learnToComplete:

* Rolling deployments
* Blue/green
* Canary
* Deployment slots
* Traffic shifting
* Rollback strategies

practice:

* Perform a slot-based deployment
* Simulate a rollback
* Compare blue/green and canary approaches

azureServices:

* Azure App Service
* AKS
* Azure Front Door

## Azure Key Vault

learnToComplete:

* Secrets
* Keys
* Certificates
* RBAC
* Managed identity access
* Rotation concepts
* Private access
* Soft delete and purge protection

practice:

* Store a secret
* Access it using managed identity
* Restrict public network access

azureServices:

* Azure Key Vault

## Azure Firewall

learnToComplete:

* Azure Firewall architecture
* Network rules
* Application rules
* DNAT
* Firewall Policy
* Threat intelligence
* Logging
* Forced routing concepts

practice:

* Deploy Azure Firewall
* Route subnet traffic through it
* Create network and application rules

azureServices:

* Azure Firewall
* Firewall Policy
* Route Tables

## WAF & DDoS Protection

learnToComplete:

* Layer 7 protection
* WAF policies
* Managed rules
* Custom rules
* DDoS protection
* Application Gateway WAF
* Front Door WAF

practice:

* Attach a WAF policy
* Inspect WAF logs
* Compare WAF and DDoS responsibilities

azureServices:

* Application Gateway WAF
* Azure Front Door WAF
* Azure DDoS Protection

## Microsoft Defender for Cloud

learnToComplete:

* Cloud security posture management
* Security recommendations
* Secure Score
* Defender plans
* Vulnerability findings
* Regulatory compliance view
* Workload protection concepts

practice:

* Review Secure Score
* Investigate security recommendations
* Inspect Defender findings

azureServices:

* Microsoft Defender for Cloud

## Zero Trust

learnToComplete:

* Verify explicitly
* Least privilege
* Assume breach
* Identity-centric security
* Network segmentation
* Device and workload trust
* Continuous monitoring

practice:

* Review an Azure design and identify violations of Zero Trust principles
* Replace a secret-based authentication path with managed identity

azureServices:

* Microsoft Entra ID
* Conditional Access
* Managed Identities
* Azure Firewall
* Private Link

## KQL

learnToComplete:

* KQL syntax
* Filtering
* Projection
* Aggregation
* Sorting
* Time ranges
* Joins
* Summarization

practice:

* Query Azure logs
* Build queries for failed requests and security events
* Create aggregated operational queries

azureServices:

* Log Analytics
* Azure Monitor

## Centralized Logging

learnToComplete:

* Central log collection
* Diagnostic Settings
* Workspace architecture
* Resource logs
* Activity logs
* Retention
* Log access controls

practice:

* Send logs from several resources to one workspace
* Query cross-resource events

azureServices:

* Azure Monitor
* Log Analytics

## Distributed Tracing

learnToComplete:

* Traces
* Requests
* Dependencies
* Correlation
* Latency
* Failure propagation
* Application topology

practice:

* Trace one request across multiple application components
* Identify a slow dependency

azureServices:

* Application Insights

## Alerting

learnToComplete:

* Metric alerts
* Log alerts
* Alert rules
* Action Groups
* Severity
* Noise reduction
* Dynamic thresholds concepts

practice:

* Create metric and log alerts
* Route notifications through Action Groups

azureServices:

* Azure Monitor
* Action Groups

# LEVEL 4 — SENIOR CLOUD ENGINEER

## Azure Load Balancer

learnToComplete:

* Layer 4 load balancing
* Backend pools
* Health probes
* Load balancing rules
* Inbound NAT
* Internal vs public load balancers
* HA Ports concepts

practice:

* Load balance traffic between multiple VMs
* Test health-probe failure

azureServices:

* Azure Load Balancer

## Application Gateway

learnToComplete:

* Layer 7 load balancing
* Listeners
* Backend pools
* Routing rules
* TLS termination
* Path-based routing
* Health probes
* WAF integration

practice:

* Route different URL paths to different backends
* Configure HTTPS termination

azureServices:

* Azure Application Gateway

## Azure Front Door

learnToComplete:

* Global application delivery
* Anycast
* Origins
* Origin groups
* Health probes
* Routing
* WAF
* Global failover
* CDN concepts

practice:

* Route traffic between two regional backends
* Configure health-based failover

azureServices:

* Azure Front Door

## VPN Gateway

learnToComplete:

* Site-to-Site VPN
* Point-to-Site VPN
* VPN Gateway
* Gateway subnet
* Local Network Gateway
* IPsec/IKE
* Active-active concepts
* BGP basics

practice:

* Design a Site-to-Site connection
* Configure a Point-to-Site VPN when practical

azureServices:

* Azure VPN Gateway

## ExpressRoute

learnToComplete:

* Private Azure connectivity
* ExpressRoute circuits
* Peering
* Providers
* Gateway
* Redundancy
* BGP
* ExpressRoute vs VPN

practice:

* Design an ExpressRoute architecture
* Compare ExpressRoute and Site-to-Site VPN for several scenarios

azureServices:

* Azure ExpressRoute

## Hub-Spoke Architecture

learnToComplete:

* Hub VNet
* Spoke VNets
* Shared services
* Centralized firewall
* Peering
* UDRs
* DNS
* Gateway transit
* Network segmentation

practice:

* Build a hub-and-spoke network
* Route spoke traffic through a central firewall

azureServices:

* Azure Virtual Network
* Azure Firewall
* VNet Peering
* Route Tables

## Virtual WAN

learnToComplete:

* Virtual WAN
* Virtual hubs
* Branch connectivity
* Site-to-Site
* Point-to-Site
* ExpressRoute integration
* Hub routing
* Secured virtual hubs

practice:

* Compare Virtual WAN against traditional hub-spoke
* Design a multi-region WAN topology

azureServices:

* Azure Virtual WAN

## Management Groups

learnToComplete:

* Management group hierarchy
* Tenant root
* Subscription inheritance
* RBAC inheritance
* Policy inheritance
* Organizational design

practice:

* Design a management group hierarchy
* Move subscriptions through a sample hierarchy

azureServices:

* Azure Management Groups

## Subscription Design

learnToComplete:

* Subscription boundaries
* Workload isolation
* Billing boundaries
* Environment separation
* Platform vs application subscriptions
* Subscription limits
* Ownership

practice:

* Design subscriptions for an enterprise with dev, prod, security, connectivity, and shared services

azureServices:

* Azure Subscriptions
* Management Groups

## Azure Policy

learnToComplete:

* Policy definitions
* Assignments
* Initiatives
* Effects
* Exemptions
* Remediation
* Policy scope
* Policy compliance

practice:

* Deny deployment of a non-compliant resource
* Enforce required tags
* Build an initiative

azureServices:

* Azure Policy

## Enterprise RBAC

learnToComplete:

* Enterprise authorization design
* Role scopes
* Group-based assignment
* Custom roles
* Privileged roles
* Separation of duties
* PIM concepts

practice:

* Design RBAC for platform, security, networking, and application teams

azureServices:

* Azure RBAC
* Microsoft Entra PIM

## Governance Automation

learnToComplete:

* Governance as code
* Automated Policy assignment
* Automated RBAC
* Resource Graph
* Compliance reporting
* Drift detection concepts

practice:

* Deploy policy assignments using IaC
* Query resources using Resource Graph

azureServices:

* Azure Policy
* Azure Resource Graph
* Bicep
* Terraform

## Azure Landing Zones

learnToComplete:

* Azure Landing Zone principles
* Platform vs application landing zones
* Management hierarchy
* Identity
* Connectivity
* Governance
* Management
* Security
* Subscription model

practice:

* Study and diagram an enterprise landing zone
* Map platform responsibilities to subscriptions

azureServices:

* Azure Landing Zones
* Management Groups
* Azure Policy

## Platform Landing Zone

learnToComplete:

* Platform subscriptions
* Connectivity
* Identity
* Management
* Security
* Shared services
* Centralized governance

practice:

* Design a platform landing-zone structure
* Define which shared services belong centrally

azureServices:

* Azure Landing Zones

## Application Landing Zones

learnToComplete:

* Workload subscriptions
* Environment isolation
* Workload ownership
* Policy inheritance
* Network connectivity
* Application team responsibilities

practice:

* Design landing zones for several application teams

azureServices:

* Azure Landing Zones

## Connectivity Architecture

learnToComplete:

* Hub-spoke
* Virtual WAN
* Hybrid connectivity
* DNS
* Centralized egress
* Private connectivity
* Network segmentation
* Regional connectivity design

practice:

* Produce an enterprise connectivity diagram

azureServices:

* Azure Virtual WAN
* Azure Firewall
* ExpressRoute
* VPN Gateway
* Private DNS

## Subscription Vending

learnToComplete:

* Automated subscription provisioning
* Subscription placement
* Baseline policies
* Baseline RBAC
* Networking integration
* Standard resource configuration
* Self-service concepts

practice:

* Design a subscription vending workflow
* Automate baseline configuration conceptually or with IaC

azureServices:

* Azure Landing Zones
* Azure Policy
* Terraform or Bicep

## High Availability

learnToComplete:

* Availability concepts
* Availability Zones
* Redundancy
* Health probes
* Autoscaling
* Fault domains
* Removing single points of failure

practice:

* Review an architecture for single points of failure
* Redesign it for higher availability

azureServices:

* Availability Zones
* Load Balancer
* VM Scale Sets

## RTO & RPO

learnToComplete:

* Recovery Time Objective
* Recovery Point Objective
* Business requirements
* Data loss tolerance
* Recovery time tolerance
* Backup frequency
* Replication choices

practice:

* Define RTO and RPO for example workloads
* Select appropriate recovery approaches

azureServices:

* Azure Backup
* Azure Site Recovery

## Multi-Zone Architecture

learnToComplete:

* Zonal resources
* Zone-redundant resources
* Data replication across zones
* Zone failure
* Load distribution
* Zonal dependency risks

practice:

* Design a workload that survives a zone failure

azureServices:

* Availability Zones
* Zone-redundant Azure services

## Multi-Region Architecture

learnToComplete:

* Regional failure scenarios
* Active-active
* Active-passive
* Global routing
* Data replication
* Regional dependencies
* Failover
* Recovery

practice:

* Design a two-region production architecture
* Simulate regional dependency failure on paper

azureServices:

* Azure Front Door
* Azure Traffic Manager
* Geo-redundant data services

## Disaster Recovery

learnToComplete:

* Backup vs DR
* Recovery plans
* Failover
* Failback
* DR runbooks
* DR testing
* Dependency recovery order
* Business continuity

practice:

* Write a recovery runbook
* Perform or simulate a test failover

azureServices:

* Azure Site Recovery
* Azure Backup

## SLI / SLO / SLA

learnToComplete:

* Service Level Indicators
* Service Level Objectives
* Service Level Agreements
* Availability measurement
* Latency measurement
* Error rates
* Error budgets

practice:

* Define SLIs and SLOs for an example web service

azureServices:

* Azure Monitor
* Application Insights

## Incident Response

learnToComplete:

* Incident detection
* Severity classification
* Triage
* Escalation
* Mitigation
* Communication
* Recovery
* Evidence preservation

practice:

* Simulate an outage response
* Create an incident timeline

azureServices:

* Azure Monitor
* Service Health
* Log Analytics

## Runbooks

learnToComplete:

* Operational procedures
* Repeatable recovery
* Preconditions
* Verification
* Escalation
* Automation opportunities

practice:

* Write a runbook for a failed application deployment
* Write a runbook for restoring service connectivity

azureServices:

* Azure Automation where appropriate

## Postmortems

learnToComplete:

* Blameless postmortems
* Incident timeline
* Root cause
* Contributing factors
* Corrective actions
* Follow-up ownership

practice:

* Write a postmortem for a simulated Azure outage

azureServices:

* None required

## Capacity Planning

learnToComplete:

* Resource utilization
* Growth estimation
* Performance limits
* Scaling thresholds
* Capacity headroom
* Cost trade-offs

practice:

* Analyze metrics and estimate future capacity requirements

azureServices:

* Azure Monitor
* Cost Management

## Azure Cost Management

learnToComplete:

* Cost analysis
* Budgets
* Cost alerts
* Cost allocation
* Tags
* Forecasts
* Cost exports

practice:

* Create a budget
* Inspect cost by resource or tag
* Identify top cost drivers

azureServices:

* Azure Cost Management

## Rightsizing

learnToComplete:

* Resource utilization
* Underutilized resources
* VM sizing
* Database sizing
* Scaling
* Azure Advisor recommendations

practice:

* Review underutilized resources
* Compare alternative SKUs

azureServices:

* Azure Advisor
* Azure Monitor
* Cost Management

## Reservations & Savings Plans

learnToComplete:

* Reservation concepts
* Savings Plans
* Commitment periods
* Utilization
* Coverage
* Appropriate workload patterns

practice:

* Compare pay-as-you-go against commitment options for steady workloads

azureServices:

* Azure Reservations
* Azure Savings Plan for Compute

## Cost Optimization

learnToComplete:

* Architecture cost trade-offs
* Autoscaling
* Storage tiers
* Data transfer costs
* Idle resources
* Managed service costs
* FinOps culture

practice:

* Optimize an example architecture for cost without violating its reliability requirements

azureServices:

* Azure Cost Management
* Azure Advisor

## Reusable IaC Modules

learnToComplete:

* Module design
* Inputs
* Outputs
* Versioning
* Defaults
* Composition
* Documentation
* Backward compatibility

practice:

* Build reusable networking and application modules

azureServices:

* Terraform
* Bicep

## Golden Paths

learnToComplete:

* Standardized deployment paths
* Approved architecture patterns
* Developer experience
* Guardrails
* Templates
* Automation

practice:

* Design a standard path for deploying a web application to Azure

azureServices:

* Azure Developer tooling
* GitHub Actions
* Azure DevOps
* IaC

## Self-Service Infrastructure

learnToComplete:

* Developer self-service
* Provisioning automation
* Guardrails
* Approval workflows
* Standard environments
* Ownership boundaries

practice:

* Design a self-service flow for requesting a new application environment

azureServices:

* Azure Landing Zones
* IaC
* CI/CD

## Policy as Code

learnToComplete:

* Version-controlled policies
* Policy definitions in code
* Automated assignments
* Review workflows
* Testing
* Compliance automation

practice:

* Store and deploy Azure Policy definitions from Git

azureServices:

* Azure Policy
* GitHub Actions or Azure Pipelines

## Shared Platform Services

learnToComplete:

* Centralized DNS
* Connectivity
* Logging
* Security
* Container registries
* Secrets
* Monitoring
* Shared identity capabilities

practice:

* Design a shared-services platform architecture

azureServices:

* Azure Firewall
* Private DNS
* Log Analytics
* Key Vault
* Azure Container Registry

# LEVEL 5 — CLOUD ARCHITECT

## Architecture Fundamentals

learnToComplete:

* Business requirements
* Functional requirements
* Non-functional requirements
* Constraints
* Assumptions
* Architecture trade-offs
* Technology selection
* Security requirements
* Availability requirements
* Cost requirements

practice:

* Convert a business scenario into technical requirements
* Produce architecture options and document trade-offs

azureServices:

* Multiple Azure services depending on scenario

## Azure Well-Architected Framework

learnToComplete:

* Reliability
* Security
* Cost Optimization
* Operational Excellence
* Performance Efficiency
* Trade-offs between pillars

practice:

* Perform a Well-Architected review of an existing design

azureServices:

* Azure Well-Architected Framework
* Azure Advisor

## Monolith vs Microservices

learnToComplete:

* Monolithic architecture
* Microservices
* Service boundaries
* Independent deployment
* Operational complexity
* Distributed system trade-offs
* Data ownership

practice:

* Compare monolith and microservices for the same business application

azureServices:

* App Service
* Container Apps
* AKS

## Event-Driven Architecture

learnToComplete:

* Events
* Producers
* Consumers
* Pub/sub
* Queues
* Eventual consistency
* Asynchronous processing
* Idempotency
* Retry handling

practice:

* Design an asynchronous order-processing architecture

azureServices:

* Azure Service Bus
* Event Grid
* Event Hubs
* Azure Functions

## Serverless Architecture

learnToComplete:

* Event-driven compute
* Stateless execution
* Scaling
* Cold starts
* Managed services
* Serverless integration
* Cost model

practice:

* Design a serverless API or processing workflow

azureServices:

* Azure Functions
* Logic Apps
* Event Grid
* API Management

## API Architecture

learnToComplete:

* REST
* API gateways
* Authentication
* Authorization
* Rate limiting
* Versioning
* API lifecycle
* Backend isolation

practice:

* Design an API platform for multiple backend services

azureServices:

* Azure API Management
* App Service
* Functions

## SQL vs NoSQL

learnToComplete:

* Relational data
* Document data
* Transactions
* Schemas
* Query patterns
* Scale requirements
* Consistency requirements

practice:

* Select a database model for several workload scenarios and justify each choice

azureServices:

* Azure SQL
* Azure Cosmos DB
* Azure Database for PostgreSQL

## Data Replication

learnToComplete:

* Synchronous vs asynchronous replication
* Regional replication
* Read replicas
* Data durability
* Replication lag
* Failover

practice:

* Design a geographically resilient data architecture

azureServices:

* Cosmos DB
* Azure SQL
* PostgreSQL

## Partitioning

learnToComplete:

* Horizontal partitioning
* Partition keys
* Hot partitions
* Data distribution
* Scalability
* Query impact

practice:

* Select partition keys for several example workloads

azureServices:

* Azure Cosmos DB

## Consistency Models

learnToComplete:

* Strong consistency
* Eventual consistency
* Availability trade-offs
* Latency trade-offs
* Cosmos DB consistency levels
* Distributed data implications

practice:

* Choose consistency models for banking, analytics, social, and IoT examples

azureServices:

* Azure Cosmos DB

## Tenant Strategy

learnToComplete:

* Azure tenants
* Organizational boundaries
* Identity boundaries
* Single vs multiple tenant considerations
* B2B
* Administration boundaries

practice:

* Design tenant strategy for a multi-company organization

azureServices:

* Microsoft Entra ID

## Subscription Strategy

learnToComplete:

* Subscription boundaries
* Workload ownership
* Environment separation
* Billing
* Limits
* Security boundaries
* Management hierarchy

practice:

* Design an enterprise subscription model

azureServices:

* Azure Subscriptions
* Management Groups

## Identity Architecture

learnToComplete:

* Workforce identity
* Workload identity
* RBAC
* Conditional Access
* PIM
* Managed identities
* Federation
* Least privilege

practice:

* Produce an identity architecture for an enterprise Azure environment

azureServices:

* Microsoft Entra ID
* PIM
* Managed Identities

## Network Architecture

learnToComplete:

* Address planning
* Segmentation
* Hybrid connectivity
* Hub-spoke
* Virtual WAN
* Ingress
* Egress
* DNS
* Private connectivity
* Network security

practice:

* Create a complete enterprise network architecture diagram

azureServices:

* Virtual Network
* Firewall
* Front Door
* ExpressRoute
* VPN Gateway
* Private Link

## Governance Architecture

learnToComplete:

* Management hierarchy
* Policy
* RBAC
* Resource standards
* Compliance
* Logging
* Cost controls
* Subscription lifecycle

practice:

* Design governance for a large multi-team Azure organization

azureServices:

* Management Groups
* Azure Policy
* RBAC
* Cost Management

## Global Routing

learnToComplete:

* DNS routing
* Anycast
* Layer 7 global routing
* Regional health
* Failover
* Latency-based routing
* Traffic distribution

practice:

* Design global traffic routing for a two-region application

azureServices:

* Azure Front Door
* Traffic Manager

## Regional Failover

learnToComplete:

* Failure detection
* Traffic failover
* Application state
* Data state
* Dependency recovery
* Failback
* RTO and RPO

practice:

* Write a regional failover sequence for a production application

azureServices:

* Azure Front Door
* Azure Site Recovery
* Azure Monitor

## Cross-Region Data Replication

learnToComplete:

* Database replication
* Storage replication
* Replication lag
* Conflict handling
* Data consistency
* Failover

practice:

* Design cross-region replication for a stateful workload

azureServices:

* Cosmos DB
* Azure SQL
* Azure Storage

## Active/Active vs Active/Passive

learnToComplete:

* Active-active topology
* Active-passive topology
* Cost
* Complexity
* Failover speed
* Data consistency
* Traffic management

practice:

* Compare both approaches for multiple business scenarios

azureServices:

* Azure Front Door
* Regional Azure services

## VM vs App Service

learnToComplete:

* Infrastructure control
* Operational responsibility
* Scaling
* Runtime flexibility
* Patching
* Cost
* Deployment model

practice:

* Select between both for example workloads and justify the decision

azureServices:

* Azure Virtual Machines
* Azure App Service

## App Service vs Container Apps

learnToComplete:

* Application hosting
* Container requirements
* Autoscaling
* Serverless container model
* Operational complexity
* Networking
* Deployment model

practice:

* Compare both platforms for web and API workloads

azureServices:

* Azure App Service
* Azure Container Apps

## Container Apps vs AKS

learnToComplete:

* Kubernetes control requirements
* Operational overhead
* Scaling
* Networking
* Workload complexity
* Platform management
* Portability

practice:

* Select the correct platform for several container workloads

azureServices:

* Azure Container Apps
* AKS

## Azure SQL vs Cosmos DB

learnToComplete:

* Data model
* Transactions
* Scaling
* Query patterns
* Consistency
* Global distribution
* Cost model

practice:

* Choose a database for multiple application scenarios

azureServices:

* Azure SQL
* Cosmos DB

## VPN vs ExpressRoute

learnToComplete:

* Internet-based VPN connectivity
* Private dedicated connectivity
* Bandwidth
* Reliability
* Cost
* Latency
* Hybrid architecture requirements

practice:

* Select connectivity for branch, enterprise, and critical workload scenarios

azureServices:

* VPN Gateway
* ExpressRoute

## Bicep vs Terraform

learnToComplete:

* Azure-native IaC
* Multi-cloud IaC
* State management
* Azure API support
* Module ecosystems
* Operational workflow
* Team considerations

practice:

* Compare both for an enterprise Azure platform team

azureServices:

* Bicep
* Terraform

## Architecture Diagrams

learnToComplete:

* Logical diagrams
* Physical diagrams
* Network diagrams
* Data-flow diagrams
* Azure icon usage
* Clear boundaries
* Dependencies
* Trust boundaries

practice:

* Produce diagrams for two existing Azure architectures

azureServices:

* Azure Architecture Icons

## Architecture Decision Records

learnToComplete:

* Decision context
* Alternatives
* Constraints
* Selected option
* Trade-offs
* Consequences
* Decision history

practice:

* Write ADRs for database, compute, networking, and IaC choices

azureServices:

* None required

## Threat Modeling

learnToComplete:

* Assets
* Trust boundaries
* Entry points
* Data flows
* Threat identification
* Mitigations
* STRIDE concepts

practice:

* Threat-model an Azure web application

azureServices:

* Microsoft Threat Modeling concepts
* Defender for Cloud

## Cost Estimation

learnToComplete:

* Resource pricing
* Usage assumptions
* Network costs
* Storage costs
* Scaling costs
* Commitment discounts
* Cost uncertainty

practice:

* Estimate monthly cost for an architecture
* Compare two architectural options

azureServices:

* Azure Pricing Calculator
* Cost Management

## Migration Planning

learnToComplete:

* Discovery
* Dependency mapping
* Assessment
* Rehost
* Refactor
* Rearchitect
* Rebuild
* Data migration
* Cutover
* Rollback planning

practice:

* Create a migration plan for an on-premises application

azureServices:

* Azure Migrate
* Azure Database Migration services where appropriate

## Architecture Reviews

learnToComplete:

* Requirement validation
* Reliability review
* Security review
* Cost review
* Operational review
* Performance review
* Risk identification
* Trade-off documentation

practice:

* Review an architecture against the Azure Well-Architected Framework
* Document risks and recommended changes

azureServices:

* Azure Well-Architected Framework
* Azure Advisor

# Dependency rules

Create real prerequisite relationships.

Examples:

`Networking Basics → Virtual Networks`

`Networking Basics → Subnets & Routing`

`Azure Fundamentals → Microsoft Entra ID`

`Azure Fundamentals → Virtual Machines`

`Microsoft Entra ID → Azure RBAC`

`Azure RBAC → Managed Identities`

`Virtual Networks → Subnets & Routing`

`Virtual Networks + Subnets & Routing → NSG & ASG`

`Virtual Networks → VNet Peering`

`Virtual Networks + Azure DNS → Private Endpoints`

`Storage Accounts → Blob Storage`

`Storage Accounts → Azure Files`

`Linux Basics + Networking Basics + Azure Fundamentals → Virtual Machines`

`Docker → Azure Container Registry`

`Docker → Kubernetes Fundamentals`

`Kubernetes Fundamentals → Kubernetes Networking`

`Kubernetes Fundamentals → Kubernetes Storage`

`Kubernetes Fundamentals → Kubernetes Security`

`Kubernetes Fundamentals + Azure Container Registry + Virtual Networks → AKS Architecture`

`AKS Architecture + Kubernetes Networking → AKS Networking`

`AKS Architecture + Managed Identities + Kubernetes Security → AKS Identity`

`AKS Architecture → AKS Scaling`

`AKS Architecture + Azure Monitor → AKS Operations`

`Git & GitHub → GitHub Actions`

`Terraform + GitHub Actions → IaC Pipelines`

`Bicep + GitHub Actions → IaC Pipelines`

`Azure Monitor + Log Analytics → KQL`

`Log Analytics → Centralized Logging`

`Application Insights → Distributed Tracing`

`Azure Monitor → Alerting`

`Virtual Networks + Subnets & Routing + Azure Firewall → Hub-Spoke Architecture`

`Management Groups + Azure Policy + Enterprise RBAC → Azure Landing Zones`

`Hub-Spoke Architecture + Enterprise Governance → Connectivity Architecture`

`Azure Landing Zones → Platform Landing Zone`

`Azure Landing Zones → Application Landing Zones`

`High Availability + RTO & RPO → Disaster Recovery`

`Azure Monitor + Application Insights + High Availability → SLI / SLO / SLA`

`Terraform State & Modules → Reusable IaC Modules`

`Reusable IaC Modules + Azure Policy → Self-Service Infrastructure`

`Azure Landing Zones + Reusable IaC Modules → Subscription Vending`

`Architecture Fundamentals → Azure Well-Architected Framework`

`High Availability + Disaster Recovery → Multi-Region Architecture`

`Hub-Spoke Architecture + ExpressRoute + Azure Landing Zones → Network Architecture`

`Microsoft Entra ID + Enterprise RBAC + Managed Identities → Identity Architecture`

`Management Groups + Azure Policy + Subscription Design → Governance Architecture`

`Multi-Region Architecture → Global Routing`

`Multi-Region Architecture + RTO & RPO → Regional Failover`

`SQL vs NoSQL + Multi-Region Architecture → Cross-Region Data Replication`

Do not create dependencies just to visually connect nodes. Only use technically meaningful prerequisites.

# Implementation

Create:

`src/data/roadmap/foundations.ts`
`src/data/roadmap/core-cloud-engineer.ts`
`src/data/roadmap/advanced-cloud-engineer.ts`
`src/data/roadmap/senior-cloud-engineer.ts`
`src/data/roadmap/cloud-architect.ts`
`src/data/roadmap/index.ts`

Generate stable IDs from level/category/topic.

Do not store this content in Firestore.

Firestore only references each card using its `id`.

The sidebar must display:

1. title
2. description
3. `learnToComplete`
4. `practice`
5. `azureServices`
6. progress status
7. Mark as Mastered action

Do not modify Firebase unless necessary for compatibility with these fields.
