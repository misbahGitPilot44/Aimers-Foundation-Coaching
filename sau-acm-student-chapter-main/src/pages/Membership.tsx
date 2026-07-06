import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: "Digital Library Access",
    description: "Full access to ACM Digital Library with millions of research papers and publications"
  },
  {
    title: "Publications",
    description: "Subscriptions to Communications of the ACM and XRDS magazines"
  },
  {
    title: "Learning Resources",
    description: "Access to online courses, training videos, and educational materials"
  },
  {
    title: "Networking",
    description: "Connect with a vast network of peers and industry professionals"
  },
  {
    title: "Career Opportunities",
    description: "Access to job boards, career resources, and professional development tools"
  },
  {
    title: "Event Discounts",
    description: "Discounted registration for conferences and special events"
  },
  {
    title: "Special Interest Groups",
    description: "Join specialized communities focused on specific computing areas"
  },
  {
    title: "Distinguished Speakers",
    description: "Access to the ACM Distinguished Speakers Program"
  }
];

const Membership: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">Membership</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Join the Association for Computing Machinery (ACM) and become part of a dynamic community
          shaping the future of computing. Access valuable resources, expand your knowledge, and
          advance your career.
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