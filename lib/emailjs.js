import emailjs from '@emailjs/browser';

export const sendBookingEnquiry = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS credentials are not configured in environment variables.");
    // Simulate successful submission if credentials are missing
    return new Promise(resolve => setTimeout(() => resolve({ status: 200, text: "Simulated Success" }), 1500));
  }

  try {
    const response = await emailjs.send(serviceId, templateId, formData, publicKey);
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
