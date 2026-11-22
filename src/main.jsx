import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary xatolikni ushladi:", error, errorInfo);
  }

  handleReset = () => {
    localStorage.removeItem('havviy_services');
    localStorage.removeItem('havviy_products');
    localStorage.removeItem('havviy_hero');
    localStorage.removeItem('havviy_footer');
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B1528] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-[#1D72FE] flex items-center justify-center mb-4 border border-blue-500/30">
            <span className="text-3xl font-black">⚙️</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black mb-2">Ma'lumotlar tiklandi</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
            Kiritilgan xizmat yoki ma'lumotlarda nosozlik yuz berdi. Tizimni xavfsiz qayta tiklash uchun quyidagi tugmani bosing:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleReset}
              className="px-6 py-3 rounded-2xl bg-[#1D72FE] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/30 cursor-pointer transition-all"
            >
              Standart holatga qaytarish va yuklash
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm cursor-pointer transition-all"
            >
              Sahifani qayta yuklash
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
