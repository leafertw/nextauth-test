import { signIn, signOut } from "next-auth/react";

type AuthTriggerProps = {
  action: 'signIn' | 'signOut';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AuthTrigger({ action, ...props }: AuthTriggerProps) {
  const handleClick = async () => {
    try {
      if (action === 'signIn') {
        await signIn();
      } else if (action === 'signOut') {
        await signOut();
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <button onClick={handleClick} {...props} aria-label={action === 'signIn' ? 'Sign In' : 'Sign Out'}>
      {action === 'signIn' ? 'Sign In' : 'Sign Out'}
    </button>
  );
}