import React from 'react';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface FeatureTagsProps { tags: string[]; onRemove?: (tag: string) => void; editable?: boolean; }

export const FeatureTags: React.FC<FeatureTagsProps> = ({ tags, onRemove, editable = false }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="px-2 py-1 flex items-center gap-1">
          {tag}
          {editable && onRemove && (
            <button onClick={() => onRemove(tag)} className="ml-1 hover:text-destructive focus:outline-none" type="button">
              <X className="w-3 h-3" />
            </button>
          )}
        </Badge>
      ))}
    </div>
  );
};
