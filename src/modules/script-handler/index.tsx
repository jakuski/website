import Script from "next/script";
import { Context, createContext, useCallback, useContext, useEffect, useState } from "react";

const scriptDefinitions = {
	vimeo: "https://player.vimeo.com/api/player.js"
};

type ScriptNames = keyof typeof scriptDefinitions;

type ScriptBooleansObject = Record<ScriptNames, boolean>;

interface ScriptContextType extends ScriptBooleansObject {
	useScript: (name: ScriptNames) => void;
}

const defaultScriptContextValue: ScriptBooleansObject = {
	vimeo: false
};

const ScriptContext: Context<ScriptContextType> = createContext<ScriptContextType>(Object.assign({
	useScript(name: ScriptNames) {}
}, defaultScriptContextValue));

const ScriptContextProvider: React.FC<React.PropsWithChildren> = props => {
	const [state, setState] = useState<ScriptBooleansObject>(defaultScriptContextValue);

	const useScript = useCallback((name: ScriptNames) => {
		state[name] = true;
		setState(state);
	}, [state]);

	const contextValue: ScriptContextType = {
		...state,
		useScript
	};

	return <ScriptContext.Provider value={contextValue}>
		{props.children}
	</ScriptContext.Provider>;
};

const useScript = (name: ScriptNames) => {
	const scripts = useContext(ScriptContext);
	const scriptLoaded = scripts[name];

	useEffect(() => {
		if (scriptLoaded) return;

		scripts.useScript(name);
	});
};

const ScriptLoader: React.FC = () => {
	const scripts = useContext(ScriptContext);

	const scriptNames = Object.keys(scripts) as ScriptNames[];

	const scriptElements = [];

	for (const script of scriptNames) {
		if (!scriptDefinitions[script]) continue;

		scriptElements.push(
			<Script src={scriptDefinitions[script]} key={script} id={"external-script__" + script} />
		);
	} 

	return <>
		{scriptElements}
	</>;
};

export {
	ScriptContextProvider,
	useScript,
	ScriptLoader
};