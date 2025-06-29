'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What types of therapy do you offer?',
    answer: 'We offer a range of therapeutic services including cognitive behavioral therapy (CBT), couples counseling, family therapy, and individual therapy sessions tailored to your specific needs.'
  },
  {
    question: 'How do I know if therapy is right for me?',
    answer: 'Therapy can be beneficial for anyone looking to improve their mental health, cope with life challenges, or gain self-awareness. If you\'re feeling stuck, overwhelmed, or just want to understand yourself better, therapy might be right for you.'
  },
  {
    question: 'How long does each therapy session last?',
    answer: 'Standard therapy sessions typically last 50-60 minutes. Initial consultations might be slightly longer to allow for a comprehensive assessment of your needs.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We accept most major insurance plans. Please contact us with your insurance information, and we can verify your coverage and explain any out-of-pocket costs.'
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our office, using our online booking system, or by filling out the contact form on our website. We typically respond within 24 hours.'
  },
  {
    question: 'Is everything I say in therapy confidential?',
    answer: 'Yes, all therapy sessions are confidential with a few legal exceptions that your therapist will discuss with you during your first session. These typically include situations involving harm to self or others, or cases of abuse.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
