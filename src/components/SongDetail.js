import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        if (!this.props.song) {
            return <div>Please select a song</div>
        }

        return (
            <div>
                SELECTED SONG<br/>
                {this.props.song.title}  - { this.props.song.duration}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
