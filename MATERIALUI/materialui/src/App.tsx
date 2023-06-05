import { useState } from 'react'

import './App.css'
import { Lessontypography } from './components/Lessontypography'
import { LessonButton } from './components/LessonButton'
import { LessonButtonGroup } from './components/LessonButtonGroup'
import { LessonTextField } from './components/LessonTextField'
import { LessonRadioGroup } from './LessonRadioGroup'
import { LessonradioExample } from './components/LessonRadioExample'
import { LessonSelect } from './LessonSelect'
import { LessonCheckBox } from './components/LessonCheckBox'
import { LessonAutoComplete } from './components/LessonAutoComplete'
import { LessonBox } from './components/LessonBox'
import { Lessonstack } from './components/Lessonstack'
import { LessonGrid } from './components/LessonGrid'
import { LessonCard } from './components/LessonCard'
import { LessonAccordion } from './components/LessonAccordion'
import { LessonAppBar } from './components/LessonAppBar'
import { LessonImageList } from './components/LessonImageList'
import { LessonPaper } from './components/LessonPaper'
import { Lessonlink } from './components/Lessonlink'
import { LessonBreadCrumb } from './components/LessonBreadCrumb'
import { LessonDrawer } from './components/LessonDrawer'
import { LessonBadge } from './components/LessonBadge'
import { LessonSpeedDial } from './components/LessonSpeedDial'
import { LessonBottomNavigation } from './components/LessonBottomNavigation'
import { LessonAvatar } from './components/LessonAvatar'
import { LessonList } from './components/LessonList'
import { LessonToolTip } from './components/LessonToolTip'
import { LessonAlert } from './components/LessonAlert'
import { LessonDialog } from './components/LessonDialog'
import { LessonSnackBar } from './components/LessonSnackBar'
import { LessonProgress } from './components/LessonProgress'
import { LessonSkeleton } from './components/LessonSkeleton'
import { LessonLoadingButton } from './components/LessonLoadingButton'
import { Lessontable } from './components/Lessontable'
import { LessonTabs } from './components/LessonTabs'
import { LessonMasonry } from './components/LessonMasonry'
import { LessonTimeLine } from './components/LessonTimeLine'
import { LessonCustomization } from './components/LessonCustomization'
import {createTheme,colors,ThemeProvider} from '@mui/material'
const theme=createTheme({
  palette:{
    secondary:{
      main:colors.brown[500]
    }
  }
 
})


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
          {/* <Lessontypography/> */}
          {/* <LessonButton/> */}
          {/* <LessonButtonGroup/> */}
          {/* <LessonTextField/> */}
          {/* <LessonRadioGroup/> */}
          {/* <LessonradioExample/> */}
          {/* <LessonSelect/> */}
          {/* <LessonCheckBox/> */}
          {/* <LessonAutoComplete/> */}
          {/* <LessonBox/> */}
          {/* <Lessonstack/> */}
          {/* <LessonGrid/> */}
          {/* <LessonCard/> */}
          {/* <LessonAccordion/> */}
          {/* <LessonAppBar/> */}
          {/* <LessonImageList/> */}
          {/* <LessonPaper/> */}
          {/* <Lessonlink/> */}
          {/* <LessonBreadCrumb/> */}
          {/* <LessonDrawer/> */}
          {/* <LessonBadge/> */}
          {/* <LessonSpeedDial /> */}
          {/* <LessonBottomNavigation/> */}
          {/* <LessonAvatar/> */}
          {/* <LessonList/> */}
          {/* <LessonToolTip/> */}
          {/* <LessonAlert/> */}
          {/* <LessonDialog/> */}
          {/* <LessonSnackBar/> */}
          {/* <LessonProgress/> */}
          {/* <LessonSkeleton/> */}
          {/* <LessonLoadingButton/> */}
          {/* <Lessontable/> */}
          {/* <LessonTabs/> */}
          {/* <LessonMasonry */}
          {/* <LessonTimeLine/> */}
          <LessonCustomization/>
      </div>
    </ThemeProvider>
  
  );
}

export default App
