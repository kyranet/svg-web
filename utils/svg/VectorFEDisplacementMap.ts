import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEDisplacementMap extends BaseVectorElement<SVGFEDisplacementMapElement, 'feDisplacementMap'> {
	public constructor(element: SVGFEDisplacementMapElement) {
		super({ element, title: 'FE Displacement Map', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
