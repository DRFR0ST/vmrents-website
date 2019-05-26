import React from 'react'
import { withStyles, Typography, Button, Icon } from '@material-ui/core'
import cx from 'classnames'
import { useLittera } from 'react-littera'

import header_car from 'images/header_car2.png'

const styles = theme => ({
  root: {
    height: 'calc(100vh - 64px)',
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    width: '50vw',
    maxWidth: '50%',
    height: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      height: 'inherit',
    },
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    '& div': {
      zIndex: 3,
      '& h3': {
        marginBottom: '5px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        /*textDecoration: 'underline',
        textDecorationColor: theme.palette.primary.main,*/
        textDecoration: 'none',
        borderBottom: '10px solid ' + theme.palette.primary.main,
        display: 'inline-block',
      },
      '& p': {
        fontWeight: 'light',
        textTransform: 'lowercase',
        opacity: 0.8,
      },
      padding: '1.5rem',
      maxWidth: '70%',
    },
  },
  '@media (max-width: 700px)': {
    right: {
      display: 'none',
    },
    left: {
      width: '100vw',
      maxWidth: '100%',
    },
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  plusChunk: {
    background: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b97f' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    width: '40%',
    height: '15%',
    position: 'absolute',
    bottom: '38%',
    right: '5%',
    zIndex: 2,
  },
})

const translations = {
  proceed: {
    en_US: 'Proceed',
    pl_PL: 'Kontynuuj',
  },
  title: {
    en_US: 'Rent a car',
    pl_PL: 'Wypożycz auto',
  },
}

const Header = ({ classes }) => {
  const [translated] = useLittera(translations)

  return (
    <div className={classes.root}>
      <div className={cx(classes.content, classes.left)}>
        <div>
          <Typography variant="h3">{translated.title}</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            libero purus, volutpat et malesuada sed, sodales vitae ligula. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nunc blandit metus sed nibh congue, a ultrices
            erat ultrices. Donec feugiat erat in semper auctor. In hac habitasse
            platea dictumst.
          </Typography>
          <br />
          <Button size="large" color="primary" variant="outlined">
            {translated.proceed}{' '}
            <Icon size="small" className={classes.rightIcon}>
              keyboard_arrow_down
            </Icon>
          </Button>
        </div>
        <div className={classes.plusChunk} />
      </div>

      <div className={cx(classes.content, classes.right)}>
        <img src={header_car} />
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)
