import mivi1 from "../assets/images/mivi/mivi-1.png";
import mivi2 from "../assets/images/mivi/mivi-2.png";
import mivi3 from "../assets/images/mivi/mivi-3.png";
import mivi4 from "../assets/images/mivi/mivi-4.png";
import mivi5 from "../assets/images/mivi/mivi-5.png";
import banner from "../assets/images/mivi/banner.png";

import vlBanner from "../assets/images/vibrant-living/banner.png";
import vl1 from "../assets/images/vibrant-living/vl-1.png";
import vl2 from "../assets/images/vibrant-living/vl-2.png";
import vl3 from "../assets/images/vibrant-living/vl-3.png";

import emailerBanner from "../assets/images/emailers/banner.png";
import emailer1 from "../assets/images/emailers/emailer-1.png";
import emailer2 from "../assets/images/emailers/emailer-2.png";
import emailer3 from "../assets/images/emailers/emailer-3.png";
import emailer4 from "../assets/images/emailers/emailer-4.png";

import tdaBanner from "../assets/images/team-drive-away/banner.png";
import tda1 from "../assets/images/team-drive-away/tda-1.png";
import tda2 from "../assets/images/team-drive-away/tda-2.png";
import tda3 from "../assets/images/team-drive-away/tda-3.png";
import tda4 from "../assets/images/team-drive-away/tda-4.png";
import tda5 from "../assets/images/team-drive-away/tda-5.png";

import updatesBanner from "../assets/images/maintainance-updates/banner.png";
import justUpdates1 from "../assets/images/maintainance-updates/just-updates-1.png";
import justUpdates2 from "../assets/images/maintainance-updates/just-updates-2.png";
import justUpdates3 from "../assets/images/maintainance-updates/just-updates-3.png";
import justUpdates4 from "../assets/images/maintainance-updates/just-updates-4.png";

import apexBanner from "../assets/images/apex-design-systems/banner.png";
import apex1 from "../assets/images/apex-design-systems/apex-design-systems-1.png";
import apex2 from "../assets/images/apex-design-systems/apex-design-systems-2.png";
import apex3 from "../assets/images/apex-design-systems/apex-design-systems-3.png";
import apex4 from "../assets/images/apex-design-systems/apex-design-systems-4.png";
import apex5 from "../assets/images/apex-design-systems/apex-design-systems-5.png";

import keusBanner from "../assets/videos/keus/banner.png";
import keusVid1 from "../assets/videos/keus/keus-1.mov";
import keusVid2 from "../assets/videos/keus/keus-2.mov";
import keusVid3 from "../assets/videos/keus/keus-3.mov";

import adminBanner from "../assets/images/admin-screens/banner.png";
import admin1 from "../assets/images/admin-screens/admin-1.png";
import admin2 from "../assets/images/admin-screens/admin-2.png";
import admin3 from "../assets/images/admin-screens/admin-3.png";
import admin4 from "../assets/images/admin-screens/admin-4.png";
import admin5 from "../assets/images/admin-screens/admin-5.png";
import admin6 from "../assets/images/admin-screens/admin-6.png";

import sdkBanner from "../assets/images/sdk-project/banner.png";
import sdk1 from "../assets/images/sdk-project/project-1.png";
import sdk2 from "../assets/images/sdk-project/project-2.png";
import sdk3 from "../assets/images/sdk-project/project-3.png";
import sdk4 from "../assets/images/sdk-project/project-4.png";
import sdk5 from "../assets/images/sdk-project/project-5.png";
import sdk6 from "../assets/images/sdk-project/project-6.png";
import sdk7 from "../assets/images/sdk-project/project-7.png";
import sdkMobile from "../assets/images/sdk-project/project-mobile.png";

export const projectsData = [
  {
    id: 1, // This is the first real project
    title: "Mivi Official Website",
    subtitle: "Product Pages & Dynamic Content",
    description: [
      "As a key developer for Mivi, a leading Indian audio brand, I was responsible for building and maintaining pixel-perfect product pages, dynamic landing pages for sales events, and implementing crucial design updates across their official website.",
      "Using a static site generator (Eleventy) ensured maximum performance and SEO, while HTML, CSS, and JavaScript were used to create a responsive and engaging user experience that aligns with Mivi's modern brand identity.",
    ],
    imageUrl: banner,
    banner: banner,
    tags: ["Eleventy (11ty)", "HTML5", "CSS3", "JavaScript"],
    link: "/projects/mivi-official-website", // Unique link for this project page

    // --- Detailed Content for the Project Page ---
    details: {
      about: [
        "Mivi is a fast-growing direct-to-consumer brand in India, specializing in high-quality audio electronics like earphones, speakers, and soundbars. Their website is a critical touchpoint for customers, serving as both a product showcase and an e-commerce platform.",
        "My role was to translate the design team's vision into functional, high-performance web pages. This involved a wide range of tasks, from creating brand new product launch pages and time-sensitive sales event pages to implementing subtle UI/UX improvements and ensuring all content was fully responsive for a mobile-first audience.",
      ],
      responsibilities: [
        "Developed pixel-perfect, responsive product pages from Figma designs.",
        "Built and deployed new landing pages for marketing campaigns and sales events (e.g., Black Friday).",
        "Implemented front-end updates and design revisions across the existing site.",
        "Managed banner updates and other dynamic content to keep the site fresh and relevant.",
        "Ensured cross-browser compatibility and optimal page load speeds using the Eleventy static site generator.",
      ],
      images: [mivi1, mivi2, mivi3, mivi4, mivi5],

      // --- Enhanced Narrative Blocks ---
      blocks: [
        {
          type: "text",
          title: "Crafting a High-Impact User Experience",
          body: "The primary goal was to create a visually striking and informative experience for Mivi's customers. Every product page needed to not only look great but also load instantly and guide the user seamlessly through the product's features and benefits.",
        },
        {
          type: "image",
          src: mivi1,
          caption:
            "Detailed feature sections for a new earbud launch, highlighting key specs like playtime and gaming mode.",
        },
        {
          type: "text",
          title: "Driving Sales with Dynamic Campaigns",
          body: "A major part of my role involved rapidly building and deploying landing pages for key sales events. This required creating responsive layouts that looked perfect on both desktop and mobile to maximize conversion during high-traffic periods like the Black Friday sale.",
        },
        {
          type: "image",
          src: mivi2,
          caption:
            "The Black Friday sales event page, shown in both desktop and mobile views to ensure a consistent user experience.",
        },
        {
          type: "text",
          title: "Engaging the Community",
          body: "Beyond product sales, we also worked on initiatives to engage the design community. I built the landing and registration pages for events like the 'Big Design Contest,' ensuring the forms were intuitive and the event details were presented clearly.",
        },
        {
          type: "image",
          src: mivi3,
          caption:
            "Landing page and registration form for a community design contest.",
        },
        {
          type: "text",
          title: "Expanding the Product Line",
          body: "As Mivi expanded into new product categories like smartwatches, I was tasked with creating new page templates that could accommodate different types of content and feature sets while maintaining the core brand identity.",
        },
        {
          type: "image",
          src: mivi4,
          caption:
            "The newly launched smartwatch product page, detailing its various features and benefits.",
        },
        {
          type: "text",
          title: "Refining the Details",
          body: "Close collaboration with the design team was essential. We worked together to ensure every element, from color palettes to customer testimonials, was implemented with pixel-perfect precision to strengthen the brand's premium feel.",
        },
        {
          type: "image",
          src: mivi5,
          caption:
            "A detailed look at the DuoPods A850 page, showcasing color options, reviews, and technical specifications.",
        },
      ],
      videos: [], // Add video URLs here if you have them
    },
  },
  {
    id: 2,
    title: "Vibrant Living",
    subtitle: "E-Commerce & Brand Experience",
    description: [
      "Contributed to the front-end development of Vibrant Living, a wellness brand, focusing on enhancing the user experience through engaging animations and seamless design updates.",
      "My responsibilities included updating product cards with CSS animations, implementing new UI/UX designs across the website, and ensuring all product SKUs were current and accurately displayed.",
    ],
    imageUrl: vlBanner,
    banner: vlBanner,
    tags: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
    link: "/projects/vibrant-living",

    details: {
      about: [
        "Vibrant Living is a holistic wellness and lifestyle brand with a strong e-commerce presence, physical restaurant locations, and a focus on healthy living. Their website serves as a central hub for their diverse offerings, from gourmet groceries to daily meal plans.",
        "My work focused on elevating the front-end experience. This involved bringing static elements to life with subtle animations, refreshing the UI to match new design mockups, and performing essential content updates to keep the product catalog in sync with their inventory.",
      ],
      responsibilities: [
        "Updated and animated product cards to improve visual appeal and user interaction.",
        "Implemented new design updates and layouts across the entire website.",
        "Managed and updated product SKUs to ensure data accuracy on the front-end.",
        "Enhanced the website's aesthetic with modern, performant CSS animations.",
      ],
      images: [vl1, vl2, vl3],
      blocks: [
        {
          type: "text",
          title: "Building a Cohesive Brand Hub",
          body: "The challenge was to present Vibrant Living's diverse offerings—from events and workshops to their shop and restaurant—in a unified and intuitive way. I worked on the front-end for key landing pages that funnel users to different parts of their ecosystem.",
        },
        {
          type: "image",
          src: vl1,
          caption:
            "Various landing page designs, including the homepage, events page, and a 'Linktree'-style navigation page.",
        },
        {
          type: "text",
          title: "Enhancing the E-Commerce Experience",
          body: "A core part of the project was to make the online shopping experience more dynamic. I implemented new layouts for product category pages and added subtle CSS animations to product cards to make browsing more engaging and interactive.",
        },
        {
          type: "image",
          src: vl2,
          caption:
            "Showcasing the e-commerce section, including gifting, recipes, and various product categories like 'Guilt-Free Snacks'.",
        },
        {
          type: "text",
          title: "Clarity and Information Design",
          body: "From detailed meal plan pages to comprehensive FAQs, a key task was to structure information clearly and elegantly. I translated complex product offerings into clean, easy-to-navigate UI components.",
        },
        {
          type: "image",
          src: vl3,
          caption:
            "Designs for the 'Daily Meal Plans' product page and the Frequently Asked Questions (FAQ) section.",
        },
      ],
      videos: [],
    },
  },
  {
    id: 3,
    title: "HTML Email Templates",
    subtitle: "Cross-Client Responsive Design",
    description: [
      "Developed a series of high-fidelity, responsive HTML email templates for various marketing and transactional campaigns.",
      "This work required overcoming the significant technical limitations of email clients by using table-based layouts, inline CSS, and a limited set of HTML tags to ensure consistent rendering across platforms like Gmail, Outlook, and Apple Mail.",
    ],
    imageUrl: emailerBanner,
    banner: emailerBanner,
    tags: ["HTML Tables", "Inline CSS", "Responsive Email Design"],
    link: "/projects/html-email-templates",

    details: {
      about: [
        "Coding for email is a different world from modern web development. Unlike browsers that adhere to web standards, email clients like Outlook have notoriously poor support for modern CSS and HTML. This creates a unique challenge: how to build a beautiful, responsive design using techniques that are decades old.",
        "The solution lies in a defensive and meticulous approach. Every layout must be constructed with nested HTML tables, and styles must be inlined directly onto elements. This project showcases the ability to deliver pixel-perfect results despite these severe technical constraints, a crucial skill for any comprehensive marketing or e-commerce team.",
      ],
      responsibilities: [
        "Hand-coded responsive email templates using table-based layouts.",
        "Wrote and inlined CSS for maximum compatibility across dozens of email clients.",
        "Tested templates rigorously on various devices and platforms to ensure consistent rendering.",
        "Collaborated with marketing teams to create both promotional and transactional emails.",
      ],
      images: [emailer1, emailer2, emailer3, emailer4],
      blocks: [
        {
          type: "text",
          title: "The Challenge: Universal Compatibility",
          body: "The primary goal of any email campaign is to look perfect in every inbox. I developed transactional emails, like these purchase confirmations, which needed to be clear, professional, and reliable, no matter where they were opened.",
        },
        {
          type: "image",
          src: emailer1,
          caption:
            "Examples of transactional subscription confirmation emails for different brands.",
        },
        {
          type: "text",
          title: "Designing for Impact",
          body: "Promotional emails require a strong visual hook. I worked on campaigns for brands like Mivi and Ixigo, creating dark-mode compatible, visually rich emails that drive user action, all while working within the restrictive environment of HTML email.",
        },
        {
          type: "image",
          src: emailer2,
          caption:
            "A promotional offer email created for a Mivi x Ixigo brand collaboration.",
        },
        {
          type: "text",
          title: "Corporate and Brand Storytelling",
          body: "Even complex brand narratives and product showcases can be translated into the email format. This required careful planning of table structures to create clean, multi-column layouts that feel modern and professional.",
        },
        {
          type: "image",
          src: emailer3,
          caption:
            "A corporate email showcasing a company's technology, values, and product line.",
        },
        {
          type: "text",
          title: "Driving Product Launches",
          body: "For product announcements, the email is a critical first touchpoint. I created a series of launch emails for Mivi's 'Model E' smartwatch, from the initial 'Coming Soon' teaser to the final 'Order Now' call-to-action, building excitement and driving sales.",
        },
        {
          type: "image",
          src: emailer4,
          caption:
            "A two-part email campaign for a new product launch, from teaser to the official release.",
        },
      ],
      videos: [],
    },
  },

  {
    id: 4,
    title: "Team DriveAway Website Rebuild",
    subtitle: "Svelte & Headless CMS Migration",
    description: [
      "Led the complete rebuild of the Team DriveAway website, migrating it from an outdated system to a modern, performant stack using Svelte and the Apex headless CMS.",
      "Architected a powerful, component-driven system where 3-4 similar-looking sections across the site were consolidated into single, reusable Svelte components, dramatically improving maintainability and development speed.",
    ],
    imageUrl: tdaBanner,
    banner: tdaBanner,
    tags: ["Svelte", "Reusable Components", "Headless CMS", "HTML5", "CSS3"],
    link: "/projects/team-driveaway",

    details: {
      about: [
        "Team DriveAway, a major player in the vehicle transport industry, needed to modernize their web presence. Their existing site was difficult to update and lacked the performance of a modern web application. The project involved a full-scale migration and a complete front-end rebuild.",
        "The core of the project was a strategic shift to a component-based architecture using Svelte. By identifying recurring layout patterns, we were able to build a small library of highly flexible components that could be used to construct dozens of unique pages. All content was then decoupled and managed through the Apex CMS, giving the client full control over their website's content.",
      ],
      responsibilities: [
        "Rebuilt the entire front-end of the website using Svelte.",
        "Migrated all website content from the previous system to the Apex headless CMS.",
        "Designed and developed a library of reusable, configurable Svelte components.",
        "Ensured the new site was fully responsive and a pixel-perfect match to the new design.",
        "Collaborated with the client to train them on using the new CMS.",
      ],
      images: [tda1, tda2, tda3, tda4, tda5],
      blocks: [
        {
          type: "text",
          title: "Modernizing a Legacy Platform",
          body: "The project began with a complete overhaul of the user experience. The new design was clean, professional, and mobile-first, requiring a rebuild from the ground up to meet modern standards.",
        },
        {
          type: "image",
          src: tda2,
          caption: "The new, fully responsive hero section for the homepage.",
        },
        {
          type: "text",
          title: "The Power of Reusable Components",
          body: "The key to the project's success was the component architecture. Instead of building dozens of static pages, I created a system of flexible components. For example, a single 'multi-column icon block' component could be configured with different data from the CMS to create sections for services, benefits, or features, saving hundreds of hours of development time.",
        },
        {
          type: "image",
          src: tda4,
          caption:
            "A breakdown of the various reusable components, such as testimonial blocks, multi-column layouts, and image blocks.",
        },
        {
          type: "text",
          title: "Building a Scalable System",
          body: "This component-driven approach allowed us to rapidly build out a wide variety of pages, from detailed service explanations and driver recruitment forms to contact pages and FAQs, all while maintaining a consistent design language.",
        },
        {
          type: "image",
          src: tda3,
          caption:
            "A collage of different internal pages, all constructed from the same library of Svelte components.",
        },
        {
          type: "text",
          title: "Empowering the Client with a Headless CMS",
          body: "By migrating all content to the Apex CMS, we empowered the Team DriveAway marketing team to manage their own site. They could now update text, add new driver testimonials, or change images without needing to write a single line of code.",
        },
        {
          type: "image",
          src: tda1,
          caption:
            "More examples of the site's pages, including the driver recruitment page and the detailed FAQ section.",
        },
        {
          type: "text",
          title: "Ensuring a Consistent Experience",
          body: "Finally, every component, from the header to the footer, was designed to be fully responsive, ensuring a seamless and professional experience for users on any device.",
        },
        {
          type: "image",
          src: tda5,
          caption:
            "Different responsive variations of the website's header component.",
        },
      ],
      videos: [],
    },
  },
  {
    id: 5,
    title: "Ongoing Website Maintenance",
    subtitle: "Feature Updates & Bug Fixes",
    description: [
      "Provided consistent front-end support for multiple clients, including Aasan Will and Old School, handling a variety of maintenance tasks and feature updates on their live Svelte websites.",
      "This role required quickly adapting to existing codebases, implementing precise UI/UX tweaks, and ensuring the stability and performance of the production websites.",
    ],
    imageUrl: updatesBanner,
    banner: updatesBanner,
    tags: ["HTML5", "CSS3", "Svelte"],
    link: "/projects/website-maintenance",

    details: {
      about: [
        "Beyond building new sites from scratch, a critical part of a front-end developer's role is maintaining and improving existing ones. This project highlights my work with established clients like Aasan Will (a will-writing service) and Old School (an e-commerce brand), where I was tasked with making targeted updates to their live websites.",
        "Working on a live production site requires a careful and precise approach. The goal is to seamlessly integrate new features or fix issues without disrupting the user experience. This involves reading and understanding an existing Svelte codebase, collaborating with the team, and deploying changes efficiently.",
      ],
      responsibilities: [
        "Implemented minor UI/UX design updates based on client feedback and new mockups.",
        "Updated content and functionalities on various pages, including blogs and product details.",
        "Identified and fixed front-end bugs to improve site stability.",
        "Ensured all updates were responsive and worked flawlessly across different browsers.",
      ],
      images: [justUpdates1, justUpdates2, justUpdates3, justUpdates4],
      blocks: [
        {
          type: "text",
          title: "Refining the User Journey for Aasan Will",
          body: "For Aasan Will, a key task was to improve the clarity and user flow of their informational pages. This included updating the layout of their blog and ensuring the main landing page clearly communicated their value proposition.",
        },
        {
          type: "image",
          src: justUpdates4,
          caption:
            "The primary landing page for Aasan Will, India's favorite will writing service.",
        },
        {
          type: "image",
          src: justUpdates2,
          caption:
            "Updates to the blog section, improving readability and content filtering.",
        },
        {
          type: "text",
          title: "Enhancing the E-commerce Experience for Old School",
          body: "With Old School, the focus was on refining the e-commerce experience. I was responsible for making UI tweaks to the product detail pages and ensuring the homepage effectively showcased their featured products and brand story.",
        },
        {
          type: "image",
          src: justUpdates3,
          caption:
            "Desktop and mobile views of the Old School homepage, showing featured products and brand imagery.",
        },
        {
          type: "image",
          src: justUpdates1,
          caption:
            "A detailed look at a product page, showcasing the 'Red Sandalwood & Saffron Ritual' with responsive layouts for mobile.",
        },
      ],
      videos: [],
    },
  },

  {
    id: 6,
    title: "Apex Design Systems",
    subtitle: "Reusable Svelte Component Library",
    description: [
      "Architected and built a comprehensive, reusable component library in SvelteKit to serve as the foundation for future admin panels and dashboards.",
      "Each component was built with TypeScript for type safety, rigorously tested for edge cases, and documented in Storybook to create a single source of truth for the development team, drastically accelerating future project timelines.",
    ],
    imageUrl: apexBanner,
    banner: apexBanner,
    tags: [
      "SvelteKit",
      "TypeScript",
      "Design Systems",
      "Storybook",
      "Reusable Components",
    ],
    link: "/projects/apex-design-systems",

    details: {
      about: [
        "To streamline the development of future internal tools, we invested in creating a dedicated design system, named Apex. The goal was to build a robust library of common UI components (buttons, forms, tables, etc.) that could be reused across multiple projects, ensuring visual consistency and saving development time.",
        "This wasn't just about building UI elements; it was about creating a scalable and maintainable system. We used SvelteKit for its performance, TypeScript for robust, error-free code, and integrated Storybook to provide interactive documentation. This allowed developers to see every component in every state, making it incredibly easy to build new features quickly and reliably.",
      ],
      responsibilities: [
        "Developed a wide range of reusable UI components in Svelte and SvelteKit.",
        "Used TypeScript to define component props and ensure strict type safety.",
        "Wrote comprehensive documentation for each component in Storybook.",
        "Considered and tested for numerous edge cases to ensure components were robust.",
        "Collaborated with the design team to ensure the system met all UI/UX requirements.",
      ],
      images: [apex1, apex2, apex3, apex4, apex5],
      blocks: [
        {
          type: "text",
          title: "Establishing a Foundation for Consistency",
          body: "The core of the design system is its set of foundational components. We started with the most critical element: the button. We defined variants (primary, secondary, destructive), states (default, hover, disabled, loading), and sizes to cover every possible use case.",
        },
        {
          type: "image",
          src: apex1,
          caption:
            "The complete matrix of button variants, states, and sizes defined within the design system.",
        },
        {
          type: "text",
          title: "Interactive Documentation with Storybook",
          body: "A design system is only as good as its documentation. We integrated Storybook to create an interactive playground for our components. This allows developers to test props, view different states, and even see code snippets, making the library incredibly easy to adopt.",
        },
        {
          type: "image",
          src: apex2,
          caption:
            "The Storybook 'Docs' view for the Button component, showing its properties, events, and stories.",
        },
        {
          type: "image",
          src: apex3,
          caption:
            "Storybook documentation for another complex component, the 'ActivitySlot'.",
        },
        {
          type: "text",
          title: "Building Complex, Composable Components",
          body: "Beyond simple elements, the system includes more complex, composable components like side navigation, form inputs, and various card styles. Each was designed to be flexible and reusable across different dashboard layouts.",
        },
        {
          type: "image",
          src: apex4,
          caption:
            "A collection of more complex components, including side navigation tabs, form elements, and product cards.",
        },
        {
          type: "text",
          title: "Solving Real-World UI Problems",
          body: "The system was built to solve real-world problems. Components like the 'Picker' were designed to handle complex user interactions, such as selecting multiple items from a list, with built-in search and state management.",
        },
        {
          type: "image",
          src: apex5,
          caption:
            "Examples of the highly functional 'Picker' component in various use-case scenarios.",
        },
      ],
      videos: [],
    },
  },
  {
    id: 7,
    title: "Keus Smart Home",
    subtitle: "Advanced GSAP & Scroll-Based Animations",
    description: [
      "Contributed to the highly cinematic and interactive website for Keus, a premium smart home automation brand. My focus was on implementing complex, scroll-based animations using the GreenSock Animation Platform (GSAP).",
      "A key technique involved programmatically converting videos into image sequences using FFmpeg. This allowed for precise, high-performance animations that synchronize with user scrolling, creating a seamless and immersive 'video-scrubbing' effect.",
    ],
    imageUrl: keusBanner,
    banner: keusBanner,
    tags: ["GSAP", "JavaScript", "Animation", "FFmpeg", "HTML5", "CSS3"],
    link: "/projects/keus-smart-home",

    details: {
      about: [
        "Keus offers a luxury smart home experience, and their website needed to reflect that same level of sophistication and technological elegance. My contribution was focused on bringing the site to life with fluid, cinematic animations that engage the user and tell a story as they scroll.",
        "The most significant challenge was creating smooth, video-like animations that were also performant and controllable. Instead of embedding heavy video files, I used FFmpeg to convert key product videos into sequences of high-resolution images. Then, using GSAP's ScrollTrigger, I animated these frames based on the user's scroll position, giving them direct control over the 'playback' of the animation. This technique provides the polish of a video with the performance and interactivity of a native web animation.",
      ],
      responsibilities: [
        "Developed complex, scroll-triggered animations using GSAP.",
        "Wrote scripts to automate the conversion of videos into image sequences with FFmpeg.",
        "Integrated the image sequence animations into the website, synchronizing them with page scroll.",
        "Created and animated buttons and other UI elements to match the site's premium aesthetic.",
        "Ensured all animations were performant and smooth across different browsers and devices.",
      ],
      images: [], // This project is video-focused
      blocks: [], // No static image blocks needed
      videos: [keusVid1, keusVid2, keusVid3],
    },
  },
  {
    id: 8,
    title: "Apex Admin Panels",
    subtitle: "Enterprise UI for Apex-Meals & Apex-Travel",
    description: [
      "Successfully executed the development of two complex, data-driven admin panels by leveraging the previously built Apex Design System.",
      "I was responsible for constructing the entire user interface for both the Apex-Meals and Apex-Travel platforms, defining TypeScript data structures, and integrating front-end components with backend APIs to create a seamless operational dashboard.",
    ],
    imageUrl: adminBanner,
    banner: adminBanner,
    tags: [
      "SvelteKit",
      "TypeScript",
      "Apex Design System",
      "JSON",
      "API Integration",
      "SCSS",
    ],
    link: "/projects/apex-admin-panels",

    details: {
      about: [
        "This project represents the successful implementation of the Apex Design System in two real-world, enterprise-level applications. The goal was to rapidly build two separate, fully functional admin panels—one for a meal subscription service (Apex-Meals) and one for a travel agency (Apex-Travel).",
        "By using the pre-built, reusable Svelte components from our design system, we were able to focus on business logic, data handling, and API integration rather than rebuilding UI elements from scratch. My role was to take the design mockups and bring them to life, creating dozens of complex screens for managing departures, payments, staff, customers, and more. This project proves the immense value of a well-architected design system in accelerating development and ensuring consistency.",
      ],
      responsibilities: [
        "Built the entire front-end UI for both the Apex-Meals and Apex-Travel admin panels using the Apex Design System.",
        "Defined and implemented TypeScript interfaces for all JSON data structures to ensure type safety.",
        "Integrated front-end components with RESTful APIs for fetching, creating, updating, and deleting data.",
        "Developed complex, data-heavy views such as tables with filtering, sorting, and pagination.",
        "Ensured a seamless and intuitive user experience for admin staff managing complex operations.",
      ],
      images: [admin1, admin2, admin3, admin4, admin5, admin6],
      blocks: [
        {
          type: "text",
          title: "Data-Dense Dashboards",
          body: "The heart of both admin panels is the main dashboard, designed to give operators a high-level overview of their business at a glance. I built these views to handle and display large amounts of real-time data efficiently.",
        },
        {
          type: "image",
          src: admin1,
          caption:
            "The main dashboard for Apex-Travel, showing upcoming departures, bookings, and revenue data.",
        },
        {
          type: "image",
          src: admin4,
          caption:
            "The dashboard for Apex-Meals, displaying subscription plan purchases and delivery statuses.",
        },
        {
          type: "text",
          title: "Managing Complex Workflows",
          body: "Beyond just displaying data, the panels needed to support complex operational workflows. This included detailed views for managing individual payments, with features like confirmation modals and status updates.",
        },
        {
          type: "image",
          src: admin2,
          caption:
            "The payments management screen, showing a data table, detailed side panel, and a confirmation modal.",
        },
        {
          type: "text",
          title: "Complete CRUD Functionality",
          body: "A core requirement was providing full Create, Read, Update, and Delete (CRUD) functionality for key business entities like staff and customers. I built intuitive forms and modals for all these operations.",
        },
        {
          type: "image",
          src: admin3,
          caption:
            "The staff management interface, showcasing the user list, detail view, and editing form.",
        },
        {
          type: "image",
          src: admin6,
          caption:
            "The customer management screens, including modals for editing details and adding new addresses.",
        },
        {
          type: "text",
          title: "Detailed Views and Edge Cases",
          body: "The system handles a huge amount of detail. I was responsible for creating the UI for deep-diving into specific entities, like viewing all upcoming deliveries for a customer or skipping a meal, and handling all the logic and edge cases involved.",
        },
        {
          type: "image",
          src: admin5,
          caption:
            "Detailed views for managing upcoming customer deliveries in the Apex-Meals dashboard.",
        },
      ],
      videos: [],
    },
  },
  {
    id: 9,
    title: "Apex Meals SDK & Monorepo",
    subtitle: "Multi-Client Web & Mobile Platform",
    description: [
      "Played a pivotal role in a large-scale monorepo that powers multiple, distinct meal subscription clients from a single, unified codebase. My work involved the end-to-end setup and development of unique client websites using SvelteKit.",
      "Responsibilities included client configuration, API integration to fetch meal plans, building custom Svelte components tailored to diverse client designs, and deploying the final applications. I also contributed to the UI development of the accompanying React Native mobile apps.",
    ],
    imageUrl: sdkBanner,
    banner: sdkBanner,
    tags: [
      "SvelteKit",
      "Monorepo",
      "TypeScript",
      "React Native",
      "API Integration",
      "SCSS",
    ],
    link: "/projects/apex-meals-sdk",

    details: {
      about: [
        "This project is a sophisticated Software Development Kit (SDK) structured as a monorepo, designed to efficiently launch and manage numerous white-label meal subscription services. The architecture houses separate applications for web (SvelteKit), Android (React Native), and iOS (React Native) within a single repository, allowing for shared logic and streamlined development.",
        "My primary focus was on the web platform. For each new client, I was responsible for the entire front-end setup. This involved configuring the client's unique branding, fetching their specific meal plans from the central `meals-admin` API, and building all necessary pages—from the homepage and product listings to static pages like 'About Us' and 'Contact.' A key part of this was leveraging SvelteKit's dynamic routing (`[slug]`, `[id]`) to create scalable product detail pages. I also had the opportunity to contribute to the cross-platform effort by implementing UI components for the React Native mobile applications.",
      ],
      responsibilities: [
        "Configured and set up new client instances within the SvelteKit monorepo.",
        "Developed all required web pages, including home, product, contact, and legal pages.",
        "Integrated with the central admin API to dynamically fetch and display meal plan data.",
        "Architected and implemented dynamic `[slug]` and `[id]` routes for scalable content.",
        "Built bespoke Svelte components to meet the unique design requirements of each client.",
        "Managed the deployment process for multiple client websites.",
        "Contributed to the UI development of the React Native mobile applications, ensuring design consistency between web and mobile.",
      ],
      images: [sdk1, sdk2, sdk3, sdk4, sdk5, sdk6, sdk7, sdkMobile],
      blocks: [
        {
          type: "text",
          title: "A Flexible Platform for Diverse Brands",
          body: "The power of the monorepo is its ability to support a wide range of clients, each with a unique brand identity and user experience, all from a shared technological foundation. My role was to bring these diverse designs to life.",
        },
        {
          type: "image",
          src: sdk1,
          caption:
            "The user profile and product pages for 'Apex Commerce Meals,' showcasing a clean and modern design.",
        },
        {
          type: "image",
          src: sdk2,
          caption:
            "The homepage and product pages for 'Sila Kitchen,' featuring a bright, fresh, and organic aesthetic.",
        },
        {
          type: "image",
          src: sdk3,
          caption:
            "A dark-themed, premium design for 'The Meal Project,' demonstrating the platform's stylistic flexibility.",
        },
        {
          type: "image",
          src: sdk4,
          caption:
            "The UI for 'Better Eats,' a client with a vibrant and energetic green color palette.",
        },
        {
          type: "text",
          title: "Cross-Platform Cohesion: Web and Mobile",
          body: "A significant aspect of the project was ensuring a cohesive experience between the web and mobile applications. I contributed to the UI of the React Native apps, helping to implement a consistent design language and user flow for customers on any device.",
        },
        {
          type: "image",
          src: sdkMobile,
          caption:
            "Screens from the React Native mobile app for 'QJO Life,' showing the meal plan selection process.",
        },
        {
          type: "text",
          title: "Catering to a Wide Range of Clients",
          body: "The screenshots below further illustrate the variety of clients served by this single monorepo, from 'FeelFX' and 'Ravifit' to 'QJO Life.' Each required custom Svelte components and careful attention to detail to match their specific brand guidelines.",
        },
        {
          type: "image",
          src: sdk5,
          caption:
            "The homepage and product pages for 'FeelFX,' designed for champions.",
        },
        {
          type: "image",
          src: sdk6,
          caption:
            "The UI for 'Ravifit,' a service focused on healthy and delicious meals delivered to your door.",
        },
        {
          type: "image",
          src: sdk7,
          caption:
            "The comprehensive website for 'QJO Life,' including the homepage, meal plan details, and blog.",
        },
      ],
      videos: [],
    },
  },
];
