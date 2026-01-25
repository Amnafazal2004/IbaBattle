"use client";

import { useUserContext } from "@/Context/UserContext";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserclient";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Mode = "signup" | "signin";

export default function EmailPasswordModal() {
  const user = useUserContext();
  const supabase = getSupabaseBrowserClient();

  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(user);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setStatus("Signed out successfully");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Check your inbox to confirm the new account.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Signed in successfully");
        setIsOpen(false);
      }
    }
  }

  // If user is logged in, show sign out button
  if (currentUser) {
    return (
      <button
        onClick={handleSignOut}
        className="px-5 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
      >
        Sign out
      </button>
    );
  }

  // If user is not logged in, show sign in button + modal
  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2 border-2 border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition"
      >
       Sign in
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Card>
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ✕
              </button>

              <CardHeader>
                <CardTitle>
                  {mode === "signup" ? "Create an account" : "Welcome back"}
                </CardTitle>
                <CardDescription>
                  {mode === "signup"
                    ? "Join your local community on Neighbourly"
                    : "Sign in to continue"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Toggle */}
                <div className="flex gap-2 mb-6">
                  {(["signup", "signin"] as Mode[]).map((option) => (
                    <Button
                      key={option}
                      type="button"
                      variant={mode === option ? "default" : "outline"}
                      className="w-full"
                      onClick={() => {
                        setMode(option);
                        setStatus("");
                      }}
                    >
                      {option === "signup" ? "Sign up" : "Sign in"}
                    </Button>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button className="w-full" type="submit">
                    {mode === "signup" ? "Create account" : "Sign in"}
                  </Button>
                </form>
              </CardContent>

              {status && (
                <CardFooter>
                  <p
                    className="text-sm text-muted-foreground"
                    role="status"
                    aria-live="polite"
                  >
                    {status}
                  </p>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      )}
    </>
  );
}