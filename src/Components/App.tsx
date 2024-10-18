import "../Styles/App.less"
import { getCurrentPage } from "Data/Selectors/Navigation";
import { getCurrentUser, getAuthToken } from "Data/Selectors/User";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";
import { Pages } from "Data/Objects/State";
import LoginPage from "Components/Login";


export default function App() {
  const curretPage = useSelector(getCurrentPage);
  const currentUser = useSelector(getCurrentUser);
  const authToken = useSelector(getAuthToken);

  const renderMainContent = () => {
    let content = (
      <MainPage />
    );
    if (curretPage === Pages.LOGIN || !currentUser || !authToken){
      content = <LoginPage />
    }
    return content;
  }


  return (
    <div className="app">
      { renderMainContent() }
    </div>
  );
}


