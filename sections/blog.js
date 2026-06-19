window.SETblog = `
<section id="blog" class="section blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <p class="blog-subtitle">Thoughts on backend engineering, tools, and lessons from building at scale.</p>

        <article class="blog-post reveal">
            <header class="blog-post-header">
                <div class="blog-post-meta">
                    <span class="blog-post-date">June 2025</span>
                    <span class="blog-post-tag">Chrome Extension</span>
                    <span class="blog-post-tag">AI/LLM</span>
                </div>
                <h3 class="blog-post-title">Building an AI-Powered LinkedIn & Naukri Job Matcher — Chrome Extension with DeepSeek V3 & Google Sheets</h3>
            </header>

            <div class="blog-post-body">
                <p>Job hunting is tedious. You scroll through dozens of listings, copy-paste descriptions, and manually compare them against your CV. I built a Chrome extension that <strong>automates the entire workflow</strong> — extracting job descriptions, running AI-powered CV matching, and saving results to Google Sheets. All client-side, zero ban risk, for ~$1.50/month.</p>

                <h4>The Problem</h4>
                <p>LinkedIn and Naukri show hundreds of jobs, but there\'s no built-in way to check how well a role matches <em>your</em> specific skills. You either maintain a manual spreadsheet (time-consuming) or rely on gut feel (error-prone). I wanted something that would:</p>
                <ul>
                    <li>Auto-detect when I\'m on a job posting page</li>
                    <li>Extract the job description without copy-pasting</li>
                    <li>Compare it intelligently against my CV using an LLM</li>
                    <li>Save matched jobs to a spreadsheet I can review later</li>
                </ul>

                <h4>Architecture</h4>
                <p>The extension uses <strong>Chrome Manifest V3</strong> with three components working together:</p>
                <ul>
                    <li><strong>Content Script</strong> — Injected into LinkedIn/Naukri job pages. Detects URL patterns, extracts JD via site-specific DOM selectors, and renders a floating blue button + analysis panel.</li>
                    <li><strong>Background Service Worker</strong> — Handles API calls to DeepSeek for AI analysis and Google Apps Script Web App for saving to Sheets. Keeps API keys in chrome.storage.</li>
                    <li><strong>Popup UI</strong> — Settings panel for configuring the DeepSeek API key and Google Sheets Web App URL, with a test button for validation.</li>
                </ul>

                <div class="blog-code-block">
                    <span class="blog-code-label">Data Flow</span>
                    <pre><code>Job Page → Content Script (DOM extraction) → Background Worker
                                                          ├── DeepSeek API (CV vs JD analysis)
                                                          └── Google Apps Script (append row to Sheet)

AI Response (structured JSON):
  matchPercentage: 75%
  matchedSkills:   [Java, Spring Boot, AWS, Redis, ...]
  missingSkills:   [Kubernetes, Terraform]
  strengths:       ["6+ years Java/Spring Boot", ...]
  gaps:            ["No K8s production experience"]
  summary:         "Strong backend match, minor cloud orchestration gaps"</code></pre>
                </div>

                <h4>Key Technical Decisions</h4>
                <ul>
                    <li><strong>DeepSeek V3</strong> over GPT-4 — comparable quality for structured JSON output at ~1/10th the cost. With ~2,400 tokens per analysis (JD + CV + prompt), DeepSeek costs ~$0.001 per job. At 100 jobs/day, that\'s ~$1.50/month vs ~$15+ with GPT-4.</li>
                    <li><strong>Google Apps Script Web App</strong> — avoids OAuth complexity. Deploy as a Web App with "Anyone" access, and the extension POSTs job data as text/plain to avoid CORS preflight. Zero backend infrastructure needed.</li>
                    <li><strong>SPA-aware injection</strong> — LinkedIn is a Single Page App that doesn\'t trigger page reloads when navigating between jobs. The content script polls <code>window.location.href</code> every second and re-injects the overlay on URL change. A MutationObserver handles cases where LinkedIn removes the overlay during DOM updates.</li>
                    <li><strong>Naukri support</strong> — added separate DOM selectors for Naukri.com job pages, with a cleaned-up description extraction that strips "About the job" prefixes and collapses multi-line formatting.</li>
                </ul>

                <h4>Google Sheet Output</h4>
                <p>Every saved job gets a row with 11 columns: Title, Company, Location, URL, Posted Date, Description (first 5000 chars), Match %, Matched Skills, Missing Skills, AI Summary, and Saved At timestamp. This gives a <strong>searchable, sortable job tracker</strong> that lives in your Google Drive.</p>

                <h4>Tech Stack</h4>
                <div class="blog-tags">
                    <span>Chrome Manifest V3</span>
                    <span>JavaScript (ES6+)</span>
                    <span>DeepSeek V3 API</span>
                    <span>Google Apps Script</span>
                    <span>Google Sheets</span>
                    <span>DOM Manipulation</span>
                    <span>Service Workers</span>
                </div>

                <h4>Cost & Scale</h4>
                <p>The entire system costs ~$1.50/month (DeepSeek API only). Google Sheets is free, the Chrome Extension runs locally, and there\'s no server to maintain. At that price point, even analyzing 200+ jobs/day stays under $3/month.</p>
            </div>

            <footer class="blog-post-footer">
                <a href="https://github.com/sg36sagargupta26/job-listing-linkedIn" target="_blank" rel="noopener noreferrer" class="blog-post-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub →
                </a>
                <a href="https://github.com/sg36sagargupta26/job-listing-linkedIn/blob/main/docs/README.md" target="_blank" rel="noopener noreferrer" class="blog-post-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    Full Documentation →
                </a>
            </footer>
        </article>
    </div>
</section>`;
