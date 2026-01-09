import React from "react";

interface TermsProps {
  onAccept: () => void;
}

const Terms: React.FC<TermsProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Updated Terms of Service & Privacy Policy
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-700 leading-relaxed">
          <p className="font-semibold text-red-600">
            PLEASE READ THIS CAREFULLY. IT IS NOT JUST CLICK-WRAP.
          </p>
          <p>
            By clicking "I Agree", you acknowledge that "Privacy is a social
            norm that has changed."
          </p>

          <h3 className="font-bold text-lg text-black">1. Data Collection</h3>
          <p>
            We collect everything. Your clicks, your pauses, your location, the
            faces in your background photos, and your secret love for early
            2000s boy bands. We combine this with data from Google (even though
            they are our rivals, we trade data like Pokémon cards).
          </p>

          <h3 className="font-bold text-lg text-black">2. Your Identity</h3>
          <p>
            You own your identity, technically. However, we own the *digital
            representation* of that identity. We may sell this representation to
            advertisers to ensure you see ads for things you just thought about.
          </p>

          <h3 className="font-bold text-lg text-black">
            3. The Illusion of Control
          </h3>
          <p>
            We provide 170+ privacy settings. We encourage you to spend your
            weekend navigating them. Note that even if you hide a post from your
            khadoos aunty, we still see it. We always see it.
          </p>

          <h3 className="font-bold text-lg text-black">
            4. Street View & Beyond
          </h3>
          <p>
            Your house belongs to the public road. Our cameras are just
            high-tech eyes that never blink and share what they see with the
            entire planet.
          </p>
        </div>

        <div className="p-4 border-t border-gray-200 flex flex-col space-y-2">
          <p className="text-xs text-center text-gray-500 mb-2">
            By clicking "I Agree to Sell My Soul (And Data)", you accept our
            Terms, Privacy Policy, and Cookies Policy.
          </p>
          <button
            onClick={onAccept}
            className="w-full bg-[#1877f2] text-white font-bold py-2 rounded-md hover:bg-[#166fe5]"
          >
            I Agree to Sell My Soul (And Data)
          </button>
          <button className="w-full text-[#1877f2] text-sm hover:underline py-1">
            Read full 84,000 word document
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
