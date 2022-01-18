//import styles from './FormatedTime.module.scss';


const FormatedTime = ({ time }) => {
  const formatTime = () => {
    const getSeconds = `0${(time% 60)}`.slice(-2)
    const minutes = `${Math.floor(time / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div>
       {formatTime(time)}
    </div>
  );
  

};

export default FormatedTime;