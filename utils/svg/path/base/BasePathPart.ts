import type { Coordinate } from '../../shared/Coordinate';
import type { BasePath } from './BasePath';

export abstract class BasePathPart<ParentType extends BasePath<string>> {
	/**
	 * The parent path of the path part.
	 */
	public readonly parent: ParentType;

	/**
	 * The start coordinate of the path part.
	 */
	public readonly start: Coordinate;

	protected constructor(parent: ParentType, start: Coordinate) {
		this.parent = parent;
		this.start = start;
	}

	/**
	 * The end coordinate of the path part.
	 */
	public abstract get end(): Coordinate;

	/**
	 * Converts the path part to a string.
	 */
	public abstract toString(): string;
}
