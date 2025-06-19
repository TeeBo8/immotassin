import { ProjectSimulator } from '@/components/project-simulator/ProjectSimulator';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <ProjectSimulator />
    </main>
  );
}
