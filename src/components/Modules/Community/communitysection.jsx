import React from 'react'

function communitysection() {
  return (
    <div>
      <section className="community-container">
      <div className="main">
        {/* Left Side - Discussion Categories + Latest Posts */}
        <div className="left-side">
          {/* Discussion Categories */}
          <div className="discussion-categories">
            <h2>Discussion Categories</h2>
                <div className="category-grid">
                    {[
                        { title: "General Discussion", color: "blue", desc: "Open discussions about community topics, introductions, and general questions.", posts: "324", icon: "fa-comments" },
                        { title: "Buying Tips", color: "green", desc: "Strategies and advice for making smart purchasing decisions and finding deals.", posts: "124", icon: "fa-bag-shopping" },
                        { title: "Selling Strategies", color: "purple", desc: "Tips and techniques to improve your selling performance and conversion rates.", posts: "124", icon: "fa-chart-line" },
                        { title: "Product Queries", color: "pink", desc: "Questions and answers about specific products, features, and compatibility issues.", posts: "324", icon: "fa-circle-question" },
                        { title: "Success Stories", color: "orange", desc: "Share your achievements and learn from others’ success stories in the community.", posts: "124", icon: "fa-trophy" },
                        { title: "Marketing & Discussion", color: "teal", desc: "Strategies for promoting your products and engaging with your audience effectively.", posts: "124", icon: "fa-bullhorn" },
                    ].map((cat, idx) => (
                        <div className="category-cardss" key={idx}>
                        <div className={`icon-wrapper ${cat.color}`}>
                            <i className={`fas ${cat.icon} icon`}></i>
                        </div>
                        <div className="content">
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                            <div className="meta">
                            <span>{cat.posts} posts</span>
                            <a href="#">Explore →</a>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

          {/* Latest Posts */}
          <div className="latest-posts">
            <div className="posts-header">
              <h2>Latest Posts</h2>
              <a href="#">See all →</a>
            </div>
            {[
              {
                tag: "Selling Strategies",
                user: "John Smith",
                time: "2 hours ago",
                text: "How I increased my conversion rate by 35% with these simple tips",
                body: "After struggling with low conversion rates for months, I implemented these strategies and saw immediate improvements in my sales performance...",
                comments: 24,
                likes: 18,
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                tag: "Buying Tips",
                user: "Jane Doe",
                time: "Yesterday",
                text: "Guide to negotiating the best deals with suppliers",
                body: "Negotiation is an art that can save you thousands. In this comprehensive guide, I share my proven techniques for getting better deals...",
                comments: 45,
                likes: 54,
                img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                tag: "Product Queries",
                user: "Mike P.",
                time: "5 days ago",
                text: "Comparing the top 5 inventory management tools in 2023",
                body: "After testing dozens of inventory solutions, I've narrowed down the best options based on features, pricing, and ease of use...",
                comments: 30,
                likes: 14,
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }
            ].map((post, i) => (
              <div className="post-card" key={i}>
                <div className="image">
                  <img src={post.img} alt="profile" />
                </div>
                <div>
                <div className="post-meta">
                  <span className="tag">{post.tag}</span>
                  <span className="time">{post.time}</span>
                </div>
                <h3>{post.text}</h3>
                <p>{post.body}</p>
                <div className="post-footer">
                  <span>💬 {post.comments} comments</span>
                  <span>❤️ {post.likes} likes</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="right-sides">
          {/* Create New Post */}
          <div className="new-post-box">
            <p>Have something to share?</p>
            <span>Your insights and questions help our community grow stronger.</span>
            <button><i className={`fas fa-pen-to-square icon`}></i> Create New Post</button>
          </div>

          {/* Tags */}
          <div className="tags-box">
            <h4>Explore by Tags</h4>
            <div className="tags">
              {["#shipping", "#product-reels", "#first-sale", "#seller-struggles", "#pricing-tips", "#feedback", "#promotion-hacks", "#trust-building", "#seller-support"].map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="how-it-works">
            <h4>How it works?</h4>
            <ol>
              <li>
                <div className="text">
                <strong>Join the conversation</strong><br />Browse categories and find discussions that interest you.</div></li>
              <li>
                <div className="text">
                <strong>Ask questions</strong><br />Create new posts to get help from community experts.</div></li>
              <li>
                <div className="text">
                <strong>Share your knowledge</strong><br />Help others by answering questions and sharing tips.</div></li>
              <li>
                <div className="text">
                <strong>Grow together</strong><br />Build your reputation and network with like-minded individuals.</div></li>
            </ol>
          </div>

          {/* Community Stats */}
          <div className="stats-box">
            <h4>Community Stats</h4>
            <div className="stats">
              <div className='stats1'><strong>2.4k</strong><br /><span>Members</span></div>
              <div className='stats2'><strong>1.7k</strong><br /><span>Posts</span></div>
              <div className='stats3'><strong>3.2k</strong><br /><span>Comments</span></div>
              <div className='stats4'><strong>82</strong><br /><span>Online Now</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default communitysection
