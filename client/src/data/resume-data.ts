export const resumeData = {
  personal: {
    name: "Naman Jain",
    title: "Senior Flutter Developer",
    experience: "5+ years",
    phone: "+91-7976208349",
    email: "namanjain300@gmail.com",
    linkedin: "https://www.linkedin.com/in/namanjain300",
    location: "Hyderabad, India",
    summary: "Experienced Flutter developer with 5+ years of expertise in building scalable, cross-platform mobile and web applications. Proficient in Dart, Firebase, and modern state management patterns. Demonstrated ability to optimize performance, lead development teams, and deliver robust solutions across multiple platforms including Android, iOS, Windows, and web."
  },

  skills: {
    languages: ["Dart", "Java"],
    frameworks: ["Flutter", "Firebase"],
    stateManagement: ["Provider", "BLoC", "MobX", "GetX"],
    tools: ["Visual Studio Code", "Android Studio", "GitHub", "Cursor", "GitHub", "Postman"],
    databases: ["Firebase Firestore", "SQLite"],
    specialties: ["Cross-platform Development", "Performance Optimization", "Team Leadership", "Scalable Architecture", "Real-time Applications", "API Integration"]
  },

  experience: [
    {
      id: "practically",
      company: "Practically",
      role: "Senior Mobile Engineer",
      location: "Hyderabad, India",
      period: "May 2023 – Jul 2025",
      status: "previous",
      highlights: [
        "Developed educational collaboration platform for Android, iOS, Windows, and IFP devices",
        "Implemented real-time session sync and external storage access",
        "Built Canvas JSON import/export features for content creation",
        "Used BLoC state management and auto_route for navigation",
        "Optimized memory management using isolates to reduce crashes",
        "Integrated analytics improving feature adoption by 20%",
        "Automated builds via GitHub Actions",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      id: "freelance",
      company: "Freelance (Blazon Labs)",
      role: "Flutter Developer",
      location: "Remote",
      period: "Oct 2022 – Mar 2023",
      status: "previous",
      highlights: [
        "Developed a real-time vehicle tracking app for logistics, showing live location, speed, fuel, status, and trip history",
        "Integrated Google Maps API with marker details, polyline routes, and live tracking updates every 2 seconds",
        "Built a hierarchical filter system to segment vehicles based on ownership and status using optimized query logic and lazy rendering for performance",
        "Applied real-time filtering on the map view to visualize only selected vehicle states (e.g., moving, idle), improving operator response efficiency",
        "Designed a scalable architecture using BLoC, integrating REST APIs and efficient state management to handle frequent live data updates",
        "Optimized UI responsiveness for both low-end and high-end devices, improving map rendering performance",
        "Worked closely with the client to refine features based on operational use cases and logistics needs"
      ]
    },
    {
      id: "spider-web",
      company: "Spider Web Technologies",
      role: "Senior Mobile Application Developer",
      location: "Chandigarh, India",
      period: "Dec 2021 – Aug 2022",
      status: "previous",
      highlights: [
        "Built music streaming app with 50K+ users and 10K+ tracks",
        "Developed medical app for appointment booking",
        "Created university management app for students",
        "Used clean architecture and Provider for state management",
        "Collaborated with UI/UX designers"
      ]
    },
    {
      id: "a2-technosoft",
      company: "A2 Technosoft",
      role: "Senior Mobile Application Developer",
      location: "Jaipur, India",
      period: "Jun 2021 – Dec 2021",
      status: "previous",
      highlights: [
        "Built e-commerce B2B/B2C app with online payments",
        "Implemented push notifications using FCM",
        "Optimized app startup time with lazy-loaded widgets",
        "Integrated in-app purchases using Razorpay"
      ]
    },
    {
      id: "blueaccel",
      company: "BlueAccel Softwares",
      role: "Flutter Developer",
      location: "Hyderabad, India",
      period: "Jun 2020 – Mar 2021",
      status: "early-career",
      highlights: [
        "Built productivity app for blog/video learners",
        "Created offline support using local caching",
        "Designed UI with Material Design principles",
        "Used Firebase Authentication with OTP",
        "Published app on Play Store"
      ]
    }
  ],

  projects: [
    {
      id: "educational-platform",
      name: "Educational Collaboration Platform",
      description: "Multi-platform educational collaboration app for teachers and students with real-time sync capabilities and interactive tools",
      technologies: ["Flutter", "BLoC", "Firebase", "Canvas API", "Real-time Sync"],
      icon: "graduation-cap",
      metrics: "Multi-platform (Android, iOS, Windows, IFP)",
      color: "cyan"
    },
    {
      id: "music-streaming",
      name: "Music Streaming Application",
      description: "Full-stack music streaming platform serving 50K+ users with 10K+ tracks, robust playback features, and user management",
      technologies: ["Flutter", "Provider", "Audio APIs", "Backend Services"],
      icon: "music",
      metrics: "50K+ Users, 10K+ Tracks",
      color: "purple"
    },
    {
      id: "ecommerce-platform",
      name: "E-commerce Platform",
      description: "Comprehensive B2B/B2C e-commerce solution with integrated payment gateway, order management, and inventory tracking",
      technologies: ["Flutter", "Razorpay", "Firebase", "Payment Integration"],
      icon: "shopping-cart",
      metrics: "B2B/B2C, Payment Gateway",
      color: "emerald"
    },
    {
      id: "medical-app",
      name: "Healthcare Management App",
      description: "Comprehensive healthcare application enabling appointment booking, doctor consultations, and secure patient communication",
      technologies: ["Flutter", "Healthcare APIs", "Security", "Real-time Chat"],
      icon: "stethoscope",
      metrics: "Appointments, Consultations",
      color: "red"
    },
    {
      id: "university-management",
      name: "University Management System",
      description: "Complete university management solution with timetables, announcements, assignments, attendance tracking, and student portal",
      technologies: ["Flutter", "Provider", "Analytics", "Student Portal"],
      icon: "university",
      metrics: "Student Management",
      color: "indigo"
    },
    {
      id: "productivity-app",
      name: "Productivity & Learning App",
      description: "Productivity application for blog and video learners with offline support, synchronization capabilities, and progress tracking",
      technologies: ["Flutter", "MobX", "Offline Sync", "Progress Tracking"],
      icon: "tasks",
      metrics: "Offline Support, Sync",
      color: "orange"
    }
  ],

  achievements: [
    "Successfully built applications serving 50K+ active users",
    "Improved feature adoption by 20% through analytics-driven development",
    "Significantly reduced app crash rates through performance optimization",
    "Led cross-functional development teams and mentored junior developers",
    "Published multiple applications on app stores with positive user ratings",
    "Implemented automated CI/CD pipelines for continuous delivery"
  ],

  education: [
    {
      degree: "Master's in Computer Application",
      institution: "JECRC University",
      location: "Jaipur, India",
      year: "May 2023"
    },
    {
      degree: "Bachelor's in Computer Application",
      institution: "JECRC University",
      location: "Jaipur, India",
      year: "May 2019"
    }
  ]
};
