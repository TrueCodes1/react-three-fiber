import { useFrame } from "@react-three/fiber"
import { Router, useRouter } from "next/router"
import { useRef, useState } from "react"


export default function Box ({route, ...props}) {
    const mesh =  useRef()
    const router = useRouter()
    const [hovered, setHovered] = useState(false)
    const [scale, setScale] = useState(1)
    const [currentGrowth, setCurrentGrowth] = useState<"inc" | "dec">("inc")

    useFrame((state, delta) => {
        // @ts-ignore
        mesh.current.rotation.y += 0.01
        // @ts-ignore
        mesh.current.rotation.x += 0.01
        // @ts-ignore
        mesh.current.rotation.z += 0.01
        
        scale < 0.01 && setCurrentGrowth("inc")
        scale > 20 && setCurrentGrowth("dec")

        setScale(currentGrowth === "inc" ? scale+0.01 : scale-0.01) 
    })

    return (
        <mesh 
            ref={mesh} 
            scale={scale}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => router.push(route)}
            {...props}
        >
            <boxGeometry />
            <meshStandardMaterial color={hovered ? "#603bd0" : "#7649fe"} />
        </mesh>
    )
}