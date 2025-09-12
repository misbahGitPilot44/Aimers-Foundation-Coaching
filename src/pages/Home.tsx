import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Book, Users, Github, Linkedin, Instagram } from 'lucide-react';
import CarouselGallery from '../components/ImageCarousel';
import img1 from '../assets/images/Event1/img1.jpg';
import img2 from '../assets/images/Event1/img2.jpg';
import img3 from '../assets/images/Event1/img3.jpg';
import img4 from '../assets/images/Event1/img4.jpg';
import img5 from '../assets/images/Event1/img5.jpg';
import img6 from '../assets/images/Event1/img6.jpg';
import img7 from '../assets/images/Event1/img7.jpg';
import img8 from '../assets/images/Event1/img8.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Latest Event Details (completed)
  const upcomingEvent = {
    title: "Git It Right! – A Hands-On Git & GitHub Workshop",
    date: "April 26th, 2025",
    description: "We successfully hosted a hands-on Git & GitHub workshop covering repos, commits, branching, pull requests, and real-world workflows.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=800&auto=format&fit=crop"
  };

  const latestPosts = [
    {
      title: "AI Trends Shaping 2025",
      excerpt: "Exploring the latest developments in artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
    },
    {
      title: "Master Your Next Hackathon",
      excerpt: "Essential strategies and tips for success in your next coding competition.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800"
    }
  ];

  const benefits = [
    "Access to ACM Digital Library",
    "Exclusive workshops and events",
    "Networking opportunities",
    "Professional development"
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, url: 'https://github.com/SAU-ACM-Student-Chapter', label: 'GitHub' },
    { icon: <Linkedin className="h-6 w-6" />, url: 'https://www.linkedin.com/company/sau-acm-student-chapter/', label: 'LinkedIn' },
    { icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/sau_acmchapter/', label: 'Instagram' },
    {
      icon: <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239s23.409-59.241,52.844-59.241c29.665,0,53.306,26.82,52.843,59.241C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239s23.409-59.241,52.843-59.241c29.667,0,53.307,26.82,52.844,59.241C470.918,310.993,447.538,337.58,417.871,337.58Z"/>
            </svg>,
      url: 'https://discord.gg/sau-acm',
      label: 'Discord'
    },
  ];

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-[36px] font-bold text-[var(--accent)] mb-6 leading-tight">
            Welcome to SAU ACM Student Chapter
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            The South Asian University ACM Student Chapter is a dynamic community dedicated to advancing
            computing innovation across South Asia. Based at South Asian University, we unite students
            and faculty through inspiring events, hands-on workshops, and exclusive access to resources
            like the ACM Digital Library.
          </p>
          <Link
            to="/membership"
            className="btn-primary inline-flex items-center group mb-8"
          >
            Become a Member
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="section-divider">
          <h2>Recent Event</h2>
        </div>
        <div className="flex justify-center mb-8">
          <div
            className="card group cursor-pointer max-w-2xl"
            onClick={() => navigate('/events')}
          >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={upcomingEvent.image}
                alt={upcomingEvent.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{upcomingEvent.title}</h3>
                <p className="text-sm mb-2">{upcomingEvent.date}</p>
                <p className="text-sm">{upcomingEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/events"
            className="btn-primary inline-flex items-center group"
          >
            View All Events
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Section */}
        <div className="section-divider">
          <h2>Latest Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {latestPosts.map((post, index) => (
            <div
              key={index}
              className="card group cursor-pointer"
              onClick={() => navigate('/blog', { state: { selectedPostTitle: post.title } })}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/blog"
            className="btn-primary inline-flex items-center group"
          >
            Read More Posts
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Membership Benefits Section */}
        <div className="section-divider">
          <h2>Membership Benefits</h2>
        </div>
        <div className="card mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Why Join SAU ACM?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[var(--accent)]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            to="/membership"
            className="btn-primary inline-flex items-center group"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Section */}
        <div className="section-divider">
          <h2>Gallery</h2>
        </div>
        <CarouselGallery images={galleryImages} />
      </div>
    </div>
  );
}

export default Home;
