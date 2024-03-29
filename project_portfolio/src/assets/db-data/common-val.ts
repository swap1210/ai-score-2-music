import { CommDataModel } from 'src/service/model/comm.data.model';

export const COMMVAL: CommDataModel = {
  header: {
    appName: 'Taalmaster',
    appDesc: 'Tool to generate music powered by chatGPT',
    appIconLink: ' ',
  },
  home: {
    text: `Introducing an innovative AI-powered music generation app
  <b>Taalmaster</b>, that utilizes ChatGPT, a state-of-the-art language
  model, to create custom music tailored to your preferences.<br /><br />
  The two primary functions of this program are the music generator and 
  the music editor.The music generator dynamically creates a text prompt 
  using the user's input of music features. This cue will then be sent to 
  chatGPT, an element of our website, which creates a music score in response. 
  Also, we provide the user with the option of downloading a folder with the 
  generated music in MIDI format.  <br /><br />
  Music Editor is mostly used to edit songs. The user can submit any MIDI file, 
  including the ones they have obtained. The user is then given the option to 
  choose the instruments and alter the music score before it is played. The music is being edited with the flat.io tool.`,
  },

  mentor: {
    imgSrc:
      'https://www.uhcl.edu/science-engineering/faculty/images/boetticher-gary.jpg',
    heading: 'Gary D.Boetticher, Ph.D.',
    desc: 'Dr. Boetticher completed his Ph.D. in Computer Science at West Virginia University. The title of his dissertation topic is, "A Neural Network-Based Bottom-Up Approach for Building a Software Reuse Economic Model." <br><br>Professionally, Dr. Boetticher has over 23+ years corporate and industrial-based experience as an Information Systems consultant, Chief Architect, project manager, project lead, Database Analyst, Systems Analyst, software engineer/developer, and graphics artist. Previous engagements include, but are not limited to: The U.S. Olympic Committee, NASA, LDDS WorldCOM, Bailey Network Management, Dime Savings Bank of New York, Mellon Mortgage, Linden Capital, and ViaCom. As an Information Consultant for Boetticher, Dawson and Associates for eight years, he secured and facilitated the management of several consulting engagements averaging over $560,000.<br><br>Dr. Boetticher served on the executive committee for an IEEE Software Engineering Standards Committee (Reuse Interoperability Group) to establish industry reuse standards (executive board members included representatives from the Army Reuse Center, Boeing, NIST, NASA, DISA, Fidelity Investments, IBM, MCI, MITRE, Raytheon, SAIC, SPS, and ARPA).<br><br>He has served as co-chair, general chair, and vice-chair for various international conferences and workshops including PROMISE and IEEE IRI.<br><br>He also served in the capacity as a leader/presenter for 6 conferences/workshops, had 9 invited presentations in academic/industrial settings, wrote 2 books, 6 journal papers, 2 research chapters, 12 conference papers, and 9 workshop papers. In 2004 he received two "best paper" awards.<br><br>In 2011 Dr. Boetticher was awarded a US patent in Computational Bioinformatics (United States Patent 60/961,631). The title was Molecular Phenotyping of Severe Asthma.<br><br>He has produced 137 Educational YouTube videos (after revising, 122 visible), with 5,130 subscribers, and 1,634,689 views in 209 countries and territories.<br><br>Dr. Boetticher has been nominated for the prestigious Piper Award for outstanding teaching numerous times. He was a finalist for the award 9 times and in 2011 was the UHCL representative at the state level.',
  },
  teamMembers: [
    {
      imgSrc: './assets/Bhavitha_Web.png',
      title: 'Bhavitha Potlapally',
      bio: 'I am an extremely analytical,process-oriented,and responsible software engineer with a extensive knowledge of programming languages and problem-solving techniques. I am enthusiastic about leveraging my skills by solving and participating in various projects.',
      linkedin: 'https://www.linkedin.com/in/bhavitha-potlapally/',
      github: 'https://github.com/bhavitharao',
      email: 'bhavithapotlapally.13@gmail.com',
    },
    {
      imgSrc: './assets/Nidhi_Web.png',
      title: 'Nidhi Gol',
      bio: 'I bring expertise in both front-end and back-end technologies to deliver high quality web applications. I am a passoniate Full Stack Developer. With a focus on user experience and performance, I am dedicated to creating seamless digital experiences that engage and delight users. ',
      linkedin: 'https://www.linkedin.com/in/nidhi-gol-ba036564/',
      github: 'https://github.com/golnidhi',
      email: 'kinu.gol138@gmail.com',
    },
    {
      imgSrc: './assets/Ratna_Web.png',
      title: 'Ratna Teja Nerusu',
      bio: 'Driven Data Science graduate student with strong analytical skills in Python, R, and Machine Learning, seeks to solve complex problems with data.',
      linkedin: 'https://www.linkedin.com/in/ratna-teja-nerusu-013143177/',
      github: 'https://github.com/RatnaTejaN',
      email: 'ratnatejanerusu21@gmail.com',
    },
    {
      imgSrc: './assets/Swapnil_Webv2.png',
      title: 'Swapnil Patel',
      bio: 'As a passionate and detail-oriented individual, I take pride in producing clean, efficient, and maintainable code. Feel free to ping me if you have an awesome project idea and you need guidance executing it.',
      linkedin: 'https://www.linkedin.com/in/swap1210/',
      github: 'https://github.com/swap1210',
      email: 'p.swap1210@gmail.com',
    },
  ],
  footer: {
    section1: '',
    section2: '© Taalmaster 2023. All rights reserved.',
    section3:
      'Developed by Bhavitha Potlapally, Nidhi Gol, Ratna Teja Nerusu & Swapnil Patel',
  },
  milestones: [
    {
      position: 1,
      dueDate: '02/01/2023',
      deliverable: 'Brainstormed basic blueprint',
      status: 'Completed',
    },
    {
      position: 2,
      dueDate: '02/15/2023',
      deliverable: 'Music Theory',
      status: 'Completed',
    },
    {
      position: 3,
      dueDate: '02/22/2023',
      deliverable: 'Presentation of demo website',
      status: 'Completed',
    },
    {
      position: 4,
      dueDate: '03/01/2023',
      deliverable: 'Score player integrated ',
      status: 'Completed',
    },
    {
      position: 5,
      dueDate: '03/09/2023',
      deliverable: 'Project Portfolio',
      status: 'Completed',
    },
    {
      position: 6,
      dueDate: '03/22/2023',
      deliverable: 'Mid Presentation',
      status: 'Completed',
    },
    {
      position: 7,
      dueDate: '04/26/2023',
      deliverable: 'Final Presentation',
      status: 'Upcoming',
    },
  ],
};
