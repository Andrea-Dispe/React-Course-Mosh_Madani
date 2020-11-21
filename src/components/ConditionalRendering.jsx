import React, { Component } from 'react';

class ConditionalRendering extends Component {
  state = {
    tags: ['tag1', 'tag2', 'tag3'],
    tags2: []

   };

   // one way to render a list is by using a helper function that display the list according the content
   renderTags() {
     if (this.state.tags.length === 0 ) return <p>There aren\'t any tags here</p>
     return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }

  render() {
    return (
      <>
        <h1>Conditional Rendering</h1>
        <ul >
          <h6>Render the list according the content of it</h6>
          {this.renderTags()}
        </ul>
        <ul >
          <h6>Render a sentence to be display only if there is no list</h6>
          {this.state.tags2.length === 0 && <p>There are no tags in the second list</p>}
        </ul>
      </>

    );
  }
}

export default ConditionalRendering;