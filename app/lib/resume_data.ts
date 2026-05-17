export interface workHistory {
  dates: string;
  company: string;
  role: string;
  location: string;
  description: string[];
}

export const workPast: workHistory[] = [
  {
    dates: "Apr 2024 - Present",
    company: "Bank of America",
    role: "DevOps Engineer (Senior-level) - Platform Engineering Focus",
    location: "Charlotte, NC",
    description: [
      "One of two senior technical leads - oversee 10 active projects (personally executing, 3 contractors handling 7); lead daily standups and serve as primary point of contact for Java/Linux CI/CD migration projects",
      "Operate Horizon, an internal developer platform (IDP) serving 15 development teams across 12 organizations - managing 400+ product releases across multiple environments",
      "Built hotfix release automation suite in Python - automated JSON creation and XL Release generation for 5 parallel product releases, reducing processing time from 20 - 30 minutes to under 2 minutes (93% improvement)",
      "Introduced a grandparent release architecture that consolidates all parent releases into a single release per organization, reducing tracking overhead from dozens of parent releases across orgs to 1 per org across all 12.",
      "Took over stalled Java/Linux projects with no prior Linux experience; unblocking all delays within months; configured WebSphere and Tomcat deployments, build JVM tower templates and setup SSH Key automation from tower.",
      "Building full-stack release management platform in Python and Next.js: UI controls, release templates, status dashboards and access management",
      "Supported MSI-to-ZIP migration rearchitecting deployment strategy; parallel execution via streamlined Ansible Tower invetories ultimately reduced deployment time from 8h to 3h (62% improvement)",
    ],
  },
  {
    dates: "Feb 2023 - Apr 2024",
    company: "Bank of America",
    role: "Technical Analyst II",
    location: "Jersey City, NJ",
    description: [
      "Co-led 2 year enterprise CI/CD pipeline migration using Jenkins, XL Release, Bitbucket, Artifactory, and Ansible Tower",
      "Personally led CI/CD onboarding of 500+ application components as part of a broader team effort onboarding 3,500+ components enterprise-wide",
      "Owned CI/CD onboarding for internal framekwork products; the most critical tier of the bank's infrastructure, where a single failure cascades across al downstream systems",
      "Contributed to buildout of a 3rd enterprise datacenter; helped coordinate installation and validation across all 3 datacenters, partnering with dev and ProdOps teams",
      "Designed and built Ansible inventories and configuration templates; collaborated with platform playbook team on development, updates, and optimization",
      "Assisted with windows server 2016 to 2019 migration; creating new inventories and aligning newly created components for 2019 architecture to those new inventories",
    ],
  },
  {
    dates: "Jan 2022 - Feb 2023",
    company: "Bank of America",
    role: "DevOps Apprentice",
    location: "Jersey City, NJ",
    description: [
      "Contributed to early-stage CI/CD migration planning as part of the enterprise DevOps transformation",
      "Supported application deployments and triaged issues; built fluency with Jenkins, XL Release, Ansible, Bitbucket, and Artifactory",
    ],
  },
  {
    dates: "Jun 2021 - Jan 2022",
    company: "Bank of America (CONTRACTOR)",
    role: "DevOps Engineer",
    location: "Bronx, NY",
    description: [
      "Executed daily deployments and monitored stability for 2 enterprise platforms (Merrill and Benefites Online)",
      "Ran post-deployment automation: IIS resets, app pool recycles, product config updates and login availability triage.",
    ],
  },
];

export interface skillsCategories {
  categories: string;
  skills: string[];
}

export const skills: skillsCategories[] = [
  {
    categories: "CI/CD & DevOps",
    skills: [
      "Jenkins",
      "XL Release",
      "Ansible Tower",
      "Bitbucket",
      "Artifactory",
      "Release Management",
      "SDLC",
      "NPT Remediation",
    ],
  },
  {
    categories: "Automation & Scripting",
    skills: [
      "Python",
      "PowerShell",
      "Ansible Playbooks",
      "Ansible Inventories",
      "JSON",
    ],
  },
  {
    categories: "Cloud & Infrastructure",
    skills: [
      "AWS (SAA in progress)",
      "Terraform (trained, exam Q1 2027)",
      "Kubernetes (CKA planned Q2 2027)",
      "Windows Server 2016/2019",
      "Linux (RHEL)",
      "WebSphere",
      "Apache Tomcat",
      "IIS",
    ],
  },
  {
    categories: "Languages & Development",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "PowerShell",
      "React",
      "Next.js",
      "HTML/CSS",
      "JQuery",
    ],
  },
  {
    categories: "Platform & Practices",
    skills: [
      "Internal Developer Platform (IDP)",
      "Developer Experience(DevEx)",
      "Platform Engineering",
      "Incident Response",
      "Release Management",
      "Agile/Scrum",
      "Technical Documentation",
      "NPT Remediation",
    ],
  },
];

export interface certifications {
  title: string;
  description: string;
  status: "in progress" | "completed" | "planned";
}

export const certificates: certifications[] = [
  {
    title: "AWS Solutions Architect Associate (SAA-C03)",
    description: "Amazon Web Services - Actively studying",
    status: "in progress",
  },
  {
    title: "Hashicorp Terraform Associate (003)",
    description: "BofA Internal Training complete - Exam planned Q1 2027",
    status: "planned",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Studying via KodeKloud - Exam planned Q2 2027",
    status: "planned",
  },
  {
    title: "Software Engineering - Per Scholas",
    description: "HTML, CSS, JS, React, Java, Spring Boot, REST APIs",
    status: "completed",
  },
];

// const statusClass = {
//   'In progress': styles.badgeProgress,   // amber
//   'Exam pending': styles.badgePending,   // amber
//   'Planned':     styles.badgePlanned,    // gray
//   'Completed':   styles.badgeDone,       // green
// }
