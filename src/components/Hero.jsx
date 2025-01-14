import React, { Suspense } from "react"
import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../utils/HackerRoom"
import CanvasLoader from "../utils/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import RoboBot from "../utils/RoboBot"
import { responsiveSizes } from "../constants"
import ReactLogo from "../utils/ReactLogo"
import HeroCamera from "../utils/HeroCamera"
import Button from "./Button"

const Hero = () => {

    //only use for perfectly align the model using ui
    // const c = useControls('HackerRoom', {
    //     positionX: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     positionY: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     positionZ: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationX: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationY: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationZ: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //  scale:{
    //     value:0.07,
    //     min:-0.01,
    //     max:1
    // }})

    //media query for different devices 
    const isSmall = useMediaQuery({maxWidth:440})
    const isMobile = useMediaQuery({maxWidth:786});
    const isTablet = useMediaQuery({minWidth:768, maxWidth:1024})

    const responsive = responsiveSizes(isSmall,isMobile,isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl text-white font-generalsans text-center font-medium">
                Hi, am Akash Kumar <span className="waving-hand">👋🏻</span>
            </p>
            <p className="hero_tag text-gray_gradient">MERN Stack Developer</p>
        </div>
        <div className="w-full h-full absolute inset-0">

            {/* leva is use to customize model by ui
            <Leva/> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                <PerspectiveCamera makeDefault position={[0,0,13]}/>
                <HeroCamera isMobile={isMobile}>
                <HackerRoom
                    scale={responsive.deskScale} 
                    position={responsive.deskPosition} 
                    rotation={[0,-Math.PI,0]} 

                    //for development only to find perfect fit for for model
                    // scale={[c.scale,c.scale,c.scale]}
                    // position={[c.positionX,c.positionY,c.positionZ]}
                    // rotation={[c.rotationX,c.rotationY,c.rotationZ]}
                />
                </HeroCamera>
                <group>
                    <RoboBot position={responsive.roboBotPosition}/>
                    <ReactLogo position={responsive.reactLogoPosition}/>
                </group>
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>

        <div className=" absolute left-0 right-0 bottom-7 w-full z-10 c-space flex justify-center items-center ">
                <a href="#contact" className="w-fit">
                    <Button name="Let's Work Together" />
                </a>
        </div>
    </section>
  )
}

export default Hero