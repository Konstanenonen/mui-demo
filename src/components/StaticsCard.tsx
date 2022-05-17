import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from '../images/cool-chart.png';

interface StaticsCardProps {
  setPage: (page: number) => void;
}

function StaticsCard(props: StaticsCardProps) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="225"
          image={Chart}
          alt="green iguana"
          onClick={() => {props.setPage(3)}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kierrätyksesi vaikutus
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Katso kaavioiden avulla kuinka paljon asiointisi Kierrätyskeskuksessa on
            säästänyt luontoa verrattuna mediaanikuluttajaan.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => {props.setPage(3)}} size="small" color="primary">
          Avaa tilastot
        </Button>
      </CardActions>
    </Card>
  );
}

export default StaticsCard;
