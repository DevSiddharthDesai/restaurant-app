import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Notifications = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster position='top-center' />
    </div>
  );
};

export default Notifications;
