import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioContext from '../../context/context'
import Title from '../Title/Title'


const Interests = () => {
  const { interests } = useContext(PortfolioContext)

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
    <section id="interests">
      <Container>
        <div className="interest-wrapper">
          <Title title="Interests" />
          <Row>
            {interests.map((interest) => {
              const { title, info, id, name } = interest

              return (
                
                <Col key={id} lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="interest-wrapper__text">
                      <h3 className="interest-wrapper__text-title"><i className={`fa fa-${name || 'refresh'}`} />{title || 'Audiobooks'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                
              )
            })}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Interests
