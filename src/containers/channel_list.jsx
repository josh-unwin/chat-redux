import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  selectChannel(channel) {
    this.props.selectChannel(channel);
    this.props.fetchMessages(channel);
  }

  render() {
    return (
      <div className="channel_list">
      <div className="logo"><h3><strong>ReactChat</strong></h3></div>
        { this.props.channels.map((channel) => {
          return (
            <div key={channel} className={"channel-item" + (this.props.selectedChannel === channel ? " selected_channel" : "")}  onClick={((e) => {this.selectChannel(channel)})}># {channel}</div>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages }, dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
