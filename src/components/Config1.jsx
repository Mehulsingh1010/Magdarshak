"use client";

import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



const CameraDetails = ({ camNumber, signal, light, traffic, delay }) => (
    <Card className="bg-gray-100 dark:bg-gray-700">
      <CardHeader>
        <h3 className="text-lg font-semibold">Cam {camNumber}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          <strong>Signal:</strong> <span className={`text-${signal.color}-500`}>•</span> {signal.text}<br />
          <strong>Light:</strong> <span className={`text-${light.color}-500`}>•</span> {light.text}<br />
          <strong>Traffic:</strong> {traffic}<br />
          <strong>Delay:</strong> {delay}
        </p>
      </CardContent>
    </Card>
  );
  
const GeneralSettings = () => (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-2xl font-bold">General Settings</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Model Status</h3>
            <Badge variant="success">Working</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Camera Status</h3>
            <Badge variant="success">All Active</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Accidents</h3>
            <Badge variant="secondary">None</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Light Delay</h3>
            <Badge variant="warning">Cam 1 (+5s)</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const toggleMlMode = (index) => {
    setMlMode(prev => prev.map((mode, i) => i === index ? !mode : mode));
  };

  const videoSources = [
    {
      normal: "https://videos.pexels.com/video-files/5152122/5152122-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196071/12324431_640_360_29fps.mp4",
    },
    {
      normal: "https://videos.pexels.com/video-files/11668582/11668582-uhd_2560_1440_60fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196072/12324432_960_540_29fps.mp4",
    },
    {
      normal: "https://videos.pexels.com/video-files/7018470/7018470-uhd_2560_1440_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196073/12324429_1280_720_29fps.mp4",
    },
    {
      normal: "https://videos.pexels.com/video-files/5649316/5649316-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196070/12324428_1280_720_29fps.mp4",
    },
  ];
  
const CameraView = ({ index, source, mlMode, toggleMlMode }) => (
    <Card className="col-span-1">
      <CardHeader>
        <h3 className="text-lg font-semibold">Camera View {index + 1}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Button
            className={`mr-2 ${mlMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'}`}
            onClick={toggleMlMode}
          >
            {mlMode ? 'ML Mode' : 'Normal Mode'}
          </Button>
        </div>
        <div className="w-full h-[300px]">
          <video
            src={mlMode ? source.ml : source.normal}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload noremoteplayback"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  );
  


    export default function IntersectionDashboard() {
        const [formData, setFormData] = useState({
          city: "",
          intersectionType: "",
          roadCrossing: ""
        });
        const [error, setError] = useState("");
        const [submitted, setSubmitted] = useState(false);
        const [mlMode, setMlMode] = useState([false, false, false, false]);
      
        const handleInputChange = (field, value) => {
          setFormData(prev => ({ ...prev, [field]: value }));
        };
      
        const handleSubmit = () => {
          if (Object.values(formData).some(value => !value)) {
            setError("Please fill all fields.");
          } else {
            setError("");
            setSubmitted(true);
            console.log(formData);
          }
        }}
  
    <div>

<Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Intersection Overview</h2>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <video
                  src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  preload="auto"
                  controlsList="nodownload noremoteplayback"
                  className="w-full h-[300px] object-cover rounded-md"
                />
                <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 font-bold rounded-t-md">
                  Top View
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Intersection Details</h3>
                <p className="text-sm space-y-2">
                  <strong>Location:</strong> Street-45 Intersection A<br />
                  <strong>Traffic Density:</strong> Moderate<br />
                  <strong>Time of Day:</strong> 2:00 PM<br />
                  <strong>Weather:</strong> Sunny, 75°F<br />
                  <strong>Address:</strong> 123 Main St, City, State
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Camera Information</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CameraDetails
                  camNumber={1}
                  signal={{ color: 'green', text: 'Green' }}
                  light={{ color: 'yellow', text: 'Yellow' }}
                  traffic="Heavy"
                  delay="5 secs (Ambulance detected in opposte lane)"
                />
                <CameraDetails
                  camNumber={2}
                  signal={{ color: 'red', text: 'Red' }}
                  light={{ color: 'green', text: 'Green' }}
                  traffic="Moderate"
                  delay="None"
                />
                <CameraDetails
                  camNumber={3}
                  signal={{ color: 'yellow', text: 'Yellow' }}
                  light={{ color: 'red', text: 'Red' }}
                  traffic="Light"
                  delay="2 secs"
                />
                <CameraDetails
                  camNumber={4}
                  signal={{ color: 'green', text: 'Green' }}
                  light={{ color: 'yellow', text: 'Yellow' }}
                  traffic="Moderate"
                  delay="1 sec"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoSources.map((source, index) => (
              <CameraView
                key={index}
                index={index}
                source={source}
                mlMode={mlMode[index]}
                toggleMlMode={() => toggleMlMode(index)}
              />
            ))}
          </div>
      
    </div>
  }

