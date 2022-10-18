import { email, libguide } from "./contactTxt";

const suggestions = [
  "How big is Swanton Pacific Ranch?",
  "Where did Swanton get its name?",
  "What group of Indigenous Peoples lived in the Swanton area before Spanish colonization?",
  "What was the original name of the land grant that Swanton was part of?",
  "How many plants have been identified in the Swanton/Scott Creek Watershed?",
  "What is a fun fact about the Ranch?",
  "How do I plan a visit to Swanton?",
];

const suggestionsAnswers = [
  "Swanton Pacific Ranch is 3200 acres.",
  "The locality and town of Swanton were referred to by a number of names but the name Swanton was solidified in the late 1800s, after Fred Swanton. He was a businessman and mayor of Santa Cruz. He damed a local creek to created a hyroelectric plant to provide Santa Cruz with electriciy.",
  "Tribal distinctions are now recognized between the Amah Mutsun Tribal Band and the Ohlone/Costanoan Esselen Nation. When referring to the land base of Swanton it is more specifically the ancestral land of the Amah Mutsun.",
  "The original name of the land grant was Agua Puerca y las Trancas, translated as hog water and the bars, and was originally known as Rancho el Jarro. HIstorians have said that Agua Puerca likely refers to the stagnant water in the stream which comes out at Davenport Landing, the original southerly boundary of the rancho; and Las Trancas refers to placing poles for a gate or barrier in a narrow canyon just south of Waddell Creek.",
  "Approximately 15% or more of all of California's native and non-native plants live within the geomorphological boundaries of the watershed.",
  "Due to an English translation error during a legal proceeding regarding ownership the land grant's boundaries were described in a way that the northeasterly boundary would have included Modesto, California.",
 ]

const aboutSPR = [`Swanton Pacific Ranch (SPR) is a 3200-acre satellite property of California Polytechnic State University 
located in Santa Cruz County off Highway 1, ~60 miles south of San Francisco. The land is composed of a majestic redwood forest, 
lush riverine ecosystems, and expansive coastal grassland overlooking the bay and the Pacific Ocean. It was donated to Cal Poly 
by alumni Al Smith in 1993. Smith’s goal was for the land to be “maintained as a working ranch and used exclusively for 
agriculture, recreational, educational purposes.” Since its donation, the Ranch has been managed by Cal Poly’s College of 
Agriculture, Food and Environmental Sciences. Faculty, graduate students, and undergraduates actively pursue research 
opportunities, utilizing the forest, range, and watershed resources within the ranch.`,
`Due to the lack of signage off of Highway 1 and the inability of ranch staff to constantly be availiable to field questions, 
sharing the rich history and research opportunities of Swanton Pacific Ranch has always been a problem. Due to a fire destroying 
much of the ranch (including many landmarks and a lot of physical data) in late summer 2020, the necessity to preserve and spread 
knowledge of the ranch has become a priority. So, a plan was devised to provide access to this information through an interactive, 
remotely updated, creative outreach tool for researchers and the public, requiring no mediation...and Poppy the Chatbot was born!
`,
`To find more resources about SPR, check out this libguide:`,
];

const aboutCreators = [
  `Poppy was brought to you by Cal Poly students from many different majors, disciplines, backgrounds. 
  She is still a work in progress, so if you find any issues you would like to report, please contact:`, 
  "Poppy Software Team",
  email.poppy,
];

const aboutHayes = [
  "Since 1986, Dr. Grey Hayes has focused on agroecology and natural systems ecology and conservation along California’s central coast.  In addition to “spare time” work managing organic orchards and advising many groups about ecosystem management and conservation, Dr. Hayes is currently Education and Research Coordinator for Swanton Pacific Ranch.  Swanton Pacific Ranch is a field station on a working ranch focusing on delivering hands-on skills and education to students from California Polytechnic State University, San Luis Obispo.",
  "Image taken by Frans Lanting"
]

const aboutKurfess = [
  "Franz J. Kurfess joined the Computer Science Department of California Polytechnic State University in the summer of 2000, after a short stay with Concordia University in Montreal, Canada, and a longer stay with the New Jersey Institute of Technology. Before that, he spent some time with the University of Ulm, Germany, as a Postdoc at the International Computer Science Institute in Berkeley, CA, and at the Technical University in Munich, where he obtained his M.S. and Ph.D. in Computer Science.",
  `In addition to his faculty position at Cal Poly, he was the interim chair for the Computer Science and Software Engineering department in 2016-2017, and the chair of the Academic Senate Committee on Research, Scholarly and Creative Activities from 2007-2014. He is the coordinator of the Human-Computer Interaction lab, and teaches courses in the areas of Artificial Intelligence, Knowledge-Based Systems, User-Centered Design and Development, and Human-Computer Interaction. His main areas of research are Artificial Intelligence and Human-Computer Interaction, with particular interest in the usability and interaction aspects of knowledge-intensive systems. He is currently investigating a framework for the analysis of "interaction spaces", consisting of the physical space where interaction between humans and computational systems takes place, and a conceptual space delineated between the shared communication channels, symbol systems, vocabularies and languages, and the conceptual model of the domain and the world. So far, the main burden has been on humans to accommodate the limitations of computational systems concerning such interactions. Expanding interaction to situations where robots (or computational systems in general) have to communicate with other robots, it becomes much more critical to have a coherent framework for interaction in place that does not rely on human flexibility.`
]

const helpMessage = ["Poppy needs your help to ensure that she can stay up and running to educate future generations on SPR's rich history!", 
"Interested in donating? Contact:", "Jeanine Scaramozzino", email.poppy];

const disclaimer = `Reasonable effort has been made to accurately and fairly represent the content shared through the Poppy interface. If you have comments, concerns or clarification on the content please email ${ email.poppy }.`

export { suggestions, suggestionsAnswers, aboutSPR, aboutCreators, aboutHayes, aboutKurfess, helpMessage, disclaimer };
