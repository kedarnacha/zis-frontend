import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from './types';

type AuthState = {
  isAuthenticated: boolean;
  hasHydrated: boolean;
  user: null | User;
  token: null | string;
  login: (user: User, token: string) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
  logOut: () => void;
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
      logOut: () => set({ isAuthenticated: false, user: null, token: null }),
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

export default useAuthStore;
