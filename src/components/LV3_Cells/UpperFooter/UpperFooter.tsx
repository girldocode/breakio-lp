// UpperFooter.tsx

import { BText } from "@/components/LV1_Atoms";
import React from "react";

const UpperFooter: React.FC = () => {
  const footerSections = [
    {
      title: "Categories",
      items: [
        "User Interface",
        "User Experience",
        "Digital Media",
        "Lifestyle",
        "Programming",
        "Animation",
      ],
    },
    {
      title: "Products",
      items: [
        "Pricing",
        "Overview",
        "Browse",
        "Accessibility",
        "Five",
        "Changelog",
      ],
    },
    {
      title: "Solutions",
      items: [
        "Brainstorming",
        "Ideation",
        "Wireframing",
        "Research",
        "Design",
        "Concept",
      ],
    },
    {
      title: "Resources",
      items: [
        "Help Center",
        "Blog",
        "Tutorials",
        "FAQs",
        "Community",
        "Events",
      ],
    },
    {
      title: "Support",
      items: [
        "Contact Us",
        "Developers",
        "Documentation",
        "Integrations",
        "Report",
        "Webinar",
      ],
    },
    {
      title: "Company",
      items: ["About", "Events", "Press", "Careers", "Customers", "Partners"],
    },
  ];

  return (
    <div className="py-12 px-20 ">
      <div className="container mx-auto grid 2xl:grid-cols-6 xl-grid-cols-3 lg:grid-cols-3  md:grid-cols-2 gap-12 ">
        {footerSections.map((section, index) => (
          <div key={index}>
            <BText as="h2" weight="medium" size="base" color="blue-gray-600">
              {section.title}
            </BText>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href="#" className="hover:underline">
                    <BText
                      as="span"
                      weight="normal"
                      size="base"
                      color="blue-gray-600"
                      className="pt-6"
                    >
                      {item}
                    </BText>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperFooter;
