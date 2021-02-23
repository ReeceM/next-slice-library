const footer = (
  <footer
  sx={{
    fontSize: 1,
    variant: 'styles.footer',
  }}>
  <div
    sx={{
      display: 'grid',
      gridTemplateRows: 'repeat(4, 32px)',
      gridTemplateColumns: [
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ],
      gridAutoFlow: 'column',
      px: 2,
      py: 4,
    }}>
    {items.map((link) => <Link to={link} sx={{ variant: 'styles.navlink', p: 2 }}>{link}</Link>)}
  </div>
  <div
    sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      p: 3,
    }}>
    <Link to='/privacy-policy' sx={{ color: 'inherit' }}>Privacy Policy</Link>
    <div sx={{ mx: 1 }} />
    <Link to='/terms-of-use' sx={{ color: 'inherit' }}>Terms of Use</Link>
    <div sx={{ mx: 1 }} />
    © 2019 Jane Doe
  </div>
</footer>

)

export default footer;
