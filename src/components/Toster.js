import { toast } from 'react-toastify';

export const Toster = (msg, type) => {
  const massege = msg;
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
    toast.success(massege, config);
  } else {
    toast.error(massege, config);
  }
};
