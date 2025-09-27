import { Suspense } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';

// Data Fetch
const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

function App() {
  // Data fetch Call
  const fetchPromise = fetchData();

  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Main fetchPromise={fetchPromise}></Main>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
