import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LayersIcon from "@material-ui/icons/Layers";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Title, Subtitle, Body } from "../../components/Text";
import Icon from "../../components/Icon";
import styles from "./styles";

const SectionIntro = () => {
  const classes = styles();
  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item md={6}>
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
          <Icon component={<LayersIcon fontSize="large" color="blue" />} />
          <Subtitle text="Built for developers 2" />
          <Body
            text="TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components."
            style={{ color: "#718096" }}
          />
        </Grid>
        <Grid item md={3}>
          <Icon component={<AcUnitRoundedIcon fontSize="large" />} />
          <Subtitle text="Designed to be modern" />
          <Body
            text="Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful."
            style={{ color: "#718096" }}
          />
        </Grid>
        <Grid item md={3}>
          <Icon component={<AlternateEmailIcon fontSize="large" />} />
          <Subtitle text="Documentation for everything" />
          <Body
            text="We've written extensive documentation for components and tools, so you never have to reverse engineer anything."
            style={{ color: "#718096" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionIntro;
