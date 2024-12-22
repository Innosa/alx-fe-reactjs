const ResponsiveLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-blue-500 text-white py-4">
        <h1 className="text-center text-lg font-bold">Responsive Header</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto max-w-screen-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Main Content
        </h2>
        <p className="text-gray-400">
          This is the main content area. Its centered and constrained to a
          maximum width of 960px. Resize your screen to see how the layout
          adjusts responsively.
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4">
        <p className="text-center text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
