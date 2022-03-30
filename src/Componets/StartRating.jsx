import { Box} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'

const StartRating = ({start}) => {
  return (
    <div>
        <Box component="fieldset" borderColor="transparent">
            <Rating name="read-only" readOnly  value={start} />
        </Box>
    </div>
  )
}

export default StartRating