import React from 'react';
import { Project } from '@/types/realestate';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';
import Link from 'next/link';

interface ProjectGalleryProps { projects: Project[]; }

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-[16/9] bg-primary/10 flex items-center justify-center">
              <Building className="w-12 h-12 text-primary" />
            </div>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
