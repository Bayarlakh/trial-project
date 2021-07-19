import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Button } from '@material-ui/core'

const loggedIn = true;

export default () => (
  <nav role="navigation" className={styles.navContainer}>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/backoffice">BackOffice</Link>
      </li>
    </ul>
    <ul className={styles.navigation}>
      {loggedIn ? 
        <li className={styles.navigationItem}> 
          <Link to="/login">
            Account
          </Link> 
        </li>
        :
        <li className={styles.navigationItem}>
          <Link to="/login">
            Login
          </Link>
        </li>
      }
    </ul>
  </nav>
)
