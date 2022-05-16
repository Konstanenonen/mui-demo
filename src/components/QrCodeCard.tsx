import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rick from '../images/rick.svg';

function QrCodeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="275"
        image={Rick}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kanta-asiakaskortti
        </Typography>
        <Typography sx={{mb: 1}} variant="body2" color="text.secondary">
          Näytä tätä maksaessasi kassalla.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kanta-asiakasnumero: 23123123
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Nappi</Button>
      </CardActions>
    </Card>
  );
}

export default QrCodeCard;

