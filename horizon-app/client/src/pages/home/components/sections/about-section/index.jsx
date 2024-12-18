import React from "react";
import { UserCheck, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <UserCheck className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Professional Support",
      description:
        "Connect with licensed therapists who understand your unique journey and provide personalized guidance.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Safe Space",
      description:
        "Your privacy and security are our top priorities. Feel safe sharing your thoughts in our confidential environment.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[rgb(129,136,151)]" />,
      title: "Compassionate Care",
      description:
        "Experience understanding and empathy in every interaction as we support your mental health journey.",
    },
  ];

  return (
    <section
      id="about-section"
      className="py-20 bg-[rgb(26,55,91)] bg-opacity-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(26,55,91)] mb-4">
            About <span className="text-[rgb(129,136,151)]">Horizon</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to making mental healthcare accessible,
            personalized, and effective for everyone. Our platform connects you
            with the support you need, when you need it.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[rgb(26,55,91)] bg-opacity-10 p-2 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[rgb(26,55,91)] ml-4">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-xl hover:bg-[rgb(129,136,151)] transition-colors duration-300 text-lg font-medium">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
