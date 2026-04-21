import { useTheme } from '../context/ThemeContext';
import '../styles/SubmissionModal.css';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissionData: {
    name: string;
    message: string;
  };
}

export default function SubmissionModal({ isOpen, onClose, submissionData }: SubmissionModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">✨ Message Received!</h3>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="submission-details">
            <div className="detail-group">
              <label className="detail-label">From:</label>
              <div className="detail-value sender-name">{submissionData.name}</div>
            </div>
            
            <div className="detail-group">
              <label className="detail-label">Message:</label>
              <div className="detail-value message-content">{submissionData.message}</div>
            </div>
          </div>
          
          <div className="success-message">
            <p>🎉 Thank you for your message! We'll get back to you soon.</p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
