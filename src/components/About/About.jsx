import React, { useContext, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'

import PortfolioContext from '../../context/context'

const About = () => {
  const { about } = useContext(PortfolioContext)
  const { paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <div className="devicon-div">
                  <i className="devicon-javascript-plain" style={{ fontSize: '4rem' }}></i>
                  <span>JavaScript</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-nextjs-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Next.js</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-amazonwebservices-plain-wordmark" style={{ fontSize: '4rem' }}></i>
                  <span>AWS</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-algolia-original" style={{ fontSize: '4rem' }}></i>
                  <span>Algolia</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-css3-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Css3</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-django-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Django</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-python-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Python</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-react-plain" style={{ fontSize: '4rem' }}></i>
                  <span>React</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-github-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Github</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-cloudflare-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Cloudflare</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-heroku-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Heroku</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-html5-plain" style={{ fontSize: '4rem' }}></i>
                  <span>HTML5</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-materialui-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Material-UI</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-mongodb-plain" style={{ fontSize: '4rem' }}></i>
                  <span>MongoDB</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-nodejs-plain" style={{ fontSize: '4rem' }}></i>
                  <span>Node.js</span>
                </div>
                <div className="devicon-div">
                  <i className="devicon-postgresql-plain" style={{ fontSize: '4rem' }}></i>
                  <span>PostgreSQL</span>
                </div>
                
              </div>
            </Fade>
          </Col>
          {/* <Col md={{ span: 8, offset: 3 }}> */}
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}

              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
