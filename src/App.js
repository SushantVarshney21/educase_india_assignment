import {Routes, Route} from "react-router-dom"
import LoginScreen from "../src/Components/LoginScreen/LoginScreen.js"
import LandingScreen from "../src/Components/LandingScreen/LandingScreen.js"
import SignupScreen from "../src/Components/SignupScreen/SignupScreen.js"
import ProfileScreen from  "../src/Components/ProfileScreen/ProfileScreen.js"
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<LandingScreen/>}></Route>
    <Route path="/login" element={<LoginScreen/>}></Route>
    <Route path="/signup" element={<SignupScreen/>}></Route>
    <Route path="/login/profile" element={<ProfileScreen/>}></Route>
   </Routes>
   </>
  );
}

export default App;
