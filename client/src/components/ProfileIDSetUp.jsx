import React, { Component } from 'react'

import ProfileIDHeader from './ProfileIDHeader'
import ProfileSetUp from './ProfileSetUp'
import ID from './ID'



export default class ProfileIDSetUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: false
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      profile: !prevState.profile
    }))
  }

  render() {
    const { profile } = this.state
    return (
      <div>
        <ProfileIDHeader
        />
        {profile ?
          <ProfileSetUp
            hideProfile={this.toggleProfile}
          />
          :
          <ID
          />
        }

      </div>
    )
  }
}
