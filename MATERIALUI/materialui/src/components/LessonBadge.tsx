import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { HorizontalRule } from '@mui/icons-material'

export const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={50} color='secondary'>
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} max={40} color='secondary'>
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} color='secondary' anchorOrigin={{
        vertical:'bottom',
        horizontal:'right'
      }}>
        <MailIcon/>
      </Badge>
      <Badge badgeContent={50} color='secondary' anchorOrigin={{
        vertical:'bottom',
        horizontal:'left'
      }}>
        <MailIcon/>
      </Badge>
    </Stack>
  )
}
