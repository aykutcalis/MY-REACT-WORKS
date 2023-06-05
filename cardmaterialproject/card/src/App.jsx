
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'



import './App.css'
import Course from './Course';

function App() {


  return (
    <div className="App">
<AppBar>
  <Toolbar  sx={{fontSize:'30px'}}>Kart Projesi</Toolbar>
</AppBar>
<Container maxWidth="lg">
<Grid container spacing={2} sx={{marginTop:10}}>
        <Grid item xs={12} md={6} lg={3}>
        <Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates quisquam laudantium incidunt! Dolorum impedit sit 
iusto eum suscipit deleniti nobis, numquam cum doloribus vero? Suscipit esse veniam fugit accusantium!"/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course image={Bootstrap} title="Bootstrap" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates quisquam laudantium incidunt! Dolorum impedit sit 
iusto eum suscipit deleniti nobis, numquam cum doloribus vero? Suscipit esse veniam fugit accusantium!"/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course image={Ccsharp} title="Ccsharp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates quisquam laudantium incidunt! Dolorum impedit sit 
iusto eum suscipit deleniti nobis, numquam cum doloribus vero? Suscipit esse veniam fugit accusantium!"/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Course image={Kompleweb} title="Kompleweb" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptates quisquam laudantium incidunt! Dolorum impedit sit 
iusto eum suscipit deleniti nobis, numquam cum doloribus vero? Suscipit esse veniam fugit accusantium!"/>
        </Grid>
      </Grid>
</Container>
    </div>
  )
}

export default App
