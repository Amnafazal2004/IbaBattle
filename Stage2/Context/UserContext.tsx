"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserclient"
import { User } from "@supabase/supabase-js";

type UserContextType = {
  user: User | null
  loading: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true
});
export const useUserContext = () => {
    return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null); 
  const [loading,setloading] = useState(true)
 
 const supabase = getSupabaseBrowserClient();

  useEffect(() => {
    // Initially get user from session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setloading(false)
      console.log("User loaded:", user); // Debug log
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setloading(false)
        console.log("Auth state changed:", session?.user); // Debug log
      }
    );

    return () => listener?.subscription.unsubscribe();
  }, [supabase]);

  return <UserContext.Provider value={{user, loading}}>{children}</UserContext.Provider>;

}

