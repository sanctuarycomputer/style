import React, { Component } from 'react';
import connect from 'react-redux';
import UsersView from 'views/UsersView';
import Loader from 'components/Loader';

import userResourceIsPending from 'selectors/userResourceIsPending';
import allErrors from 'selectors/allErrors';

export class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.knownUserIds);
  }
  componentWillRecieveProps(nextProps) {
    let knownUserIdsDidChange = this.props.knownUserIds !== nextProps.knownUserIds;
    if (knownUserIdsDidChange) {
      nextProps.fetchUsers(nextProps.knownUserIds);
    }
  }
  didClick = () => {

  }
  render() {
    switch (props.loadingStatus) {
      case Status.PENDING: return <Loader onClick={this.didClick} />;
      default: return <UsersView {...props} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    knownUserIds: [1, 2, 3],
    loadingStatus: userResourceIsPending(state),
    fetchUsersError: state.error.fetchUsers,
    allErrors: allErrors(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers() { fetchUsers()(dispatch); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
