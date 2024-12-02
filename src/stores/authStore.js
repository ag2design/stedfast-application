import { create } from 'zustand';
    import { supabase } from '../lib/supabase';

    export const useAuthStore = create((set) => ({
      user: null,
      session: null,
      loading: true,
      signIn: async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        set({ user: data.user, session: data.session });
        return data;
      },
      signUp: async ({ email, password, organizationName }) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              organization_name: organizationName,
            },
          },
        });
        if (error) throw error;
        return data;
      },
      signOut: async () => {
        await supabase.auth.signOut();
        set({ user: null, session: null });
      },
      setUser: (user) => set({ user }),
      setSession: (session) => set({ session }),
      setLoading: (loading) => set({ loading }),
    }));
