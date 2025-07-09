"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });
    if (error) setError(error.message);
    else {
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <main className="max-w-md mx-auto py-16 px-4 font-modern">
      <h1 className="text-4xl font-black text-primary mb-8 uppercase">
        Sign Up
      </h1>
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 bg-white p-8 shadow-lg"
      >
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-lg"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-lg"
          required
        />
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
          Sign Up
        </button>
        {error && (
          <div className="text-red-600 font-bold text-center mt-2">{error}</div>
        )}
        {success && (
          <div className="text-green-600 font-bold text-center mt-2">
            Account created! Redirecting...
          </div>
        )}
      </form>
      <div className="text-center mt-6">
        Already have an account?{" "}
        <a href="/login" className="text-accent-pink font-bold hover:underline">
          Login
        </a>
      </div>
    </main>
  );
}
