import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Error Boundary to catch runtime errors
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-red-100">
            <h1 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <span className="text-3xl">⚠️</span> エラーが発生しました
            </h1>
            <p className="text-stone-600 mb-6 leading-relaxed">
              申し訳ありません。予期せぬエラーが発生しました。<br/>
              ページを再読み込みしてください。
            </p>
            <div className="bg-stone-100 p-4 rounded-lg overflow-auto mb-6 text-xs font-mono text-red-500 max-h-40">
              {this.state.error?.message || "詳細なエラー情報はありません"}
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors cursor-pointer"
            >
              ページを再読み込み
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to initialize app:", error);
    // Fallback display if React fails to mount completely
    rootElement.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; background-color: #fafaf9;">
        <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); max-width: 24rem;">
          <h1 style="color: #dc2626; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">アプリケーションの起動に失敗しました</h1>
          <p style="color: #57534e; margin-bottom: 1rem;">ページの再読み込みをお試しください。</p>
          <button onclick="window.location.reload()" style="background: #1c1917; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; cursor: pointer; font-weight: bold; width: 100%;">再読み込み</button>
        </div>
      </div>
    `;
  }
}