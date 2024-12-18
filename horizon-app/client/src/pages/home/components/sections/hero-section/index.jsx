import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const { user } = useAuth(); // Access user state from context
  const navigate = useNavigate(); // Hook to programmatically navigate

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    if (!user) {
      // If the user is not logged in, navigate to the login page
      navigate("/login");
    } else {
      // If the user is logged in, navigate to the dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative h-[100vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/home-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          <span className="text-white">A Brighter </span>
          <span className="bg-gradient-to-r from-[rgb(26,55,91)] via-[rgb(26,55,91)] to-[rgb(37,39,54)] text-transparent bg-clip-text font-extrabold">
            Horizon
          </span>
          <span className="text-white"> Ahead</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with licensed therapists, access resources, and take control
          of your mental health journey with personalized support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {user ? (
            <Link
              to="/dashboard"
              className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(129,136,151)] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <button
                onClick={handleGetStartedClick}
                className="bg-[rgb(26,55,91)] text-white px-8 py-3 rounded-lg hover:bg-[rgb(129,136,151)] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <Link
                to="#features"
                className="bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-base font-medium border border-white/30"
              >
                Learn More
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 
                 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          className="w-9 h-9 text-white hover:text-[rgb(129,136,151)]"
          strokeWidth={2}
        />
      </button>
    </div>
  );
};

export default HeroSection;
