"use client";

import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState
} from "react";

interface Dimensions {
	width: number;
	height: number;
}

const getScreenDimensions = (): Dimensions => {
	return {
		width:
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth,
		height:
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight
	};
};

const ShaderCanvas = () => {
	const ref = useRef<HTMLCanvasElement>(null);
	const [dimensions, setDimensions] = useState<Dimensions>({
		width: -1,
		height: -1
	});

	const updateDimensions = useCallback(() => {
		setDimensions(getScreenDimensions);
	}, []);

	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, [updateDimensions]);

	useLayoutEffect(() => {
		if (!ref.current) return;

		const gl = ref.current.getContext("webgl");
		if (!gl) {
			return console.warn(
				"<ShaderCanvas />: Not running due to no browser support"
			);
		}

		// Set clear color to black, fully opaque
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		// Clear the color buffer with specified clear color
		gl.clear(gl.COLOR_BUFFER_BIT);
	}, []);

	return (
		<canvas width={dimensions.width} height={dimensions.height} ref={ref} />
	);
};

export default ShaderCanvas;
