import React from 'react';

const WhatWeDo: React.FC = () => {
    return (
        <section className="w-full max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-10">
                    What We Do
                </span>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    At MyTherapy, we make mental health support more accessible, less intimidating, and available when it matters most.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We offer a safe, anonymous chat-based platform powered by AI — where users can open up, feel heard, and receive guidance from real, human-backed consultants.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    Whether you're navigating stress, anxiety, burnout, or relationship struggles, we're here to listen — without judgment, without cost, and without the pressure of "having it all figured out."
                </p>

                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Here's how we support you:</h3>
                    <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                        <li className="flex items-center justify-center gap-3">
                            <span className="text-2xl">💬</span>
                            <span>24/7 anonymous chat with a friendly AI companion</span>
                        </li>
                        <li className="flex items-center justify-center gap-3">
                            <span className="text-2xl">🔒</span>
                            <span>A private, stigma-free space to talk freely</span>
                        </li>
                        <li className="flex items-center justify-center gap-3">
                            <span className="text-2xl">💸</span>
                            <span>Completely free to use — no subscriptions, no sessions to book</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 dark:text-gray-200 font-medium mb-4">
                        We don't diagnose or prescribe.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                        We create space — for self-awareness, reflection, and healing to begin.
                    </p>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-12">
                    Because everyone deserves someone to talk to.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                    And now, you don't have to wait to be heard.
                </p>
            </div>
        </section>
    );
};

export default WhatWeDo;
