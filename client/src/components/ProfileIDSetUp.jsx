import React, { Component } from 'react'

import ProfileIDHeader from './ProfileIDHeader'
import ProfileSetUp from './ProfileSetUp'
import ID from './ID'
import CongratsModal from "./CongratsModal";



export default class ProfileIDSetUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: false,
      congrats: false
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      profile: !prevState.profile
    }))
  }

  toggleCongratsModal = () => {
    this.setState(prevState => ({
      congrats: !prevState.congrats
    }))
  }

  render() {
    const { profile } = this.state
    return (
      <div>
        <ProfileIDHeader
          currentUser={this.props.currentUser}
          handleProfileImgUpdate={this.props.handleProfileImgUpdate}
          history={this.props.history}
        />
        {profile ?
          <ProfileSetUp
            hideProfile={this.toggleProfile}
          />
          :
          <ID
            currentUser={this.props.currentUser}
            showCongratsModal={this.toggleCongratsModal}
          />
        }

        <CongratsModal
          congrats={this.state.congrats}
          hideCongratsModal={this.toggleCongratsModal}

        />

      </div>
    )
  }
}
