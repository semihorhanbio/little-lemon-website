import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import { useReducer} from "react";
import { fetchAPI } from "./api/api";
import { ConfirmedBookingPage } from "./pages/ConfirmedBookingPage";

function App() {
  const fetchData = (date) => {
    return fetchAPI(date);
  };

  const updateTimes = (state, action) => {
    if (action.newDate) {
      return fetchData(action.newDate);
    }
    return state;
  };

  const initializeTimes = () => {
    return fetchData(new Date());
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
    </>
  );
}

export default App;
