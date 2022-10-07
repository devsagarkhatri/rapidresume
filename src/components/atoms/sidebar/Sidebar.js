import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

import "./sidebar.css";

const LinkItems = [
  {
    name: "Fonts",
    icon: FiHome,
    data: "Lorem ipsum dolor sit amet, ",
  },
  {
    name: "Headings",
    icon: FiTrendingUp,
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
  },
  {
    name: "Sections",
    icon: FiCompass,
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    name: "Section Order",
    icon: FiStar,
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam",
  },
  {
    name: "Themes",
    icon: FiSettings,
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export function SidebarClose({ children, isSidebarOpen, setIsSidebarOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="0vh"
      marginTop={"20px"}
      width="25px"
      maxW={"25px"}
      position={"relative"}
      bg={useColorModeValue("red.100", "gray.900")}
      className="boxclose px-0"
    >
      <SidebarContentClose
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContentClose
            onClose={onClose}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

export function SidebarOpen({ children, isSidebarOpen, setIsSidebarOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="0vh"
      marginTop={"50px"}
      position={"relative"}
      bg={useColorModeValue("gray.100", "gray.900")}
      className="boxthis"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            isSidebarOpen={children.isSidebarOpen}
            setIsSidebarOpen={children.setIsSidebarOpen}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

export function Sidebar({ children }) {
  let [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SidebarClose
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={() => setIsSidebarOpen}
    />
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      borderTopRightRadius={"50px"}
      paddingStart={"8"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      minH={0}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" as={"u"}>
          Menu
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          onClick={() => rest.setIsSidebarOpen(!rest.isSidebarOpen)}
        >
          x
        </Text>
      </Flex>
      <Accordion allowToggle>
        {LinkItems.map((link) => (
          //   <NavItem key={link.name} icon={link.icon}>
          <AccordionItem border={"0px"} paddingTop={"5px"}>
            <h2>
              <AccordionButton
                _expanded={{ borderBottom: "2px", borderBottomColor: "Black" }}
              >
                <Icon as={link.icon} marginEnd={"10px"} />
                <Box flex="1" textAlign="left">
                  {link.name}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel color={"black"}>{link.data}</AccordionPanel>
          </AccordionItem>
          //   </NavItem>
        ))}
      </Accordion>
    </Box>
  );
};

const SidebarContentClose = ({
  onClose,
  isSidebarOpen,
  setIsSidebarOpen,
  ...rest
}) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      borderTopRightRadius={"50px"}
      paddingTop={"75vh"}
      marginTop="0px"
      w={{ base: 20, md: 10 }}
      sx={{ overflow: "hidden" }}
      pos="fixed"
      minH={0}
      h="full"
      onClick={() => setIsSidebarOpen(true)}
      {...rest}
    >
      <div
        maxHeight={"80%"}
        // position={"fixed"}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "top left",

          minWidth: "max-content",
        }}
        className="d-flex flex-row justify-content-around "
      >
        {LinkItems.map((link) => (
          //   <NavItem key={link.name} icon={link.icon}>

          <h2
            className="d-flex flex-row "
            style={{
              minWidth: "max-content",
              paddingInline: "15px",
              paddingTop: "8px",
              borderRight: "1px solid black",
              justifySelf: "stretch",
            }}
          >
            <Icon as={link.icon} marginEnd={"10px"} />
            <Box flex="1" textAlign="left">
              {link.name}
              {isSidebarOpen}
            </Box>
          </h2>

          //   </NavItem>
        ))}
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          style={{ transform: "rotate(90deg)" }}
          paddingInline="20px"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          X{isSidebarOpen}
        </Text>
      </div>
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Menu
      </Text>
    </Flex>
  );
};
