document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const mcuSelect = document.getElementById('mcu-select');
    const dynamicFields = document.getElementById('dynamic-fields');

    // Data for dynamic troubleshooting suggestions
    const troubleshootingData = {
        'arduino-uno': [
            "Check your USB cable and COM port connection.",
            "Verify the correct board and port are selected in the Arduino IDE.",
            "Ensure power supply is stable (5V).",
            "Double-check your wiring, especially for VCC, GND, and signal pins.",
            "If using an external power source, make sure the jumper is in the correct position."
        ],
        'esp32': [
            "Check if the board is in 'flash mode' by holding down the BOOT button while uploading.",
            "Verify your USB-to-serial driver is installed and working.",
            "Make sure your power source can provide sufficient current (e.g., 500mA+).",
            "If using Wi-Fi, check for a stable network connection and correct credentials.",
            "Look for 'brownout detector was triggered' messages in the serial monitor - a sign of power issues."
        ],
        'esp8266': [
            "Hold down the FLASH button while uploading new code.",
            "Ensure the correct board (e.g., 'Generic ESP8266 Module') and port are selected.",
            "Check for stable 3.3V power supply and sufficient current.",
            "If Wi-Fi is failing, verify your SSID and password are correct and a stable signal is present.",
            "Look for 'fatal exception' errors in the serial monitor, which often point to code bugs."
        ],
        'stm32': [
            "Ensure you have a proper ST-Link V2 or similar programmer connected.",
            "Verify the bootloader configuration (BOOT0/BOOT1 jumpers).",
            "Check that you have installed the correct STM32CubeIDE or compatible toolchain.",
            "Review your pin assignments and clock configuration in your initialization code.",
            "Look for memory access errors or hard faults which can be tricky to debug."
        ],
        'other': [
            "Provide the specific model of your microcontroller in the issue description.",
            "Include a link to the manufacturer's datasheet or a relevant schematic.",
            "Detail any specific communication protocols or external components you are using.",
            "Include your full code for a more thorough analysis."
        ]
    };

    // Event listener for microcontroller selection
    mcuSelect.addEventListener('change', (e) => {
        const selectedMcu = e.target.value;
        dynamicFields.innerHTML = ''; // Clear previous fields

        if (selectedMcu && troubleshootingData[selectedMcu]) {
            const suggestions = troubleshootingData[selectedMcu];
            const suggestionsHTML = `
                <div class="troubleshooting-suggestions">
                    <h4>Common Troubleshooting Steps for ${e.target.options[e.target.selectedIndex].text}:</h4>
                    <ul>
                        ${suggestions.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                    <p>If you've tried these steps and the problem persists, please fill out the form below.</p>
                </div>
            `;
            dynamicFields.innerHTML = suggestionsHTML;
        }
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Simulate an API call
        formStatus.textContent = "Submitting your request...";
        formStatus.style.color = 'var(--primary-color)';
        
        setTimeout(() => {
            // Success message
            const name = contactForm.querySelector('#name').value;
            formStatus.textContent = `Thanks, ${name}! Your troubleshooting request has been received. Our team will get back to you shortly.`;
            formStatus.style.color = 'var(--secondary-color)';
            contactForm.reset();
            dynamicFields.innerHTML = ''; // Clear dynamic fields after submission
        }, 1500); // Wait 1.5 seconds to simulate loading
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elementsToAnimate = entry.target.querySelectorAll('.service-card, .step-card, .contact-form');
                elementsToAnimate.forEach(el => el.style.opacity = '1');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        if(section.id !== 'hero') { 
            sectionObserver.observe(section);
        }
    });
});
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
