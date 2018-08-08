import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// Promote BookList from a Component into a Container - it needs to know
// about this new dispatch method, selectBook. Make it avaiable
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);