import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#F6F2FF] min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
