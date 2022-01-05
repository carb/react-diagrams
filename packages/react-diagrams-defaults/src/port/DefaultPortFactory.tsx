import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@carb/react-canvas-core';
import { DiagramEngine } from '@carb/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
