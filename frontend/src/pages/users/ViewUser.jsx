import React from 'react'
import { useParams } from "react-router-dom";
import View from '../../components/users/View'
import JoinGroup from '../../components/users/JoinGroup'

function ViewUser() {
    const {id: userId} = useParams();
  return (
    <div>
        <View />
        <JoinGroup userId = {userId}/>
    </div>
  )
}

export default ViewUser 