import React from 'react';
import ROASCalculator from './components/ROASCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">
            Crack the <span className="bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">ROAS Formula</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Turn every dollar into profit with our free ROAS calculator
          </p>
        </header>

        <div className="flex justify-center">
          <ROASCalculator />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a full landing page? <a href="/roas-calculator.html" className="text-purple-600 hover:text-purple-800 underline">View the complete page</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;