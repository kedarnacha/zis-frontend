import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from './types';
import { useStore } from './useStore';

type AuthState = {
  isAuthenticated: boolean;
  hasHydrated: boolean;
  user: null | User;
  token: null | string;
  login: (user: User, token: string) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      hasHydrated: true,
      user: null,
      token: null,
      login: (user, token) => {
        return set({ isAuthenticated: true, user, token });
      },
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export const useAuthState = () => {
  return useStore(useAuthStore, (state) => state);
};

export default useAuthStore;
