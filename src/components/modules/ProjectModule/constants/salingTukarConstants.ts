import { title } from "process"

export const SUMMARY = {
  title: "What is SalingTukar?",
  summary: "Students often lean towards renting or borrowing items that are seldom used due to time constraints, accessibility hurdles, and economic considerations. Introducing SalingTukar, an innovative application tailored for students, aimed at expediting the process of renting or lending items for specific situations or occasional use. This project was one of the task from Binar Academy UI/UX Research and Design bootcamp (MSIB Program).",
  purpose: [
    'Provide college students with an affordable way to access a variety of items they need.',
    'Offer a broad selection of items for college students to rent.',
    'Enable college students to earn income by renting out their own items.'
  ],
  deliverables: [
    "Decks", "User Persona", "Journey Map", "Sitemap (IA)", "Flows", "Design System", "Prototype", "Redesign"
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
  description: 'Working on this project solo within a limited timeframe (the first iteration prototype only took a week to design) posed significant challenges.'
}

export const DT = {
  title: 'Desgin Process',
  imageUrl: '/images/salingtukar/dt.png',
  description: 'I employed the design thinking approach to gain a deep understanding of user needs and to develop creative solutions to address their challenges.'
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
  methodImageURL: '/images/salingtukar/interview.png',
  findings: 'Findings',
  findingsList: [
    {
      title: '#1 College Students need more economical options.',
      list: [
        'Behaviour: College Students prefer to borrow or rent items instead of buying them if they aren\'t used frequently.',
        'Issue: High-quality items often come with high prices.',
        'opportunity: Providing students the opportunity to rent various items at affordable prices according to their economic needs and preferences.'
      ],
    },
    {
      title: '#2 College Students need easy access.',
      list: [
        'Behaviour: College Students need to actively communicate with their surroundings to find out item availability.',
        'Issue: Hard to find places to borrow from without good connections or enough information.',
        'Opportunity: Provide a platform that makes it easier for students to find and borrow items, and gives lenders a chance to offer a variety of goods.'
      ],
    },
    {
      title: '#3 Students need additional sources of income.',
      list: [
        'Behaviour: The main motivation for students to rent out rarely used personal items is to earn extra income.',
        'Issue: Difficulty in finding borrowers and concerns about the quality and security of the rented items.',
        'Opportunity: Part-time job opportunities for students with guaranteed quality and security, both in terms of items and user interactions.'
      ],
    }
  ]
}

export const EMPATHIZE = {
  title: 'Empathize',
  affinity: 'Affinity Mapping',
  affinityDesc: 'After conducting interviews with IDI participants, I compiled all responses in FigJam, identified commonalities, and map them into groups to derive insights. The insights that i got was summarized on the PDF at the research plan section or findings at reaseach section.',
  affinityDocs: '/images/salingtukar/affinity.png',
  fourwhy: 'Four Whys',
  fourwhyDesc: 'I asked 4 question to find root cause of the background problem. These questions, namely \'who,\' \'what,\' \'where,\' and \'why,\' were designed to extract the user\'s intent statement. By understanding the user\'s intent, we could then proceed to identify appropriate solutions that address their needs effectively. The intent statements led to target users need a platform to connect them.',
  fourwImageUrl: '/images/salingtukar/fourw.png',
  persona: 'User Persona',
  personaDesc: 'After finding the intent statement, I created two user persona that means i have two target users or view (owner and renter). This approach allowed for a comprehensive understanding of both target user groups and their respective viewpoints.',
  personaImageUrl: '/images/salingtukar/persona.png',
  journey: 'User Journey Map',
  journeyDesc: 'Using the personas as a guide, I crafted two user journey maps to explore the experiences of both owners and renters. These maps provided insights into their behaviors, pain points, and potential opportunities, which are related to creating the platform to connect both personas and more detailed informations about the rent.',
  journeyImageUrl: '/images/salingtukar/userjourney.png'
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
  crazyImgUrls: [
    '/images/salingtukar/crazy8.png',
    '/images/salingtukar/crazy8_2.png',
  ],
  ia: 'Information Architecture',
  iaImgUrl: '/images/salingtukar/ia.png',
  iaDesc: 'From the crazy 8 i\'v created, I created the information architecture for the whole app. This helps me to create flows that might exist in SalingTukar',
  flow: 'Userflow and Wireflow',
  flowImgUrls: [
    '/images/salingtukar/flow1.png',
    '/images/salingtukar/flow3.png',
    '/images/salingtukar/flow4.png',
    '/images/salingtukar/flow5.png',
    '/images/salingtukar/wireflow.png',
    '/images/salingtukar/wireflowB.png',
    '/images/salingtukar/wireflowC.png'
  ],
  flowDesc: 'In the example below, here I shown few flows of tasks that users can do at SalingTukar, for full documentation of other flows, you can check the documentation link at Summary section. After creating the flow, I also created the wireframe to give visions on what the UI layout will look like. The wireflow provided here only for the "rent an item" flow.'
}

export const PROTOTYPE = {
  title: 'Prototype',
  moodboard: 'Moodboard',
  moodboardImgUrl: '/images/salingtukar/moodboard.png',
  moodboardDesc: 'Before creating the design system, i\'ve created SalingTukar\'s moodboard. First of all, I chose keywords that SalingTukar will bring; fun, friendly, trendy. After that I picked images online that describe the three words and search UI examples at dribble for references and inspirations. The typography here also described those three keywords in my opinion.',
  designSystem: 'Design System',
  designSystemList: [
    {
      desc: 'Based on the moodboard before, i finally created first the style guide which included color palette, illustrations styles, Typography, grid styles, shadows, and Icons. For the color palette, each color has different states for consistency, like hover, pressed, border, etc. I also defined semantic colors like danger, warning, success, and information.',
      imageUrl: '/images/salingtukar/styleGuide.png',
    }, {
      desc: 'I also created components needed in SalingTukar. The component styled according to the style guide, I also save it as components with variants in Figma.',
      imageUrl: '/images/salingtukar/component.png'
    }
  ],
  prototypeSubtitle: 'High Fidelity Prototype',
  prototypeDesc: 'Based on every steps before, I finally created the UI Design for SalingTukar, here I show you some of the designs i\'ve created. For the link to the prototype, you can click the button below. This protoytpe is the result of the first iteration of SalingTukar design process.',
  prototypeUrl: 'https://bit.ly/Prototype-ST-1',
  prototypeImgUrl: [
    '/images/salingtukar/onboarding.png',
    '/images/salingtukar/Search.png',
    '/images/salingtukar/Apply.png',
    '/images/salingtukar/Payment.png',
    '/images/salingtukar/Review.png',
    '/images/salingtukar/Issue.png',
  ],
}

export const TESTING = {
  title: 'Testing',
  preparation: 'Testing Preparation',
  preparationDesc: 'For the usability testing of the prototype, I employed Maze as the testing tool. The test plan is outlined below:',
  preparationList: [
    {
      title: 'Target Participant:',
      child: 'College students aged 19-25 year old'
    },
    {
      title: 'Participant Count:',
      child: 'min. 7 Participants (got 24 Participants)'
    },
    {
      title: '3 tasks to finish:',
      child: 'Rent an Item, Report Issue of a Rent, Review a Rent'
    }
  ],
  result: 'Testing Result',
  resultDesc: 'Below is the summary result that were gained from Maze. For full report you can click the button after the summary.',
  resultImgUrl: '/images/salingtukar/TaskCompletion.png',
  mazeUrl: 'https://ristek.link/SalingTukarTestReportV1',
  issue: 'Issue Report and Room for Improvements',
  issueDesc: 'Here are the issues and insights that were gathered from usability testing.',
  issuesRent: 'Task 1: Rent an Item',
  issuesRentList: [
    {
      imageUrl: '/images/salingtukar/PackagesCardIssue.png',
      desc: 'Room for improvement: Change the component from card to another components like horizontal scroll tags',
    },
    {
      imageUrl: '/images/salingtukar/PaymentMethodIssue.png',
      desc: 'Room for improvement: The payment method is also selected when applying for a rental. When ready to pay, users can edit the payment method again.',
    },
    {
      imageUrl: '/images/salingtukar/VoucherIssue.png',
      desc: 'Room for improvement: Delete the back button and add "reset voucher" button, or upon clicking the back button, create a modal which try to confirm user to discard changes',
    }
  ],
  issuesTracker: 'Task 2: Report an Issue',
  issuesTrackerList: [
    {
      imageUrl: '/images/salingtukar/CardIssue.png',
      desc: 'Room for improvement: Adding "Report Issue" and "See Detail" on the transaction cards at Home and Rents page',
    },
    {
      imageUrl: '/images/salingtukar/IssueTrackingIssue.png',
      desc: 'Room for improvement: Giving more clear and visible instructions at the top of the page. This could also reduce redudancy for instructions that previously on every prompt. Additionally, when new chat received, a scroll down floating button shows, guiding users to scroll down.'
    },
  ],
  issuesRating:
  {
    title: 'Task 3: Review a Rent',
    imageUrl: '/images/salingtukar/RatingIssue.png',
    desc: 'Room for improvement: Adding a title to the emoticon review and placing it lower down, removing the overall rating field because we can just deriving the overall rating from other fields (quality and owner), changing the scale to stars.'
  },
  redesign: 'Redesign Result',
  redesignDesc: 'Based on the issues and room for improvement before, below is the redesign results which also based on user\'s feedback from usability testing',
  redesignImgUrls: [
    '/images/salingtukar/BeforeAfter1.png',
    '/images/salingtukar/BeforeAfter2.png',
    '/images/salingtukar/BeforeAfter3.png',
    '/images/salingtukar/BeforeAfter4.png',
    '/images/salingtukar/BeforeAfter5.png',
    '/images/salingtukar/BeforeAfter6.png',
  ],
  newAdditionDesc: 'Aside from the redesign, I also added 2 features for SalingTukar, they are Profile Page and Chat, which you can see below.',
  newAdditionImgUrls: [
    '/images/salingtukar/Chat.png',
    '/images/salingtukar/Profile.png',
  ],
  conclude: 'The updated prototype is on the summary section, you can also see this video below on Youtube for the demo of SalingTukar.',

}

export const CONCLUSION = {
  title: 'Conclusion',
  desc: 'SalingTukar received numerous positive feedbacks from the target users. During usability testing, the platform also gathered many insights to enhance UI/UX and usability. Initial research showed that having SalingTukar as a solution to the previously mentioned problems also elicited positive responses from the participants.'
}

export const RECOMMENDATION = {
  title: 'Recommendation',
  desc: 'I\'ve noticed that there are still several shortcomings in designing this prototype. Any suggestions would be very helpful for creating a better version.'
}

export const END = {
  title: 'Final Words...',
  desc: [
    'Thank you so much for delving into this case study of SalingTukar! I gained numerous valuable lessons from designing SalingTukar. I also want to express my gratitude to everyone who involved me in this project, all the participants in the research and usability testing, my friends who provided suggestions and insights, and the designers who inspired and served as references for the SalingTukar design, including apps like Tokopedia, Shopee, Dribble, Gopay, and Carousell.',
    'Raniaarn signing off now! contact me below if you have suggestions or questions about SalingTukar 🙋‍♀️'
  ]
}