"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else router.push("/");
  };

  const handleGoogle = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setError(error.message);
  };

  return (
    <main className="max-w-md mx-auto py-16 px-4 font-modern">
      <h1 className="text-4xl font-black text-primary mb-8 uppercase">Login</h1>
      <button
        onClick={handleGoogle}
        className="w-full bg-accent-yellow text-white font-bold py-3 mb-6 text-lg shadow hover:bg-primary transition-colors"
      >
        Continue with Google
      </button>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-white p-8 shadow-lg"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-lg"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white font-bold py-3 text-lg shadow hover:bg-accent-pink transition-colors"
        >
          Login
        </button>
        {error && (
          <div className="text-red-600 font-bold text-center mt-2">{error}</div>
        )}
      </form>
      <div className="text-center mt-6">
        Don&apos;t have an account?{" "}
        <a
          href="/signup"
          className="text-accent-pink font-bold hover:underline"
        >
          Sign up
        </a>
      </div>
    </main>
  );
}
