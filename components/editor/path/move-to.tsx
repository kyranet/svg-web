import type { MoveTo } from '~/utils/svg/path/MoveTo';

export default function render({ el }: { el: MoveTo }) {
	return (
		<editor-element-base title="Move To">
			{el.entries.map((entry) => (
				<div class="entry">
					<span>
						<icon-axis-x class="h-5 w-5" />
						{entry.end.x}
						<icon-axis-y class="h-5 w-5" />
						{entry.end.y}
					</span>
				</div>
			))}
		</editor-element-base>
	);
}
