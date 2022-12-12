import { ContentsContainer } from '../components/PageComponent/ComponentContainer';
import { Sidebar } from '../components';
export function Intro() {
  return (
    <>
      <ContentsContainer>
        <h1>Why React WAI</h1>
        <h2>Motivation</h2>
        <div>
          The Web and Internet in whole is an increasingly important resource in
          many aspects of our life which includes: education, employment,
          government, commerce, health care, recreation, and more. It is
          important that the Web be accessible to everyone in order to provide
          equal access and equal opportunity to people with disabilities. An
          accessible Web can help people with disabilities participate more
          actively in society. Also an accessible website is often the one of
          the easiest ways to do business with many people with disabilities,
          for instance, people who cannot read print material, people who have
          difficulty going to a physical store or mall, and others. Furthermore,
          what you do for accessibility overlaps with other best practices such
          as mobile Web design, usability, and search engine optimization (SEO)
          An accessible website gives the access to information and interaction
          for many people with disabilities. That is, the accessibility barriers
          to print, audio, and visual media can be much more easily overcome
          through Web technologies.
        </div>
        <Sidebar>Motivation</Sidebar>
      </ContentsContainer>
    </>
  );
}
