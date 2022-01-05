import { DiamondNodeWidget } from './DiamondNodeWidget';
import { DiamondNodeModel } from './DiamondNodeModel';
import * as React from 'react';
import { AbstractReactFactory } from '@carb/react-canvas-core';
import { DiagramEngine } from '@carb/react-diagrams-core';

export class DiamondNodeFactory extends AbstractReactFactory<DiamondNodeModel, DiagramEngine> {
	constructor() {
		super('diamond');
	}

	generateReactWidget(event): JSX.Element {
		return <DiamondNodeWidget engine={this.engine} size={50} node={event.model} />;
	}

	generateModel(event) {
		return new DiamondNodeModel();
	}
}
