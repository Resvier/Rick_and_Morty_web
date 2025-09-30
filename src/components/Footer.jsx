export default function Footer () {
  const date = new Date()
  return (
    <footer>
      <a
        className='profile-link'
        href='https://github.com/Resvier'
      >
        © {date.getFullYear()} Francisco Javier Torres Franco
      </a>
    </footer>
  )
}
