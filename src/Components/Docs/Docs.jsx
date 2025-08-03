function Docs() {
  return (
    <div className="mt-[13vh] min-h-screen bg-[#0f1115] text-white px-6 py-12">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-16">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Documentation</h1>
        <p className="text-lg text-gray-400">
          We don’t believe in flashy things. We build premium components that are actually usable.
        </p>
      </header>

      {/* Content Sections */}
      <main className="grid max-w-5xl gap-12 mx-auto">
        {/* Getting Started */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Getting Started</h2>
          <p className="mb-4 text-gray-400">
            No installations or frameworks required. Just copy the HTML, CSS, and JS snippets and you're good to go.
          </p>
          <div className="bg-[#191d23] p-4 rounded-lg overflow-auto text-sm text-green-400">
            <code>
{`<!-- Paste this in your HTML -->
<link rel="stylesheet" href="styles.css">
<script src="component.js" defer></script><!-- And then copy and past the html , css ,jss from components section -->`}
            </code>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Our Philosophy</h2>
          <p className="text-gray-400">
            We avoid over-designed gimmicks. Our components are clean, responsive, and ready to use. No bloat — just practical UI you can rely on.
          </p>
        </section>

        {/* Snippets */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Available Components</h2>
          <ul className="space-y-1 text-gray-300 list-disc list-inside">
            <li>Normal Buttons</li>
            <li>Glowing Buttons</li>
            <li>Animeted Buttons</li>
            <li>Cards</li>
            <li>Minimal Navbars</li>           
            <li>Form Elements <span className="text-gray-400">{"("}You will find it in Cards section{")"}</span></li>
          </ul>
          <p className="mt-4 italic text-gray-500">
            All components include easy-to-copy code blocks for HTML, CSS, and optional JS.
          </p>
        </section>

        {/* Usage */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">How to Use</h2>
          <p className="mb-3 text-gray-400">
            Simply copy the provided code snippet and paste it into your project. No build tools or extra setup required.
          </p>
          <div className="bg-[#191d23] p-4 rounded-lg text-sm text-white space-y-2">
            <p className="text-yellow-400">// Example Button Snippet</p>
            <pre>
{`<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
  Click Me
</button>`}
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 text-sm text-gray-500 border-t border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Premium UI — Crafted for real-world use.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Docs;
