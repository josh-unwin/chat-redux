import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import { fetchMessages } from '../actions';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    setInterval((e) => {
      this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidUpdate() {
    this.list.offsetTop - document.body.scrollTop;
  }

  render() {
    return (
      <div className="message_list" ref={(list) => { this.list = list; }}>
        { this.props.messages.map((message) => {
          return (
            <Message key={message.created_at} author={message.author} content={message.content} time={message.created_at} />
          ); }
        ) }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
