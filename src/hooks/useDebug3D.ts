import { useSearchParams } from "next/navigation";

export const DEBUG_3D_SEARCH_PARAM = "__debug3d";
const useDebug3D = () => {
	const searchParams = useSearchParams();

	return searchParams.has(DEBUG_3D_SEARCH_PARAM);
};

export default useDebug3D;