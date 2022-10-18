const email = {
    poppy: "swantonpoppycp@gmail.com",
    jms: "jmscaramo@calpoly.edu",
};

const libguide = {
    swanton: "https://guides.lib.calpoly.edu/swanton",
    calpoppy: "https://guides.lib.calpoly.edu/calpoppy",
    poppychatbot: "https://guides.lib.calpoly.edu/poppychatbot",
};

const contactIntro = [
    `Poppy the Swanton Chatbot is part of a larger faculty research program called the `,
    `Cal Poppy Research Project`,
    `, started in 2013, at California Polytechnic State University, San Luis Obispo. Contact the Poppy Project Team at ${email.poppy} or the Cal Poppy Research Project PI, Jeanine M. Scaramozzino at ${email.jms}.`
]

const contactPoppy = [
    `If you have questions, feedback, corrections, etc.  about Poppy please email ${ email.poppy } and a team member will get back to you.`
]

const creatorIntro = [
    `More than 50 Cal Poly undergraduate and graduate students, representing the College of Engineering (CENG), College of Agriculture, Food & Environmental Science (CAFES), College of Science & Mathematics (CSM), College of Architecture & Environmental Design (CAED), College of Liberal Arts (CLA), Orfalea College of Business (OCOB), and the Computer Science & Artificial Intelligence (CSAI) Club, have contributed to the creation of Poppy the Swanton Chatbot.`
]

const calPoppyResearch = {
    scaramozzino: "Jeanine M. Scaramozzino, Robert E. Kennedy Library, Cal Poly, Principal Investigator (PI) & Lead Cultivator",
    kurfess: "Dr. Franz J. Kurfess, Computer Science Department, Cal Poly, Co-PI & Cultivator",
    hayes: "Dr. Grey F. Hayes, Swanton Pacific Ranch, Cal Poly, Co-PI & Cultivator",
}

const aboutJMS = [
    `Jeanine Scaramozzino is a tenured Librarian (i.e. Professor), at California Polytechnic State University, San Luis Obispo. She currently serves as the Librarian for the College of Science and Mathematics & School of Education. She co-created a Science Café speaker series, created a Data Studio speaker series as well as a STEAM series with a local art museum. Her current research focuses on the sharing of history and research through Artificial Intelligence. Ms. Scaramozzino has served as the Cal Poly Academic and Scholarly Communications (ASC) Coordinator, Institutional Repository Librarian, and Data and GIS Services Librarian. She has previously worked as a Physics, Astronomy and Mathematics Librarian and an adjunct reference and instructional librarian, and at Stanford University. Ms. Scaramozzino has a Bachelors in Biology and graduate degrees in Biology, Information Sciences, and History.`,
    `If you have questions about the Cal Poppy Research Program, started in 2013, please contact the Principle Investigator, Jeanine Scaramozzino,  at ${ email.jms }, or refer to this libguide: `,
];

const aboutHayes = [
  "Since 1986, Dr. Grey Hayes has focused on agroecology and natural systems ecology and conservation along California’s central coast.  In addition to “spare time” work managing organic orchards and advising many groups about ecosystem management and conservation, Dr. Hayes is currently Education and Research Coordinator for Swanton Pacific Ranch.  Swanton Pacific Ranch is a field station on a working ranch focusing on delivering hands-on skills and education to students from California Polytechnic State University, San Luis Obispo.",
  "Image taken by Frans Lanting"
]

const aboutKurfess = [
  "Franz J. Kurfess joined the Computer Science Department of California Polytechnic State University in the summer of 2000, after a short stay with Concordia University in Montreal, Canada, and a longer stay with the New Jersey Institute of Technology. Before that, he spent some time with the University of Ulm, Germany, as a Postdoc at the International Computer Science Institute in Berkeley, CA, and at the Technical University in Munich, where he obtained his M.S. and Ph.D. in Computer Science.",
  `In addition to his faculty position at Cal Poly, he was the interim chair for the Computer Science and Software Engineering department in 2016-2017, and the chair of the Academic Senate Committee on Research, Scholarly and Creative Activities from 2007-2014. He is the coordinator of the Human-Computer Interaction lab, and teaches courses in the areas of Artificial Intelligence, Knowledge-Based Systems, User-Centered Design and Development, and Human-Computer Interaction. His main areas of research are Artificial Intelligence and Human-Computer Interaction, with particular interest in the usability and interaction aspects of knowledge-intensive systems. He is currently investigating a framework for the analysis of "interaction spaces", consisting of the physical space where interaction between humans and computational systems takes place, and a conceptual space delineated between the shared communication channels, symbol systems, vocabularies and languages, and the conceptual model of the domain and the world. So far, the main burden has been on humans to accommodate the limitations of computational systems concerning such interactions. Expanding interaction to situations where robots (or computational systems in general) have to communicate with other robots, it becomes much more critical to have a coherent framework for interaction in place that does not rely on human flexibility.`
]

const poppy21_22 = {
    advisor: {
        slivovsky: "Dr. Lynne Slivovsky, Computer Engineering Department (CPE)",
        kurfess: "Dr. Franz J. Kurfess, Computer Science Department (CSC)",
    },
    poppy: {
        barruel: `Evangeline “Eva” Mae Pangan Barruel, CPE Capstone & Senior Project`,
        chang: "Norman Chang, CPE Capstone & Senior Project",
        chekhanovsky: "Edik S. Chekhanovsky, CPE Capstone",
        mccoy: "Lolia O. McCoy, CPE Capstone & Senior Project",
        nguyen: "Dan Nguyen, CSC Senior Project",
        thurman: "Matthew Thurman, CSC Master’s Degree",
        wesolowski: "Melissa J. Wesolowski, CPE Capstone & Senior Project",
    }
}

export {
    email,
    libguide,
    contactIntro,
    contactPoppy,
    aboutJMS,
    aboutKurfess,
    aboutHayes,
    creatorIntro,
    calPoppyResearch,
    poppy21_22,
};