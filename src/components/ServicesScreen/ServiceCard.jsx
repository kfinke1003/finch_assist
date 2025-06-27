import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';



export default function ServiceCard(props) {

  const { service } = props

  return <Grid size={4}>
    <Card variant='outlined'>
      <CardActionArea href={service.path} target="_blank">
        <Typography
          variant="h3"
          sx={{ mx: '15px', borderBottom: '3px solid blue', width: '100%', pb: '3px'}}
        >
          {service.service}
        </Typography>

        <CardContent>
          <Typography>
            {service.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
}