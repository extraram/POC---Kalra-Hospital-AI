import { useState } from "react";
import { Bot, X, Send, Paperclip, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "bot", text: "Hello! I'm Kalra AI Assistant. How can I help you today? You can ask me to book an appointment, check insurance, or find a doctor." }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setChatHistory(prev => [...prev, { role: "user", text: message }]);
    const currentMsg = message;
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      let response = "I'm connecting you with our support team or you can try asking about our specific departments and health packages.";
      
      const lowerMsg = currentMsg.toLowerCase();
      if (lowerMsg.includes("appointment") || lowerMsg.includes("book") || lowerMsg.includes("schedule")) {
        response = "I can help you book an appointment directly through our Smart Scheduling system. Could you please specify which department or doctor you'd like to visit?";
      } else if (lowerMsg.includes("chest pain") || lowerMsg.includes("heart attack") || lowerMsg.includes("stroke")) {
        response = "⚠️ URGENT: Based on your symptoms (chest pain/severe condition), this could be a medical emergency. Please visit our Emergency Room immediately or call 1066. Our cardiology and emergency triage teams are on standby.";
      } else if (lowerMsg.includes("insurance")) {
        response = "We accept all major health insurance providers. You can check our full list on the Insurance Partners page or upload your card here for verification.";
      } else if (lowerMsg.includes("emergency")) {
        response = "If this is a medical emergency, please call 1066 immediately. Our emergency response team is available 24/7.";
      } else if (lowerMsg.includes("fever") || lowerMsg.includes("headache")) {
        response = "For routine symptoms like fever or headache, I recommend using our AI Symptom Checker or booking a consultation with our General Medicine department.";
      }

      setChatHistory(prev => [...prev, { role: "bot", text: response }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: "fixed",
              right: "1.5rem",
              bottom: "1.5rem",
              left: "auto",
              top: "auto",
              background: "var(--gradient-primary-btn)",
            }}
            className="z-50 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center group ai-glow"
          >
            <Bot size={28} />
            <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with AI Assistant
            </span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: "fixed",
              right: "1rem",
              bottom: "1rem",
              left: "auto",
              top: "auto",
              width: "min(360px, calc(100vw - 2rem))",
              maxHeight: "min(620px, calc(100vh - 2rem))",
            }}
            className="z-50 ai-glass ai-glow rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="ai-glass-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Kalra AI Assistant</h3>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online 24/7
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white transition-colors">
                  <Minimize2 size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 min-h-[260px] max-h-[400px] p-4 overflow-y-auto bg-white/40 flex flex-col gap-4">
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      chat.role === 'user'
                        ? 'text-white rounded-br-sm'
                        : 'bg-white/80 backdrop-blur border border-white/60 text-slate-800 rounded-bl-sm shadow-sm'
                    }`}
                    style={
                      chat.role === 'user'
                        ? { background: 'var(--gradient-primary-btn)' }
                        : undefined
                    }
                  >
                    {chat.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/50 bg-white/60 backdrop-blur">
              <div className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2 border border-white/70">
                <button className="text-slate-400 hover:text-[var(--ai-indigo)] transition-colors">
                  <Paperclip size={18} />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-sm px-2 text-slate-800"
                />
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="text-[var(--ai-indigo)] hover:text-[var(--ai-teal-foreground)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-400 font-medium">Powered by Kalra Health AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
