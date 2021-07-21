import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';

export default function ContactActions() {
  const [emailAddress, setEmailAddress] = useState('');
  const [fullName, setfullName] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const isInvalid = emailAddress === '' || fullName === '' || message === '';

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const templateParams = {
      emailAddress,
      fullName,
      message
    };
    try {
      await emailjs.send(
        'service_g1w4s02',
        'template_82p84oj',
        templateParams,
        'user_8dsN5RYxR8CGDYpVLOjfd'
      );
      const reset = function () {
        setEmailAddress('');
        setfullName('');
        setMessage('');
      };
      reset();
      enqueueSnackbar('Your message has been sent!');
    } catch (error) {
      setEmailAddress('');
      setfullName('');
      setMessage('');
      setError(error.message);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen border-t border-gray-primary dark:border-gray-middark">
      <div className="flex w-3/5 mr-4">
        <img src="/images/contactshane.jpg" alt="shane waving" className="rounded" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded dark:bg-gray-middark">
          <h1 className="flex justify-center w-full mb-4 dark:text-white dark:text-opacity-80">
            <p>I would love to hear from you</p>
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSubmit} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 dark:bg-gray-middark dark:text-white"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your name"
              type="text"
              placeholder="Enter your name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 dark:bg-gray-middark dark:text-white"
              onChange={({ target }) => setfullName(target.value)}
              value={fullName}
            />
            <textarea
              required=""
              name="message"
              className="text-sm text-gray-base w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full border border-gray-primary rounded mb-2 py-4 px-4 dark:bg-gray-middark dark:text-white"
              placeholder="Enter your message"
              spellCheck="false"
              onChange={({ target }) => setMessage(target.value)}
              value={message}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
