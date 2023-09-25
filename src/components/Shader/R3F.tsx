"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

import waterVertexShader from "./shaders/water/vertex.glsl";
import waterFragmentShader from "./shaders/water/fragment.glsl";
import { OrbitControls } from "@react-three/drei";
import useDebug3D from "@/hooks/useDebug3D";

// Colors
const debugObject = {
	depthColor: "#bd8100",
	surfaceColor: "#ffcd42"
};

function MeshGradient(props: ThreeElements["mesh"]) {
	const meshRef = useRef<THREE.Mesh>(null!);
	const materialRef = useRef<THREE.ShaderMaterial>(null!);

	useFrame((state, delta) => {
		materialRef.current.uniforms.uTime.value += delta;
	});

	return (
		<mesh {...props} ref={meshRef} rotation={[-Math.PI * 0.5, 0, 0]}>
			<planeGeometry args={[4, 2, 512, 512]} />
			<shaderMaterial
				ref={materialRef}
				vertexShader={waterVertexShader}
				fragmentShader={waterFragmentShader}
				uniforms={{
					uTime: { value: new Date().getSeconds() },

					uBigWavesElevation: { value: 0.2 },
					uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
					uBigWavesSpeed: { value: 0.25 },

					uSmallWavesElevation: { value: 0.15 },
					uSmallWavesFrequency: { value: 1.5 },
					uSmallWavesSpeed: { value: 0.1 },
					uSmallIterations: { value: 2 },

					uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
					uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
					uColorOffset: { value: 0.5 },
					uColorMultiplier: { value: 3 }
				}}
			></shaderMaterial>
		</mesh>
	);
}

const CitrineCanvas = () => {
	const debug = useDebug3D();

	return <Canvas
		camera={{
			position: [0, 0.6, 0]
		}}
	>
		<MeshGradient position={[0, 0, 0]} />
		{debug && (
			<>
				<OrbitControls />
				<axesHelper />
			</>
		)}
	</Canvas>;
};

export default CitrineCanvas;
