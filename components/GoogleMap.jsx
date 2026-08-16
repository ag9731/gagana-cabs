"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border bg-gray-100">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7523173748834!2d77.6146!3d12.9236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc!2sGagana%20Cabs!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
}
