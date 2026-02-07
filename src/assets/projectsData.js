import project1_img from '../assets/dumb.png'
import project2_img from '../assets/medlink.png'
import project3_img from '../assets/student.png'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

export const projectsData = [
    {
        id: 1,
        title: "AI Dumb ↔ Smart Translator",
        description: "Transform any text into different communication styles instantly with DUMB - the ultimate text transformation tool for fun and creativity.",
        image: project1_img,
        techStack: ["React", "Node.js", "Gemini API", "Tailwind CSS" , "Framer Motion"],
        projectType: "Full Stack",
        completedYear: "2026",
        status: "Live",
        githubLink: "https://github.com/devang9890/DUMB",
        liveLink: "https://dumbass-umber.vercel.app/",
        features: [
            "AI-powered text transformation",
            "Multiple communication styles",
            "Real-time processing",
            "Copy & Share functionality"
        ]
    },
    {
        id: 2,
        title: "MedLink",
        description: "MedLink is a smart healthcare platform that connects patients and doctors through seamless appointment booking, real-time availability, and digital medical interactions.",
        image: project2_img,
        techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        projectType: "Full Stack",
        completedYear: "2025",
        status: "In Progress",
        githubLink: "https://github.com/devang9890/MEDLINK",
        liveLink: "https://medlink-omega.vercel.app/",
        features: [
            "Doctor profile management",
            "Appointment scheduling",
            "Real-time notifications",
            "Payment integration",
            "Patient history tracking"
        ]
    },
    {
        id: 3,
        title: "AI-Driven-Student-Analytics",
        description: "AI-Driven-Student-Analytics uses machine learning to analyze student data, identify performance patterns, and predict at‑risk outcomes. It likely provides interactive dashboards and actionable insights for educators and administrators.",
        image: project3_img,
        techStack: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "Chart.js", "Flask", "pandas", "NumPy", "scikit-learn", "MongoDB"],
        projectType: "Full Stack + AI",
        completedYear: "2026",
        status: "Live",
        githubLink: "https://github.com/devang9890/AI-Driven-Student-Analytics",
        liveLink: "https://ai-driven-student-analytics.vercel.app/",
        features: [
            "Team collaboration",
            "Real-time updates",
            "Drag & drop interface",
            "Progress analytics",
            "Task prioritization"
        ]
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics with hourly updates.",
        image: project4_img,
        techStack: ["React", "OpenWeather API", "Leaflet.js", "Tailwind CSS"],
        projectType: "Frontend",
        completedYear: "2024",
        status: "Live",
        githubLink: "https://github.com/username/weather-app",
        liveLink: "https://example-weather.com",
        features: [
            "Location-based forecasts",
            "Interactive maps",
            "Hourly & weekly forecasts",
            "Weather alerts",
            "Responsive design"
        ]
    },
    {
        id: 5,
        title: "Blog Platform",
        description: "A content management system for blogs with rich text editor, user roles, and SEO optimization features for modern bloggers.",
        image: project5_img,
        techStack: ["React", "Node.js", "MongoDB", "Quill", "JWT Auth"],
        projectType: "Full Stack",
        completedYear: "2024",
        status: "Live",
        githubLink: "https://github.com/username/blog-platform",
        liveLink: "https://example-blog.com",
        features: [
            "Rich text editor",
            "User authentication",
            "Role-based access",
            "SEO optimization",
            "Comment system"
        ]
    },
    {
        id: 6,
        title: "Social Media Clone",
        description: "A social networking platform with user profiles, posts, comments, likes, and real-time messaging capabilities.",
        image: project6_img,
        techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
        projectType: "Full Stack",
        completedYear: "2025",
        status: "In Progress",
        githubLink: "https://github.com/username/social-clone",
        liveLink: "https://example-social.com",
        features: [
            "User profiles",
            "Post creation & sharing",
            "Real-time messaging",
            "Like & comment system",
            "Friend connections"
        ]
    },
    {
        id: 7,
        title: "Chat Application",
        description: "A real-time chat application with private messaging, group chats, file sharing, and message encryption for secure communication.",
        image: project1_img,
        techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Encryption"],
        projectType: "Full Stack",
        completedYear: "2025",
        status: "In Progress",
        githubLink: "https://github.com/username/chat-app",
        liveLink: "https://example-chat.com",
        features: [
            "Real-time messaging",
            "Group chats",
            "File sharing",
            "Message encryption",
            "User presence tracking"
        ]
    },
    {
        id: 8,
        title: "Recipe Finder",
        description: "A recipe discovery app with search filters, ingredient tracking, meal planning, and nutritional information for healthy eating.",
        image: project2_img,
        techStack: ["React", "Node.js", "MongoDB", "Spoonacular API", "Chart.js"],
        projectType: "Full Stack",
        completedYear: "2024",
        status: "Live",
        githubLink: "https://github.com/username/recipe-finder",
        liveLink: "https://example-recipe.com",
        features: [
            "Recipe search",
            "Ingredient filtering",
            "Meal planning",
            "Nutritional info",
            "Save favorites"
        ]
    },
    {
        id: 9,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout logging, progress analytics, and goal setting for fitness enthusiasts.",
        image: project3_img,
        techStack: ["React Native", "Node.js", "Firebase", "Charts"],
        projectType: "Mobile + Backend",
        completedYear: "2025",
        status: "Live",
        githubLink: "https://github.com/username/fitness-tracker",
        liveLink: "https://example-fitness.com",
        features: [
            "Workout logging",
            "Progress analytics",
            "Goal tracking",
            "Calorie counter",
            "Exercise library"
        ]
    }
]

export default projectsData
