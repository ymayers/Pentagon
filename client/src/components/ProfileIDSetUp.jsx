import React from 'react'
import { Route, Switch } from "react-router-dom";

import ProfileIDHeader from './ProfileIDHeader'
import ProfileSetUp from './ProfileSetUp'
export default function ProfileIDSetUp() {
  return (
    <div>
      <ProfileIDHeader
      />

      <Switch>
        <Route>
          <ProfileSetUp
          />
        </Route>
      </Switch>

    </div>
  )
}
