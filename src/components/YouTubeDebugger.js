// Code YouTubeDebugger Component Here
import React from 'react';
 
export default class YouTubeDebugger extends React.Component {
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

  handleBitrateClick = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          ...this.state.settings.video
        }
      }
    });
  }
 
  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  }
 
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
      </div>
    );
  }
}
