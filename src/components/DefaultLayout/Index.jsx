import Header from '../header/Index';
import { Main } from './styled';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
