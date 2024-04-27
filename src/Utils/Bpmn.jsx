import React, { Component } from 'react';
import * as go from 'gojs';


class BPMNComponent extends Component {
  constructor(props) {
    super(props);
    this.diagramDivId = `diagram-${Math.random().toString(36).substring(7)}`;
  }

  componentDidMount() {
    this.initBPMN();
  }

  initBPMN() {
    const $ = go.GraphObject.make;

    const myDiagram = $(go.Diagram, `#${this.diagramDivId}`);

    // Define your BPMN rendering logic here

    myDiagram.model = new go.GraphLinksModel();
  }

  render() {
    return <div id={this.diagramDivId} style={{ width: '100%', height: '500px' }} />;
  }
}

export default BPMNComponent;
