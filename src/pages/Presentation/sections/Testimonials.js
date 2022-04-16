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
// import Divider from "@mui/material/Divider";

// Melhor Tech React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Melhor Tech React examples
// import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
/* import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg"; */

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Mission
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Our Mission is to Revolutionize the electric vehicle industry, by bringing on low-cost
            and efficient components as well as service.
          </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Vision
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Our Vision is to make sure that we should be able to satisfy every customer needs.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
