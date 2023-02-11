import React from 'react'

const Tabs = ({ children, onClickTab, tabSelected = 1 }) => {

  return (
    <div className='tabs'>
      <div className='tabs-nav'>
        <div className={`p3 tabs-item ${tabSelected === 1 ? 'tabs-item--active' : null }`} onClick={() => onClickTab(1)}>Overview</div>
        <div className={`p3 tabs-item ${tabSelected === 2 ? 'tabs-item--active' : null }`} onClick={() => onClickTab(2)}>Reviews</div>
        <div className={`p3 tabs-item ${tabSelected === 3 ? 'tabs-item--active' : null }`} onClick={() => onClickTab(3)}>Appointments available</div>
      </div>
      <div className='tabs-body'>{children}</div>
    </div>
  )
}

export default Tabs