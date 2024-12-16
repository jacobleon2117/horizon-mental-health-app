import React from "react";
import { BookOpen, FileText, Video, Newspaper } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Educational Articles",
      description:
        "In-depth articles and guides on various mental health topics written by professionals.",
      linkText: "Browse Articles",
    },
    {
      icon: <Video className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Video Resources",
      description:
        "Expert talks, therapeutic exercises, and guided meditation sessions.",
      linkText: "Watch Videos",
    },
    {
      icon: <FileText className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Worksheets & Exercises",
      description:
        "Downloadable materials to support your mental health journey.",
      linkText: "Get Resources",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Latest Research",
      description:
        "Stay informed with the latest developments in mental health research.",
      linkText: "Read Updates",
    },
  ];

  return (
    <section className="min-h-screen bg-[rgb(26,55,91)] bg-opacity-5 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Resource Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(26,55,91)] ml-4">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href="#"
                  className="inline-block text-[rgb(129,136,151)] hover:text-[rgb(26,55,91)] font-medium transition-colors duration-300"
                >
                  {resource.linkText} →
                </a>
              </div>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-4">
                Helpful{" "}
                <span className="text-[rgb(129,136,151)]">Resources</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Access our comprehensive collection of mental health resources
                designed to support your wellbeing.
              </p>
              <p className="text-gray-600 mb-8">
                From educational articles to interactive exercises, our
                resources are carefully curated to provide you with valuable
                insights and practical tools for your mental health journey.
              </p>
            </div>

            {/* Resources Banner */}
            <div className="bg-[rgb(26,55,91)] rounded-xl p-8">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Need More Resources?
                </h3>
                <p className="text-gray-200 mb-6">
                  Our resource library is constantly growing. Sign up to get
                  notified when new materials are added.
                </p>
                <button className="bg-white text-[rgb(26,55,91)] px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] hover:text-white transition-colors duration-300 text-base font-medium self-start">
                  View All Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
