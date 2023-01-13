import React from 'react'

const AppFooter: React.FC = () => {
  return (
    <div>
      <div>
        <span className="ms-1">&copy; 2022</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div>
    </div>
  )
}

export default React.memo(AppFooter)
