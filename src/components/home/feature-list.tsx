import { FeatureItem } from "~/types/features";

interface FeatureListProps {
   features: FeatureItem[];
}

export function FeatureList({ features }: FeatureListProps) {
   return (
      <ul className="space-y-4" data-testid="feature-list">
         {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
               <span className="text-yellow-400 mt-1">✨</span>
               <p className="font-medium">{feature.text}</p>
            </li>
         ))}
      </ul>
   );
}
