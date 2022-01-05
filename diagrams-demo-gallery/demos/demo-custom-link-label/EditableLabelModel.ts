import { LabelModel } from '@carb/react-diagrams';
import { BaseModelOptions, DeserializeEvent } from '@carb/react-canvas-core';

export interface EditableLabelOptions extends BaseModelOptions {
	value?: string;
}

export class EditableLabelModel extends LabelModel {
	value: string;

	constructor(options: EditableLabelOptions = {}) {
		super({
			...options,
			type: 'editable-label'
		});
		this.value = options.value || '';
	}

	serialize() {
		return {
			...super.serialize(),
			value: this.value
		};
	}

	deserialize(event: DeserializeEvent<this>): void {
		super.deserialize(event);
		this.value = event.data.value;
	}
}
