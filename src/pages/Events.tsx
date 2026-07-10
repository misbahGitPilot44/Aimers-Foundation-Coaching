import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Presentation,
  User,
  Target,
  Code,
  CheckCircle,
} from "lucide-react";

// Import your event images (add as many as you need)
import img1 from "../assets/images/Event1/img1.jpeg";
import img2 from "../assets/images/Event1/img2.jpeg";
import img3 from "../assets/images/Event1/img3.jpeg";
import img4 from "../assets/images/Event1/img4.jpeg";
// import img5 from "../assets/images/Event1/img5.jpg";
// import img6 from "../assets/images/Event1/img6.jpg";
// import img7 from "../assets/images/Event1/img7.jpg";
// import img8 from "../assets/images/Event1/img8.jpg";
// keep adding more imports here...

const images = [img1, img2, img3, img4,]; // extend this list with all event images

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
  class?: string;
  agenda?: {
    time: string;
    session: string;
  }[];
  learningOutcomes?: string[];
  additionalEngagement?: string[];
}

const event: EventDetails = {
  id: "fee-charges-relevant-details",
  title: "Fees Charges & Relevant Details",
  date: "Monday-Friday",
  status: "All details updated",
  time: "4:00 pm - 9:00 pm",
  location:
    "108/19, Zakir Nagar, New Delhi, 110025",
  description:
    "The Aimers Foundation Coaching website provides comprehensive details about course offerings, fee structures, and curriculum plans for students across different academic levels. Learners can explore structured programs, subject-wise fees, batch details, and available packages. The platform also offers clear payment-related information, ensuring a transparent and convenient enrollment experience.",
  image: img1,
  speaker: "",
  duration: "",
  targetAudience:"",
  class: "IV-X",
  agenda: [
    {
      time: "",
      session: ""    },
    {
      time: "",
      session: ""    },
    {
      time: "",
      session: ""    },
    {
      time: "",
      session:
        ""
    },
    {
      time: "",
      session:
        "",
    },
    {
      time: "",
      session: ""    },
  ],
  learningOutcomes: [
    "For one subject – Rs. 1000/- per month",
    "For two subjects – Rs. 900/- per month per subject",
    "For three subjects – Rs. 850/- per month per subject",
  ],
  additionalEngagement: [
    "For one subject – Rs. 1500/- per month",
    "For two subjects – Rs. 1400/- per month per subject",
  ],
};

const Events: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const feeStructureItems = (event.agenda ?? []).filter(
    (item) => item.time.trim() !== "" || item.session.trim() !== ""
  );

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
      <h1 className="section-title text-center">Curriculum Structure</h1>

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
            <div className="mb-6 rounded-xl overflow-hidden bg-white">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto max-h-[420px] object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <span className="inline-flex items-center text-green-600 font-medium mb-6">
              <CheckCircle className="w-5 h-5 mr-2" /> {event.status}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <p className="flex items-center text-black">
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{event.date}</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>
                  {event.time}
                  {event.duration ? ` (${event.duration})` : ""}
                </span>
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
              {event.class && (
                <p className="flex items-center">
                  <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Class: {event.class}</span>
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
            {feeStructureItems.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Presentation className="w-5 h-5 mr-2" /> Fee Structure
                </h3>
                <div className="space-y-4">
                  {feeStructureItems.map((item, index) => (
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
                  VI-VIII
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
                  IX-X
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
              <h3 className="text-xl font-semibold mb-4">📸 Coaching Gallery</h3>
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
              </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
          
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
                <p className="flex items-center text-black">
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
                <button className="btn-primary whitespace-nowrap">View Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
