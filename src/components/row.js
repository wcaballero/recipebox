import React, {Component} from 'react';
import { Button, Panel, Collapse, Well, Accordion } from 'react-bootstrap';

export default class Row extends Component {

  render() {
    return (
      <Accordion>
        <Panel header={<span className="title">{this.props.recipes[0].title}</span>} eventKey="0" bsStyle="success">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>
        <Panel header={this.props.recipes[1].title} eventKey="1" bsStyle="success">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>
      </Accordion>
    );
  }
}
