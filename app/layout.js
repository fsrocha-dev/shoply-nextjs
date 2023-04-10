import Header from './components/layout/Header';
import './globals.css';

export const metadata = {
  title: 'Shoply - Best ever products',
  description: 'The best store for geek produtcs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
