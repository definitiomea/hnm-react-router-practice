import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './Components/Navbar';
import PrivateRoute from './route/PrivateRoute';

function App() {
  /* App 내에서의 초기 값이 필요없음을 알았다. */

  /* const authenticate = useSelector((state) => state.auth.authenticate); */

   /* useEffect(() => {
    console.log("AAaa", authenticate)
   },[authenticate]); */

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
