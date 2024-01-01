import { useState } from 'react';
import toast from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';

interface CustomToast {
  type: ToastType;
  message: string;
}

const useCustomToast = () => {
  const [toastState, setToastState] = useState<CustomToast | null>({
    type: 'success',
    message: '',
  });

  const showToast = (type: ToastType, message: string) => {
    setToastState({ type, message });

    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return { showToast };
};

export default useCustomToast;
