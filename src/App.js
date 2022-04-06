
import s from './styles.module.css';
import IconBird from '../assets/images/icon-bird.jpg'

const App = () => {
    return (
        <div className={s.reactheader}>
          <div>
            <img src={IconBird}/>
            <p className={s.p}>React app</p>
          </div>
        </div>
    );
  };
  export default App;