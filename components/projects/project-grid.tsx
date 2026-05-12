import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectGridProps {
  projects: Array<{
    id: string;
    name: string;
    location: string;
    description: string;
    units: number;
    image: string;
  }>;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden border-slate-200 group">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-emerald-600 text-white font-semibold">
                {project.units} Units Total
              </Badge>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 flex justify-between items-center">
              {project.name}
              <Building className="h-6 w-6 text-emerald-600" />
            </CardTitle>
            <div className="flex items-center text-slate-500 text-sm">
              <MapPin className="h-4 w-4 mr-1 text-slate-400" />
              {project.location}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t border-slate-100 p-4">
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white flex justify-between px-6">
              View Available Units
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
