import * as React from 'react';
import { DefaultLabelModel } from './DefaultLabelModel';
import { DefaultLabelWidget } from './DefaultLabelWidget';
import { AbstractReactFactory } from '@carb/react-canvas-core';
import { DiagramEngine } from '@carb/react-diagrams-core';

/**
 * @author Dylan Vorster
 */
export class DefaultLabelFactory extends AbstractReactFactory<DefaultLabelModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateReactWidget(event): JSX.Element {
		return <DefaultLabelWidget model={event.model} />;
	}

	generateModel(event): DefaultLabelModel {
		return new DefaultLabelModel();
	}
}
