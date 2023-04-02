import { useForm } from 'react-hook-form'

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
      <div>
        <label htmlFor="fullName"></label>
        <input
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
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="comments"></label>
        <textarea
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
          type="tel"
          placeholder="Phone *"
          name="phone"
          {...register('phone', { required: 'This field is required' })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          placeholder="Message *"
          name="message"
          {...register('message', { required: 'This field is required' })}
        />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </div>
      <p>* indicates a required field</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
