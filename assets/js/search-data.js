// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/michael-eniolade.github.io/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my software engineering and data science projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A collection of my GitHub repositories and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Mentoring, coaching, and community teaching experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/michael-eniolade.github.io/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/michael-eniolade.github.io/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/michael-eniolade.github.io/blog/";
              },
            },{id: "post-integrating-llms-into-electronic-health-records",
        
          title: "Integrating LLMs into Electronic Health Records",
        
        description: "How large language models can enhance EHR systems for better patient engagement and clinical education.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/michael-eniolade.github.io/blog/2026/llms-electronic-health-records/";
          
        },
      },{id: "post-generative-ai-and-llms-in-u-s-healthcare-opportunities-and-challenges",
        
          title: "Generative AI and LLMs in U.S. Healthcare: Opportunities and Challenges",
        
        description: "Exploring how generative AI and large language models can transform patient engagement and policy development in the U.S. healthcare system.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/michael-eniolade.github.io/blog/2026/generative-ai-healthcare/";
          
        },
      },{id: "post-responsible-ai-for-healthcare-resource-allocation",
        
          title: "Responsible AI for Healthcare Resource Allocation",
        
        description: "Designing AI systems that optimize healthcare resource allocation while maintaining fairness and transparency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/michael-eniolade.github.io/blog/2026/responsible-ai-healthcare/";
          
        },
      },{id: "post-stepshield-rethinking-intervention-strategies-for-ai-agents",
        
          title: "StepShield: Rethinking Intervention Strategies for AI Agents",
        
        description: "A deep dive into our research on determining when — not whether — to intervene on rogue AI agents.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/michael-eniolade.github.io/blog/2026/stepshield-rogue-agents/";
          
        },
      },{id: "post-building-production-ml-pipelines-with-pyspark-and-airflow",
        
          title: "Building Production ML Pipelines with PySpark and Airflow",
        
        description: "Lessons learned from building scalable machine learning pipelines using PySpark, Airflow, and cloud-native tools.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/michael-eniolade.github.io/blog/2025/building-ml-pipelines/";
          
        },
      },{id: "books-upcoming-book-by-michael-eniolade",
          title: 'Upcoming Book by Michael Eniolade',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/michael-eniolade.github.io/books/the_godfather/";
            },},{id: "news-joined-mercor-intelligence-as-a-senior-software-engineer-working-on-ai-coding-model-evaluation-and-swe-bench-pro-v2-annotation",
          title: 'Joined Mercor Intelligence as a Senior Software Engineer, working on AI coding model...',
          description: "",
          section: "News",},{id: "news-co-authored-paper-stepshield-when-not-whether-to-intervene-on-rogue-agents-published-on-arxiv-2601-22136",
          title: 'Co-authored paper StepShield: When, Not Whether to Intervene on Rogue Agents published on...',
          description: "",
          section: "News",},{id: "news-published-multiple-research-articles-on-generative-ai-and-llms-for-healthcare-including-patient-engagement-ehr-integration-and-responsible-ai-for-resource-allocation",
          title: 'Published multiple research articles on Generative AI and LLMs for healthcare, including patient...',
          description: "",
          section: "News",},{id: "projects-health-syntra",
          title: 'Health Syntra',
          description: "AI-powered health analytics platform with LLM-based symptom analysis using Google&#39;s Gemini 2.0 Flash.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/1_project/";
            },},{id: "projects-diamond-price-predictor",
          title: 'Diamond Price Predictor',
          description: "End-to-end ML pipeline to predict diamond prices based on carat, cut, color, and clarity.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/2_project/";
            },},{id: "projects-mdus-system",
          title: 'MDUS System',
          description: "AI-powered document processing system using LayoutLMv3 and Donut OCR for medical and business documents.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/3_project/";
            },},{id: "projects-ai-news-generator",
          title: 'AI News Generator',
          description: "End-to-end AI-powered news aggregation and personalization platform with email-ready briefings.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/4_project/";
            },},{id: "projects-loan-eligibility-predictor",
          title: 'Loan Eligibility Predictor',
          description: "Machine learning model to predict loan eligibility based on applicant data and financial history.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/5_project/";
            },},{id: "projects-stepshield",
          title: 'StepShield',
          description: "Research on AI agent safety — determining when, not whether, to intervene on rogue agents.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/6_project/";
            },},{id: "projects-breachvector",
          title: 'BreachVector',
          description: "Cybersecurity threat analysis and breach detection platform for proactive security monitoring.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/7_project/";
            },},{id: "projects-rl-inventory-optimization",
          title: 'RL Inventory Optimization',
          description: "Deep reinforcement learning agents (PPO &amp; DQN) trained to optimize inventory management and minimize stockouts.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/8_project/";
            },},{id: "projects-orbit-wars",
          title: 'Orbit Wars',
          description: "Kaggle competition — rule-based AI agent for a real-time 2D planetary strategy game with orbital mechanics, comet interception, and multi-phase decision logic.",
          section: "Projects",handler: () => {
              window.location.href = "/michael-eniolade.github.io/projects/9_project/";
            },},{id: "teachings-python-development-coach",
          title: 'Python Development Coach',
          description: "Volunteered as a Python development coach at Django Girls San Diego, guiding beginners through building their first web application using Python and Django in a supportive, hands-on workshop environment.",
          section: "Teachings",handler: () => {
              window.location.href = "/michael-eniolade.github.io/teachings/data-science-fundamentals/";
            },},{id: "teachings-it-career-mentorship",
          title: 'IT Career Mentorship',
          description: "Serving as a mentor at NPower, providing guidance, technical coaching, and career support to aspiring IT professionals in data engineering, software quality assurance, and medical claims systems.",
          section: "Teachings",handler: () => {
              window.location.href = "/michael-eniolade.github.io/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/michael-eniolade.github.io/assets/pdf/ME_Software_Data_Engineer.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%63%68%61%65%6C%65%6E%69%6F%6C%61%64%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MichaelEnny", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michael-eniolade", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/michael-eniolade.github.io/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=OubQ498AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
