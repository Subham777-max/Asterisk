function Docs() {
  return (
    <div className="mt-[13vh] min-h-screen bg-[#0f1115] text-white px-4 sm:px-6 md:px-12 py-8 sm:py-12 w-full">
      
      <header className="max-w-5xl px-2 mx-auto mb-12 sm:mb-16 sm:px-0">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">Documentation</h1>
        <p className="max-w-3xl text-base text-gray-400 sm:text-lg">
          We don’t believe in flashy things. We build premium components that are actually usable.
        </p>
      </header>

      
      <main className="grid max-w-5xl gap-10 px-2 mx-auto sm:gap-12 sm:px-0">
        
        <section>
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">Getting Started</h2>
          <p className="mb-4 text-gray-400 max-w-prose">
            No installations or frameworks required. Just copy the HTML, CSS, and JS snippets and you're good to go.
          </p>
          <p className="mb-4 text-gray-400 max-w-prose">
            Just delete the extra css part (if you don’t need that) or You can also customise it as you want.
          </p>
          <div className="bg-[#191d23] p-4 rounded-lg overflow-auto text-sm text-green-400 max-w-full">
            <code>
{`<!-- Paste this in your HTML -->
<link rel="stylesheet" href="styles.css">
<script src="component.js" defer></script><!-- And then copy and past the html , css ,js from components section -->`}
            </code>
          </div>
        </section>

        
        <section>
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">Our Philosophy</h2>
          <p className="text-gray-400 max-w-prose">
            We avoid over-designed gimmicks. Our components are clean, responsive, and ready to use. No bloat — just practical UI you can rely on.
          </p>
        </section>

        
        <section>
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">Available Components</h2>
          <ul className="space-y-1 text-gray-300 list-disc list-inside max-w-prose">
            <li>Normal Buttons</li>
            <li>Glowing Buttons</li>
            <li>Animeted Buttons</li>
            <li>Normal Cards</li>
            <li>Glowing Cards</li>
            <li>Special Cards</li>
            <li>Normal Navbars</li>
            <li>Dark Navbars</li>
            <li>Special Navbars</li>
            <li>
              Form Elements <span className="text-gray-400">(You will find it in Cards section)</span>
            </li>
          </ul>
          <p className="mt-4 italic text-gray-500 max-w-prose">
            All components include easy-to-copy code blocks for HTML, CSS, and optional JS.
          </p>
        </section>

        
        <section>
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">How to Use</h2>
          <p className="mb-3 text-gray-400 max-w-prose">
            Simply copy the provided code snippet and paste it into your project. No build tools or extra setup required.
          </p>
          <div className="bg-[#191d23] p-4 rounded-lg text-sm text-white space-y-2 max-w-full overflow-auto">
            <p className="text-yellow-400">// Example Button Snippet</p>
            <pre className="whitespace-pre-wrap sm:whitespace-pre">
{`<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
    Click Me
</button>`}
            </pre>
          </div>
        </section>

      
        <footer className="max-w-5xl px-2 pt-12 mx-auto text-sm text-gray-500 border-t border-gray-800 sm:px-0">
          <p>&copy; {new Date().getFullYear()} Premium UI — Crafted for real-world use.</p>
        </footer>
      </main>
    </div>
  );
}

export default Docs;
