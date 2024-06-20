"use client";
import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    answer:
      "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
  {
    question:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    answer:
      "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
  {
    question:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    answer:
      "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
  {
    question:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    answer:
      "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
  {
    question:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    answer:
      "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
  },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  md:py-6 py-2">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-[1440px] mx-auto mt-8 space-y-4 md:mt-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-300 bg-white border rounded-[10px] border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-fuchsia-600 transform transition-transform ${
                    openIndex === index ? "rotate-0" : "-rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="px-4 pb-5 sm:px-6 sm:pb-6">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
