import React, { Component } from 'react';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { Button, Panel, Collapse, Well, Accordion } from 'react-bootstrap';


class App extends Component {



  render() {
    const title = (
      <span className="title">A title with css</span>
    );
    
    return (
      <div className="App container well">
        <Accordion>
          <Panel header={title} eventKey="0" bsStyle="success">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
          <Panel header="Name of Header" eventKey="1" bsStyle="success">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
        </Accordion>


      </div>
    );
  }
}

export default App;
