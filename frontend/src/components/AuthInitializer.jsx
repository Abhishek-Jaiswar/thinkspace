import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchUser } from '../api/fetchUser';

const AuthInitializer = ({ children }) => {
  const { setUser, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetchUser()
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [setLoading, setUser]);

  return children;
};

export default AuthInitializer;