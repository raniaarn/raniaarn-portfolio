export const SUMMARY = {
  title: "What is Guidu?",
  summary: "GUIDU is a mobile application design which is a mini project that I created on the online course Sanbercode UI/UX Design Class Batch 31, January 2022. GUIDU is an educational-themed application that aims to help students, especially high school students who are preparing for their college entrance exams. This application contains consulting services, discussion forums, and task lists to organize student schedules.",
  deliverables: [
    "User Persona", "Journey Map", "Sitemap", "Wireframe", "Prototype"
  ],
  Prototype: 'http://bit.ly/Guidu_'
}

export const PROBLEM = {
  title: "Problem Statement",
  paragraphs: [
    'About 87 percent of students in Indonesia experience choosing ‘the wrong major’ for college according to research from the Indonesia Career Center Network (ICCN). There are several factors that cause this to happen, one of them is because they are not sure what they want. Consulting the right people can help them. The problem also caused by digitalization and online schools, some of them find it difficult to communicate with guidance counselors at their schools. Therefore, Guidu offers consulting services and students can also choose the consultant they want so that they can express their learning complaints freely. Discussion forums can also be a safe place for them to find solutions and even friends who can help them on their learning journey.',
    'Another problem of the students is managing their time, with a flexible schedule, changes very often, they become lazy to record their activities. Sometimes, their schedules get messy and collide. By presenting a simple to-do-list that is easy to update every day, it will help them organize their schedules.'
  ],
  imageUrl: '/images/guidu/illustration.png'
}

export const TARGET = {
  title: "Users & Audiences",
  description: "Based on the problem statement, there are 2 sides of users in Guidu, which are :",
  list: [
    'Highschool or gap-year students. The main targeted user in GUIDU',
    'Consultant. Those who provide consulting services to the main user, can be experienced students or high school Guidance Counselor'
  ]
}

export const ROLE = {
  title: "My Role",
  description: "My roles in this project are as the idea maker and the designer. Description of what I did:",
  list: [
    'Define application concepts and ideas',
    'Define color palette, style guide, and overall GUIDU\'s design',
    'Define userflows',
    'Create sitemaps, wireframes, and mockups'
  ]
}

export const SCOPE = {
  title: 'Scope & Constraints',
  description: 'I only designed the application for the main targeted user in GUIDU, which was high school or gap-year students due to the short amount of time and people to work with.',
  scope: 'User Scope',
  scopeList: [
    'Choose a consultant and consult via chat or call',
    'Add an activity to the to-do list menu or edit activity',
    'Ask in the discussion forum or reply to the forum',
    'Collect points by doing activities in the app to level up and get gifts'
  ],
  constraints: 'Constraints',
  constraintsDesc: 'This project is only a small project that was carried out for less than a month and only by me, so there are still many shortcomings. Starting from the lack of time and resources. For that, I have reduced many features and this application is not very detailed.'
}

export const PROCESS = {
  title: 'Design Process',
  sections: [
    {
      title: 'Research & Analyze',
      description: [
        'I did research with qualitative methods, such as online research, saw the habits of high school students on social media, and also conducted 1:1 interviews with 2 high school students. From there, I get pain points and what product the target user wants.',
      ],
      urlImage: []
    },
    {
      title: 'Affinity Mapping',
      description: [
        'After getting data from the research, I made an affinity map to make it easier for me to see the problem and find solutions. The contents of this map are in the form of problems faced by the targeted user along with the solutions that the user wants. Lastly, I concluded the solutions, or what I called insights from affinity mapping. By this time I work with 2 other people who had also taken the course, but we decided to separate our ways after this.',
      ],
      urlImage: [
        '/images/guidu/affinitymapping.png'
      ]
    },
    {
      title: 'User Persona',
      description: [
        'I created a user persona based on the steps before to help me understand the targeted users better. This user persona included background story, frustrations, goals and needs, habits, tech preferences, characteristics, and motivations. This persona represent the user that Guidu was aiming for.',
      ],
      urlImage: [
        '/images/guidu/persona.png'
      ]
    },
    {
      title: 'Journey Map',
      description: [
        'I created a user persona based on the steps before to help me understand the targeted users better. This user persona included background story, frustrations, goals and needs, habits, tech preferences, characteristics, and motivations. This persona represent the user that Guidu was aiming for.',
      ],
      urlImage: [
        '/images/guidu/journeymap.png'
      ]
    },
    {
      title: 'Sitemap',
      description: [
        'This sitemap is also the user flow in Guidu for the main targeted user. Based on the constraints I stated earlier, I only create 3 main features for Guidu. The first feature was consulting students, which went from choosing consultants to contacting them within the application. There was also to-do list which contains adding activities and editing them. Last, there was discussion forum that contains ask and reply.',
      ],
      urlImage: [
        '/images/guidu/sitemap.png'
      ]
    },
    {
      title: 'Inspiration',
      description: [
        'And of course, I was a beginner so I search for inspiration online and ask the two high school students from the research process about their favorite education app and they mentioned these apps below. I used these apps as inspo for my next steps in the design process. I only dig inspo for the design because Guidu had different goals and features.',
      ],
      urlImage: [
        '/images/guidu/reference.png'
      ]
    },    
    {
      title: 'Wireframe',
      description: [
        'I created a low fidelity wireframe with no colors and simple elements. i created several pages from the on boarding page, log in and register page, to the main page and features. At this time, i actually want to try to make another feature, but due to the constraints previously mentioned, some features such as study and quizzes with all the important subjects for highschool students were removed and more pages were added after entering the high fidelity prototype.',
      ],
      urlImage: [
        '/images/guidu/wireframe.png'
      ]
    },
    {
      title: 'GUIDU Style Guide',
      description: [
        'I created a “Fun” color palette to make learning more fun, this was also the result of the research process in the beginning. The targeted users are more happier and motivated to study with fun designed applications. They like designs that can make them excited about learning but not too serious, to reduce their stress.',
        'I also used a fun font for the heading and create several lines of hirearchy for flexibility reasons. I use a gradient linear color for the UI components to make them more stylish and to create an identity for Guidu. As for the pictures in the app, I put an overlay gradient with the color palette, which is blue and yellow (the main color of Guidu).'
      ],
      urlImage: [
        '/images/guidu/designsystem.png'
      ]
    },
    {
      title: 'Prototype',
      description: [
        'As i previously mentioned, i removed some of the features and added a few more pages. I added colors and changed the components according to  Guidu\'s style guide. To make it more modern, I use bright fun colors and a rounded corners for the components.',
        'After creating the hi-fidelity prototype, I make it interactive and change some designs or add features. After the design is fixed, I enter mockup phase. I added notifications pop up so user know when something happened. For the prototype, you can click the button at summary.'
      ],
      urlImage: [
        '/images/guidu/prototype.png'
      ]
    },
    {
      title: 'Result',
      description: [
        'Guidu’s design process has completed. This project was the main project for the online course, Sanbercode UI/UX Design Class Batch 31. I work alone on this project only for about two weeks hence Guidu was not detailed. I achieved Guidu’s initial goal, a guide for students. There was a safe place for students to consult and the to-do list was easy to update, so it didn\'t take long as students\' schedules change frequently.',
        'This project was the first project for me to make a mobile app design, it was a bit challenging and I learned a lot of lessons along the way. I also became aware of the problems faced by students and what solutions might be suitable for these problems.'
      ],
      urlImage: [
        '/images/guidu/result-1.png',
        '/images/guidu/result-2.png'
      ]
    },
  ]
}