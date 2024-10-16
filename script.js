// Function to load different documents based on the specified 'docName'
function loadDocument(docName) {
    const content = document.getElementById('main-content');
    switch (docName) {
        case 'intro':
            content.innerHTML = `
                <h1>Welcome to Tech.Docs</h1>
                <p>Your hub for technical documentation resources. Explore our collection of guides, API documentation, tutorials, and FAQs. We also provide links to other valuable technical document repositories.</p>
                <p>Please note most of the information you will find in here is AI generated to fill content for this learning project. Please research your own information as AI can make mistakes and falsify inportant information.</p>
                <div class="external-links">
                    <h3>External Technical Documentation</h3>
                    <ul>
                        <li><a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a></li>
                        <li><a href="https://docs.microsoft.com" target="_blank">Microsoft Docs</a></li>
                        <li><a href="https://docs.aws.amazon.com" target="_blank">AWS Documentation</a></li>
                        <li><a href="https://cloud.google.com/docs" target="_blank">Google Cloud Documentation</a></li>
                        <li><a href="https://docs.docker.com" target="_blank">Docker Documentation</a></li>
                    </ul>
                </div>
            `;
            break;

        case 'api':
            content.innerHTML = `
                <h2>API Documentation</h2>
                <p>Welcome to the API documentation for Tech.Docs. This guide will help you integrate our services into your applications.</p>

                <!-- API Sections with Authentication, Base URL, Endpoints, and Rate Limiting -->
                <div class="api-section">
                    <h3>Authentication</h3>
                    <p>To use the Tech.Docs API, include your API key in the header of each request:</p>
                    <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                </div>
                
                <div class="api-section">
                    <h3>Base URL</h3>
                    <p>All API requests should be made to:</p>
                    <pre><code>https://api.techdocs.com/v1</code></pre>
                </div>
                
                <div class="api-section">
                    <h3>Endpoints</h3>
                    ${getAPIEndpoint('GET', '/documents', 'Retrieves a list of all available documents.', [
                        { name: 'page', description: 'Page number for pagination (default: 1)', optional: true },
                        { name: 'limit', description: 'Number of items per page (default: 20, max: 100)', optional: true }
                    ], 'curl -H "Authorization: Bearer YOUR_API_KEY" https://api.techdocs.com/v1/documents?page=1&limit=20')}

                    ${getAPIEndpoint('GET', '/documents/{id}', 'Retrieves a specific document by its ID.', [
                        { name: 'id', description: 'The unique identifier of the document', optional: false }
                    ], 'curl -H "Authorization: Bearer YOUR_API_KEY" https://api.techdocs.com/v1/documents/123456')}

                    ${getAPIEndpoint('POST', '/documents', 'Creates a new document.', [], `
{
    "title": "New Document Title",
    "content": "Document content goes here",
    "tags": ["api", "documentation"]
}`, 'curl -X POST -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d \'{"title":"New Document Title","content":"Document content goes here","tags":["api","documentation"]}\' https://api.techdocs.com/v1/documents')}
                </div>

                <div class="api-section">
                    <h3>Rate Limiting</h3>
                    <p>The API is rate limited to 1000 requests per hour per API key. If you exceed this limit, you'll receive a 429 Too Many Requests response.</p>
                </div>

                <div class="api-section">
                    <h3>Errors</h3>
                    <p>The API uses conventional HTTP response codes to indicate the success or failure of an API request:</p>
                    <ul>
                        <li>2xx range: Success</li>
                        <li>4xx range: Client-side error</li>
                        <li>5xx range: Server-side error</li>
                    </ul>
                </div>
            `;
            break;

        case 'tutorial':
            content.innerHTML = `
                <h2>Tutorials</h2>
                <p>Welcome to the Tutorials section of Tech.Docs. Here you'll find guides on how to install and set up various development tools essential for modern software development.</p>
                
                <!-- Tutorial Sections with Development Environment Setup Guides -->
                <div class="tutorial-section">
                    ${getTutorialItem('How to Install Visual Studio Code (VSCode)', `
                        Visual Studio Code is a lightweight but powerful source code editor. Here's how to get started:
                        <ul>
                            <li><a href="https://code.visualstudio.com/docs/setup/setup-overview" target="_blank">Official VSCode Setup Guide</a></li>
                            <li><a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks" target="_blank">VSCode Tips and Tricks</a></li>
                        </ul>
                    `)}

                    ${getTutorialItem('Setting Up Node.js', `
                        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Follow these guides to install and configure Node.js:
                        <ul>
                            <li><a href="https://nodejs.org/en/download/" target="_blank">Official Node.js Downloads</a></li>
                            <li><a href="https://nodejs.org/en/docs/guides/getting-started-guide/" target="_blank">Getting Started Guide</a></li>
                            <li><a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">Installing Node.js and npm</a></li>
                        </ul>
                    `)}

                    ${getTutorialItem('Installing and Configuring Flask', `
                        Flask is a lightweight WSGI web application framework in Python. Here's how to set it up:
                        <ul>
                            <li><a href="https://flask.palletsprojects.com/en/2.0.x/installation/" target="_blank">Flask Installation Guide</a></li>
                            <li><a href="https://flask.palletsprojects.com/en/2.0.x/quickstart/" target="_blank">Flask Quickstart</a></li>
                            <li><a href="https://pythonbasics.org/flask-tutorial-hello-world/" target="_blank">Flask Hello World Tutorial</a></li>
                        </ul>
                    `)}

                    ${getTutorialItem('Setting Up MySQL', `
                        MySQL is an open-source relational database management system. Follow these resources to install and configure MySQL:
                        <ul>
                            <li><a href="https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/" target="_blank">MySQL Installation Guide</a></li>
                            <li><a href="https://dev.mysql.com/doc/refman/8.0/en/installing.html" target="_blank">MySQL Reference Manual - Installation</a></li>
                            <li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04" target="_blank">How To Install MySQL on Ubuntu 20.04 (Digital Ocean)</a></li>
                        </ul>
                    `)}
                </div>

                <div class="tutorial-section">
                    <h3>Additional Resources</h3>
                    <p>For more in-depth tutorials and guides, check out these learning platforms:</p>
                    <ul>
                        <li><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> - Free coding lessons and projects</li>
                        <li><a href="https://www.codecademy.com/" target="_blank">Codecademy</a> - Interactive coding lessons</li>
                        <li><a href="https://www.udemy.com/" target="_blank">Udemy</a> - Online courses on various programming topics</li>
                        <li><a href="https://www.coursera.org/" target="_blank">Coursera</a> - Online courses from top universities</li>
                    </ul>
                </div>
            `;
            break;
            case 'faq':
                    content.innerHTML = `
                        <h2>Frequently Asked Questions</h2>
                        <p>Find answers to common questions about technical documentation and resources.</p>
                        
                        <div class="faq-item">
                            <h4>Q: What is technical documentation?</h4>
                            <p>A: Technical documentation is written material that explains how a product or service works. It includes user manuals, API documentation, code comments, and other instructional materials. For more information, check out this <a href="https://www.techsmith.com/blog/technical-documentation/" target="_blank">guide to technical documentation</a>.</p>
                        </div>
                        
                        <div class="faq-item">
                            <h4>Q: Why is technical documentation important?</h4>
                            <p>A: Technical documentation is crucial for several reasons:
                                <ul>
                                    <li>It helps users understand and effectively use a product or service</li>
                                    <li>It reduces support costs by providing self-help resources</li>
                                    <li>It improves product adoption and user satisfaction</li>
                                    <li>It serves as a knowledge base for future development and maintenance</li>
                                </ul>
                                Learn more about the importance of technical documentation in this <a href="https://document360.com/blog/why-is-documentation-important/" target="_blank">article</a>.
                            </p>
                        </div>
                        
                        <div class="faq-item">
                            <h4>Q: How do I write good technical documentation?</h4>
                            <p>A: To write effective technical documentation:
                                <ol>
                                    <li>Understand your audience and their needs</li>
                                    <li>Use clear, concise language</li>
                                    <li>Organize information logically</li>
                                    <li>Include examples and visuals</li>
                                    <li>Keep it up-to-date</li>
                                </ol>
                                For more tips, check out this <a href="https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/" target="_blank">beginner's guide to writing documentation</a>.
                            </p>
                        </div>
                        
                        <div class="faq-item">
                            <h4>Q: What tools can I use for creating technical documentation?</h4>
                            <p>A: There are many tools available for creating technical documentation, including:
                                <ul>
                                    <li><a href="https://www.markdownguide.org/" target="_blank">Markdown</a> - A lightweight markup language</li>
                                    <li><a href="https://docusaurus.io/" target="_blank">Docusaurus</a> - A documentation website generator</li>
                                    <li><a href="https://www.sphinx-doc.org/" target="_blank">Sphinx</a> - A tool for creating intelligent and beautiful documentation</li>
                                    <li><a href="https://readthedocs.org/" target="_blank">Read the Docs</a> - A documentation hosting platform</li>
                                </ul>
                            </p>
                        </div>
                        
                        <div class="faq-item">
                            <h4>Q: How often should I update my technical documentation?</h4>
                            <p>A: Technical documentation should be updated whenever there are changes to the product or service it describes. It's a good practice to review and update documentation:
                                <ul>
                                    <li>With each new product release or update</li>
                                    <li>When receiving frequent questions about a particular topic</li>
                                    <li>At least once every six months for a general review</li>
                                </ul>
                                Learn more about maintaining documentation in this <a href="https://www.atlassian.com/blog/confluence/how-to-maintain-technical-documentation" target="_blank">Atlassian guide</a>.
                            </p>
                        </div>
                    `;
                    break;

        default:
            content.innerHTML = `
                <h2>Page Not Found</h2>
                <p>The requested page could not be found.</p>
            `;
    }
}

// Helper function to create API endpoint sections
function getAPIEndpoint(method, endpoint, description, parameters = [], exampleRequest) {
    return `
        <div class="api-endpoint">
            <h4>${method} ${endpoint}</h4>
            <p>${description}</p>
            ${parameters.length ? `<strong>Parameters:</strong><ul>${parameters.map(param => `<li><code>${param.name}</code>: ${param.description} ${param.optional ? '(optional)' : ''}</li>`).join('')}</ul>` : ''}
            <strong>Example request:</strong>
            <pre><code>${exampleRequest}</code></pre>
        </div>
    `;
}

// Helper function to create tutorial sections
function getTutorialItem(title, content) {
    return `
        <div class="tutorial-item">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `;
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (message) {
            addChatMessage('User: ' + message);
            respondToUser(message);
            input.value = '';
        }
    }
}

function addChatMessage(message) {
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += '<p>' + message + '</p>';
    chatbox.scrollTop = chatbox.scrollHeight;
}

function respondToUser(message) {
    const lowerMessage = message.toLowerCase();
    let response = "I'm sorry, I don't have information about that. Can you please try asking about our documents or how to access them?";

    if (lowerMessage.includes('document') || lowerMessage.includes('access')) {
        response = "To access our documents, please use the menu in the nav section of this page. You can find our Introduction, API Documentation, Tutorial, and FAQ there.";
    } else if (lowerMessage.includes('api')) {
        response = "Our API documentation can be found in the menu under 'API Documentation'. It contains details about all our endpoints.";
    } else if (lowerMessage.includes('tutorial')) {
        response = "We have a comprehensive tutorial available. You can access it from the menu in the nav section of this page by clicking on 'Tutorial'.";
    } else if (lowerMessage.includes('faq')) {
        response = "Our FAQ section might have the answer you're looking for. You can find it in the menu under 'FAQ'.";
    }

    setTimeout(() => addChatMessage('Bot: ' + response), 500);
}