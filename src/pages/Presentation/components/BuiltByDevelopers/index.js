/*
=========================================================
* Melhor Tech React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Melhor Tech React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function BuiltByDevelopers() {
  const bgImage = "https://ak.picdn.net/shutterstock/videos/1051174228/thumb/8.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Program
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Electric Vehicle Internship
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            5+1 Days of Electric Vehicle Internship. This course is entitled to 20 KTU Activity
            Points. Brought to you in collaboration with IEI (Institution of Engineers (India),
            TKMCE Chapter).
          </MKTypography>
          <MKButton
            variant="gradient"
            color="info"
            size="large"
            component="a"
            href="https://www.yepdesk.com/electric-vehicle-internship1"
            sx={{ mb: 2 }}
          >
            Register Now <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
