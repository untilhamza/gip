import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gipIcon from "/public/logo.svg";
import NavLink from "./NavLink";
import { IconContext } from "react-icons";
import { View, Flex, Button, Grid, Text } from "@adobe/react-spectrum";
import { HiOutlineDocumentReport, HiOutlineHome } from "react-icons/hi";
import { FiBriefcase, FiSettings, FiTrendingUp, FiUsers } from "react-icons/fi";

const MainNav = () => {
  return (
    <View backgroundColor="gray-50" gridArea="nav">
      <View
        position={{ base: "fixed", M: "static" }}
        bottom={{ base: "size-0" }}
        backgroundColor="gray-50"
        width="100%"
        padding={{ base: "20px", M: "0" }}
        borderWidth="thin"
        borderColor="dark"
      >
        <Flex
          direction={{ base: "row", M: "column" }}
          alignItems={{ base: "center", M: "start" }}
          justifyContent={{ base: "space-around", M: "start" }}
        >
          {[
            {
              navItem: "Home",
              icon: <HiOutlineHome />,
              link: "/",
            },
            {
              navItem: "Reports",
              icon: <HiOutlineDocumentReport />,
              link: "/reports/new",
            },
            {
              navItem: "Members",
              icon: <FiUsers />,
              link: "/members",
            },
            {
              navItem: "Attendance",
              icon: <FiTrendingUp />,
              link: "/attendance",
            },
            {
              navItem: "Resources",
              icon: <FiBriefcase />,
              link: "/resources",
            },
            {
              navItem: "Settings",
              icon: <FiSettings />,
              link: "/settings",
            },
          ].map((item, ind) => (
            <View key={ind} padding={{ base: 0, M: "size-200" }}>
              <NavLink href={item.link}>
                <NavAnchor>
                  <Flex alignItems="center">
                    <View>
                      <IconContext.Provider value={{ className: "nav-icon" }}>
                        {item.icon}
                      </IconContext.Provider>
                    </View>

                    <Text
                      marginStart={"size-300"}
                      isHidden={{ base: true, M: false }}
                    >
                      {item.navItem}
                    </Text>
                  </Flex>
                </NavAnchor>
              </NavLink>
            </View>
          ))}
        </Flex>
      </View>
    </View>
  );
};

export default MainNav;

const NavAnchor = styled.a`
  cursor: pointer;

  &:hover {
    svg {
      color: var(--spectrum-global-color-blue-700);
    }
    span {
      color: var(--spectrum-global-color-blue-700);
    }
  }

  &[aria-current] {
    svg {
      color: var(--spectrum-global-color-blue-400);
    }
    span {
      color: var(--spectrum-global-color-blue-400);
    }
  }

  svg {
    font-size: 1.7rem;
  }
  span {
    font-size: 1rem;
  }

  @media (min-width: 799px) {
    svg {
      font-size: 1.3rem;
    }
  }
`;
