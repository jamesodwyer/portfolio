"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-access";
const PASSWORD = "casestudy2026";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-swiss-black z-50 flex items-center justify-center">
      <div className="w-full max-w-sm px-6">
        <h1 className="text-display mb-2 text-swiss-white">Portfolio</h1>
        <p className="text-body text-swiss-muted mb-8">
          Enter the password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password-input" className="sr-only">Password</label>
          <input
            id="password-input"
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            aria-describedby={error ? "password-error" : undefined}
            className="w-full bg-transparent border border-swiss-gray text-swiss-white text-body px-4 py-3 focus:outline-none focus:border-swiss-yellow transition-colors"
          />
          {error && (
            <p id="password-error" role="alert" className="text-sm text-red-400 mt-2">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="w-full mt-4 bg-swiss-yellow text-swiss-black text-caption py-3 hover:opacity-90 transition-opacity"
          >
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
}
