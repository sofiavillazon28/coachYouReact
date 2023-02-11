const Alert = ({ children, onClose }) => {
  return (
    <div className="alert alert--danger">
      <div className="alert-close" onClick={onClose}>x</div>
      {children}
    </div>
  )
}

export default Alert