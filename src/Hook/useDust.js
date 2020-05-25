/* eslint-disable consistent-return */
import { useEffect, useReducer } from 'react';
import { initialDustState, reducer } from '../Reducer/dustReducer';
import dustApi from '../Api/dustApi';

const useDust = () => {
  const [dustState, dispatch] = useReducer(reducer, initialDustState);

  const fetchDustData = async () => {
    const dustData = await dustApi.get();
    try {
      dispatch({ type: 'LOADING' });

      if (dustData.status === 200) dispatch({ type: 'SUCCESS', dustData: dustData.data });
      else dispatch({ type: 'ERROR', error: { state: true, message: dustData.statusText } });
    } catch (e) {
      dispatch({ type: 'ERROR', error: { error: { state: true, error: e.message } } });
    }
  };

  const dustLevel = (dustData) => {
    if (dustData <= 15) return { state: '최고 좋음', message: '외출 안 하면 바보입니다' };
    if (dustData <= 30) return { state: '좋음', message: '공기좋은 날이에요~' };
    if (dustData <= 40) return { state: '양호', message: '쾌적한 날이에요~' };
    if (dustData <= 50) return { state: '보통', message: '지금은 외출하셔도 좋습니다' };
    if (dustData <= 75) return { state: '나쁨', message: '외출 시 마스크 착용을 권장드립니다' };
    if (dustData <= 100) return { state: '상당히 나쁨', message: '외출 시 반드시 마스크를 착용하세요' };
    if (dustData <= 150) return { state: ' 매우 나쁨', message: '가능한 한 외출을 삼가하세요' };
    if (dustData > 150) return { state: '최악', message: '지옥입니다' };
  };

  useEffect(() => {
    fetchDustData();
  }, []);

  return [dustState, fetchDustData, dustLevel];
};

export default useDust;
