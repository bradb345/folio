import React from 'react'
import { Helmet } from 'react-helmet'
import App from '../components/App'
import { headData } from '../mock/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'

// eslint-disable-next-line react/display-name
export default () => {
  const { title, lang, description } = headData

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Bradley Bernard'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Welcome to my Portfolio'} />
      </Helmet>
      <App />
    </>
  )
}
