import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  href: string;
}

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
  icon,
  duration,
  level,
  href,
}: CourseCardProps) {
  return (
    <Link href={href}>
      <a className="group block h-full">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {icon}
                {level}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {subtitle}
            </p>

            {/* Duration */}
            <div className="mb-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{duration}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 group/btn">
              Scopri di più
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
