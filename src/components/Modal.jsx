// Modal.jsx
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 28, mass: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
  },
};

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  closeOnBackdrop = true,
  showCloseButton = true,
  footer,
}) => {
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const titleId = useRef(
    `modal-title-${Math.random().toString(36).slice(2, 9)}`,
  );
  const descId = useRef(`modal-desc-${Math.random().toString(36).slice(2, 9)}`);

  // Lock body scroll while open (preserves scrollbar width to avoid layout shift)
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
    };
  }, [isOpen]);

  // Focus management: save trigger, focus dialog on open, restore on close
  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement;
    // Focus first focusable element, fallback to the dialog itself
    requestAnimationFrame(() => {
      const node = dialogRef.current;
      if (!node) return;
      const focusable = node.querySelectorAll(FOCUSABLE_SELECTOR);
      const target = focusable[0] || node;
      target.focus({ preventScroll: true });
    });
    return () => {
      if (previouslyFocusedRef.current?.focus) {
        previouslyFocusedRef.current.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  // Keyboard: ESC to close, Tab to trap focus
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (typeof document === "undefined") return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto"
          onClick={closeOnBackdrop ? onClose : undefined}
          aria-hidden="true"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId.current : undefined}
            aria-describedby={description ? descId.current : undefined}
            tabIndex={-1}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${sizes[size]} my-auto rounded-2xl
              bg-gradient-to-b from-neutral-900/95 to-black/95
              border border-white/10 shadow-2xl shadow-black/50
              ring-1 ring-white/5
              focus:outline-none focus:ring-2 focus:ring-white/20`}
          >
            {/* Subtle top highlight */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl
                bg-gradient-to-r from-transparent via-white/20 to-transparent"
              aria-hidden="true"
            />

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center
                  rounded-full text-white/60 transition
                  hover:bg-white/10 hover:text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            {(title || description) && (
              <div className="px-8 pt-8 pb-4 pr-16">
                {title && (
                  <h2
                    id={titleId.current}
                    className="text-2xl font-bold tracking-tight text-white"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id={descId.current}
                    className="mt-2 text-sm text-white/60 leading-relaxed"
                  >
                    {description}
                  </p>
                )}
              </div>
            )}

            <div
              className={`px-8 text-white/80 ${
                title || description ? "pb-8" : "py-8"
              } ${footer ? "pb-6" : ""}`}
            >
              {children}
            </div>

            {footer && (
              <div
                className="flex items-center justify-end gap-3 px-8 py-5
                  border-t border-white/10 rounded-b-2xl bg-white/[0.02]"
              >
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
