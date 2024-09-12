import { BlogPosts } from 'components';

export default function Page(): JSX.Element {
  const style = {
    h1: {
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    p: {
      marginBottom: '1rem',
      whiteSpace: 'pre-line',
    },
    div: {
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
    },
  }
  return (
    <section>
      <h1 style={style.h1}>
        My Portfolio
      </h1>
      <p style={style.p}>
        {`
        As a developer, my core philosophy is to consistently add value through projects that deliver practical applications for users. I aim to create solutions that are not only functional but also meaningful in real-world contexts.\n
        \n
        As a learner, I believe in the importance of being a T-shaped professional. This means having deep expertise in specific areas while also understanding the broader context in which my technical skills are applied.\n
        \n
        Tech Stack:\n
        Coding: Visual Studio Code, Node, JavaScript, HTML, CSS, TypeScript, React Native, Codeium, SQLite, Python\n
        API Tools: Postman\n
        Simulation: Android Studio\n
        Projects:\n
        Masqui.a: A mobile app project designed for hospital use\n
        Joga Mais: A mobile app for scheduling sports games\n
        Datax: An internal-use mobile app developed for a company\n
        LinkAdvice: A website project for accessing public government information\n
        `}
      </p>
      <div style={style.div}>
        <BlogPosts />
      </div>
    </section>
  )
}
