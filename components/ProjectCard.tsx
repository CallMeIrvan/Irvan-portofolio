// components/ProjectCard.tsx
import Link from 'next/link';

// Mendefinisikan tipe data untuk props
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col hover:shadow-lg hover:shadow-blue-500/20 transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-700 text-xs text-blue-300 py-1 px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-auto">
        Lihat Detail &rarr;
      </Link>
    </div>
  );
};

export default ProjectCard;