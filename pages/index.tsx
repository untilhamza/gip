import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex } from "@adobe/react-spectrum";
import { AppState } from "../store/store";
import { wrapper } from "../store/store";
// import styles from "../styles/Home.module.css";

// TODO: persist loggin state on the clientside until they logout

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Head>
        <title>gip</title>
        <meta name="description" content="Go group internal portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to gip</h1>
        <Flex alignItems={"center"} justifyContent="space-evenly">
          <h2>{authState ? "Logged in" : "Not Logged in"}</h2>
          <Button
            onPress={() =>
              authState
                ? dispatch(setAuthState(false))
                : dispatch(setAuthState(true))
            }
            variant="primary"
          >
            {authState ? "Logout" : "Login"}
          </Button>
        </Flex>

        <h2>Menu</h2>
        {/* {//TODO: make this a grid menu for the user to choose from, this will be our first dashboard} */}
        {["reports", "members", "attendance", "resources", "settings"].map(
          (item) => (
            <div key={item}>{item}</div>
          )
        )}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" Next js "}
          <LogoContainer>
            <Image src="/logo.svg" alt="Gip Logo" width={100} height={100} />
          </LogoContainer>
        </a>
      </footer>
    </div>
  );
};

export default Home;

const LogoContainer = styled.div`
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(272deg)
      brightness(108%) contrast(103%);
  }
`;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ params }) => {
    // we can set the initial state from here
    // we are setting to false but you can run your custom logic here
    await store.dispatch(setAuthState(false));
    console.log("State on server", store.getState());
    return {
      props: {
        authState: false,
      },
    };
  });
