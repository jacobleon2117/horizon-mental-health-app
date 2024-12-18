// src/pages/dashboard/pages/e_visit-page/index.jsx
import React, { useState } from "react";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  MessageSquare,
  Phone,
  Settings,
} from "lucide-react";

const EVisitPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const ControlButton = ({ icon: Icon, active, onClick, label }) => (
    <button
      onClick={onClick}
      className={`p-4 rounded-full ${
        active ? "bg-[rgb(26,55,91)] text-white" : "bg-gray-100 text-gray-600"
      } hover:opacity-90 transition-all`}
      title={label}
    >
      <Icon size={24} />
    </button>
  );

  return (
    <div className="h-[calc(100vh-6rem)]">
      {/* Video Area */}
      <div className="grid grid-cols-4 gap-4 h-[70%] mb-4">
        {/* Main Video */}
        <div className="col-span-3 bg-gray-800 rounded-lg relative">
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
            Dr. Sarah Smith
          </div>
        </div>

        {/* Self Video */}
        <div className="bg-gray-800 rounded-lg relative">
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
            You
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4 mb-4">
        <ControlButton
          icon={isMuted ? MicOff : Mic}
          active={!isMuted}
          onClick={() => setIsMuted(!isMuted)}
          label={isMuted ? "Unmute" : "Mute"}
        />
        <ControlButton
          icon={isVideoOn ? Video : VideoOff}
          active={isVideoOn}
          onClick={() => setIsVideoOn(!isVideoOn)}
          label={isVideoOn ? "Turn off video" : "Turn on video"}
        />
        <ControlButton
          icon={MessageSquare}
          active={true}
          onClick={() => {}}
          label="Chat"
        />
        <ControlButton
          icon={Settings}
          active={false}
          onClick={() => {}}
          label="Settings"
        />
        <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
          End Call
        </button>
      </div>

      {/* Session Info */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">
              Therapy Session with Dr. Sarah Smith
            </h2>
            <p className="text-gray-500">Duration: 45:23</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-[rgb(26,55,91)] hover:underline">
              View Notes
            </button>
            <button className="text-[rgb(26,55,91)] hover:underline">
              Technical Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVisitPage;
