"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ContactModal = ({ isOpen, onClose, type = "individual" }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, company, message } = formData;
    
    if (!name || !email || !message) {
      alert(t("contactModal.error"));
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(
        `${t("contactModal.subject")} - ${type === "business" ? t("contactModal.business") : t("contactModal.individual")} - ${name}`
      );
      
      const body = encodeURIComponent(`
${t("contactModal.fields.name")}: ${name}
${t("contactModal.fields.email")}: ${email}
${t("contactModal.fields.phone")}: ${phone}
${company ? `${t("contactModal.fields.company")}: ${company}` : ""}
${t("contactModal.fields.type")}: ${type === "business" ? t("contactModal.business") : t("contactModal.individual")}

${t("contactModal.fields.message")}:
${message}
      `);
      
      const mailtoLink = `mailto:alberto@galileocapital.io?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert(t("contactModal.errorSending"));
    }
    
    setIsSubmitting(false);
  };

  // Handle backdrop click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {t("contactModal.title")}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full p-1"
              aria-label="Close"
              title="Cerrar (ESC)"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">{t("contactModal.success")}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Type indicator */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>{t("contactModal.fields.type")}:</strong> {type === "business" ? t("contactModal.business") : t("contactModal.individual")}
              </p>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactModal.fields.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contactModal.placeholders.name")}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactModal.fields.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contactModal.placeholders.email")}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactModal.fields.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder={t("contactModal.placeholders.phone")}
              />
            </div>

            {/* Company (only for business) */}
            {type === "business" && (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contactModal.fields.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t("contactModal.placeholders.company")}
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactModal.fields.message")} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder={t("contactModal.placeholders.message")}
              />
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="pt-4">
              {/* Help text */}
              <p className="text-xs text-gray-500 mb-3 text-center">
                {t("contactModal.closeHint")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="sm:w-1/3 order-2 sm:order-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md font-medium transition-all duration-200 hover:bg-gray-300"
              >
{t("contactModal.cancel")}
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="sm:w-2/3 order-1 sm:order-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-2 px-4 rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contactModal.sending") : t("contactModal.send")}
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;