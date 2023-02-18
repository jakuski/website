import { JSON_SCHEMA, load, YAMLException } from "js-yaml";

const onWarning = (e: YAMLException): void => {
	console.warn(`⚠ YAML Warning\n${e}`);
};

const parseYaml = (yamlString: string, filename?: string) => {
	return load(yamlString, {
		onWarning,
		filename,
		schema: JSON_SCHEMA, // This prevents non JSON compatible types being accepted.
		json: true
	});
};

export default parseYaml;
