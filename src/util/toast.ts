import { toast } from 'react-toastify';

export const showSuccessToast = (message: string, id: string) => {
  toast.success(message, {
    toastId: id,
  });
};

export const showErrorToast = (message: string, id: string) => {
  toast.error(message, {
    toastId: id,
  });
};
