// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Melhor Tech React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Melhor Tech React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/amal2.jpeg";
import team2 from "assets/images/navaneeth.jpeg";
import team3 from "assets/images/jayesh.jpg";
import team4 from "assets/images/ivana-square.jpg";
// import team5 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              &quot;The strength of the team is each individual member. The strength of each member
              is the team.&quot; – Phil Jackson
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Mohamed Amal"
                position={{ color: "info", label: "Chief executive officer (CEO)" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Navaneeth M"
                position={{ color: "info", label: "Chief technology officer (CTO)" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Jayesh Krishnan"
                position={{ color: "info", label: "Chief operating officer (COO)" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Jithu Tagore"
                position={{ color: "info", label: "Chief financial officer (CFO)" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Bharath Vinod"
                position={{ color: "info", label: "Designing and Marketing Head" }}
                description=""
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
