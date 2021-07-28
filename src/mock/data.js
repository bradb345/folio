import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'Bradley Bernard ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bradley Bernard',
  subtitle: 'Junior Web Developer',
  cta: '',
}

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Hi, I\'m Brad and I\'m a Software Engineer. Born and raised in the cool and calm of the Caribbean, now living in the hustle and bustle of London.',
  paragraphTwo: 'Having come from an Audio Engineering background, working on film and television sets, I\'m not your typical Software Engineer. While I absolutely love finding creative solutions to complex problems, I also value the people that I work with along the way. Collaboration is vital and presents endless opportunities to learn and grow.',
  paragraphThree: 'Specializing in full-stack web development, I have managed, developed, deployed, and maintained several projects using a wide range of technologies. From basic HTML frameworks and SASS/SCSS pre-processors, to complex JavaScript and NPM libraries, I pride myself on my ability to learn and utilize new technologies.',
  paragraphFour: 'Give me a problem and I will find a solution.',
  resume: '', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'regfeed',
    title: 'Project Expo',
    info: 'My group was tasked with creating a web app utilizing a Django backend and a React Frontend. The app would showcase projects made by GA students. With links to their projects and contact info. I implemented search functionality using the array filter method. This allowed users to search projects or users based on their input into the search field.',
    info2: '',
    url: 'https://project-expo.netlify.app/',
    repo: 'https://github.com/bradb345/Client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Reg',
    title: 'Peek',
    info: ' As a group, we decided to make a new social media platform similar to Facebook and Instagram. We created the backend of the app utilizing MongoDB, Express, and Mongoose. The frontend of the app utilized React for functionality and Bulma for CSS styling. I implemented status updates and post creation using axios for api requests to the custom build backend api.',
    info2: '',
    url: 'https://peek3.netlify.app/',
    repo: 'https://github.com/bradb345/project-3-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CharacterIndex',
    title: 'Superheros',
    info: 'We created a hero based search using React. On this site you could learn more about heroes and villains from many different universes. We utilized the superhero-api where we were able to make GET requests for the super hero data and filter through the response to display on the site.',
    info2: '',
    url: 'https://project2-sei55-heros.netlify.app/',
    repo: 'https://github.com/bradb345/sei-project2-heros', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1',
    title: 'The Grid',
    info: 'This was a grid based game written in JavaScript. It is similar to snake and tron. I utilized array methods, keyboard event listeners and setIntervals to achieve player movement. A goal was randomly set within the borders of the grid and whenever the position of the head of the snake equaled the position of the goal the player received a point and the setInterval decreased, thus speeding up the players movement.',
    info2: '',
    url: 'https://bradb345.github.io/project-1/',
    repo: 'https://github.com/bradb345/project-1', // if no repo, the button will not show up
  }
]

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
  }
]

// CONTACT DATA
export const contactData = {
  cta: 'Get in contact with me here:',
  btn: '',
  email: 'bradbernard17@gmail.com',
}

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bradbernard17/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bradb345',
    }
  ],
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
}
