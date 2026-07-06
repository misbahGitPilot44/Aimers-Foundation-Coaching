import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, User, Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "ai-trends-2025",
    title: "AI Trends Shaping 2025",
    excerpt: "Exploring the latest developments in artificial intelligence and machine learning that are transforming industries.",
    content: `Artificial Intelligence continues to evolve at an unprecedented pace, reshaping how we live and work. In 2025, we're seeing several key trends emerge that are worth watching closely.

First, there's the rise of multimodal AI systems that can process and generate different types of data - text, images, audio, and video - simultaneously. These systems are becoming increasingly sophisticated, offering new possibilities for creative work and data analysis.

Another significant trend is the democratization of AI tools. What once required deep expertise and substantial computing resources is now accessible to developers and businesses of all sizes. This accessibility is driving innovation across sectors, from healthcare to education.

Edge AI is also gaining momentum, with more processing happening on local devices rather than in the cloud. This shift improves response times and addresses privacy concerns, making AI more practical for real-time applications.

[Continue reading on Medium...]`,
    author: "Dr. Sarah Chen",
    date: "March 15, 2025",
    readTime: "5 min read",
    tags: ["AI", "Technology", "Future"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800"
  },
  {
    id: "hackathon-success",
    title: "Master Your Next Hackathon",
    excerpt: "Essential strategies and tips for success in your next coding competition, based on experiences from top performers.",
    content: `Hackathons are intense, exciting events that can accelerate your learning and open new opportunities. Here's how to make the most of your next hackathon experience.

Preparation is key. Before the event, familiarize yourself with common development tools and frameworks. Having a solid foundation will help you focus on building rather than troubleshooting basic issues.

Team composition matters. Look for teammates with complementary skills - if you're a backend developer, try to partner with someone strong in frontend development or design. This balance can help you create more complete solutions.

Time management is crucial. Start with a minimum viable product (MVP) and add features only if time permits. It's better to have a working basic solution than an incomplete complex one.

[Continue reading on Medium...]`,
    author: "Alex Kumar",
    date: "March 10, 2025",
    readTime: "4 min read",
    tags: ["Hackathon", "Programming", "Tips"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800"
  },
  {
    id: "cloud-computing",
    title: "The Future of Cloud Computing",
    excerpt: "How cloud technologies are driving innovation and scalability in modern applications.",
    content: `Cloud computing has become the backbone of modern technology infrastructure. In this article, we explore how advancements in cloud services are enabling businesses to scale rapidly and innovate efficiently.

Key trends include serverless computing, which abstracts infrastructure management, and hybrid cloud solutions that combine on-premises and cloud environments for flexibility. Additionally, AI-driven cloud analytics are empowering organizations to derive actionable insights from massive datasets.

As cloud adoption grows, security remains a priority, with new protocols ensuring data integrity and privacy across distributed systems.

[Continue reading on Medium...]`,
    author: "Priya Sharma",
    date: "March 5, 2025",
    readTime: "6 min read",
    tags: ["Cloud", "Technology", "Innovation"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
  },
  {
    id: "open-source",
    title: "Why Open Source Matters",
    excerpt: "A deep dive into the impact of open-source software on collaboration and innovation.",
    content: `Open-source software has transformed the way developers collaborate and build technology. This article explores the principles behind open source, its benefits, and its challenges.

Open source fosters community-driven development, enabling contributors worldwide to improve software collectively. It also democratizes access to cutting-edge tools, leveling the playing field for startups and individuals.

However, maintaining open-source projects requires sustainable funding and governance models to ensure long-term success.

[Continue reading on Medium...]`,
    author: "Rahul Verma",
    date: "February 28, 2025",
    readTime: "5 min read",
    tags: ["Open Source", "Programming", "Community"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800"
  }
];

const Blog: React.FC = () => {
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [isLoading, setIsLoading] = useState(false);

  // Get unique tags for filtering
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  // Handle opening specific post from home page
  useEffect(() => {
    const { state } = location;
    if (state && state.selectedPostTitle) {
      const post = posts.find(p => p.title === state.selectedPostTitle);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [location]);

  // Filter posts based on search term and selected tag
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      let result = posts;

      // Search filter
      if (searchTerm) {
        const lowerSearch = searchTerm.toLowerCase();
        result = result.filter(
          (post) =>
            post.title.toLowerCase().includes(lowerSearch) ||
            post.excerpt.toLowerCase().includes(lowerSearch)
        );
      }

      // Tag filter
      if (selectedTag) {
        result = result.filter((post) => post.tags.includes(selectedTag));
      }

      setFilteredPosts(result);
      setIsLoading(false);
    }, 500); // Debounce for smoother UX

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedTag]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="section-title text-center">Blog</h1>
      
      {selectedPost ? (
        <div className="space-y-8 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-[var(--accent)] hover:text-[var(--accent-dark)] flex items-center"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to posts
          </button>

          <article className="card">
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            
            <div className="flex items-center space-x-4 mb-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {selectedPost.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {selectedPost.readTime}
              </div>
              <span>{selectedPost.date}</span>
            </div>

            <div className="prose prose-lg mb-8">
              <p>{selectedPost.content}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-lg bg-[var(--secondary)] text-sm hover:bg-[var(--accent)] hover:text-white cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedPost(null);
                      setSelectedTag(tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`https://medium.com/@sau-acm/${selectedPost.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-dark)] inline-flex items-center"
              >
                Read full article on Medium
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      ) : (
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-1/2">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search posts..."
                className="w-full px-4 py-2 pl-10 rounded-lg border-2 border-[var(--accent)] bg-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] pr-10"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--accent)] hover:text-[var(--accent-dark)]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--accent)]" />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  selectedTag === null
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--secondary)] hover:bg-[var(--accent)] hover:text-white'
                }`}
              >
                ALL
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedTag === tag
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-[var(--secondary)] hover:bg-[var(--accent)] hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--accent)] border-t-transparent"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <p className="text-center text-lg">No posts found. Try adjusting your search or filters.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="card group cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h2>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Blog;
