import { Box, Button, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person'
import DeleteIcon from '@mui/icons-material/Delete'
import { Send } from "@mui/icons-material"
import { styled } from "@mui/system"

const App = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "black",
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: theme.palette.otherColor.main,
      color: "white",
    },
  }))

  return <>
    <Box sx={{ display: "flex", gap: 2, margin: 2 }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<PersonIcon />}
      >
        Material UI
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<DeleteIcon />}
      >
        DELETE
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<Send />}
      >
        SEND
      </Button>

      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: "purple" }}
      >
        CUSTOM CSS
      </Button>
    </Box>

    <Box m={2}>
      <Typography variant="h1">h1. Heading Title</Typography>
      <Typography variant="h2" component="p">
        It uses h2 style but it is a p tag.
      </Typography>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}>
      <Button variant="contained" disabled sx={{
        backgroundColor: "skyblue",
        color: "black",
        margin: 1,
        "&:hover": {
          backgroundColor: "lightblue",
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white",
        },
      }}
      >
        My Unique Button
      </Button>

      <StyledButton>
        My Unique Button
      </StyledButton>
    </Box>
  </>
}

export default App