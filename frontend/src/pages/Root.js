import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // We get a Navigation object when we call use Navigation and that Navigation object has a couple of properties;
  // but for us, the state property is the most important one.
  // This is simply a string which is either idle, loading, or submitting;
  // depending on whether we don't have any active route transition,
  // if we're having an active transition and we're loading data, or if we're submitting data.

  // IMPORTANT: The loading indicator won't be added on the page which you're transitioning to,
  // but instead on some page, or a component, which is already visible on the screen
  // when the transition is started.
  
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
