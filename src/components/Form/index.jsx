import React from 'react'
import styles from './index.module.css'

const Form = () => {
  return (
    <form id={styles.id} className={styles.container}>
      <div>
        <label className={styles.label} for="firstName">
          First Name
        </label>
        <input
          className={styles.inputs}
          type="text"
          id="firstName"
          name="firstName"
        />
      </div>
      <div>
        <label className={styles.label} for="lastName">
          Last Name
        </label>
        <input
          className={styles.inputs}
          type="text"
          id="lastName"
          name="lastName"
        />
      </div>
      <div>
        <label className={styles.label} for="email">
          Email
        </label>
        <input className={styles.inputs} type="email" id="email" name="email" />
      </div>
      <div>
        <label className={styles.label} for="message">
          Message
        </label>
        <textarea className={styles.inputs} id="message" name="message" />
      </div>
    </form>
  )
}

export default Form
