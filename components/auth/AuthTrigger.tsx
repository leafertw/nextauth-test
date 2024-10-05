import { signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

type AuthTriggerProps = {
  action: 'signIn' | 'signOut';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AuthTrigger({ action, className, ...props }: AuthTriggerProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (action === 'signIn') {
        await signIn();
      } else if (action === 'signOut') {
        await signOut();
      }
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const signInText = "引導師登入";
  const signOutText = "登出";
  const buttonText = loading ? "處理中..." : (action === 'signIn' ? signInText : signOutText);

  return (
    <button
      onClick={handleClick}
      {...props}
      aria-label={action === 'signIn' ? signInText : signOutText}
      className={className}
      disabled={loading}>
      {buttonText}
    </button>
  );
}