import Header from '../Header';
import { Main } from './styled';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
