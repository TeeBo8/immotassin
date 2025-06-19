import { create } from 'zustand';

// Définition des types pour plus de robustesse
type ProjectType = 'purchase' | 'investment' | 'buyout' | 'curiosity';

interface SimulatorState {
  step: number;
  projectType: ProjectType | null;
  setProjectType: (type: ProjectType) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const TOTAL_STEPS = 6;

export const useSimulatorStore = create<SimulatorState>((set) => ({
  step: 1,
  projectType: null,
  setProjectType: (type) => set({ projectType: type }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, TOTAL_STEPS) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
})); 