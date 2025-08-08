/* Basic Styles & Variables */
:root {
    --primary-color: #00e5ff; /* Electric Blue */
    --secondary-color: #00ff8c; /* Bright Green */
    --dark-color: #121212; /* Deep Charcoal */
    --background-color: #1c1c1c; /* Dark Grey */
    --card-bg: #222222; /* Slightly Lighter Dark Grey */
    --text-color: #f0f0f0; /* Off-White */
    --placeholder-color: #7f8c8d;
    --border-color: #333333;
    --font-family: 'Roboto Mono', monospace;
    --font-size-base: 1rem;
}

* {
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

h1, h2, h3 {
    margin-top: 0;
    font-weight: 700;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Transitions and Animations */
.cta-button, .submit-button, .service-card, .step-card {
    transition: all 0.3s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes glow {
    0% { box-shadow: 0 0 5px var(--primary-color); }
    50% { box-shadow: 0 0 15px var(--primary-color); }
    100% { box-shadow: 0 0 5px var(--primary-color); }
}

/* Hero Section */
.hero-section {
    background: var(--dark-color);
    padding: 150px 0;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
}

.headline {
    font-size: 4rem;
    margin-bottom: 20px;
    color: var(--primary-color);
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
}

.subheadline {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: var(--text-color);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    background: var(--secondary-color);
    color: var(--dark-color);
    padding: 15px 40px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.1rem;
    position: relative;
    overflow: hidden;
}

.cta-button:hover {
    background: #00d979;
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 255, 140, 0.4);
}

/* General Section Styles */
section {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 80px;
    color: var(--primary-color);
    position: relative;
    padding-bottom: 20px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--secondary-color);
    border-radius: 2px;
}

/* Services and How It Works Sections */
.services-section, .how-it-works-section {
    background-color: var(--background-color);
}

.services-grid, .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.service-card, .step-card {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border-color);
    position: relative;
    animation: slideInUp 0.8s ease-out forwards;
    opacity: 0;
    text-align: center;
}

.service-card:nth-child(1), .step-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2), .step-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3), .step-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }

.service-card:hover, .step-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-color: var(--primary-color);
}

.card-title {
    color: var(--secondary-color);
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.step-card {
    text-align: center;
}

.step-number {
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
}

/* Contact Form Section */
.contact-section {
    background: var(--dark-color);
}

.contact-form {
    max-width: 700px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 50px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-color);
    animation: slideInUp 0.8s ease-out forwards;
    opacity: 0;
    animation-delay: 0.4s;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.form-group input, .form-group textarea, .form-group select {
    width: 100%;
    padding: 15px;
    background: var(--background-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 8px;
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.form-group input::placeholder, .form-group textarea::placeholder {
    color: var(--placeholder-color);
}

.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 8px rgba(0, 255, 140, 0.4);
}

.submit-button {
    display: block;
    width: 100%;
    padding: 18px;
    background: var(--primary-color);
    color: var(--dark-color);
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.submit-button:hover {
    background: #00c7e0;
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 229, 255, 0.4);
}

.form-status {
    text-align: center;
    margin-top: 25px;
    font-weight: bold;
    font-size: 1.1rem;
}

/* Dynamic Troubleshooting Suggestions */
.troubleshooting-suggestions {
    background-color: #2a2a2a;
    padding: 20px;
    margin-top: 20px;
    border-radius: 8px;
    border: 1px solid var(--primary-color);
    animation: fadeIn 0.5s ease-in-out;
}

.troubleshooting-suggestions h4 {
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--secondary-color);
    font-size: 1.2rem;
}

.troubleshooting-suggestions ul {
    list-style-type: '• ';
    padding-left: 20px;
}

.troubleshooting-suggestions li {
    margin-bottom: 10px;
    color: var(--text-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .headline {
        font-size: 2.5rem;
    }

    .subheadline {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 40px;
    }

    .services-grid, .steps-grid {
        grid-template-columns: 1fr;
    }
    
    section {
        padding: 60px 0;
    }

    .contact-form {
        padding: 30px;
    }
}
