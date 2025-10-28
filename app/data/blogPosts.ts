export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Minimalist Design",
    excerpt: "Exploring how less is more in modern web design and why minimalism continues to dominate.",
    content: "Minimalist design has been a dominant trend for years, and for good reason. It focuses on essential elements, removes clutter, and creates a clean, user-friendly experience. In this post, we explore the principles of minimalist design and how to apply them effectively.",
    author: "Sarah Johnson",
    date: "2025-10-15",
    category: "Design Trends",
    imageUrl: "/images/blog/minimalist-design.jpg"
  },
  {
    id: 2,
    title: "Color Psychology in Branding",
    excerpt: "Understanding how colors influence customer perception and brand identity.",
    content: "Colors evoke emotions and can significantly impact how your brand is perceived. From the trust of blue to the energy of red, we dive deep into color psychology and how to choose the right palette for your brand.",
    author: "Michael Chen",
    date: "2025-10-12",
    category: "Branding",
    imageUrl: "/images/blog/color-psychology.jpg"
  },
  {
    id: 3,
    title: "Typography Trends for 2025",
    excerpt: "The latest typography trends that are shaping modern design aesthetics.",
    content: "Typography is more than just choosing fonts—it's about creating hierarchy, readability, and visual interest. We showcase the top typography trends for 2025, from variable fonts to experimental layouts.",
    author: "Emma Rodriguez",
    date: "2025-10-10",
    category: "Design Trends",
    imageUrl: "/images/blog/typography-trends.jpg"
  },
  {
    id: 4,
    title: "Building Effective Design Systems",
    excerpt: "A comprehensive guide to creating scalable and maintainable design systems.",
    content: "Design systems are essential for maintaining consistency across products and speeding up development. Learn how to build a design system from scratch, including component libraries, style guides, and documentation.",
    author: "David Park",
    date: "2025-10-08",
    category: "Design Process",
    imageUrl: "/images/blog/design-systems.jpg"
  },
  {
    id: 5,
    title: "The Rise of Dark Mode",
    excerpt: "Why dark mode has become a standard feature and how to implement it effectively.",
    content: "Dark mode isn't just a trend—it's a user preference that's here to stay. We discuss the benefits of dark mode, accessibility considerations, and best practices for implementation.",
    author: "Lisa Thompson",
    date: "2025-10-05",
    category: "UX Design",
    imageUrl: "/images/blog/dark-mode.jpg"
  },
  {
    id: 6,
    title: "Responsive Design in 2025",
    excerpt: "Modern approaches to creating websites that work seamlessly across all devices.",
    content: "Responsive design continues to evolve with new devices and screen sizes. Explore advanced techniques including container queries, fluid typography, and progressive enhancement.",
    author: "James Wilson",
    date: "2025-10-03",
    category: "Web Design",
    imageUrl: "/images/blog/responsive-design.jpg"
  },
  {
    id: 7,
    title: "Animation and Microinteractions",
    excerpt: "How subtle animations can enhance user experience and delight users.",
    content: "Microinteractions are the small, delightful moments that make interfaces feel alive. Learn how to use animation purposefully to guide users, provide feedback, and create memorable experiences.",
    author: "Rachel Martinez",
    date: "2025-10-01",
    category: "UX Design",
    imageUrl: "/images/blog/microinteractions.jpg"
  },
  {
    id: 8,
    title: "Sustainable Web Design",
    excerpt: "Creating eco-friendly websites that minimize environmental impact.",
    content: "The internet has a carbon footprint, and designers have a role to play in reducing it. Discover sustainable design practices including optimized images, efficient code, and green hosting.",
    author: "Alex Green",
    date: "2025-09-28",
    category: "Design Ethics",
    imageUrl: "/images/blog/sustainable-design.jpg"
  },
  {
    id: 9,
    title: "User Research Methods",
    excerpt: "Essential techniques for understanding your users and their needs.",
    content: "Great design starts with understanding users. We cover various research methods including user interviews, surveys, usability testing, and analytics to inform your design decisions.",
    author: "Nina Patel",
    date: "2025-09-25",
    category: "UX Research",
    imageUrl: "/images/blog/user-research.jpg"
  },
  {
    id: 10,
    title: "The Art of White Space",
    excerpt: "Mastering negative space to create balanced and elegant designs.",
    content: "White space (or negative space) is a powerful design tool that's often underutilized. Learn how to use white space effectively to improve readability, create focus, and add sophistication to your designs.",
    author: "Thomas Anderson",
    date: "2025-09-22",
    category: "Design Principles",
    imageUrl: "/images/blog/white-space.jpg"
  },
  {
    id: 11,
    title: "Accessibility-First Design",
    excerpt: "Creating inclusive digital experiences for all users.",
    content: "Accessibility isn't optional—it's essential. Explore WCAG guidelines, screen reader considerations, keyboard navigation, and inclusive design practices that benefit everyone.",
    author: "Sophie Kim",
    date: "2025-09-20",
    category: "Accessibility",
    imageUrl: "/images/blog/accessibility.jpg"
  },
  {
    id: 12,
    title: "Design Collaboration Tools",
    excerpt: "The best tools for remote design teams to work together effectively.",
    content: "Remote work has changed how design teams collaborate. We review the top design collaboration tools including Figma, Miro, and other platforms that keep teams aligned and productive.",
    author: "Marcus Brown",
    date: "2025-09-18",
    category: "Tools & Resources",
    imageUrl: "/images/blog/collaboration-tools.jpg"
  },
  {
    id: 13,
    title: "Converting Designs to Code",
    excerpt: "Best practices for bridging the gap between design and development.",
    content: "The design-to-development handoff is critical for project success. Learn how to prepare design files, communicate with developers, and ensure your vision is implemented accurately.",
    author: "Jennifer Lee",
    date: "2025-09-15",
    category: "Design Process",
    imageUrl: "/images/blog/design-to-code.jpg"
  },
  {
    id: 14,
    title: "Logo Design Principles",
    excerpt: "Creating memorable and effective logos that stand the test of time.",
    content: "A great logo is simple, memorable, timeless, versatile, and appropriate. We break down the fundamental principles of logo design with examples and practical tips.",
    author: "Robert Taylor",
    date: "2025-09-12",
    category: "Branding",
    imageUrl: "/images/blog/logo-design.jpg"
  },
  {
    id: 15,
    title: "Content Strategy for Designers",
    excerpt: "Why designers need to think about content from the start.",
    content: "Content and design go hand in hand. Discover how to integrate content strategy into your design process, from information architecture to microcopy and content-first design.",
    author: "Amanda Foster",
    date: "2025-09-10",
    category: "Content Strategy",
    imageUrl: "/images/blog/content-strategy.jpg"
  },
  {
    id: 16,
    title: "Mobile-First Design Approach",
    excerpt: "Why starting with mobile screens leads to better overall design.",
    content: "Mobile-first design forces you to prioritize content and features, resulting in cleaner, more focused experiences. Learn the methodology and benefits of designing for mobile screens first.",
    author: "Kevin Zhang",
    date: "2025-09-08",
    category: "Web Design",
    imageUrl: "/images/blog/mobile-first.jpg"
  },
  {
    id: 17,
    title: "Design Portfolios That Get Noticed",
    excerpt: "Creating a portfolio that showcases your best work and lands you clients.",
    content: "Your portfolio is your most important marketing tool. We share tips on selecting work, presenting case studies, and creating a portfolio that demonstrates your skills and thinking process.",
    author: "Olivia Martinez",
    date: "2025-09-05",
    category: "Career Development",
    imageUrl: "/images/blog/design-portfolio.jpg"
  }
];
