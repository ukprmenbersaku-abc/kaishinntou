import React, { useState } from 'react';
import { Loader2, Lock, X, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [partyId, setPartyId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    // IDからメールアドレスを自動生成（IDのみ入力された場合）
    // @が含まれていればそのまま、なければドメインを付与
    const emailToUse = partyId.includes('@') ? partyId : `${partyId}@chikushin.com`;

    try {
      if (window.firebase && window.firebase.auth) {
        await window.firebase.signInWithEmailAndPassword(
          window.firebase.auth,
          emailToUse,
          password
        );
        // ログイン成功時はページをリロードしてApp.tsxのAuthチェックを走らせる
        window.location.reload();
      } else {
        throw new Error("Firebase SDK is not initialized");
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setLoginError("党員IDまたはパスワードが間違っています。");
      } else if (err.code === 'auth/invalid-email') {
        setLoginError("党員IDの形式が正しくありません。");
      } else {
        setLoginError("ログインに失敗しました。");
      }
      setIsLoggingIn(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Larger touch target */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-4 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors z-50 cursor-pointer"
          aria-label="閉じる"
        >
          <X size={28} />
        </button>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-50 rounded-br-full opacity-50 pointer-events-none"></div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-50 rounded-2xl text-stone-600 mb-6 border border-stone-200">
            <Lock size={28} />
          </div>
          
          <h3 className="text-2xl font-bold text-stone-900 mb-2 flex items-center justify-center gap-2">
            党員専用ログイン
          </h3>
          <p className="text-stone-500 mb-8 text-sm">
            党員IDを入力してアクセスしてください。
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-bold text-stone-400 ml-1 mb-1 block">党員ID</label>
              <input
                type="text"
                required
                value={partyId}
                onChange={(e) => setPartyId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all duration-300 font-mono"
                placeholder=""
                autoComplete="username"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-stone-400 ml-1 mb-1 block">パスワード</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all duration-300 pr-12"
                  placeholder=""
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-red-500 text-xs flex items-start gap-2">
                  <span className="mt-0.5">⚠️</span> 
                  <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 bg-stone-400 hover:bg-stone-500 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer mt-4"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  認証中...
                </>
              ) : (
                "ログイン"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;