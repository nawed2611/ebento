import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignOutButton
} from "@clerk/nextjs";

const Feedbacks = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Feedbacks for {slug}</h1>
    </div>
  )
}

export default Feedbacks