import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../styles/EmailSubmit/EmailSubmit.module.scss'

const EmailSubmit = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Here you would typically send the form data to your backend for processing
    // For this example, we'll just console.log the data and set submitSuccess to true
    console.log(data)
    setSubmitSuccess(true)
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="your email here"
          {...register('email', { required: true, pattern: emailRegex })}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
        />
        {errors.email && (
          <span className={styles.error}>Invalid email address</span>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Subscribe
      </button>
      {submitSuccess && (
        <div className={styles.successContainer}>
          <span className={styles.successMessage}>Submitted successfully!</span>
        </div>
      )}
    </form>
  )
}

export default EmailSubmit
