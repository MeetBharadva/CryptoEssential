import { toast } from 'react-toastify';

export const Toster = (msg, type) => {
  const message = msg;
  const config = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  };
  if (type === 1) {
    toast.success(message, config);
  } else {
    toast.error(message, config);
  }
};
