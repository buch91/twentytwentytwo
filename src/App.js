import s from "./styles.module.css";
import logo from "./images/logo-kiosk.svg";

const App = () => {
  return (
    <div className={s.reactheader}>
      <div className={s.identity}>
        <img className={s.logo} src={logo} />
        <p className={s.p}>React app</p>
      </div>
     </div>
  );
};
export default App;
