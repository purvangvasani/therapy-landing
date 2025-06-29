import React from 'react';

const WhatWeAre: React.FC = () => {
    return (
        <section className="w-full max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-10">
                    What We Are
                </span>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    We are not just an app.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We are a quiet space in a noisy world — created for moments when your mind feels full, your heart feels heavy, and you just want someone to listen.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    MyTherapy is a free, AI-powered mental health companion that connects you with compassionate, consultant-backed support — anonymously, safely, and instantly.
                </p>

                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">We are here for:</h3>
                    <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                        <li className="flex items-center justify-center gap-2">
                            <span className="text-purple-500">•</span> The overthinkers who can&apos;t switch off
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="text-purple-500">•</span> The strong ones who never ask for help
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="text-purple-500">•</span> The ones who smile outside but feel lost inside
                        </li>
                    </ul>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                    Whether you&apos;re struggling with anxiety, burnout, grief, or just need a judgment-free space to breathe — we&apos;re here.
                </p>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-3">💬</div>
                        <h4 className="font-semibold text-lg mb-2">24/7 chat support</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Always here when you need us</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-3">🔒</div>
                        <h4 className="font-semibold text-lg mb-2">100% anonymous</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Your privacy is our priority</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-3">🧠</div>
                        <h4 className="font-semibold text-lg mb-2">Backed by consultants</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Expert-approved support</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-3">💸</div>
                        <h4 className="font-semibold text-lg mb-2">Always free</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">No hidden costs, ever</p>
                    </div>
                </div> */}

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-900/50">
                    <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                        We don&apos;t replace human care. We make it more accessible — for everyone.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatWeAre;
