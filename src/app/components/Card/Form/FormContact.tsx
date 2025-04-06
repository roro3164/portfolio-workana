"use client";
import { useState } from "react";
import ContactButton from "../../Main/ContactButton";
import VioletHover from "../hover/VioletHover";
import styles from "./Form.module.scss";

import { motion } from "framer-motion";

// 1. Importer useTranslation
import { useTranslation } from "react-i18next";

export const FormCard = () => {
  // 2. Récupérer la fonction t
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null as string | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred");
      }

      setStatus({ submitted: true, submitting: false, error: null });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, error: null });
      }, 5000);
    } catch (error: unknown) {
      let message = "An unknown error occurred";
      if (error instanceof Error) {
        message = error.message;
      }
      setStatus({
        submitted: false,
        submitting: false,
        error: message,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="lg:w-[80%] mx-auto">
        <VioletHover>
          <div className="bg-[#100E12]">
            <form onSubmit={handleSubmit} className={styles.glassContact}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.internBoxContact}
                // 3. Utiliser t("...") pour le placeholder
                placeholder={t("contactForm.firstName")}
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.internBoxContact}
                placeholder={t("contactForm.lastName")}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.internBoxContact}
                placeholder={t("contactForm.email")}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.internBoxContact} ${styles.message}`}
                placeholder={t("contactForm.message")}
                required
              ></textarea>

              <div className="mx-auto">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={status.submitting ? "opacity-50" : ""}
                >
                  <ContactButton className="text-xl" />
                </button>
              </div>

              {status.submitted && (
                <div className="text-green-500 mt-4 text-center">
                  {t("contactForm.success")}
                </div>
              )}

              {status.error && (
                <div className="text-red-500 mt-4 text-center">
                  {t("contactForm.error")} : {status.error}
                </div>
              )}
            </form>
          </div>
        </VioletHover>
      </div>
    </motion.div>
  );
};
