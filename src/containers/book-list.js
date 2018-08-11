import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  // IMPORTANT: Our component state is completely different from our Application State
  // we still can do stuff life this.state.foo OR this.setState({foo: 'bar'})
  
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li 
          key={book.title} 
          onClick={() => {this.props.selectBook(book)}}  
          className="list-group-item">
            {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

// We connect our Application State to the Props of this container
// Using for that the "mapStateToProps()" and Connects it using
// the "connect" function imported
// @state: the Applicatioj Global State
function mapStateToProps(state) {
  // whatever gets returned from here will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned form this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of ours reducers

  //all right, I'm gonna take this stuff and make sure that it gets
  // dispatched to all reducers in the app
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a Component into a Container Exporting it- 
// it needs to know about this new dispatch method, "selectBook".
// Make it avaiable as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);