"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Mail, X, Send, ChevronDown, Smile } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasUserClosed, setHasUserClosed] = useState(false);

  useEffect(() => {
    if (hasUserClosed) return;
    const timer = setTimeout(() => {
      setIsWhatsappOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [hasUserClosed]);

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const url = `https://wa.me/919000473322?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage("");
  };

  const WhatsappIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.031 0C5.385 0 0 5.388 0 12.037c0 2.122.553 4.195 1.603 6.015L.178 24l6.103-1.603a12.001 12.001 0 005.75 1.472h.005c6.645 0 12.03-5.387 12.03-12.035C24.066 5.388 18.675 0 12.031 0zM12.03 21.854a10.02 10.02 0 01-5.114-1.39l-.367-.218-3.795.996 1.01-3.702-.239-.38a9.99 9.99 0 01-1.531-5.31c0-5.522 4.496-10.016 10.036-10.016 5.539 0 10.035 4.494 10.035 10.016 0 5.52-4.496 10.014-10.035 10.014zm5.51-7.536c-.302-.15-1.787-.88-2.064-.98-.277-.1-.479-.15-.681.15-.202.302-.782.98-1.008 1.182-.178.18-.356.2-.658.05-.302-.15-1.275-.47-2.43-1.5-.896-.803-1.503-1.794-1.68-2.096-.177-.302-.019-.465.132-.615.136-.135.302-.351.453-.526.15-.175.202-.301.302-.501.1-.2.05-.375-.025-.525-.075-.15-.681-1.642-.933-2.25-.246-.595-.496-.514-.681-.524-.176-.008-.378-.008-.58-.008s-.529.075-.806.375c-.277.3-1.058 1.034-1.058 2.52 0 1.485 1.083 2.92 1.234 3.12.15.2 2.128 3.25 5.154 4.553 2.122.91 2.913 1.042 3.993.876.852-.132 2.62-1.07 2.99-2.106.37-.103.37-1.926.26-2.106-.11-.18-.413-.28-.715-.43z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isWhatsappOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-2 w-[340px] glass-card !bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* WhatsApp Header */}
            <div className="bg-[#00a884] p-4 flex items-center justify-between text-white shadow-md z-20">
              <div className="flex items-center space-x-3">
                <WhatsappIcon className="w-6 h-6 text-white" />
                <span className="font-semibold text-[15px] tracking-wide">Let's chat on WhatsApp</span>
              </div>
              <button onClick={() => {
                setIsWhatsappOpen(false);
                setHasUserClosed(true);
              }} className="hover:bg-black/10 p-1.5 rounded-full transition-colors">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
            
            {/* WhatsApp Body (Matches Page Background via Glassmorphism) */}
            <div className="p-4 relative h-72 flex flex-col justify-start overflow-y-auto">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }} />
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 bg-white p-3 shadow-sm rounded-[10px] rounded-tl-none self-start max-w-[85%] mt-2 border border-gray-100"
              >
                <p className="text-[#111b21] text-[14px] leading-snug">Welcome to Codevate, How can we help you? :)</p>
                <p className="text-[#667781] text-[10px] text-right mt-1.5 font-medium">Just now</p>
              </motion.div>
            </div>

            {/* WhatsApp Input */}
            <form onSubmit={handleWhatsappSubmit} className="p-3 bg-[#f0f2f5] flex items-center space-x-2 z-20">
              <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
                <Smile className="w-6 h-6 text-[#8696a0] shrink-0 mr-2" />
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="flex-1 bg-transparent focus:outline-none text-[15px] text-[#111b21] placeholder-[#8696a0]"
                />
              </div>
              <button 
                type="submit" 
                disabled={!message.trim()} 
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm ${message.trim() ? 'bg-[#00a884] text-white hover:bg-[#008f6f]' : 'bg-white text-[#8696a0]'}`}
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!isWhatsappOpen && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="flex flex-col space-y-4 items-center mb-2"
            >
              <motion.a 
                href="tel:+919000473322"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="w-[52px] h-[52px] rounded-full bg-[#262626] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Phone className="w-6 h-6 text-white fill-white" />
              </motion.a>
              
              <motion.button 
                onClick={() => setIsWhatsappOpen(true)}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <WhatsappIcon className="w-7 h-7 text-white" />
              </motion.button>
              
              <motion.a 
                href="mailto:business@codevate.com"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                className="w-[52px] h-[52px] rounded-full bg-[#ff3b5c] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Main Toggle / Close Button */}
      {!isWhatsappOpen && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-50 ${isOpen ? 'bg-[#A881C2] hover:bg-[#966baf] rotate-90 scale-100' : 'exec-node-gradient hover:scale-110 rotate-0'}`}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white stroke-[3]" />
          ) : (
            <MessageCircle className="w-7 h-7 text-black fill-black" />
          )}
        </button>
      )}
      
      {/* If Whatsapp is open, show the purple X specifically to close it */}
      {isWhatsappOpen && (
        <button 
          onClick={() => {
            setIsWhatsappOpen(false);
            setIsOpen(false);
            setHasUserClosed(true);
          }}
          className="w-[60px] h-[60px] rounded-full bg-[#A881C2] hover:bg-[#966baf] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <X className="w-7 h-7 text-white stroke-[3]" />
        </button>
      )}
    </div>
  );
}
