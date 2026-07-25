import React from 'react';

export const GoogleMap: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[380px] w-full">
          <iframe
            title="Danak Logistics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127181.71616790938!2d6.953798952402128!3d4.815622340578648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea3e1250269%3A0x86e885d564f89d5a!2sPort%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
