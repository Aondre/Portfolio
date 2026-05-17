export interface project {
  title: string;
  description: string;
  impact: string;
  status: "Delivered" | "In Progress" | "Planned";
  category: "automation" | "platform" | "infra";
  tools: string[];
}

export const projects: project[] = [
  {
    title: "Hotfix Pipeline Automation - JSON Creation & Releases Generation",
    description:
      "Two Python scripts that together, automate the full hotfix release workflow end-to-end. Script 1: takes a component's product key, component name, and target environment tokens and generates the JSON variable files needed for release creation. Script 2; consumes those JSONs to automatically create and start hotfix releases in XL Release via the API - replacing a process previously done by hand every code freeze.",
    impact:
      "20-30 minutes -> under 2 minutes. 93% time reduction. Actively used by my team.",
    status: "Delivered",
    category: "automation",
    tools: ["Python", "XL Release API", "JSON", "REST API"],
  },
  {
    title: "Grandparent Release Architecture",
    description:
      "A Digital.ai (XL Release) template that introduces a grandparent layer above the team's existing parent/child release structure. The grandparent release starts the parent releases, which in turn start the child releases. Currently functional - parent releases are start successfully - but visibility into and interaction with parent releases from the grandparent level is still in development. The end goal is a single entry point that reduces API call volume across both the Python automation scripts and the XL Release UI tool.",
    impact:
      "Foundation for consolidating all hotfix release management through a single entry point - reducing API calls across scripts and the UI tool.",
    status: "In Progress",
    category: "automation",
    tools: ["Digital.ai", "XL Release", "Release Templates", "Python"],
  },
  {
    title: "XL Release UI Platform Tool",
    description:
      "Full-stack internal platform replacing script-based release management. Features: create/abort/recreate releases via UI, template system for grouped releases, status dashboard (aborted, created, active, recreated, completed), access controls.",
    impact:
      "Preparing for team-wide rollout - replaces manual script execution with a controlled UI and access management.",
    status: "In Progress",
    category: "platform",
    tools: ["Python", "FastAPI", "Next.js", "React", "TypeScript"],
  },
  {
    title: "Enterprise Hotfix Pipeline",
    description:
      "Implemented and operationalized the bank's enterprise hotfix deployment pipeline for last-minute production releases. Trained and onboarded multiple dev teams. Now the designated escalation point and SME for release management and change request teams",
    impact:
      "Adopted for all platforms we support. Creates controls for product integration and deployment post code freeze.",
    status: "Delivered",
    category: "platform",
    tools: ["Jenkins", "XL Release", "Ansible Tower", "Bitbucket"],
  },
  {
    title: "MSI-to-ZIP Deployment Migration",
    description:
      "I supported rearchitecting the enterprise deployment strategy - bundling scripts into middleware components, separated product variables into discrete components, and streamlined Ansible Tower inventories to enable parallel execution across all environments.",
    impact:
      "8 hours -> 3 hours total deployment time. 62% reduction across the entire pipeline.",
    status: "Delivered",
    category: "infra",
    tools: ["Ansible Tower", "Powershell", "Celestial", "Jenkins"],
  },
  {
    title: ".NET Legacy Runtime Removal",
    description:
      "PowerShell script removing a legacy .NET runtime at three levels: standard uninstall, file system folder removal and registry-level uninstall. All three steps were required - each addressed a different failure mode.",
    impact:
      "Unblocked a critical platform wide upgrade. Used by the team until a dedicated tool replaced it.",
    status: "Delivered",
    category: "automation",
    tools: ["PowerShell", "Windows Server 2019", ".NET", "Registry"],
  },
  {
    title: "3rd Enterprise Datacenter Buildout",
    description:
      "Coordinated installation and validation of platform, framework, and business products on newly provisioned infrastructure. Partnered with dev, ProdOps, QA and testing teams to ensure environment consistency across all 3 datacenters.",
    impact:
      "20-30 minutes -> under 2 minutes. 93% time reduction. Actively used by my team.",
    status: "Delivered",
    category: "infra",
    tools: ["Ansible Tower", "Windows Server", "Celestial", "Bitbucket"],
  },
  {
    title: "XL Release Script Optimization",
    description:
      "Inherited a python automation script from an internal Solutions Architect for generating XL releases. Extended it to fit the team's workflow, then optimized the API call pattern to produce the same output with half the calls. This became the foundation of the hotfix automation suite.",
    impact:
      "Foundation for consolidating all hotfix release management through a single entry point - reducing API calls across scripts and the UI tool.",
    status: "In Progress",
    category: "automation",
    tools: ["Pythong", "XL Release API", "REST API"],
  },
];
