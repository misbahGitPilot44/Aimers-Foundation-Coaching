import React from 'react';
import { Book, Code, Video, Link as LinkIcon, FileText, BookOpen, PenTool } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  category: 'learning' | 'tutorials' | 'research' | 'tools';
}

const resources: Resource[] = [
  {
    title: "ACM Digital Library",
    description: "Access millions of research articles, conference proceedings, and publications in computer science.",
    link: "https://dl.acm.org/",
    icon: <BookOpen className="w-6 h-6" />,
    category: 'research'
  },
  {
    title: "ACM Queue",
    description: "Practical guidance and insights on software development for professional developers.",
    link: "https://queue.acm.org/",
    icon: <FileText className="w-6 h-6" />,
    category: 'learning'
  },
  {
    title: "ACM TechTalks",
    description: "Video presentations and webinars on the latest trends in computing and technology.",
    link: "https://learning.acm.org/techtalks",
    icon: <Video className="w-6 h-6" />,
    category: 'learning'
  },
  {
    title: "GitHub Student Developer Pack",
    description: "Free access to developer tools and services for students through GitHub Education.",
    link: "https://education.github.com/pack",
    icon: <Code className="w-6 h-6" />,
    category: 'tools'
  },
  {
    title: "ACM Learning Center",
    description: "Online learning resources including courses, books, videos, and podcasts.",
    link: "https://learning.acm.org/",
    icon: <Book className="w-6 h-6" />,
    category: 'learning'
  },
  {
    title: "IEEE Computer Society",
    description: "Computing resources and professional development opportunities in partnership with IEEE.",
    link: "https://www.computer.org/",
    icon: <LinkIcon className="w-6 h-6" />,
    category: 'research'
  },
  {
    title: "freeCodeCamp",
    description: "Free interactive coding tutorials and certifications for web development, data science, and more.",
    link: "https://www.freecodecamp.org/",
    icon: <Code className="w-6 h-6" />,
    category: 'tutorials'
  },
  {
    title: "ACM Computing Surveys",
    description: "Comprehensive review articles that provide an overview of specialized areas in computing.",
    link: "https://dl.acm.org/journal/csur",
    icon: <PenTool className="w-6 h-6" />,
    category: 'research'
  }
];

const ResourcesPage: React.FC = () => {
  // Group resources by category
  const categories = {
    learning: resources.filter(resource => resource.category === 'learning'),
    research: resources.filter(resource => resource.category === 'research'),
    tutorials: resources.filter(resource => resource.category === 'tutorials'),
    tools: resources.filter(resource => resource.category === 'tools')
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">Resources</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Explore our curated collection of learning resources, research materials, 
          tutorials, and tools to support your journey in computing and technology.
        </p>
      </div>

      {/* Learning Resources Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.learning.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-[var(--accent-dark)]"
            >
              <div className="flex items-start gap-4">
                <div className="min-w-12 min-h-12 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)]">{resource.title}</h3>
                  <p className="text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Research Materials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Research Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.research.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-[var(--accent-dark)]"
            >
              <div className="flex items-start gap-4">
                <div className="min-w-12 min-h-12 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)]">{resource.title}</h3>
                  <p className="text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tutorials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.tutorials.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-[var(--accent-dark)]"
            >
              <div className="flex items-start gap-4">
                <div className="min-w-12 min-h-12 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)]">{resource.title}</h3>
                  <p className="text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--accent)] mb-6">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.tools.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-[var(--accent-dark)]"
            >
              <div className="flex items-start gap-4">
                <div className="min-w-12 min-h-12 w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[var(--accent)]">{resource.title}</h3>
                  <p className="text-sm">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg">
          Have a resource suggestion? <a href="/Contact" className="text-[var(--accent)] hover:underline">Contact us</a> to let us know!
        </p>
      </div>
    </div>
  );
}

export default ResourcesPage;
