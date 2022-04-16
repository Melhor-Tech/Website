// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// Melhor Tech React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.jpeg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Melhor Tech",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/Melhor-tech",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com/melhor_tech?igshid=YmMyMTA2M2Y=",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "https://www.creative-tim.com/presentation" }],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://www.creative-tim.com/contact-us" }],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}
    </MKTypography>
  ),
};
