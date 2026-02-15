import { ArrowRight, Users, Target } from 'lucide-react';

interface CourseContentTemplateProps {
  courseName: string;
  target: string;
  objectives: string;
  description?: string;
}

export default function CourseContentTemplate({
  courseName,
  target,
  objectives,
  description
}: CourseContentTemplateProps) {
  return (
    <div className="space-y-6">
      {description && (
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">A Chi È Rivolto</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {target}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
        <div className="flex items-start gap-4">
          <Target className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-900 mb-3">Obiettivi del Corso</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {objectives}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold mb-2">Pronto a iniziare?</h4>
            <p className="text-blue-100">Contattaci per informazioni e iscrizioni</p>
          </div>
          <ArrowRight className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
