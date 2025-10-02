import React from 'react';
import { Code, Laptop, Megaphone, Users, Palette, Globe, Github, Linkedin, BookOpen, BookText, PenTool } from 'lucide-react';

import ReshmaMam from '../assets/images/Reshma_rastoogi.jpeg';
import BhavanaGupta from '../assets/images/BhavanaGupta.png';
import BhumiPriya from '../assets/images/BhoomiPriya.jpeg';
import KundanSharma from '../assets/images/KundanSharma.jpg';
import ManvendraSinghBika from '../assets/images/ManvendraSinghBika.jpeg';
import MisbahUlIslam from '../assets/images/MisbahUlIslam.jpeg';
import MukulSharma from '../assets/images/MukulSharma.jpg';
import PrashantSingh from '../assets/images/PrashantSingh.jpg';
import RajeshChowdhury from '../assets/images/RajeshChowdhury.webp';
import SakshiWagh from '../assets/images/SakshiWagh.jpg';
import SaniaShanty from '../assets/images/SaniaShanty.jpg';
import SuyashSinghGusain from '../assets/images/SuyashSinghGusain.jpg';
import VaishaliJain from '../assets/images/VaishaliJain.jpg';
import SaumyaParashar from '../assets/images/SaumyaParashar.jpeg';
import YajatKrishnan from '../assets/images/YajataKrishnan.jpeg';
import AnmolNarayan from '../assets/images/AnmolNarayan.jpeg';


interface TeamMember {
  name: string;
  role: string;
  subRole: string;
  icon: React.ReactNode;
  image: string;
  team: 'coordinators' | 'tech' | 'pr' | 'socialMedia' | 'rnd' | 'teacher';
  socials: { icon: React.ReactNode; url: string }[];
}

const teamMembers: TeamMember[] = [
  // Teacher Coordinator
  {
    name: "Dr. Reshma Rastogi",
    role: "Faculty Coordinator",
    subRole: "Advising and mentoring the team",
    icon: <BookText className="w-6 h-6 text-black" />,
    image: ReshmaMam,
    team: "teacher",
    socials: [
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/dr-reshma-rastogi-nee-khemchandani-743716a/' }
    ]
  },
  
  // Coordinators
  {
    name: "Sakshi Wagh",
    role: "Chair",
    subRole: "R&D Lead",
    icon: <Code className="w-6 h-6 text-black" />,
    image: SakshiWagh,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/sakshiwagh31' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/sakshi-wagh-518932169' }
    ]
  },
  {
    name: "Mukul Sharma",
    role: "Vice Chair",
    subRole: "Tech Lead",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: MukulSharma,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/mukulsharma15' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/mukulsharma15' }
    ]
  },
  {
    name: "Bhoomi Priya",
    role: "Secretary",
    subRole: "Social Media Lead",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: BhumiPriya,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Bhoomi139' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://http://linkedin.com/in/bhoomi-priya-5397711b6' }
    ]
  },
  {
    name: "Manvendra Singh Bika",
    role: "Treasurer",
    subRole: "Management Lead",
    icon: <Users className="w-6 h-6 text-black" />,
    image: ManvendraSinghBika,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/manvendra' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/manvendra' }
    ]
  },
  {
    name: "Kundan Sharma",
    role: "Web Master",
    subRole: "",
    icon: <Palette className="w-6 h-6 text-black" />,
    image: KundanSharma,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/anonymous21-bit' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/kundan21sharma' }
    ]
  },
  
  // Tech & Management
  {
    name: "Mukul Sharma",
    role: "Tech Lead",
    subRole: "Vice Chair",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: MukulSharma,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/mukulsharma15' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/mukulsharma15' }
    ]
  },
  {
    name: "Kundan Sharma",
    role: "Web Master",
    subRole: "",
    icon: <Code className="w-6 h-6 text-black" />,
    image: KundanSharma,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/anonymous21-bit' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/kundan21sharma' }
    ]
  },
  {
    name: "Rajesh Chowdhury",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: RajeshChowdhury,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Rajeshchy082' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'http://www.linkedin.com/in/rajesh-chowdhury-50b6b220b' }
    ]
  },
  {
    name: "Anmol Narayan",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: AnmolNarayan,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/AN2100' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/anmol-narayan-770245216' }
    ]
  },

  // PR team
  {
    name: "Prashant Singh",
    role: "PR Lead",
    subRole: "",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: PrashantSingh,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/praShaanT11' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/prashant-singh-091019166' }
    ]
  },
  {
    name: "Bhavna Gupta",
    role: "PR Member",
    subRole: "",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: BhavanaGupta,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/BhavanaGupta1st' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/bhavanagupta1st/' }
    ]
  },

  // Social Media and Content
  {
    name: "Bhoomi Priya",
    role: "Social Media Lead",
    subRole: "Secretary",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: BhumiPriya,
    team: "socialMedia",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Bhoomi139' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://http://linkedin.com/in/bhoomi-priya-5397711b6' }
    ]
  },
  {
    name: "Misbah Ul Islam",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: MisbahUlIslam,
    team: "socialMedia",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/misbahGitPilot44?tab=repositories' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/vaishali-jain-b745a4310' }
    ]
  },
  {
    name: "Vaishali Jain",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: VaishaliJain,
    team: "socialMedia",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Vaishalijain20' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/vaishali' }
    ]
  },
  {
    name: "Suyash Singh Gusain",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: SuyashSinghGusain,
    team: "socialMedia",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/suyash-codes' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/suyashsinghgusain' }
    ]
  },
  {
    name: "Saumya Parashar",
    role: "Content Creator",
    subRole: "",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: SaumyaParashar,
    team: "socialMedia",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/saumyasau' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/saumya-parashar-785120324' }
    ]
  },

  // R&D Team
  {
    name: "Sakshi Wagh",
    role: "R&D Lead",
    subRole: "Chair",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: SakshiWagh,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/sakshiwagh31' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/sakshi-wagh-518932169' }
    ]
  },
  {
    name: "Sania Shanty",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: SaniaShanty,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Sania-Shanty' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/sania-shanty-83179b355' }
    ]
  },
  {
    name: "Yajat Krishnan",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: YajatKrishnan,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/Yajat2106?tab=repositories' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/yajatkrishnan/' }
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
    title: "Social Media & Content",
    key: "socialMedia" as const,
    description: "Creating engaging content and managing our online presence"
  },
  {
    title: "Research & Development",
    key: "rnd" as const,
    description: "Driving innovation and technical excellence"
  },
  {
    title: "Tech & Management",
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
