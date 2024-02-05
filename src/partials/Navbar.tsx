import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg className="h-8 w-8 text-rose-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 7l5 5l-5 5" />  <line x1="12" y1="19" x2="19" y2="19" /></svg>}
          name="Alif Ryuu Portofolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/zoelabbb">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/alifryuu">LinkedIn</NavMenuItem>
        <NavMenuItem href="/assets/cv/Resume_Alif%20Ryuu%20BR.pdf">CV</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
