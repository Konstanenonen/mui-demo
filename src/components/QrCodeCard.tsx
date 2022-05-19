import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rick from "../images/rick.svg";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";

function QrCodeCard() {
  return (
    <Card variant="outlined" sx={{ width: 300 }}>
      <CardMedia
        sx={{ padding: 5 }}
        component="img"
        height="300"
        image={Rick}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Kanta-asiakaskorttisi
        </Typography>
        <Typography
          sx={{ mb: 1, textAlign: "center" }}
          variant="body2"
          color="text.secondary"
        >
          Näytä tämä kortti maksaessasi kassalla. Kanta-asiakasnumerosi:{" "}
          <span style={{ fontWeight: "bold" }}>23123123</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Sähköinen kuitti" />
        </FormGroup>
      </CardActions>
    </Card>
  );
}

export default QrCodeCard;
