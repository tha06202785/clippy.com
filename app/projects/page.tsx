import { realEstateApi } from "@/lib/realestate";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Project } from "@/types/realestate";

export default async function ProjectsPage() {
  let projects: Project[] = [];
  try { projects = await realEstateApi.searchProjects(); } catch { projects = []; }
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">New Developments</h1>
      {projects.length === 0 ? (
        <div className="text-center py-20 bg-muted">No projects found.</div>
      ) : (
        <ProjectGallery projects={projects} />
      )}
    </div>
  );
}
