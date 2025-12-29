import React, { Component, ReactNode, ErrorInfo, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// ---------------------------------------------------------
// TypeScript Extensions for Window
// ---------------------------------------------------------
declare global {
  interface Window {
    firebase: {
      auth: any;
      db: any; // Firestore
      rtdb: any; // Realtime Database
      rtdb_ref: any; // Realtime Database ref function
      rtdb_get: any; // Realtime Database get function
      signInWithEmailAndPassword: (auth: any, email: string, pass: string) => Promise<any>;
      signOut: (auth: any) => Promise<void>;
      onAuthStateChanged: (auth: any, callback: (user: any) => void) => () => void;
    };
  }
}

// ---------------------------------------------------------
// Error Boundary
// ---------------------------------------------------------
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Componentを直接継承し、TypeScriptがthis.propsやthis.stateを正しく解決できるように修正
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // クラスフィールドとしてstateを定義することでTypeScriptのエラーを解消
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    // 修正: this.state.hasError を参照してエラー時のUIを表示
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
              className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors duration-300 cursor-pointer"
            >
              ページを再読み込み
            </button>
          </div>
        </div>
      );
    }

    // 修正: this.props.children を安全に返却。
    // Componentを継承しているため、this.propsが型安全に参照可能になります。
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
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>
    );
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
}