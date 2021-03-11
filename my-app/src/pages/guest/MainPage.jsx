import AppHeader from '../../components/app-header';
import AppMenu from '../../components/menu'
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
    <AppHeader/>
      <AppMenu/>
        {/* <div>  */}
        <MainPage/>
        {/* </div> */}
    
      </div>
  );
}

export default Main;