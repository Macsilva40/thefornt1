import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Body, Title, H3, Subtitle } from "../../components/Text";
import Code from "../../components/Code";

const SectionInfo = () => {
  const [number, setNumbers] = useState([]);

  useEffect(() => {
    getNumbers();
  }, []);

  const getNumbers = () => {
    setNumbers([
      {
        title: "300+",
        description:
          "300 + component compositions, which will help you to build any page easily.",
      },
      {
        title: "30+",
        description:
          "45 + landing and supported pages to Build a professional website.",
      },
      {
        title: "45+",
        description:
          "300 + component compositions, which will help you to build any page easily.",
      },
      {
        title: "99%",
        description:
          "99% of our customers rated 5-star our themes over 5 years..",
      },
    ]);
  };

  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" spacing={8}>
        <Grid item md={6}>
          <Title text="Less code. More speed" />
          <H3 text="the Front is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications." />
        </Grid>
        <Grid item md={6}>
          <Code />
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={4} justify="center">
            {number.map((number) => (
              <Grid item md={6}>
                <Subtitle text={number.title} />
                <Body text={number.description} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Title text="The powerful and flexible theme for all kinds of businesses" />
          <H3 text="Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users." />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionInfo;
