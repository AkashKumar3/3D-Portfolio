import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import Button from '../components/Button.jsx';
import Profile3D from '../utils/Profile3D'; 
import CanvasLoader from '../utils/CanvasLoader.jsx';
import { OrbitControls } from '@react-three/drei';


const About = () => {

  const globeRef = useRef();

  useEffect(() => {
     if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 20.5037, lng: 78.9269 }, 
        2000 
      );
    }
  }, []);
  
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* First column, replacing grid-1 image with Profile3D */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container"> 
            {/* Canvas will display the 3D model here */}
            <Canvas className="w-full sm:h-[276px] h-fit object-contain" >
              <Suspense fallback={<CanvasLoader/>}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
                <Profile3D/>
                <OrbitControls
                    enableRotate={false} 
                />
              </Suspense>
            </Canvas>

            <div>
              <p className="grid-headtext">Hi, I’m Akash Kumar</p>
              <p className="grid-subtext">
               Always ready to learn new and eager to contribute my technical expertise and problem-solving
               skills to an innovative team.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/tech-stack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-cover bg-black-200" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
              ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                cameraOptions={{
                  lat: 20.5037,
                  lng: 78.9269,

                }}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 20.5037, lng: 78.9269, text: 'Akash is here', color: 'white', size: 2000 }]}
                labelSize={4 }
              />
            </div>
            <div className='flex items-center flex-col'>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext mb-8 w-">I'm based in India, and open to remote work worldwide.</p>
              <Button name="Contact Me" customStyle=" mt-5 w-56" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-l font-medium text-gray_gradient text-white">akashkumar8862825283@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
