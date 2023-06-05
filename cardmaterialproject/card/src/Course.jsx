import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Course ({image,title,description}) {
    return ( 
  //  <div>
// <img src={image} />
// <p>{title}</p>
// <p>{description}</p>
//     </div> );}

<Card >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="Kurslarım"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      
    </Card>
    )}


export default Course ;