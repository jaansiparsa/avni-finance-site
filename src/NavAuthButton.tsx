"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function NavAuthButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    let ignore = false;
    async function checkSession() {
      setLoading(true);
      const { data } = await supabase.auth.getSession();
      if (!ignore) {
        setLoggedIn(!!data.session);
        setLoading(false);
      }
    }
    checkSession();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setLoggedIn(!!session);
      }
    );
    return () => {
      ignore = true;
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLoggedIn(false);
    router.push("/");
  };

  if (loading) return null;

  return loggedIn ? (
    <button
      onClick={handleLogout}
      className="px-2 py-1 hover:text-accent-yellow transition-colors text-white font-bold bg-transparent border-none cursor-pointer"
    >
      logout
    </button>
  ) : (
    <Link
      href="/login"
      className="px-2 py-1 hover:text-accent-yellow transition-colors text-white font-bold"
    >
      login
    </Link>
  );
}
