import React from "react";

export const CV_ITEMS = [
  {
    name: "Fontys",
    type: "Education",
    location: "Venlo, Netherlands",
    start: new Date(2015, 8),
    end: new Date(2019, 7),
    descriptions: [
      "Worked on banking and insurance software projects (mostly in .NET)",
      "Helped management with automation for JIRA"
    ]
  },
  {
    name: "YU University",
    type: "Education",
    location: "Daegu, South Korea",
    start: new Date(2018, 1),
    end: new Date(2018, 7),
    descriptions: [
      "Worked on banking and insurance software projects (mostly in .NET)",
      "Helped management with automation for JIRA"
    ]
  },
  {
    name: "ESIEE",
    type: "Education",
    location: "Paris, France",
    start: new Date(2019, 8),
    end: new Date(2021, 3),
    descriptions: [
      "Worked on banking and insurance software projects (mostly in .NET)",
      "Helped management with automation for JIRA"
    ]
  },
  {
    name: "codecentric AG",
    type: "Experience",
    position: "Software Engineering Intern",
    location: "Solingen, Germany",
    start: new Date(2017, 8),
    end: new Date(2018, 1),
    descriptions: [
      "Developed a cloud-based file sharing platform with React.js and Java Spring",
    ]
  },
  {
    name: "codecentric AG",
    type: "Experience",
    position: "Software Engineer",
    location: "Solingen, Germany",
    start: new Date(2018, 6),
    end: new Date(2019, 0),
    descriptions: [
      "Worked on banking and insurance software projects (mostly in .NET)",
      "Helped management with automation for JIRA"
    ]
  },
  {
    name: "Instana",
    type: "Experience",
    position: "Software Engineer",
    location: "Solingen, Germany",
    start: new Date(2019, 1),
    end: new Date(2021, 7),
    descriptions: [
      (<>Main contributor to Instana’s Grafana datasource plugin [<a href="https://grafana.com/grafana/plugins/instana-datasource/" target="_blank">link</a>], reduced support load by 99% (10 bug tickets/quarter to 1 ticket in 11 months)</>),
      (<>Built automatic <a href="https://www.instana.com/blog/instana-adds-javascript-stack-trace-translation-to-website-monitoring/" target="_blankl">JavaScript stack trace translation</a> using Kafka and Reactive Programming</>),
      (<>Implemented new features tied to Instana’s <a href="https://www.ibm.com/docs/en/instana-observability/current?topic=instana-managing-user-access#role-based-access-control-rbac" target="_blanks">RBAC</a> concept</>)
    ]
  },
  {
    name: "Instana",
    type: "Experience",
    position: "Product Manager",
    location: "Solingen, Germany",
    start: new Date(2021, 7),
    end: new Date(2021, 11),
    descriptions: [
      (<>From discovery to release: <a href="https://www.ibm.com/docs/en/instana-observability/current?topic=authentication-idp-group-mapping" target="_blank">IdP Role Mapping</a></>),
      "Close collaboration with design partners to create new RBAC concept"
    ]
  },
  {
    name: "Datadog",
    type: "Experience",
    position: "Product Manager",
    location: "Paris, France",
    start: new Date(2022, 0),
    descriptions: [
      (<>Product Management for <a href="https://www.datadoghq.com/product/platform/alerts/" target="_blank">Alerting Platform</a></>),
      "Create GTM strategy for whole product live cycle from closed-beta to general availability",
      "Stakeholder Management up to C-Level"
    ]
  }
];
