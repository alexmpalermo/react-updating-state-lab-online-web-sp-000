// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleClickOne = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  handleClickTwo = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickOne}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleClickTwo}>Change Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
