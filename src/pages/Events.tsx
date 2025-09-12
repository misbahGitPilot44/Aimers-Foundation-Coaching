import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Presentation,
  Info,
  User,
  Target,
  Code,
  CheckCircle,
} from "lucide-react";

// Import your event images (add as many as you need)
import img1 from "../assets/images/Event1/img1.jpg";
import img2 from "../assets/images/Event1/img2.jpg";
import img3 from "../assets/images/Event1/img3.jpg";
import img4 from "../assets/images/Event1/img4.jpg";
import img5 from "../assets/images/Event1/img5.jpg";
import img6 from "../assets/images/Event1/img6.jpg";
// keep adding more imports here...

const images = [img1, img2, img3, img4, img5, img6]; // extend this list with all event images

/**
 * Interface defining the structure of event details
 */
interface EventDetails {
  id: string;
  title: string;
  date: string;
  status: string;
  time: string;
  location: string;
  description: string;
  image: string;
  speaker?: string;
  duration?: string;
  targetAudience?: string;
  level?: string;
  agenda?: {
    time: string;
    session: string;
  }[];
  learningOutcomes?: string[];
  additionalEngagement?: string[];
}

const event: EventDetails = {
  id: "git-it-right-workshop",
  title: "Git It Right! – A Hands-On Git & GitHub Workshop",
  date: "April 26th, 2025",
  status: "Completed",
  time: "Held Successfully",
  location:
    "Online (Zoom/Google Meet link was shared with registered participants)",
  description:
    "The SAU ACM Student Chapter organized a successful GitHub Workshop on April 26th, 2025. Students learned how to create repositories, manage commits, and collaborate using GitHub. The session was beginner-friendly and provided real-world workflows for academic and open-source projects.",
  image:
    "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=800&auto=format&fit=crop",
  speaker: "Vinayak Sharma, SDE Intern, Samsung Research",
  duration: "1.5 to 2 hours",
  targetAudience:
    "Undergraduate and postgraduate students (especially 1st and 2nd years) interested in version control, software development, and open-source contribution",
  level: "Beginner-friendly",
  agenda: [
    {
      time: "00:00 – 00:10",
      session:
        "Welcome & Introduction – Importance of version control and collaborative development",
    },
    {
      time: "00:10 – 00:30",
      session:
        "Understanding Git – Git fundamentals, installation, and essential commands (init, add, commit, log, etc.)",
    },
    {
      time: "00:30 – 00:55",
      session:
        "Getting Started with GitHub – Creating repositories, pushing code, working with branches",
    },
    {
      time: "00:55 – 01:15",
      session:
        "Live Demo – Hands-on demonstration of setting up a project, collaborating via pull requests and forks",
    },
    {
      time: "01:15 – 01:25",
      session:
        "Bonus Segment – Introduction to GitHub Pages and GitHub Projects for task management",
    },
    {
      time: "01:25 – 01:45",
      session:
        "Q&A + Discussion – Addressing participant questions, next steps for practice and exploration",
    },
  ],
  learningOutcomes: [
    "Understood the purpose and workflow of Git and GitHub",
    "Created and managed repositories",
    "Collaborated with others through pull requests and forks",
    "Applied version control in academic and personal projects",
  ],
  additionalEngagement: [
    "High participation with hands-on practice",
    "Follow-up support through shared guides and cheat sheets",
    "Encouragement for open-source contributions",
  ],
};

const Events: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDetails]);

  useEffect(() => {
    if (showDetails) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showDetails]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Events</h1>

      {showDetails ? (
        // Event details view
        <div className="space-y-8">
          <button
            onClick={() => setShowDetails(false)}
            className="text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to events
          </button>

          <div ref={detailsRef} className="card">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <span className="inline-flex items-center text-green-600 font-medium mb-6">
              <CheckCircle className="w-5 h-5 mr-2" /> {event.status}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <p className="flex items-center text-[var(--accent)]">
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.time} ({event.duration})</span>
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </p>
              {event.speaker && (
                <p className="flex items-center">
                  <User className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Speaker: {event.speaker}</span>
                </p>
              )}
              {event.level && (
                <p className="flex items-center">
                  <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Level: {event.level}</span>
                </p>
              )}
              {event.targetAudience && (
                <p className="flex items-center md:col-span-2">
                  <Target className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Target Audience: {event.targetAudience}</span>
                </p>
              )}
            </div>

            <p className="mb-8">{event.description}</p>

            {/* Agenda Section */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Presentation className="w-5 h-5 mr-2" /> Topics Covered
                </h3>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                        <div className="flex-shrink-0 text-[var(--accent)] font-medium sm:w-28 mb-1 sm:mb-0">
                          {item.time}
                        </div>
                        <div className="flex-grow text-gray-700 dark:text-gray-300">
                          <p>{item.session}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Learning Outcomes Section */}
            {event.learningOutcomes && event.learningOutcomes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" /> Key Takeaways
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {event.learningOutcomes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Engagement Section */}
            {event.additionalEngagement && event.additionalEngagement.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2" /> Engagement
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {event.additionalEngagement.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Event Gallery */}
            <div id="gallery" className="mb-8">
              <h3 className="text-xl font-semibold mb-4">📸 Event Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Event photo ${index + 1}`}
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Recording Placeholder */}
            <div className="mt-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              🎥 Event Recording</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
            Recording will be uploaded soon. Stay tuned!
            </p>
            </div>
          </div>
        </div>

      ) : (
        // Events list view
        <div className="space-y-6 max-w-4xl mx-auto">
          <div
            className="card flex flex-col md:flex-row items-stretch gap-6 cursor-pointer group"
            onClick={() => setShowDetails(true)}
          >
            <div className="md:w-1/5">
              <div className="rounded-xl overflow-hidden h-48 md:h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-4/5 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <span className="inline-flex items-center text-green-600 font-medium mb-4">
                <CheckCircle className="w-4 h-4 mr-2" /> {event.status}
              </span>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-[var(--accent)]">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </p>
              </div>
              <p className="mt-4 line-clamp-2">{event.description}</p>
              <div className="mt-6 md:mt-auto pt-2">
                <button className="btn-primary whitespace-nowrap">View Highlights</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
