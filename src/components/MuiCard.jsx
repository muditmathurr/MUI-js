import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img'
        height='200'
        image="https://images.unsplash.com/photo-1719032238663-e7fe70eb5c95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cardio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum cardio is good for health. A man is running in this black and white picture. Wearing a cap and dolor sit amet, consectetur adipisicing elit. Ea quos
            amet consectetur ab! Quod laudantium sit dolor magnam? Quisquam
            adipisci facilis maxime pariatur enim! Vel.
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
