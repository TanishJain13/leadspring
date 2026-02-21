'use client';

import { ReactNode } from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import WhatsAppButton from '@/components/sections/whatsapp-button';
import ContactModal from '@/components/sections/contact-modal';

interface LayoutContentProps {
  children: ReactNode;
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
}

export default function LayoutContent({
  children,
  showContactModal,
  setShowContactModal,
}: LayoutContentProps) {
  return (
    <>
      <Header onContactClick={() => setShowContactModal(true)} />
      {children}
      <Footer />
      <WhatsAppButton />
      <ContactModal open={showContactModal} onOpenChange={setShowContactModal} />
    </>
  );
}
