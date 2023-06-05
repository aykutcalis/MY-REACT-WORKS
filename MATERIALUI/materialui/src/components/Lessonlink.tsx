import React from 'react'
import { Link,Box } from '@mui/material'

export const Lessonlink = () => {
  return (
<Box>
{/* <Link href='https://mui.com/material-ui/material-icons/?selected=Apps'>Websiteme Git</Link>

<Link href='https://mui.com/material-ui/material-icons/?selected=Apps'color="error">Websiteme Git</Link>
<Link href='https://mui.com/material-ui/material-icons/?selected=Apps'color="error" variant="body2">Websiteme Git</Link> */}
<Link href='https://mui.com/material-ui/material-icons/?selected=Apps'underline='none'>Websiteme Git</Link>
<Link href='https://mui.com/material-ui/material-icons/?selected=Apps' underline='hover'>Websiteme Git</Link>
<Link href='https://mui.com/material-ui/material-icons/?selected=Apps' underline='always'>Websiteme Git</Link>
<Link href='https://mui.com/material-ui/material-icons/?selected=Apps' component='button' onClick={()=>{
    console.log('can')
}}>Websiteme Git</Link>







</Box>  )
}
