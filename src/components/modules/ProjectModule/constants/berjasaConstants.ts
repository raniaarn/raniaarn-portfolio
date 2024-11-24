import { title } from "process"

export const SUMMARY = {
  title: "What is Berjasa?",
  summary: "Berjasa is a platform that provides an open space for users to offer and request various types of services. The platform is designed to improve the economic well-being of the community, especially for manual laborers. This initiative aims to enhance public service in the employment sector and contribute to the achievement of the Sustainable Development Goals (SDGs), especially SDG 1, 8, 10, and 11.",
  deliverables: [
    "Role", "Video", "Empathize", "Define", "Ideate", "Test", "Prototype"
  ],
}

export const GENERAL = [
  {
    title: "Purposes of The Research",
    id: "Purpose",
    content: [
      "Identified the conditions of manual workers and the challenges they face in providing services.",
      "Analyzed the community's needs for manual labor services.",
      "Developed a digital platform as a potential solution to address the issues faced by service providers and seekers.",
      "Created a platform accessible to various community groups, aiming to enhance inclusivity and equality in job access."
    ]
  },
  {
    title: "My Role",
    id: "Role",
    content: [
      "I individually designed the logo and mascot with several expression.",
      "As a team, we collaboratively handled the entire design process, from research, designing solutions and the design system, testing, and redesigning prototypes based on two iterations."
    ]
  },
  {
    title: "Video",
    id: "Video",
    url: "https://www.youtube.com/embed/4UNjsyPwVpk?si=30xWPexD3ys1EFi9"
  },
]

export const PROCESS =
  [
    {
      title: "Design Process",
      id: "Process",
      contents: [
        {
          title: "",
          Descriptions: [
            "With a primary focus on users, we employed the Design Thinking method in the design process to deeply identify and understand the problems faced by users, enabling us to craft suitable and optimal solutions. Additionally, due to its non-linear and iterative nature, Design Thinking allowed us to make iterations based on user feedback, ensuring the solutions became increasingly precise and relevant to their needs. We successfully completed two iterations of the design process."
          ],
          imgs: [
            "/images/berjasa/design_thinking.png"
          ],
          urls: [],
          lists: []

        },
      ]
    },

    {
      title: "Empathize",
      id: "Empathize",
      contents: [
        {
          title: "Primary and Secondary Research",
          Descriptions: [
            "To gather extensive data and insights from the field, an online survey was distributed to the target users, namely service providers (manual workers) and service seekers (customers) with total of 102 participants.",
            "To gain a deeper understanding of the problems faced by target users, interviews were conducted with a sample of 7 respondents who had previously participated in the online survey. Using a semi-structured interview format and open-ended questions, the researchers also explored additional challenges personally experienced by the users."
          ],
          imgs: [
            "/images/berjasa/research.png"
          ],
          urls: [],
          lists: []

        },

        {
          title: "Empathy Mapping",
          Descriptions: [
            "Based on previously gathered research data on target users, a mapping of what users say, think, do, and feel was conducted into an empathy map representing the targets, namely service providers (manual workers) and service seekers (customers).",
            "All these insights will be taken into account throughout the research and design process. Emphasis was also placed on the pains and gains, as they were directly drawn from users' statements, thoughts, actions, and feelings."
          ],
          imgs: [
            "/images/berjasa/empathmap.png"
          ],
          urls: [],
          lists: []
        },
      ]
    },

    {
      title: "Define",
      id: "Define",
      contents: [
        {
          title: "User Persona",
          Descriptions: [
            "The user persona was constructed based on empathy mapping, especially from the pain and gains. By having a clear understanding of the users through user personas, the researchers can design solutions that are more relevant and effective, aligned with their needs and preferences.",
          ],
          imgs: [
            "/images/berjasa/persona.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "User Journey Map",
          Descriptions: [
            "To understand each step taken by users and how they relate to the research or product being designed, a user journey map was created as a visualization of the path taken by the user persona to achieve their goal."
          ],
          imgs: [
            "/images/berjasa/journey.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Problem Mapping",
          Descriptions: [
            "After understanding the users' needs and concerns, and mapping them into visualizations of user personas and user journey maps, the researchers successfully identified several problem statements with opportunities to be prevented or addressed. These issues were mapped from both personas: service providers (manual workers) and service seekers (customers).",
            "This is the result of the define process. These problems will be our focus for the remainder of the process. Our designs will aim to address and solve these issues."
          ],
          imgs: [
            "/images/berjasa/problemmap.png"
          ],
          lists: [
            "Difficulty in acquiring customers, and similarly, customers find it hard to find workers.",
            "Competition and lack of connections.",
            "Difficulty in determining a fair price for both parties.",
            "Lack of appreciation from customers.",
            "Tracking service workers requires significant time and resources.",
            "Work contracts are not well - defined.",
            "Lack of clarity in service warranty claims when services do not meet expectations."
          ],
          urls: []
        },
      ]
    },

    {
      title: "Ideate",
      id: "Ideate",
      contents: [
        {
          title: "How Might We",
          Descriptions: [
            "After mapping the problems, the researchers conducted a brainstorming session by creating \"how might we\" (HMW) questions. These HMW questions help the researchers stay focused on the core issues while encouraging innovative ideas by posing questions that open up a range of potential solutions (Rosala, 2021). The identification process was carried out using the Situation-Complication-Question (SCQ) framework, which outlines the situation and complication to build the right questions for the researchers to answer (Macquarie Consulting Club, 2018). We then applied the same process to all other problem mappings, resulting in \"how might we\" questions you could see in the next process, the affinity mapping."
          ],
          imgs: [
            "/images/berjasa/hmw.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Affinity Mapping",
          Descriptions: [
            "After obtaining all the \"how might we\" questions, the researchers grouped ideas or information with related themes or similarities into categories, leading to the identification of several features to be developed. We also brainstormed potential solutions and how each of the categorized features will be fulfilled."
          ],
          imgs: [
            "/images/berjasa/affinity.png",
          ],
          urls: [],
          lists: []
        },

        {
          title: "Kano Model",
          Descriptions: [
            "From the numerous features obtained, the researchers mapped and prioritized them to develop the best features for the first iteration. The methodology used to determine the priorities is the Kano Model, a framework used to identify and categorize which features most enhance user satisfaction (Sauerwein, Bailom, Matzler, & Hinterhuber, 1996). The Kano Model was chosen to understand which features are expected by the target users in the Berjasa application.",
            "The Kano Model was applied by sending a questionnaire to 32 target users, combining their responses about the presence or absence of features based on the Kano categorization table. The answers were evaluated and prioritized using the order: M > O > A > I > Q, where \"M\" indicates an undesirable feature and \"Q\" represents misunderstandings or errors (Sauerwein et al., 1996). Features were graded based on the most common responses, and the categorization results for Berjasa can be seen in above. All features were classified as neutral, attractive, or necessary, with the researchers prioritizing features with grades A and O for the first iteration."
          ],
          imgs: [
            "/images/berjasa/kano.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Information Architecture",
          Descriptions: [
            "Information Architecture (IA) involves organizing content and navigation systems to ensure a smooth user experience (Dillon & Turnbull, 2005). After understanding user needs and application goals, IA can be designed, often in the form of a sitemap (Interaction Design Foundation, 2016). The sitemaps for both applications, Berjasa for Mitra (for service providers) and Berjasa (for service seekers), can be seen below."
          ],
          imgs: [
            "/images/berjasa/IA.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Userflows",
          Descriptions: [
            "User flows are diagrams designed to illustrate the path users take to complete a task within an application (Interaction Design Foundation, 2016). The goal of user flows is to design the ideal experience flow, making subsequent stages easier and focused on enhancing the user experience. An example of a user flow for one of the most important tasks, related to service booking from both the service seeker and service provider perspectives, can be seen below."
          ],
          imgs: [
            "/images/berjasa/userflow.png"
          ],
          urls: [],
          lists: []

        },

        {
          title: "Wireframe & Concept Testing",
          Descriptions: [
            "After creating wireframes, we conducted concept testing to ensure the layout and flow of the app met user needs. We explained the general flow and layout of key pages, such as the homepage, to three target users from each role in Berjasa. Their feedback was used to refine the design before moving on to the high-fidelity stage. Based on the testing, minor changes were made, particularly in the order acceptance flow, extending the service provider's order acceptance time from 1 minute to 6 hours. Additionally, users can choose to pay in full upfront or with a deposit. We also gained insights on app copywriting and additional requirements for service providers to enhance user experience and service quality."
          ],
          imgs: [
            "/images/berjasa/concept_testing.png"
          ],
          urls: [],
          lists: []
        },
      ]
    },

    {
      title: "Prototype",
      id: "Prototype-1",
      contents: [
        {
          title: "Design System",
          imgs: [
            "/images/berjasa/design_system.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "High Fidelity Prototype",
          Descriptions: [
            "Based on the design system, we created the first iteration of the high-fidelity prototype, which is useful for testing and evaluating ideas with users (Preece & Rogers, 2019). In designing the prototype, the researchers followed Shneiderman’s Eight Golden Rules of Interface Design (Shneiderman et al., 2017) to ensure the interface was not only functional but also intuitive and easy to use. In line with the information architecture, the prototype was divided into two applications: Berjasa for service seekers and Berjasa for Mitra for service providers.",
            "The Berjasa app is designed for service seekers to connect with providers and book services that meet their needs. Meanwhile, the Berjasa for Mitra app is intended for service providers to connect with seekers and accept job offers that fit their schedules."
          ],
          urls: [],
          lists: []
        },
      ]
    },

    {
      title: "Test",
      id: "Test",
      contents: [
        {
          title: "Usability Testing",
          Descriptions: [
            "Usability testing was conducted by observing one user at a time and assigning them a series of tasks. The goal was to detect any frustration or confusion, which could be addressed to improve usability (Krug, 2014). During the testing, we used Maze to measure user effectiveness in completing tasks, detect confusing areas or those causing frustration through heatmaps, and analyze user behavior to make more targeted design changes. From the usability testing results, the researchers identified several areas of comfort and confusion experienced by users. One issue that was identified was the visibility of the Mitra Care button, which was not prominent enough, leading many users to make incorrect clicks."
          ],
          imgs: [
            "/images/berjasa/heatmap.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "System Usability Scale",
          Descriptions: [
            "The System Usability Scale (SUS) is one of the most commonly used methods to evaluate the usability aspects of a developed product. The SUS method involves presenting 10 questions to users, covering usability (8 questions) and ease of learning (2 questions). Each question is answered on a scale from 1 (strongly disagree) to 5 (strongly agree). For positive statement questions, the scale value is reduced by 1, while for even-numbered questions, the scale value is subtracted from 5. Then, all values are summed and multiplied by 2.5. The 10 SUS questions used are based on the Indonesian version adopted by Sharfina & Santoso (2016). Below are the SUS results for the first iteration of Berjasa."
          ],
          imgs: [
            "/images/berjasa/sus.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Shneiderman's Eight Golden Rules of Interface Design",
          Descriptions: [
            "We also conducted an evaluation based on Ben Shneiderman's Eight Golden Rules, which focus on improving user productivity (Shneiderman, 1987). By applying these principles, the design aims to be user-friendly and avoid causing frustration by providing simplicity."
          ],
          imgs: [
            "/images/berjasa/golden.png"
          ],
          urls: [],
          lists: []
        },
      ]
    },

    {
      title: "Iteration 2",
      id: "iteration-2",
      contents: [
        {
          title: "Room for Improvement",
          Descriptions: [
            "After conducting various tests in the previous iteration, we successfully identified several issues and areas for improvement, which are outlined below."
          ],
          imgs: [
            "/images/berjasa/roomforimprovement.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Prototype",
          Descriptions: [
            "After conducting various tests in the previous iteration, we successfully identified several issues and areas for improvement, which are outlined below."
          ],
          urls: [
            "https://embed.figma.com/proto/AfOgDTw5J0uKWDCrcR5Ydy/Designs-(Iteration-2)?page-id=2001%3A3331&node-id=2141-29598&node-type=canvas&viewport=-1492%2C-2987%2C0.27&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2001%3A13947&embed-host=share",
            "https://embed.figma.com/proto/AfOgDTw5J0uKWDCrcR5Ydy/Designs-(Iteration-2)?page-id=2001%3A3332&node-id=2179-9911&node-type=canvas&viewport=29%2C283%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2179%3A9926&embed-host=share"
          ],
          lists: []
        },

        {
          title: "Test",
          Descriptions: [
            "We conducted usability testing in the same way as the first iteration, with the same participants. As a result, our SUS score increased."
          ],
          imgs: [
            "/images/berjasa/ut.png",
            "/images/berjasa/sus_2.png"
          ],
          urls: [],
          lists: []
        },

        {
          title: "Heuristic Evaluation",
          Descriptions: [
            "To evaluate the designed solution, we also conducted a heuristic evaluation involving two evaluators with different levels of experience. Heuristic evaluation is a usability assessment method for application interface design, involving experts and based on established heuristics (Interaction Design Foundation, 2016). The two evaluators we selected are experienced professionals and experts in user experience design."
          ],
          urls: [],
          lists: []
        },
      ]
    },

    {
      title: "Final Words",
      id: "Final",
      contents: [
        {
          title: "",
          Descriptions: [
            "Berjasa received positive feedback from our lecturer, friends, and potential users. However, we recognize that there are still challenges and shortcomings in the application, such as gaps in the business model and user security issues that need further exploration. We are deeply grateful to everyone who contributed to the development of the Berjasa app design, including our mentor and the participants who supported our research. Without their help, this application design would not have been possible.",
            "Raniaarn signing off now! contact me below if you have suggestions or questions about Berjasa"
          ],
          urls: [],
          imgs: [],
          lists: []
        },
      ]
    },
  ]
