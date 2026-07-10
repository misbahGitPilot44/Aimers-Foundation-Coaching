import React from 'react';
import { Code, Laptop, Megaphone, Users, Palette, Globe, Github, Linkedin, BookOpen, BookText, PenTool } from 'lucide-react';

import sherinzafar from '../assets/images/sherinzafar.jpeg';
import MisbahUlIslam from '../assets/images/MisbahUlIslam.jpeg';
import noorulislam from '../assets/images/noorulislam.jpeg';


















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
    name: "Noorul Islam",
    role: "Teacher",
    subRole: "Aimers Foundation Coaching",
    icon: <BookText className="w-6 h-6 text-black" />,
    image: noorulislam,
    team: "teacher",
    socials: [
    ]
  },
  
  // Coordinators
  {
    name: "Misbah Ul Islam",
    role: "Student",
    subRole: "South Asian University",
    icon: <Code className="w-6 h-6 text-black" />,
    image: MisbahUlIslam,
    team: "coordinators",
    socials: [
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/misbah-ul-islam-0501b2323/' }
    ]
  },
  
  {
    name: "Dr. Sherin Zafar",
    role: "Assistant Professor",
    subRole: "Jamia Hamdard",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: sherinzafar,
    team: "coordinators",
    socials: [
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://www.linkedin.com/in/dr-sherin-zafar-9a20a619/' }
    ]
  },
  
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
    description: "Leading and guiding the coaching's vision and initiatives"
  },
  
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
        Aimers Foundation Coaching is a dedicated learning platform committed to empowering students through quality education and academic excellence. We support learners with expert guidance, structured preparation, interactive sessions, and personalized mentorship, helping them strengthen core concepts, build confidence, and achieve their academic and career aspirations.

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
