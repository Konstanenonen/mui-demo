import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Chart from '../images/cool-chart.png';

function StaticsCard() {
  return (
    <Card sx={{ width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="225"
          image={Chart}
          alt="green iguana"
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
        <Button size="small" color="primary">
          Avaa tilastot
        </Button>
      </CardActions>
    </Card>
  );
}

export default StaticsCard;
