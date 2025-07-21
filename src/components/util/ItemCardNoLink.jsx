import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent'

export default function ItemCardNoLink(props) {

  const { title, description } = props

  return (
    <Card 
      variant='outlined' 
      sx={{
        maxWidth: '400px',
        minWidth: '200px',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        minHeight: '250px',
        maxHeight: '350px',
        borderRadius: '5px'
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
    </Card>
  )
}