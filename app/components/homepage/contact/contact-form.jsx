"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <p className="font-mono mb-5 text-[#00ff88] text-sm tracking-widest flex items-center gap-2">
        <span className="text-[#00d4ff]">{'>'}</span> SEND_MESSAGE
        <span className="w-8 h-[1px] bg-[#00ff88]" />
      </p>
      
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#8b5cf6] rounded-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm" />
        
        <div className="relative max-w-3xl text-white rounded-lg border border-[#1e3a5f] bg-[#0a0e1a]/90 backdrop-blur-xl p-4 lg:p-6">
          <p className="text-sm text-gray-400 mb-6">
            {"Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities."}
          </p>
          
          <div className="flex flex-col gap-5">
            {/* Name input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-300">
                <span className="text-[#8b5cf6]">const</span> name <span className="text-[#00ff88]">=</span>
              </label>
              <input
                className="bg-[#0d1829] w-full border rounded-lg border-[#1e3a5f] focus:border-[#00ff88] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500"
                type="text"
                maxLength="100"
                required={true}
                placeholder="Your name..."
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            {/* Email input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-300">
                <span className="text-[#8b5cf6]">const</span> email <span className="text-[#00ff88]">=</span>
              </label>
              <input
                className="bg-[#0d1829] w-full border rounded-lg border-[#1e3a5f] focus:border-[#00ff88] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500"
                type="email"
                maxLength="100"
                required={true}
                placeholder="your@email.com"
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
              {error.email && (
                <p className="text-xs text-red-400 font-mono">
                  // Error: Invalid email format
                </p>
              )}
            </div>

            {/* Message textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-300">
                <span className="text-[#8b5cf6]">const</span> message <span className="text-[#00ff88]">=</span>
              </label>
              <textarea
                className="bg-[#0d1829] w-full border rounded-lg border-[#1e3a5f] focus:border-[#00ff88] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-500 resize-none"
                maxLength="500"
                name="message"
                required={true}
                placeholder="Write your message here..."
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                rows="5"
                value={userInput.message}
              />
            </div>
            
            {/* Submit section */}
            <div className="flex flex-col items-center gap-4 mt-2">
              {error.required && (
                <p className="text-xs text-red-400 font-mono">
                  // Error: All fields are required
                </p>
              )}
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 hover:gap-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00d4ff] px-8 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#0a0e1a] no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                role="button"
                onClick={handleSendMail}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#0a0e1a] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <TbMailForward size={20} />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
