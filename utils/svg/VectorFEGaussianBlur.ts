import { EditorAttributesHeight, EditorAttributesWidth } from '#components';
import { BaseVectorElement } from './base/BaseVectorElement';

export class VectorFEGaussianBlur extends BaseVectorElement<SVGFEGaussianBlurElement, 'feGaussianBlur'> {
	public constructor(element: SVGFEGaussianBlurElement) {
		super({ element, title: 'FE Gaussian Blur', inputs: [EditorAttributesWidth, EditorAttributesHeight] });
	}
}
