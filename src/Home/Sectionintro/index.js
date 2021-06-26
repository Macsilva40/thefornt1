import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Title, Subtitle, Body } from "../../components/Text";
import styles from "./styles";

const SectionIntro = () => {
  const classes = styles();
  return (
    <div>
      <Container maxWidth="100%" style={{ height: "50vh", border: "1" }}>
        <Grid container justify="center">
          <Grid item md={3}>
            <Title
              text="Build accessible React apps with speed"
              style={{ textAlign: "center" }}
            />
            <Body
              text="TheFront will make your product look modern and professional while saving you precious time."
              style={{ textAlign: "center" }}
            />
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={8} maxWidth="sm">
          <Grid item md={3}>
            <Subtitle text="Built for developers" />
            <Body
              text="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components."
              style={{ color: "#718096" }}
            />
          </Grid>
          <Grid item md={3}>
            <Subtitle text="Designed to be modern" />
            <Body
              text="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful."
              style={{ color: "#718096" }}
            />
          </Grid>
          <Grid item md={3}>
            <Subtitle text="Documentation for everything" />
            <Body
              text="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
              style={{ color: "#718096" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SectionIntro;
