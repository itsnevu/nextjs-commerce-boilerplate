'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from '../signin/signin.module.css';
import { Loader2, ArrowRight, Chrome } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Logic for signing up would go here (API call to /api/auth/signup)
      console.log('Signing up...', formData);
      // Simulate success
      setTimeout(() => {
        router.push('/auth/signin?success=true');
      }, 1000);
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
          <h1 className={styles.title}>Join the <span className="mono-text">Studio</span></h1>
          <p className={styles.subtitle}>Create your account for a personalized experience</p>
        </header>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <Input 
                type="text" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

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
              <label className={styles.label}>Password</label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                required 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <p className="text-[9px] text-zinc-400 font-bold tracking-widest leading-relaxed">
              BY CREATING AN ACCOUNT, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY.
            </p>

            <Button type="submit" disabled={isLoading} className="mt-4">
              {isLoading ? (
                <>CREATING ACCOUNT <Loader2 size={16} className="ml-2 animate-spin" /></>
              ) : (
                <>GET STARTED <ArrowRight size={16} className="ml-2" /></>
              )}
            </Button>
          </form>

          <div className={styles.divider}>OR REGISTER WITH</div>

          <button className={styles.googleBtn}>
            <Chrome size={16} />
            Google Account
          </button>
        </div>

        <footer className={styles.footer}>
          Already have an account? <Link href="/auth/signin" className={styles.link}>SIGN IN TO STUDIO</Link>
        </footer>
      </div>
    </main>
  );
}
