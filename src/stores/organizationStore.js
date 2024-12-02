import { create } from 'zustand';
    import { supabase } from '../lib/supabase';

    export const useOrganizationStore = create((set, get) => ({
      organizations: [],
      loading: false,
      error: null,
      
      fetchOrganizations: async () => {
        set({ loading: true });
        const { data, error } = await supabase
          .from('organizations')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          set({ error: error.message, loading: false });
          return;
        }
        
        set({ organizations: data, loading: false, error: null });
      },
      
      addOrganization: async (organization) => {
        const { data, error } = await supabase
          .from('organizations')
          .insert([organization])
          .select()
          .single();
          
        if (error) {
          set({ error: error.message });
          return;
        }
        
        set(state => ({
          organizations: [data, ...state.organizations],
          error: null
        }));
        
        return data;
      },
      
      updateOrganization: async (id, updates) => {
        const { data, error } = await supabase
          .from('organizations')
          .update(updates)
          .eq('id', id)
          .select()
          .single();
          
        if (error) {
          set({ error: error.message });
          return;
        }
        
        set(state => ({
          organizations: state.organizations.map(org => 
            org.id === id ? data : org
          ),
          error: null
        }));
        
        return data;
      },
      
      deleteOrganization: async (id) => {
        const { error } = await supabase
          .from('organizations')
          .delete()
          .eq('id', id);
          
        if (error) {
          set({ error: error.message });
          return;
        }
        
        set(state => ({
          organizations: state.organizations.filter(org => org.id !== id),
          error: null
        }));
      }
    }));
