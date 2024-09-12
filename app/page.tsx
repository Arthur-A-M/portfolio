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
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div style={style.div}>
        <BlogPosts />
      </div>
    </section>
  )
}
