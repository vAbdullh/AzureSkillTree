// Static curriculum transcribed from the supplied project-based Azure learning plan.
// IDs are permanent; ordering and graph position are presentation concerns.
import type { LearningLevel, LearningConcept, Challenge } from './project-types'

export const CONTENT_VERSION = 2
export const learningLevels: LearningLevel[] = [
  {
    "id": "level-1",
    "kind": "level",
    "number": 1,
    "title": "Cloud Foundations",
    "description": "Build the fundamental skills required to operate workloads in Azure: compute, networking, web traffic, DNS, identity, and access."
  },
  {
    "id": "level-2",
    "kind": "level",
    "number": 2,
    "title": "Application Infrastructure",
    "description": "Separate compute from persistent application state and start using Azure-managed application services."
  },
  {
    "id": "level-3",
    "kind": "level",
    "number": 3,
    "title": "Operations & Automation",
    "description": "Operate the environment as an engineer rather than manually managing individual resources."
  },
  {
    "id": "level-4",
    "kind": "level",
    "number": 4,
    "title": "Cloud-Native & Resilience",
    "description": "Move from individual workloads to portable, scalable, resilient cloud-native systems."
  },
  {
    "id": "level-5",
    "kind": "level",
    "number": 5,
    "title": "Production Azure",
    "description": "Operate Azure as a governed production platform rather than a collection of resources."
  }
]

export const learningConcepts: LearningConcept[] = [
  {
    "id": "L1-COM",
    "kind": "concept",
    "levelId": "level-1",
    "code": "COM",
    "title": "Compute",
    "description": "Develop compute capability through engineering missions and observable results."
  },
  {
    "id": "L1-NET",
    "kind": "concept",
    "levelId": "level-1",
    "code": "NET",
    "title": "Networking",
    "description": "Develop networking capability through engineering missions and observable results."
  },
  {
    "id": "L1-WEB",
    "kind": "concept",
    "levelId": "level-1",
    "code": "WEB",
    "title": "DNS & Web Traffic",
    "description": "Develop dns & web traffic capability through engineering missions and observable results."
  },
  {
    "id": "L1-IAM",
    "kind": "concept",
    "levelId": "level-1",
    "code": "IAM",
    "title": "Identity & Access",
    "description": "Develop identity & access capability through engineering missions and observable results."
  },
  {
    "id": "L1-CLI",
    "kind": "concept",
    "levelId": "level-1",
    "code": "CLI",
    "title": "Cloud CLI Operations",
    "description": "Operate and inspect Azure from a command-line environment so cloud administration does not depend entirely on the Azure Portal."
  },
  {
    "id": "L2-STO",
    "kind": "concept",
    "levelId": "level-2",
    "code": "STO",
    "title": "Storage",
    "description": "Develop storage capability through engineering missions and observable results."
  },
  {
    "id": "L2-DAT",
    "kind": "concept",
    "levelId": "level-2",
    "code": "DAT",
    "title": "Databases",
    "description": "Develop databases capability through engineering missions and observable results."
  },
  {
    "id": "L2-KEY",
    "kind": "concept",
    "levelId": "level-2",
    "code": "KEY",
    "title": "Secrets & Keys",
    "description": "Develop secrets & keys capability through engineering missions and observable results."
  },
  {
    "id": "L2-APP",
    "kind": "concept",
    "levelId": "level-2",
    "code": "APP",
    "title": "Managed Application Hosting",
    "description": "Develop managed application hosting capability through engineering missions and observable results."
  },
  {
    "id": "L3-OBS",
    "kind": "concept",
    "levelId": "level-3",
    "code": "OBS",
    "title": "Observability",
    "description": "Develop observability capability through engineering missions and observable results."
  },
  {
    "id": "L3-IAC",
    "kind": "concept",
    "levelId": "level-3",
    "code": "IAC",
    "title": "Infrastructure as Code",
    "description": "Represent cloud infrastructure as reproducible, reviewable code. Use Terraform as the primary cross-platform IaC tool while gaining practical familiarity with Azure-native Bicep."
  },
  {
    "id": "L3-CICD",
    "kind": "concept",
    "levelId": "level-3",
    "code": "CICD",
    "title": "CI/CD",
    "description": "Develop ci/cd capability through engineering missions and observable results."
  },
  {
    "id": "L4-CON",
    "kind": "concept",
    "levelId": "level-4",
    "code": "CON",
    "title": "Containers",
    "description": "Develop containers capability through engineering missions and observable results."
  },
  {
    "id": "L4-HA",
    "kind": "concept",
    "levelId": "level-4",
    "code": "HA",
    "title": "High Availability",
    "description": "Develop high availability capability through engineering missions and observable results."
  },
  {
    "id": "L4-DR",
    "kind": "concept",
    "levelId": "level-4",
    "code": "DR",
    "title": "Backup & Recovery",
    "description": "Develop backup & recovery capability through engineering missions and observable results."
  },
  {
    "id": "L5-GOV",
    "kind": "concept",
    "levelId": "level-5",
    "code": "GOV",
    "title": "Governance",
    "description": "Develop governance capability through engineering missions and observable results."
  },
  {
    "id": "L5-SEC",
    "kind": "concept",
    "levelId": "level-5",
    "code": "SEC",
    "title": "Security",
    "description": "Develop security capability through engineering missions and observable results."
  },
  {
    "id": "L5-ARC",
    "kind": "concept",
    "levelId": "level-5",
    "code": "ARC",
    "title": "Architecture",
    "description": "Develop architecture capability through engineering missions and observable results."
  },
  {
    "id": "L5-OPT",
    "kind": "concept",
    "levelId": "level-5",
    "code": "OPT",
    "title": "Optimization",
    "description": "Develop optimization capability through engineering missions and observable results."
  }
]

export const challenges: Challenge[] = [
  {
    "id": "L1-COM-001",
    "kind": "challenge",
    "title": "Deploy Your First Workload",
    "levelId": "level-1",
    "conceptId": "L1-COM",
    "scenario": "A small Node.js web application currently runs only on a developer's computer. It needs to become available from Azure so other people can access it.",
    "mission": "Provision an Azure Linux VM, connect to the server using SSH, and deploy the supplied application from the remote Linux environment. Make the application reachable from the internet.",
    "guidance": [
      "This is your first remote cloud workload. Pay attention to the relationship between Azure networking, the VM's public address, Linux networking, and the port used by the application."
    ],
    "continuesFrom": [],
    "prerequisites": [],
    "learnToComplete": [
      "Azure Virtual Machines",
      "Linux VM administration",
      "SSH",
      "Public and private IP addresses",
      "Network Security Groups",
      "TCP ports",
      "Linux process management"
    ],
    "requirements": [
      "Application must run on an Azure Linux VM",
      "Remote administration must remain possible",
      "Application must be reachable by a remote user",
      "Only required inbound access should be exposed"
    ],
    "doneWhen": [
      "Application loads from another machine over the internet",
      "You can remotely administer the VM",
      "Application is running on the Azure VM rather than locally",
      "Unnecessary inbound access is not enabled"
    ],
    "evidence": [
      "Short README describing the deployed architecture",
      "Application source"
    ],
    "difficulty": "Beginner",
    "estimatedHours": "2-4",
    "starterAsset": {
      "type": "Node.js web application",
      "description": "Simple application used throughout the early Azure labs.",
      "generatePrompt": "Create a minimal Node.js Express web application for a cloud engineering lab. Include a homepage, a GET /health endpoint, environment-based PORT configuration, and basic package scripts. Keep it intentionally small. Do not include Docker, Terraform, Azure configuration, deployment scripts, Nginx, systemd, CI/CD, databases, or cloud-specific code."
    }
  },
  {
    "id": "L1-COM-002",
    "kind": "challenge",
    "title": "Make the Workload Persistent",
    "levelId": "level-1",
    "conceptId": "L1-COM",
    "scenario": "The application works while you are connected to the VM, but stopping your shell session or restarting the server can make it unavailable.",
    "mission": "Modify the existing deployment so the application operates independently of your SSH session and automatically returns after the VM restarts.",
    "guidance": [
      "Treat the application as a service running on a server rather than something launched manually from a terminal."
    ],
    "continuesFrom": [
      "L1-COM-001"
    ],
    "prerequisites": [
      "L1-COM-001"
    ],
    "learnToComplete": [
      "Linux processes",
      "Background services",
      "Service managers",
      "Startup behavior",
      "Process logs",
      "Application lifecycle"
    ],
    "requirements": [
      "Application must not depend on an active SSH session",
      "Application should return automatically after VM restart",
      "Application logs must remain inspectable"
    ],
    "doneWhen": [
      "Closing SSH does not stop the site",
      "VM restart does not require manually starting the application",
      "Application returns successfully after reboot",
      "Runtime logs can be inspected"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "1-3"
  },
  {
    "id": "L1-COM-003",
    "kind": "challenge",
    "title": "Replace the Server",
    "levelId": "level-1",
    "conceptId": "L1-COM",
    "scenario": "The VM hosting the application has been lost and should be treated as unrecoverable.",
    "mission": "Recreate the compute environment and restore the application on a replacement VM without changing the behavior users depend on.",
    "guidance": [
      "Think about which parts of your original server setup were reproducible and which parts existed only on that machine."
    ],
    "continuesFrom": [
      "L1-COM-002"
    ],
    "prerequisites": [
      "L1-COM-002"
    ],
    "learnToComplete": [
      "VM lifecycle",
      "Reproducible configuration",
      "Compute replacement",
      "Persistent vs ephemeral state",
      "Deployment dependencies",
      "Configuration management fundamentals"
    ],
    "requirements": [
      "Original VM must be replaceable",
      "Application behavior must remain consistent",
      "Replacement should not depend on recovering the previous VM disk manually"
    ],
    "doneWhen": [
      "Original compute can be removed",
      "Replacement VM serves the application successfully",
      "Required configuration is restored",
      "You can explain which application state would have been lost"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-NET-001",
    "kind": "challenge",
    "title": "Build Your Azure Network",
    "levelId": "level-1",
    "conceptId": "L1-NET",
    "scenario": "Your first VM was created mainly to get something running. Now the environment needs a deliberate network structure that can support additional application components later.",
    "mission": "Create an Azure network architecture for your workload using a VNet and multiple subnets with clearly different purposes.",
    "guidance": [
      "Design the address space before creating resources. Think about how future application, data, and management components could be separated."
    ],
    "continuesFrom": [
      "L1-COM-003"
    ],
    "prerequisites": [
      "L1-COM-001"
    ],
    "learnToComplete": [
      "Azure Virtual Network",
      "CIDR notation",
      "Subnets",
      "Private IP addressing",
      "Network interfaces",
      "Address planning",
      "Azure routing fundamentals"
    ],
    "requirements": [
      "Workloads must belong to an intentional VNet design",
      "At least two subnet roles must exist",
      "Address ranges must not overlap"
    ],
    "doneWhen": [
      "VNet and subnet structure exists",
      "Workloads receive appropriate private addresses",
      "You can explain the purpose of each subnet",
      "Future address capacity has been considered"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-3"
  },
  {
    "id": "L1-NET-002",
    "kind": "challenge",
    "title": "Control Network Traffic",
    "levelId": "level-1",
    "conceptId": "L1-NET",
    "scenario": "Your Azure environment currently allows more network access than the application actually requires.",
    "mission": "Restrict traffic so the application remains usable while unnecessary inbound access is rejected.",
    "guidance": [
      "Consider Azure-level network filtering as well as which services are actually listening on the server."
    ],
    "continuesFrom": [
      "L1-NET-001"
    ],
    "prerequisites": [
      "L1-NET-001",
      "L1-COM-002"
    ],
    "learnToComplete": [
      "Network Security Groups",
      "Inbound rules",
      "Outbound rules",
      "Ports and protocols",
      "Source and destination",
      "Rule priorities",
      "Stateful firewall behavior"
    ],
    "requirements": [
      "Required application traffic must continue working",
      "Administrative access must remain appropriately restricted",
      "Unnecessary inbound access must be removed"
    ],
    "doneWhen": [
      "Required website traffic succeeds",
      "Unnecessary tested ports fail",
      "Administrative access follows your intended restrictions",
      "You can explain which network rules are required and why"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-3"
  },
  {
    "id": "L1-NET-003",
    "kind": "challenge",
    "title": "Create a Private Workload",
    "levelId": "level-1",
    "conceptId": "L1-NET",
    "scenario": "A new internal application component should communicate with your existing workload but should never be directly exposed to internet users.",
    "mission": "Deploy a workload without a public IP address and allow authorized internal communication with it.",
    "guidance": [
      "Start relying on private Azure networking rather than public endpoints for communication between cloud resources."
    ],
    "continuesFrom": [
      "L1-NET-002"
    ],
    "prerequisites": [
      "L1-NET-001",
      "L1-NET-002"
    ],
    "learnToComplete": [
      "Private IP addressing",
      "Subnet communication",
      "Routing",
      "Internal connectivity",
      "Public vs private workloads",
      "Network isolation"
    ],
    "requirements": [
      "Internal workload must not receive a public IP",
      "Public internet must not directly reach it",
      "Required internal communication must function"
    ],
    "doneWhen": [
      "Internal workload communicates with the intended Azure resource",
      "Direct connection from an unrelated public host fails",
      "Internal traffic uses private addressing"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-NET-004",
    "kind": "challenge",
    "title": "Give Private Resources Outbound Access",
    "levelId": "level-1",
    "conceptId": "L1-NET",
    "scenario": "Your private workload needs to download packages or communicate with an external service, but making it publicly reachable would defeat the network design.",
    "mission": "Provide controlled outbound internet connectivity while keeping the workload private.",
    "guidance": [
      "Investigate how Azure allows resources without public addresses to initiate outbound connections."
    ],
    "continuesFrom": [
      "L1-NET-003"
    ],
    "prerequisites": [
      "L1-NET-003"
    ],
    "learnToComplete": [
      "Outbound connectivity",
      "Source NAT",
      "Azure NAT concepts",
      "Routing",
      "Private workloads",
      "Egress architecture"
    ],
    "requirements": [
      "Private workload must initiate outbound connections",
      "No public inbound path should be created",
      "Workload must remain privately addressed"
    ],
    "doneWhen": [
      "Workload successfully reaches an external destination",
      "Public inbound attempts still fail",
      "Workload still has no directly assigned public IP"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-WEB-001",
    "kind": "challenge",
    "title": "Give the Application a Name",
    "levelId": "level-1",
    "conceptId": "L1-WEB",
    "scenario": "Users currently access the application using an Azure IP address. The service now needs a stable human-readable address.",
    "mission": "Connect a domain or subdomain you control to the existing application.",
    "guidance": [
      "This is your first practical DNS configuration. Focus on how a hostname ultimately resolves to the Azure endpoint serving your application."
    ],
    "continuesFrom": [
      "L1-COM-002"
    ],
    "prerequisites": [
      "L1-COM-001"
    ],
    "learnToComplete": [
      "DNS",
      "A records",
      "CNAME records",
      "DNS zones",
      "Azure DNS",
      "TTL",
      "DNS resolution"
    ],
    "requirements": [
      "Users should not need the raw IP address",
      "Hostname must resolve correctly",
      "Existing application must remain functional"
    ],
    "doneWhen": [
      "Domain resolves from an external machine",
      "Opening the hostname reaches the application",
      "DNS continues working after local DNS cache is cleared"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "1-3"
  },
  {
    "id": "L1-WEB-002",
    "kind": "challenge",
    "title": "Hide the Application Port",
    "levelId": "level-1",
    "conceptId": "L1-WEB",
    "scenario": "Users can reach the application, but they must include an internal application port in the URL. Internal runtime details should not be exposed to users.",
    "mission": "Expose the application through normal web traffic while keeping its internal application port from being directly accessible publicly.",
    "guidance": [
      "Investigate the role of a web server or reverse proxy between internet users and the application process."
    ],
    "continuesFrom": [
      "L1-WEB-001",
      "L1-COM-002"
    ],
    "prerequisites": [
      "L1-WEB-001",
      "L1-NET-002"
    ],
    "learnToComplete": [
      "Reverse proxies",
      "HTTP",
      "Standard web ports",
      "Application ports",
      "Web servers",
      "Proxy forwarding"
    ],
    "requirements": [
      "User should not need to specify the runtime port",
      "Internal application port should not be directly exposed publicly",
      "Existing domain should continue working"
    ],
    "doneWhen": [
      "Domain works without an explicit application port",
      "Direct public access to the internal runtime port fails",
      "Requests successfully reach the application"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-3"
  },
  {
    "id": "L1-WEB-003",
    "kind": "challenge",
    "title": "Enable HTTPS",
    "levelId": "level-1",
    "conceptId": "L1-WEB",
    "scenario": "The application works through its domain, but traffic is still transmitted over unencrypted HTTP.",
    "mission": "Protect user traffic with a trusted TLS certificate and make secure access the default.",
    "guidance": [
      "This is your first certificate deployment. Understand the relationship between DNS ownership, certificate validation, TLS termination, and HTTP redirects."
    ],
    "continuesFrom": [
      "L1-WEB-002"
    ],
    "prerequisites": [
      "L1-WEB-002"
    ],
    "learnToComplete": [
      "TLS",
      "HTTPS",
      "Digital certificates",
      "Certificate validation",
      "TLS termination",
      "HTTP redirects",
      "Certificate renewal concepts"
    ],
    "requirements": [
      "Certificate must be trusted by normal browsers",
      "HTTPS must function",
      "Insecure HTTP should not remain the normal user path"
    ],
    "doneWhen": [
      "Browser accepts the certificate without security warnings",
      "HTTPS serves the application",
      "HTTP requests redirect to HTTPS",
      "Application continues operating normally"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-IAM-001",
    "kind": "challenge",
    "title": "Separate Administrator and Developer Access",
    "levelId": "level-1",
    "conceptId": "L1-IAM",
    "scenario": "Another developer needs to inspect your Azure environment but should not have the same control as the infrastructure administrator.",
    "mission": "Give another Azure identity enough access to inspect the required resources while preventing infrastructure modification.",
    "guidance": [
      "This is the first challenge where Azure authorization scope matters. Think about both the role and where that role is assigned."
    ],
    "continuesFrom": [],
    "prerequisites": [],
    "learnToComplete": [
      "Microsoft Entra ID",
      "Azure RBAC",
      "Users",
      "Built-in roles",
      "Role assignments",
      "Scope",
      "Principle of least privilege"
    ],
    "requirements": [
      "Developer must inspect required resources",
      "Developer must not modify protected infrastructure",
      "Permissions should not be broader than necessary"
    ],
    "doneWhen": [
      "Read operations succeed",
      "Tested modification attempts fail",
      "Role assignment scope can be explained"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "1-3"
  },
  {
    "id": "L1-IAM-002",
    "kind": "challenge",
    "title": "Apply Least Privilege",
    "levelId": "level-1",
    "conceptId": "L1-IAM",
    "scenario": "An identity needs to manage one specific part of the environment but currently has broader permissions than required.",
    "mission": "Reduce access so the identity can perform its required task and nothing substantially beyond it.",
    "guidance": [
      "Avoid solving the problem by assigning broad subscription-level access."
    ],
    "continuesFrom": [
      "L1-IAM-001"
    ],
    "prerequisites": [
      "L1-IAM-001"
    ],
    "learnToComplete": [
      "RBAC scopes",
      "Built-in roles",
      "Resource groups",
      "Resource-level permissions",
      "Least privilege",
      "Permission evaluation"
    ],
    "requirements": [
      "Required operation must succeed",
      "Unrelated operations must fail",
      "Scope must be intentionally limited"
    ],
    "doneWhen": [
      "Required task works",
      "Tested unrelated privileged task fails",
      "You can explain why the chosen scope is appropriate"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-IAM-003",
    "kind": "challenge",
    "title": "Remove Application Credentials",
    "levelId": "level-1",
    "conceptId": "L1-IAM",
    "scenario": "Your application needs access to an Azure resource. Storing Azure usernames, client secrets, or long-lived access keys inside application configuration would create unnecessary credential risk.",
    "mission": "Allow the Azure-hosted workload to authenticate to another Azure service without storing Azure credentials in the application.",
    "guidance": [
      "Investigate Azure workload identity mechanisms rather than creating another application password."
    ],
    "continuesFrom": [
      "L1-COM-002"
    ],
    "prerequisites": [
      "L1-IAM-002"
    ],
    "learnToComplete": [
      "Managed identities",
      "Workload identity",
      "Azure RBAC",
      "Token-based authentication",
      "Credentialless Azure SDK authentication",
      "Identity scope"
    ],
    "requirements": [
      "Azure resource access must work",
      "Long-lived Azure credentials must not be stored in application configuration",
      "Access should remain least-privileged"
    ],
    "doneWhen": [
      "Application successfully accesses the required Azure service",
      "Removing local Azure secrets does not break access",
      "Identity permissions can be inspected in Azure"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L1-CLI-001",
    "kind": "challenge",
    "title": "Explore Azure From the Command Line",
    "levelId": "level-1",
    "conceptId": "L1-CLI",
    "scenario": "Until now, most Azure resources have been inspected through graphical tools. You need a scriptable way to understand and operate your cloud environment from a terminal.",
    "mission": "Install/use Azure CLI, authenticate to your Azure account, and inspect the Azure environment from the command line. Identify the active subscription and retrieve information about resources you previously created.",
    "guidance": [
      "This is your introduction to Azure CLI. Learn how Azure CLI commands are structured and how to discover available commands without depending on copied command snippets."
    ],
    "continuesFrom": [],
    "prerequisites": [],
    "learnToComplete": [
      "Azure CLI",
      "CLI authentication",
      "Azure subscriptions",
      "Resource groups",
      "Azure resource IDs",
      "Command help/discovery",
      "CLI output formats"
    ],
    "requirements": [
      "Authenticate successfully from the terminal",
      "Identify the active Azure subscription",
      "Retrieve information about existing Azure resources",
      "Do not modify resources as part of this challenge"
    ],
    "doneWhen": [
      "You can inspect your subscription from CLI",
      "You can list resource groups/resources",
      "You can retrieve details for one existing resource",
      "You can explain the structure of an Azure resource ID"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "1-2"
  },
  {
    "id": "L1-CLI-002",
    "kind": "challenge",
    "title": "Manage a Resource Without the Portal",
    "levelId": "level-1",
    "conceptId": "L1-CLI",
    "scenario": "A routine Azure operation should not require navigating through multiple Portal pages.",
    "mission": "Perform a complete Azure resource-management task using Azure CLI instead of the Azure Portal.\n\nUse a small disposable resource or a safe existing lab resource.",
    "guidance": [
      "Use CLI help and Azure documentation to discover the necessary operations yourself."
    ],
    "continuesFrom": [
      "L1-CLI-001"
    ],
    "prerequisites": [
      "L1-CLI-001"
    ],
    "learnToComplete": [
      "Azure resource creation",
      "Resource updates",
      "Resource deletion",
      "Resource groups",
      "CLI parameters",
      "Resource identification",
      "Idempotency awareness"
    ],
    "requirements": [
      "Resource operation must be performed without Portal-based configuration",
      "Resource must be verified after creation/change",
      "Disposable resources should be cleaned up afterward"
    ],
    "doneWhen": [
      "Resource exists in expected state",
      "State can be inspected from CLI",
      "Required modification succeeds",
      "Cleanup can also be performed through CLI"
    ],
    "evidence": [],
    "difficulty": "Beginner",
    "estimatedHours": "2-3"
  },
  {
    "id": "L1-CLI-003",
    "kind": "challenge",
    "title": "Query Azure Data",
    "levelId": "level-1",
    "conceptId": "L1-CLI",
    "scenario": "The environment is growing and raw command output is becoming difficult to inspect manually.",
    "mission": "Use Azure CLI to answer practical questions about your Azure environment by filtering and formatting command output.\n\nExample questions may include:\n* Which VMs are currently running?\n* Which resources have public IP addresses?\n* Which resources exist inside a particular resource group?\n* Which region is each resource using?\n\nDo not hard-code the answers.",
    "guidance": [
      "Investigate Azure CLI query/filter capabilities and structured output rather than manually scanning long JSON responses."
    ],
    "continuesFrom": [
      "L1-CLI-002"
    ],
    "prerequisites": [
      "L1-CLI-001"
    ],
    "learnToComplete": [
      "JSON",
      "Azure CLI output formats",
      "JMESPath querying",
      "Filtering",
      "Projection",
      "Resource metadata",
      "Structured command-line output"
    ],
    "requirements": [
      "Queries must use Azure data directly",
      "Results should contain only information relevant to the question",
      "Avoid manually copying data into another tool just to filter it"
    ],
    "doneWhen": [
      "You can answer at least three environment questions through CLI queries",
      "Output is filtered into useful results",
      "Queries continue working when Azure resources change"
    ],
    "evidence": [
      "Save useful queries in the challenge folder README or script file"
    ],
    "difficulty": "Beginner",
    "estimatedHours": "2-4"
  },
  {
    "id": "L1-CLI-004",
    "kind": "challenge",
    "title": "Automate a Repeated Azure Operation",
    "levelId": "level-1",
    "conceptId": "L1-CLI",
    "scenario": "You have discovered an Azure operation that would be tedious and error-prone to perform repeatedly by hand.",
    "mission": "Create a small script that uses Azure CLI to automate a repeatable Azure task.\n\nThe script must operate on Azure resources rather than simply printing static information.",
    "guidance": [
      "The objective is not advanced shell scripting. Focus on turning a repeatable cloud operation into something reliable and parameterized."
    ],
    "continuesFrom": [
      "L1-CLI-003"
    ],
    "prerequisites": [
      "L1-CLI-003"
    ],
    "learnToComplete": [
      "Azure CLI scripting",
      "Bash or PowerShell scripting",
      "Variables",
      "Exit codes",
      "Parameterization",
      "Error handling",
      "Repeatable cloud operations"
    ],
    "requirements": [
      "Script must accept at least one configurable input",
      "Avoid embedding credentials",
      "Running the script repeatedly should have predictable behavior",
      "Failures should be visible rather than silently ignored"
    ],
    "doneWhen": [
      "Script performs the intended Azure operation",
      "Input can change without modifying core script logic",
      "Authentication credentials are not embedded",
      "Script handles at least one expected failure safely"
    ],
    "evidence": [
      "Script",
      "Small README explaining purpose and expected inputs"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L2-STO-001",
    "kind": "challenge",
    "title": "Move Files Off the Server",
    "levelId": "level-2",
    "conceptId": "L2-STO",
    "scenario": "The application stores uploaded files on its VM. Replacing the VM would permanently remove those files.",
    "mission": "Move application-generated files into Azure-managed persistent storage and update the existing application to use it.",
    "guidance": [
      "Compute should increasingly become replaceable. Persistent user data should not depend on one server's local disk."
    ],
    "continuesFrom": [
      "L1-COM-003"
    ],
    "prerequisites": [
      "L1-IAM-003"
    ],
    "learnToComplete": [
      "Azure Storage Accounts",
      "Blob Storage",
      "Containers",
      "Object storage",
      "Application storage integration",
      "Persistent vs ephemeral storage"
    ],
    "requirements": [
      "Uploaded files must survive compute replacement",
      "Application must continue reading and writing files",
      "Storage should not depend on the VM filesystem"
    ],
    "doneWhen": [
      "New files are stored in Azure",
      "Existing application can retrieve them",
      "Replacing compute does not remove stored files"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5",
    "starterAsset": {
      "type": "Extension to the existing Node.js application",
      "description": "Reuse the original application. Add a minimal upload/download workload only if it does not already support files.",
      "generatePrompt": "Extend my existing Node.js lab application with a minimal file upload and download interface backed initially by the local filesystem. Preserve the homepage and /health endpoint. Keep file handling isolated so I can replace the storage implementation myself. Generate only application code and local usage documentation. Do not add Azure SDKs, cloud authentication, Blob Storage integration, infrastructure configuration, Docker, deployment scripts, or CI/CD. Do not generate a separate application."
    }
  },
  {
    "id": "L2-STO-002",
    "kind": "challenge",
    "title": "Protect Private Files",
    "levelId": "level-2",
    "conceptId": "L2-STO",
    "scenario": "The application now stores files in Azure, but those files should not become publicly downloadable simply because someone knows their URL.",
    "mission": "Make stored objects private while preserving authorized application access.",
    "guidance": [
      "Separate application authorization from public storage exposure."
    ],
    "continuesFrom": [
      "L2-STO-001"
    ],
    "prerequisites": [
      "L2-STO-001",
      "L1-IAM-003"
    ],
    "learnToComplete": [
      "Blob authorization",
      "Private containers",
      "Azure RBAC for storage",
      "Managed identity",
      "Storage access models",
      "Public access configuration"
    ],
    "requirements": [
      "Objects must not be publicly readable",
      "Authorized application access must work",
      "Long-lived storage account keys should not be required by the application"
    ],
    "doneWhen": [
      "Anonymous request to a stored object fails",
      "Application can still retrieve the object",
      "Access uses the intended identity model"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L2-STO-003",
    "kind": "challenge",
    "title": "Temporary File Access",
    "levelId": "level-2",
    "conceptId": "L2-STO",
    "scenario": "Files are private, but occasionally a user must download one directly without making the entire storage container public.",
    "mission": "Provide time-limited access to a specific private object.",
    "guidance": [
      "Investigate delegated and temporary storage access rather than changing the container to public."
    ],
    "continuesFrom": [
      "L2-STO-002"
    ],
    "prerequisites": [
      "L2-STO-002"
    ],
    "learnToComplete": [
      "Temporary delegated access",
      "SAS concepts",
      "Access expiration",
      "Scope",
      "Storage authorization"
    ],
    "requirements": [
      "Only intended object should become temporarily accessible",
      "Access must expire",
      "Storage container must remain private"
    ],
    "doneWhen": [
      "Temporary URL works before expiry",
      "Same access fails after expiry",
      "Other private files remain inaccessible"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L2-DAT-001",
    "kind": "challenge",
    "title": "Separate Application and Data",
    "levelId": "level-2",
    "conceptId": "L2-DAT",
    "scenario": "Application data currently depends on the application server. This tightly couples compute replacement with database availability.",
    "mission": "Move PostgreSQL into an Azure-managed database service and connect the existing application to it.",
    "guidance": [
      "Treat the application server and database as separate infrastructure components with different lifecycle requirements."
    ],
    "continuesFrom": [
      "L1-COM-003"
    ],
    "prerequisites": [
      "L1-NET-001"
    ],
    "learnToComplete": [
      "Azure Database for PostgreSQL",
      "Database connections",
      "Connection strings",
      "Managed database concepts",
      "Database persistence",
      "Compute/data separation"
    ],
    "requirements": [
      "Application must use the Azure-hosted database",
      "Database must survive application server replacement",
      "Application functionality must remain intact"
    ],
    "doneWhen": [
      "Application reads/writes Azure-hosted PostgreSQL",
      "Removing application compute does not remove database data",
      "Replacement compute can reconnect successfully"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5",
    "starterAsset": {
      "type": "Extension to the existing Node.js application",
      "description": "Reuse the same application. Add a small PostgreSQL-backed records feature if needed to exercise database persistence.",
      "generatePrompt": "Extend my existing Node.js lab application with a minimal records page that reads and writes PostgreSQL using the pg library and environment-provided connection settings. Preserve existing routes and any file feature. Include only application source, a small schema, and local development documentation. Do not add Azure configuration, database provisioning, firewall rules, private networking, cloud credentials, secret-store integration, Terraform, Docker, deployment scripts, or CI/CD. I will design the cloud connection and deployment myself. Do not create a new application."
    }
  },
  {
    "id": "L2-DAT-002",
    "kind": "challenge",
    "title": "Make the Database Private",
    "levelId": "level-2",
    "conceptId": "L2-DAT",
    "scenario": "The managed database works, but exposing it directly to the internet creates unnecessary attack surface.",
    "mission": "Keep application-to-database communication working while preventing direct database access from unrelated public networks.",
    "guidance": [
      "Apply what you learned about Azure private networking to a managed service."
    ],
    "continuesFrom": [
      "L2-DAT-001",
      "L1-NET-003"
    ],
    "prerequisites": [
      "L2-DAT-001",
      "L1-NET-003"
    ],
    "learnToComplete": [
      "Private networking for managed services",
      "Private endpoints or private access models",
      "Private DNS",
      "Database firewall/networking",
      "Name resolution",
      "Application-to-database routing"
    ],
    "requirements": [
      "Application must reach database",
      "Public internet clients must not directly connect",
      "Database traffic should use intended private networking"
    ],
    "doneWhen": [
      "Application database operations succeed",
      "Connection from unrelated public network fails",
      "You can verify private addressing/path used"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "4-6"
  },
  {
    "id": "L2-DAT-003",
    "kind": "challenge",
    "title": "Recover Lost Data",
    "levelId": "level-2",
    "conceptId": "L2-DAT",
    "scenario": "Important application records have been accidentally deleted.",
    "mission": "Recover the database to an acceptable state using Azure's managed recovery capabilities.",
    "guidance": [
      "Do not simply recreate the missing rows manually. Treat this as an actual data recovery exercise."
    ],
    "continuesFrom": [
      "L2-DAT-002"
    ],
    "prerequisites": [
      "L2-DAT-001"
    ],
    "learnToComplete": [
      "Database backups",
      "Restore points",
      "Point-in-time recovery",
      "Recovery validation",
      "RPO concepts",
      "Database recovery workflow"
    ],
    "requirements": [
      "Intentionally modify/delete test data",
      "Recovery must use backup/recovery capability",
      "Restored data must be validated"
    ],
    "doneWhen": [
      "Lost test data is recovered",
      "Application functions against recovered state",
      "Recovery time and acceptable data loss are documented"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L2-KEY-001",
    "kind": "challenge",
    "title": "Remove Secrets From Configuration",
    "levelId": "level-2",
    "conceptId": "L2-KEY",
    "scenario": "The application currently depends on production secrets stored directly in environment files or server configuration.",
    "mission": "Move sensitive application secrets into an Azure-managed secret store and retrieve them securely at runtime.",
    "guidance": [
      "The application should know how to request secrets, not permanently contain their values."
    ],
    "continuesFrom": [
      "L2-DAT-001",
      "L1-IAM-003"
    ],
    "prerequisites": [
      "L1-IAM-003"
    ],
    "learnToComplete": [
      "Azure Key Vault",
      "Secrets",
      "Managed identity",
      "Secret retrieval",
      "RBAC",
      "Application configuration security"
    ],
    "requirements": [
      "Production secret values must not remain in source control",
      "Application must retrieve required values securely",
      "Access must use appropriate identity"
    ],
    "doneWhen": [
      "Application operates without secrets committed to repository",
      "Removing local secret values does not break production",
      "Unauthorized identity cannot retrieve protected secret"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L2-KEY-002",
    "kind": "challenge",
    "title": "Rotate a Production Secret",
    "levelId": "level-2",
    "conceptId": "L2-KEY",
    "scenario": "A credential used by the application must be considered compromised and replaced.",
    "mission": "Rotate the credential while keeping application interruption minimal and without rebuilding the complete environment.",
    "guidance": [
      "Think about secret lifecycle, deployment timing, and how applications discover updated values."
    ],
    "continuesFrom": [
      "L2-KEY-001"
    ],
    "prerequisites": [
      "L2-KEY-001"
    ],
    "learnToComplete": [
      "Secret rotation",
      "Credential lifecycle",
      "Application configuration refresh",
      "Versioned secrets",
      "Deployment coordination"
    ],
    "requirements": [
      "Old credential must stop being valid",
      "New credential must work",
      "Application should avoid extended downtime"
    ],
    "doneWhen": [
      "Application operates using new secret",
      "Old secret is rejected",
      "Rotation process is documented briefly"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L2-APP-001",
    "kind": "challenge",
    "title": "Remove the VM",
    "levelId": "level-2",
    "conceptId": "L2-APP",
    "scenario": "The application works, but maintaining the operating system, runtime, patches, and server process is unnecessary operational overhead.",
    "mission": "Move the existing application to an Azure managed application-hosting platform so you no longer administer its operating system.",
    "guidance": [
      "Preserve application behavior while changing the compute model."
    ],
    "continuesFrom": [
      "L1-WEB-003",
      "L2-DAT-002",
      "L2-STO-002"
    ],
    "prerequisites": [
      "L1-COM-003",
      "L2-DAT-001"
    ],
    "learnToComplete": [
      "Platform as a Service",
      "Azure App Service or equivalent managed hosting",
      "Application configuration",
      "Deployment models",
      "Managed identity integration",
      "Managed networking concepts"
    ],
    "requirements": [
      "Application behavior must remain consistent",
      "No direct OS administration should be necessary",
      "Existing database/storage integrations should continue working"
    ],
    "doneWhen": [
      "Application runs without learner-managed VM OS",
      "Public application works",
      "Data integrations remain functional",
      "Original VM can be removed from application hosting path"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "4-6"
  },
  {
    "id": "L2-APP-002",
    "kind": "challenge",
    "title": "Separate Development and Production",
    "levelId": "level-2",
    "conceptId": "L2-APP",
    "scenario": "Development changes currently affect the same environment users depend on.",
    "mission": "Create separate development and production environments with independent configuration and resources where appropriate.",
    "guidance": [
      "Do not solve this by simply creating two copies manually without thinking about configuration boundaries."
    ],
    "continuesFrom": [
      "L2-APP-001"
    ],
    "prerequisites": [
      "L2-APP-001"
    ],
    "learnToComplete": [
      "Environment separation",
      "Application configuration",
      "Resource naming",
      "Deployment slots/environments",
      "Secret separation",
      "Data isolation"
    ],
    "requirements": [
      "Development changes must not directly change production",
      "Environment-specific secrets/configuration must be separated",
      "Environments must be identifiable"
    ],
    "doneWhen": [
      "Development and production can run different application versions",
      "Development configuration changes do not alter production",
      "Production continues operating independently"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L3-OBS-001",
    "kind": "challenge",
    "title": "Centralize Your Logs",
    "levelId": "level-3",
    "conceptId": "L3-OBS",
    "scenario": "Troubleshooting currently requires connecting to individual workloads and manually inspecting files.",
    "mission": "Collect application and infrastructure logs centrally so you can investigate the environment without relying on local server logs.",
    "guidance": [
      "Treat logs as platform data rather than files that belong to one machine."
    ],
    "continuesFrom": [
      "L2-APP-001"
    ],
    "prerequisites": [
      "L2-APP-001"
    ],
    "learnToComplete": [
      "Azure Monitor",
      "Log Analytics",
      "Application logs",
      "Platform logs",
      "Diagnostic settings",
      "Log queries",
      "KQL fundamentals"
    ],
    "requirements": [
      "Relevant logs must reach central platform",
      "Logs must be searchable",
      "Application and infrastructure context should be distinguishable"
    ],
    "doneWhen": [
      "You can query recent application events centrally",
      "You can identify activity without connecting to application OS",
      "At least one useful KQL query is preserved as evidence"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L3-OBS-002",
    "kind": "challenge",
    "title": "Detect an Outage",
    "levelId": "level-3",
    "conceptId": "L3-OBS",
    "scenario": "The application could become unavailable without anyone noticing until a user complains.",
    "mission": "Detect application unavailability automatically and generate an alert.",
    "guidance": [
      "Monitor the service from the user's perspective rather than only checking whether a VM or process exists."
    ],
    "continuesFrom": [
      "L3-OBS-001"
    ],
    "prerequisites": [
      "L3-OBS-001"
    ],
    "learnToComplete": [
      "Availability monitoring",
      "Azure Monitor alerts",
      "Alert rules",
      "Action groups",
      "Health endpoints",
      "Signal thresholds"
    ],
    "requirements": [
      "Monitoring must detect real application unavailability",
      "Alert must trigger without manual checking",
      "Healthy service must not continuously trigger alerts"
    ],
    "doneWhen": [
      "Deliberately stopping service triggers alert",
      "Restoring service returns monitoring to healthy state",
      "Alert includes enough information to identify affected workload"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L3-OBS-003",
    "kind": "challenge",
    "title": "Investigate a Performance Problem",
    "levelId": "level-3",
    "conceptId": "L3-OBS",
    "scenario": "Users report that the application has become slow, but there is no obvious outage.",
    "mission": "Create a controlled performance problem and identify its likely cause using Azure metrics and logs.",
    "guidance": [
      "Start with telemetry rather than immediately changing resources or restarting services."
    ],
    "continuesFrom": [
      "L3-OBS-002"
    ],
    "prerequisites": [
      "L3-OBS-001"
    ],
    "learnToComplete": [
      "Metrics",
      "Resource utilization",
      "Application performance telemetry",
      "Log correlation",
      "Application Insights concepts",
      "Performance baselines"
    ],
    "requirements": [
      "Introduce safe measurable degradation",
      "Investigation must use telemetry",
      "Root cause must be supported by evidence"
    ],
    "doneWhen": [
      "Degradation is visible in telemetry",
      "You identify likely bottleneck",
      "Short incident note explains evidence and resolution"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L3-OBS-004",
    "kind": "challenge",
    "title": "Investigate Without SSH",
    "levelId": "level-3",
    "conceptId": "L3-OBS",
    "scenario": "A production-like workload is unhealthy. Directly logging into servers should no longer be your first troubleshooting technique.",
    "mission": "Diagnose a deliberately introduced configuration or availability problem primarily using Azure observability and platform tooling.",
    "guidance": [
      "Use what you built in previous observability challenges. SSH, if available at all, should be a late validation tool rather than your starting point."
    ],
    "continuesFrom": [
      "L3-OBS-003"
    ],
    "prerequisites": ["L3-OBS-003", "L1-CLI-003" 
    ],
    "learnToComplete": [
      "Observability-driven troubleshooting",
      "Metrics correlation",
      "KQL",
      "Platform diagnostics",
      "Dependency failures",
      "Incident investigation"
    ],
    "requirements": [
      "Failure must be introduced safely",
      "Diagnosis must rely primarily on telemetry",
      "Root cause must be documented before correction"
    ],
    "doneWhen": [
      "Failure is identified correctly",
      "Evidence supporting diagnosis is preserved",
      "Service is restored",
      "Incident summary explains cause and fix"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L3-IAC-001",
    "kind": "challenge",
    "title": "Rebuild the Environment With Terraform",
    "levelId": "level-3",
    "conceptId": "L3-IAC",
    "scenario": "Your Azure environment has grown through manual configuration. Recreating it accurately would require remembering many decisions.",
    "mission": "Represent the existing infrastructure in Terraform so it can be recreated from an empty Azure resource group.",
    "guidance": [
      "Do not redesign everything immediately. First prove that the architecture you already understand can be reproduced as code."
    ],
    "continuesFrom": [
      "L2-APP-002"
    ],
    "prerequisites": ["L2-APP-002", "L1-CLI-002" 
    ],
    "learnToComplete": [
      "Terraform",
      "AzureRM provider",
      "Resources",
      "Variables",
      "Outputs",
      "Terraform state",
      "Dependency graph",
      "Declarative infrastructure"
    ],
    "requirements": [
      "Infrastructure must be represented as code",
      "Environment must be reproducible",
      "Secrets must not be hard-coded into repository"
    ],
    "doneWhen": [
      "Empty target environment can be recreated from Terraform",
      "Application infrastructure behaves as expected",
      "Re-running Terraform without changes produces no unexpected modifications"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "6-10"
  },
  {
    "id": "L3-IAC-002",
    "kind": "challenge",
    "title": "Make Infrastructure Configurable",
    "levelId": "level-3",
    "conceptId": "L3-IAC",
    "scenario": "The same infrastructure design is needed for development and production, but copying Terraform files would create long-term maintenance problems.",
    "mission": "Make the infrastructure reusable across multiple environments using configuration rather than duplicated code.",
    "guidance": [],
    "continuesFrom": [
      "L3-IAC-001",
      "L2-APP-002"
    ],
    "prerequisites": [
      "L3-IAC-001"
    ],
    "learnToComplete": [
      "Terraform variables",
      "tfvars",
      "Environment configuration",
      "Naming patterns",
      "Resource parameterization",
      "Reusability"
    ],
    "requirements": [
      "Same core codebase must support at least two environments",
      "Environment-specific settings must remain separate",
      "Avoid substantial duplicated infrastructure code"
    ],
    "doneWhen": [
      "Development and production configurations can be planned independently",
      "Both use the same core infrastructure implementation",
      "Environment-specific values are clearly controlled"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-6"
  },
  {
    "id": "L3-IAC-003",
    "kind": "challenge",
    "title": "Protect Terraform State",
    "levelId": "level-3",
    "conceptId": "L3-IAC",
    "scenario": "Terraform state currently exists only on one developer machine, creating collaboration and recovery problems.",
    "mission": "Move state to an appropriate remote backend and prevent conflicting infrastructure operations.",
    "guidance": [],
    "continuesFrom": [
      "L3-IAC-002"
    ],
    "prerequisites": [
      "L3-IAC-001"
    ],
    "learnToComplete": [
      "Remote state",
      "Azure Storage backend",
      "State locking",
      "Sensitive state",
      "Backend configuration",
      "Team Terraform workflows"
    ],
    "requirements": [
      "State must not depend on one developer computer",
      "Concurrent modifications must be handled safely",
      "State storage must not be unnecessarily public"
    ],
    "doneWhen": [
      "Terraform operates using remote state",
      "Local state deletion does not lose infrastructure knowledge",
      "State storage access is controlled"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L3-IAC-004",
    "kind": "challenge",
    "title": "Build Reusable Infrastructure",
    "levelId": "level-3",
    "conceptId": "L3-IAC",
    "scenario": "Repeated infrastructure patterns are making the Terraform project increasingly difficult to maintain.",
    "mission": "Extract appropriate repeated patterns into reusable modules without hiding the architecture behind excessive abstraction.",
    "guidance": [],
    "continuesFrom": [
      "L3-IAC-003"
    ],
    "prerequisites": [
      "L3-IAC-002"
    ],
    "learnToComplete": [
      "Terraform modules",
      "Module inputs",
      "Outputs",
      "Reusable infrastructure patterns",
      "Abstraction boundaries",
      "Module composition"
    ],
    "requirements": [
      "Repeated infrastructure logic should be reduced",
      "Modules must have clear responsibility",
      "Environment configuration should remain understandable"
    ],
    "doneWhen": [
      "At least one useful reusable module exists",
      "Multiple infrastructure instances/environments use it",
      "Terraform plans remain understandable"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "4-7"
  },
  {
    "id": "L3-IAC-005",
    "kind": "challenge",
    "title": "Rebuild a Component With Azure-Native IaC",
    "levelId": "level-3",
    "conceptId": "L3-IAC",
    "scenario": "Your infrastructure is managed primarily through Terraform, but Azure also provides a native declarative infrastructure language. You need enough experience with the Azure-native approach to understand how it differs from Terraform.",
    "mission": "Select a small, already-understood part of your Azure environment and describe/recreate it using Bicep.\n\nDo NOT migrate the entire project from Terraform.\n\nThe objective is comparison and familiarity, not duplication.",
    "guidance": [
      "Choose infrastructure you already know well so the learning focus remains on IaC syntax, deployment model, state behavior, and Azure-native tooling."
    ],
    "continuesFrom": [
      "L3-IAC-001"
    ],
    "prerequisites": [
      "L3-IAC-001",
      "L1-CLI-002"
    ],
    "learnToComplete": [
      "Azure Bicep",
      "ARM deployment model",
      "Declarative infrastructure",
      "Parameters",
      "Outputs",
      "Resource dependencies",
      "Azure deployment scopes",
      "Terraform vs Bicep state model"
    ],
    "requirements": [
      "Use Bicep to represent a small real Azure infrastructure component",
      "Infrastructure behavior should match the intended existing design",
      "Do not replace the primary Terraform implementation",
      "Compare meaningful differences rather than syntax alone"
    ],
    "doneWhen": [
      "Selected component can be deployed from Bicep",
      "Resource configuration matches intended architecture",
      "Short comparison describes:\n  * Terraform state\n  * Azure/Bicep deployment state model\n  * provider/platform portability\n  * Azure-specific integration\n  * situations where each may be appropriate"
    ],
    "evidence": [
      "Bicep file(s)",
      "short Terraform vs Bicep comparison note"
    ],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L3-CICD-001",
    "kind": "challenge",
    "title": "Stop Deploying Through SSH",
    "levelId": "level-3",
    "conceptId": "L3-CICD",
    "scenario": "Application releases still require manually connecting to infrastructure and copying or pulling application code.",
    "mission": "Automatically deploy application changes after approved code reaches the repository's main branch.",
    "guidance": [
      "The repository should become the source of deployment activity rather than your laptop."
    ],
    "continuesFrom": [
      "L2-APP-002"
    ],
    "prerequisites": [
      "L2-APP-002"
    ],
    "learnToComplete": [
      "GitHub Actions or equivalent CI/CD",
      "Build pipelines",
      "Deployment workflows",
      "Environment variables",
      "Deployment authentication",
      "Workload identity for CI/CD",
      "Build/test/deploy stages"
    ],
    "requirements": [
      "Main branch change should trigger deployment",
      "Deployment must not require manual SSH",
      "Long-lived cloud credentials should be avoided where possible",
      "Failed build/test should prevent deployment"
    ],
    "doneWhen": [
      "Code change reaches running environment automatically",
      "Failed test prevents deployment",
      "Deployment history can be inspected"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "4-7"
  },
  {
    "id": "L3-CICD-002",
    "kind": "challenge",
    "title": "Automate Infrastructure Validation",
    "levelId": "level-3",
    "conceptId": "L3-CICD",
    "scenario": "Terraform changes can affect the entire environment, but currently engineers can apply modifications without an automated review signal.",
    "mission": "Automatically validate and preview proposed Terraform changes when infrastructure code changes.",
    "guidance": [],
    "continuesFrom": [
      "L3-IAC-003"
    ],
    "prerequisites": [
      "L3-IAC-003",
      "L3-CICD-001"
    ],
    "learnToComplete": [
      "Terraform fmt",
      "Terraform validate",
      "Terraform plan",
      "Pull request workflows",
      "CI pipeline artifacts",
      "Infrastructure review"
    ],
    "requirements": [
      "Infrastructure changes must be validated automatically",
      "Reviewers must be able to inspect planned changes before apply",
      "Invalid Terraform should fail the workflow"
    ],
    "doneWhen": [
      "Pull request produces validation result",
      "Terraform plan is visible to reviewer",
      "Broken infrastructure code fails automatically"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L3-CICD-003",
    "kind": "challenge",
    "title": "Protect Production",
    "levelId": "level-3",
    "conceptId": "L3-CICD",
    "scenario": "Automation is powerful enough to modify production, which means one incorrect change could be deployed immediately.",
    "mission": "Add safeguards so production infrastructure or application deployments require appropriate validation or approval.",
    "guidance": [],
    "continuesFrom": [
      "L3-CICD-001",
      "L3-CICD-002"
    ],
    "prerequisites": [
      "L3-CICD-002"
    ],
    "learnToComplete": [
      "Protected environments",
      "Approval gates",
      "Branch protection",
      "Deployment environments",
      "Production controls",
      "CI/CD permissions"
    ],
    "requirements": [
      "Normal automated validation should remain fast",
      "Production modification must have an explicit protection mechanism",
      "Lower environments should remain easier to deploy"
    ],
    "doneWhen": [
      "Production deployment cannot proceed through the normal path without required protection",
      "Approved deployment succeeds",
      "Rejected/failed validation prevents production change"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-5"
  },
  {
    "id": "L4-CON-001",
    "kind": "challenge",
    "title": "Containerize the Application",
    "levelId": "level-4",
    "conceptId": "L4-CON",
    "scenario": "The application still depends on assumptions about the runtime environment provided by its hosting platform.",
    "mission": "Package the existing application and required runtime as a reproducible container image.",
    "guidance": [
      "The image should describe the application's runtime requirements, not Azure infrastructure."
    ],
    "continuesFrom": [
      "L3-CICD-001"
    ],
    "prerequisites": [
      "L2-APP-001"
    ],
    "learnToComplete": [
      "Docker",
      "Images",
      "Containers",
      "Dockerfile",
      "Build context",
      "Environment configuration",
      "Container networking"
    ],
    "requirements": [
      "Application must run from built image",
      "Image must not embed production secrets",
      "Runtime behavior should remain consistent"
    ],
    "doneWhen": [
      "Image builds successfully",
      "Application runs from container",
      "Health endpoint remains functional",
      "Production secrets are external to image"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "3-5"
  },
  {
    "id": "L4-CON-002",
    "kind": "challenge",
    "title": "Build a Private Image Registry",
    "levelId": "level-4",
    "conceptId": "L4-CON",
    "scenario": "Container images currently exist only on a developer machine and cannot be treated as reliable deployment artifacts.",
    "mission": "Store application images in a private Azure registry and allow Azure workloads to retrieve them securely.",
    "guidance": [],
    "continuesFrom": [
      "L4-CON-001"
    ],
    "prerequisites": [
      "L4-CON-001",
      "L1-IAM-003"
    ],
    "learnToComplete": [
      "Azure Container Registry",
      "Image repositories",
      "Image tags",
      "Registry authentication",
      "Managed identity",
      "Image lifecycle"
    ],
    "requirements": [
      "Images must be centrally stored",
      "Registry should not require embedded credentials in workload configuration",
      "Deployment should pull intended image version"
    ],
    "doneWhen": [
      "Image is stored in Azure registry",
      "Authorized workload pulls image successfully",
      "Unauthorized access fails appropriately"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "2-4"
  },
  {
    "id": "L4-CON-003",
    "kind": "challenge",
    "title": "Run Without Managing Servers",
    "levelId": "level-4",
    "conceptId": "L4-CON",
    "scenario": "You have a portable container image, but manually operating the server that runs it still creates unnecessary management overhead.",
    "mission": "Deploy the container using an Azure-managed container runtime while preserving application networking, identity, data, and observability requirements.",
    "guidance": [
      "You are now changing compute models again. Reuse the cloud services already built around the application."
    ],
    "continuesFrom": [
      "L4-CON-002",
      "L2-DAT-002",
      "L2-STO-002"
    ],
    "prerequisites": [
      "L4-CON-002"
    ],
    "learnToComplete": [
      "Azure Container Apps or appropriate managed container platform",
      "Container revisions",
      "Managed identity",
      "Container configuration",
      "Ingress",
      "Scaling fundamentals"
    ],
    "requirements": [
      "No learner-managed application VM",
      "Application behavior must remain consistent",
      "Existing persistent services must remain integrated",
      "Image must come from private registry"
    ],
    "doneWhen": [
      "Containerized application is publicly available",
      "Underlying application server OS is not administered by learner",
      "Database/storage access works",
      "Logs are centrally available"
    ],
    "evidence": [],
    "difficulty": "Intermediate",
    "estimatedHours": "4-7"
  },
  {
    "id": "L4-HA-001",
    "kind": "challenge",
    "title": "Survive an Instance Failure",
    "levelId": "level-4",
    "conceptId": "L4-HA",
    "scenario": "The application currently depends on one running compute instance. Losing that instance causes user-visible downtime.",
    "mission": "Run multiple application instances behind a single endpoint and keep the service available when one instance fails.",
    "guidance": [
      "Do not make the application depend on local state that only one instance has."
    ],
    "continuesFrom": [
      "L4-CON-003"
    ],
    "prerequisites": [
      "L4-CON-003",
      "L2-STO-001",
      "L2-DAT-001"
    ],
    "learnToComplete": [
      "Horizontal scaling",
      "Load balancing",
      "Health probes",
      "Stateless applications",
      "Instance health",
      "Shared persistent services"
    ],
    "requirements": [
      "Multiple application instances must serve traffic",
      "Users should use one endpoint",
      "One instance failure must not cause total outage"
    ],
    "doneWhen": [
      "Traffic reaches healthy instances",
      "Terminating one instance does not make application unavailable",
      "Replacement/healthy capacity returns appropriately"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "4-7"
  },
  {
    "id": "L4-HA-002",
    "kind": "challenge",
    "title": "Scale Under Load",
    "levelId": "level-4",
    "conceptId": "L4-HA",
    "scenario": "Traffic can exceed the capacity of the normal application instance count.",
    "mission": "Generate increased demand and configure the platform to respond by changing application capacity automatically.",
    "guidance": [
      "Choose a scaling signal that represents meaningful workload pressure."
    ],
    "continuesFrom": [
      "L4-HA-001"
    ],
    "prerequisites": [
      "L4-HA-001",
      "L3-OBS-003"
    ],
    "learnToComplete": [
      "Autoscaling",
      "Scaling metrics",
      "Minimum/maximum replicas",
      "Load generation",
      "Scale-out/scale-in",
      "Capacity thresholds"
    ],
    "requirements": [
      "Scaling must respond automatically",
      "Maximum/minimum boundaries must exist",
      "Capacity should return toward normal after load decreases"
    ],
    "doneWhen": [
      "Generated load causes measurable scale-out",
      "Additional capacity serves traffic",
      "Scale-in occurs after demand drops",
      "Telemetry shows scaling event"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L4-HA-003",
    "kind": "challenge",
    "title": "Deploy Without Visible Downtime",
    "levelId": "level-4",
    "conceptId": "L4-HA",
    "scenario": "Application deployments currently risk interrupting users while a new version replaces the old one.",
    "mission": "Release a new version while existing users continue receiving service.",
    "guidance": [
      "Think about running old and new versions simultaneously during the transition."
    ],
    "continuesFrom": [
      "L4-HA-002",
      "L3-CICD-003"
    ],
    "prerequisites": [
      "L4-HA-001",
      "L3-CICD-001"
    ],
    "learnToComplete": [
      "Rolling deployments",
      "Blue/green concepts",
      "Revisions",
      "Traffic splitting",
      "Health validation",
      "Deployment rollback"
    ],
    "requirements": [
      "Existing traffic should continue during release",
      "Unhealthy release must not become the only serving version",
      "Rollback must remain possible"
    ],
    "doneWhen": [
      "New version becomes active without observed outage",
      "Health validation occurs before full traffic transition",
      "Previous version can be restored"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "4-6"
  },
  {
    "id": "L4-DR-001",
    "kind": "challenge",
    "title": "Recover From Compute Loss",
    "levelId": "level-4",
    "conceptId": "L4-DR",
    "scenario": "The application compute layer has been completely destroyed.",
    "mission": "Restore service using infrastructure definitions and persistent external data rather than recovering the lost compute instance.",
    "guidance": [
      "By now, compute should be disposable."
    ],
    "continuesFrom": [
      "L3-IAC-004",
      "L4-CON-003"
    ],
    "prerequisites": [
      "L3-IAC-001",
      "L2-STO-001",
      "L2-DAT-001"
    ],
    "learnToComplete": [
      "Infrastructure recreation",
      "Recovery dependencies",
      "Persistent services",
      "Deployment automation",
      "Recovery time",
      "Disposable compute"
    ],
    "requirements": [
      "Existing compute must be intentionally removed",
      "Recovery must use reproducible infrastructure/deployment process",
      "Persistent data must remain available"
    ],
    "doneWhen": [
      "Service returns on newly created compute",
      "User data remains available",
      "Recovery steps and elapsed recovery time are documented"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L4-DR-002",
    "kind": "challenge",
    "title": "Recover From Data Loss",
    "levelId": "level-4",
    "conceptId": "L4-DR",
    "scenario": "The application remains online, but important database data has been destroyed or corrupted.",
    "mission": "Restore an acceptable data state and return the application to normal operation.",
    "guidance": [
      "Evaluate the difference between recovering infrastructure and recovering business data."
    ],
    "continuesFrom": [
      "L4-DR-001",
      "L2-DAT-003"
    ],
    "prerequisites": [
      "L2-DAT-003"
    ],
    "learnToComplete": [
      "Recovery Point Objective",
      "Recovery Time Objective",
      "Backup retention",
      "Database restore",
      "Data validation",
      "Recovery decision-making"
    ],
    "requirements": [
      "Data failure must be simulated safely",
      "Recovery must use prepared recovery capability",
      "Restored state must be validated"
    ],
    "doneWhen": [
      "Acceptable data state is restored",
      "Application works against recovered data",
      "Data loss window and recovery time are recorded"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L4-DR-003",
    "kind": "challenge",
    "title": "Write and Test a Recovery Runbook",
    "levelId": "level-4",
    "conceptId": "L4-DR",
    "scenario": "You know how to recover the environment, but recovery currently depends on your memory.",
    "mission": "Document a concise recovery process that another engineer could execute, then validate it.",
    "guidance": [],
    "continuesFrom": [
      "L4-DR-002"
    ],
    "prerequisites": [
      "L4-DR-001",
      "L4-DR-002"
    ],
    "learnToComplete": [
      "Recovery runbooks",
      "Incident procedures",
      "Dependency ordering",
      "Verification steps",
      "RTO/RPO documentation",
      "Operational handoff"
    ],
    "requirements": [
      "Runbook must describe recovery decisions and validation",
      "Avoid unnecessary tutorial-level detail",
      "Another engineer should be able to follow it"
    ],
    "doneWhen": [
      "Runbook exists in repository",
      "Recovery procedure is tested",
      "Missing/incorrect runbook assumptions are corrected"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "2-4"
  },
  {
    "id": "L5-GOV-001",
    "kind": "challenge",
    "title": "Enforce Organizational Rules",
    "levelId": "level-5",
    "conceptId": "L5-GOV",
    "scenario": "Engineers can currently deploy resources that violate your platform standards, and compliance depends entirely on humans remembering the rules.",
    "mission": "Define and enforce Azure platform rules so selected non-compliant deployments are denied or identified automatically.",
    "guidance": [],
    "continuesFrom": [
      "L3-IAC-004"
    ],
    "prerequisites": [
      "L3-IAC-001"
    ],
    "learnToComplete": [
      "Azure Policy",
      "Policy assignments",
      "Policy effects",
      "Compliance state",
      "Governance scope",
      "Organizational controls"
    ],
    "requirements": [
      "At least one meaningful infrastructure requirement must be enforced",
      "Compliance must be observable",
      "Policy should target appropriate scope"
    ],
    "doneWhen": [
      "Compliant resource succeeds",
      "Non-compliant test resource is denied or flagged as intended",
      "Compliance state is visible"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L5-GOV-002",
    "kind": "challenge",
    "title": "Organize Cloud Ownership",
    "levelId": "level-5",
    "conceptId": "L5-GOV",
    "scenario": "As the environment grows, it becomes difficult to identify who owns resources, why they exist, and which environment they belong to.",
    "mission": "Create a consistent organizational and metadata strategy for Azure resources.",
    "guidance": [],
    "continuesFrom": [
      "L5-GOV-001"
    ],
    "prerequisites": [
      "L5-GOV-001"
    ],
    "learnToComplete": [
      "Resource groups",
      "Tags",
      "Naming conventions",
      "Subscription organization",
      "Ownership metadata",
      "Environment classification"
    ],
    "requirements": [
      "Ownership must be identifiable",
      "Environment must be identifiable",
      "Purpose/application association must be identifiable",
      "Strategy should be enforceable or auditable"
    ],
    "doneWhen": [
      "Existing resources follow defined standard",
      "Query/filter can identify resources by meaningful metadata",
      "Standard is documented briefly"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "2-4"
  },
  {
    "id": "L5-GOV-003",
    "kind": "challenge",
    "title": "Control Cloud Spending",
    "levelId": "level-5",
    "conceptId": "L5-GOV",
    "scenario": "Cloud resources can increase cost without immediately causing a technical failure.",
    "mission": "Establish visibility and safeguards that detect unexpected Azure spending.",
    "guidance": [],
    "continuesFrom": [
      "L5-GOV-002"
    ],
    "prerequisites": [
      "L5-GOV-002"
    ],
    "learnToComplete": [
      "Azure Cost Management",
      "Budgets",
      "Cost alerts",
      "Resource cost analysis",
      "Cost allocation",
      "Forecasting"
    ],
    "requirements": [
      "Budget boundary must exist",
      "Spending must be attributable where practical",
      "Unexpected cost increase should generate useful signal"
    ],
    "doneWhen": [
      "Budget/alert mechanism exists",
      "Cost can be reviewed by workload/environment",
      "At least one cost optimization opportunity is identified"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "2-4"
  },
  {
    "id": "L5-SEC-001",
    "kind": "challenge",
    "title": "Audit Public Exposure",
    "levelId": "level-5",
    "conceptId": "L5-SEC",
    "scenario": "The platform has evolved through many challenges. Some resources may still be reachable from the internet even though they no longer need to be.",
    "mission": "Identify all publicly reachable resources and remove unnecessary exposure without breaking required functionality.",
    "guidance": [],
    "continuesFrom": [
      "L4-HA-003"
    ],
    "prerequisites": ["L2-DAT-002",
      "L2-STO-002",
      "L1-NET-002", "L1-CLI-003" 
    ],
    "learnToComplete": [
      "Attack surface",
      "Public endpoints",
      "Network exposure",
      "Firewall rules",
      "Private connectivity",
      "Security review"
    ],
    "requirements": [
      "All intentional public entry points must be known",
      "Unnecessary exposure must be removed",
      "Required user functionality must remain operational"
    ],
    "doneWhen": [
      "Public exposure inventory exists",
      "Unnecessary endpoints are removed/restricted",
      "Application remains functional",
      "Remaining public access can be justified"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L5-SEC-002",
    "kind": "challenge",
    "title": "Audit Permissions",
    "levelId": "level-5",
    "conceptId": "L5-SEC",
    "scenario": "Identities accumulated permissions while the environment was being built.",
    "mission": "Review access assignments, identify excessive privileges, and reduce them without breaking workloads or operational responsibilities.",
    "guidance": [],
    "continuesFrom": [
      "L5-SEC-001"
    ],
    "prerequisites": [
      "L1-IAM-002"
    ],
    "learnToComplete": [
      "RBAC review",
      "Privilege reduction",
      "Role assignment inventory",
      "Identity scope",
      "Least privilege",
      "Permission testing"
    ],
    "requirements": [
      "Human and workload identities must be reviewed",
      "Excessive permissions should be reduced",
      "Required operations must continue functioning"
    ],
    "doneWhen": [
      "Permission inventory exists",
      "At least one excessive assignment is corrected if present",
      "Application/workload access still functions",
      "Remaining privileged access is justified"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-5"
  },
  {
    "id": "L5-SEC-003",
    "kind": "challenge",
    "title": "Detect Suspicious Activity",
    "levelId": "level-5",
    "conceptId": "L5-SEC",
    "scenario": "The platform needs evidence when unusual or security-relevant activity occurs.",
    "mission": "Generate a safe test security event and verify that your Azure environment produces useful detection or investigation evidence.",
    "guidance": [],
    "continuesFrom": [
      "L5-SEC-002",
      "L3-OBS-004"
    ],
    "prerequisites": [
      "L3-OBS-001"
    ],
    "learnToComplete": [
      "Azure security monitoring",
      "Activity logs",
      "Defender concepts",
      "Identity/security events",
      "Detection evidence",
      "Investigation workflow"
    ],
    "requirements": [
      "Test must be safe and controlled",
      "Activity must generate observable evidence",
      "Investigation path should identify what happened"
    ],
    "doneWhen": [
      "Test event is visible",
      "Relevant identity/resource/time information can be determined",
      "Short investigation note is preserved"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L5-SEC-004",
    "kind": "challenge",
    "title": "Harden the Platform",
    "levelId": "level-5",
    "conceptId": "L5-SEC",
    "scenario": "The environment is now feature-complete but has never undergone a complete security review as one integrated system.",
    "mission": "Review identity, networking, storage, secrets, compute, databases, deployment automation, and monitoring. Remediate meaningful weaknesses without breaking the platform.",
    "guidance": [],
    "continuesFrom": [
      "L5-SEC-003"
    ],
    "prerequisites": [
      "L5-SEC-001",
      "L5-SEC-002",
      "L5-SEC-003"
    ],
    "learnToComplete": [
      "Cloud security posture",
      "Defense in depth",
      "Identity hardening",
      "Network hardening",
      "Data protection",
      "Secret management",
      "Secure configuration"
    ],
    "requirements": [
      "Review must cover multiple architectural layers",
      "Findings should be prioritized",
      "Remediations must be validated"
    ],
    "doneWhen": [
      "Security review is documented",
      "Meaningful identified weaknesses are remediated",
      "Platform still functions",
      "Residual risks are explicitly listed"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "5-8"
  },
  {
    "id": "L5-ARC-001",
    "kind": "challenge",
    "title": "Design for Failure",
    "levelId": "level-5",
    "conceptId": "L5-ARC",
    "scenario": "Cloud resources fail. A production system should expect component failure rather than assume everything remains healthy.",
    "mission": "Review the existing platform and remove critical single points of failure where appropriate.",
    "guidance": [],
    "continuesFrom": [
      "L4-HA-003",
      "L4-DR-003"
    ],
    "prerequisites": [
      "L4-HA-001",
      "L4-DR-001"
    ],
    "learnToComplete": [
      "Failure domains",
      "Redundancy",
      "Availability",
      "Dependency analysis",
      "Stateless design",
      "Recovery vs resilience",
      "Availability trade-offs"
    ],
    "requirements": [
      "Critical dependencies must be identified",
      "Design decisions must consider component failure",
      "Availability improvements must be justified"
    ],
    "doneWhen": [
      "Architecture diagram identifies failure boundaries",
      "Selected failure test does not cause unacceptable total outage",
      "Remaining single points of failure are documented"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "4-7"
  },
  {
    "id": "L5-ARC-002",
    "kind": "challenge",
    "title": "Design a Production Environment",
    "levelId": "level-5",
    "conceptId": "L5-ARC",
    "scenario": "You are given a new production web workload with persistent data, user uploads, security requirements, deployment automation, and expected growth.",
    "mission": "Design an Azure architecture that addresses networking, identity, compute, data, observability, security, deployment, scalability, cost, and recovery.",
    "guidance": [
      "Do not begin by choosing services. Begin with requirements and constraints."
    ],
    "continuesFrom": [],
    "prerequisites": [
      "L5-ARC-001",
      "L5-SEC-004",
      "L5-GOV-003"
    ],
    "learnToComplete": [
      "Azure architecture",
      "Non-functional requirements",
      "Availability",
      "Security",
      "Scalability",
      "Cost",
      "Operational complexity",
      "Architecture trade-offs"
    ],
    "requirements": [
      "Architecture must address all major workload concerns",
      "Significant service choices must be justified",
      "Trade-offs must be explicitly discussed",
      "Avoid unnecessary complexity"
    ],
    "doneWhen": [
      "Architecture diagram exists",
      "Major decisions are documented",
      "Failure and recovery behavior are explained",
      "Security boundaries are explained",
      "Cost/complexity trade-offs are discussed"
    ],
    "evidence": [
      "Architecture diagram",
      "Short architecture decision document"
    ],
    "difficulty": "Advanced",
    "estimatedHours": "5-8"
  },
  {
    "id": "L5-OPT-001",
    "kind": "challenge",
    "title": "Reduce the Bill",
    "levelId": "level-5",
    "conceptId": "L5-OPT",
    "scenario": "The platform works correctly, but technical success does not mean the architecture is financially efficient.",
    "mission": "Analyze Azure consumption and reduce unnecessary cost without violating the platform's required availability, security, or performance.",
    "guidance": [],
    "continuesFrom": [
      "L5-GOV-003",
      "L5-ARC-001"
    ],
    "prerequisites": [
      "L5-GOV-003"
    ],
    "learnToComplete": [
      "Cost analysis",
      "Resource sizing",
      "Idle resources",
      "Scaling economics",
      "Storage tiers",
      "Reserved/consumption models",
      "Cost-performance trade-offs"
    ],
    "requirements": [
      "Use actual environment data where possible",
      "Do not reduce cost by simply breaking required availability",
      "Changes must have measurable or defensible financial impact"
    ],
    "doneWhen": [
      "Before/after cost estimate exists",
      "At least one optimization is implemented",
      "Required workload behavior remains intact"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-6"
  },
  {
    "id": "L5-OPT-002",
    "kind": "challenge",
    "title": "Justify Your Architecture",
    "levelId": "level-5",
    "conceptId": "L5-OPT",
    "scenario": "A technically working architecture still needs to be understandable and defensible to other engineers.",
    "mission": "Document the major architecture decisions, alternatives considered, and trade-offs accepted throughout the project.",
    "guidance": [],
    "continuesFrom": [
      "L5-OPT-001",
      "L5-ARC-002"
    ],
    "prerequisites": [
      "L5-ARC-002"
    ],
    "learnToComplete": [
      "Architecture Decision Records",
      "Technical trade-offs",
      "Cost vs availability",
      "Build vs managed services",
      "Operational complexity",
      "Security trade-offs"
    ],
    "requirements": [
      "Focus on major decisions rather than documenting every resource",
      "Include rejected alternatives",
      "Explain trade-offs rather than claiming one universal best solution"
    ],
    "doneWhen": [
      "Major architecture decisions are documented",
      "Alternatives are identified",
      "Trade-offs are clearly explained",
      "Another engineer can understand why the platform looks the way it does"
    ],
    "evidence": [],
    "difficulty": "Advanced",
    "estimatedHours": "3-5"
  },
  {
    "id": "CAP-AZURE-001",
    "kind": "challenge",
    "title": "Production Azure Platform",
    "levelId": "level-5",
    "conceptId": "L5-ARC",
    "capstone": true,
    "scenario": "You are responsible for delivering a new production web platform. You are given only the application requirements and an empty Azure environment.",
    "mission": "Design and deploy the complete Azure platform using the engineering practices developed throughout the roadmap. Do not prescribe the exact Azure services. The learner must make architecture decisions.",
    "guidance": [],
    "continuesFrom": [],
    "prerequisites": [
      "L5-OPT-002",
      "L5-SEC-004",
      "L5-GOV-003",
      "L4-DR-003",
      "L4-HA-003",
      "L3-CICD-003",
      "L3-IAC-004"
    ],
    "learnToComplete": [
      "Infrastructure as Code",
      "Network and identity boundaries",
      "Persistent data design",
      "Deployment automation",
      "Observability",
      "Recovery engineering",
      "Governance and cost",
      "Architecture trade-offs"
    ],
    "requirements": [
      "Infrastructure must be reproducible through Infrastructure as Code",
      "Networking must intentionally control public and private access",
      "Workloads must use appropriate identity",
      "Long-lived cloud credentials should not be embedded in applications",
      "Persistent application data must survive compute replacement",
      "Application deployment must be automated",
      "Infrastructure changes must have an automated validation path",
      "Logs and important metrics must be centrally available",
      "Application availability must be monitored",
      "Recovery capability must exist",
      "Cost and governance must be considered",
      "Security boundaries must be documented",
      "Architecture decisions must be justified"
    ],
    "doneWhen": [
      "Platform is deployed from an initially empty environment",
      "Application works through its intended public endpoint",
      "Persistent data works",
      "Deployment automation works",
      "Monitoring works",
      "Recovery demonstrations succeed",
      "Infrastructure can be reproduced",
      "Architecture diagram exists",
      "Major architecture decisions are documented"
    ],
    "evidence": [
      "source repository",
      "Terraform/IaC",
      "architecture diagram",
      "deployment workflow",
      "monitoring evidence",
      "recovery runbook",
      "architecture decisions",
      "short final README"
    ],
    "failureDemonstration": [
      "at least one compute failure",
      "at least one data-related failure"
    ],
    "difficulty": "Capstone",
    "estimatedHours": "15-30"
  }
]
