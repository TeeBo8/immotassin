import { create } from 'zustand';

// Définition de nos types pour une robustesse maximale
type ProjectType = 'purchase' | 'investment' | 'buyout' | 'curiosity';
type Situation = 'solo' | 'duo';
type ProfessionalStatus = 'cdi' | 'cdd' | 'freelance' | 'public' | 'other';

interface UserInfo {
  status: ProfessionalStatus | null;
  income: number;
}

interface SimulatorState {
  step: number;
  projectType: ProjectType | null;
  situation: Situation | null;
  user1: UserInfo;
  user2: UserInfo;
  setProjectType: (type: ProjectType) => void;
  setSituation: (situation: Situation) => void;
  // Nouvelle action pour mettre à jour les infos d'un utilisateur
  updateUserInfo: (user: 'user1' | 'user2', data: Partial<UserInfo>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const TOTAL_STEPS = 6;

const initialUserInfo: UserInfo = {
  status: null,
  income: 0,
};

export const useSimulatorStore = create<SimulatorState>((set) => ({
  step: 1,
  projectType: null,
  situation: null,
  user1: { ...initialUserInfo },
  user2: { ...initialUserInfo },
  setProjectType: (type) => set({ projectType: type }),
  setSituation: (situation) => set({ situation }),
  updateUserInfo: (user, data) =>
    set((state) => ({
      [user]: { ...state[user], ...data },
    })),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, TOTAL_STEPS) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
})); 