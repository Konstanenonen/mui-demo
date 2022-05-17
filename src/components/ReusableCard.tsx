import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from '../images/cool-chart.png';

interface ReusableCardProps {
  setPage: (page: number) => void;
  destinationPage: number;
  title: string;
  text: string;
}

function ReusableCard(props: ReusableCardProps) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="225"
          image={Chart}
          alt="green iguana"
          onClick={() => {props.setPage(props.destinationPage)}}
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
        <Button onClick={() => {props.setPage(props.destinationPage)}} size="small" color="primary">
          Avaa tilastot
        </Button>
      </CardActions>
    </Card>
  );
}

export default ReusableCard;
