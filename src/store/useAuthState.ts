import useAuthStore from './useAuthStore';
import { useStore } from './useStore';

export const useAuthState = () => {
  return useStore(useAuthStore, (state) => state);
};
