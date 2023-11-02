import { toast } from 'react-toastify';

export default ({ status, msg }) => {
  switch (status) {
    case 'Success':
      toast.success(msg);
      break;
    case 'Warning':
      toast.warning(msg);
      break;
    case 'Error':
      toast.error(msg);
      break;
    default:
      break;
  }
};
