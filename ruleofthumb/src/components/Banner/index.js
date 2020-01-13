import React from 'react'
import './styles.css'
import { Header, FloatingDescription, BannerBar } from '../../components'

const banner = ({title, body}) => {
  return (
    <div className="bigBanner">
      <Header />
      <div className="floatingDescription">
        <FloatingDescription title={title} body={body}/>
      </div>
      <BannerBar />
    </div>
  );
}

export default banner;