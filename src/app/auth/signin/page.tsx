'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from './signin.module.css';
import { Loader2, ArrowRight, Chrome } from 'lucide-react';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const error = searchParams.get('error');

  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl,
      });

      if (result?.error) {
        // Handle error
        console.error(result.error);
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.glowOrb}></div>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome <span className="mono-text">Back</span></h1>
          <p className={styles.subtitle}>Enter your details to access your studio account</p>
        </header>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <Input 
                type="email" 
                placeholder="studio@luxe.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className={styles.inputGroup}>
              <div className="flex justify-between items-baseline">
                <label className={styles.label}>Password</label>
                <Link href="/auth/forgot" className="text-[9px] font-black tracking-widest uppercase text-zinc-400 hover:text-black transition-colors">
                  Forgot?
                </Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                required 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {error && (
              <p className="text-[10px] font-bold text-red-500 tracking-wider uppercase bg-red-50 p-3 text-center">
                Invalid credentials. Please try again.
              </p>
            )}

            <Button type="submit" disabled={isLoading} className="mt-4">
              {isLoading ? (
                <>SIGNING IN <Loader2 size={16} className="ml-2 animate-spin" /></>
              ) : (
                <>SIGN IN <ArrowRight size={16} className="ml-2" /></>
              )}
            </Button>
          </form>

          <div className={styles.divider}>OR CONTINUE WITH</div>

          <button 
            className={styles.googleBtn} 
            onClick={() => {
              setIsGoogleLoading(true);
              signIn('google', { callbackUrl });
            }}
            disabled={isGoogleLoading}
          >
            {isGoogleLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Chrome size={16} />
            )}
            Google Account
          </button>
        </div>

        <footer className={styles.footer}>
          Don't have an account? <Link href="/auth/signup" className={styles.link}>CREATE STUDIO ACCOUNT</Link>
        </footer>
      </div>
    </main>
  );
}
