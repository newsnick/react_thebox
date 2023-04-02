import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm/ContactForm.module.scss'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const nameRegex = /^[A-Za-z]{2,}$/
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameemail}>
        <div>
          <label htmlFor="fullName"></label>
          {/* <input
            className={styles.inputfield}
            type="text"
            placeholder="Your name *"
            name="fullName"
            {...register('fullName', {
              required: 'This field is required',
              pattern: {
                value: nameRegex,
                message: 'Invalid name format',
              },
            })}
          /> */}
          <input
            className={`${styles.inputfield} ${
              errors.fullName ? 'invalid' : ''
            }`}
            type="text"
            placeholder="Your name *"
            name="fullName"
            {...register('fullName', {
              required: 'This field is required',
              pattern: {
                value: nameRegex,
                message: 'Invalid name format',
              },
            })}
          />
          {errors.fullName && (
            <span className="error">{errors.fullName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            className={styles.inputfield}
            type="email"
            placeholder="Email *"
            name="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: emailRegex,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className={styles.msgphone}>
        <div>
          <label htmlFor="comments"></label>
          <input
            className={styles.inputfield}
            placeholder="Reason for contacting *"
            name="comments"
            {...register('comments', { required: 'This field is required' })}
          />
          {errors.comments && (
            <span className="error">{errors.comments.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            className={styles.inputfield}
            type="tel"
            placeholder="Phone *"
            name="phone"
            {...register('phone', { required: 'This field is required' })}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message"></label>
        <textarea
          className={styles.inputtextarea}
          placeholder="Message *"
          name="message"
          {...register('message', { required: 'This field is required' })}
        />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>

      <p className={styles.neutraltext}>
        <span className={styles.neutralasterisk}>*</span> indicates a required
        field
      </p>
      <button className={styles.submitbtn} type="submit">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
