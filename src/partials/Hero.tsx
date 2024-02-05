import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Alif Ryuu B.R</GradientText> 👋
        </>
      }
      description={
        <>
          I have experience in the field of Implementation Web Designer and Web Developer for 5 years using Codeigniter Framework & Have experience as a Backend Developer, Cyber Security, and Quality Assurance.
          I can adapt and work with a team, like to learn new things to increase my skills and knowledge.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          <a href="https://www.facebook.com/alifryu">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/alifryuu">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@urproject">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
