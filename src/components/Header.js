import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/VANXBOI",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vansh-agarwal24/",
  },
];

export default function Header() {

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} bg="black" zIndex={10}>
      
      <HStack justifyContent="space-between" px={6} py={4}>

        {/* LEFT SIDE (social icons) */}
        <nav>
          <HStack spacing={4}>
            {socials.map((social) => (
              <a key={social.url} href={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
        </nav>

        {/* RIGHT SIDE (links) */}
        <nav>
          <HStack spacing={6}>
            <a href="#projects-section" onClick={(e) => handleClick(e, "projects-section")}>
            Projects
            </a>

            <a href="#contactme-section" onClick={(e) => handleClick(e, "contactme-section")}>
            Contact Me
            </a>
          </HStack>
        </nav>

      </HStack>
    </Box>
  );
}