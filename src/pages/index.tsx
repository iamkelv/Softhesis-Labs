import { Inter } from 'next/font/google';
import SigninPage from '@/components/molecules/auth/Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <SigninPage />
    </div>
  );
}
