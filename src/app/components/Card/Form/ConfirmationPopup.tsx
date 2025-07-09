"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import VioletHover from "../hover/VioletHover";
import styles from "./Form.module.scss";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl min-w-[300px] sm:min-w-[500px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
          <VioletHover>
            <div className="bg-[#100E12] rounded-xl">
              <div className={`${styles.glassContact} relative`}>
                {/* Bouton de fermeture */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10 bg-black/30 rounded-full p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Conteneur titre + points avec bordure */}
                <div className="border border-white/25 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 bg-black/20">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                    {t("popup.title")}
                  </h3>
                  
                  <div className="flex justify-center">
                    <div className="flex space-x-2 sm:space-x-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-bounce [animation-delay:-0.3s] [animation-duration:0.6s]" style={{backgroundColor: '#5D58A3'}}></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-bounce [animation-delay:-0.15s] [animation-duration:0.6s]" style={{backgroundColor: '#5D58A3'}}></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-bounce [animation-duration:0.6s]" style={{backgroundColor: '#5D58A3'}}></div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="text-center px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                  <p className="text-gray-300 leading-relaxed text-base lg:text-lg max-w-md mx-auto">
                    {t("popup.message")}
                  </p>
                </div>
              </div>
            </div>
          </VioletHover>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationPopup;