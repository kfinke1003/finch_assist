import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid';

export default function ItemCardExternal(props) {

  const { link, title, description } = props

  return (
    <Card variant='outlined' sx={{maxWidth: '400px', minWidth: '200px'}}>
      <CardActionArea
        href={link}
        sx={{display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          minHeight: '250px', maxHeight: '350px', borderRadius: '5px'
        }}>
        <Box sx={{width: '90%', m: '5%', borderBottom: '3px solid blue'}}>
          <Typography variant="h3" sx={{pb: '5px'}}>
            {title}
          </Typography>
        </Box>

        <CardContent>
          <Typography sx={{fontSize: '1.1rem', lineHeight: '1.75rem'}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}