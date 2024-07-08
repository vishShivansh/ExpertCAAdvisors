import WhatsappLogo from "../../public/whatsapp.svg";

export const WhatsAppButton = () => {
  const phoneNumber = "917906260658"; // Replace with your WhatsApp number
  const message = "Hello, I have a query about your services."; // Customize your message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
        <img src={WhatsappLogo} alt="Whatsapp" className="w-5" />
      </div>
    </a>
  );
};
