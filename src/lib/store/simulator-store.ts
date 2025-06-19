import { create } from 'zustand';

// Définition des types pour plus de robustesse
type ProjectType = 'purchase' | 'investment' | 'buyout' | 'curiosity';
// Ajout du nouveau type pour la situation
type Situation = 'solo' | 'duo';

interface SimulatorState {
  step: number;
  projectType: ProjectType | null;
  // Ajout de la nouvelle propriété d'état
  situation: Situation | null;
  setProjectType: (type: ProjectType) => void;
  // Ajout de la nouvelle action
  setSituation: (situation: Situation) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const TOTAL_STEPS = 6;

export const useSimulatorStore = create<SimulatorState>((set) => ({
  step: 1,
  projectType: null,
  // Initialisation à null pour forcer un choix
  situation: null,
  setProjectType: (type) => set({ projectType: type }),
  // Implémentation de la nouvelle action
  setSituation: (situation) => set({ situation }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, TOTAL_STEPS) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
})); 