/* eslint-disable consistent-return */
import { useEffect, useReducer } from 'react';
import { initialDustState, reducer } from '../Reducer/reducer';
import { dustApi } from '../Api/dustApi';

const useDust = () => {
  const [state, dispatch] = useReducer(reducer, initialDustState);

  const fetchDustData = async () => {
    try {
      dispatch({ type: 'LOADING' });
      const dustData = await dustApi.get();

      if (dustData.status === 200) dispatch({ type: 'SUCCEESS', dustData: dustData.data });
      else dispatch({ type: 'ERROR', error: { state: true, message: dustData.statusText } });
    } catch (e) {
      dispatch({ type: 'ERROR', error: { error: { state: true, error: e.message } } });
    }
  };

  const dustLevel = (dustData) => {
    if (dustData <= 15) return { state: '최고 좋음' };
    if (dustData <= 30) return { state: '좋음' };
    if (dustData <= 40) return { state: '양호' };
    if (dustData <= 50) return { state: '보통' };
    if (dustData <= 75) return { state: '나쁨' };
    if (dustData <= 100) return { state: '상당히 나쁨' };
    if (dustData <= 150) return { state: ' 매우 나쁨' };
    if (dustData > 150) return { state: '최악' };
  };

  useEffect(() => {
    fetchDustData();
  }, []);

  return [state, fetchDustData, dustLevel];
};

export default useDust;
