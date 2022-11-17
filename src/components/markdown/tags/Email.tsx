import React, { useMemo } from "react";
import Anchor from "../nodes/Anchor";

const MAILTO_PREFIX = "mailto:";

const Email: React.FC<React.PropsWithChildren<{
	address: string;
	domain: string;
}>> = props => {

	const emailString = `${props.address}@${props.domain}`;

	return <Anchor href={MAILTO_PREFIX + emailString}>
		{emailString}
	</Anchor>;
};

export default Email;