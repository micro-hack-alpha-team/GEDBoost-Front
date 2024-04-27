import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const SeleniumScript = () => {
    const codeRef = useRef(null);

    useEffect(() => {
        Prism.highlightElement(codeRef.current);
    }, []);

    const seleniumScript = `from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Initialize the WebDriver (in this case, we'll use Chrome)
driver = webdriver.Chrome()

# Replace 'http://your-ged-configuration-url.com' with the actual URL of your GED configuration page
ged_url = 'http://your-ged-configuration-url.com'

# Open the GED configuration page
driver.get(ged_url)

# Example: Find input fields and buttons and interact with them to configure the GED
input_field = driver.find_element_by_id('input-field-id')
input_field.clear()
input_field.send_keys('desired-value')

# Example: Click a button to submit the configuration
submit_button = driver.find_element_by_id('submit-button-id')
submit_button.click()

# Wait for the configuration to be applied (adjust wait time as needed)
time.sleep(5)

# Optionally, you can capture screenshots or perform additional checks to verify the configuration

# Close the WebDriver
driver.quit()
`;

    return (
        <div>
            <p className='text-left font-bold text-xl m-4'>Votre Script selenium:</p>
            <div style={{ overflowX: 'auto', backgroundColor: 'black', color: 'white' }}>
            <pre>
                <code ref={codeRef} className="language-python">
                {seleniumScript}
                </code>
            </pre>
            </div>
        </div>
    );
};

export default SeleniumScript;
