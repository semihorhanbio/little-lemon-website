import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default BookingPage;
