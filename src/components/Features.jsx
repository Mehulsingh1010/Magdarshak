import React from 'react';
import Image from 'next/image';
import img1 from "../images/traffic.png";
import img2 from "../images/accident.png";

const FeaturesPage = () => {
  return (
    <div className="bg-background dark:bg-background-dark py-8">
      <div className="container mx-auto px-6 md:px-8">
        <h1 className="text-3xl font-bold text-primary dark:text-white pb-10 text-center">
          What Maर्गदर्शk Offers
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Feature 1 */}
          <div className="flex-1 flex flex-col items-center bg-card dark:bg-card-dark p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-8 md:mb-0">
            <Image
              src={img1}
              alt="Traffic Jam Detection"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-primary dark:text-white mt-4">
              Traffic Flow Control
            </h2>
            <p className="text-primary dark:text-muted-foreground mt-2 text-center max-w-sm">
              Our system detects traffic jams by analyzing the number of vehicles on each road and comparing it to the available empty space. It then controls the traffic lights at a 4-way crossing to manage traffic flow effectively.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex-1 flex flex-col items-center bg-card dark:bg-card-dark p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Image
              src={img2}
              alt="Collision Detection"
              width={500}
              height={500}
              className=" object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-primary dark:text-white mt-4">
              Collision Detection
            </h2>
            <p className=" text-primary dark:text-muted-foreground mt-2 text-center max-w-sm">
              The system detects collisions by monitoring vehicle movements and identifying potential accidents. In the event of a collision, it automatically notifies emergency services and relevant help lines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
