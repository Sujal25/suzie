export const portfolioData = {
  name: "Sujal Maurya",
  title: "CSE Student, Startup Founder, Cinematographer & Content Creator",
  description: "Building ideas, editing stories, creating impact. A passionate CSE student at MNIT Jaipur, founder of IgniteU, and creative content creator.",
  keywords: [
    "Sujal Maurya",
    "Portfolio",
    "CSE Student",
    "Startup Founder",
    "Cinematographer",
    "Video Editor",
    "React Developer",
    "Python Developer",
    "MNIT Jaipur",
    "IgniteU",
    "Content Creator"
  ],

  hero: {
    name: "Sujal Maurya",
    tagline: "Building Ideas, Editing Stories, Creating Impact",
    subtitle: "CSE Student • Startup Founder • Cinematographer • Content Creator",
    description: "Passionate about technology, entrepreneurship, and creative storytelling. Currently pursuing Computer Science at MNIT Jaipur while building innovative solutions and creating compelling visual content.",
    image: "https://i.postimg.cc/P59Bk88x/hero.jpg",
    resumeUrl: "/resume.pdf", // You'll need to add your resume
    socialLinks: {
      github: "https://github.com/Sujal25",
      linkedin: "https://www.linkedin.com/in/sujal-maurya/",
      instagram: "https://www.instagram.com/maurya_925/",
      youtube: "https://www.youtube.com/@sujalmaurya25"
    }
  },

  about: {
    bio: "I'm a Computer Science student at Malaviya National Institute of Technology, Jaipur, with a passion for innovation and creativity. From developing smart solutions to creating cinematic content, I love turning ideas into reality.",
    education: {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Malaviya National Institute of Technology, Jaipur",
      year: "2024 - 2028",
      
    },
    timeline: [
      {
        year: "2021",
        title: "Class 10",
        description: "Started my journey in technology and creativity"
      },
      {
        year: "2023",
        title: "High School",
        description: "Developed interest in programming and video editing"
      },
      {
        year: "2024",
        title: "Joined MNIT Jaipur",
        description: "Started B.Tech in Computer Science"
      },
      {
        year: "2024",
        title: "IGN!TEU",
        description: "Part of the core founding team of a student innovation-focused startup."
      },
      {
        year: "2024",
        title: "E-Cell MNIT",
        description: "Active member of Entrepreneurship Cell"
      },
      {
        year: "2025",
        title: "Present",
        description: "Continuing to build, create, and innovate"
      }
    ],
    interests: [
      "Technology & Innovation",
      "Entrepreneurship",
      "Cinematography",
      "Content Creation",
      "Problem Solving",
      "Creative Design",
      "Web Development",
      "Video Editing",
      "Canva Design",
      "Photography",
      
    ]
  },

  projects: [
   
    {
      id: 1,
      title: "IgniteU Platform",
      description: "A comprehensive platform for student innovation and entrepreneurship. Features include project showcase, mentorship matching, and resource sharing.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      image: "https://i.postimg.cc/4xYp9Y2p/igniteupro.png",
      githubUrl: "https://theigniteu.com/",
      liveUrl: "https://theigniteu.com/",
      featured: true
    },
   
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing my work and skills. Built with React and TailwindCSS.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      image: "https://i.postimg.cc/prVFXrnh/personalport.png",
      githubUrl: "https://github.com/Sujal25/suzie",
      liveUrl: "https://sujalmaurya.github.io/portfolio",
      featured: false
    }

  ],

  cinematography: {
    title: "Best of My Edits",
    subtitle: "A showcase of my top storytelling and IgniteU reels",
    description: "Here are some of my best edited reels, blending storytelling and IgniteU moments. All videos are playable directly on this site.",
    reels: [
      {
        id: 1,
        title: "IgniteU Reel",
        description: "A high-energy edit capturing the excitement and innovation of the IgniteU.",
        video: "/videos/igniteu.mp4",
        thumbnail: "https://i.postimg.cc/brdwBttT/igniteu.png"
      },
      {
        id: 2,
        title: "Cinematic Reel 1",
        description: "A visually stunning sequence showcasing my skills in color grading and dynamic editing.",
        video: "/videos/cinematic-reel-1.mp4",
        thumbnail: "https://i.postimg.cc/nLcrDghg/cinematic-reel-2-thumb.png"
      },
      {
        id: 4,
        title: "Cinematic Reel 3",
        description: "A showcase of my best transitions, effects, and narrative-driven editing style.",
        video: "/videos/cinematic-reel-3.mp4",
        thumbnail: "https://i.postimg.cc/WpSZYGQM/cinematic-reel-3-thumb.png"
      }
    ]
  },

  skills: {
    programming: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "⚡" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "C++", level: 75, icon: "🔧" },
      { name: "C", level: 70, icon: "⚙️" },
      { name: "HTML/CSS", level: 95, icon: "🌐" }
    ],
    tools: [
      { name: "Adobe Premiere Pro", level: 85, icon: "🎬" },
      { name: "Adobe After Effects", level: 75, icon: "✨" },
      { name: "Git & GitHub", level: 80, icon: "📚" },
      { name: "Figma", level: 70, icon: "🎨" },
      { name: "Canva", level: 90, icon: "📱" },
      { name: "DaVinci Resolve", level: 65, icon: "🎭" }
    ],
    frameworks: [
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Node.js", level: 70, icon: "🟢" },
      { name: "Express.js", level: 65, icon: "🚀" },
      { name: "Flask", level: 75, icon: "🔥" },
      { name: "TailwindCSS", level: 85, icon: "🎨" },
      { name: "Bootstrap", level: 80, icon: "📱" }
    ],
    databases: [
      { name: "MongoDB", level: 70, icon: "🍃" },
      { name: "PostgreSQL", level: 65, icon: "🐘" },
      { name: "SQLite", level: 75, icon: "💾" },
      { name: "Firebase", level: 80, icon: "🔥" }
    ]
  },

  startups: {
    title: "Startup Journey & Innovation",
    subtitle: "Building solutions that make a difference",
    ventures: [
      {
        id: 1,
        name: "IgniteU",
        role: "Founder & CEO",
        year: "2 year",
        description: "A comprehensive platform for student innovation and entrepreneurship. IgniteU connects students with mentors, resources, and opportunities to bring their ideas to life.",
        achievements: [
          "500+ active users",
          "50+ successful projects",
          "Featured in local media",
          "Won startup competitions"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Firebase"],
        image: "https://i.postimg.cc/G3ZRCVwr/igniteu.jpg",
        website: "https://theigniteu.com/",
        status: "Active"
      }
    ],
    awards: [
      {
        title: "Best Startup Award",
        organization: "MNIT Innovation Summit",
        year: "2023",
        description: "Recognized for innovative approach in student entrepreneurship"
      },
      {
        title: "Healthcare Innovation Award",
        organization: "Startup India",
        year: "2023",
        description: "For Prescripto's contribution to healthcare technology"
      },
      {
        title: "Environmental Impact Award",
        organization: "Green Tech Challenge",
        year: "2022",
        description: "For the pollution-to-biogas converter project"
      }
    ],
    stats: [
      { icon: 'Rocket', value: 1, label: 'Startups Founded' },
    ]
  },

  contact: {
    title: "Let's Connect",
    subtitle: "Ready to collaborate on something amazing?",
    description: "I'm always open to discussing new opportunities, creative projects, or just having a great conversation about technology and innovation.",
    email: "sujalmaurya08@gmail.com",
    phone: "+91 7428746229",
    location: "Jaipur, Rajasthan, India",
    socialLinks: {
      github: "https://github.com/Sujal25",
      linkedin: "https://www.linkedin.com/in/sujal-maurya/",
      instagram: "https://www.instagram.com/maurya_925/",
      youtube: "https://www.youtube.com/@sujalmaurya25",
      whatsapp: "https://wa.me/917428746229"
    },
    availability: "Available for freelance projects and full-time opportunities",
    responseTime: "Usually responds within 24 hours"
  },

  loadingImage: "https://i.postimg.cc/KjnxVDYt/image.png"
}; 

