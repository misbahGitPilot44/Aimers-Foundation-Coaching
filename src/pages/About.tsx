import React from 'react';
import { Code, Laptop, Megaphone, Users, Palette, Globe, Github, Linkedin, BookOpen, BookText, PenTool } from 'lucide-react';

import amyy from '../assets/images/amyy.jpeg';
import MisbahUlIslam from '../assets/images/MisbahUlIslam.jpeg';
import MukundPrasad from '../assets/images/MukundPrasad.jpeg';
import VipulGarg from '../assets/images/VipulGarg.webp';
import KeshavBansal from '../assets/images/KeshavBansal.jpeg';
import RajeshRanjan from '../assets/images/RajeshRanjan.jpeg';
import AnanyaAdivi from '../assets/images/AnanyaAdivi.jpeg';
import Basu from '../assets/images/Basu.jpeg';
import kush from '../assets/images/kush.jpeg';
import mad from '../assets/images/mad.jpeg';
import hrishi from '../assets/images/hrishi.jpeg';
import ansh from '../assets/images/ansh.jpeg';
import rishit from '../assets/images/rishit.jpg';
import vaib from '../assets/images/vaib.png';
import swarno from '../assets/images/swarno.jpeg';
import kartik from '../assets/images/kartik.jpeg';
import mugh from '../assets/images/mugh.jpeg';

















interface TeamMember {
  name: string;
  role: string;
  subRole: string;
  icon: React.ReactNode;
  image: string;
  team: 'coordinators' | 'tech' | 'pr' | 'design&vfx' | 'rnd' | 'teacher';
  socials: { icon: React.ReactNode; url: string }[];
}

const teamMembers: TeamMember[] = [
  // Teacher Coordinator
  {
    name: "Dr. Rajesh Ranjan",
    role: "Faculty Coordinator",
    subRole: "Advising and mentoring the team",
    icon: <BookText className="w-6 h-6 text-black" />,
    image: RajeshRanjan,
    team: "teacher",
    socials: [
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/dr-rajesh-ranjan-597b54346/' }
    ]
  },
  
  // Coordinators
  {
    name: "Misbah Ul Islam",
    role: "Chair",
    subRole: "Head",
    icon: <Code className="w-6 h-6 text-black" />,
    image: MisbahUlIslam,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/misbahGitPilot44' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/misbah-ul-islam-0501b2323/' }
    ]
  },
  {
    name: "Mukund Prasad",
    role: "Vice Chair",
    subRole: "Head",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: MukundPrasad,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/mukundxplore' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/mukund-prasad/' }
    ]
  },
  {
    name: "Amritha S Nair",
    role: "Secretary",
    subRole: "Design & VFX Lead",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: amyy,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/assmrn' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/amritha-s-nair-b331aa376' }
    ]
  },
  {
    name: "Vipul Garg",
    role: "Treasurer",
    subRole: "Tech Lead",
    icon: <Users className="w-6 h-6 text-black" />,
    image: VipulGarg,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/vasug723-bot' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/vipul-garg-4b1233391' }
    ]
  },
  {
    name: "Keshav Bansal",
    role: "Web Master",
    subRole: "Logistics Lead",
    icon: <Palette className="w-6 h-6 text-black" />,
    image: KeshavBansal,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/keshavv1729' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/keshav-byte' }
    ]
  },
  
  // Tech & Management
  {
    name: "Keshav Bansal",
    role: "Tech Lead",
    subRole: "Web Master",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: KeshavBansal,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/keshavv1729' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/keshav-byte' }
    ]
  },
  {
    name: "Kartik Johari",
    role: "Tech Member",
    subRole: "",
    icon: <Code className="w-6 h-6 text-black" />,
    image: kartik,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: '' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: '' }
    ]
  },
  {
    name: "Mughda Jatin Sarmah",
    role: "Tech Member",
    subRole: "",
    icon: <Code className="w-6 h-6 text-black" />,
    image: mugh,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: '' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/mjsarmah/' }
    ]
  },
  
  {
    name: "Vaibhav Vikash Keshari",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: vaib,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/vaibhavkeshari2025' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/vaibhav-vikash-keshari-46b58941b/' }
    ]
  },
  {
    name: "Vipul Garg",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: VipulGarg,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/vasug723-bot' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/vipul-garg-4b1233391' }
    ]
  },
   {
    name: "Rishit Gupta",
    role: "Tech Member",
    subRole: "",
    icon: <Code className="w-6 h-6 text-black" />,
    image: rishit,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: '' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: '' }
    ]
  },

  // PR team
  {
    name: "Anoushka Basu",
    role: "PR Lead",
    subRole: "Membership Chair",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: Basu,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/anoushka-basu' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/anoushkabasu/' }
    ]
  },
  {
    name: "Adivi Ananya",
    role: "PR Member",
    subRole: "",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: AnanyaAdivi,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/AnanyaAdivi' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'http://www.linkedin.com/in/ananya-adivi-9b6056345' }
    ]
  },

  // Social Media and Content
  {
    name: "Amritha S Nair",
    role: "Design & VFX Lead",
    subRole: "Secretary",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: amyy,
    team: "design&vfx",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/assmrn' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/amritha-s-nair-b331aa376' }
    ]
  },
  {
    name: "Kushagra Upadhyay",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: kush,
    team: "design&vfx",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/ItoshiiNaKushagra' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/kushagra-upadhyay-94065738a/' }
    ]
  },
  {
    name: "Swarnojjwal Guha",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: swarno,
    team: "design&vfx",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/swarnojjwal' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/swarnojjwal-guha-12b902352/' }
    ]
  },

  // R&D Team
  {
    name: "Adivi Ananya",
    role: "R&D Lead",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: AnanyaAdivi,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/misbahGitPilot44' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/misbah-ul-islam-0501b2323' }
    ]
  },
  {
    name: "Madhur Krishna Saurabh",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: mad,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'github.com/madhurdotexe' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: '' }
    ]
  },
  {
    name: "Ansh.",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: ansh,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: '' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: '' }
    ]
  },
  {
    name: "Hrishi Kumar Agarwal",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: hrishi,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/hrishiagarwal1-png' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/hrishi-kumar-agarwal-359154373/' }
    ]
  }
  
];

const teamSections = [
  {
    title: "Teacher Coordinator",
    key: "teacher" as const,
    description: "Advising and mentoring the team"
  },
  {
    title: "Coordinators",
    key: "coordinators" as const,
    description: "Leading and guiding the chapter's vision and initiatives"
  },
  {
    title: "PR Team",
    key: "pr" as const,
    description: "Managing our community presence and outreach"
  },
  {
    title: "Design & VFX",
    key: "design&vfx" as const,
    description: "Creating engaging content and managing our online presence"
  },
  {
    title: "Research & Development",
    key: "rnd" as const,
    description: "Driving innovation and technical excellence"
  },
  {
    title: "Tech & Logistics",
    key: "tech" as const,
    description: "Building and maintaining our technical infrastructure"
  }
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          The South Asian University ACM Student Chapter is a dynamic community dedicated to advancing
          computing innovation across South Asia. Join us to explore cutting-edge technology,
          collaborate with passionate peers, and shape the future of computing in a space built for
          creativity and discovery.
        </p>
      </div>
      
      <div className="space-y-20">
        {/* Our Team Heading */}
        <div className="text-center mb-8">
          <h2 className="section-title">Our Team</h2>
        </div>
        {teamSections.map((section) => (
          <div key={section.key}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--accent)] mb-2">
                {section.title}
              </h2>
              <p className="text-lg text-[var(--text)]">{section.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers
                .filter(member => member.team === section.key)
                .map((member, index) => (
                  <div
                    key={index}
                    className="card w-72 p-6 flex flex-col items-center text-center bg-[var(--secondary)] shadow-lg rounded-xl"
                  >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-10 min-h-10 w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center mb-2">
                      {member.icon}
                    </div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-[var(--accent)]">{member.role}</p>
                    {member.subRole && (
                      <p className="text-sm text-[var(--text)]">{member.subRole}</p>
                    )}
                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
