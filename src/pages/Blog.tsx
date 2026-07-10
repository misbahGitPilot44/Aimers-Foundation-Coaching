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
    id: "",
    title: "",
    excerpt: "",
    content: `




`,
    author: "",
    date: "",
    readTime: "",
    tags: ["AI", "Technology", "Future"],
    image: ""
  },
  {
    id: "",
    title: "",
    excerpt: "",
    content: `

`,
    author: "",
    date: "",
    readTime: "",
    tags: ["Hackathon", "Programming", "Tips"],
    image: ""
  },
  {
    id: "",
    title: "",
    excerpt: "",
    content: `



`,
    author: "",
    date: "",
    readTime: "",
    tags: ["Cloud", "Technology", "Innovation"],
    image: ""
  },
  {
    id: "",
    title: "",
    excerpt: "",
    content: `



`,
    author: "",
    date: "",
    readTime:"",
    tags: ["Open Source", "Programming", "Community"],
    image: ""
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
