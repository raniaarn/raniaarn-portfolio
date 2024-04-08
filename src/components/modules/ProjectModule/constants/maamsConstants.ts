export const SUMMARY = {
  title: "What is Maams?",
  summary: "The MAAMS application is a desktop-only web application oriented towards a verification system that aims to assist users in analyzing a problem until it ultimately leads to its root cause, namely corruption. MAAMS is the project i created as part of my Software Project Course at Fasilkom UI. This website is made as a request from our client, a lecturer from UI.",
  prototype: "https://www.figma.com/proto/8e6FkXVdDDj8ThIe0Jc9Cy/MAAMS-Design?page-id=163%3A1554&type=design&node-id=163-2805&viewport=946%2C240%2C0.06&t=8Ol3vXnQqRLLTRUn-1&scaling=scale-down-width&starting-point-node-id=163%3A2805&show-proto-sidebar=1&mode=design"
}

export const ROLE = {
  title: "My Role",
  description: "Focused: Product Owner, Developer, Designer",
  list: [
    'Create the design system and UI Designs for MAAMS (edit profile, login, register, landing page, validator, history pages)',
    'Define userflows of MAAMS',
    'Manage product backlog',
    'Communicate visions every sprint planning and review for two sprints',
    'Collaborating with 6 other developers and 1 product owner, Communicating to the client and lecturer regarding requirements of MAAMS',
    'Create codes for Validator feature (CRUD BE) and (CRD) FE, GET Recent Analysis (BE and FE)'
  ]
}

export const DOCUMENTATION = {
  title: 'Articles',
  description: [
    'I\'ve created articles as the documentation about MAAMS (what i implemented when i work on MAAMS), you can click the link below to see the lists on my medium. The topics are about SOLID principles, principles in UI Design, UI Standardization, Tools on development, Software Quality Assurance, TDD, and soon else.',
  ],
  documentation: 'https://medium.com/@raniaarn/list/ppl-159594008fce'
}

export const AGILE = {
  title: 'Agile Methodology',
  description: 'The Agile Scrum methodology utilized for this project consisted of four sprints, each spanning approximately 4-5 months, with each sprint lasting 2-3 weeks. Additionally, there was a pre-sprint phase comprising various tasks conducted before the sprints commenced.'
}

export const PRASPRINT = {
  title: 'Pra-Sprint: Design Sprint',
  description: 'This stage was mostly filled by gathering requirements from our client to gain deeper understanding of the system (MAAMS). On the design sprint activity, we gather requirements and filled some documents like PRD (Product Requirement Development), SDS (System Design Specification), Product Roadmap, and PBI (Product Backlog Item). We have several meets with the client to understand more about their needs and wants. Another deliverables worth mentioning is prototype of MAAMS that we present everytime there were changes, to confirm with the client and lecturer.',
  sections: [{
    title: 'Features',
    description: [
      'At first, MAAMS only has one page and one feature only; validator for finding root cause. But, we found out that another features might be needed, like authentication system, which led to history so users can review their analysis in another time. Other than that, new roles developed so for the final decision, there are 2 roles, which are admin and regular users. Admin can view dashboards for education purposes (for our client, as he is a lecturer). Below is the initial design of MAAMS\' use case diagram, class diagram, and sequence diagram. This helps us define the database of MAAMS, and for the designs also',
    ],
    urlImage: [
      '/images/maams/ucd.png',
      '/images/maams/classdiagram.png',
      '/images/maams/sequencediagram.png'
    ]
  },
  {
    title: 'Designs',
    description: [
      'Like i\'ve mentioned before, I was responsible for creating the design system of MAAMS and it\'s visual appearance (UI designs). For the detailed explanations about the designs (like reasons behind the design system and logo, Schneidermans analysis) you can access the UI design article from the PPL list on my medium. below is a few examples of the UI designs',
    ],
    urlImage: [
      '/images/maams/styleguide.png',
      '/images/maams/userflow.png',
      '/images/maams/wireframe.png',
      '/images/maams/prototype.png',
    ]
  },
  {
    title: 'Product Backlog',
    description: [
      'Once the requirements gathering phase was complete, we proceeded to prioritize and identify the product backlog items to be addressed throughout the entire sprint.',
        ],
    urlImage: [
    ]
  },
  ]
}

export const SPRINTPLANNING = {
  title: 'Sprint Planning',
  description: 'At the beginning of each sprint, we established a sprint goal outlining the objectives to be accomplished within that timeframe. Subsequently, we conducted task breakdowns and assigned story points to each task. Through collaborative discussions, we distributed tasks evenly among team members and presented our plans to the lecturer. We used linear as our project management tools',
  imageUrl: '/images/maams/linear.png'
}

export const DAILYSCRUM = {
  title: 'Daily Scrum',
  description: 'During these meetings, we held brief discussions to review the progress of each team member and address any obstacles they may be facing. This allowed us to provide updates on our individual tasks and improve communication within the team.'
}

export const REVIEW = {
  title: 'Sprint Review and Retrospective',
  description: 'At the end of each sprint, we presented the product increment to both the lecturer and the client. During this presentation, stakeholders provided feedback and evaluated whether the sprint goal was met. Additionally, we held a sprint retrospective meeting to reflect on the activities, tools, and problems encountered during the sprint. Furthermore, we used this opportunity for team bonding by engaging in games afterward.'
}