import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rick from '../images/rick.svg';
import { fontWeight } from '@mui/system';

function QrCodeCard() {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        sx={{padding: 7}}
        component="img"
        height="350"
        image={Rick}
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
          Kanta-asiakaskorttisi
        </Typography>
        <Typography sx={{ mb: 1, textAlign: "center" }} variant="body2" color="text.secondary">
          Näytä tämä kortti maksaessasi kassalla.
        </Typography>
        <Typography  sx={{ textAlign: "center" }} variant="body2" color="text.secondary">
          Kanta-asiakasnumerosi: <span style={{ fontWeight: "bold" }}>23123123</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small">Avaa Profiili</Button>
      </CardActions>
    </Card>
  );
}

export default QrCodeCard;

