import React from 'react'
import moment from 'moment';

export default function MomentExample() {
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, "week");
    const cloneNewMomentDate = newMomentDate.clone().add(1, "week");
  return (
    <div>
        <h1>Moment</h1>
        <div>Imutable Check</div>
        <div>
            {momentDate.format()}
            <br/>
            {newMomentDate.format()}
            <br/>
            {cloneNewMomentDate.format()}
            <br/>
        </div>
    </div>
  )
}
