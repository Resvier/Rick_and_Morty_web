export function Footer () {
  const date = new Date()
  return (
    <div className='footer-container'>
      <a
        className='profile-link'
        href='https://github.com/Resvier'
      >
        © {date.getFullYear()} Francisco Javier Torres
      </a>
    </div>
  )
}
