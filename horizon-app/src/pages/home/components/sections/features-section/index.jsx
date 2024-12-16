import React, { useState } from "react";
import {
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState(null);

  const features = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Online Therapy Sessions",
      description:
        "Connect with licensed therapists through secure video calls and messaging.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Flexible Scheduling",
      description:
        "Book appointments that fit your schedule with our easy-to-use calendar system.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Resource Library",
      description:
        "Access a comprehensive library of mental health resources and self-help materials.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Support Groups",
      description:
        "Join moderated group sessions with others who share similar experiences.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our around-the-clock support system.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Personalized Care",
      description:
        "Receive tailored treatment plans based on your unique needs and goals.",
    },
  ];

  const handleFeatureClick = (index) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side Content */}
          <div>
            <h2 className="text-3xl font-bold text-[rgb(26,55,91)] mb-4">
              Features that{" "}
              <span className="text-[rgb(129,136,151)]">
                Support Your Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our platform is designed to provide comprehensive mental health
              support through various features and tools. Each element is
              carefully crafted to ensure you receive the best possible care and
              support on your wellness journey.
            </p>
            <p className="text-gray-600 mb-6">
              From professional therapy sessions to 24/7 support, our features
              work together to create a supportive environment for your mental
              health needs. Explore our key features to learn how we can help
              you on your path to wellness.
            </p>
            <button className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] transition-colors duration-300 text-base font-medium">
              Explore All Features
            </button>
          </div>

          {/* Right Side - Features Accordion */}
          <div className="h-[600px]">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleFeatureClick(index)}
                    className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center">
                      <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg">
                        <div className="text-[rgb(129,136,151)]">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-[rgb(26,55,91)] ml-3">
                        {feature.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[rgb(129,136,151)] transform transition-transform duration-300 ${
                        openFeature === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openFeature === index
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-4 pb-4 text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
