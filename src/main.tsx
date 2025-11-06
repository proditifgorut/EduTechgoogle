import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

if (!googleClientId || googleClientId === 'YOUR_GOOGLE_CLIENT_ID' || googleClientId.startsWith('PASTE_YOUR_ID_HERE')) {
  root.render(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-lg text-center shadow-2xl">
        <h1 className="text-3xl font-bold mb-4 text-red-400">Configuration Required</h1>
        <p className="text-gray-300 mb-6">
          The Google Sign-In feature is not configured. Please provide a valid Google Client ID to proceed.
        </p>
        <div className="text-left bg-slate-800 p-4 rounded-lg border border-white/10">
          <p className="font-semibold mb-2">Next Steps:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-400">
            <li>Open the <code>.env</code> file in the project's root directory.</li>
            <li>Add your Google Client ID, replacing the placeholder:</li>
          </ol>
          <pre className="bg-slate-900 text-yellow-300 p-3 my-3 rounded-md text-sm overflow-x-auto">
            <code>VITE_GOOGLE_CLIENT_ID="PASTE_YOUR_ID_HERE"</code>
          </pre>
          <p className="text-sm text-gray-400">
            After saving the file, you must <strong>restart the development server</strong> for the changes to take effect.
          </p>
        </div>
      </div>
    </div>
  );
} else {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={googleClientId}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
