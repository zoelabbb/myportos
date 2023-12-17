import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        My <GradientText>Repository</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
      // open link in new tab
        name="🌦 GWeather - A Golang Weather CLI"
        description="GWeather is a command-line interface (CLI) written in Golang that provides weather forecasts using the WeatherAPI from RapidAPI."
        link="https://github.com/zoelabbb/Gweather"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Go</Tags>
            <Tags color={ColorTags.ORANGE}>Rest API</Tags>
            <Tags color={ColorTags.LIME}>CLI</Tags>
          </>
        }
      />
      <Project
        name="CRUD Blog Post Rest API"
        description="This repository contains a simple REST API for managing blog-related functionalities, including creating posts, creating users, fetching a feed of posts, deleting posts, and updating posts. This API is built using Node.js, Express, Prisma, and TypeScript] for database interactions I'am using PostgreSQL fl0."
        link="https://github.com/zoelabbb/rexpressapi.ts"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>PostgreSQL</Tags>
            <Tags color={ColorTags.LIME}>Node.js</Tags>
            <Tags color={ColorTags.SKY}>Typescript</Tags>
            <Tags color={ColorTags.ORANGE}>Rest API</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
