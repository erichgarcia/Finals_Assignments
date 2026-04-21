import { useState } from 'react';
import '../styles/ContactForm.css'
import { useTheme } from '../context/ThemeContext';
import SubmissionModal from './SubmissionModal';

interface FormData {
  name: string;
  message: string;
}

export default function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionData, setSubmissionData] = useState<FormData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name.trim() && formData.message.trim()) {
      setSubmissionData(formData);
      setIsModalOpen(true);
      setFormData({ name: '', message: '' });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmissionData(null);
  };

  return (
    <>
      <section className="contact-form-section">
        <h2 className="contact-form-heading">Send a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Sender Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      {isModalOpen && submissionData && (
        <SubmissionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          submissionData={submissionData}
        />
      )}
    </>
  );
}
