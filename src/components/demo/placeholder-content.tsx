"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";




const CameraView = ({ index, source, mlMode, toggleMlMode, className }) => (
  <Card className={`col-span-1 ${className}`}>
    <CardHeader>
      <h3 className="text-lg font-semibold">Camera View {index + 1}</h3>
    </CardHeader>
    <CardContent>
      <div className="flex items-center mb-2">
        <Button
          className={`mr-2 ${
            mlMode
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
          onClick={toggleMlMode}
        >
          {mlMode ? "ML Mode" : "Normal Mode"}
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

const CameraDetails = ({
  camNumber,
  signal,
  light,
  traffic,
  delay,
  accident,
  className
}) => (
  <Card className={`col-span-1 ${className}`}>
    <CardHeader>
      <h3 className="text-lg font-semibold">Cam {camNumber}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        <strong>Signal:</strong>{" "}
        <span className={`text-${signal.color}-500`}>•</span> {signal.text}
        <br />
        <strong>Light:</strong>{" "}
        <span className={`text-${light.color}-500`}>•</span> {light.text}
        <br />
        <strong>Traffic:</strong> {traffic}
        <br />
        <strong>Delay:</strong> {delay}
        <br />
        <strong> Accidents: </strong> {accident}
      </p>
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(formData).some((value) => !value)) {
      setError("Please fill all fields.");
    } else {
      setError("");
      setSubmitted(true);
      console.log(formData);
    }
  };

  const toggleMlMode = (index : number) => {
    setMlMode((prev) => prev.map((mode, i) => (i === index ? !mode : mode)));
  };

  const videoSources1 = [
    {
      normal:
        "https://videos.pexels.com/video-files/5152122/5152122-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196071/12324431_640_360_29fps.mp4"
    },
    {
      normal:
        "https://videos.pexels.com/video-files/11668582/11668582-uhd_2560_1440_60fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196072/12324432_960_540_29fps.mp4"
    },
    {
      normal:
        "https://videos.pexels.com/video-files/7018470/7018470-uhd_2560_1440_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196073/12324429_1280_720_29fps.mp4"
    },
    {
      normal:
        "https://videos.pexels.com/video-files/5649316/5649316-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196070/12324428_1280_720_29fps.mp4"
    }
  ];

  const videoSources2 = [
    {
      normal:
        "https://videos.pexels.com/video-files/5152122/5152122-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196071/12324431_640_360_29fps.mp4"
    },
    {
      normal:
        "/videos/accident.mp4",
      ml: "/videos/accidentml.mp4"
    },
    {
      normal:
        "https://videos.pexels.com/video-files/7018470/7018470-uhd_2560_1440_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196073/12324429_1280_720_29fps.mp4"
    },
    {
      normal:
        "https://videos.pexels.com/video-files/5649316/5649316-hd_1920_1080_30fps.mp4",
      ml: "https://videos.pexels.com/video-files/28196070/12324428_1280_720_29fps.mp4"
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Intersection Configuration</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-foreground mb-2"
              >
                City
              </label>
              
              <div id="city">
  <Select
    value={formData.city}
    onValueChange={(value) => handleInputChange("city", value)}
  >
    <SelectTrigger>
      <span>{formData.city || "Select City"}</span>
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="new_york">New York City</SelectItem>
      <SelectItem value="los_angeles">Los Angeles</SelectItem>
      <SelectItem value="chicago">Chicago</SelectItem>
    </SelectContent>
  </Select>
</div>

            </div>
            <div>
              <label
                htmlFor="intersectionType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Intersection Type
              </label>
              <Select
                id="intersectionType"
                value={formData.intersectionType}
                onValueChange={(value) =>
                  handleInputChange("intersectionType", value)
                }
              >
                <SelectTrigger>
                  <span>
                    {formData.intersectionType || "Select Intersection Type"}
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3_lanes">3 Lanes</SelectItem>
                  <SelectItem value="4_lanes">4 Lanes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label
                htmlFor="roadCrossing"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Road 
              </label>
              <Select
                id="roadCrossing"
                value={formData.roadCrossing}
                onValueChange={(value) =>
                  handleInputChange("roadCrossing", value)
                }
              >
                <SelectTrigger>
                  <span>{formData.roadCrossing || "Select Road Type"}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="road_1">Road 1</SelectItem>
                  <SelectItem value="road_2">Road 2</SelectItem>
                  <SelectItem value="road_3">Road 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className="flex justify-center mt-6">
            <Button
              className="bg-primary text-primary-foreground"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>

      {submitted &&
        formData.city === "chicago" &&
        formData.intersectionType === "4_lanes" &&
        formData.roadCrossing === "road_1" && (
          <>
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
                    <h3 className="text-lg font-semibold mb-2">
                      Camera Status
                    </h3>
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
                  <h3 className="text-xl font-semibold mb-4">
                    Intersection Details
                  </h3>
                  <p className="text-sm space-y-2">
                    <strong>Location:</strong> Street-45 Intersection A<br />
                    <strong>Traffic Density:</strong> Moderate
                    <br />
                    <strong>Time of Day:</strong> 2:00 PM
                    <br />
                    <strong>Weather:</strong> Sunny, 75°F
                    <br />
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
                                  signal={{ color: "green", text: "Green (Extended)" }}
                                  light={{ color: "green", text: "Green" }}
                                  traffic="Heavy"
                                  delay="Extended green light to manage heavy traffic"
                                  accident="none detected" className={undefined}                  />
                  <CameraDetails
                                  camNumber={2}
                                  signal={{ color: "green", text: "Green (Extended)" }}
                                  light={{ color: "green", text: "Green" }}
                                  traffic="Moderate"
                                  delay="Reduced red light duration for smoother flow"
                                  accident="none detected" className={undefined}                  />
                  <CameraDetails
                                  camNumber={3}
                                  signal={{ color: "red", text: "Red (Shortened)" }}
                                  light={{ color: "red", text: "Red" }}
                                  traffic="Light"
                                  delay="Shortened red light to optimize flow"
                                  accident="none detected" className={undefined}                  />
                  <CameraDetails
                                  camNumber={4}
                                  signal={{ color: "red", text: "Red" }}
                                  light={{ color: "red", text: "Red" }}
                                  traffic="Light"
                                  delay="Adjusted yellow light for moderate traffic"
                                  accident="none detected" className={undefined}                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoSources1.map((source, index) => (
                <CameraView
                      key={index}
                      index={index}
                      source={source}
                      mlMode={mlMode[index]}
                      toggleMlMode={() => toggleMlMode(index)} className={undefined}                />
              ))}
            </div>
          </>
        )}

      {submitted &&
        formData.city === "chicago" &&
        formData.intersectionType === "4_lanes" &&
        formData.roadCrossing === "road_2" && (
          <>
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
                    <h3 className="text-lg font-semibold mb-2">
                      Camera Status
                    </h3>
                    <Badge variant="success">All Active</Badge>
                  </div>
                  <div className="animate-blink p-2 rounded-md ">
                    <h3 className="text-lg font-semibold mb-2">Accidents</h3>
                    <Badge variant="secondary"> detected cam2</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Light Delay</h3>
                    <Badge variant="warning">Cam 1 (+5s)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Intersection Overview</h2>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <video
                    src="/videos/accident.mp4"
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
                  <h3 className="text-xl font-semibold mb-4">
                    Intersection Details
                  </h3>
                  <p className="text-sm space-y-2">
                    <strong>Location:</strong> Street-45 Intersection B<br />
                    <strong>Traffic Density:</strong> Moderate(Accident detected)
                    <br />
                    <strong>Time of Day:</strong> 2:00 PM
                    <br />
                    <strong>Weather:</strong> Sunny, 75°F
                    <br />
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
                  {/* Camera 1: Adjacent to the accident */}
                  <CameraDetails
                                  camNumber={1}
                                  signal={{ color: "green", text: "Green (Extended)" }}
                                  light={{ color: "green", text: "Green" }}
                                  traffic="Heavy"
                                  delay="Extended green light to manage high traffic and reduce congestion due to accident in Camera 2"
                                  accident="Accident in Camera 2 affecting nearby lanes" className={undefined}                  />

                  {/* Camera 2: Accident occurred here */}
                  <div className="p-4 bg-red-100 rounded-md shadow-sm">
                    <CameraDetails
                                      camNumber={2}
                                      signal={{ color: "red", text: "Red" }}
                                      light={{ color: "red", text: "Red" }}
                                      traffic="Moderate"
                                      delay="Red light for emergency access"
                                      accident="Major crash; emergency response in progress" className={undefined}                    />
                  </div>

                  {/* Camera 3: Light traffic but affected by rerouting */}
                  <CameraDetails
                                  camNumber={3}
                                  signal={{ color: "yellow", text: "Yellow (Caution)" }}
                                  light={{ color: "yellow", text: "Yellow" }}
                                  traffic="Light to Moderate"
                                  delay="Yellow light to prepare for rerouted traffic"
                                  accident="Rerouted traffic due to accident in Camera 2" className={undefined}                  />

                  {/* Camera 4: Moderate traffic but potentially increasing */}
                  <CameraDetails
                                  camNumber={4}
                                  signal={{ color: "green", text: "Green" }}
                                  light={{ color: "yellow", text: "Yellow" }}
                                  traffic="Moderate"
                                  delay="Green light to manage potential increased traffic"
                                  accident="Monitoring for changes due to nearby accident" className={undefined}                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoSources2.map((source, index) => (
                <CameraView
                  key={index}
                  index={index}
                  source={source}
                  mlMode={mlMode[index]}
                  toggleMlMode={() => toggleMlMode(index)}
                  className={index === 1 ? "animate-blink" : ""} 
                />
              ))}
            </div>
          </>
        )}

       
    </div>
  );
}

