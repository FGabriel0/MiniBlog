import styles from './About.module.css';

import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2>
            Sobre o mini <span>Blog</span>
        </h2>
        <p>Este projeto em um blog feito com React no front-end e Firebase no back-end</p>
        <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About