import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";

const TourCard = ({ tour }) => {
  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={4} square>
          <img src={tour.image} alt="nigraFall" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
            </Box>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              ({tour.numberOfReviews} reviews)
            </Typography>
            <Box>
              <Typography variant="body3" component="p" marginLeft={0}>
                Price:{tour.price}Rs
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
export default TourCard;
