import { Typography } from '@mui/material';

export const Lessontypography = () => {
  return (
    <div>
        <Typography variant='body1'>
Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus reprehenderit nostrum ut laborum q
uae accusamus ullam, recusandae quibusdam facere sapiente praesentium nihil eos a. Recusandae aut odit tempora beatae!
        </Typography>
        <Typography variant='body2'>
Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus reprehenderit nostrum ut laborum q
uae accusamus ullam, recusandae quibusdam facere sapiente praesentium nihil eos a. Recusandae aut odit tempora beatae!
        </Typography>
        <Typography variant='h1'>H1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h2'>H2 GÖRÜNÜMÜ</Typography>
        <Typography variant='h3'>H3 GÖRÜNÜMÜ</Typography>
        <Typography variant='h4'>H4 GÖRÜNÜMÜ</Typography>
        <Typography variant='h5'>H5 GÖRÜNÜMÜ</Typography>
        <Typography variant='h6'>H6 GÖRÜNÜMÜ</Typography>

        <Typography variant='h1' component='h4'>H1 GÖRÜNÜMÜ</Typography>

        <Typography variant='h1' component='h4' align='right'>H1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h1' component='h4' align='left'>H1 GÖRÜNÜMÜ</Typography>

        <Typography variant='subtitle1' >Alt Başlık 1</Typography>
        <Typography variant='subtitle2' >Alt Başlık 2</Typography>
    </div>
  )
}
