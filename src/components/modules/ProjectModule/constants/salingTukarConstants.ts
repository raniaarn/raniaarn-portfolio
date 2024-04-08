export const SUMMARY = {
  title: "What is SalingTukar?",
  summary: "Students often lean towards renting or borrowing items that are seldom used due to time constraints, accessibility hurdles, and economic considerations. Introducing SalingTukar, an innovative application tailored for students, aimed at expediting the process of renting or lending items for specific situations or occasional use. This project was one of the task from Binar Academy UI/UX Research and Design bootcamp (MSIB Program).",
  deliverables: [
    "Decks", "User Persona", "Journey Map", "Sitemap (IA)", "Flows", "Design System", "Prototype"
  ],
  Documentation: 'https://www.figma.com/file/iaSRY8eG6EllWsO5T9BKBO/Research---SalingTukar?type=whiteboard&node-id=0%3A1&t=pD6p6NNYtBOh08fr-1',
  Prototype: 'https://bit.ly/Prototype-ST-1'
}

export const ROLE = {
  title: "My Role",
  roles: [
    "Conducted user research from creating research plan (includes background, objectives, hypothesis, timeline), scenario, and interviewed 5 participants that match the criteria (active college students).",
    "Implementing the design thinking process from empathize to usability testing using maze.",
    "Developing a comprehensive design system entails creating essential elements such as a color palette, typography choices, and various components like buttons, navigation bars, footers, among others. Additionally, crafting the application's logo is part of this process.",
    "Created userflow, wireflow, Information Architecture, UI designs, and clickable prototypes for salingtukar features."
  ]
}

export const CONSTRAINTS = {
  title: 'Constraints',
  description: 'Working on this project solo within a limited timeframe posed significant challenges.'
}

export const PLAN = {
  title: 'Research Plan',
  sourcePDF: 'https://drive.google.com/file/d/1W9ygw_lBPKqtsasay6kN_ppcPbGCQc0C/preview',
  objective: 'Objectives',
  objectives: [
    'Gaining insight into how students acquire items they need only for specific situations, despite not owning them previously.',
    "Understanding the challenges students face when they cannot find and/or own certain items.",
    "Identifying the opportunities available for students to leverage items that are not used intensively."
  ],
  hypo: 'Hypothesis',
  hypothesis: [
    "Students prefer to rent or borrow items that are not used intensively rather than purchasing them.",
    "Students encounter challenges such as time constraints, accessibility issues, or lack of information in finding the items or services they need.",
    "Students rent out items to fellow students as an additional source of income."
  ],
  methodology: 'Methodology',
  methodDesc: 'For the methodology and data gathering, I conducted remote In-depth Interview with 5 participants (college students)',
  methodImageURL: '/images/salingtukar/interview.png'
}

export const EMPATHIZE = {
  title: 'Empathize',
  affinity: 'Affinity Mapping',
  affinityDesc: 'After conducting interviews with IDI participants, I compiled all responses in FigJam, identified commonalities, and map them into groups to derive insights. The insights that i got was summarized on the PDF at the research plan section.',
  affinityDocs: '/images/salingtukar/affinity.png',
  fourwhy: 'Four Whys',
  fourwhyDesc: 'I asked 4 question to find root cause of the background problem. These questions, namely \'who,\' \'what,\' \'where,\' and \'why,\' were designed to extract the user\'s intent statement. By understanding the user\'s intent, we could then proceed to identify appropriate solutions that address their needs effectively. The intent statements led to target users need a platform to connect them.',
  fourwImageUrl: '/images/salingtukar/fourw.png',
  persona: 'User Persona',
  personaDesc: 'After finding the intent statement, I created two user persona that means i have two target users or view (owner and renter). This approach allowed for a comprehensive understanding of both target user groups and their respective viewpoints.',
  personaImageUrl: '/images/salingtukar/persona.png',
  journey: 'User Journey Map',
  journeyDesc: 'Using the personas as a guide, I crafted two user journey maps to explore the experiences of both owners and renters. These maps provided insights into their behaviors, pain points, and potential opportunities, which are related to creating the platform to connect both personas and more detailed informations about the rent.',
  journeyImageUrls: ['/images/salingtukar/userjourney.png', '/images/salingtukar/userjourney.png']
}

export const DEFINE = {
  title: 'Define',
  hmw: 'How Might We',
  hmwdesc: 'Based on the user journey map, I formulated four "How Might We" (HMW) questions for each persona. These questions aim to address the specific issues identified in their experiences and leverage the opportunities identified in the journey map.',
  hmwImageUrl: '/images/salingtukar/HMW.png',
  prioDesc: 'After defining the HMWs, I prioritized them based on their value and the effort required using a prioritization matrix. This allowed me to focus on addressing the HMWs that would deliver the most significant impact with the least amount of effort.',
  hmwPrioUrl: '/images/salingtukar/prioritizehmw.png',
  afterPrioDesc: 'After prioritizing the HMWs, I assigned potential solutions to each chosen HMW, which could later be developed into features. As a result, the initial iteration of SalingTukar includes features such as Checkout, Tracking, Search, Chat, and Review.',
  hmwafterUrl: '/images/salingtukar/afterprio.png',
  featureImgUrl: '/images/salingtukar/features.png',
}

export const IDEATION = {
  title: 'Ideation',
  crazy: 'Crazy 8',
  crazy8Desc: 'From the features previously defined, I embarked on creating Crazy 8 sketches. This exercise allowed me to generate rapid and creative ideas and solutions for each feature within a constrained timeframe.',
  crazyImgUrl: '/images/salingtukar/crazy8.png',
  ia: 'Information Architecture',
  iaImgUrl: '/images/salingtukar/ia.png',
  iaDesc: 'From the crazy 8 i\'v created, I created the information architecture for the whole app. This helps me to create flows that might exist in SalingTukar',
  flow: 'Userflow and Wireflow',
  flowImgUrls: [
    '/images/salingtukar/userflow.png',
    '/images/salingtukar/wireflow.png',
    '/images/salingtukar/wireflowB.png',
    '/images/salingtukar/wireflowC.png'
  ],
  flowDesc: 'In the example below, I only shown the flows for checking out rent, for full documentation of other flows, you can check the documentation link at Summary section.'
}

export const PROTOTYPE = {
  title: 'Prototype',
  moodboard: 'Moodboard',
  moodboardImgUrl: '/images/salingtukar/moodboard.png',
  designSystem: 'Design System',
  designSystemImgUrl: [
    '/images/salingtukar/styleGuide.png',
    '/images/salingtukar/component.png'
  ],
  prototypeSubtitle: 'High Fidelity Prototype',
  prototypeDesc: 'Based on every steps before, I finally created the UI Design for SalingTukar, here I show you some of the designs i\'ve created. For the link to the prototype, you can click the button at summary',
  prototypeImgUrl: [
    '/images/salingtukar/Prototype-1.png',
    '/images/salingtukar/Prototype.png',
  ],
}

export const TESTING = {
  title: 'Testing',
  description: 'for this part, it hasn\'t been done yet. But I was planning to use Maze to gain insights for this step'
}