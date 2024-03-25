import ErrorPage from './assets/pages/errorPage';

function App() {

  return (
    <>
      <ErrorPage error={{
        errorMessage: "Our service is undergoing maintenance for essential upgrades. We apologize for any inconvenience and appreciate your patience.",
        errorTitle: "Service Unavailable",
        // errorCode: 503,
        emoji: "😓"
      }} />
    </>
  )
}

export default App
