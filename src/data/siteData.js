// ============================================================
//  SITE DATA — edit this ONE file to change text, links,
//  statistics, cards, contact info and social links.
// ============================================================

export const brand = {
  name: "HopeBridge Foundation",
  tagline: "Together, We Make Hope Possible.",
  // Short logo text shown in the header and footer
  logoText: "HopeBridge",
};

export const contact = {
  phone: "+1 (555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@hopebridge.org",
  address: "1489 Langley Ave, Grand Forks, ND",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
];

export const hero = {
  subtitle: "Donate with love, save a child's life.",
  title: "Together, We Make Hope Possible.",
  text: "Every gift, big or small, helps us bring food, education and care to families who need it most.",
  primaryButton: { label: "All Campaigns", href: "#causes" },
  image: "/assets/hero-child.jpg",
  imageAlt: "A smiling child held by a HopeBridge volunteer",
};

export const about = {
  kicker: "- About Us -",
  title: "We can help make a family smile.",
  text: "For over a decade, HopeBridge Foundation has stood beside communities in crisis — delivering meals, building classrooms and funding medical care where it matters most.",
  dateLabel: "Founded",
  dateValue: "10.09.2012",
  locationLabel: "Location",
  locationValue: "1489 Langley Ave, Grand Forks, ND",
  button: { label: "Donate Now", href: "#donate" },
  image: "/assets/about-family.jpg",
  imageAlt: "Volunteers sharing food with a local family",
};

export const causes = {
  kicker: "- Make a Donation -",
  title: "Our Recent Causes",
  items: [
    {
      image: "/assets/cause-food.jpg",
      alt: "Children receiving baskets of fresh food",
      category: "Food",
      title: "Donate for healthy food",
      raised: 4000,
      goal: 10000,
      text: "Help us stock community kitchens with fresh, nutritious meals every week.",
    },
    {
      image: "/assets/cause-education.jpg",
      alt: "Schoolchildren raising hands in a classroom",
      category: "Education",
      title: "Education for poor children",
      raised: 8000,
      goal: 10000,
      text: "Books, uniforms and school fees for children who dream of learning.",
    },
    {
      image: "/assets/cause-water.jpg",
      alt: "Children drinking clean water at a village pump",
      category: "Water",
      title: "Clean water for every village",
      raised: 6500,
      goal: 10000,
      text: "Drilling wells and installing pumps so no child walks miles for water.",
    },
    {
      image: "/assets/cause-health.jpg",
      alt: "A nurse checking a toddler at a free medical camp",
      category: "Health",
      title: "Free medical camps",
      raised: 5200,
      goal: 10000,
      text: "Mobile clinics bringing checkups and medicine to remote families.",
    },
  ],
  buttonLabel: "Donate Now",
};

export const volunteers = {
  kicker: "- Our Volunteers -",
  title: "Meet the expert team of volunteers.",
  button: { label: "Discover More", href: "#volunteers" },
  members: [
    { image: "/assets/volunteer-1.jpg", name: "Norbert Farias", role: "Charity Volunteer" },
    { image: "/assets/volunteer-2.jpg", name: "Michelle Woods", role: "Charity Volunteer" },
    { image: "/assets/volunteer-3.jpg", name: "Diane Fritz", role: "Charity Volunteer" },
  ],
};

export const events = {
  kicker: "- Make a Donation -",
  title: "Join upcoming events",
  buttonLabel: "Book Ticket",
  items: [
    {
      image: "/assets/event-1.jpg",
      alt: "Outdoor charity fundraising fair",
      organizer: "HopeBridge Team",
      title: "Community fundraiser for healthy food for children.",
      time: "9:00 am",
      location: "Grand Forks",
    },
    {
      image: "/assets/event-2.jpg",
      alt: "Charity gala dinner with volunteers serving food",
      organizer: "HopeBridge Team",
      title: "Charity gala dinner for clean water projects.",
      time: "6:30 pm",
      location: "New York",
    },
    {
      image: "/assets/blog-1.jpg",
      alt: "A volunteer reading to children",
      organizer: "HopeBridge Team",
      title: "Story-time drive to support child education.",
      time: "10:00 am",
      location: "Chicago",
    },
  ],
};

export const stats = [
  { value: 12, suffix: "M", prefix: "$", label: "Total Raised" },
  { value: 4800, suffix: "", prefix: "", label: "Total Donors" },
  { value: 320, suffix: "+", prefix: "", label: "Total Causes" },
  { value: 950, suffix: "+", prefix: "", label: "Total Volunteers" },
];

export const testimonials = {
  kicker: "- Happy Volunteers -",
  title: "Our Happy Volunteers",
  items: [
    {
      image: "/assets/volunteer-3.jpg",
      quote: "Joining HopeBridge changed my life. Seeing a family smile because of something we built together is a feeling I can't describe.",
      name: "Edwards",
      role: "Lead Volunteer",
    },
    {
      image: "/assets/volunteer-1.jpg",
      quote: "Every weekend I spend at the community kitchen reminds me why giving matters. The team is family now.",
      name: "Ramisna Asbare",
      role: "Lead Volunteer",
    },
    {
      image: "/assets/volunteer-2.jpg",
      quote: "From fundraising fairs to classroom builds, every event is organized with so much heart. I'm proud to be part of it.",
      name: "Fitzgerald",
      role: "Lead Volunteer",
    },
  ],
};

export const blog = {
  kicker: "- Latest News -",
  title: "Latest news and articles from our blog.",
  buttonLabel: "Read More",
  posts: [
    {
      image: "/assets/blog-1.jpg",
      alt: "A volunteer reading a story to children",
      date: "06 - August - 2026",
      title: "Giving to the poor is a great satisfaction of heart.",
      text: "Our story-time drives have now reached 40 libraries, bringing books and smiles to hundreds of children.",
    },
    {
      image: "/assets/blog-2.jpg",
      alt: "Volunteers planting trees together",
      date: "08 - August - 2026",
      title: "Support our charity's mission for a brighter future.",
      text: "This season our volunteers planted 2,000 trees and launched three new community gardens.",
    },
  ],
};

export const cta = {
  title: "Ready to change a life today?",
  text: "Your donation — of any size — goes directly to the families who need it most.",
  button: { label: "Donate Now", href: "#donate" },
};

export const footer = {
  about: "HopeBridge Foundation is a nonprofit bringing food, education, clean water and healthcare to communities in need.",
  quickLinks: navLinks,
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  ],
  copyright: "HopeBridge Foundation. All rights reserved.",
};
