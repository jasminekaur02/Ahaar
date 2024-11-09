// components/FAQAccordion.tsx
'use client'
import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is 'Too Good To Waste'?",
    answer: "The project 'Too Good To Waste' aims to tackle the significant issue of food waste, particularly generated within households."
  },
  {
    question: "What are the key features of the application?",
    answer: "Key features include Pantry Tracking, Expiry Notifications, Grocery Sharing, Waste Histories, a Points System, and AI Integration."
  },
  {
    question: "How does Pantry Tracking work?",
    answer: "Users can keep track of items in their pantries to avoid overbuying and ensure they use what they have."
  },
  {
    question: "What is the Points System?",
    answer: "The Points System encourages users to waste less food by rewarding them with points for their efforts."
  },
  {
    question: "How does the AI Integration help?",
    answer: "The app uses AI to scan receipts, import items into the database, and suggest expiry dates based on item categories."
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4 flex flex-col items-center w-full max-w-3xl mb-8"> {/* Adjusted width */}
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2 w-full"> {/* Ensure full width for the FAQ items */}
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg"> {/* Keep border for separation */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-300 focus:outline-none" // Removed bg-gray-200
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4"> {/* Removed bg-gray-100 */}
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;