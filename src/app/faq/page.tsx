'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: 'What is MyTherapy?',
      answer: 'MyTherapy is a free, AI-powered mental health companion. It offers a safe, supportive space to talk, vent, and reflect—anonymously and instantly.'
    },
    {
      question: 'Is MyTherapy a replacement for professional therapy?',
      answer: 'No. MyTherapy is not a substitute for licensed therapy. It is a supportive AI-based tool to help you cope, reflect, and feel heard. For serious concerns, we recommend connecting with a licensed therapist.'
    },
    {
      question: 'Who will I be chatting with?',
      answer: 'You’ll chat with an empathetic AI agent designed to listen, respond thoughtfully, and provide mental health support based on therapist-backed practices.'
    },
    {
      question: 'Is it really free to use?',
      answer: 'Yes! MyTherapy is completely free to use. There may be optional premium features or therapist referrals in the future, but chatting with the AI is free.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Absolutely. Your privacy is our top priority. We never share or sell your data. Chats are encrypted and stored securely, if at all.'
    },
    {
      question: 'Will the AI report my messages to someone?',
      answer: 'Only in extreme cases involving clear harm or legal risk, and only if we have enough identifying information (which we often don’t). Otherwise, your conversations stay private and confidential.'
    },
    {
      question: 'What kind of support can I get?',
      answer: 'You can talk about anxiety, overthinking, loneliness, stress, burnout, relationship issues, and more. The AI offers grounding tips, journal prompts, affirmations, and mood tracking.'
    },
    {
      question: 'Can I share this with a friend who’s struggling?',
      answer: 'Absolutely. Just share https://www.mytherapy.co.in — no app download required.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className="ml-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}


