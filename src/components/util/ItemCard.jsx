import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

export default function ItemCard(props) {

  const { link, title, description, gridSize} = props

  return <Grid size={gridSize}>
    <Card variant='outlined'>
      <CardActionArea href={link}>
        <Typography
          variant="h3"
          sx={{ mx: '15px', borderBottom: '3px solid blue', width: '100%', pb: '3px'}}
        >
          {title}
        </Typography>

        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
}