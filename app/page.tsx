import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">Youzhu (Keira) Liu</div>
        <div className="flex gap-4">
          <a href="http://www.linkedin.com/in/youzhu-liu" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 font-medium">LinkedIn</a>
          <a href="https://github.com/youzhuart" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 font-medium">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-8 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Building Scalable Data Solutions <br className="hidden md:block"/> 
          <span className="text-blue-600">& AI-Driven Experiences.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          I am a Data Engineer and Analytics Leader with 9+ years of experience transforming complex data into $75M+ in revenue. I specialize in designing robust ETL pipelines, scaling product analytics, and integrating responsible AI to craft experiences for millions of users.
        </p>
        <div className="flex gap-4">
          <a href="#experience" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            View My Experience
          </a>
          <a href="https://github.com/youzhuart" target="_blank" rel="noreferrer" className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Follow on GitHub
          </a>
        </div>
      </header>

      {/* Core Pillars (Tailored to Meta JD) */}
      <section id="experience" className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">How I Drive Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Data Engineering & Scalability</h3>
              <p className="text-gray-600 text-sm mb-4">
                Engineered robust data pipelines and optimized ETL workflows at Citi Group, eliminating duplicate efforts, saving 6 FTEs, and reducing cross-entity data discrepancies by 15%. Expert in SQL, Python, and scalable data models.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Product Leadership & Strategy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Used data to shape product development and tell data-driven stories. Led user segmentation and campaign analytics, partnering with executives to generate $75MM+ in-year revenue and expand user acquisition strategies.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Responsible AI & Innovation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Integrated GenAI (Claude/Gemini) to automate workflows and accelerate development. Established statistical guardrails for customer targeting models to ensure algorithmic fairness, bias mitigation, and equitable user segmentation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Engineering Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Project 1 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">FocusBro</h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Deployed</span>
              </div>
              <p className="text-gray-600 mb-6">
                A full-stack Chrome extension with ~130 active users. Designed a privacy-first, event-driven architecture utilizing Chrome APIs to process and aggregate real-time behavioral data entirely within local storage.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs font-medium text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">GenAI Integration</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Data Pipelines</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Telemetry</span>
              </div>
              <a href="https://chromewebstore.google.com/detail/focusbro-digital-detox-we/njggkcedgpkpecfkceopappcfcdijjkk?authuser=0&hl=en" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">
                View on Chrome Web Store →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">In The Mood For</h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Full Stack Web App</span>
              </div>
              <p className="text-gray-600 mb-6">
                A scalable front-end and back-end web application demonstrating dynamic data visualization and user experience design. Handled data extraction, state management, and seamless performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs font-medium text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">React / Next.js</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Data Modeling</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Vercel Deployment</span>
              </div>
              <a href="https://inthemoodfor-beta.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">
                View Live Site →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Minimal Footer / Contact (No Email) */}
      <footer className="bg-gray-900 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I am currently exploring roles in Data Engineering and Product Analytics, specifically where I can leverage data to scale products and tell compelling stories. You can reach me via my professional networks below.
        </p>
        <div className="flex justify-center gap-6">
          <a href="http://www.linkedin.com/in/youzhu-liu" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition">
            Connect on LinkedIn
          </a>
          <a href="https://github.com/youzhuart" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-8 py-3 rounded-lg font-semibold transition">
            View my GitHub
          </a>
        </div>
      </footer>

    </div>
  );
}