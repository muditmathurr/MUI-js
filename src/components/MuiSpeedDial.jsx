import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import { Google } from '@mui/icons-material'



const MuiSpeedDial = () => {
  return (
    <SpeedDial 
    ariaLabel='Navigation speed dial'
    sx={{position: 'absolute', bottom: 16, right: 16}}
    icon={<SpeedDialIcon />}
    >
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>
    </SpeedDial>
  )
}

export default MuiSpeedDial
