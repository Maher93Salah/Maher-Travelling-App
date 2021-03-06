import axios from 'axios';
import { showAlert } from './alerts';

export const resetPassword = async (password, passwordConfirm, token) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:3000/api/v1/users/resetPassword/${token ? token : ''}`,
      data: {
        password,
        passwordConfirm,
        token
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Password Changed and logged in successfully');
      window.setTimeout(() => {
        location.assign('/me');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
