export const SUMMARY = {
  title: "What is Maams?",
  summary: "The MAAMS application is a desktop-only web application oriented towards a verification system that aims to assist users in analyzing a problem until it ultimately leads to its root cause, namely corruption. MAAMS is the project i created as part of my Software Project Course at Fasilkom UI. This website is made as a request from our client, Ari Harsono, as it is his research, He is a lecturer from Universitas Indonesia (Social and Political Science).",
  deliverables: [
    "Awards", "Deck", "Role", "Articles", "Designs", "PBIs"
  ],
  prototype: "https://www.figma.com/proto/8e6FkXVdDDj8ThIe0Jc9Cy/MAAMS-Design?page-id=163%3A1554&type=design&node-id=163-2805&viewport=946%2C240%2C0.06&t=8Ol3vXnQqRLLTRUn-1&scaling=scale-down-width&starting-point-node-id=163%3A2805&show-proto-sidebar=1&mode=design",
  link: "https://maams.app"
}

export const AWARDS = {
  title: "MAAMS Awards in PPL 2024",
  description: 'MAAMS received two awards: one for being one of the best teams in class C (out of seven teams) and another for having the most lovable product across all classes, encompassing approximately 20 teams.',
  imageUrl: '/images/maams/award.png'
}

export const DECK = {
  title: "MAAMS Pitchdeck",
  slide: 'https://drive.google.com/file/d/1ka6dEPkSi1H5lJKI-HhyB2AhhHM2ajD6/preview'
}

export const ROLE = {
  title: "My Role",
  description: "Roles: Developer, Designer, Product Manager, Product Owner, QA",
  list: [
    'Gather requirements from the clients and lecturer for MAAMS',
    'Create the design system, wireframe, UI Designs, and the prototype for MAAMS (edit profile, login, register, landing page, validator, history pages)',
    'Define userflows of MAAMS',
    'Manage and defined product backlog',
    'Communicate visions every sprint planning and review for two sprints to the team and stakeholders (lecturer, teaching assistant, and clients)',
    'Collaborating with 6 other developers and 1 product owner, Communicating to the client and lecturer regarding requirements of MAAMS',
    'Create codes for question in Validator feature (CRUD BE and FE), GET Recent Analysis (BE and FE)',
    'Design pitchdeck slides, posters, and stickers for exhibition',
    'Peer review merge requests'
  ]
}

export const DOCUMENTATION = {
  title: 'Articles',
  description: [
    'I\'ve created articles as the documentation about MAAMS (what i implemented when i work on MAAMS), you can click the link below to see the lists on my medium. The topics are about SOLID principles, principles in UI Design, UI Standardization, Tools on development, Software Quality Assurance, TDD, and else more.',
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
      'Once the requirements gathering phase was complete, we proceeded to prioritize and identify the product backlog items to be addressed throughout the entire sprint. Mostly in MAAMS\'s PBIs, i defined the bussiness value, user story, and acceptance criteria. Then every sprint planning, the team dicussed the story points, led by scrum master',
    ],
    urlImage: [
      '/images/maams/pbi.png'
    ]
  },
  ]
}

export const SPRINTPLANNING = {
  title: 'Sprint Planning',
  description: 'At the beginning of each sprint, we established a sprint goal outlining the objectives to be accomplished within that timeframe. Subsequently, we conducted task breakdowns and assigned story points to each task. Through collaborative discussions, we distributed tasks evenly among team members and presented our plans to the lecturer. We used linear as our project management tools',
  imageUrl: '/images/maams/linear.png',
  description2: 'Every sprint planning, we defined the acceptance criteria and definition of done. Below is the example of sprint planning 4, where i defined all of them (sprint goal, review summary from previous sprint, acceptance criterias, DoD) and also show the burndown chart',
  imageUrls_2: [
    '/images/maams/sprint4_1.png',
    '/images/maams/sprint4_2.png',
    '/images/maams/sprint4_3.png'
  ]
}

export const DAILYSCRUM = {
  title: 'Daily Scrum',
  description: 'During these meetings, we held brief discussions to review the progress of each team member and address any obstacles they may be facing. This allowed us to provide updates on our individual tasks and improve communication within the team.',
  description2: 'Outside the meetings, we also made merge requests with detail description and other developer will review it',
  imgUrls: [
    '/images/maams/review_1.png',
    '/images/maams/review_2.png',
    '/images/maams/review_3.png',
  ]
}

export const REVIEW = {
  title: 'Sprint Review and Retrospective',
  description: 'At the end of each sprint, we presented the product increment to both the lecturer and the client. During this presentation, stakeholders provided feedback and evaluated whether the sprint goal was met. Additionally, we held a sprint retrospective meeting to reflect on the activities, tools, and problems encountered during the sprint. Furthermore, we used this opportunity for team bonding by engaging in games afterward.'
}