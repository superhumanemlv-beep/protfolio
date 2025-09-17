import React, { useState } from 'react';
import { Send, Calendar, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Internship/Analytics Role Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company/Role: ${formData.company || 'Not specified'}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:midhulmsofficial@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Let's discuss an <span className="text-blue-400">internship</span> or <span className="text-blue-400">analytics role</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-12 leading-relaxed">
          I am available for internships in France (MSc in progress at EMLV). If you're hiring for analytics, product validation, or BI roles — let's talk.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name & role interested in (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Brief: the challenge you want me to solve (1–2 lines)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Request 15-min Intro</span>
              </button>
              
              {isSubmitted && (
                <p className="text-blue-400 text-center">
                  Thanks — I'll respond within 48 hours. For urgent queries, book a slot on my calendar.
                </p>
              )}
            </form>
            
            <p className="text-sm text-gray-400 mt-6 text-center">
              Trusted experience: <span className="text-blue-400">UST (Intel)</span>, <span className="text-blue-400">Knowley International</span> — 5+ years • 50% defect reduction
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-blue-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-300">Currently in Paris, France</p>
              <p className="text-gray-400 text-sm">Available for on-site and remote positions</p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-blue-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Quick Call</h3>
              </div>
              <p className="text-gray-300 mb-4">Book a 15-minute intro call to discuss opportunities</p>
              <button className="text-blue-400 hover:text-white transition-colors font-medium">
                Schedule Call →
              </button>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="https://linkedin.com/in/midhul-m-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  🔗 LinkedIn
                </a>
                <a 
                  href="https://github.com/midhulms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  🔗 GitHub
                </a>
                <a 
                  href="https://drive.google.com/file/d/1gwTGWl9ywqYjfIfKzWkfRO0za_QeeyoJ/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  🔗 Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;