import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({children, isMobile}) => {

    const groupRef = useRef();
    
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position, [0,0,20],0.4);

        if(!isMobile) {
          easing.damp3(state.camera.position, [0,0,20],0.4);
          easing.dampE(groupRef.current.rotation, [-state.pointer.y /3 , -state.pointer.x / 4, 0], 0.25, delta)
        }
    })
  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}

export default HeroCamera