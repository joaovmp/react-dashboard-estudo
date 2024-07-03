import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/slices/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const login = (userData) => {
    dispatch(setUser(userData));
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return { user, login, logout };
};
