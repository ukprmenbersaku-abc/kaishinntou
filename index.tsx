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

/**
 * ErrorBoundary class to catch rendering errors and display a fallback UI.
 */
// Fix: Explicitly extending 'React.Component' to ensure 'props' and 'state' are correctly inherited and recognized by the TypeScript compiler, resolving the error on line 85.
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
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

    // Accessing 'props.children' from the correctly typed React.Component class
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
