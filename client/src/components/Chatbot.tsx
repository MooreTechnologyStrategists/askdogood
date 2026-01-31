import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const exampleQuestions = [
  'What products help with energy?',
  'Give me a smoothie recipe for glowing skin',
  'What is the Chyna White series about?',
  'How do I start a plant-based diet?',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hey! I’m your AskDoGood AI. Ask me about products, recipes, or anything on your mind.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
    setLoading(true);
    // Simulate AI response (replace with real API call)
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: `Sorry, I’m just a demo! But here’s what I’d say about: "${input}"` },
      ]);
      setLoading(false);
    }, 1200);
    setInput('');
  };

  return (
    <>
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-red-700 to-black text-white rounded-full p-4 shadow-lg hover:scale-105 transition-all"
          onClick={() => setOpen(true)}
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-gradient-to-br from-black via-red-900 to-red-800 border border-red-700 rounded-2xl shadow-2xl flex flex-col font-serif" >
          <div className="flex items-center justify-between px-4 py-3 border-b border-red-700 bg-black/80 rounded-t-2xl">
            <span className="font-bold text-lg text-red-200">AskDoGood AI</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-red-400 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 min-h-[180px] max-h-[260px]">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'bot' ? 'text-red-200' : 'text-white text-right'}>
                <span className={`inline-block px-3 py-2 rounded-xl mb-1 max-w-[90%] ${msg.from==='bot' ? 'bg-red-900/20' : 'bg-black/60'}`}>{msg.text}</span>
              </div>
            ))}
            {loading && <div className="text-red-300 italic">Thinking...</div>}
          </div>
          <div className="px-4 py-3 border-t border-red-700 bg-black/80 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-lg bg-black/60 border border-red-700 text-white placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Ask me anything..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? handleSend() : undefined}
                disabled={loading}
              />
              <button
                className="bg-gradient-to-br from-red-700 to-black text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-all disabled:opacity-50"
                onClick={handleSend}
                disabled={loading || !input.trim()}
              >Send</button>
            </div>
            <div className="mt-2 text-xs text-red-300">
              Try: {exampleQuestions.map((q, i) => (
                <button key={i} className="underline hover:text-white mr-2" onClick={() => setInput(q)}>{q}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
