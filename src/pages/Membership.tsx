import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: "Best Quality Education",
    description: "Expert-led teaching focused on academic excellence and student success."
  },
  {
    title: "Study Materials",
    description: "Well-structured notes, practice sets, and exam-focused learning materials."
  },
  {
    title: "Learning Resources",
    description: "Access to useful educational content, practice tools, and guided resources."
  },
  {
    title: "Supportive Environment",
    description: "A positive learning space with continuous guidance and student support."
  },
  {
    title: "Comprehensive Curriculum",
    description: "A structured syllabus covering essential concepts and academic requirements."
  },
  {
    title: "Regular Assessments",
    description: "Frequent tests and evaluations to track progress and identify improvement areas."
  },
  {
    title: "Technology Integration",
    description: "Modern digital tools and technology-enabled methods for effective learning."
  },
  {
    title: "Concept Building",
    description: "Strong focus on fundamentals to develop clarity and long-term understanding."
  }
];

const Membership: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">Membership</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Join Aimers Foundation Coaching and become part of a supportive learning community dedicated to academic success. Access expert guidance, strengthen your concepts, enhance your skills, and move confidently toward achieving your educational and career goals.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfkesEgOp2PJ0hi42W1a9mU9JJkzsdze0yf9oB5SRD8bZ-gow/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center group"
        >
          Join Now
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="card">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Membership;