import './styles.css';

export const Section = (props:any) => {
  return(
    <section className='section-principle'>
      {props.children}
    </section>
  )
}