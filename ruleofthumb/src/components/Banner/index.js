import React from 'react'
import './styles.css'
import { Header, FloatingDescription } from '../../components'

const banner = ({title, body}) => {
  return (
    <div className="bigBanner">
      <Header />
      <div className="floatingDescription">
        <FloatingDescription title={title} body={body}/>
      </div>
    </div>
  );
}

export default banner;