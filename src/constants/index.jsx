import React from 'react'
import { BotMessageSquare } from "lucide-react";
import { CircleUserRound } from 'lucide-react';
import { ScanSearch } from 'lucide-react';
import { Share2 } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Themes", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resourses", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "About us", href: "#" },

];

export const about = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Ask Our AI Assistant",
    description:
      "Whether you're teaching a multireligious class, writing an article, or seeking information and insights, our AI Assistant is here to support you. Ask questions, explore theological perspectives, and access scholarly, peer-reviewed data.",
  },
  {
    icon: <CircleUserRound />,
    text: "Build Your Profile",
    description:
      "Create a personalized profile to showcase your teaching, research, publications, or areas of expertise and interest. Connect with educators and researchers, across diverse traditions and disciplines.",
  },
  {
    icon: <ScanSearch />,
    text: "Discover Research",
    description:
      "Access a multilingual collection of peer-reviewed research, theological studies, and cross-cultural insights. Stay updated with the latest discussions on interfaith dialogue, religious education, and comparative theology",
  },
  {
    icon: <Share2 />,
    text: "Share Your Insights",
    description:
      "Contribute to the conversation by sharing your own reflections, analyses, and findings. Engage with a global academic audience through thought-provoking blog posts and discussions.",
  },
];

export const checklistItems = [
  {
    title: "Multi-Faith Education",
    description:
      "Strategies, lesson ideas, and best practices for teaching students from diverse religious and cultural backgrounds.",
  },
  {
    title: "Interreligious Dialogue",
    description:
      "Guiding principles, conversation prompts, and practical exercises to foster mutual respect and collaborative understanding across faith traditions.",
  },
  {
    title: "Comparative Theology",
    description:
      "Approaches and insights for examining similarities, differences, and shared ethical concerns among various religious worldviews.",
  },
  {
    title: "Inclusive Curriculum Design",
    description:
      "Methods and resources for creating educational programs that acknowledge and honor the plurality of religious and cultural identities.",
  },
  {
    title: "Ethics and Social Justice",
    description:
      "Discussions on how faith communities address social inequities, moral dilemmas, and advocacy efforts in multicultural contexts.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
