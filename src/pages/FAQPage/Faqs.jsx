import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { generalFAQs } from "../../data/faqs";

import "./styles.css";

const FAQsPage = () => {
    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="faqs-page">

            {/* =====================================================
    HERO
===================================================== */}

            <section className="faqs-hero">

                {/* Background Image */}
                <div className="faqs-hero-background">
                    <img
                        src="/heroBg.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </div>

                {/* Dark / Blue Overlay */}
                <div className="faqs-hero-overlay"></div>

                {/* Technical Grid */}
                <div className="faqs-hero-grid"></div>

                <div className="faqs-container">

                    <div className="faqs-hero-content">

                        <span className="faqs-hero-label">
                            ROBOFEST
                        </span>

                        <h1>
                            RoboFest General FAQs
                        </h1>

                        <p>
                            Everything you need to know about RoboFest,
                            competitions, participation, and the event.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FAQ SECTION
      ===================================================== */}

            <main className="faqs-content">

                <div className="faqs-heading">

                    <span>
                        FREQUENTLY ASKED QUESTIONS
                    </span>

                    <h2>
                        Got Questions?
                        <br />
                        We've Got Answers.
                    </h2>

                    <p>
                        Find answers to the most common questions
                        about RoboFest.
                    </p>

                </div>


                <div className="faqs-list">

                    {generalFAQs.map((faq, index) => {

                        const isOpen = openFAQ === faq.id;

                        return (
                            <div
                                className={`faq-item ${isOpen ? "open" : ""
                                    }`}
                                key={faq.id}
                            >

                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(faq.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${faq.id}`}
                                >

                                    <div className="faq-question-left">

                                        <span className="faq-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="faq-question-text">
                                            {faq.question}
                                        </span>

                                    </div>


                                    <span className="faq-icon">

                                        {isOpen ? (
                                            <Minus size={20} />
                                        ) : (
                                            <Plus size={20} />
                                        )}

                                    </span>

                                </button>


                                <div
                                    id={`faq-answer-${faq.id}`}
                                    className="faq-answer-wrapper"
                                >

                                    <div className="faq-answer">

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );

                    })}

                </div>

            </main>

        </div>
    );
};

export default FAQsPage;