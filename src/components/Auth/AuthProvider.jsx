import React, { useEffect } from 'react';
    import { supabase } from '../../lib/supabase';
    import { useAuthStore } from '../../stores/authStore';

    export function AuthProvider({ children }) {
      const { setUser, setSession, setLoading } = useAuthStore();

      useEffect(() => {
        // Check active sessions and sets the user
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        });

        // Listen for changes on auth state (signed in, signed out, etc.)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        });

        return () => subscription.unsubscribe();
      }, []);

      return children;
    }
