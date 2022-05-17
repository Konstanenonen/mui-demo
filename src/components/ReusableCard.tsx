import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from '../images/cool-chart.png';
import Bike from '../images/bike.jpg';
import Shirts from '../images/shirts.jpg';

interface ReusableCardProps {
  handleClick: () => void;
  title: string;
  text: string;
  imageName: string;
  imageHeight: number;
  buttonText: string;
}

function ReusableCard(props: ReusableCardProps) {
  function chooseImage(name: string) {
    switch (name) {
      case "chart":
        return Chart;
      case "bike":
        return Bike;
      case "shirts":
        return Shirts;
      default:
        return Chart;
    }
  }

  const correctImage = chooseImage(props.imageName);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={props.handleClick}>
        <CardMedia
          component="img"
          height={props.imageHeight}
          image={correctImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={props.handleClick} size="small" color="primary">
          {props.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ReusableCard;
