export interface CommDataModel {
  header: Header;
  home: Home;
  footer: Footer;
  mentor: Mentor;
  teamMembers: TeamMember[];
  milestones: Milestone[];
}

export interface Home {
  text: String;
}

export interface Header {
  appIconLink: string;
  appDesc: string;
  appName: string;
}

export interface Footer {
  section1: string;
  section2: string;
  section3: string;
}
export interface Mentor {
  imgSrc: string;
  heading: string;
  desc: string;
}

export interface TeamMember {
  imgSrc: string;
  title: string;
  bio: string;
  linkedin: string;
  github: string;
  email: string;
}
export interface Milestone {
  position: number;
  dueDate: string;
  deliverable: string;
  status: string;
}
