/* eslint-disable @typescript-eslint/no-explicit-any */
/*

The MIT License

Copyright (c) 2021- Stripe, Inc. (https://stripe.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import type { createElement, ComponentType, Fragment, ReactNode } from "react";

import type { Tag, RenderableTreeNodes, Scalar } from "@markdoc/markdoc";

const isTag = (tag: any): tag is Tag => {
	return !!(tag?.$$mdtype === "Tag");
};

type ReactShape = Readonly<{
	createElement: typeof createElement;
	Fragment: typeof Fragment;
}>;

type Component = ComponentType<unknown>;

function tagName(
	name: string,
	components: Record<string, Component> | ((string: string) => Component)
): string | Component {
	return typeof name !== "string"
		? name // This can be an object, e.g. when React.forwardRef is used
		: name[0] !== name[0].toUpperCase()
		? name
		: components instanceof Function
		? components(name)
		: components[name];
}

export default function markdocReactRenderer(
	node: RenderableTreeNodes,
	React: ReactShape,
	{ components = {} } = {}
) {
	function deepRender(value: any): any {
		if (value == null || typeof value !== "object") return value;

		if (Array.isArray(value)) return value.map(item => deepRender(item));

		if (value.$$mdtype === "Tag") return render(value);

		if (typeof value !== "object") return value;

		const output: Record<string, Scalar> = {};
		for (const [k, v] of Object.entries(value)) output[k] = deepRender(v);
		return output;
	}

	function render(node: RenderableTreeNodes): ReactNode {
		if (Array.isArray(node))
			return React.createElement(React.Fragment, null, ...node.map(render));

		if (node === null || typeof node !== "object" || !isTag(node))
			return node as ReactNode;

		const {
			name,
			attributes: { class: className, ...attrs } = {},
			children = []
		} = node;

		if (className) attrs.className = className;

		return React.createElement(
			tagName(name, components),
			Object.keys(attrs).length == 0 ? null : deepRender(attrs),
			...children.map(render)
		);
	}

	return render(node);
}
