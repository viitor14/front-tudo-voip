import Header from '../Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
