import MainPage from '../../components/main-page'

function Main(params) {
  const styles = {//главная страница
    position: 'left',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)'
  }
  return (
    <div>
      {/* <div>  */}
      <MainPage />
      {/* </div> */}

    </div>
  );
}

export default Main;